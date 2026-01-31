import { supabaseAdmin } from '@/lib/supabase-admin'

// ===============================
// Types
// ===============================

type ConversationDirection = 'inbound' | 'outbound'

type LogMessageInput = {
    phone: string
    message: string
    source: 'whatsapp' | 'web'
    waba_id: string
    phone_number_id: string
    intent?: string | null
    direction: ConversationDirection
}

// ===============================
// Internal helper
// ===============================

async function insertLog(input: LogMessageInput): Promise<void> {
    const { error } = await supabaseAdmin
        .from('conversations')
        .insert({
            phone: input.phone,
            message: input.message,
            source: input.source,
            waba_id: input.waba_id,
            phone_number_id: input.phone_number_id,
            direction: input.direction,
            intent: input.intent ?? null
        })

    if (error) {
        // ⚠️ IMPORTANTE:
        // El log NO debe romper el flujo de negocio
        console.error('❌ Failed to log conversation message', {
            error,
            input
        })
    }
}

// ===============================
// Public API
// ===============================

/**
 * Registra un mensaje ENTRANTE del usuario.
 * Debe llamarse apenas llega el mensaje.
 */
export async function logInboundMessage(input: {
    phone: string
    message: string
    source: 'whatsapp'
    waba_id: string
    phone_number_id: string
}): Promise<void> {
    await insertLog({
        ...input,
        direction: 'inbound',
        intent: null
    })
}

/**
 * Registra un mensaje SALIENTE del sistema.
 * Representa la decisión final del backend.
 */
export async function logOutboundMessage(input: {
    phone: string
    message: string
    source: 'whatsapp'
    waba_id: string
    phone_number_id: string
    intent: string | null
}): Promise<void> {
    await insertLog({
        ...input,
        direction: 'outbound'
    })
}
