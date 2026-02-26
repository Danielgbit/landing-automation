'use client'

import ServiceCard from '@/components/demo/services/ServiceCard'
import SlideUp from '@/components/ui/motion/SlideUp'
import ServicesSkeleton from '@/components/ui/ServicesSkeleton'
import { useActiveServices } from '@/hooks/services/useActiveServices'

export default function ServiciosPage() {
    const { services, loading, error } = useActiveServices()

    return (
        <main className="min-h-screen relative overflow-hidden bg-brand-dark selection:bg-accent/30">
            {/* BACKGROUND EXTRAS */}
            <div className="absolute inset-x-0 -top-40 h-[800px] w-full bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(0,255,163,0.05)_0%,transparent_100%)] pointer-events-none" />
            <div className="bg-noise absolute inset-0 -z-10 opacity-20 pointer-events-none" />

            <SlideUp>
                <div className="mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40 relative z-10">
                    {/* HEADER */}
                    <header className="mb-14 sm:mb-20 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-brand-muted mb-6">
                            Menú Digital 24/7
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-white tracking-tight">
                            Tus servicios, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent text-glow">siempre disponibles.</span>
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-brand-muted max-w-2xl mx-auto">
                            Nuestro asistente de IA informa sobre precios y tiempos, evitando que pierdas horas respondiendo las mismas preguntas en WhatsApp.
                        </p>
                    </header>

                    {/* LOADING */}
                    {loading && (
                        <div className="bg-brand-surface/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                            <ServicesSkeleton />
                        </div>
                    )}

                    {/* ERROR */}
                    {!loading && error && (
                        <div className="bg-red-500/10 border border-red-500/20 backdrop-blur-sm p-6 rounded-3xl text-center">
                            <p className="text-sm font-medium text-red-400">
                                No pudimos sincronizar los servicios ("{error}"). Por favor, recarga la página.
                            </p>
                        </div>
                    )}

                    {/* EMPTY */}
                    {!loading && !error && services.length === 0 && (
                        <div className="bg-brand-surface/40 border-dashed border-2 border-white/10 p-12 rounded-3xl text-center backdrop-blur-sm">
                            <p className="text-sm text-brand-subtle">
                                El catálogo está vacío. La IA informará a tus clientes que actualmente no hay servicios configurados.
                            </p>
                        </div>
                    )}

                    {/* LIST */}
                    {!loading && !error && services.length > 0 && (
                        <div className="space-y-4">
                            {services.map((service, index) => (
                                <SlideUp key={service.id} delay={index * 0.1}>
                                    <ServiceCard service={service} />
                                </SlideUp>
                            ))}
                        </div>
                    )}

                    {/* CTA WHATSAPP (LEAD GEN) */}
                    <div className="mt-20 sm:mt-28 tex-center">
                        <div className="bg-brand-surface/60 border border-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 sm:p-12 shadow-glow_subtle text-center relative overflow-hidden">
                            {/* Glow decorativo interno */}
                            <div className="absolute top-0 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-50" />

                            <h3 className="text-2xl font-display font-semibold text-white mb-3 relative">
                                Deja que la IA venda por ti.
                            </h3>
                            <p className="text-brand-muted text-sm sm:text-base mb-8 max-w-md mx-auto relative">
                                Interactúa con la IA en nuestra demo de WhatsApp y descubre cómo automatizar el envío de este mismo catálogo a tus clientes 24/7.
                            </p>

                            <a
                                href="https://wa.me/573024932976"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  inline-flex items-center justify-center gap-3
                  rounded-full bg-accent
                  px-8 py-4 sm:px-10 sm:py-5
                  text-sm font-extrabold text-brand-dark
                  shadow-[0_0_20px_rgba(0,255,163,0.3)] hover:shadow-[0_0_40px_rgba(0,255,163,0.6)] hover:scale-105
                  transition-all duration-300
                  w-full sm:w-auto relative
                "
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.46-1.761-1.633-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Probar Asistente de IA
                            </a>

                            {/* FOOTER CONFIANZA */}
                            <p className="mt-6 text-center text-xs text-brand-subtle flex justify-center items-center gap-2 relative">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Automatización instantánea · Sin fricción · Mayor conversión
                            </p>
                        </div>
                    </div>
                </div>
            </SlideUp>
        </main>
    )
}
