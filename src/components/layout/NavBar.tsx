/**
 * Navbar
 * Navegación principal de la landing
 * Pensada para orientar y convertir
 */

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* LOGO */}
                <a href="/" className="font-bold text-gray-900">
                    AutomatizaTuWhatsApp
                </a>

                {/* LINKS (DESKTOP) */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                    <a href="#demos" className="hover:text-green-600">
                        Servicios
                    </a>
                    <a href="#solucion" className="hover:text-green-600">
                        Cómo funciona
                    </a>
                    <a href="#precios" className="hover:text-green-600">
                        Precios
                    </a>
                </nav>

                {/* CTA */}
                <a
                    href="https://wa.me/573000000000"
                    target="_blank"
                    className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition"
                >
                    WhatsApp
                </a>
            </div>
        </header>
    );
}
