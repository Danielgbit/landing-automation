type MessageSignals = {
    mentionsPrice: boolean
    mentionsBooking: boolean
}

export function extractMessageSignals(message: string): MessageSignals {
    const normalized = message.toLowerCase()

    return {
        mentionsPrice:
            normalized.includes('precio') ||
            normalized.includes('cuesta') ||
            normalized.includes('vale'),

        mentionsBooking:
            normalized.includes('agendar') ||
            normalized.includes('cita') ||
            normalized.includes('reservar')
    }
}
