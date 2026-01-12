import { PhoneCall } from "lucide-react"

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/573024932976"
            className="fixed bottom-6 right-6 bg-accent text-white px-5 py-4 rounded-full shadow-lg"
        >
            <PhoneCall />
        </a>
    )
}
