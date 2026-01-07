export default function SimpleServiceList() {
    const services = [
        'Limpieza facial',
        'Masaje relajante',
        'Tratamiento corporal'
    ]

    return (
        <div className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-center">
                Servicios disponibles
            </h2>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {services.map((service) => (
                    <li
                        key={service}
                        className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2"
                    >
                        <span>{service}</span>
                        <span className="text-xs text-gray-400">
                            Disponible
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
