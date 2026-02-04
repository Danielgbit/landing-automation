//src/services/services.service.ts

import { supabaseAdmin } from '@/lib/supabase-admin'

export type Service = {
    id: string
    name: string
    description: string | null
    price: number
    duration_minutes: number
    aliases?: string[]
    category?: string
}

export async function getActiveServices(): Promise<Service[]> {
    const { data, error } = await supabaseAdmin
        .from('services')
        .select('*')
        .eq('is_active', true)

    if (error) {
        throw new Error('Error obteniendo servicios')
    }

    return data || []
}


export async function getServiceById(id: string) {
    const { data, error } = await supabaseAdmin
        .from('services')
        .select('*')
        .eq('id', id)
        .single()

    if (error) {
        throw new Error('Service not found')
    }

    return data
}
