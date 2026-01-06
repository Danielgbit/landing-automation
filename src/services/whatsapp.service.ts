import axios from 'axios'

type SendWhatsAppInput = {
    phone: string
    message: string
    source: 'web' | 'whatsapp'
}

export default async function sendWhatsAppMessage(
    input: SendWhatsAppInput
) {
    if (!process.env.WHATSAPP_API_URL) {
        throw new Error('Missing WhatsApp API URL')
    }
    return axios.post(
        `${process.env.WHATSAPP_API_URL}/send`,
        {
            phone: input.phone,
            message: input.message,
            source: input.source
        }
    )
}
