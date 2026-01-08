/**
 * HERO
 * Objetivo: impacto inmediato + CTA principal
 * Rol: vender el sistema, no explicarlo todo
 */

export default function Hero() {
    return (
        <section
            id="hero"
            className="bg-brand-dark text-white px-6 py-32"
        >
            <div className="mx-auto max-w-5xl text-center">
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-4xl mx-auto">
                    Convierte tu WhatsApp en un sistema
                    <br className="hidden md:block" />
                    de atención y reservas
                </h1>

                {/* Subheadline */}
                <p className="mt-6 text-lg text-brand-subtle max-w-2xl mx-auto">
                    Atiende clientes, muestra servicios y agenda citas
                    automáticamente, sin responder mensajes todo el día.
                </p>

                {/* CTAs */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    {/* CTA principal */}
                    <a
                        href="#demos"
                        className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 font-medium text-white hover:bg-accent-hover transition"
                    >
                        Ver demo en acción
                    </a>

                    {/* CTA secundario */}
                    <a
                        href="https://wa.me/573000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-medium text-white/90 hover:bg-white/10 transition"
                    >
                        Hablar por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
