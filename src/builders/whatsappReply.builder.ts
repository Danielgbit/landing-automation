import { Service } from '@/services/services/services.service'
import { AppointmentInfo } from '@/types/appointments.types'
import { PrimaryIntent } from '@/services/ai/intent.service'

// ===============================
// Types
// ===============================

type IntentContext = {
    primary_intent: PrimaryIntent
    secondary_intent?: 'agendar_cita'
    mentioned_service?: string
    confidence: 'low' | 'medium' | 'high'
}

type BuildReplyInput = {
    services: Service[]
    matchedService?: Service
    appointment: AppointmentInfo | null
    intent: IntentContext
}

// ===============================
// Internal helpers (UX rules)
// ===============================

function isGreeting(intent: IntentContext): boolean {
    /**
     * Consideramos saludo cuando:
     * - La intención es info_servicios (fallback típico de la IA)
     * - La confianza es baja
     * - No hay servicio mencionado
     */
    return (
        intent.primary_intent === 'info_servicios' &&
        intent.confidence === 'low' &&
        !intent.mentioned_service
    )
}

// ===============================
// Builder (UX only)
// ===============================

export function buildWhatsAppReply({
    services,
    matchedService,
    appointment,
    intent
}: BuildReplyInput): string {
    /**
     * 1️⃣ Caso: cita creada → NO catálogo
     */
    if (appointment) {
        return `📅 *Cita creada*
🧾 Servicio: ${appointment.service}
🗓 Fecha: ${appointment.date}
⏰ Hora: ${appointment.time}

Si deseas modificarla o tienes preguntas, escríbenos 😊`
    }

    /**
     * 2️⃣ Caso: saludo (MUY IMPORTANTE)
     * Un saludo NO debe disparar el catálogo
     */
    if (isGreeting(intent)) {
        return `👋 ¡Hola! Bienvenido/a a Focuside Studio.

¿En qué podemos ayudarte hoy?
• Consultar servicios
• Ver precios
• Agendar una cita`
    }

    /**
     * 3️⃣ Caso: pregunta explícita por servicios (catálogo)
     */
    if (intent.primary_intent === 'info_servicios') {
        const servicesText = services
            .map(
                (service) =>
                    `• ${service.name} – $${service.price} (${service.duration_minutes} min)`
            )
            .join('\n')

        return `✨ *Nuestros servicios disponibles:*
${servicesText}`
    }

    /**
     * 4️⃣ Caso: pregunta por precio de un servicio específico
     */
    if (
        intent.primary_intent === 'info_precios' &&
        matchedService
    ) {
        return `💰 *${matchedService.name}*
Precio: $${matchedService.price}
Duración: ${matchedService.duration_minutes} min

¿Deseas agendar este servicio?`
    }

    /**
     * 5️⃣ Caso: intención de agendar sin servicio claro
     */
    if (intent.primary_intent === 'agendar_cita') {
        return `📅 Perfecto, podemos agendar tu cita.
Dime qué servicio deseas y te ayudo enseguida.`
    }

    /**
     * 6️⃣ Fallback humano (último recurso)
     */
    return `👋 Hola, ¿en qué podemos ayudarte?
Puedes preguntarnos por servicios, precios o agendar una cita.`
}
