import FadeIn from "@/components/ui/motion/FadeIn"
import SlideUp from "@/components/ui/motion/SlideUp"

export default function Services() {
    const services = [
        { name: 'Limpieza facial', price: '$60.000', duration: '60 min', popular: false },
        { name: 'Masajes relajantes', price: '$80.000', duration: '60 min', popular: true },
        { name: 'Tratamientos corporales', price: '$120.000', duration: '90 min', popular: false },
    ]

    return (
        <section id="servicios" className="px-4 py-16">
            <SlideUp>
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white mb-3">
                        Catálogo <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">disponible 24/7</span>
                    </h2>
                    <p className="text-brand-muted text-sm sm:text-base max-w-lg mx-auto">
                        Así verán tus clientes tu oferta dentro de la landing automatizada. Listos para elegir y comprar sin requerir de ti.
                    </p>
                </div>
            </SlideUp>

            <div className="max-w-3xl mx-auto flex flex-col gap-4">
                {services.map((s, i) => (
                    <FadeIn key={s.name} delay={i * 0.1}>
                        <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-brand-surface/40 p-5 sm:p-6 backdrop-blur-sm hover:bg-brand-surface/60 hover:border-white/10 transition-colors">
                            {s.popular && (
                                <div className="absolute top-0 right-0 bg-accent text-brand-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg rounded-tr-xl">
                                    Top Seller
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                                        {s.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs text-brand-muted">
                                        <svg className="w-3.5 h-3.5 text-brand-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Duración: {s.duration}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="text-xl font-display font-bold text-white">
                                        {s.price}
                                    </span>
                                    <button className="hidden sm:inline-flex rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-accent hover:text-brand-dark hover:border-accent transition-colors">
                                        Agendar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <FadeIn delay={0.4}>
                <div className="mt-8 text-center">
                    <p className="text-xs text-brand-subtle">
                        * Los botones en tu landing real redirigirán inmediatamente al chat de WhatsApp con el servicio preseleccionado.
                    </p>
                </div>
            </FadeIn>
        </section >
    )
}
