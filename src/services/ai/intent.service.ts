import { groq } from '@/lib/groq'

// ===============================
// Types (Shared Contract)
// ===============================

export type PrimaryIntent =
    | 'info_servicios'
    | 'info_precios'
    | 'agendar_cita'
    | 'cancelar_cita'
    | 'reagendar_cita'
    | 'confirmar'
    | 'negar'
    | 'mixto'

export type IntentResult = {
    primary_intent: PrimaryIntent
    secondary_intent?: 'agendar_cita'
    mentioned_service?: string
    mentioned_category?: string
    confidence: 'low' | 'medium' | 'high'
}

// ===============================
// Constants
// ===============================

const ALLOWED_PRIMARY_INTENTS: PrimaryIntent[] = [
    'info_servicios',
    'info_precios',
    'agendar_cita',
    'cancelar_cita',
    'reagendar_cita',
    'confirmar',
    'negar',
    'mixto'
]

const ALLOWED_CONFIDENCE = ['low', 'medium', 'high'] as const

// ===============================
// Prompt builder (STRICT)
// ===============================

function buildIntentPrompt(message: string): string {
    return `
You are an intent extraction engine.

MANDATORY RULES:
- Output ONLY raw JSON
- NO markdown
- NO explanations
- NO multiple values per field
- Choose ONE value only

Allowed values:

primary_intent:
- info_servicios
- info_precios
- agendar_cita
- cancelar_cita
- reagendar_cita
- confirmar
- negar
- mixto

secondary_intent:
- agendar_cita
- null

confidence:
- low
- medium
- high

Message:
"${message}"

Return EXACTLY this JSON shape:
{
  "primary_intent": "info_servicios",
  "secondary_intent": null,
  "mentioned_service": null,
  "mentioned_category": "uñas",
  "confidence": "medium"
}
`
}

// ===============================
// Helpers (internal, critical)
// ===============================

function sanitizeAIResponse(content: string): string {
    return content
        .replace(/```json/gi, '')
        .replace(/```/g, '')
        .trim()
}

function normalizePrimaryIntent(value: unknown): PrimaryIntent {
    if (typeof value !== 'string') return 'info_servicios'

    const normalized = value.toLowerCase()

    if (normalized.includes('agendar')) return 'agendar_cita'
    if (normalized.includes('cancelar')) return 'cancelar_cita'
    if (normalized.includes('reagendar')) return 'reagendar_cita'
    if (normalized.includes('reprogramar')) return 'reagendar_cita'
    if (normalized.includes('precio')) return 'info_precios'
    if (normalized.includes('servicio')) return 'info_servicios'
    if (
        normalized === 'si' ||
        normalized === 'confirmar' ||
        normalized === 'claro' ||
        normalized === 'vale' ||
        normalized === 'ok' ||
        normalized === 'acepto'
    )
        return 'confirmar'
    if (
        normalized === 'no' ||
        normalized === 'negar' ||
        normalized === 'cancelar' ||
        normalized === 'rechazar'
    )
        return 'negar'
    if (normalized.includes('mixto')) return 'mixto'

    return 'info_servicios'
}

function normalizeConfidence(value: unknown): 'low' | 'medium' | 'high' {
    if (value === 'low' || value === 'medium' || value === 'high') {
        return value
    }
    return 'medium'
}

// ===============================
// Public API
// ===============================

export async function detectIntent(
    message: string
): Promise<IntentResult> {
    const prompt = buildIntentPrompt(message)

    const completion = await groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        temperature: 0,
        messages: [{ role: 'user', content: prompt }]
    })

    const content = completion.choices[0]?.message?.content

    // ===============================
    // Hard fallback (no response)
    // ===============================
    if (!content) {
        console.error('❌ Empty AI response')
        return {
            primary_intent: 'info_servicios',
            confidence: 'low'
        }
    }

    try {
        const sanitized = sanitizeAIResponse(content)
        const parsed = JSON.parse(sanitized)

        const primary_intent = normalizePrimaryIntent(
            parsed.primary_intent
        )

        const secondary_intent =
            parsed.secondary_intent === 'agendar_cita'
                ? 'agendar_cita'
                : undefined

        const mentioned_service =
            typeof parsed.mentioned_service === 'string'
                ? parsed.mentioned_service
                : undefined

        const mentioned_category =
            typeof parsed.mentioned_category === 'string'
                ? parsed.mentioned_category
                : undefined

        const confidence = normalizeConfidence(parsed.confidence)

        // ===============================
        // Final validation (paranoid)
        // ===============================
        if (!ALLOWED_PRIMARY_INTENTS.includes(primary_intent)) {
            throw new Error('Primary intent not allowed')
        }

        if (!ALLOWED_CONFIDENCE.includes(confidence)) {
            throw new Error('Confidence not allowed')
        }

        return {
            primary_intent,
            secondary_intent,
            mentioned_service,
            mentioned_category,
            confidence
        }
    } catch (error) {
        console.error(
            '❌ Error parsing AI intent response',
            error
        )

        // ===============================
        // Safe fallback (never crash)
        // ===============================
        return {
            primary_intent: 'info_servicios',
            confidence: 'low'
        }
    }
}
