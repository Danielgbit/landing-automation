import SlideUp from "@/components/ui/motion/SlideUp"

const WHATSAPP_DEMO_URL =
    "https://wa.me/573014349906?text=Hola."

export default function WhatsAppIADemoPage() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-brand-dark selection:bg-accent/30 pt-32 pb-24 px-4 sm:px-6">
            {/* BACKGROUND EXTRAS */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] opacity-30 -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] opacity-30 -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
            <div className="bg-noise absolute inset-0 -z-20 opacity-20 pointer-events-none" />

            <SlideUp>
                <div className="mx-auto max-w-5xl">
                    {/* HERO Y COPY B2B */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-accent mb-6 shadow-glow_subtle">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            IA Conversacional Autónoma
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-white tracking-tight leading-tight mb-6">
                            Clonamos a tu mejor <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent text-glow">agente de ventas.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-brand-muted leading-relaxed">
                            Respondemos a prospectos en segundos, calificamos el lead, informamos servicios y dirigimos al funnel de agendamiento 24/7 sin involucrar a tu equipo hasta que estén listos para cerrar.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* QUÉ PUEDE HACER (BENTO VIBE) */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-xl font-display font-semibold text-white flex items-center gap-3">
                                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Capacidades del Sistema
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { title: "Filtrado automático", description: "Responde precios y horarios antes de que pregunten." },
                                    { title: "Soporte Zero-Touch", description: "Maneja preguntas frecuentes sin intervención humana." },
                                    { title: "Agendamiento Fluido", description: "Envía links de pago o calendarios en el momento de mayor interés." },
                                    { title: "Retención nocturna", description: "Atrapa leads a las 2 AM cuando tu competencia duerme." },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-brand-surface/40 border border-white/5 backdrop-blur-md rounded-2xl p-5 hover:bg-brand-surface/60 hover:border-white/10 transition-all group"
                                    >
                                        <h3 className="text-sm font-bold text-white mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                                        <p className="text-xs sm:text-sm text-brand-muted">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* EJEMPLOS INTERACTIVOS */}
                        <div className="bg-brand-surface border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-glow_subtle flex flex-col justify-center">
                            <h2 className="text-xl font-display font-semibold text-white mb-6 text-center lg:text-left">
                                Interacciones en tiempo real
                            </h2>
                            <div className="space-y-4 mb-8">
                                <ExampleMessage text="¿Tienen disponibilidad mañana para una asesoría fiscal?" direction="user" delayMs={0} />
                                <ExampleMessage text="¡Hola! Sí, tenemos 2 espacios mañana (10:00 AM y 3:00 PM). ¿Te reservo uno de esos?" direction="ai" delayMs={100} />
                                <ExampleMessage text="¿Cuáles son las tarifas?" direction="user" delayMs={200} />
                                <ExampleMessage text="La asesoría inicial tiene un costo de $100. Puedes ver el detalle completo y agendar directamente aquí: [Link]" direction="ai" delayMs={300} />
                            </div>
                            <p className="text-xs text-brand-subtle text-center bg-white/5 py-3 px-4 rounded-xl border border-white/5">
                                La IA adapta su tono a la identidad de tu marca.
                            </p>
                        </div>
                    </div>

                    {/* CTA GIGANTE B2B */}
                    <div className="mt-24 text-center">
                        <div className="relative inline-block group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent/50 rounded-[2rem] blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                            <a
                                href={WHATSAPP_DEMO_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    relative flex items-center justify-center gap-3
                                    rounded-[2rem] bg-brand-surface border border-white/10
                                    px-8 py-5 sm:px-12 sm:py-6
                                    text-base sm:text-lg font-display font-bold text-white
                                    hover:bg-brand-surface/80
                                    transition-all duration-300
                                "
                            >
                                <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.46-1.761-1.633-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Activar Demo Interactiva
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-brand-subtle max-w-sm mx-auto">
                            Interactúa libremente. Observa cómo califica, responde objeciones y retiene al cliente.
                        </p>
                    </div>
                </div>
            </SlideUp>
        </main>
    )
}

function ExampleMessage({ text, direction, delayMs }: { text: string, direction: 'user' | 'ai', delayMs: number }) {
    const isUser = direction === 'user';
    return (
        <SlideUp delay={delayMs / 1000} className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`
                max-w-[85%] sm:max-w-[75%] px-5 py-3 text-sm leading-relaxed
                ${isUser ?
                    'bg-white/10 text-white rounded-2xl rounded-tr-sm border border-white/5' :
                    'bg-accent/10 border border-accent/20 text-white rounded-2xl rounded-tl-sm shadow-[0_0_15px_rgba(0,255,163,0.05)]'
                }
            `}>
                {text}
            </div>
        </SlideUp>
    )
}
