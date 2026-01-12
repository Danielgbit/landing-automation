import FadeIn from "@/components/ui/motion/FadeIn"

export default function Benefits() {
    const benefits = [
        {
            title: 'Más clientes escribiéndote',
            description: 'La landing está diseñada para que cada visita termine en un mensaje por WhatsApp.',
        },
        {
            title: 'Menos preguntas repetidas',
            description: 'Tus servicios, precios y duración quedan claros antes de que te escriban.',
        },
        {
            title: 'Mensajes listos para responder',
            description: 'El cliente llega diciendo exactamente qué quiere, sin perder tiempo.',
        },
        {
            title: 'No pierdes oportunidades',
            description: 'Aunque no estés conectado, la página sigue recibiendo clientes.',
        },
    ]

    return (
        <section className="px-4 py-16 bg-brand-light">
            <FadeIn>
                <h2 className="text-center text-xl font-semibold text-brand-primary">
                    ¿Por qué esta landing funciona?
                </h2>

                <p className="mt-2 text-center text-sm text-brand-muted max-w-md mx-auto">
                    No es solo una página bonita, es una herramienta para generar conversaciones de venta.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
                    {benefits.map((b) => (
                        <div
                            key={b.title}
                            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-soft"
                        >
                            <p className="text-sm font-semibold text-brand-primary">
                                {b.title}
                            </p>
                            <p className="mt-2 text-sm text-brand-muted">
                                {b.description}
                            </p>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </section>
    )
}
