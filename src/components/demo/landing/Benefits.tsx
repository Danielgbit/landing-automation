import FadeIn from "@/components/ui/motion/FadeIn"
import SlideUp from "@/components/ui/motion/SlideUp"
import { XCircle, CheckCircle2 } from "lucide-react"

export default function Benefits() {
    const gaps = [
        {
            pain: 'Respondes "¿Precio?" 20 veces al día.',
            solution: 'El prospecto llega a WhatsApp sabiendo qué va a comprar y cuánto cuesta.',
        },
        {
            pain: 'Curiosos que te escriben y luego desaparecen.',
            solution: 'Micros-fricciones obligan a los prospectos a calificar su propio interés antes de enviarte el mensaje.',
        },
        {
            pain: 'Pierdes clientes los domingos o a las 10 PM.',
            solution: 'El embudo atiende de forma pasiva 24/7 y transfiere datos relevantes mientras descansas.',
        },
        {
            pain: 'Página web vieja que parece un folleto digital.',
            solution: 'Diseño asimétrico, oscuro y premium que asume autoridad inmediata e intimida a tu competencia.',
        },
    ]

    return (
        <section id="beneficios" className="px-4 py-16 bg-brand-surface/20 border-y border-white/5">
            <SlideUp>
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white mb-3">
                        El costo invisible de tu <span className="text-red-400">fricción comercial</span>
                    </h2>
                    <p className="text-brand-muted text-sm sm:text-base max-w-lg mx-auto">
                        No necesitas más leads de mala calidad, necesitas convertir el tráfico existente en ventas cerradas.
                    </p>
                </div>
            </SlideUp>

            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                {gaps.map((gap, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 bg-brand-dark/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
                            {/* Dolor (Pain) */}
                            <div className="flex-1 p-6 sm:p-8 bg-red-500/5 relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />
                                <div className="flex items-start gap-4">
                                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Tu realidad B2B actual</p>
                                        <p className="text-brand-muted text-sm">{gap.pain}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full sm:w-px h-px sm:h-auto bg-white/5" />

                            {/* Solución Automatizada */}
                            <div className="flex-1 p-6 sm:p-8 bg-accent/5 relative">
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Con Landing Automatizada</p>
                                        <p className="text-white text-sm font-medium">{gap.solution}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}
