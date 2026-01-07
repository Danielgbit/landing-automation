// src/hooks/appointments/useCreateWebAppointment.ts

'use client'

import { useState } from 'react'

type CreateWebAppointmentPayload = {
    phone: string
    serviceId: string
    date: string
    time: string
    notifyWhatsapp?: boolean
}

export function useCreateWebAppointment() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    async function createAppointment(payload: CreateWebAppointmentPayload) {
        setLoading(true)
        setError(null)

        try {
            const res = await fetch('/api/web/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })

            if (!res.ok) {
                throw new Error('Error creando la cita')
            }

            setSuccess(true)
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return {
        createAppointment,
        loading,
        error,
        success
    }
}
