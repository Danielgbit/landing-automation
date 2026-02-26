import PriceCard from "@/components/prices/PriceCard"
import { pricingPlans } from "@/data/pricing"
import FadeIn from "../ui/motion/FadeIn"
import SlideUp from "../ui/motion/SlideUp"

export default function Pricing() {
    return (
        <section id="precios" className="relative bg-brand-dark px-4 py-24 sm:px-6 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-primary tracking-tight">
                            Transparencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-brand-primary">absoluta</span>
                        </h2>
                    </FadeIn>

                    <SlideUp delay={0.1}>
                        <p className="mt-4 sm:mt-6 text-lg text-brand-muted max-w-2xl mx-auto">
                            Empieza con lo esencial y agrega automatización avanzada cuando tu negocio lo demande.
                        </p>
                    </SlideUp>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {pricingPlans.map((plan, index) => (
                        <SlideUp key={plan.id} delay={index * 0.1}>
                            <div className={`h-full ${plan.highlighted ? 'relative' : ''}`}>
                                {plan.highlighted && (
                                    <div className="absolute -inset-1 bg-gradient-to-b from-accent/50 to-transparent rounded-3xl blur-md opacity-30"></div>
                                )}
                                <PriceCard
                                    title={plan.title}
                                    price={plan.price}
                                    subtitle={plan.subtitle}
                                    features={plan.features}
                                    highlighted={plan.highlighted}
                                />
                            </div>
                        </SlideUp>
                    ))}
                </div>
            </div>
        </section>
    )
}

