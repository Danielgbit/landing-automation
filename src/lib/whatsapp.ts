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
