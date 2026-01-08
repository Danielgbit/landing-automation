/**
 * Pricing
 * Sección de precios de la Home
 * Objetivo: claridad + guía de decisión
 */

import PriceCard from "@/components/prices/PriceCard";
import { pricingPlans } from "@/data/pricing";

export default function Pricing() {
    return (
        <section className="bg-brand-light px-6 py-24">
            <div className="mx-auto max-w-5xl text-center">
                {/* Título */}
                <h2 className="text-xl md:text-2xl font-semibold text-brand-primary">
                    Precios claros y sin sorpresas
                </h2>

                {/* Subtítulo */}
                <p className="mt-4 text-sm text-brand-muted">
                    Empieza con lo esencial y agrega automatización cuando lo necesites.
                </p>

                {/* Planes */}
                <div className="mt-16 grid gap-8 md:grid-cols-3">
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
