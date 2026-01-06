/**
 * Supabase Admin Client
 * ⚠️ Usar SOLO en server (API / services)
 */

import { createClient } from '@supabase/supabase-js'

export const supabaseAdmin = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)
