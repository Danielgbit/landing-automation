import FadeIn from "@/components/ui/motion/FadeIn"

export default function FAQ() {
    const faqs = [
        {
            q: '¿Qué estoy comprando exactamente?',
            a: 'Una landing page profesional diseñada para que tus clientes te escriban por WhatsApp para comprar o reservar.',
        },
        {
            q: '¿Esto es solo una página o algo más?',
            a: 'Es una página optimizada para ventas, con botones, secciones y mensajes preparados para convertir visitas en conversaciones.',
        },
        {
            q: '¿Incluye WhatsApp?',
            a: 'Sí. Incluye botón flotante, botones dentro de la página y mensajes listos para enviar.',
        },
        {
            q: '¿Puedo usarla con mi negocio?',
            a: 'Sí. Se personaliza con tu nombre, servicios, precios y datos.',
        },
        {
            q: '¿Funciona en celulares?',
            a: 'Sí. Está diseñada primero para móvil, que es donde llegan la mayoría de tus clientes.',
        },
    ]

    return (
        <section id="faq" className="px-4 py-16 bg-brand-light">
            <FadeIn>
                <h2 className="text-center text-xl font-semibold text-brand-primary">
                    Preguntas frecuentes
                </h2>

                <div className="mt-10 grid gap-4 max-w-3xl mx-auto">
                    {faqs.map((item) => (
                        <div
                            key={item.q}
                            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-soft"
                        >
                            <p className="text-sm font-semibold text-brand-primary">
                                {item.q}
                            </p>
                            <p className="mt-2 text-sm text-brand-muted">
                                {item.a}
                            </p>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </section>
    )
}
