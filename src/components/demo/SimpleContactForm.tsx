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

        const url = buildWhatsappUrl(message)
        window.open(url, '_blank')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-2xl border bg-white p-6 shadow-sm"
        >
            <h3 className="mb-4 text-lg font-semibold text-center">
                Escríbenos por WhatsApp
            </h3>

            <input
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-3 w-full rounded-lg border px-3 py-2"
                required
            />

            <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mb-4 w-full rounded-lg border px-3 py-2"
                required
            >
                <option value="">
                    Selecciona un servicio
                </option>
                <option value="Limpieza facial">
                    Limpieza facial
                </option>
                <option value="Masaje relajante">
                    Masaje relajante
                </option>
                <option value="Tratamiento corporal">
                    Tratamiento corporal
                </option>
            </select>

            <button
                type="submit"
                className="w-full rounded-xl bg-black py-3 text-white transition hover:opacity-90"
            >
                Escribir por WhatsApp
            </button>
        </form>
    )
}
