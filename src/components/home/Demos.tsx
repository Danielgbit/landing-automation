/**
 * DEMOS
 * Objetivo: demostrar valor real y reducir desconfianza
 */

import DemoCard from "@/components/shared/DemoCard";

export default function Demos() {
    return (
        <section id="demos" className="bg-brand-light px-6 py-24">
            <div className="mx-auto max-w-6xl">
                {/* Título */}
                <h2 className="text-xl md:text-2xl font-semibold text-center text-brand-primary">
                    Mira cómo funcionaría en tu negocio
                </h2>

                {/* Subtítulo */}
                <p className="mt-4 text-center text-sm text-brand-muted">
                    Empieza con lo básico y activa automatización avanzada cuando lo necesites.
                </p>

                {/* Grid de demos */}
                <div className="mt-16 grid gap-8 md:grid-cols-2">
                    <DemoCard
                        title="Landing profesional"
                        description="Convierte visitas en mensajes de WhatsApp."
                        features={[
                            "Página one-page clara",
                            "Servicios visibles",
                            "Formulario simple",
                            "Mensaje directo a WhatsApp",
                        ]}
                        href="/demo/landing"
                        level="base"
                    />

                    <DemoCard
                        title="Servicios y precios"
                        description="Reduce preguntas repetidas desde el primer contacto."
                        features={[
                            "Listado de servicios",
                            "Precios visibles",
                            "Duración clara",
                            "CTA a WhatsApp",
                        ]}
                        href="/demo/servicios"
                        level="base"
                    />

                    <DemoCard
                        title="Reservas por web"
                        description="Permite que tus clientes agenden sin llamarte."
                        features={[
                            "Formulario de reservas",
                            "Confirmación automática",
                            "Organización básica de citas",
                        ]}
                        href="/demo/reservas"
                        level="advanced"
                    />

                    <DemoCard
                        title="WhatsApp automático"
                        description="Atiende clientes 24/7 con un flujo guiado."
                        features={[
                            "Respuestas automáticas",
                            "Consulta de servicios",
                            "Inicio de agendamiento",
                        ]}
                        href="/demo/whatsapp-ia"
                        level="advanced"
                    />
                </div>
            </div>
        </section>
    );
}
