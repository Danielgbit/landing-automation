import { NextRequest, NextResponse } from 'next/server'
import { detectIntent } from '@/services/ai/intent.service'
import { getActiveServices } from '@/services/services.service'
import { createDemoAppointment } from '@/services/appointments.service'

export async function POST(req: NextRequest) {
    try {
        const { phone, message, source = 'whatsapp' } = await req.json()

        if (!phone || !message) {
            return NextResponse.json(
                { error: 'phone and message are required' },
                { status: 400 }
            )
        }

        /**
         * 🚫 REGLA DE PRODUCTO
         * Si el mensaje viene del flujo WEB (DEMO 3),
         * WhatsApp NO conversa ni responde.
         */
        if (source === 'web') {
            return NextResponse.json({
                ignored: true,
                reason: 'Message from web flow. No IA response.'
            })
        }

        // ===============================
        // DEMO 4 – WHATSAPP CON IA
        // ===============================

        // 1️⃣ Detectar intención
        const { intent } = await detectIntent(message)

        // 2️⃣ Obtener servicios activos
        const services = await getActiveServices()

        if (services.length === 0) {
            return NextResponse.json({
                reply: '❌ No hay servicios configurados en este momento.'
            })
        }

        const servicesText = services
            .map(
                (s) =>
                    `• ${s.name} – $${s.price} (${s.duration_minutes} min)`
            )
            .join('\n')

        let appointment = null

        // 3️⃣ Agenda SOLO si la intención lo permite
        if (intent === 'agendar_cita' || intent === 'mixto') {
            appointment = await createDemoAppointment(phone, services[0])
        }

        // 4️⃣ Respuesta final (conversacional)
        let reply = `✨ *Nuestros servicios disponibles:*\n${servicesText}`

        if (appointment) {
            reply += `
            
📅 *Tu cita quedó agendada*
🧾 Servicio: ${appointment.service}
🗓 Fecha: ${appointment.date}
⏰ Hora: ${appointment.time}

Si deseas cambiarla o tienes preguntas, escríbenos 😊
`
        } else {
            reply += `

📲 Escríbenos si deseas agendar una cita.
`
        }

        return NextResponse.json({
            reply,
            appointment
        })
    } catch (error) {
        console.error('❌ API ERROR [whatsapp/handle]', error)

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
