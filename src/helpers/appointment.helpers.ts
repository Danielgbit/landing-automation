// src/helpers/appointment.helpers.ts

/**
 * Returns a fixed demo appointment start time.
 * Used only for demo / showcase purposes.
 */
export function getDemoAppointmentStart(): Date {
    const date = new Date()
    date.setDate(date.getDate() + 1) // Tomorrow
    date.setHours(15, 0, 0, 0) // 3:00 PM
    return date
}

/**
 * Calculates appointment end time based on duration.
 */
export function calculateEndAt(
    startAt: Date,
    durationMinutes: number
): Date {
    return new Date(startAt.getTime() + durationMinutes * 60000)
}
