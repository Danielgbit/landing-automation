export default function SimpleServiceList() {
    const services = [
        'Limpieza facial',
        'Masaje relajante',
        'Tratamiento corporal',
    ]

    return (
        <section className="mt-14 rounded-2xl border border-gray-200 bg-brand-white p-6 shadow-soft">
            <h2 className="text-base font-semibold text-center text-brand-primary">
                Servicios disponibles
            </h2>

            <ul className="mt-6 space-y-2 text-sm text-brand-muted">
                {services.map((service) => (
                    <li
                        key={service}
                        className="flex items-center justify-between rounded-lg bg-brand-light px-3 py-2"
                    >
                        <span>{service}</span>
                        <span className="text-xs text-brand-subtle">
                            Disponible
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
