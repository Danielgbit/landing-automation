import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarContent({ onMenu }: { onMenu?: () => void }) {
    return (
        <div className="mx-auto max-w-7xl">
            <div className="flex h-14 items-center justify-between rounded-2xl bg-gray-200/80 backdrop-blur-md border border-white/10 px-4 md:px-6 shadow-lg">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Focuside Studio"
                        width={200}
                        height={200}
                        className="w-8"
                        priority
                    />
                </Link>

                {/* LINKS DESKTOP */}
                <nav className="hidden md:flex w-[40%] justify-between items-center text-xs font-light text-black/90">
                    <a href="/#demos">Demos</a>
                    <a href="/#solucion">Cómo funciona</a>
                    <a href="/#precios">Precios</a>
                </nav>

                {/* CTA DESKTOP */}
                <a
                    href="https://wa.me/573024932976"
                    target="_blank"
                    className="hidden md:inline-flex items-center rounded-xl bg-accent px-4 py-2 text-xs text-white shadow-md"
                >
                    WhatsApp
                </a>

                {/* HAMBURGER */}
                <button
                    onClick={onMenu}
                    className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-black/5"
                >
                    <Menu />
                </button>
            </div>
        </div>
    )
}
