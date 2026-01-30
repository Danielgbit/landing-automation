import { detectIntent } from '@/services/ai/intent.service'
import { getActiveServices, Service } from '@/services/services/services.service'
import { createDemoAppointment } from '@/services/appointments/appointments.service'
import { buildWhatsAppReply } from '@/builders/whatsappReply.builder'

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
    // 1️⃣ IA – Intent + contexto
    // ===============================
    const intentResult = await detectIntent(input.message)

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
    // 3️⃣ Resolver servicio mencionado (match controlado)
    // ===============================
    let matchedService: Service | undefined

    if (intentResult.mentioned_service) {
        const normalizedMention =
            intentResult.mentioned_service.toLowerCase()

        matchedService = services.find((service) => {
            // Match por nombre
            if (
                service.name
                    .toLowerCase()
                    .includes(normalizedMention)
            ) {
                return true
            }

            // Match por aliases
            if (service.aliases?.length) {
                return service.aliases.some((alias) =>
                    alias
                        .toLowerCase()
                        .includes(normalizedMention)
                )
            }

            return false
        })
    }

    // ===============================
    // 4️⃣ Decisión determinística
    // ===============================
    let appointment = null

    /**
     * Regla estricta:
     * SOLO se agenda si:
     * - la intención primaria es agendar_cita
     * - la confianza es alta
     * - existe un servicio claramente identificado
     */
    if (
        intentResult.primary_intent === 'agendar_cita' &&
        intentResult.confidence === 'high' &&
        matchedService
    ) {
        appointment = await createDemoAppointment(
            input.phone,
            matchedService
        )
    }

    // ===============================
    // 5️⃣ Construcción de respuesta (UX)
    // ===============================
    const reply = buildWhatsAppReply({
        services,
        matchedService,
        appointment,
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
