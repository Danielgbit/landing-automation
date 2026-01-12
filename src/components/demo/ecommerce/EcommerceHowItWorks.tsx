export default function EcommerceHowItWorks() {
    const steps = [
        "El cliente entra a tu tienda",
        "Agrega productos al carrito",
        "Presiona comprar",
        "El pedido llega por WhatsApp",
    ]

    return (
        <section className="px-4 py-16 bg-brand-light">
            <h2 className="text-center text-xl font-semibold text-brand-primary">
                Cómo se realiza una venta
            </h2>

            <div className="mt-8 space-y-3 max-w-md mx-auto text-sm text-brand-muted">
                {steps.map((s, i) => (
                    <div key={s} className="flex gap-3 items-center">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-dark text-white text-xs">
                            {i + 1}
                        </span>
                        <span>{s}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
