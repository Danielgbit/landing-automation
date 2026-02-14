import { supabaseAdmin } from '@/lib/supabase-admin'

// ===============================
// Types
// ===============================

export type ConversationStep =
    | 'idle'
    | 'confirming_service'
    | 'asking_date'
    | 'asking_time'

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
// Internal Helpers
// ===============================

const TABLE = 'conversation_state'

function nowISO() {
    return new Date().toISOString()
}

async function updateState(
    phone: string,
    payload: Partial<ConversationState>
): Promise<void> {
    const { error } = await supabaseAdmin
        .from(TABLE)
        .update({
            ...payload,
            updated_at: nowISO()
        })
        .eq('phone', phone)

    if (error) {
        console.error('❌ Conversation state update failed', error)
        throw new Error('Conversation state update failed')
    }
}

// ===============================
// Public API
// ===============================

/**
 * Obtiene el estado actual.
 * Si no existe, lo crea automáticamente.
 */
export async function getConversationState(
    phone: string
): Promise<ConversationState> {

    const { data, error } = await supabaseAdmin
        .from(TABLE)
        .select('*')
        .eq('phone', phone)
        .maybeSingle()

    // Error real (no "not found")
    if (error) {
        console.error('❌ Error fetching conversation state', error)
        throw new Error('Failed to fetch conversation state')
    }

    // No existe → crear
    if (!data) {

        const initialState = {
            phone,
            current_step: 'idle' as ConversationStep,
            selected_service_id: null,
            last_intent: null,
            request_count: 0,
            last_request_at: nowISO()
        }

        const { data: created, error: createError } =
            await supabaseAdmin
                .from(TABLE)
                .insert(initialState)
                .select()
                .single()

        if (createError || !created) {
            console.error('❌ Error creating conversation state', createError)
            throw new Error('Failed to create conversation state')
        }

        return created as ConversationState
    }

    return data as ConversationState
}

/**
 * Actualiza parcialmente el estado.
 */
export async function updateConversationState(
    phone: string,
    updates: Partial<Pick<
        ConversationState,
        'current_step' | 'selected_service_id' | 'last_intent'
    >>
): Promise<void> {
    await updateState(phone, updates)
}

/**
 * Resetea completamente el estado conversacional.
 */
export async function resetConversationState(
    phone: string
): Promise<void> {
    await updateState(phone, {
        current_step: 'idle',
        selected_service_id: null,
        last_intent: null,
        request_count: 0
    })
}

/**
 * 🔥 Incremento atómico del contador (sin race condition).
 *
 * Requiere una función SQL en Supabase:
 *
 * create or replace function increment_request_count(p_phone text)
 * returns void as $$
 * update conversation_state
 * set request_count = request_count + 1,
 *     last_request_at = now(),
 *     updated_at = now()
 * where phone = p_phone;
 * $$ language sql;
 */
export async function incrementRequestCount(
    phone: string
): Promise<void> {

    const { error } = await supabaseAdmin
        .rpc('increment_request_count', {
            p_phone: phone
        })

    if (error) {
        console.error('❌ Error incrementing request count', error)
        throw new Error('Failed to increment request count')
    }
}

/**
 * Reinicia contador de ráfaga.
 * Se inicia en 1 porque este mensaje ya cuenta.
 */
export async function resetBurstCounter(
    phone: string
): Promise<void> {
    await updateState(phone, {
        request_count: 1,
        last_request_at: nowISO()
    })
}
