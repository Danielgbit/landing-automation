/**
 * FinalCTA
 * Sección final de cierre
 * Objetivo: llevar a conversación directa por WhatsApp
 */

export default function FinalCTA() {
    return (
        <section
            id="contacto"
            className="bg-brand-dark px-6 py-28 text-white"
        >
            <div className="mx-auto max-w-3xl text-center">
                {/* Headline */}
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    No vendo páginas web.
                    <br />
                    Implemento sistemas que atienden clientes por ti.
                </h2>

                {/* Subheadline */}
                <p className="mt-6 text-sm md:text-base text-brand-subtle">
                    Te ayudo a convertir WhatsApp en un canal ordenado de atención
                    y reservas, sin perder tiempo respondiendo mensajes.
                </p>

                {/* CTA */}
                <a
                    href="https://wa.me/573000000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20sistema%20para%20mi%20negocio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-12 inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-medium text-white hover:bg-accent-hover transition"
                >
                    Hablar por WhatsApp
                </a>

                {/* Microcopy */}
                <p className="mt-4 text-xs text-brand-subtle">
                    Respuesta directa. Sin compromiso.
                </p>
            </div>
        </section>
    );
}
