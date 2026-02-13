import { detectIntent } from '@/services/ai/intent.service'
import { getActiveServices, Service } from '@/services/services/services.service'
import { createDemoAppointment } from '@/services/appointments/appointments.service'
import { buildWhatsAppReply } from '@/builders/whatsappReply.builder'
import {
    getConversationState,
    updateConversationState,
    resetConversationState,
    incrementRequestCount,
    resetBurstCounter
} from '@/services/conversations/conversationState.service'
import {
    logInboundMessage,
    logOutboundMessage
} from '@/services/conversations/conversationLog.service'

// ===============================
// Types
// ===============================

type WhatsAppInput = {
    phone: string
    message: string
    source: 'whatsapp' | 'web'
    waba_id: string
    phone_number_id: string
}

export type WhatsAppResult = {
    reply?: string
    intent?: string
    appointment?: any
    ignored?: boolean
    reason?: string
    meta?: {
        source: string
        waba_id: string
        phone_number_id: string
    }
}

// ===============================
// Helpers
// ===============================

function normalizeText(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
}

// ===============================
// Use Case
// ===============================

export async function handleWhatsAppMessage(
    input: WhatsAppInput
): Promise<WhatsAppResult> {

    // 🚫 Regla de producto
    if (input.source === 'web') {
        return {
            ignored: true,
            reason: 'Message from web flow. No WhatsApp response.'
        }
    }

    try {

        // ===============================
        // 0️⃣ LOG INBOUND
        // ===============================
        await logInboundMessage({
            phone: input.phone,
            message: input.message,
            source: input.source,
            waba_id: input.waba_id,
            phone_number_id: input.phone_number_id
        })

        // ===============================
        // 1️⃣ Estado conversacional
        // ===============================
        const conversationState = await getConversationState(input.phone)

        if (!conversationState) {
            throw new Error('Conversation state not found')
        }

        // ===============================
        // 1.5️⃣ Rate Limiting (Burst Safe)
        // ===============================
        const RATE_LIMIT_MS = 60000
        const MAX_REQUESTS = 5
        const now = new Date()

        const lastRequest = conversationState.last_request_at
            ? new Date(conversationState.last_request_at)
            : null

        if (!lastRequest || now.getTime() - lastRequest.getTime() > RATE_LIMIT_MS) {

            await resetBurstCounter(input.phone)

        } else {

            if (conversationState.request_count >= MAX_REQUESTS) {

                const reply =
                    '👋 Esta es una versión demostrativa del asistente inteligente. Para garantizar estabilidad, tiene un límite temporal de mensajes por minuto. Si deseas una versión sin límites para tu negocio, puedo explicarte cómo funciona 😉'

                await logOutboundMessage({
                    phone: input.phone,
                    message: reply,
                    source: input.source,
                    waba_id: input.waba_id,
                    phone_number_id: input.phone_number_id,
                    intent: 'rate_limited'
                })

                return {
                    reply,
                    ignored: true,
                    reason: 'Rate limit exceeded'
                }
            }

            // 🔥 Incremento atómico (NO pasar contador actual)
            await incrementRequestCount(input.phone)
        }

        // ===============================
        // 2️⃣ IA – Intent (con fallback seguro)
        // ===============================
        let intentResult

        try {
            intentResult = await detectIntent(input.message)
        } catch (error) {
            console.error('Intent detection failed:', error)

            return {
                reply: '🤖 Lo siento, tuve un problema procesando tu mensaje. ¿Puedes intentar nuevamente?',
                ignored: true,
                reason: 'Intent detection failed'
            }
        }

        // ===============================
        // 3️⃣ Servicios activos
        // ===============================
        const services = await getActiveServices()

        if (!services?.length) {

            const reply =
                '❌ En este momento no hay servicios disponibles. Por favor intenta más tarde.'

            await logOutboundMessage({
                phone: input.phone,
                message: reply,
                source: input.source,
                waba_id: input.waba_id,
                phone_number_id: input.phone_number_id,
                intent: 'no_services'
            })

            return { reply }
        }

        // ===============================
        // 4️⃣ Resolver servicio
        // ===============================
        let matchedService: Service | undefined
        const normalizedMention = intentResult?.mentioned_service
            ? normalizeText(intentResult.mentioned_service)
            : null

        if (normalizedMention) {
            matchedService = services.find(service => {
                const nameMatch =
                    normalizeText(service.name).includes(normalizedMention)

                const aliasMatch =
                    service.aliases?.some(alias =>
                        normalizeText(alias).includes(normalizedMention)
                    )

                return nameMatch || aliasMatch
            })
        }

        // Fallback a memoria
        if (!matchedService && conversationState.selected_service_id) {
            matchedService = services.find(
                service => service.id === conversationState.selected_service_id
            )
        }

        // ===============================
        // 5️⃣ Actualizar estado
        // ===============================
        if (matchedService) {
            await updateConversationState(input.phone, {
                current_step: 'service_selected',
                selected_service_id: matchedService.id,
                last_intent: intentResult?.primary_intent ?? null
            })
        }

        // ===============================
        // 6️⃣ Decisión determinística (AGENDAR)
        // ===============================
        let appointment = null

        if (
            intentResult?.primary_intent === 'agendar_cita' &&
            intentResult?.confidence === 'high' &&
            matchedService
        ) {
            try {
                appointment = await createDemoAppointment(
                    input.phone,
                    matchedService
                )

                await resetConversationState(input.phone)

            } catch (error) {
                console.error('Appointment creation failed:', error)
            }
        }

        // ===============================
        // 7️⃣ UX
        // ===============================
        const reply = buildWhatsAppReply({
            services,
            matchedService,
            appointment,
            intent: intentResult
        })

        // ===============================
        // 8️⃣ LOG OUTBOUND
        // ===============================
        await logOutboundMessage({
            phone: input.phone,
            message: reply,
            source: input.source,
            waba_id: input.waba_id,
            phone_number_id: input.phone_number_id,
            intent: intentResult?.primary_intent ?? 'unknown'
        })

        // ===============================
        // 9️⃣ Resultado final
        // ===============================
        return {
            reply,
            intent: intentResult?.primary_intent,
            appointment,
            meta: {
                source: input.source,
                waba_id: input.waba_id,
                phone_number_id: input.phone_number_id
            }
        }

    } catch (error) {

        console.error('WhatsApp handler error:', error)

        return {
            reply: '⚠️ Ocurrió un error inesperado. Por favor intenta nuevamente.',
            ignored: true,
            reason: 'Unhandled error'
        }
    }
}
