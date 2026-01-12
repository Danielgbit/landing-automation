import FadeIn from "@/components/ui/motion/FadeIn";
import SlideUp from "@/components/ui/motion/SlideUp";

export default function Hero() {
    return (
        <section className="px-4 py-20 text-center bg-brand-light">
            <FadeIn>
                <h1 className="text-3xl sm:text-4xl font-semibold">
                    Convierte visitas en clientes
                    <br />
                    por WhatsApp
                </h1>
            </FadeIn>

            <SlideUp>
                <p className="mt-4 text-brand-muted max-w-md mx-auto">
                    Esta es una landing diseñada para que tus clientes te escriban listos para comprar o reservar.
                </p>
            </SlideUp>

            <FadeIn>
                <a
                    href="#contacto"
                    className="mt-8 inline-block rounded-xl bg-accent px-8 py-4 text-white font-medium"
                >
                    Quiero más clientes
                </a>
            </FadeIn>
        </section>
    )
}
