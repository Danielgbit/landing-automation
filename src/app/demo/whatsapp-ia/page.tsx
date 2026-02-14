import SlideUp from "@/components/ui/motion/SlideUp"

const WHATSAPP_DEMO_URL =
    "https://wa.me/573014349906?text=Hola."


export default function WhatsAppIADemoPage() {
    return (
        <main className="min-h-screen bg-brand-light px-4 py-20 sm:px-6 sm:py-28">
            <SlideUp>
                <div className="mx-auto max-w-3xl text-center">
                    {/* HERO */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-brand-primary leading-tight">
                        Un asistente por WhatsApp que atiende clientes automáticamente
                    </h1>

                    <p className="mt-4 sm:mt-6 text-sm sm:text-base text-brand-muted max-w-2xl mx-auto">
                        Responde consultas reales, informa servicios y guía el agendamiento como lo haría un negocio organizado, incluso fuera de horario.
                    </p>

                    {/* QUÉ PUEDE HACER */}
                    <section className="mt-12 sm:mt-20">
                        <h2 className="text-base sm:text-lg font-semibold text-brand-primary">
                            ¿Qué puede hacer este asistente?
                        </h2>

                        <ul className="mt-6 sm:mt-10 grid gap-3 sm:gap-4 text-left">
                            {[
                                "Responder precios y servicios",
                                "Informar horarios de atención",
                                "Atender clientes fuera de horario",
                                "Guiar el inicio de una cita",
                                "Responder automáticamente sin que estés conectado",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="bg-brand-white border border-gray-200 rounded-xl sm:rounded-2xl px-5 py-4 text-sm text-brand-muted shadow-soft"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* EJEMPLOS */}
                    <section className="mt-16 sm:mt-24">
                        <h2 className="text-base sm:text-lg font-semibold text-brand-primary">
                            Prueba escribiendo mensajes como:
                        </h2>

                        <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            {[
                                "¿Cuáles son los servicios?",
                                "¿Cuánto cuesta una limpieza facial?",
                                "¿Atienden hoy?",
                                "Quiero agendar una cita",
                            ].map((text) => (
                                <ExampleMessage key={text} text={text} />
                            ))}
                        </div>

                        <p className="mt-4 sm:mt-6 text-xs text-brand-subtle">
                            El asistente entiende lenguaje natural, como si hablaras con una persona.
                        </p>
                    </section>

                    {/* CTA */}
                    <div className="mt-16 sm:mt-24">
                        <a
                            href={WHATSAPP_DEMO_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
              inline-flex items-center justify-center
              rounded-xl
              bg-accent
              px-8 py-5 sm:py-4
              text-base sm:text-sm
              font-medium
              text-white
              hover:bg-accent-hover
              transition
              w-full sm:w-auto
            "
                        >
                            Probar el asistente en WhatsApp
                        </a>

                        <p className="mt-3 sm:mt-4 text-xs text-brand-subtle max-w-sm mx-auto">
                            Esta es una demo. El asistente responde automáticamente como lo haría en un negocio real.
                        </p>
                    </div>
                </div>

            </SlideUp>
        </main>
    )
}

function ExampleMessage({ text }: { text: string }) {
    return (
        <div className="bg-brand-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 py-3 text-sm text-brand-muted shadow-soft">
            {text}
        </div>
    )
}
