import SlideUp from "@/components/ui/motion/SlideUp";
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function EcommerceCTA() {
    return (
        <section
            id="contacto"
            className="px-4 py-16 sm:py-24 relative z-10 w-full"
        >
            <SlideUp>
                <div className="max-w-4xl mx-auto bg-brand-surface/80 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.1)]">
                    {/* Glow interno bg cyan */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6 relative z-10">
                        <Zap className="w-8 h-8 text-cyan-400 shrink-0" />
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-display font-semibold text-white mb-6 relative z-10 tracking-tight">
                        Vende tu catálogo entero <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-accent">
                            sin ceder tus ganancias
                        </span>
                    </h2>

                    <p className="mb-10 text-base sm:text-lg text-brand-muted max-w-xl mx-auto relative z-10">
                        Obtén tu propia tienda online conectada a WhatsApp. Rápida, exclusiva y configurada por expertos para convertir.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 relative z-10">
                        <a
                            href="https://wa.me/573024932976?text=Hola,%20quiero%20crear%20una%20tienda%20online%20para%20mi%20negocio."
                            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 px-10 py-5 text-base sm:text-lg font-bold text-brand-dark shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
                        >
                            Quiero mi tienda llave en mano
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
                            <p className="text-xs sm:text-sm text-white font-medium flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                Precio único $890.000 COP
                            </p>
                            <span className="hidden sm:inline-block text-brand-subtle/50">•</span>
                            <p className="text-xs sm:text-sm text-brand-subtle flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                0 Mensualidades
                            </p>
                            <span className="hidden sm:inline-block text-brand-subtle/50">•</span>
                            <p className="text-xs sm:text-sm text-brand-subtle flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                Dominio .com incluido
                            </p>
                        </div>
                    </div>
                </div>
            </SlideUp>
        </section>
    )
}
