// src/app/api/whatsapp/handle/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { detectIntent } from '@/services/ai/intent.service'
import { getActiveServices } from '@/services/services.service'
import { createDemoAppointment } from '@/services/appointments.service'

export async function POST(req: NextRequest) {
    try {
        const {
            phone,
            message,
            source = 'whatsapp',
            waba_id,
            phone_number_id
        } = await req.json()

        // ===============================
        // 1️⃣ Validación básica
        // ===============================
        if (!phone || !message) {
            return NextResponse.json(
                { error: 'phone and message are required' },
                { status: 400 }
            )
        }

        /**
         * 🚫 Regla de producto
         * Mensajes provenientes del flujo web
         * NO generan conversación por WhatsApp.
         */
        if (source === 'web') {
            return NextResponse.json({
                ignored: true,
                reason: 'Message from web flow. No WhatsApp response.'
            })
        }

        // ===============================
        // 2️⃣ Detección de intención (IA)
        // ===============================
        const { intent } = await detectIntent(message)

        // ===============================
        // 3️⃣ Obtener servicios activos
        // ===============================
        const services = await getActiveServices()

        if (services.length === 0) {
            return NextResponse.json({
                reply:
                    '❌ En este momento no hay servicios disponibles. Por favor intenta más tarde.'
            })
        }

        const servicesText = services
            .map(
                (service) =>
                    `• ${service.name} – $${service.price} (${service.duration_minutes} min)`
            )
            .join('\n')

        // ===============================
        // 4️⃣ Decisión determinística
        // ===============================
        let appointment = null

        /**
         * Solo se agenda si la intención es explícita.
         * La IA NO decide acciones.
         */
        if (intent === 'agendar_cita') {
            appointment = await createDemoAppointment(phone, services[0])
        }

        // ===============================
        // 5️⃣ Construcción de respuesta
        // ===============================
        let reply = `✨ *Servicios disponibles:*\n${servicesText}`

        if (appointment) {
            reply += `

📅 *Cita creada*
🧾 Servicio: ${appointment.service}
🗓 Fecha: ${appointment.date}
⏰ Hora: ${appointment.time}

Si deseas modificarla o tienes preguntas, escríbenos 😊
`
        } else {
            reply += `

📲 Escríbenos si deseas agendar una cita o necesitas más información.
`
        }

        // ===============================
        // 6️⃣ Respuesta final
        // ===============================
        return NextResponse.json({
            reply,
            intent,
            appointment,
            meta: {
                source,
                waba_id,
                phone_number_id
            }
        })
    } catch (error) {
        console.error('❌ API ERROR [whatsapp/handle]', error)

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
