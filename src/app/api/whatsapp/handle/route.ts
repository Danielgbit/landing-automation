//src/app/api/whatsapp/handle/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { detectIntent } from '@/services/ai/intent.service'
import { getActiveServices } from '@/services/services.service'
import { createDemoAppointment } from '@/services/appointments.service'

export async function POST(req: NextRequest) {
    try {
        const { phone, message } = await req.json()

        if (!phone || !message) {
            return NextResponse.json(
                { error: 'phone and message are required' },
                { status: 400 }
            )
        }

        // 1️⃣ IA: intención
        const { intent } = await detectIntent(message)

        // 2️⃣ Servicios
        const services = await getActiveServices()

        if (services.length === 0) {
            return NextResponse.json({
                reply: '❌ No hay servicios configurados.'
            })
        }

        const servicesText = services
            .map(
                (s) =>
                    `• ${s.name} – $${s.price} (${s.duration_minutes} min)`
            )
            .join('\n')

        let appointment = null

        // 3️⃣ Agenda (demo)
        if (intent === 'agendar_cita' || intent === 'mixto') {
            appointment = await createDemoAppointment(
                phone,
                services[0]
            )
        }

        // 4️⃣ Respuesta final
        let reply = `✨ *Nuestros servicios disponibles:*\n${servicesText}`

        if (appointment) {
            reply += `\n\n📅 *Tu cita quedó agendada:*\n🧾 Servicio: ${appointment.service}\n🗓 Fecha: ${appointment.date}\n⏰ Hora: ${appointment.time}`
        } else {
            reply += `\n\n📲 Escríbenos si deseas agendar una cita.`
        }

        return NextResponse.json({
            reply,
            appointment
        })
    } catch (error) {
        console.error('❌ API ERROR', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
