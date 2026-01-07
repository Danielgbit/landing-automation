/**
 * Envía un mensaje por WhatsApp usando la API existente
 */

import axios from "axios";

export async function sendWhatsAppMessage(
    phone: string,
    message: string
) {
    return axios.post(
        `${process.env.WHATSAPP_API_URL}/send`,
        { phone, message }
    );
}


export function buildWhatsappUrl(message: string) {
    const phone = '573000000000' // número demo
    const encodedMessage = encodeURIComponent(message)

    return `https://wa.me/${phone}?text=${encodedMessage}`
}
