import FadeIn from "@/components/ui/motion/FadeIn"
import SlideUp from "@/components/ui/motion/SlideUp"
import { MonitorPlay, LayoutTemplate, LineChart, Code2, Database, Briefcase } from "lucide-react"

const products = [
    { name: "Consultoría Estratégica", price: "$150.000 / h", icon: Briefcase, tag: "Servicio" },
    { name: "Auditoría SEO B2B", price: "$450.000", icon: LineChart, tag: "One-off" },
    { name: "Masterclass: Ventas IA", price: "$80.000", icon: MonitorPlay, tag: "Digital" },
    { name: "Kit Plantillas Notion", price: "$45.000", icon: LayoutTemplate, tag: "Descargable" },
    { name: "Setup CRM Básico", price: "$800.000", icon: Database, tag: "Servicio" },
    { name: "Desarrollo Landing Page", price: "$1.200.000", icon: Code2, tag: "One-off" },
]

export default function EcommerceProductGrid() {
    return (
        <section id="catalogo" className="px-4 py-16 relative z-10">
            <SlideUp>
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white mb-3">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">Escaparate Digital</span> de alta conversión
                    </h2>
                    <p className="text-brand-muted text-sm sm:text-base max-w-2xl mx-auto">
                        Tus prospectos ven tus ofertas estructuradas sin distracciones. Ideal para servicios high-ticket, productos digitales o consultorías.
                    </p>
                </div>
            </SlideUp>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {products.map((product, i) => {
                    const Icon = product.icon;
                    return (
                        <FadeIn key={product.name} delay={i * 0.1}>
                            <div className="group flex flex-col h-full rounded-2xl border border-white/5 bg-brand-surface/30 p-5 backdrop-blur-md hover:bg-brand-surface/60 hover:border-white/15 transition-all duration-300 relative overflow-hidden">

                                {/* Etiqueta superior */}
                                <div className="absolute top-4 right-4 z-10 px-2 py-1 rounded bg-white/5 text-[10px] font-bold tracking-wider text-brand-subtle uppercase border border-white/10">
                                    {product.tag}
                                </div>

                                {/* Espacio de imagen / ícono B2B */}
                                <div className="h-40 rounded-xl bg-gradient-to-br from-brand-surface to-brand-dark flex items-center justify-center mb-5 border border-white/5 group-hover:border-cyan-500/20 transition-colors relative overflow-hidden">
                                    <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
                                    <Icon className="w-12 h-12 text-brand-muted group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500 relative z-10" strokeWidth={1.5} />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <h3 className="font-semibold text-white text-lg mb-1 group-hover:text-accent transition-colors">
                                        {product.name}
                                    </h3>

                                    <p className="text-xl font-display font-bold text-cyan-400 mb-6 mt-1">
                                        {product.price}
                                    </p>

                                    <button className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-accent hover:text-brand-dark hover:border-accent group-hover:shadow-[0_0_20px_rgba(0,255,163,0.2)] transition-all duration-300">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                                        </svg>
                                        Comprar por WhatsApp
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    )
                })}
            </div>
        </section>
    )
}
