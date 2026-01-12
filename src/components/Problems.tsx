/**
 * PROBLEMAS DEL CLIENTE
 * Objetivo: identificación emocional + preparación para la solución
 */

import SlideUp from "./ui/motion/SlideUp";

export default function Problems() {
    return (
        <section className="bg-brand-light px-6 py-24">
            <SlideUp>
                <div className="mx-auto max-w-5xl">
                    {/* Título */}
                    <h2 className="text-xl md:text-2xl font-semibold text-center text-brand-primary">
                        ¿Te pasa algo de esto en tu negocio?
                    </h2>

                    {/* Lista de problemas */}
                    <ul className="mt-12 grid gap-4 md:grid-cols-2">
                        {[
                            'Te escriben por WhatsApp y respondes tarde',
                            'Siempre preguntan precios, horarios o servicios',
                            'Pierdes clientes fuera de tu horario de atención',
                            'WhatsApp te quita tiempo mientras estás trabajando',
                            'No tienes un sistema claro para organizar citas',
                        ].map((problem) => (
                            <li
                                key={problem}
                                className="bg-brand-white border border-gray-200 rounded-2xl px-6 py-4 text-sm text-brand-muted shadow-soft"
                            >
                                {problem}
                            </li>
                        ))}
                    </ul>

                    {/* Cierre emocional */}
                    <p className="mt-12 text-center text-sm text-brand-muted max-w-3xl mx-auto">
                        El problema no es que no tengas clientes.
                        <br />
                        <span className="text-brand-primary font-medium">
                            El problema es que no tienes un sistema que los atienda por ti.
                        </span>
                    </p>
                </div>
            </SlideUp>
        </section>
    );
}
