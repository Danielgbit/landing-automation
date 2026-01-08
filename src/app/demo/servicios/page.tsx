
'use client'

import ServiceCard from '@/components/demo/ServiceCard'
import { useActiveServices } from '@/hooks/services/useActiveServices'

export default function ServiciosPage() {
    const {
        services,
        loading,
        error,
    } = useActiveServices()

    return (
        <main className="min-h-screen bg-brand-light">
            <div className="mx-auto max-w-3xl px-6 pb-24 pt-20">
                {/* ===================== */}
                {/* HEADER */}
                {/* ===================== */}
                <header className="mb-12 text-center">
                    <h1 className="text-2xl md:text-3xl font-semibold text-brand-primary">
                        Servicios disponibles
                    </h1>
                    <p className="mt-3 text-sm text-brand-muted">
                        Precios claros · Duración estimada · Atención sin llamadas
                    </p>
                </header>

                {/* ===================== */}
                {/* ESTADOS */}
                {/* ===================== */}
                {loading && (
                    <p className="text-center text-sm text-brand-subtle">
                        Cargando servicios disponibles…
                    </p>
                )}

                {error && (
                    <p className="text-center text-sm text-state-error">
                        No pudimos cargar los servicios en este momento.
                    </p>
                )}

                {!loading && !error && services.length === 0 && (
                    <p className="text-center text-sm text-brand-subtle">
                        Actualmente no hay servicios disponibles.
                    </p>
                )}

                {/* ===================== */}
                {/* LISTA */}
                {/* ===================== */}
                <div className="space-y-4">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}
                </div>

                {/* ===================== */}
                {/* CTA WHATSAPP */}
                {/* ===================== */}
                <div className="mt-16 text-center">
                    <p className="mb-4 text-sm text-brand-muted">
                        ¿Tienes dudas o quieres más información?
                    </p>

                    <a
                        href="https://wa.me/573000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              inline-flex items-center justify-center
              rounded-xl
              bg-accent
              px-6 py-3
              text-sm font-medium text-white
              hover:bg-accent-hover
              transition
            "
                    >
                        Escribir por WhatsApp
                    </a>
                </div>

                {/* ===================== */}
                {/* FOOTER CONFIANZA */}
                {/* ===================== */}
                <p className="mt-10 text-center text-xs text-brand-subtle">
                    Atención automatizada · Respuesta rápida · Sin compromisos
                </p>
            </div>
        </main>
    )
}
