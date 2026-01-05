/**
 * FinalCTA
 * Sección final de cierre
 * Objetivo: llevar al usuario a conversación directa por WhatsApp
 */

export default function FinalCTA() {
    return (
        <section id="contacto" className="bg-gray-900 px-6 py-24 text-center text-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">
                    No vendo páginas web.
                    <br />
                    Instalo sistemas que traen clientes.
                </h2>

                <p className="mt-6 text-gray-300 text-lg">
                    Te ayudo a automatizar tu WhatsApp para que no pierdas más clientes
                    y tengas más tiempo para tu negocio.
                </p>

                <a
                    href="https://wa.me/573000000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20sistema%20para%20mi%20negocio"
                    target="_blank"
                    className="inline-flex items-center justify-center mt-10 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold hover:bg-green-700 transition"
                >
                    Hablar conmigo por WhatsApp
                </a>

                <p className="mt-4 text-sm text-gray-400">
                    Respuesta directa, sin compromiso
                </p>
            </div>
        </section>
    );
}
