/**
 * Pricing
 * Sección de precios de la Home
 * Se encarga de renderizar los planes usando data externa
 */

import PriceCard from "@/components/prices/PriceCard";
import { pricingPlans } from "@/data/pricing";

export default function Pricing() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                    Precios claros y sin sorpresas
                </h2>

                <p className="mt-4 text-gray-600">
                    Empieza simple y automatiza cuando lo necesites.
                </p>

                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <PriceCard
                            key={plan.id}
                            title={plan.title}
                            price={plan.price}
                            subtitle={plan.subtitle}
                            features={plan.features}
                            highlighted={plan.highlighted}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}   
