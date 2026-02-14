import { Service } from '@/services/services/services.service'
import { AppointmentInfo } from '@/types/appointments.types'
import { PrimaryIntent } from '@/services/ai/intent.service'

// ===============================
// Types
// ===============================

type IntentContext = {
    primary_intent: PrimaryIntent | 'confirmar' | 'negar'
    secondary_intent?: 'agendar_cita'
    mentioned_service?: string
    mentioned_category?: string
    confidence: 'low' | 'medium' | 'high'
}

type ConversationState = {
    current_step:
    | 'idle'
    | 'confirming_service'
    | 'asking_date'
    | 'asking_time'
    selected_service_id?: string
}

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
        return `❌ Entiendo.

Para cancelar tu cita, por favor confirma escribiendo:

*CANCELAR*

Si deseas reprogramarla también puedo ayudarte.`
    }

    if (intent.primary_intent === 'reagendar_cita') {
        return `🔄 Claro, podemos reprogramar tu cita.

¿Para qué fecha deseas cambiarla?`
    }

    // ==========================================
    // 2️⃣ CITA CREADA
    // ==========================================

    if (appointment) {
        return `📅 *Cita creada*
🧾 Servicio: ${appointment.service}
🗓 Fecha: ${appointment.date}
⏰ Hora: ${appointment.time}

Si necesitas modificarla o cancelarla, escríbenos 😊`
    }

    // ==========================================
    // 3️⃣ FLUJO POR ESTADO
    // ==========================================

    if (step === 'confirming_service') {

        if (intent.primary_intent === 'confirmar') {
            return `📅 Perfecto 👌
¿Qué fecha deseas para tu cita?`
        }

        if (intent.primary_intent === 'negar') {
            return `No hay problema 😊
¿Quieres ver otros servicios disponibles?`
        }

        return `¿Deseas agendar este servicio? 😊`
    }

    if (step === 'asking_date') {
        return `⏰ Perfecto.

Ahora dime la hora en la que deseas tu cita.`
    }

    if (step === 'asking_time') {
        return `✅ Estoy verificando disponibilidad...

Un momento por favor ⏳`
    }

    // ==========================================
    // 4️⃣ SALUDO
    // ==========================================

    if (step === 'idle' && isGreeting(intent)) {
        return `👋 ¡Hola!

Puedo ayudarte con:
• Ver servicios
• Agendar una cita
• Cancelar o reprogramar una cita

¿Qué deseas hacer?`
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
        const servicesText = services
            .slice(0, 7)
            .map(
                (service) =>
                    `• ${service.name} – $${service.price} (${service.duration_minutes} min)`
            )
            .join('\n')

        return `✨ *Nuestros servicios disponibles:*
${servicesText}

¿Te interesa alguno en particular?`
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

    return `🤖 No estoy seguro de entenderte.

Puedes decir cosas como:
• "Ver servicios"
• "Agendar cita"
• "Cancelar mi cita"

¿En qué puedo ayudarte?`
}
