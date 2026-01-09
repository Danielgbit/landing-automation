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
        <div className="bg-brand-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-card flex flex-col justify-between">
            <div>
                <span className="inline-block mb-2 sm:mb-3 text-xs font-medium text-brand-subtle">
                    {level === "base" ? "Base" : "Automatización"}
                </span>

                <h3 className="text-base sm:text-lg font-semibold text-brand-primary">
                    {title}
                </h3>

                <p className="mt-2 text-sm text-brand-muted">
                    {description}
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

            <a
                href={href}
                className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-lg bg-accent/10 text-accent px-4 py-3 text-sm font-medium hover:bg-accent/20 transition"
            >
                Ver demo →
            </a>
        </div>
    )
}
