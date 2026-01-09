/**
 * Footer
 * Objetivo: cierre de confianza + refuerzo comercial
 */

export default function Footer() {
    return (
        <footer className="bg-brand-dark px-6 py-16 text-white">
            <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-3">

                {/* Marca / Posicionamiento */}
                <div>
                    <p className="text-sm font-medium">
                        Automatización para negocios de servicios
                    </p>
                    <p className="mt-3 text-xs text-brand-subtle max-w-xs">
                        Sistemas de atención y reservas por WhatsApp,
                        diseñados para reducir mensajes y ganar tiempo.
                    </p>
                </div>

                {/* Navegación mínima */}
                <div>
                    <p className="text-sm font-medium">
                        Producto
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-brand-subtle">
                        <li>
                            <a href="#demos" className="hover:text-white transition">
                                Demos
                            </a>
                        </li>
                        <li>
                            <a href="#precios" className="hover:text-white transition">
                                Precios
                            </a>
                        </li>
                        <li>
                            <a href="#contacto" className="hover:text-white transition">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <p className="text-sm font-medium">
                        Contacto
                    </p>
                    <p className="mt-3 text-xs text-brand-subtle">
                        ¿Quieres ver si esto encaja con tu negocio?
                    </p>

                    <a
                        href="https://wa.me/573024932976?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20sistema%20para%20mi%20negocio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition"
                    >
                        Hablar por WhatsApp →
                    </a>
                </div>
            </div>

            {/* Línea final */}
            <div className="mt-12 border-t border-white/10 pt-6 text-center">
                <p className="text-xs text-brand-subtle">
                    © {new Date().getFullYear()} · Sistema de automatización para negocios de servicios
                </p>
            </div>
        </footer>
    );
}
