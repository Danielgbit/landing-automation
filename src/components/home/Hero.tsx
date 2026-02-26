import AutomationBackground from "@/components/home/hero/AutomationBackground"
import FadeIn from "../ui/motion/FadeIn"

export default function Hero() {
    return (
        <section
            id="hero"
            className="
        relative bg-brand-dark text-brand-primary overflow-hidden
        min-h-[90vh] flex flex-col justify-center items-center
        px-4 pt-32 pb-24
        sm:px-6 sm:pt-40 sm:pb-32
      "
        >
            {/* Elemento decorativo de fondo tipo "Halo" industrial */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent opacity-5 blur-[120px] rounded-[100%] pointer-events-none"></div>

            <FadeIn>
                {/* 
                  AutomationBackground podría continuar existiendo, 
                  pero lo ponemos bajo la capa decorativa 
                */}
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
                    <AutomationBackground />
                </div>

                <div className="relative z-10 mx-auto max-w-5xl text-center">
                    <div className="mb-6 inline-flex items-center justify-center rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-md">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent text-glow"></span>
                        </span>
                        Automatización Inteligente
                    </div>

                    <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1] max-w-4xl mx-auto text-brand-primary">
                        Capta más clientes con un sistema de reservas <span className="text-accent text-glow">imparable.</span>
                    </h1>

                    <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto font-sans leading-relaxed">
                        Atiende clientes, muestra servicios y agenda citas automáticamente, sin responder mensajes todo el día. Funciona mientras duermes.
                    </p>

                    <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                        <a
                            href="#demos"
                            className="
                group relative inline-flex items-center justify-center
                rounded-2xl bg-accent
                px-8 py-4 sm:px-10 sm:py-5
                text-base font-bold text-brand-dark
                transition-all duration-300
                shadow-glow hover:shadow-glow_strong hover:-translate-y-1
              "
                        >
                            <span>Ver demostración interactiva</span>
                        </a>

                        <a
                            href="https://wa.me/573024932976"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex items-center justify-center
                rounded-2xl border border-brand-surface_light bg-brand-dark/50 backdrop-blur-sm
                px-8 py-4 sm:px-10 sm:py-5
                text-base font-semibold text-brand-primary
                hover:border-accent/50 hover:bg-brand-surface transition-all duration-300
              "
                        >
                            Chatear en WhatsApp
                        </a>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}

