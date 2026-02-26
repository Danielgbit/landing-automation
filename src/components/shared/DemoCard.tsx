export default function DemoCard({
    title,
    description,
    features,
    href,
    level = "base",
}: {
    title: string
    description: string
    features: string[]
    href: string
    level?: "base" | "advanced"
}) {
    return (
        <div className="h-full bg-brand-surface/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-brand-surface/60 hover:border-accent/30 hover:shadow-glow_subtle group">
            <div>
                <span className={`inline-block mb-4 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${level === "base" ? "bg-white/5 border-white/10 text-brand-muted" : "bg-accent/10 border-accent/20 text-accent shadow-glow_subtle"}`}>
                    {level === "base" ? "Base" : "Avanzado"}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-brand-primary font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-muted transition-all">
                    {title}
                </h3>

                <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                    {description}
                </p>

                <ul className="mt-6 sm:mt-8 space-y-3 text-sm text-brand-muted">
                    {features.map((feature) => (
                        <li key={feature} className="flex gap-3 items-start">
                            <svg className="h-4 w-4 text-brand-subtle shrink-0 mt-0.5 group-hover:text-accent/70 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="leading-snug">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <a
                href={href}
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand-surface_light border border-white/5 text-brand-primary px-5 py-4 text-sm font-semibold transition-all duration-300 hover:border-accent hover:shadow-glow hover:text-accent w-full group/btn"
            >
                Ver demo <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
            </a>
        </div>
    )
}

