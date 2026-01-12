export default function EcommerceCTA() {
    return (
        <section
            id="contacto"
            className="px-4 py-20 bg-brand-dark text-white text-center"
        >
            <h2 className="text-2xl sm:text-3xl font-semibold">
                Vende online sin pagar comisiones
            </h2>

            <p className="mt-4 text-sm sm:text-base text-brand-subtle max-w-md mx-auto">
                Te entregamos tu tienda lista para vender con dominio propio y pedidos por WhatsApp.
            </p>

            <a
                href="https://wa.me/573024932976"
                className="mt-10 inline-flex rounded-xl bg-accent px-10 py-5 text-white font-medium hover:bg-accent-hover transition"
            >
                Quiero mi tienda
            </a>

            <p className="mt-4 text-xs text-brand-subtle">
                Precio único · $890.000 COP · Sin mensualidades
            </p>
        </section>
    )
}
