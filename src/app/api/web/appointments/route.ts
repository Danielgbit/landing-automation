import { NextRequest, NextResponse } from 'next/server'
import { createWebAppointment } from '@/services/appointments.service'
import sendWhatsAppMessage from '@/services/whatsapp.service'
import { getServiceById } from '@/services/services.service'
import { normalizePhone } from '@/lib/phone'

export async function POST(req: NextRequest) {
    console.log('🟢 [WEB_APPOINTMENT] Request received')

    try {
        const body = await req.json()
        const { phone, serviceId, date, time, notifyWhatsapp } = body

        console.log('🟡 [WEB_APPOINTMENT] Payload:', {
            phone,
            serviceId,
            date,
            time,
            notifyWhatsapp
        })

        // 1️⃣ Validación básica
        if (!phone || !serviceId || !date || !time) {
            console.warn(
                '🟠 [WEB_APPOINTMENT] Missing required fields',
                body
            )

            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // 2️⃣ Normalizar teléfono (backend es autoridad)
        let normalizedPhone: string

        try {
            normalizedPhone = normalizePhone(phone)
        } catch (err) {
            console.warn(
                '🟠 [WEB_APPOINTMENT] Invalid phone number',
                phone
            )

            return NextResponse.json(
                { error: 'Invalid phone number' },
                { status: 400 }
            )
        }

        console.log(
            '🟣 [WEB_APPOINTMENT] Normalized phone',
            normalizedPhone
        )

        // 3️⃣ Crear cita (dominio puro)
        console.log(
            '🟣 [WEB_APPOINTMENT][DB] Creating appointment...'
        )

        const appointment = await createWebAppointment({
            phone: normalizedPhone,
            serviceId,
            date,
            time
        })

        console.log(
            '🟣 [WEB_APPOINTMENT][DB] Appointment created',
            appointment
        )

        // 4️⃣ WhatsApp (best-effort, no bloqueante de negocio)
        if (notifyWhatsapp) {
            console.log(
                '🟠 [WEB_APPOINTMENT][WHATSAPP] Notification enabled'
            )

            try {
                const service = await getServiceById(serviceId)

                const message = `
Hola 😊  
¡Tu cita quedó confirmada con éxito!

✨ Detalles de tu reserva:
🧾 Servicio: ${service.name}
📅 Fecha: ${appointment.date}
⏰ Hora: ${appointment.time}

Te esperamos.
Si necesitas reprogramar o cancelar, solo responde a este mensaje.

Gracias por confiar en nosotros 💙
`.trim()


                console.log(
                    '🟠 [WEB_APPOINTMENT][WHATSAPP] Sending message',
                    { phone: normalizedPhone }
                )

                await sendWhatsAppMessage({
                    phone: normalizedPhone,
                    message,
                })

                console.log(
                    '🟠 [WEB_APPOINTMENT][WHATSAPP] Message sent successfully'
                )
            } catch (whatsappError) {
                // ⚠️ Importante: NO rompemos el flujo
                console.error(
                    '🔴 [WEB_APPOINTMENT][WHATSAPP] Failed to send message',
                    whatsappError
                )
            }
        } else {
            console.log(
                '🟡 [WEB_APPOINTMENT] WhatsApp notification skipped'
            )
        }

        // 5️⃣ Respuesta final
        console.log(
            '🟢 [WEB_APPOINTMENT] Flow completed successfully'
        )

        return NextResponse.json({
            success: true,
            appointment
        })
    } catch (error) {
        console.error(
            '🔴 [WEB_APPOINTMENT] Unexpected error',
            error
        )

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
