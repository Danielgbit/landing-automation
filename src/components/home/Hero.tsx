/**
 * HERO
 * Objetivo: impacto inmediato + CTA principal
 */

export default function Hero() {
    return (
        <section id="hero" className="bg-white px-6 py-24 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto">
                Tu WhatsApp puede atender clientes y recibir citas automáticamente
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Consigue más clientes sin responder mensajes todo el día.
                Ideal para negocios pequeños que trabajan con WhatsApp.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="#demos"
                    className="rounded-lg bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700 transition"
                >
                    Ver demo en acción
                </a>

                <a
                    href="https://wa.me/573000000000"
                    target="_blank"
                    className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-800 hover:bg-gray-100 transition"
                >
                    Hablar conmigo por WhatsApp
                </a>
            </div>
        </section>
    );
}
