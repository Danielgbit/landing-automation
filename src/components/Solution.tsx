/**
 * SOLUCIÓN
 * Flujo: Terminal/Stepper de alta tecnología
 */

import FadeIn from "./ui/motion/FadeIn";
import SlideUp from "./ui/motion/SlideUp";

export default function Solution() {
    return (
        <section id="solucion" className="relative bg-brand-dark px-4 py-32 border-y border-white/5">
            <div className="mx-auto max-w-6xl">
                {/* Título */}
                <FadeIn>
                    <div className="text-center mb-20">
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-primary">
                            Un sistema autónomo que trabaja <span className="text-accent">24/7</span>
                        </h2>
                    </div>
                </FadeIn>

                {/* Flujo Stepper Cyber */}
                <div className="grid gap-6 md:grid-cols-5 relative">
                    {/* Línea conectora de fondo horizontal para desktop */}
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

                    {[
                        'El cliente entra a tu web o IG',
                        'Inicia conversación en WhatsApp',
                        'El bot califica y responde',
                        'El sistema agenda la cita',
                        'Tú solo cobras y atiendes',
                    ].map((step, index) => (
                        <SlideUp key={step} delay={index * 0.1}>
                            <div className="relative group">
                                {/* Círculo del número conectado a la línea */}
                                <div className="h-14 w-14 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center mx-auto mb-6 relative z-10 transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-glow_subtle">
                                    <span className="font-display font-bold text-lg text-brand-muted group-hover:text-accent transition-colors">
                                        0{index + 1}
                                    </span>
                                </div>

                                <div className="text-center bg-brand-surface/20 backdrop-blur-sm border border-transparent rounded-2xl p-5 hover:border-white/5 transition-colors duration-300">
                                    <p className="text-sm text-brand-muted group-hover:text-brand-primary transition-colors">
                                        {step}
                                    </p>
                                </div>
                            </div>
                        </SlideUp>
                    ))}
                </div>

                {/* Cierre */}
                <FadeIn delay={0.6}>
                    <div className="mt-24 p-8 rounded-3xl bg-brand-surface_light/30 border border-white/5 text-center max-w-3xl mx-auto backdrop-blur-md">
                        <p className="text-lg text-brand-muted">
                            Tú te enfocas en el trabajo de alto valor.
                            <br />
                            <span className="text-brand-primary text-xl font-medium block mt-2">
                                La IA se encarga de todo lo demás.
                            </span>
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

