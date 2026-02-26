import FadeIn from "../ui/motion/FadeIn"
import SlideUp from "../ui/motion/SlideUp"

export default function FinalCTA() {
    return (
        <section
            id="contacto"
            className="relative px-4 py-24 sm:px-6 sm:py-32 overflow-hidden mx-auto max-w-7xl mb-12"
        >
            <div className="absolute inset-0 bg-brand-surface rounded-[40px] border border-white/5 overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/10 to-transparent"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-4xl text-center px-4">
                <FadeIn>
                    <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] text-brand-primary">
                        No vendo páginas web.<br />
                        <span className="text-accent text-glow">Implemento sistemas</span> que atienden por ti.
                    </h2>
                </FadeIn>

                <SlideUp delay={0.2}>
                    <p className="mt-8 text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto font-sans">
                        Convierte WhatsApp en un canal ordenado de atención y reservas, sin perder tu tiempo respondiendo mensajes.
                    </p>
                </SlideUp>

                <SlideUp delay={0.3}>
                    <a
                        href="https://wa.me/3024932976?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20sistema%20para%20mi%20negocio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-12 inline-flex items-center justify-center rounded-2xl bg-brand-primary px-10 py-5 text-lg font-bold text-brand-dark transition-all duration-300 hover:bg-accent hover:shadow-glow hover:-translate-y-1 w-full sm:w-auto"
                    >
                        Hablar por WhatsApp
                    </a>
                </SlideUp>

                <FadeIn delay={0.4}>
                    <p className="mt-6 text-sm font-medium text-brand-subtle tracking-wide uppercase">
                        Respuesta directa. Sin compromiso.
                    </p>
                </FadeIn>
            </div>
        </section>
    )
}

