/**
 * DemoCard
 * Card reutilizable para demos
 */

export default function DemoCard({
    title,
    description,
    features,
    href,
    level = "base",
}: {
    title: string;
    description: string;
    features: string[];
    href: string;
    level?: "base" | "advanced";
}) {
    return (
        <div className="bg-brand-white border border-gray-200 rounded-2xl p-6 shadow-card flex flex-col justify-between">
            <div>
                {/* Nivel */}
                <span className="inline-block mb-3 text-xs font-medium text-brand-subtle">
                    {level === "base" ? "Base" : "Automatización"}
                </span>

                {/* Título */}
                <h3 className="text-lg font-semibold text-brand-primary">
                    {title}
                </h3>

                {/* Descripción */}
                <p className="mt-2 text-sm text-brand-muted">
                    {description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-2 text-sm text-brand-muted">
                    {features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                            <span className="text-brand-subtle">•</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA */}
            <a
                href={href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition"
            >
                Ver demo
                <span aria-hidden>→</span>
            </a>
        </div>
    );
}
