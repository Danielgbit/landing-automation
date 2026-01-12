export default function ServicesSkeleton() {
    return (
        <div className="space-y-3 sm:space-y-4 animate-pulse">
            {Array.from({ length: 5 }).map((_, i) => (
                <div
                    key={i}
                    className="
            rounded-2xl border border-gray-200 bg-white
            px-5 py-4
            shadow-soft
          "
                >
                    <div className="h-4 w-1/2 rounded bg-gray-200 mb-2" />
                    <div className="h-3 w-1/3 rounded bg-gray-100" />
                </div>
            ))}
        </div>
    )
}
