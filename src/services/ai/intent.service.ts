// src/services/ai/intent.service.ts

import { groq } from '@/lib/groq'

// ===============================
// Types
// ===============================

export type Intent =
    | 'info_servicios'
    | 'info_precios'
    | 'agendar_cita'
    | 'mixto'

// ===============================
// Constants
// ===============================

const ALLOWED_INTENTS: Intent[] = [
    'info_servicios',
    'info_precios',
    'agendar_cita',
    'mixto'
]

// ===============================
// Prompt builder (internal)
// ===============================

function buildIntentPrompt(message: string): string {
    return `
Eres un asistente para un negocio de servicios de estética.

Tu única tarea es CLASIFICAR la intención del mensaje del cliente.
NO tomes decisiones.
NO propongas acciones.
NO respondas al cliente.

Opciones de intención:
- info_servicios
- info_precios
- agendar_cita
- mixto

Mensaje del cliente:
"${message}"

Responde SOLO en JSON válido:
{
  "intent": "info_servicios | info_precios | agendar_cita | mixto"
}
`
}

// ===============================
// Public API
// ===============================

export async function detectIntent(
    message: string
): Promise<{ intent: Intent }> {
    const prompt = buildIntentPrompt(message)

    const completion = await groq.chat.completions.create({
        model: 'llama-3.1-8b-instant',
        temperature: 0,
        messages: [{ role: 'user', content: prompt }]
    })

    const content = completion.choices[0]?.message?.content

    if (!content) {
        console.error('❌ Empty AI response')
        return { intent: 'info_servicios' }
    }

    try {
        const parsed = JSON.parse(content)
        const intent = parsed.intent

        if (!ALLOWED_INTENTS.includes(intent)) {
            console.warn('⚠️ Invalid intent from AI:', intent)
            return { intent: 'info_servicios' }
        }

        return { intent }
    } catch (error) {
        console.error('❌ Error parsing AI intent response', error)
        return { intent: 'info_servicios' }
    }
}
