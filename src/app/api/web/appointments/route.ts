import { NextRequest, NextResponse } from 'next/server'
import { createWebAppointment } from '@/services/appointments.service'
import sendWhatsAppMessage from '@/services/whatsapp.service'
import { getServiceById } from '@/services/services.service'

export async function POST(req: NextRequest) {
    try {
        const { phone, serviceId, date, time, notifyWhatsapp } =
            await req.json()

        if (!phone || !serviceId || !date || !time) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const appointment = await createWebAppointment({
            phone,
            serviceId,
            date,
            time
        })

        if (notifyWhatsapp) {
            const service = await getServiceById(serviceId)

            const message = `
Hola 😊  
Tu cita quedó confirmada:

🧾 Servicio: ${service.name}
📅 Fecha: ${appointment.date}
⏰ Hora: ${appointment.time}
            `.trim()

            await sendWhatsAppMessage({
                phone,
                message,
                source: 'web'
            })
        }

        return NextResponse.json({
            success: true,
            appointment
        })
    } catch (error) {
        console.error('❌ WEB APPOINTMENT ERROR', error)

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
