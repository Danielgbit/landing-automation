import FadeIn from "../ui/motion/FadeIn"
import SlideUp from "../ui/motion/SlideUp"

export default function FinalCTA() {
    return (
        <section
            id="contacto"
            className="bg-brand-dark px-4 py-20 sm:px-6 sm:py-28 text-white"
        >
            <div className="mx-auto max-w-3xl text-center">
                <FadeIn>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
                        No vendo páginas web.
                        <br />
                        Implemento sistemas que atienden clientes por ti.
                    </h2>
                </FadeIn>

                <SlideUp>
                    <p className="mt-4 sm:mt-6 text-sm sm:text-base text-brand-subtle">
                        Te ayudo a convertir WhatsApp en un canal ordenado de atención y reservas, sin perder tiempo respondiendo mensajes.
                    </p>
                </SlideUp>

                <SlideUp>
                    <a
                        href="https://wa.me/3024932976?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20sistema%20para%20mi%20negocio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 sm:mt-12 inline-flex items-center justify-center rounded-xl bg-accent px-8 py-5 text-base font-medium text-white hover:bg-accent-hover transition w-full sm:w-auto"
                    >
                        Hablar por WhatsApp
                    </a>
                </SlideUp>

                <FadeIn>
                    <p className="mt-3 sm:mt-4 text-xs text-brand-subtle">
                        Respuesta directa. Sin compromiso.
                    </p>
                </FadeIn>
            </div>
        </section>
    )
}
