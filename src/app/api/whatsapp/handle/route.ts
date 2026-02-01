import { NextRequest, NextResponse } from 'next/server'
import { handleWhatsAppMessage } from '@/services/whatsapp/handleWhatsAppMessage.service'

// ===============================
// Types (API Contract)
// ===============================

type WhatsAppRequestPayload = {
    phone: string
    message: string
    source: 'whatsapp' | 'web'
    waba_id: string
    phone_number_id: string
}

// ===============================
// Route Handler
// ===============================

export async function POST(req: NextRequest) {
    console.log('🟢 [API][WHATSAPP] Incoming request')

    try {
        // ===============================
        // 0️⃣ Raw body read
        // ===============================
        const body = (await req.json()) as Partial<WhatsAppRequestPayload>

        console.log('🟡 [API][WHATSAPP] Payload received', {
            phone: body.phone,
            message: body.message,
            source: body.source,
            waba_id: body.waba_id,
            phone_number_id: body.phone_number_id
        })

        // ===============================
        // 1️⃣ Payload validation (strict)
        // ===============================
        const missingFields = [
            !body.phone && 'phone',
            !body.message && 'message',
            !body.source && 'source',
            !body.waba_id && 'waba_id',
            !body.phone_number_id && 'phone_number_id'
        ].filter(Boolean)

        if (missingFields.length > 0) {
            console.warn(
                '🟠 [API][WHATSAPP] Invalid payload – missing fields',
                missingFields
            )

            return NextResponse.json(
                {
                    error: 'Invalid request payload',
                    missing_fields: missingFields
                },
                { status: 400 }
            )
        }

        // ===============================
        // 2️⃣ Delegate to use-case
        // ===============================
        console.log(
            '🟣 [API][WHATSAPP] Delegating to handleWhatsAppMessage'
        )

        const result = await handleWhatsAppMessage({
            phone: body.phone!,
            message: body.message!,
            source: body.source!,
            waba_id: body.waba_id!,
            phone_number_id: body.phone_number_id!
        })

        console.log(
            '🟢 [API][WHATSAPP] Use-case completed',
            {
                intent: result.intent,
                ignored: result.ignored,
                hasReply: Boolean(result.reply),
                appointmentCreated: Boolean(result.appointment)
            }
        )

        // ===============================
        // 3️⃣ Response
        // ===============================
        return NextResponse.json(result)
    } catch (error) {
        console.error(
            '🔴 [API][WHATSAPP] Unhandled error',
            error
        )

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
