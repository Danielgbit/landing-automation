import { detectIntent } from '@/services/ai/intent.service'
import { getActiveServices } from '@/services/services.service'
import { createDemoAppointment } from '@/services/appointments.service'
import { extractMessageSignals } from '@/helpers/ai/whatsapp/message-signals.helpers'
import { buildWhatsAppReply } from '@/helpers/ai/whatsapp/whatsappReply.helpers'

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
// Use Case
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
    // 1️⃣ IA – Intent + contexto
    // ===============================
    const intentResult = await detectIntent(input.message)

    /**
     * intentResult ejemplo:
     * {
     *   primary_intent: 'info_precios',
     *   secondary_intent: 'agendar_cita',
     *   mentioned_service: 'corte',
     *   confidence: 'high'
     * }
     */

    // ===============================
    // 2️⃣ Servicios activos (DB)
    // ===============================
    const services = await getActiveServices()

    if (services.length === 0) {
        return {
            reply:
                '❌ En este momento no hay servicios disponibles. Por favor intenta más tarde.'
        }
    }

    // ===============================
    // 3️⃣ Señales UX (fallback semántico)
    // ===============================
    const signals = extractMessageSignals(input.message)

    // ===============================
    // 4️⃣ Decisión determinística
    // ===============================
    let appointment = null

    /**
     * Regla estricta:
     * SOLO se agenda si la intención primaria es explícita
     * y la IA tiene alta confianza.
     */
    if (
        intentResult.primary_intent === 'agendar_cita' &&
        intentResult.confidence === 'high'
    ) {
        appointment = await createDemoAppointment(
            input.phone,
            services[0] // DEMO: primer servicio
        )
    }

    // ===============================
    // 5️⃣ Construcción de respuesta (UX)
    // ===============================
    const reply = buildWhatsAppReply({
        services,
        appointment,
        signals,
        intent: intentResult
    })

    // ===============================
    // 6️⃣ Resultado final
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
