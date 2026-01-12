'use client'

import ServiceCard from '@/components/demo/services/ServiceCard'
import SlideUp from '@/components/ui/motion/SlideUp'
import ServicesSkeleton from '@/components/ui/ServicesSkeleton'
import { useActiveServices } from '@/hooks/services/useActiveServices'

export default function ServiciosPage() {
    const { services, loading, error } = useActiveServices()

    return (
        <main className="min-h-screen bg-brand-light">
            <SlideUp>
                <div className="mx-auto max-w-3xl px-4 pb-24 pt-16 sm:px-6 sm:pt-20">
                    {/* HEADER */}
                    <header className="mb-10 sm:mb-12 text-center">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-brand-primary">
                            Servicios disponibles
                        </h1>
                        <p className="mt-2 sm:mt-3 text-sm text-brand-muted">
                            Precios claros · Duración estimada · Atención sin llamadas
                        </p>
                    </header>

                    {/* LOADING */}
                    {loading && <ServicesSkeleton />}

                    {/* ERROR */}
                    {!loading && error && (
                        <p className="text-center text-sm text-state-error">
                            No pudimos cargar los servicios en este momento.
                        </p>
                    )}

                    {/* EMPTY */}
                    {!loading && !error && services.length === 0 && (
                        <p className="text-center text-sm text-brand-subtle">
                            Actualmente no hay servicios disponibles.
                        </p>
                    )}

                    {/* LIST */}
                    {!loading && !error && (
                        <div className="space-y-3 sm:space-y-4">
                            {services.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </div>
                    )}

                    {/* CTA WHATSAPP */}
                    <div className="mt-12 sm:mt-16 text-center">
                        <p className="mb-3 sm:mb-4 text-sm text-brand-muted">
                            ¿Tienes dudas o quieres más información?
                        </p>

                        <a
                            href="https://wa.me/573000000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex items-center justify-center
                rounded-xl bg-accent
                px-8 py-5 sm:px-6 sm:py-3
                text-base sm:text-sm font-medium text-white
                hover:bg-accent-hover transition
                w-full sm:w-auto
              "
                        >
                            Escribir por WhatsApp
                        </a>
                    </div>

                    {/* FOOTER CONFIANZA */}
                    <p className="mt-8 sm:mt-10 text-center text-xs text-brand-subtle">
                        Atención automatizada · Respuesta rápida · Sin compromisos
                    </p>
                </div>
            </SlideUp>
        </main>
    )
}
