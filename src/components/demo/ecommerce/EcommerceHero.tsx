export default function EcommerceHero() {
    return (
        <section className="px-4 pt-28 pb-16 sm:pt-32 sm:pb-20 bg-white text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-primary max-w-3xl mx-auto">
                Una tienda online para vender por WhatsApp
            </h1>

            <p className="mt-4 text-sm sm:text-base text-brand-muted max-w-xl mx-auto">
                Tus productos, precios y pedidos organizados en una sola página.
                Sin comisiones. Sin plataformas complicadas.
            </p>

            <a
                href="#contacto"
                className="
          mt-8 inline-flex items-center justify-center
          rounded-xl bg-accent
          px-8 py-4 text-base sm:text-sm
          font-medium text-white
          hover:bg-accent-hover transition
        "
            >
                Quiero mi tienda
            </a>
        </section>
    )
}
