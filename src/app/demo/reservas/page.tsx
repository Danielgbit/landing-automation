'use client'

import { useCreateWebAppointment } from '@/hooks/appointments/useCreateWebAppointment'
import ReservationForm from '@/components/demo/reservations/ReservationForm'
import SlideUp from '@/components/ui/motion/SlideUp'

export default function ReservasPage() {
    const { createAppointment, loading, success, error } = useCreateWebAppointment()

    if (success) {
        return (
            <main className="min-h-screen relative overflow-hidden flex items-center justify-center pt-24 pb-16 px-4">
                <div className="absolute inset-0 bg-brand-dark -z-20" />
                <div className="bg-noise absolute inset-0 -z-10 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

                <SlideUp>
                    <div className="mx-auto max-w-lg text-center bg-brand-surface/60 backdrop-blur-xl border border-white/5 rounded-3xl p-10 sm:p-14 shadow-glow_subtle">
                        <div className="mx-auto w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-4">
                            ¡Cita Confirmada!
                        </h2>
                        <p className="text-sm sm:text-base text-brand-muted">
                            Te enviamos la confirmación por WhatsApp con los detalles de tu cita y cómo acceder a la demostración. Nos vemos pronto.
                        </p>
                    </div>
                </SlideUp>
            </main>
        )
    }

    return (
        <main className="min-h-screen relative pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 overflow-hidden w-full max-w-[100vw]">
            {/* BACKGROUNDS */}
            <div className="absolute inset-0 bg-brand-dark -z-20" />
            <div className="bg-noise absolute inset-0 -z-10 opacity-20 mix-blend-overlay" />

            {/* ESTÉTICA CIBER: GRADIENTE RADIAL (Fijado para evitar overflow en mobile) */}
            <div className="absolute top-[10%] sm:top-[20%] left-1/2 -translate-x-1/2 w-[150vw] sm:w-[800px] h-[300px] sm:h-[400px] bg-accent/15 rounded-full blur-[100px] sm:blur-[120px] -z-10 opacity-40 pointer-events-none" />

            <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                {/* LADO IZQUIERDO: COPY MARKETING */}
                <SlideUp delay={0.1}>
                    <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-semibold text-accent mb-6 sm:mb-8 shadow-[0_0_15px_rgba(0,255,163,0.1)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Live Demo Booking
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6">
                            Experimenta el <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-emerald-400 drop-shadow-[0_0_15px_rgba(0,255,163,0.3)]">agendamiento inteligente.</span>
                        </h1>
                        <p className="text-base sm:text-lg text-brand-muted mb-8 sm:mb-10 leading-relaxed">
                            Nuestra IA califica a tus prospectos 24/7 y los agenda directamente en tu calendario sin fricción. Reserva tu demo B2B gratuita y descubre cómo multiplicar tu captación en piloto automático.
                        </p>

                        {/* SOCIAL PROOF / BENEFITS (LEAD GEN) */}
                        <div className="bg-brand-surface/40 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-glow_subtle text-left">
                            <p className="text-xs sm:text-sm text-brand-subtle mb-5 font-semibold uppercase tracking-wider">La ventaja operativa:</p>
                            <ul className="space-y-4 text-sm sm:text-base text-white/90">
                                <li className="flex items-start gap-3">
                                    <div className="mt-0.5 rounded-full bg-accent/20 p-1">
                                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span><strong>Cero fricción:</strong> Demo directa en WhatsApp sin requerir tarjetas de crédito.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-0.5 rounded-full bg-accent/20 p-1">
                                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span><strong>Calificación instantánea:</strong> Filtra prospectos no calificados antes de la llamada.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-0.5 rounded-full bg-accent/20 p-1">
                                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span><strong>Recupera 15h semanales:</strong> Elimina el ping-pong de correos para buscar espacio.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SlideUp>

                {/* LADO DERECHO: FORMULARIO */}
                <SlideUp delay={0.2}>
                    <ReservationForm loading={loading} onSubmit={createAppointment} />
                    {error && (
                        <p className="mt-6 text-center text-sm font-medium text-red-300 bg-red-500/10 py-3 px-4 rounded-xl border border-red-500/20 backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                            Ocurrió un error: {error}
                        </p>
                    )}
                </SlideUp>
            </div>
        </main>
    )
}

