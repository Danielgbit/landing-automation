import { Service } from '@/services/services.service'
import { AppointmentInfo } from '@/types/appointments.types'

// ===============================
// Types
// ===============================

type IntentContext = {
    primary_intent: string
    secondary_intent?: string
    mentioned_service?: string
    confidence: 'low' | 'medium' | 'high'
}

type BuildReplyInput = {
    services: Service[]
    appointment: AppointmentInfo | null
    signals: {
        mentionsPrice: boolean
        mentionsBooking: boolean
    }
    intent: IntentContext
}

// ===============================
// Builder
// ===============================

export function buildWhatsAppReply({
    services,
    appointment,
    signals,
    intent
}: BuildReplyInput): string {
    const servicesText = services
        .map(
            (service) =>
                `• ${service.name} – $${service.price} (${service.duration_minutes} min)`
        )
        .join('\n')

    let reply = `✨ *Nuestros servicios disponibles:*\n${servicesText}`

    // ===============================
    // Caso 1️⃣ Cita creada
    // ===============================
    if (appointment) {
        reply += `

📅 *Cita creada*
🧾 Servicio: ${appointment.service}
🗓 Fecha: ${appointment.date}
⏰ Hora: ${appointment.time}

Si deseas modificarla o tienes preguntas, escríbenos 😊
`
        return reply
    }

    // ===============================
    // Caso 2️⃣ Precio consultado
    // ===============================
    if (
        intent.primary_intent === 'info_precios' ||
        signals.mentionsPrice
    ) {
        reply += `

💰 Los precios están indicados junto a cada servicio.
`
    }

    // ===============================
    // Caso 3️⃣ Intención de agendar detectada
    // ===============================
    if (
        intent.primary_intent === 'agendar_cita' ||
        intent.secondary_intent === 'agendar_cita' ||
        signals.mentionsBooking
    ) {
        reply += `

📅 Si deseas agendar una cita, escríbenos claramente *"quiero agendar"* y te ayudamos de inmediato.
`
    }

    // ===============================
    // Caso 4️⃣ Fallback neutro
    // ===============================
    if (
        !signals.mentionsPrice &&
        !signals.mentionsBooking &&
        intent.primary_intent === 'info_servicios'
    ) {
        reply += `

📲 Escríbenos si deseas más información o agendar una cita.
`
    }

    return reply
}
