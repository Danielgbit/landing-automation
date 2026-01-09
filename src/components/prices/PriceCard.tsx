interface PriceCardProps {
    title: string
    price: string
    subtitle: string
    features: string[]
    highlighted?: boolean
}

export default function PriceCard({
    title,
    price,
    subtitle,
    features,
    highlighted = false,
}: PriceCardProps) {
    return (
        <div
            className={[
                "bg-brand-white border rounded-2xl p-5 sm:p-6 shadow-card flex flex-col",
                highlighted ? "border-accent" : "border-gray-200",
            ].join(" ")}
        >
            {highlighted && (
                <span className="mb-3 sm:mb-4 inline-block text-xs font-medium text-accent">
                    Recomendado para empezar
                </span>
            )}

            <h3 className="text-base sm:text-lg font-semibold text-brand-primary">
                {title}
            </h3>

            <p className="mt-2 text-sm text-brand-muted">
                {subtitle}
            </p>

            <p className="mt-4 sm:mt-6 text-2xl sm:text-3xl font-semibold text-brand-primary">
                {price}
            </p>

            <ul className="mt-4 sm:mt-6 space-y-2 text-sm text-brand-muted">
                {features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                        <span className="text-brand-subtle">•</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
