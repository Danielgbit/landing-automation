/**
 * PROBLEMAS DEL CLIENTE
 * Estilo: Bento Box / Glassmorphism
 */

import SlideUp from "./ui/motion/SlideUp";
import FadeIn from "./ui/motion/FadeIn";

export default function Problems() {
    return (
        <section className="relative bg-brand-dark px-4 py-32 overflow-hidden">
            {/* Decors */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-surface_light opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 mx-auto max-w-6xl">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
                            ¿Te resulta familiar este caos?
                        </h2>
                        <p className="mt-4 text-brand-muted text-lg max-w-2xl mx-auto font-sans">
                            Tu negocio crece, pero tu tiempo desaparece en tareas repetitivas.
                        </p>
                    </div>
                </FadeIn>

                {/* Bento Grid layout */}
                <div className="grid gap-4 md:grid-cols-3">
                    {/* Tarjeta principal (doble ancho) */}
                    <SlideUp className="md:col-span-2">
                        <div className="h-full bg-brand-surface/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-brand-surface/60 transition-colors duration-300">
                            <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                                <span className="text-accent text-xl">💬</span>
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary mb-3">WhatsApp colapsado</h3>
                            <p className="text-brand-muted text-sm leading-relaxed">
                                Te escriben a toda hora, respondes tarde y cuando finalmente contestas, el cliente ya cerró con la competencia. Siempre preguntan los mismos precios y horarios.
                            </p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={0.1}>
                        <div className="h-full bg-brand-surface/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-brand-surface/60 transition-colors duration-300">
                            <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                                <span className="text-accent text-xl">🌙</span>
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary mb-3">Ventas perdidas de noche</h3>
                            <p className="text-brand-muted text-sm leading-relaxed">
                                Pierdes clientes potenciales fuera de tu horario de atención.
                            </p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={0.2}>
                        <div className="h-full bg-brand-surface/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-brand-surface/60 transition-colors duration-300">
                            <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                                <span className="text-accent text-xl">⏳</span>
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary mb-3">Sin tiempo libre</h3>
                            <p className="text-brand-muted text-sm leading-relaxed">
                                WhatsApp te quita tiempo crucial mientras estás trabajando en lo importante.
                            </p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={0.3} className="md:col-span-2">
                        <div className="h-full bg-brand-surface/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-brand-surface/60 transition-colors duration-300 relative overflow-hidden group">
                            <div className="absolute right-0 top-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] transition-all duration-500 group-hover:bg-accent/10"></div>
                            <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mb-6 relative z-10">
                                <span className="text-accent text-xl">📅</span>
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary mb-3 relative z-10">Agenda desorganizada</h3>
                            <p className="text-brand-muted text-sm leading-relaxed relative z-10">
                                No tienes un sistema claro para organizar citas, lo que lleva a empalmes y cancelaciones.
                            </p>
                        </div>
                    </SlideUp>
                </div>

                {/* Cierre emocional */}
                <FadeIn delay={0.4}>
                    <p className="mt-20 text-center text-lg text-brand-muted max-w-3xl mx-auto">
                        El problema no es que no tengas clientes.<br />
                        <span className="text-brand-primary text-xl font-medium mt-2 block">
                            El problema es que no tienes un sistema que los atienda por ti.
                        </span>
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}

