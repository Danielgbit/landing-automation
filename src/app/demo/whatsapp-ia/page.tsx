/**
 * DEMO WHATSAPP CON IA
 *
 * Esta página es una "bridge page":
 * - Prepara al usuario antes de ir a WhatsApp
 * - Explica qué puede hacer el asistente
 * - Maximiza el efecto WOW de la automatización
 *
 * NO explica tecnología.
 * SOLO beneficios y ejemplos reales.
 */

const WHATSAPP_DEMO_URL =
    "https://wa.me/573000000000?text=Hola%20quiero%20probar%20el%20asistente%20autom%C3%A1tico";

export default function WhatsAppIADemoPage() {
    return (
        <main className="min-h-screen bg-white px-6 py-24">
            <div className="max-w-3xl mx-auto text-center">

                {/* ===================== */}
                {/* HERO */}
                {/* ===================== */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    WhatsApp que responde clientes automáticamente
                </h1>

                <p className="mt-6 text-lg text-gray-600">
                    Prueba cómo un asistente virtual atiende consultas reales,
                    responde preguntas frecuentes y ayuda a agendar citas 24/7.
                </p>

                {/* ===================== */}
                {/* QUÉ PUEDE HACER */}
                {/* ===================== */}
                <section className="mt-16 text-left">
                    <h2 className="text-2xl font-bold text-gray-900 text-center">
                        ¿Qué puede hacer este asistente?
                    </h2>

                    <ul className="mt-8 space-y-3 text-gray-700">
                        <li>✅ Responder precios y servicios</li>
                        <li>✅ Informar horarios de atención</li>
                        <li>✅ Atender clientes fuera de horario</li>
                        <li>✅ Iniciar el proceso de agendamiento</li>
                        <li>✅ Responder automáticamente, sin que tú estés conectado</li>
                    </ul>
                </section>

                {/* ===================== */}
                {/* EJEMPLOS DE MENSAJES */}
                {/* ===================== */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Prueba escribiendo cosas como:
                    </h2>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        <ExampleMessage text="¿Cuáles son los servicios?" />
                        <ExampleMessage text="¿Cuánto cuesta una limpieza facial?" />
                        <ExampleMessage text="¿Atienden hoy?" />
                        <ExampleMessage text="Quiero agendar una cita" />
                    </div>

                    <p className="mt-6 text-sm text-gray-500">
                        El asistente entiende mensajes naturales, como si hablaras con una persona.
                    </p>
                </section>

                {/* ===================== */}
                {/* CTA PRINCIPAL */}
                {/* ===================== */}
                <div className="mt-20">
                    <a
                        href={WHATSAPP_DEMO_URL}
                        target="_blank"
                        className="inline-flex items-center justify-center rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white hover:bg-green-700 transition"
                    >
                        Probar WhatsApp automático
                    </a>

                    <p className="mt-4 text-sm text-gray-500">
                        Esto es una demo. El asistente responde automáticamente
                        como lo haría en un negocio real.
                    </p>
                </div>

            </div>
        </main>
    );
}

/* ===================================================== */
/* COMPONENTE AUXILIAR */
/* ===================================================== */

/**
 * ExampleMessage
 * Muestra ejemplos de mensajes que el usuario puede enviar al asistente
 * Ayuda a reducir fricción y mejorar la experiencia de prueba
 */
function ExampleMessage({ text }: { text: string }) {
    return (
        <div className="rounded-lg border bg-gray-50 p-4 text-sm text-gray-700">
            💬 {text}
        </div>
    );
}
