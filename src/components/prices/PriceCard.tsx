/**
 * PriceCard
 * Card reutilizable para precios
 */

export default function PriceCard({
    title,
    price
}: {
    title: string;
    price: string;
}) {
    return (
        <div className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-4 text-2xl font-bold text-green-600">{price}</p>
        </div>
    );
}
