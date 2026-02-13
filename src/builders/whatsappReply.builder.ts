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
    mentioned_category?: string
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
    // ===============================
    // 2️⃣ SALUDO (Versión DEMO clara)
    // ===============================
    if (isGreeting(intent)) {
        return `👋 *¡Hola! Bienvenido/a a Focuside Studio.*

🚀 Estás probando nuestra *demo interactiva* del asistente inteligente para WhatsApp.

Este sistema puede:
• Responder automáticamente
• Mostrar servicios y precios
• Agendar citas
• Gestionar clientes

✨ Imagina esto funcionando 24/7 en tu negocio.

¿Qué te gustaría probar primero?`
    }


    /**
     * 3️⃣ Caso: pregunta por servicios o precios
     * Priorizamos el servicio específico si la IA lo detectó.
     */
    if (matchedService && (intent.primary_intent === 'info_servicios' || intent.primary_intent === 'info_precios')) {
        return `💰 *${matchedService.name}*
Precio: $${matchedService.price}
Duración: ${matchedService.duration_minutes} min

${matchedService.description || ''}

¿Deseas agendar este servicio?`
    }

    /**
     * 4️⃣ Caso: Catálogo general o por categorías (si no se detectó un servicio específico)
     */
    if (intent.primary_intent === 'info_servicios' || intent.primary_intent === 'info_precios') {
        const mentionedCategory = intent.mentioned_category?.toLowerCase()

        // Si el usuario mencionó una categoría, listamos servicios de esa categoría
        if (mentionedCategory) {
            const filteredServices = services.filter((s) =>
                s.category?.toLowerCase().includes(mentionedCategory) ||
                s.name.toLowerCase().includes(mentionedCategory)
            )

            if (filteredServices.length > 0) {
                const servicesText = filteredServices
                    .map(
                        (service) =>
                            `• ${service.name} – $${service.price} (${service.duration_minutes} min)`
                    )
                    .join('\n')

                return `✨ *Nuestros servicios de ${intent.mentioned_category}:*
${servicesText}

¿Deseas agendar alguno de estos?`
            }
        }

        // Si no hay categoría mencionada o no se encontraron servicios, mostramos categorías únicas
        const categories = Array.from(
            new Set(
                services
                    .map((s) => s.category)
                    .filter(Boolean) as string[]
            )
        )

        /**
         * 💅 Uñas
         * 💆 Masajes
         * 💇 Cabello
         * 🧘 Bienestar
         * ✨ Estética
         */
        const categoryEmojis: Record<string, string> = {
            uñas: '💅',
            masajes: '💆',
            cabello: '💇',
            bienestar: '🧘',
            estética: '✨',
            limpieza: '🧼'
        }

        if (categories.length > 0) {
            const categoriesText = categories
                .map((cat) => {
                    const emoji = categoryEmojis[cat.toLowerCase()] || '✨'
                    return `${emoji} ${cat}`
                })
                .join('\n')

            return `Contamos con las siguientes categorías:

${categoriesText}

*¿Cuál te interesa hoy?* Cuéntame y te daré los detalles.`
        }

        // Fallback: Deduplicación por nombre si no hay categorías definidas
        const uniqueServices = services.filter((service, index, self) =>
            index === self.findIndex((s) => s.name === service.name)
        )

        const servicesText = uniqueServices
            .slice(0, 7) // Limitamos a 7 para no agobiar
            .map(
                (service) =>
                    `• ${service.name} – $${service.price} (${service.duration_minutes} min)`
            )
            .join('\n')

        return `✨ *Nuestros servicios disponibles:*
${servicesText}

*¿Buscas algo específico?* Pregúntame por cualquier servicio.`
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
