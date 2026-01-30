// src/services/appointments.service.ts

import { supabaseAdmin } from '@/lib/supabase-admin'
import { Service } from './services/services.service'
import { calculateEndAt, getDemoAppointmentStart } from '@/helpers/appointments/appointment.helpers'
import { AppointmentInfo } from '@/types/appointments.types'


// ===============================
// DEMO 4 – WhatsApp (IA-assisted)
// Simulated, non-deterministic slot
// ===============================

export async function createDemoAppointment(
    phone: string,
    service: Service
): Promise<AppointmentInfo | null> {
    const startAt = getDemoAppointmentStart()
    const endAt = calculateEndAt(startAt, service.duration_minutes)

    const { error } = await supabaseAdmin.from('appointments').insert({
        phone,
        service_id: service.id,
        start_at: startAt.toISOString(),
        end_at: endAt.toISOString(),
        status: 'confirmed'
    })

    if (error) {
        console.error('❌ Error creating demo appointment', error)
        return null
    }

    return {
        service: service.name,
        date: startAt.toLocaleDateString('es-CO'),
        time: startAt.toLocaleTimeString('es-CO', {
            hour: 'numeric',
            minute: '2-digit'
        })
    }
}

// ===============================
// DEMO 3 – Web (deterministic)
// Real user-selected slot
// ===============================

export async function createWebAppointment(input: {
    phone: string
    serviceId: string
    date: string
    time: string
}) {
    const startAt = new Date(`${input.date}T${input.time}:00`)
    const endAt = calculateEndAt(startAt, 60) // Fixed duration (MVP)

    const { data, error } = await supabaseAdmin
        .from('appointments')
        .insert({
            phone: input.phone,
            service_id: input.serviceId,
            start_at: startAt.toISOString(),
            end_at: endAt.toISOString(),
            status: 'confirmed'
        })
        .select()
        .single()

    if (error) {
        console.error('❌ Error creating web appointment', error)
        throw new Error('Error creating appointment')
    }

    return {
        id: data.id,
        date: input.date,
        time: input.time
    }
}
