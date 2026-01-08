/**
 * Navbar
 * Navegación principal de la landing
 * UX/UI enfocado en conversión y producto
 */

export default function Navbar() {
    return (
        <header className="sticky top-4 z-50 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="
          flex h-14 items-center justify-between
          rounded-2xl
          bg-gray-200/80
          backdrop-blur-md
          border border-white/10
          px-6
        ">
                    {/* LOGO */}
                    <a
                        href="/"
                        className="text-sm font-semibold text-black"
                    >
                        Focused Studio
                    </a>

                    {/* LINKS (DESKTOP) */}
                    <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-black">
                        <a href="#demos" className="hover:text-gray-600 transition">
                            Demos
                        </a>
                        <a href="#solucion" className="hover:text-gray-600 transition">
                            Cómo funciona
                        </a>
                        <a href="#precios" className="hover:text-gray-600 transition">
                            Precios
                        </a>
                    </nav>

                    {/* CTA */}
                    <a
                        href="https://wa.me/573000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              inline-flex items-center
              rounded-xl
              bg-accent
              px-4 py-2
              text-xs font-medium text-white
              hover:bg-accent-hover
              transition
            "
                    >
                        WhatsApp
                    </a>
                </div>
            </div>
        </header>
    );
}
