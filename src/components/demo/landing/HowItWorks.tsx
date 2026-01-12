import SlideUp from "@/components/ui/motion/SlideUp"

export default function WhatYouGet() {
    const items = [
        {
            title: 'Landing page profesional',
            description: 'Una página diseñada para convertir visitas en mensajes de WhatsApp.',
        },
        {
            title: 'Menú de navegación (3 secciones)',
            description: 'Tu sitio tendrá estructura real: servicios, preguntas y contacto.',
        },
        {
            title: 'Botón flotante de WhatsApp',
            description: 'Siempre visible para que el cliente te escriba en cualquier momento.',
        },
        {
            title: 'Dominio .com incluido',
            description: 'Tu negocio tendrá su propio sitio: tunegocio.com.',
        },
        {
            title: 'Diseño optimizado para celulares',
            description: 'Más del 80% de tus clientes entran desde el móvil.',
        },
        {
            title: 'Formulario conectado a WhatsApp',
            description: 'El cliente escribe y te llega el mensaje listo para atender.',
        },
    ]

    return (
        <section className="px-4 py-16 bg-white">
            <SlideUp>
                <h2 className="text-center text-xl font-semibold text-brand-primary">
                    Todo lo que recibes por $300.000
                </h2>

                <p className="mt-2 text-center text-sm text-brand-muted max-w-md mx-auto">
                    No es solo una página. Es una herramienta completa para recibir clientes por WhatsApp.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-gray-200 bg-brand-light p-5 shadow-soft"
                        >
                            <p className="flex items-center gap-2 text-sm font-semibold text-brand-primary">
                                <span className="text-accent">✓</span>
                                {item.title}
                            </p>
                            <p className="mt-2 text-sm text-brand-muted">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </SlideUp>
        </section>
    )
}
