import SlideUp from "@/components/ui/motion/SlideUp"
import FadeIn from "@/components/ui/motion/FadeIn"
import { LayoutTemplate, MessageSquare, Globe, Smartphone, Zap, ShieldCheck } from "lucide-react"

export default function WhatYouGet() {
    return (
        <section className="px-4 py-16 relative">
            <SlideUp>
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Todo el ecosistema</span>
                        <br />listo para convertir
                    </h2>
                    <p className="text-brand-muted max-w-xl mx-auto text-sm sm:text-base">
                        No entregamos plantillas. Configuramos un embudo B2B operativo en 48 horas, optimizado para capturar el intento de compra de tu cliente.
                    </p>
                </div>
            </SlideUp>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                {/* Gran Bloque Izquierdo */}
                <FadeIn delay={0.1} className="md:col-span-2 md:row-span-2">
                    <div className="h-full rounded-[2rem] border border-white/5 bg-brand-surface/30 p-8 sm:p-10 backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500" />
                        <LayoutTemplate className="w-10 h-10 text-accent mb-6" />
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">Estructura Conversion-First</h3>
                        <p className="text-brand-muted sm:max-w-sm">
                            Diseñada bajo heurísticas de Lead Gen. Secciones claras: Hero orientado a problemas, matriz de valor, resolución de objeciones (FAQ) y CTA focalizado.
                        </p>
                    </div>
                </FadeIn>

                {/* Bloque Superior Derecho */}
                <FadeIn delay={0.2} className="md:col-span-1 md:row-span-1">
                    <div className="h-full rounded-[2rem] border border-white/5 bg-brand-surface/30 p-6 sm:p-8 backdrop-blur-sm hover:border-accent/30 transition-colors duration-300">
                        <MessageSquare className="w-8 h-8 text-white/70 mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Lead Sync directo a WhatsApp</h3>
                        <p className="text-sm text-brand-muted">
                            Los formularios no van a un excel olvidado. Llegan a tu WhatsApp listos para cerrar.
                        </p>
                    </div>
                </FadeIn>

                {/* Bloque Medio Derecho */}
                <FadeIn delay={0.3} className="md:col-span-1 md:row-span-1">
                    <div className="h-full rounded-[2rem] border border-white/5 bg-brand-surface/30 p-6 sm:p-8 backdrop-blur-sm hover:border-accent/30 transition-colors duration-300">
                        <Smartphone className="w-8 h-8 text-white/70 mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Mobile nativo</h3>
                        <p className="text-sm text-brand-muted">
                            El 85% del tráfico B2B hoy es móvil. Experiencia fluida "thumb-friendly".
                        </p>
                    </div>
                </FadeIn>

                {/* Bloque Inferior Izquierdo */}
                <FadeIn delay={0.4} className="md:col-span-1 md:row-span-1">
                    <div className="h-full flex flex-col justify-end rounded-[2rem] border border-white/5 bg-gradient-to-t from-accent/10 to-transparent p-6 sm:p-8 backdrop-blur-sm">
                        <Globe className="w-8 h-8 text-accent mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Dominio Incluido</h3>
                        <p className="text-sm text-brand-muted">Tu marca.com configurada y securizada (SSL).</p>
                    </div>
                </FadeIn>

                {/* Bloque Inferior Medio */}
                <FadeIn delay={0.5} className="md:col-span-2 md:row-span-1">
                    <div className="h-full rounded-[2rem] border border-white/5 bg-brand-surface/30 p-6 sm:p-8 backdrop-blur-sm flex items-center justify-between gap-6 overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                        <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4 sm:mb-2" />
                                <h3 className="text-lg font-semibold text-white">Cero riesgo técnico</h3>
                            </div>
                            <p className="text-sm text-brand-muted sm:max-w-xs text-left sm:text-right">
                                Hosting, mantenimiento y seguridad cubiertos. Tú solo atiende clientes.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
