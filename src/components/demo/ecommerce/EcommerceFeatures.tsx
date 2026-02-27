import FadeIn from "@/components/ui/motion/FadeIn"
import SlideUp from "@/components/ui/motion/SlideUp"
import { Smartphone, ShoppingBag, MessageCircle, Globe, Zap, PercentSquare } from "lucide-react"

export default function EcommerceFeatures() {
    const features = [
        {
            icon: <ShoppingBag className="w-6 h-6 text-cyan-400" />,
            title: "Catálogo Persuasivo",
            description: "Tus productos organizados magistralmente. Fotos, descripciones y variables listas para comprar.",
            className: "md:col-span-2"
        },
        {
            icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
            title: "Pedidos en WhatsApp",
            description: "Cada botón 'Comprar' arma un mensaje automático en WA con el pedido estructurado.",
            className: "md:col-span-1"
        },
        {
            icon: <PercentSquare className="w-6 h-6 text-rose-400" />,
            title: "0% Comisiones",
            description: "No cobramos porcentaje por venta. Todo el margen bruto queda en tu negocio.",
            className: "md:col-span-1"
        },
        {
            icon: <Smartphone className="w-6 h-6 text-accent" />,
            title: "Mobile First",
            description: "Diseño optimizado para celulares, donde ocurre el 80% de las ventas en redes sociales.",
            className: "md:col-span-2"
        },
        {
            icon: <Globe className="w-6 h-6 text-blue-400" />,
            title: "Dominio .com Propio",
            description: "Incluye tu propia marca digital (www.tunegocio.com) para máxima autoridad y confianza.",
            className: "md:col-span-2"
        },
        {
            icon: <Zap className="w-6 h-6 text-amber-400" />,
            title: "Autogestionable",
            description: "Panel sencillo para que cambies precios o agregues productos sin depender de nosotros.",
            className: "md:col-span-1"
        },
    ]

    return (
        <section className="px-4 py-16 sm:py-24 relative z-10 max-w-6xl mx-auto">
            <SlideUp>
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white mb-4">
                        Toda la infraestructura de una <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">aplicación robusta</span>
                    </h2>
                    <p className="text-brand-muted text-sm sm:text-base max-w-2xl mx-auto">
                        No es solo una vitrina. Es un motor de toma de pedidos optimizado para eliminar la fricción entre el clic y la transferencia.
                    </p>
                </div>
            </SlideUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {features.map((item, i) => (
                    <FadeIn key={item.title} delay={i * 0.1}>
                        <div className={`
                            group h-full rounded-3xl border border-white/5 bg-brand-surface/40 p-8 
                            backdrop-blur-sm hover:bg-brand-surface/60 hover:border-white/10 
                            transition-all duration-300 flex flex-col items-start gap-4 
                            relative overflow-hidden
                            ${item.className}
                        `}>
                            {/* Glow on hover */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[50px] group-hover:bg-cyan-500/20 transition-colors" />

                            <div className="p-3 rounded-2xl bg-brand-surface border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-brand-muted leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}
