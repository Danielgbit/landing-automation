/**
 * DEMO WHATSAPP CON IA
 * Página puente hacia la experiencia real
 * Objetivo: activar la demo con expectativa correcta
 */

const WHATSAPP_DEMO_URL =
    "https://wa.me/573000000000?text=Hola%20quiero%20probar%20el%20asistente%20autom%C3%A1tico";

export default function WhatsAppIADemoPage() {
    return (
        <main className="min-h-screen bg-brand-light px-6 py-28">
            <div className="mx-auto max-w-3xl text-center">
                {/* ===================== */}
                {/* HERO */}
                {/* ===================== */}
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-primary">
                    Un asistente por WhatsApp que atiende clientes automáticamente
                </h1>

                <p className="mt-6 text-sm md:text-base text-brand-muted max-w-2xl mx-auto">
                    Responde consultas reales, informa servicios y guía el agendamiento
                    como lo haría un negocio organizado, incluso fuera de horario.
                </p>

                {/* ===================== */}
                {/* QUÉ PUEDE HACER */}
                {/* ===================== */}
                <section className="mt-20">
                    <h2 className="text-lg font-semibold text-brand-primary">
                        ¿Qué puede hacer este asistente?
                    </h2>

                    <ul className="mt-10 grid gap-4 text-left">
                        {[
                            "Responder precios y servicios",
                            "Informar horarios de atención",
                            "Atender clientes fuera de horario",
                            "Guiar el inicio de una cita",
                            "Responder automáticamente sin que estés conectado",
                        ].map((item) => (
                            <li
                                key={item}
                                className="bg-brand-white border border-gray-200 rounded-2xl px-6 py-4 text-sm text-brand-muted shadow-soft"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ===================== */}
                {/* EJEMPLOS */}
                {/* ===================== */}
                <section className="mt-24">
                    <h2 className="text-lg font-semibold text-brand-primary">
                        Prueba escribiendo mensajes como:
                    </h2>

                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {[
                            "¿Cuáles son los servicios?",
                            "¿Cuánto cuesta una limpieza facial?",
                            "¿Atienden hoy?",
                            "Quiero agendar una cita",
                        ].map((text) => (
                            <ExampleMessage key={text} text={text} />
                        ))}
                    </div>

                    <p className="mt-6 text-xs text-brand-subtle">
                        El asistente entiende lenguaje natural, como si hablaras con una persona.
                    </p>
                </section>

                {/* ===================== */}
                {/* CTA */}
                {/* ===================== */}
                <div className="mt-24">
                    <a
                        href={WHATSAPP_DEMO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              inline-flex items-center justify-center
              rounded-xl
              bg-accent
              px-8 py-4
              text-sm font-medium text-white
              hover:bg-accent-hover
              transition
            "
                    >
                        Probar el asistente en WhatsApp
                    </a>

                    <p className="mt-4 text-xs text-brand-subtle max-w-sm mx-auto">
                        Esta es una demo. El asistente responde automáticamente
                        como lo haría en un negocio real.
                    </p>
                </div>
            </div>
        </main>
    );
}

/**
 * ExampleMessage
 * Mensaje sugerido para probar la demo
 */

function ExampleMessage({ text }: { text: string }) {
    return (
        <div className="bg-brand-white border border-gray-200 rounded-2xl px-4 py-3 text-sm text-brand-muted shadow-soft">
            {text}
        </div>
    );
}
