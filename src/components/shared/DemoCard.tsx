/**
 * DemoCard
 * Card reutilizable para demos
 */

export default function DemoCard({
    title,
    description,
    features,
    href,
    external = false
}: {
    title: string;
    description: string;
    features: string[];
    href: string;
    external?: boolean;
}) {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>

            <ul className="mt-4 text-sm text-gray-700 space-y-1">
                {features.map((feature) => (
                    <li key={feature}>✔️ {feature}</li>
                ))}
            </ul>

            <a
                href={href}
                target={external ? "_blank" : undefined}
                className="mt-6 inline-block text-green-600 font-medium hover:underline"
            >
                Ver demo →
            </a>
        </div>
    );
}
