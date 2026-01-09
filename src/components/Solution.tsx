/**
 * SOLUCIÓN
 * Objetivo: explicar el sistema de forma clara y lógica
 */

import FadeIn from "./motion/FadeIn";
import SlideUp from "./motion/SlideUp";

export default function Solution() {
    return (
        <section id="solucion" className="bg-brand-white px-6 py-24">
            <div className="mx-auto max-w-5xl text-center">
                {/* Título */}
                <FadeIn>
                    <h2 className="text-xl md:text-2xl font-semibold text-brand-primary">
                        Un sistema simple que trabaja por ti
                    </h2>
                </FadeIn>

                {/* Flujo */}
                <div className="mt-14 grid gap-6 md:grid-cols-5">
                    {[
                        'El cliente entra a tu página',
                        'Inicia conversación por WhatsApp',
                        'El sistema responde automáticamente',
                        'Se agenda una cita',
                        'Tú solo atiendes al cliente',
                    ].map((step, index) => (
                        <SlideUp key={step}>
                            <div
                                key={step}
                                className="bg-brand-light border border-gray-200 rounded-2xl px-4 py-6 text-sm text-brand-muted shadow-soft"
                            >
                                <div className="mb-2 text-xs font-medium text-brand-subtle">
                                    Paso {index + 1}
                                </div>
                                <p>{step}</p>
                            </div>
                        </SlideUp>
                    ))}
                </div>

                {/* Cierre */}
                <FadeIn>
                    <p className="mt-14 text-sm text-brand-muted max-w-2xl mx-auto">
                        Tú te enfocas en tu negocio.
                        <br />
                        <span className="text-brand-primary font-medium">
                            El sistema se encarga de los mensajes y las citas.
                        </span>
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
