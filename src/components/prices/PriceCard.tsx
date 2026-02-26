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
                "h-full relative z-10 bg-brand-surface/80 backdrop-blur-xl border rounded-3xl p-8 flex flex-col transition-all duration-300",
                highlighted
                    ? "border-accent/50 shadow-glow_subtle scale-105 sm:scale-110 lg:scale-[1.08] transform-gpu"
                    : "border-white/10 hover:border-white/20",
            ].join(" ")}
        >
            {highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold text-brand-dark bg-accent shadow-glow">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-dark opacity-50"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-dark"></span>
                        </span>
                        Recomendado
                    </span>
                </div>
            )}

            <h3 className="text-xl sm:text-2xl font-bold text-brand-primary font-display">
                {title}
            </h3>

            <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                {subtitle}
            </p>

            <div className="mt-6 sm:mt-8 mb-8">
                <p className="text-4xl sm:text-5xl font-bold text-brand-primary font-display tracking-tight">
                    {price}
                </p>
            </div>

            <ul className="mt-auto space-y-4 text-sm text-brand-muted">
                {features.map((feature) => (
                    <li key={feature} className="flex gap-3 items-start">
                        <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-snug">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

