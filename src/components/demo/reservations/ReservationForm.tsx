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
        max-w-md
        rounded-2xl
        bg-brand-white
        border border-gray-200
        p-5 sm:p-6
        shadow-card
      "
        >
            {/* HEADER */}
            <div className="mb-6 sm:mb-8 text-center">
                <h1 className="text-lg sm:text-xl font-semibold text-brand-primary">
                    Reserva tu cita
                </h1>
                <p className="mt-1 sm:mt-2 text-sm text-brand-muted">
                    Sin llamadas · Confirmación automática por WhatsApp
                </p>
            </div>

            {/* SERVICIO */}
            <div className="mb-4 sm:mb-5">
                <label className="mb-1 block text-xs font-medium text-brand-subtle">
                    Servicio
                </label>

                <select
                    className="w-full rounded-xl border border-gray-300 px-3 py-3 sm:py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:bg-gray-100"
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    required
                    disabled={loadingServices || !!servicesError}
                >
                    <option value="">
                        {loadingServices ? 'Cargando servicios...' : 'Selecciona un servicio'}
                    </option>

                    {services.map((service: Service) => (
                        <option key={service.id} value={service.id}>
                            {service.name} · {service.duration_minutes} min · {service.price}
                        </option>
                    ))}
                </select>

                {servicesError && (
                    <p className="mt-1 text-xs text-state-error">
                        No se pudieron cargar los servicios
                    </p>
                )}
            </div>

            {/* FECHA Y HORA */}
            <div className="mb-4 sm:mb-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label className="mb-1 block text-xs font-medium text-brand-subtle">
                        Fecha
                    </label>
                    <input
                        type="date"
                        className="w-full rounded-xl border border-gray-300 px-3 py-3 sm:py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="mb-1 block text-xs font-medium text-brand-subtle">
                        Hora
                    </label>
                    <input
                        type="time"
                        className="w-full rounded-xl border border-gray-300 px-3 py-3 sm:py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
            </div>

            {/* WHATSAPP */}
            <div className="mb-4 sm:mb-5">
                <label className="mb-1 block text-xs font-medium text-brand-subtle">
                    WhatsApp
                </label>
                <input
                    type="tel"
                    placeholder="3001234567"
                    className="w-full rounded-xl border border-gray-300 px-3 py-3 sm:py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>

            {/* CONFIRMACIÓN */}
            <label className="mb-5 flex items-center gap-2 text-xs text-brand-muted">
                <input
                    type="checkbox"
                    checked={notifyWhatsapp}
                    onChange={(e) => setNotifyWhatsapp(e.target.checked)}
                />
                Enviarme confirmación por WhatsApp
            </label>

            {/* CTA */}
            <button
                type="submit"
                disabled={loading || loadingServices || !serviceId}
                className="
          w-full
          rounded-xl
          bg-accent
          py-4 sm:py-3
          text-base sm:text-sm
          font-medium
          text-white
          hover:bg-accent-hover
          transition
          disabled:opacity-50
        "
            >
                {loading ? 'Agendando...' : 'Confirmar cita'}
            </button>

            {/* MICROCOPY */}
            <p className="mt-3 sm:mt-4 text-center text-xs text-brand-subtle">
                No necesitas crear cuenta · Atención automatizada
            </p>
        </form>
    )
}
