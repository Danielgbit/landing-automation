import { supabaseAdmin } from '@/lib/supabase-admin'

// ===============================
// Types
// ===============================

export type ConversationStep =
    | 'idle'
    | 'service_selected'
    | 'confirming_booking'

export type ConversationState = {
    phone: string
    current_step: ConversationStep
    selected_service_id: string | null
    last_intent: string | null
    request_count: number
    last_request_at: string
    updated_at: string
}

// ===============================
// Public API
// ===============================

/**
 * Obtiene el estado actual de la conversación.
 * Si no existe, crea uno nuevo en estado "idle".
 */
export async function getConversationState(
    phone: string
): Promise<ConversationState> {
    const { data, error } = await supabaseAdmin
        .from('conversation_state')
        .select('*')
        .eq('phone', phone)
        .single()

    // Estado no existe → se crea
    if (error && error.code === 'PGRST116') {
        const { data: created, error: createError } =
            await supabaseAdmin
                .from('conversation_state')
                .insert({
                    phone,
                    current_step: 'idle',
                    selected_service_id: null,
                    last_intent: null,
                    request_count: 0,
                    last_request_at: new Date().toISOString()
                })
                .select()
                .single()

        if (createError || !created) {
            console.error(
                '❌ Error creating conversation state',
                createError
            )
            throw new Error('Failed to create conversation state')
        }

        return created as ConversationState
    }

    if (error) {
        console.error(
            '❌ Error fetching conversation state',
            error
        )
        throw new Error('Failed to fetch conversation state')
    }

    return data as ConversationState
}

/**
 * Actualiza el estado de la conversación.
 * Solo actualiza los campos enviados.
 */
export async function updateConversationState(
    phone: string,
    updates: Partial<{
        current_step: ConversationStep
        selected_service_id: string | null
        last_intent: string | null
    }>
): Promise<void> {
    const { error } = await supabaseAdmin
        .from('conversation_state')
        .update({
            ...updates,
            updated_at: new Date().toISOString()
        })
        .eq('phone', phone)

    if (error) {
        console.error(
            '❌ Error updating conversation state',
            error
        )
        throw new Error('Failed to update conversation state')
    }
}

/**
 * Resetea el estado de la conversación.
 * Útil para:
 * - finalizar flujos
 * - cancelar procesos
 * - expirar conversaciones
 */
export async function resetConversationState(
    phone: string
): Promise<void> {
    const { error } = await supabaseAdmin
        .from('conversation_state')
        .update({
            current_step: 'idle',
            selected_service_id: null,
            last_intent: null,
            request_count: 0,
            updated_at: new Date().toISOString()
        })
        .eq('phone', phone)

    if (error) {
        console.error(
            '❌ Error resetting conversation state',
            error
        )
        throw new Error('Failed to reset conversation state')
    }
}

/**
 * Incrementa el contador de peticiones del usuario.
 */
export async function incrementRequestCount(
    phone: string,
    currentCount: number
): Promise<void> {
    const { error } = await supabaseAdmin
        .from('conversation_state')
        .update({
            request_count: currentCount + 1,
            last_request_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        })
        .eq('phone', phone)

    if (error) {
        console.error(
            '❌ Error incrementing request count',
            error
        )
        throw new Error('Failed to increment request count')
    }
}

/**
 * Reinicia el contador de ráfaga.
 */
export async function resetBurstCounter(
    phone: string
): Promise<void> {
    const { error } = await supabaseAdmin
        .from('conversation_state')
        .update({
            request_count: 1,
            last_request_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        })
        .eq('phone', phone)

    if (error) {
        console.error('❌ Error resetting burst counter', error)
        throw new Error('Failed to reset burst counter')
    }
}

