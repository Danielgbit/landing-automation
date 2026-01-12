export default function LandingNavbar() {
    return (
        <nav className="sticky top-0 bg-white/80 backdrop-blur border-b">
            <div className="mx-auto max-w-6xl px-4 py-3 flex justify-between items-center">
                <span className="font-semibold text-brand-primary">
                    Tu Negocio
                </span>

                <div className="hidden sm:flex gap-8 text-sm text-brand-muted">
                    <a href="#servicios" className="hover:text-brand-primary">Servicios</a>
                    <a href="#faq" className="hover:text-brand-primary">Preguntas</a>
                    <a href="#contacto" className="hover:text-brand-primary">Contacto</a>
                </div>

                <a
                    href="#contacto"
                    className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
                >
                    Contacto
                </a>
            </div>

            {/* Etiqueta de demo */}
            <div className="text-center text-[11px] text-brand-subtle py-1 bg-brand-light">
                Este es un ejemplo de cómo se verá tu menú de navegación
            </div>
        </nav>
    )
}
