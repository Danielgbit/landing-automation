import FadeIn from "@/components/ui/motion/FadeIn";
import SlideUp from "@/components/ui/motion/SlideUp";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="px-4 py-12 sm:py-20 text-center relative">
            <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs sm:text-sm font-semibold text-accent mb-8 shadow-[0_0_15px_rgba(0,255,163,0.15)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    Tasa de conversión x3 garantizada
                </div>
            </FadeIn>

            <SlideUp delay={0.1}>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
                    Deja de perder ventas <br className="hidden sm:block" /> por{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400 text-glow">
                        responder tarde.
                    </span>
                </h1>
            </SlideUp>

            <SlideUp delay={0.2}>
                <p className="mt-6 text-base sm:text-lg md:text-xl text-brand-muted max-w-2xl mx-auto font-light leading-relaxed">
                    Atiende al instante, filtra curiosos y agenda clientes listos para comprar 24/7. Tu web y tu WhatsApp trabajando sincronizados mientras duermes.
                </p>
            </SlideUp>

            <SlideUp delay={0.3}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#contacto"
                        className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 sm:px-10 sm:py-4 text-base font-extrabold text-brand-dark shadow-[0_0_20px_rgba(0,255,163,0.25)] hover:shadow-[0_0_40px_rgba(0,255,163,0.5)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
                    >
                        Quiero automatizar mis ventas
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#beneficios"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 sm:px-10 sm:py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                        Ver cómo funciona
                    </a>
                </div>

                <p className="mt-5 text-xs text-brand-subtle flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Seguro, escalable y sin código
                </p>
            </SlideUp>
        </section>
    )
}
