'use client'

import { Service } from '@/services/services.service'

type Props = {
    service: Service
}

export default function ServiceCard({ service }: Props) {
    return (
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">
                {service.name}
            </h2>

            {service.description && (
                <p className="mt-1 text-sm text-gray-600">
                    {service.description}
                </p>
            )}

            <div className="mt-4 flex items-center gap-3 text-sm text-gray-800">
                <span>⏱ {service.duration_minutes} min</span>
                <span>·</span>
                <span>💲 {service.price}</span>
            </div>
        </div>
    )
}
