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
        <main className="min-h-screen relative pt-32 pb-24 px-4 overflow-hidden">
            {/* BACKGROUNDS */}
            <div className="absolute inset-0 bg-brand-dark -z-20" />
            <div className="bg-noise absolute inset-0 -z-10 opacity-20" />

            {/* ESTÉTICA CIBER: GRADIENTE RADIAL */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[120px] -z-10 opacity-40" />

            <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* LADO IZQUIERDO: COPY MARKETING */}
                <SlideUp delay={0.1}>
                    <div className="max-w-xl text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Live Demo Booking
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-display font-semibold text-white leading-tight mb-6">
                            Experimenta el <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent text-glow">agendamiento inteligente.</span>
                        </h1>
                        <p className="text-base sm:text-lg text-brand-muted mb-8">
                            Nuestra IA agenda, notifica y califica a tus prospectos 24/7 sin fricción. Reserva tu demo gratuita y descubre cómo multiplicar tu captación en piloto automático.
                        </p>

                        {/* SOCIAL PROOF (LEAD GEN) */}
                        <div className="bg-brand-surface/40 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                            <p className="text-sm text-brand-muted mb-4 font-medium uppercase tracking-wider">Por qué agendar con nosotros:</p>
                            <ul className="space-y-3 text-sm text-white/80">
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Cero fricción: No requerimos tarjeta de crédito
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Atención inmediata automatizada y personalizada
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Ahorra hasta 15 horas semanales en respuestas
                                </li>
                            </ul>
                        </div>
                    </div>
                </SlideUp>

                {/* LADO DERECHO: FORMULARIO */}
                <SlideUp delay={0.2}>
                    <ReservationForm loading={loading} onSubmit={createAppointment} />
                    {error && (
                        <p className="mt-6 text-center text-sm font-medium text-red-400 bg-red-400/10 py-3 px-4 rounded-xl border border-red-400/20 backdrop-blur-sm">
                            Ocurrió un error: {error}
                        </p>
                    )}
                </SlideUp>
            </div>
        </main>
    )
}

