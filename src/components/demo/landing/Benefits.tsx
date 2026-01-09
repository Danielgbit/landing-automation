export default function Benefits() {
    const benefits = [
        'Los clientes ven tus servicios en segundos',
        'Un botón los lleva directo a WhatsApp',
        'Te escriben con el mensaje listo',
        'No pierdes oportunidades'
    ]

    return (
        <section className="px-4 py-16 bg-brand-light">
            <h2 className="text-center font-semibold text-xl">
                ¿Por qué esta landing funciona?
            </h2>

            <div className="mt-8 grid gap-4 max-w-md mx-auto">
                {benefits.map(b => (
                    <div key={b} className="bg-white p-4 rounded-xl border">
                        {b}
                    </div>
                ))}
            </div>
        </section>
    )
}
