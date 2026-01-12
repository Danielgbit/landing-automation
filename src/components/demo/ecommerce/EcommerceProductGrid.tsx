import { ShoppingBag } from "lucide-react"

const products = [
    { name: "Crema facial", price: "$45.000" },
    { name: "Aceite corporal", price: "$38.000" },
    { name: "Kit spa", price: "$120.000" },
    { name: "Mascarilla", price: "$29.000" },
]

export default function EcommerceProductGrid() {
    return (
        <section className="px-4 py-16 bg-white">
            <h2 className="text-center text-xl font-semibold text-brand-primary">
                Así se verán tus productos
            </h2>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {products.map((product) => (
                    <div
                        key={product.name}
                        className="
              rounded-2xl border border-gray-200 bg-brand-white
              p-4 shadow-soft
              flex flex-col
              hover:shadow-card transition
            "
                    >
                        {/* Imagen falsa */}
                        <div className="h-32 rounded-xl bg-brand-light flex items-center justify-center mb-4">
                            <ShoppingBag className="w-10 h-10 text-brand-subtle" />
                        </div>

                        <p className="font-medium text-brand-primary text-sm">
                            {product.name}
                        </p>

                        <p className="text-xs text-brand-muted mb-3">
                            {product.price}
                        </p>

                        <button className="mt-auto text-xs font-medium text-accent hover:text-accent-hover">
                            Agregar al carrito
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}
