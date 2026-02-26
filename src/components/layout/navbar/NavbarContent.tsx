import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarContent({ onMenu }: { onMenu?: () => void }) {
    return (
        <div className="mx-auto max-w-5xl">
            <div className="flex h-16 items-center justify-between rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 pl-6 pr-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/logo.png"
                        alt="Focuside Studio"
                        width={200}
                        height={200}
                        className="w-9 brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                        priority
                    />
                </Link>

                {/* LINKS DESKTOP */}
                <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-white/70">
                    <a href="/#demos" className="relative hover:text-white transition-colors py-2 group">
                        Demos
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </a>
                    <a href="/#solucion" className="relative hover:text-white transition-colors py-2 group">
                        Cómo funciona
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </a>
                    <a href="/#precios" className="relative hover:text-white transition-colors py-2 group">
                        Precios
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </a>
                </nav>

                {/* CTA DESKTOP */}
                <a
                    href="https://wa.me/573024932976"
                    target="_blank"
                    className="hidden md:flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-extrabold text-brand-dark shadow-[0_0_15px_rgba(0,255,163,0.4)] hover:shadow-[0_0_30px_rgba(0,255,163,0.8)] hover:scale-105 transition-all duration-300"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.46-1.761-1.633-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                </a>

                {/* HAMBURGER */}
                <button
                    onClick={onMenu}
                    className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/5"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

