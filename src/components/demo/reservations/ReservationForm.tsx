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
            className="mx-auto w-full rounded-3xl bg-brand-surface/50 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
            {/* Glow Interno Formulario */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

            {/* HEADER */}
            <div className="mb-8 sm:mb-10 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight">
                    Solicita tu demostración
                </h2>
                <p className="mt-2 text-sm sm:text-base text-brand-muted">
                    Selecciona tu espacio y nuestra IA te conectará al instante, sin esperas.
                </p>
            </div>

            <div className="space-y-6">
                {/* SERVICIO */}
                <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-subtle">
                        Servicio a evaluar
                    </label>

                    <div className="relative group">
                        <select
                            className="w-full appearance-none rounded-2xl border border-white/10 bg-brand-dark/50 px-5 py-4 text-[16px] sm:text-sm text-white focus:border-accent focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50 transition-all duration-300 min-h-[56px] shadow-inner"
                            value={serviceId}
                            onChange={(e) => setServiceId(e.target.value)}
                            required
                            disabled={loadingServices || !!servicesError}
                        >
                            <option value="" className="text-brand-dark">
                                {loadingServices ? 'Cargando módulos...' : 'Selecciona un módulo'}
                            </option>

                            {services.map((service: Service) => (
                                <option key={service.id} value={service.id} className="text-brand-dark">
                                    {service.name} · {service.duration_minutes} min
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-brand-muted group-hover:text-accent transition-colors">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>

                    {servicesError && (
                        <p className="mt-2 text-xs text-red-400 font-medium">
                            No se pudieron cargar los servicios
                        </p>
                    )}
                </div>

                {/* FECHA Y HORA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-subtle">
                            Fecha preferida
                        </label>
                        <input
                            type="date"
                            className="w-full rounded-2xl border border-white/10 bg-brand-dark/50 px-5 py-4 text-[16px] sm:text-sm text-white focus:border-accent focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300 min-h-[56px] shadow-inner"
                            style={{ colorScheme: 'dark' }}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-subtle">
                            Hora ideal
                        </label>
                        <input
                            type="time"
                            className="w-full rounded-2xl border border-white/10 bg-brand-dark/50 px-5 py-4 text-[16px] sm:text-sm text-white focus:border-accent focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300 min-h-[56px] shadow-inner"
                            style={{ colorScheme: 'dark' }}
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* WHATSAPP */}
                <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-subtle">
                        WhatsApp (con código de país)
                    </label>
                    <input
                        type="tel"
                        placeholder="+57 300 123 4567"
                        className="w-full rounded-2xl border border-white/10 bg-brand-dark/50 px-5 py-4 text-[16px] sm:text-sm text-white placeholder:text-white/30 focus:border-accent focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300 min-h-[56px] shadow-inner"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                {/* CONFIRMACIÓN */}
                <label className="flex items-start sm:items-center gap-4 text-sm text-brand-muted cursor-pointer group mt-4 hover:text-white transition-colors p-2 -ml-2 rounded-xl hover:bg-white/5">
                    <div className="relative flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                        <input
                            type="checkbox"
                            checked={notifyWhatsapp}
                            onChange={(e) => setNotifyWhatsapp(e.target.checked)}
                            className="peer sr-only"
                        />
                        <div className="h-6 w-6 rounded-md border-2 border-white/20 bg-brand-dark/50 peer-checked:bg-accent peer-checked:border-accent transition-all flex items-center justify-center shadow-inner group-hover:border-accent/50"></div>
                        <svg className="absolute w-4 h-4 text-brand-dark opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="leading-tight">Deseo recibir confirmación inteligente y recordatorios vía WhatsApp IA.</span>
                </label>
            </div>

            {/* CTA */}
            <div className="mt-10">
                <button
                    type="submit"
                    disabled={loading || loadingServices || !serviceId}
                    className="relative w-full rounded-2xl bg-accent py-5 text-[16px] sm:text-base font-bold text-brand-dark shadow-[0_0_20px_rgba(0,255,163,0.3)] hover:shadow-[0_0_40px_rgba(0,255,163,0.6)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none overflow-hidden group"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        {loading ? 'Procesando conexión...' : 'Agendar Demostración'}
                        {!loading && (
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        )}
                    </span>
                    {/* Hover Glow Effect inside button */}
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
            </div>

            {/* MICROCOPY */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs font-medium text-brand-subtle">
                <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Seguro y 100% libre de SPAM
                </span>
                <span className="hidden sm:inline text-white/20">•</span>
                <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Respuesta Inmediata IA
                </span>
            </div>
        </form>
    )
}
