import { NextRequest, NextResponse } from 'next/server'
import { createWebAppointment } from '@/services/appointments/appointments.service'
import { getServiceById } from '@/services/services/services.service'
import { normalizePhone } from '@/lib/phone'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { phone, serviceId, date, time, notifyWhatsapp } = body

        // 1️⃣ Validación básica
        if (!phone || !serviceId || !date || !time) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // 2️⃣ Normalizar teléfono
        let normalizedPhone: string
        try {
            normalizedPhone = normalizePhone(phone)
        } catch {
            return NextResponse.json(
                { error: 'Invalid phone number' },
                { status: 400 }
            )
        }

        // 3️⃣ Crear cita (dominio puro)
        const appointment = await createWebAppointment({
            phone: normalizedPhone,
            serviceId,
            date,
            time
        })

        // 4️⃣ Emitir evento de notificación (best-effort)
        if (notifyWhatsapp) {
            try {
                const service = await getServiceById(serviceId)

                await fetch(process.env.N8N_WHATSAPP_WEBHOOK_URL!, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        source: 'web',
                        type: 'appointment_confirmed',
                        phone: normalizedPhone,
                        service: {
                            id: service.id,
                            name: service.name
                        },
                        appointment: {
                            date: appointment.date,
                            time: appointment.time
                        }
                    })
                })
            } catch {
                // No rompe el flujo principal
            }
        }

        return NextResponse.json({
            success: true,
            appointment
        })
    } catch {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
