import { Service } from '@/services/services/services.service'
import { AppointmentInfo } from '@/types/appointments.types'
import { PrimaryIntent } from '@/services/ai/intent.service'
import { ConversationState } from '@/services/conversations/conversationState.service'

// ===============================
// Types
// ===============================

type IntentContext = {
    primary_intent: PrimaryIntent
    secondary_intent?: 'agendar_cita'
    mentioned_service?: string
    mentioned_category?: string
    confidence: 'low' | 'medium' | 'high'
}

// La interfaz ConversationState se importa ahora del servicio centralizado.

type BuildReplyInput = {
    services: Service[]
    matchedService?: Service
    appointment: AppointmentInfo | null
    intent: IntentContext
    conversationState?: ConversationState
}

// ===============================
// Helpers
// ===============================

function isGreeting(intent: IntentContext): boolean {
    return (
        intent.primary_intent === 'info_servicios' &&
        intent.confidence === 'low' &&
        !intent.mentioned_service
    )
}

// ===============================
// MAIN BUILDER
// ===============================

export function buildWhatsAppReply({
    services,
    matchedService,
    appointment,
    intent,
    conversationState
}: BuildReplyInput): string {

    const step = conversationState?.current_step ?? 'idle'

    // ==========================================
    // 1️⃣ INTENCIONES GLOBALES (PRIORIDAD ABSOLUTA)
    // ==========================================

    if (intent.primary_intent === 'cancelar_cita') {
        return `❌ Entiendo perfectamente.

¿Estás seguro de que deseas cancelar y perder tu espacio reservado? 

Para confirmar la cancelación, escribe:
*CANCELAR*

Si prefieres no perder tu lugar, también podemos *REPROGRAMAR* para otra fecha que te quede mejor.`
    }

    if (intent.primary_intent === 'reagendar_cita') {
        return `🔄 Claro, conservaremos tu espacio pero en un nuevo horario.

¿Para qué nueva fecha te gustaría reprogramar?`
    }

    // ==========================================
    // 2️⃣ CITA CREADA
    // ==========================================

    if (appointment) {
        return `🎉 *¡Felicidades! Tu cita está confirmada.*
🧾 Servicio: ${appointment.service}
🗓 Fecha: ${appointment.date}
⏰ Hora: ${appointment.time}

👉 *Importante:* Nuestros espacios son limitados. Si no puedes asistir, avísanos con tiempo para ceder el lugar a otra persona.

¡Nos vemos pronto! 😊`
    }

    // ==========================================
    // 3️⃣ FLUJO POR ESTADO
    // ==========================================

    if (step === 'confirming_service') {

        if (intent.primary_intent === 'confirmar') {
            return `📅 ¡Excelente elección! 👌
Para asegurar tu espacio, ¿qué fecha prefieres para tu cita?`
        }

        if (intent.primary_intent === 'negar') {
            return `No hay problema 😊
Tenemos otras opciones que podrían interesarte. ¿Te gustaría ver el menú de servicios?`
        }

        return `Este servicio es muy solicitado. ¿Deseas asegurar tu cita ahora mismo? 😊 (Responde *SÍ* para continuar)`
    }

    if (step === 'asking_date') {
        return `⏰ ¡Casi listo!

Solo falta un detalle: ¿A qué hora te gustaría agendar?`
    }

    if (step === 'asking_time') {
        return `✅ Estoy verificando disponibilidad...

Un momento por favor ⏳`
    }

    // ==========================================
    // 4️⃣ SALUDO
    // ==========================================

    if (step === 'idle' && isGreeting(intent)) {
        return `👋 ¡Hola! Qué gusto saludarte.

Para ayudarte más rápido, dime qué necesitas hoy:
1️⃣ *Ver servicios y precios*
2️⃣ *Agendar una nueva cita*
3️⃣ *Gestionar una cita existente*

(Responde con el número o la palabra clave)`
    }

    // ==========================================
    // 5️⃣ SERVICIO ESPECÍFICO
    // ==========================================

    if (
        matchedService &&
        (intent.primary_intent === 'info_servicios' ||
            intent.primary_intent === 'info_precios')
    ) {
        return `💰 *${matchedService.name}*
Precio: $${matchedService.price}
Duración: ${matchedService.duration_minutes} min

${matchedService.description || ''}

¿Deseas agendar este servicio?`
    }

    // ==========================================
    // 6️⃣ CATÁLOGO GENERAL
    // ==========================================

    if (
        intent.primary_intent === 'info_servicios' ||
        intent.primary_intent === 'info_precios'
    ) {
        // Paradox of choice: limit options to top 3-4 to avoid overwhelm
        const servicesText = services
            .slice(0, 4)
            .map(
                (service) =>
                    `• *${service.name}* – $${service.price}`
            )
            .join('\n')

        return `✨ *Nuestros servicios destacados:*
${servicesText}

💡 Si buscas algo más específico, cuéntame.
¿Sobre cuál de estos te gustaría saber más o agendar?`
    }

    // ==========================================
    // 7️⃣ AGENDAR DIRECTO
    // ==========================================

    if (intent.primary_intent === 'agendar_cita') {
        return `📅 Perfecto.
¿Qué servicio deseas agendar?`
    }

    // ==========================================
    // 8️⃣ FALLBACK INTELIGENTE
    // ==========================================

    // Pratfall Effect / Vulnerability
    return `🤖 Para ser totalmente honesto, no estoy seguro de haber entendido bien. Soy un asistente virtual (aún aprendiendo).

¿Podrías usar una de estas opciones para ayudarme?
• "Quiero ver los servicios"
• "Deseo agendar una cita"
• "Necesito cancelar/reprogramar"

¡Gracias por la paciencia! 🙏`
}
