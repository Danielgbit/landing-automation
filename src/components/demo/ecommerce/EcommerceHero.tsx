import FadeIn from "@/components/ui/motion/FadeIn"
import SlideUp from "@/components/ui/motion/SlideUp"
import { ArrowRight, ShoppingCart, ShieldCheck } from "lucide-react"

export default function EcommerceHero() {
    return (
        <section className="relative px-4 pt-8 pb-16 sm:pt-16 sm:pb-24 text-center">
            {/* Contenido Principal */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <FadeIn delay={0.1}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs sm:text-sm font-medium text-cyan-300">
                            Demo Ecommerce en Vivo
                        </span>
                    </div>
                </FadeIn>

                <SlideUp delay={0.2}>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
                        Catálogo en línea. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-accent">
                            Cero comisiones por venta.
                        </span>
                    </h1>
                </SlideUp>

                <SlideUp delay={0.3}>
                    <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                        Deja de regalar tu margen a plataformas de terceros. Un e-commerce veloz, optimizado para móviles y conectado directamente al WhatsApp de tu negocio.
                    </p>
                </SlideUp>

                <SlideUp delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <a
                            href="#contacto"
                            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-4 text-sm sm:text-base font-bold text-brand-dark shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                        >
                            Quiero mi tienda
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#catalogo"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-surface/50 border border-white/10 backdrop-blur-md px-8 py-4 text-sm sm:text-base font-semibold text-white hover:bg-brand-surface hover:border-white/20 transition-colors duration-300 w-full sm:w-auto"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            Ver productos de prueba
                        </a>
                    </div>
                </SlideUp>

                <FadeIn delay={0.6}>
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm text-brand-subtle">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-cyan-500" />
                            <span>Pago directo</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-cyan-500" />
                            <span>Pedidos a tu celular</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-cyan-500" />
                            <span>Hosting rápido y seguro</span>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
