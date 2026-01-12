import SlideUp from "@/components/ui/motion/SlideUp"

export default function WhatYouGet() {
    const items = [
        'Landing page completa (no plantilla genérica)',
        'Menú de navegación con 3 secciones',
        'Botón flotante de WhatsApp',
        'Dominio .com incluido (tunegocio.com)',
        'Diseño optimizado para celulares',
        'Formulario de contacto conectado a WhatsApp',
    ]

    return (
        <section className="px-4 py-16 bg-white">
            <SlideUp>
                <h2 className="text-center text-xl font-semibold text-brand-primary">
                    Esto es lo que incluye tu landing
                </h2>

                <div className="mt-8 grid gap-4 max-w-md mx-auto">
                    {items.map(item => (
                        <div
                            key={item}
                            className="flex items-start gap-3 rounded-xl border border-gray-200 bg-brand-light px-4 py-3 text-sm"
                        >
                            <span className="text-accent">✓</span>
                            <span className="text-brand-muted">{item}</span>
                        </div>
                    ))}
                </div>
            </SlideUp>
        </section>
    )
}
