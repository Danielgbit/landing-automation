import { detectIntent } from '@/services/ai/intent.service'
import { getActiveServices, Service } from '@/services/services/services.service'
import { createDemoAppointment } from '@/services/appointments/appointments.service'
import { buildWhatsAppReply } from '@/builders/whatsappReply.builder'
import {
    getConversationState,
    updateConversationState,
    resetConversationState
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
// Use Case (Product logic)
// ===============================

export async function handleWhatsAppMessage(
    input: WhatsAppInput
): Promise<WhatsAppResult> {
    /**
     * 🚫 Regla de producto
     * El flujo WEB no genera respuestas por WhatsApp
     */
    if (input.source === 'web') {
        return {
            ignored: true,
            reason: 'Message from web flow. No WhatsApp response.'
        }
    }

    // ===============================
    // 0️⃣ LOG INBOUND (EVENTO)
    // ===============================
    await logInboundMessage({
        phone: input.phone,
        message: input.message,
        source: input.source,
        waba_id: input.waba_id,
        phone_number_id: input.phone_number_id
    })

    // ===============================
    // 1️⃣ Estado conversacional (MEMORIA)
    // ===============================
    const conversationState = await getConversationState(
        input.phone
    )

    // ===============================
    // 2️⃣ IA – Intent
    // ===============================
    const intentResult = await detectIntent(input.message)

    // ===============================
    // 3️⃣ Servicios activos (DB)
    // ===============================
    const services = await getActiveServices()

    if (services.length === 0) {
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
    // 4️⃣ Resolver servicio (mensaje O memoria)
    // ===============================
    let matchedService: Service | undefined

    if (intentResult.mentioned_service) {
        const normalized =
            intentResult.mentioned_service.toLowerCase()

        matchedService = services.find((service) => {
            if (
                service.name
                    .toLowerCase()
                    .includes(normalized)
            ) {
                return true
            }

            if (service.aliases?.length) {
                return service.aliases.some((alias) =>
                    alias
                        .toLowerCase()
                        .includes(normalized)
                )
            }

            return false
        })
    }

    if (
        !matchedService &&
        conversationState.selected_service_id
    ) {
        matchedService = services.find(
            (service) =>
                service.id ===
                conversationState.selected_service_id
        )
    }

    // ===============================
    // 5️⃣ Actualizar estado
    // ===============================
    if (matchedService) {
        await updateConversationState(input.phone, {
            current_step: 'service_selected',
            selected_service_id: matchedService.id,
            last_intent: intentResult.primary_intent
        })
    }

    // ===============================
    // 6️⃣ Decisión determinística (AGENDAR)
    // ===============================
    let appointment = null

    if (
        intentResult.primary_intent === 'agendar_cita' &&
        intentResult.confidence === 'high' &&
        matchedService
    ) {
        appointment = await createDemoAppointment(
            input.phone,
            matchedService
        )

        await resetConversationState(input.phone)
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
    // 8️⃣ LOG OUTBOUND (DECISIÓN)
    // ===============================
    await logOutboundMessage({
        phone: input.phone,
        message: reply,
        source: input.source,
        waba_id: input.waba_id,
        phone_number_id: input.phone_number_id,
        intent: intentResult.primary_intent
    })

    // ===============================
    // 9️⃣ Resultado final
    // ===============================
    return {
        reply,
        intent: intentResult.primary_intent,
        appointment,
        meta: {
            source: input.source,
            waba_id: input.waba_id,
            phone_number_id: input.phone_number_id
        }
    }
}
