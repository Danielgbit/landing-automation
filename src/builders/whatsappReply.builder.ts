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
    // 1️⃣ CITA CREADA (PRIORIDAD MÁXIMA)
    // ==========================================
    if (appointment) {
        return `📅 *Cita creada*
🧾 Servicio: ${appointment.service}
🗓 Fecha: ${appointment.date}
⏰ Hora: ${appointment.time}

Si deseas modificarla o tienes preguntas, escríbenos 😊`
    }

    // ==========================================
    // 2️⃣ FLUJO POR ESTADO (ANTES QUE INTENT)
    // ==========================================

    // ---- Confirmando servicio ----
    if (step === 'confirming_service') {

        if (intent.primary_intent === 'confirmar') {
            return `📅 Perfecto 👌
¿Qué fecha deseas para tu cita?

Ejemplo:
• 20 de febrero
• mañana
• este viernes`
        }

        if (intent.primary_intent === 'negar') {
            return `No hay problema 😊
¿Quieres ver otros servicios disponibles?`
        }

        return `¿Deseas agendar este servicio? 😊`
    }

    // ---- Pidiendo fecha ----
    if (step === 'asking_date') {
        return `⏰ Perfecto.

Ahora dime la hora en la que deseas tu cita.

Ejemplo:
• 3:00 pm
• 10:30 am`
    }

    // ---- Pidiendo hora ----
    if (step === 'asking_time') {
        return `✅ Estoy verificando disponibilidad...

Un momento por favor ⏳`
    }

    // ==========================================
    // 3️⃣ SALUDO (solo si está en idle)
    // ==========================================
    if (step === 'idle' && isGreeting(intent)) {
        return `👋 *¡Hola! Bienvenido/a a Focuside Studio.*

Puedes:
• Ver servicios
• Consultar precios
• Agendar una cita

¿Qué te gustaría hacer?`
    }

    // ==========================================
    // 4️⃣ SERVICIO ESPECÍFICO
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
    // 5️⃣ CATÁLOGO GENERAL
    // ==========================================
    if (
        intent.primary_intent === 'info_servicios' ||
        intent.primary_intent === 'info_precios'
    ) {
        const uniqueServices = services.filter(
            (service, index, self) =>
                index === self.findIndex((s) => s.name === service.name)
        )

        const servicesText = uniqueServices
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
    // 6️⃣ INTENCIÓN DIRECTA DE AGENDAR
    // ==========================================
    if (intent.primary_intent === 'agendar_cita') {
        return `📅 Perfecto.
¿Qué servicio deseas agendar?`
    }

    // ==========================================
    // 7️⃣ FALLBACK
    // ==========================================
    return `👋 Hola 😊

Puedo ayudarte a:
• Ver servicios
• Consultar precios
• Agendar una cita

¿Qué deseas hacer?`
}
