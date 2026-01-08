// src/app/demo/reservas/page.tsx
'use client'

import { useCreateWebAppointment } from '@/hooks/appointments/useCreateWebAppointment'
import ReservationForm from '@/components/demo/ReservationForm'

export default function ReservasPage() {
    const {
        createAppointment,
        loading,
        success,
        error,
    } = useCreateWebAppointment()

    if (success) {
        return (
            <main className="min-h-screen bg-brand-light px-6 py-28">
                <div className="mx-auto max-w-md text-center">
                    <h2 className="text-2xl font-semibold text-brand-primary">
                        Cita confirmada
                    </h2>
                    <p className="mt-3 text-sm text-brand-muted">
                        Te enviamos la confirmación por WhatsApp con los detalles de tu cita.
                    </p>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-brand-light px-6 py-20">
            <ReservationForm
                loading={loading}
                onSubmit={createAppointment}
            />

            {error && (
                <p className="mt-6 text-center text-sm text-state-error">
                    {error}
                </p>
            )}
        </main>
    )
}
