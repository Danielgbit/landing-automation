'use client'

import { Service } from '@/services/services/services.service'

type Props = {
    service: Service
}

export default function ServiceCard({ service }: Props) {
    return (
        <div className="
      group relative overflow-hidden
      bg-brand-surface/60 backdrop-blur-xl
      border border-white/5
      rounded-3xl
      p-6
      transition-all duration-300
      hover:border-accent/40
      hover:shadow-[0_0_20px_rgba(0,255,163,0.1)]
      hover:-translate-y-1
    ">
            {/* Ambient Glow */}
            <div className="absolute -inset-x-0 -top-10 h-24 bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

            <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                    {/* Nombre */}
                    <h2 className="text-lg font-display font-semibold text-white group-hover:text-accent transition-colors">
                        {service.name}
                    </h2>

                    {/* Descripción */}
                    {service.description && (
                        <p className="mt-2 text-sm text-brand-muted leading-relaxed max-w-2xl">
                            {service.description}
                        </p>
                    )}
                </div>

                {/* Meta info estilo Badge Cyber */}
                <div className="flex items-center gap-3 text-xs font-medium text-white/80 shrink-0 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                    <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-brand-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {service.duration_minutes} min
                    </span>
                    <span className="h-3 w-px bg-white/20" />
                    <span className="text-accent">
                        {service.price}
                    </span>
                </div>
            </div>
        </div>
    )
}
