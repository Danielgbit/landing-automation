import PriceCard from "@/components/prices/PriceCard"
import { pricingPlans } from "@/data/pricing"
import FadeIn from "../motion/FadeIn"
import SlideUp from "../motion/SlideUp"

export default function Pricing() {
    return (
        <section id="precios" className="bg-brand-light px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-5xl text-center">
                <FadeIn>
                    <h2 className="text-xl sm:text-2xl font-semibold text-brand-primary">
                        Precios claros y sin sorpresas
                    </h2>
                </FadeIn>

                <SlideUp>
                    <p className="mt-3 sm:mt-4 text-sm text-brand-muted">
                        Empieza con lo esencial y agrega automatización cuando lo necesites.
                    </p>
                </SlideUp>

                <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {pricingPlans.map((plan) => (
                        <SlideUp key={plan.id}>
                            <PriceCard
                                title={plan.title}
                                price={plan.price}
                                subtitle={plan.subtitle}
                                features={plan.features}
                                highlighted={plan.highlighted}
                            />
                        </SlideUp>
                    ))}
                </div>
            </div>
        </section>
    )
}
