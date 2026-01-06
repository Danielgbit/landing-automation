import { supabaseAdmin } from '@/lib/supabase-admin'
import { Service } from './services.service'

export type AppointmentInfo = {
    service: string
    date: string
    time: string
}

function getDemoAppointmentDate() {
    const date = new Date()
    date.setDate(date.getDate() + 1) // mañana
    date.setHours(15, 0, 0, 0) // 3:00 PM
    return date
}

export async function createDemoAppointment(
    phone: string,
    service: Service
): Promise<AppointmentInfo | null> {
    const startAt = getDemoAppointmentDate()
    const endAt = new Date(
        startAt.getTime() + service.duration_minutes * 60000
    )

    const { error } = await supabaseAdmin
        .from('appointments')
        .insert({
            phone,
            service_id: service.id,
            start_at: startAt.toISOString(),
            end_at: endAt.toISOString(),
            status: 'confirmed'
        })

    if (error) {
        console.error('❌ Error creando cita', error)
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
