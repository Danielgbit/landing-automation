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
    try {
        const body = (await req.json()) as Partial<WhatsAppRequestPayload>

        // ===============================
        // 1️⃣ Payload validation (strict)
        // ===============================
        if (
            !body.phone ||
            !body.message ||
            !body.source ||
            !body.waba_id ||
            !body.phone_number_id
        ) {
            return NextResponse.json(
                {
                    error: 'Invalid request payload',
                    required_fields: [
                        'phone',
                        'message',
                        'source',
                        'waba_id',
                        'phone_number_id'
                    ]
                },
                { status: 400 }
            )
        }

        // ===============================
        // 2️⃣ Delegate to use-case
        // ===============================
        const result = await handleWhatsAppMessage({
            phone: body.phone,
            message: body.message,
            source: body.source,
            waba_id: body.waba_id,
            phone_number_id: body.phone_number_id
        })

        // ===============================
        // 3️⃣ Response
        // ===============================
        return NextResponse.json(result)
    } catch (error) {
        console.error('❌ API ERROR [whatsapp/handle]', error)

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
