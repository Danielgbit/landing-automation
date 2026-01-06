'use client'

import { useCreateWebAppointment } from '@/hooks/appointments/useCreateWebAppointment'
import ReservationForm from '@/components/demo/ReservationForm'

export default function ReservasPage() {
    const { createAppointment, loading, success, error } =
        useCreateWebAppointment()

    if (success) {
        return (
            <div className="mt-24 text-center">
                <h2 className="text-2xl font-semibold">
                    ✅ Cita confirmada
                </h2>
                <p className="mt-2 text-gray-600">
                    Te enviamos la confirmación por WhatsApp.
                </p>
            </div>
        )
    }

    return (
        <>
            <ReservationForm
                loading={loading}
                onSubmit={createAppointment}
            />

            {error && (
                <p className="mt-4 text-center text-sm text-red-500">
                    {error}
                </p>
            )}
        </>
    )
}
