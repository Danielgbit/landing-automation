/**
 * DEMOS
 * Objetivo: demostrar valor real y reducir desconfianza
 */

import DemoCard from "@/components/shared/DemoCard";

export default function Demos() {
    return (
        <section id="demos" className="bg-gray-50 px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Prueba cómo funcionaría en tu negocio
                </h2>

                <p className="mt-4 text-center text-gray-600">
                    Empieza simple y automatiza cuando lo necesites.
                </p>

                <div className="mt-14 grid gap-8 md:grid-cols-2">
                    <DemoCard
                        title="Landing profesional"
                        description="Una página clara para que te escriban por WhatsApp."
                        features={[
                            "Página one-page",
                            "Servicios",
                            "Formulario simple",
                            "Mensaje directo a WhatsApp"
                        ]}
                        href="/demo/landing"
                    />

                    <DemoCard
                        title="Servicios y precios claros"
                        description="Reduce preguntas repetidas y gana tiempo."
                        features={[
                            "Listado de servicios",
                            "Precios visibles",
                            "Duración",
                            "CTA a WhatsApp"
                        ]}
                        href="/demo/servicios"
                    />

                    <DemoCard
                        title="Reservas por web"
                        description="Permite que tus clientes agenden sin llamarte."
                        features={[
                            "Formulario de reservas",
                            "Confirmación automática",
                            "Organización básica"
                        ]}
                        href="/demo/reservas"
                    />

                    <DemoCard
                        title="WhatsApp automático (IA)"
                        description="Atiende clientes 24/7 como si fueras tú."
                        features={[
                            "Respuestas automáticas",
                            "Consulta de servicios",
                            "Inicio de agendamiento"
                        ]}
                        href="/demo/whatsapp-ia"
                    />
                </div>
            </div>
        </section>
    );
}
