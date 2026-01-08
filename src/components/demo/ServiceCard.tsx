'use client'

import { Service } from '@/services/services.service'

type Props = {
    service: Service
}

export default function ServiceCard({ service }: Props) {
    return (
        <div className="
      bg-brand-white
      border border-gray-200
      rounded-2xl
      p-6
      shadow-soft
    ">
            {/* Nombre */}
            <h2 className="text-base font-semibold text-brand-primary">
                {service.name}
            </h2>

            {/* Descripción */}
            {service.description && (
                <p className="mt-2 text-sm text-brand-muted">
                    {service.description}
                </p>
            )}

            {/* Meta info */}
            <div className="mt-4 flex items-center gap-4 text-xs text-brand-subtle">
                <span>
                    Duración: {service.duration_minutes} min
                </span>
                <span className="h-3 w-px bg-gray-300" />
                <span>
                    Precio: {service.price}
                </span>
            </div>
        </div>
    )
}
