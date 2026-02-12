import AutomationBackground from "@/components/home/hero/AutomationBackground"
import FadeIn from "../ui/motion/FadeIn"

export default function Hero() {
    return (
        <section
            id="hero"
            className="
        relative bg-brand-dark text-white overflow-hidden
        px-4 pt-32 pb-24
        sm:px-6 sm:pt-40 sm:pb-32
      "
        >
            <FadeIn>
                <AutomationBackground />

                <div className="relative mx-auto max-w-5xl text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-4xl mx-auto">
                        Capta más clientes con una página web profesional
                        <span className="hidden sm:block"></span>
                        <span className="sm:hidden"> </span>
                        de atención y reservas
                    </h1>


                    <p className="mt-4 sm:mt-6 text-base sm:text-lg text-brand-subtle max-w-2xl mx-auto">
                        Atiende clientes, muestra servicios y agenda citas automáticamente, sin responder mensajes todo el día.
                    </p>

                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <a
                            href="#demos"
                            className="
                inline-flex items-center justify-center
                rounded-xl bg-accent
                px-6 py-4 sm:px-6 sm:py-3
                text-base sm:text-sm font-medium text-white
                hover:bg-accent-hover transition
                shadow-lg hover:scale-[1.03] active:scale-95
              "
                        >
                            Ver demo
                        </a>

                        <a
                            href="https://wa.me/573000000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex items-center justify-center
                rounded-xl border border-white/20
                px-6 py-4 sm:px-6 sm:py-3
                text-base sm:text-sm font-medium text-white/90
                hover:bg-white/10 transition
              "
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}
