export default function LandingNavbar() {
    return (
        <nav className="bg-white border-b px-4 py-3 flex justify-between items-center">
            <span className="font-semibold text-brand-primary">Tu Negocio</span>

            <div className="hidden sm:flex gap-6 text-sm text-brand-muted">
                <a href="#servicios">Servicios</a>
                <a href="#faq">Preguntas</a>
                <a href="#contacto">Contacto</a>
            </div>

            <a
                href="#contacto"
                className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white"
            >
                WhatsApp
            </a>
        </nav>
    )
}
