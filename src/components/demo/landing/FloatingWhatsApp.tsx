import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/573024932976"
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-accent text-brand-dark p-4 rounded-full shadow-[0_0_20px_rgba(0,255,163,0.4)] hover:shadow-[0_0_40px_rgba(0,255,163,0.8)] hover:-translate-y-1 transition-all duration-300 z-50 group flex items-center justify-center"
            aria-label="Contactar por WhatsApp"
        >
            <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20 group-hover:opacity-40" />
            <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
        </a>
    )
}
