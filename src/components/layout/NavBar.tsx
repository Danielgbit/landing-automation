'use client'

/**
 * Navbar
 * Navegación principal de la landing
 * UX/UI enfocado en conversión y producto
 */

import Image from "next/image"
import Link from "next/link"
import { useScrollDirection } from "@/hooks/navbar/useScrollDirection"

export default function Navbar() {
    const isVisible = useScrollDirection()

    return (
        <header
            className={`
        sticky top-4 z-50 px-4
        transition-all duration-300 ease-out
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}
      `}
        >
            <div className="mx-auto max-w-7xl">
                <div
                    className="
            flex h-14 items-center justify-between
            rounded-2xl
            bg-gray-200/80
            backdrop-blur-md
            border border-white/10
            px-6
            shadow-lg
          "
                >
                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Focused Studio"
                            width={200}
                            height={200}
                            className="w-8 cursor-pointer"
                            priority
                        />
                    </Link>

                    {/* LINKS (DESKTOP) */}
                    <nav className="hidden md:flex w-[40%] justify-between items-center gap-8 text-xs font-light text-black/90">
                        <a href="#demos" className="hover:text-black transition">
                            Demos
                        </a>
                        <a href="#solucion" className="hover:text-black transition">
                            Cómo funciona
                        </a>
                        <a href="#precios" className="hover:text-black transition">
                            Precios
                        </a>
                    </nav>

                    {/* CTA */}
                    <a
                        href="https://wa.me/573024932976"
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
              shadow-md
              hover:scale-[1.03]
              active:scale-95
            "
                    >
                        WhatsApp
                    </a>
                </div>
            </div>
        </header>
    )
}
