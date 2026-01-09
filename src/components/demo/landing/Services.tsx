export default function Services() {
    const services = ['Limpieza facial', 'Masajes', 'Tratamientos corporales']

    return (
        <section id="servicios" className="px-4 py-16 bg-white">
            <h2 className="text-center font-semibold text-xl">Servicios</h2>

            <div className="mt-8 space-y-3 max-w-md mx-auto">
                {services.map(s => (
                    <div key={s} className="bg-brand-light rounded-xl p-4 border shadow-soft">
                        {s}
                    </div>
                ))}
            </div>
        </section>
    )
}
