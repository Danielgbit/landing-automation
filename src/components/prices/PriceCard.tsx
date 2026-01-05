/**
 * PriceCard
 * Card reutilizable para mostrar un plan de precios
 * NO contiene lógica de negocio
 */

export default function PriceCard({
    title,
    price,
    subtitle,
    features,
    highlighted = false,
}: PriceCardProps) {
    return (
        <div
            className={`rounded-xl border p-6 ${highlighted
                ? "border-green-600 bg-green-50"
                : "border-gray-200 bg-white"
                }`}
        >
            <h3 className="text-lg font-semibold text-gray-900">
                {title}
            </h3>

            <p className="mt-2 text-sm text-gray-600">
                {subtitle}
            </p>

            <p className="mt-4 text-2xl font-bold text-green-600">
                {price}
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {features.map((feature) => (
                    <li key={feature}>✔️ {feature}</li>
                ))}
            </ul>

            {highlighted && (
                <p className="mt-4 text-xs font-semibold text-green-700">
                    ⭐ Más recomendado
                </p>
            )}
        </div>
    );
}
