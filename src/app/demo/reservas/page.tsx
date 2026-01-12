'use client'

import { useCreateWebAppointment } from '@/hooks/appointments/useCreateWebAppointment'
import ReservationForm from '@/components/demo/reservations/ReservationForm'
import SlideUp from '@/components/ui/motion/SlideUp'

export default function ReservasPage() {
    const { createAppointment, loading, success, error } = useCreateWebAppointment()

    if (success) {
        return (
            <main className="min-h-screen bg-brand-light px-4 py-24 sm:px-6 sm:py-28">
                <SlideUp>
                    <div className="mx-auto max-w-md text-center">
                        <h2 className="text-xl sm:text-2xl font-semibold text-brand-primary">
                            Cita confirmada
                        </h2>
                        <p className="mt-3 text-sm text-brand-muted">
                            Te enviamos la confirmación por WhatsApp con los detalles de tu cita.
                        </p>
                    </div>
                </SlideUp>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-brand-light px-4 py-16 sm:px-6 sm:py-20">
            <SlideUp>
                <ReservationForm loading={loading} onSubmit={createAppointment} />
            </SlideUp>

            {error && (
                <p className="mt-4 sm:mt-6 text-center text-sm text-state-error">
                    {error}
                </p>
            )}
        </main>
    )
}
