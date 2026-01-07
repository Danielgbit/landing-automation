export default function Benefits() {
    const benefits = [
        'Recibe mensajes claros y directos',
        'Evita llamadas innecesarias',
        'Mejora la experiencia del cliente',
        'Funciona 24/7 sin esfuerzo'
    ]

    return (
        <div className="mt-8 grid gap-3">
            {benefits.map((item) => (
                <div
                    key={item}
                    className="rounded-xl border bg-white p-4 text-sm shadow-sm"
                >
                    ✔ {item}
                </div>
            ))}
        </div>
    )
}
