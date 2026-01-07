// src/components/demo/ReservationForm.tsx
'use client'

import { useState } from 'react'
import { useActiveServices } from '@/hooks/services/useActiveServices'
import { Service } from '@/services/services.service'

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

    const {
        services,
        loading: loadingServices,
        error: servicesError
    } = useActiveServices()

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (!serviceId) return

        onSubmit({
            phone,
            serviceId,
            date,
            time,
            notifyWhatsapp
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-md rounded-2xl border bg-white p-6 shadow-sm"
        >
            {/* Header */}
            <div className="mb-6 text-center">
                <h1 className="text-2xl font-semibold">
                    Reserva tu cita
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                    Sin llamadas · Confirmación automática por WhatsApp
                </p>
            </div>

            {/* Servicio */}
            <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">
                    Servicio
                </label>

                <select
                    className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100"
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    required
                    disabled={loadingServices || !!servicesError}
                >
                    <option value="">
                        {loadingServices
                            ? 'Cargando servicios...'
                            : 'Selecciona un servicio'}
                    </option>

                    {services.map((service: Service) => (
                        <option
                            key={service.id}
                            value={service.id}
                        >
                            {service.name} · {service.duration_minutes} min · $
                            {service.price}
                        </option>
                    ))}
                </select>

                {servicesError && (
                    <p className="mt-1 text-xs text-red-500">
                        No se pudieron cargar los servicios
                    </p>
                )}
            </div>

            {/* Fecha y hora */}
            <div className="mb-4 grid grid-cols-2 gap-3">
                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Fecha
                    </label>
                    <input
                        type="date"
                        className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Hora
                    </label>
                    <input
                        type="time"
                        className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
            </div>

            {/* WhatsApp */}
            <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">
                    WhatsApp
                </label>
                <input
                    type="tel"
                    placeholder="3001234567"
                    className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>

            {/* Confirmación */}
            <label className="mb-6 flex items-center gap-2 text-sm text-gray-600">
                <input
                    type="checkbox"
                    checked={notifyWhatsapp}
                    onChange={(e) =>
                        setNotifyWhatsapp(e.target.checked)
                    }
                />
                Enviarme confirmación por WhatsApp
            </label>

            {/* CTA */}
            <button
                type="submit"
                disabled={
                    loading ||
                    loadingServices ||
                    !serviceId
                }
                className="w-full rounded-xl bg-black py-3 text-white transition hover:opacity-90 disabled:opacity-50"
            >
                {loading ? 'Agendando...' : 'Confirmar cita'}
            </button>

            <p className="mt-4 text-center text-xs text-gray-400">
                No necesitas crear cuenta · Atención automatizada
            </p>
        </form>
    )
}
