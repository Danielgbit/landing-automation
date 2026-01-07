'use client'

import ServiceCard from '@/components/demo/ServiceCard'
import { useActiveServices } from '@/hooks/services/useActiveServices'

export default function ServiciosPage() {
    const {
        services,
        loading,
        error
    } = useActiveServices()

    return (
        <div className="mx-auto max-w-3xl px-4 pb-20 pt-16">
            {/* Header */}
            <header className="mb-10 text-center">
                <h1 className="text-3xl font-semibold">
                    Nuestros servicios
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                    Precios claros · Duración estimada · Atención sin llamadas
                </p>
            </header>

            {/* Estados */}
            {loading && (
                <p className="text-center text-sm text-gray-500">
                    Cargando servicios disponibles…
                </p>
            )}

            {error && (
                <p className="text-center text-sm text-red-500">
                    No pudimos cargar los servicios en este momento.
                </p>
            )}

            {!loading && !error && services.length === 0 && (
                <p className="text-center text-sm text-gray-500">
                    Actualmente no hay servicios disponibles.
                </p>
            )}

            {/* Lista */}
            <div className="space-y-4">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                    />
                ))}
            </div>

            {/* CTA WhatsApp */}
            <div className="mt-12 text-center">
                <p className="mb-3 text-sm text-gray-600">
                    ¿Tienes dudas o quieres más información?
                </p>

                <a
                    href="https://wa.me/573000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
                >
                    Escribir por WhatsApp
                </a>
            </div>

            {/* Footer confianza */}
            <p className="mt-8 text-center text-xs text-gray-400">
                Atención automatizada · Respuesta rápida · Sin compromisos
            </p>
        </div>
    )
}
