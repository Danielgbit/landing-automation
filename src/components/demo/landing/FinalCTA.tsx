import SlideUp from "@/components/ui/motion/SlideUp";
import { ArrowRight, Zap } from "lucide-react";

export default function FinalCTA() {
    return (
        <section
            id="contacto"
            className="px-4 py-12 sm:py-24"
        >
            <SlideUp>
                <div className="max-w-4xl mx-auto bg-brand-surface/60 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_0_80px_rgba(0,255,163,0.05)]">
                    {/* Glow interno */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-6 relative z-10">
                        <Zap className="w-8 h-8 text-accent shrink-0" />
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-display font-semibold text-white mb-6 relative z-10 tracking-tight">
                        Construyamos tu motor <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
                            de captación hoy mismo
                        </span>
                    </h2>

                    <p className="mb-10 text-base sm:text-lg text-brand-muted max-w-xl mx-auto relative z-10">
                        Deja de perder tiempo en prospectos que no compran y empieza a agendar clientes perfilados en menos de 48 horas.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 relative z-10">
                        <a
                            href="https://wa.me/573024932976?text=Hola,%20quiero%20crear%20una%20landing%20page%20para%20mi%20negocio."
                            className="group inline-flex items-center gap-2 rounded-full bg-accent px-10 py-5 text-base sm:text-lg font-bold text-brand-dark shadow-[0_0_30px_rgba(0,255,163,0.3)] hover:shadow-[0_0_60px_rgba(0,255,163,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
                        >
                            Quiero mi landing automatizada
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <p className="mt-3 text-xs text-brand-subtle flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Cupos limitados para implementación de 48h
                        </p>
                    </div>
                </div>
            </SlideUp>
        </section>
    )
}
