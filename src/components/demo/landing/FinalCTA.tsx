import FadeIn from "@/components/ui/motion/FadeIn";

export default function FinalCTA() {
    return (
        <section
            id="contacto"
            className="px-4 py-20 bg-brand-dark text-white text-center"
        >
            <FadeIn>
                <h2 className="text-2xl sm:text-3xl font-semibold">
                    ¿Quieres una landing que te traiga clientes por WhatsApp?
                </h2>

                <p className="mt-4 text-sm sm:text-base text-brand-subtle max-w-md mx-auto">
                    Te entregamos una página como esta, personalizada para tu negocio, lista para empezar a recibir mensajes.
                </p>

                <a
                    href="https://wa.me/573024932976"
                    className="
          mt-10
          inline-flex
          items-center
          justify-center
          rounded-xl
          bg-accent
          px-10 py-5 sm:px-8 sm:py-4
          text-base sm:text-sm
          font-medium
          text-white
          hover:bg-accent-hover
          transition
        "
                >
                    Quiero mi landing
                </a>

                <p className="mt-4 text-xs text-brand-subtle">
                    Implementación rápida · Dominio .com · Botón de WhatsApp incluido
                </p>
            </FadeIn>
        </section>
    )
}
