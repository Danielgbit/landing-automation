// src/lib/phone.ts

/**
 * Normaliza un número telefónico colombiano a formato E.164
 */
export function normalizePhone(phone: string): string {
    const trimmed = phone.trim()

    // Quitar todo lo que no sea número
    const digitsOnly = trimmed.replace(/\D/g, '')

    // Ya viene con 57
    if (digitsOnly.startsWith('57') && digitsOnly.length === 12) {
        return digitsOnly
    }

    // Número colombiano móvil estándar (10 dígitos)
    if (digitsOnly.length === 10) {
        return `57${digitsOnly}`
    }

    throw new Error(`Invalid phone number format: ${phone}`)
}
