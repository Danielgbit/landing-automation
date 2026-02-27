import FadeIn from "@/components/ui/motion/FadeIn"
import SlideUp from "@/components/ui/motion/SlideUp"
import { Eye, Pointer, Send } from "lucide-react"

export default function EcommerceHowItWorks() {
    const steps = [
        {
            title: "1. Exploración sin fricción",
            desc: "Tu prospecto aterriza en tu catálogo de alta gama, navegando tu oferta sin distracciones ni botones que no llevan a nada.",
            icon: Eye,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/30"
        },
        {
            title: "2. Selección al instante",
            desc: "El cliente elige el servicio, curso o pre-venta. Toda la persuasión y variables ocurren en esta misma arquitectura.",
            icon: Pointer,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/30"
        },
        {
            title: "3. Conversión directa a WA",
            desc: "Un solo clic envía el nombre del producto, el precio y un mensaje de saludo directamente a tu chat de WhatsApp personal.",
            icon: Send,
            color: "text-accent",
            bg: "bg-accent/10",
            border: "border-accent/30"
        },
    ]

    return (
        <section className="px-4 py-16 sm:py-24 relative z-10 w-full overflow-hidden">
            <SlideUp>
                <div className="text-center mb-16 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white mb-4">
                        El atajo más rápido <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                            hacia la transferencia bancaria
                        </span>
                    </h2>
                    <p className="text-brand-muted text-sm sm:text-base max-w-xl mx-auto">
                        Adiós a los abandonos de carrito del 70%. Transformamos clics en conversaciones de alto intento de forma inmediata.
                    </p>
                </div>
            </SlideUp>

            <div className="max-w-5xl mx-auto relative">
                {/* Línea conectora (Desktop) */}
                <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-accent/20" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <FadeIn key={step.title} delay={i * 0.2}>
                                <div className="relative flex flex-col items-center text-center group">
                                    {/* Icon Container */}
                                    <div className={`w-24 h-24 rounded-3xl ${step.bg} ${step.border} border backdrop-blur-md flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-500 shadow-xl`}>
                                        <div className="absolute inset-0 rounded-3xl bg-noise mix-blend-overlay opacity-20" />
                                        <Icon className={`w-10 h-10 ${step.color}`} strokeWidth={1.5} />
                                    </div>

                                    {/* Línea conectora (Mobile) */}
                                    {i !== steps.length - 1 && (
                                        <div className="md:hidden absolute top-24 bottom-[-3rem] left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-white/10 to-transparent" />
                                    )}

                                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-brand-muted leading-relaxed max-w-[280px]">
                                        {step.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
