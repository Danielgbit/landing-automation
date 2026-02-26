'use client'

import { useState } from 'react'
import { useActiveServices } from '@/hooks/services/useActiveServices'
import { Service } from '@/services/services/services.service'

type Props = {
    onSubmit: (data: {
        phone: string
        serviceId: string
        date: string
        time: string
        notifyWhatsapp: boolean
    }) => void
    loading: boolean
}

export default function ReservationForm({ onSubmit, loading }: Props) {
    const [phone, setPhone] = useState('')
    const [serviceId, setServiceId] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [notifyWhatsapp, setNotifyWhatsapp] = useState(true)

    const { services, loading: loadingServices, error: servicesError } = useActiveServices()

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!serviceId) return

        onSubmit({ phone, serviceId, date, time, notifyWhatsapp })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="
        mx-auto
        w-full
        rounded-3xl
        bg-brand-surface/40
        backdrop-blur-xl
        border border-white/10
        p-6 sm:p-8
        shadow-glow_subtle
      "
        >
            {/* HEADER */}
            <div className="mb-6 sm:mb-8 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-display font-semibold text-white">
                    Solicita tu cita de demostración
                </h2>
                <p className="mt-1 sm:mt-2 text-sm text-brand-muted">
                    Selecciona tu espacio y te contactará la IA al instante.
                </p>
            </div>

            <div className="space-y-5">
                {/* SERVICIO */}
                <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-subtle">
                        Servicio a evaluar
                    </label>

                    <div className="relative">
                        <select
                            className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50 transition-colors"
                            value={serviceId}
                            onChange={(e) => setServiceId(e.target.value)}
                            required
                            disabled={loadingServices || !!servicesError}
                        >
                            <option value="" className="text-brand-dark">
                                {loadingServices ? 'Cargando servicios...' : 'Selecciona un módulo'}
                            </option>

                            {services.map((service: Service) => (
                                <option key={service.id} value={service.id} className="text-brand-dark">
                                    {service.name} · {service.duration_minutes} min
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-muted">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>

                    {servicesError && (
                        <p className="mt-1.5 text-xs text-state-error font-medium">
                            No se pudieron cargar los servicios
                        </p>
                    )}
                </div>

                {/* FECHA Y HORA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-subtle">
                            Fecha preferida
                        </label>
                        <input
                            type="date"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                            style={{ colorScheme: 'dark' }}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-subtle">
                            Hora ideal
                        </label>
                        <input
                            type="time"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                            style={{ colorScheme: 'dark' }}
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* WHATSAPP */}
                <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-subtle">
                        Número de WhatsApp (con código de país)
                    </label>
                    <input
                        type="tel"
                        placeholder="+57 300 123 4567"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                {/* CONFIRMACIÓN */}
                <label className="flex items-center gap-3 text-xs text-brand-muted cursor-pointer group mt-2">
                    <div className="relative flex items-center justify-center">
                        <input
                            type="checkbox"
                            checked={notifyWhatsapp}
                            onChange={(e) => setNotifyWhatsapp(e.target.checked)}
                            className="peer sr-only"
                        />
                        <div className="h-5 w-5 rounded border border-white/20 bg-white/5 peer-checked:bg-accent peer-checked:border-accent transition-all"></div>
                        <svg className="absolute w-3 h-3 text-brand-dark opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span>Quiero recibir el mensaje de confirmación por IA</span>
                </label>
            </div>

            {/* CTA */}
            <div className="mt-8">
                <button
                    type="submit"
                    disabled={loading || loadingServices || !serviceId}
                    className="
            w-full
            rounded-xl
            bg-accent
            py-4
            text-sm
            font-extrabold
            text-brand-dark
            shadow-[0_0_20px_rgba(0,255,163,0.3)]
            hover:shadow-[0_0_30px_rgba(0,255,163,0.6)]
            hover:scale-[1.02]
            transition-all
            disabled:opacity-50
            disabled:hover:scale-100
            disabled:hover:shadow-none
          "
                >
                    {loading ? 'Procesando conexión...' : 'Agendar Demostración'}
                </button>
            </div>

            {/* MICROCOPY */}
            <p className="mt-5 text-center text-xs text-brand-subtle flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-brand-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Tus datos están seguros. 100% libre de SPAM.
            </p>
        </form>
    )
}
