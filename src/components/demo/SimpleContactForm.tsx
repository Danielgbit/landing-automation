'use client'

import { useState } from 'react'
import { buildWhatsappUrl } from '@/lib/whatsapp'

export default function SimpleContactForm() {
    const [name, setName] = useState('')
    const [service, setService] = useState('')

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!name || !service) return

        const message = `Hola, mi nombre es ${name} y estoy interesado en el servicio de ${service}.`
        window.open(buildWhatsappUrl(message), '_blank')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-16 rounded-2xl border border-gray-200 bg-brand-white p-6 shadow-card"
        >
            <h3 className="mb-6 text-center text-base font-semibold text-brand-primary">
                Escríbenos por WhatsApp
            </h3>

            <input
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-3 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-accent focus:outline-none"
                required
            />

            <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mb-6 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-accent focus:outline-none"
                required
            >
                <option value="">Selecciona un servicio</option>
                <option>Limpieza facial</option>
                <option>Masaje relajante</option>
                <option>Tratamiento corporal</option>
            </select>

            <button
                type="submit"
                className="w-full rounded-xl bg-accent py-3 text-sm font-medium text-white hover:bg-accent-hover transition"
            >
                Escribir por WhatsApp
            </button>
        </form>
    )
}
