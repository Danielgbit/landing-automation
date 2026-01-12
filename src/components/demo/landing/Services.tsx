import FadeIn from "@/components/ui/motion/FadeIn"

export default function Services() {
    const services = [
        { name: 'Limpieza facial', price: '$60.000', duration: '60 min' },
        { name: 'Masajes relajantes', price: '$80.000', duration: '60 min' },
        { name: 'Tratamientos corporales', price: '$120.000', duration: '90 min' },
    ]

    return (
        <section id="servicios" className="px-4 py-16 bg-white">
            <FadeIn>
                <h2 className="text-center text-xl font-semibold text-brand-primary">
                    Servicios que verá tu cliente
                </h2>

                <p className="mt-2 text-center text-sm text-brand-muted">
                    Esta es la información que aparecerá en tu landing para convertir visitas en mensajes.
                </p>

                <div className="mt-10 grid gap-4 max-w-2xl mx-auto">
                    {services.map((s) => (
                        <div
                            key={s.name}
                            className="flex items-center justify-between rounded-2xl border border-gray-200 bg-brand-light px-5 py-4 shadow-soft"
                        >
                            <div>
                                <p className="text-sm font-medium text-brand-primary">
                                    {s.name}
                                </p>
                                <p className="text-xs text-brand-subtle">
                                    {s.duration}
                                </p>
                            </div>

                            <span className="text-sm font-semibold text-brand-primary">
                                {s.price}
                            </span>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </section >
    )
}
