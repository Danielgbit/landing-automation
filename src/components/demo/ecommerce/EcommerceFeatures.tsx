export default function EcommerceFeatures() {
    const items = [
        "Catálogo de productos",
        "Carrito de compras",
        "Pedidos por WhatsApp o pago",
        "Página de producto",
        "Diseño para celular y PC",
        "Dominio .com incluido",
    ]

    return (
        <section className="px-4 py-16 bg-brand-light">
            <h2 className="text-center text-xl font-semibold text-brand-primary">
                Todo lo que necesita tu tienda
            </h2>

            <div className="mt-8 grid gap-4 max-w-md mx-auto">
                {items.map((item) => (
                    <div
                        key={item}
                        className="flex gap-3 items-start rounded-xl bg-white border border-gray-200 px-4 py-3 text-sm text-brand-muted shadow-soft"
                    >
                        <span className="text-accent">✓</span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
