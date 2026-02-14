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
        // 2️⃣ Intent
        // ===============================
        const intentResult = await detectIntent(input.message)

        // ===============================
        // 3️⃣ Servicios
        // ===============================
        const services = await getActiveServices()

        if (!services?.length) {
            const reply = '❌ En este momento no hay servicios disponibles.'
            return { reply }
        }

        const normalizedMessage = normalizeText(input.message)

        // ===============================
        // 4️⃣ MATCH FLEXIBLE (MUY IMPORTANTE)
        // ===============================
        let matchedService: Service | undefined

        matchedService = services.find(service => {

            const serviceName = normalizeText(service.name)

            const nameMatch =
                normalizedMessage.includes(serviceName) ||
                serviceName.includes(normalizedMessage)

            const aliasMatch =
                service.aliases?.some(alias => {
                    const normalizedAlias = normalizeText(alias)
                    return normalizedMessage.includes(normalizedAlias)
                })

            return nameMatch || aliasMatch
        })

        // fallback a memoria
        if (!matchedService && conversationState.selected_service_id) {
            matchedService = services.find(
                s => s.id === conversationState.selected_service_id
            )
        }

        // ===============================
        // 5️⃣ MANEJO DE ESTADOS SIMPLE
        // ===============================
        const step = conversationState.current_step ?? 'idle'

        // Si detecta servicio nuevo
        if (matchedService && step === 'idle') {
            await updateConversationState(input.phone, {
                current_step: 'confirming_service',
                selected_service_id: matchedService.id,
                last_intent: intentResult?.primary_intent ?? null
            })
        }

        // Confirmación de servicio
        if (
            step === 'confirming_service' &&
            intentResult?.primary_intent === 'confirmar'
        ) {
            await updateConversationState(input.phone, {
                current_step: 'asking_date'
            })
        }

        // Usuario responde fecha
        if (step === 'asking_date') {
            await updateConversationState(input.phone, {
                current_step: 'asking_time'
            })
        }

        // Usuario responde hora → CREAR CITA
        let appointment = null

        if (step === 'asking_time') {
            if (conversationState.selected_service_id) {

                const serviceToBook = services.find(
                    s => s.id === conversationState.selected_service_id
                )

                if (serviceToBook) {
                    appointment = await createDemoAppointment(
                        input.phone,
                        serviceToBook
                    )

                    await resetConversationState(input.phone)
                }
            }
        }

        // ===============================
        // 6️⃣ RESPUESTA UX
        // ===============================
        const reply = buildWhatsAppReply({
            services,
            matchedService,
            appointment,
            intent: intentResult,
            conversationState
        })

        // ===============================
        // 7️⃣ LOG OUTBOUND
        // ===============================
        await logOutboundMessage({
            phone: input.phone,
            message: reply,
            source: input.source,
            waba_id: input.waba_id,
            phone_number_id: input.phone_number_id,
            intent: intentResult?.primary_intent ?? 'unknown'
        })

        return {
            reply,
            intent: intentResult?.primary_intent,
            appointment
        }

    } catch (error) {

        console.error('WhatsApp handler error:', error)

        return {
            reply: '⚠️ Ocurrió un error inesperado. Intenta nuevamente.',
            ignored: true,
            reason: 'Unhandled error'
        }
    }
}
