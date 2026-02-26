import DemoCard from "@/components/shared/DemoCard"
import SlideUp from "../ui/motion/SlideUp"
import FadeIn from "../ui/motion/FadeIn"

export default function Demos() {
    return (
        <section id="demos" className="relative bg-brand-dark px-4 py-24 sm:px-6 sm:py-32">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 mx-auto max-w-6xl">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-primary tracking-tight">
                            Mira cómo funcionaría en tu <span className="text-accent text-glow">negocio</span>
                        </h2>
                        <p className="mt-4 sm:mt-6 text-lg text-brand-muted max-w-2xl mx-auto">
                            Explora nuestras soluciones interactivas y descubre el poder de la automatización inteligente.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <SlideUp delay={0.1}>
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
                    </SlideUp>

                    <SlideUp delay={0.2}>
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
                    </SlideUp>

                    <SlideUp delay={0.3}>
                        <DemoCard
                            title="Tienda online (Ecommerce)"
                            description="Vende productos directamente desde tu propia tienda."
                            features={[
                                "Catálogo de productos",
                                "Carrito de compras",
                                "Pedidos por WhatsApp o pago",
                                "Dominio .com incluido",
                            ]}
                            href="/demo/ecommerce"
                            level="advanced"
                        />
                    </SlideUp>

                    <SlideUp delay={0.4}>
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
                    </SlideUp>

                    <SlideUp delay={0.5} className="md:col-span-2">
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
                    </SlideUp>
                </div>
            </div>
        </section>
    )
}

