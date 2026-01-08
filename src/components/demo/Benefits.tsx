export default function Benefits() {
    const benefits = [
        'Recibe mensajes claros y directos',
        'Evita llamadas innecesarias',
        'Mejora la experiencia del cliente',
        'Funciona 24/7 sin esfuerzo',
    ]

    return (
        <section className="mt-12 grid gap-3">
            {benefits.map((item) => (
                <div
                    key={item}
                    className="rounded-xl border border-gray-200 bg-brand-white px-4 py-3 text-sm text-brand-muted shadow-soft"
                >
                    {item}
                </div>
            ))}
        </section>
    )
}
