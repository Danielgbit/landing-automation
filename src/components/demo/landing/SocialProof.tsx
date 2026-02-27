import SlideUp from "@/components/ui/motion/SlideUp"
import { Star } from "lucide-react"
import FadeIn from "@/components/ui/motion/FadeIn"

export default function SocialProof() {
    return (
        <section className="px-4 py-12 border-y border-white/5 bg-brand-surface/20 relative">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Metric Case */}
                <SlideUp className="flex-1">
                    <div className="flex flex-col gap-2">
                        <div className="flex text-accent">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-display font-medium text-white max-w-sm">
                            "Pasamos de contestar mensajes a las 11 PM a encontrar la agenda llena cada mañana."
                        </h3>
                        <div className="flex items-center gap-3 mt-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/40 to-cyan-500/40 border border-white/10" />
                            <div>
                                <p className="text-sm font-semibold text-white">Centro Médico Vital</p>
                                <p className="text-xs text-brand-subtle">Aumento del 240% en reservas</p>
                            </div>
                        </div>
                    </div>
                </SlideUp>

                {/* divider for mobile */}
                <div className="w-full h-px bg-white/5 md:hidden" />
                {/* divider for desktop */}
                <div className="hidden md:block w-px h-32 bg-white/5" />

                <div className="flex-1 grid grid-cols-2 gap-6 w-full">
                    <FadeIn delay={0.1}>
                        <div className="text-center md:text-left">
                            <p className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">
                                +80<span className="text-accent">%</span>
                            </p>
                            <p className="text-xs sm:text-sm text-brand-muted">Tiempo de respuesta automatizado</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="text-center md:text-left">
                            <p className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">
                                24<span className="text-accent">/</span>7
                            </p>
                            <p className="text-xs sm:text-sm text-brand-muted">Captación de leads sin pausas</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
