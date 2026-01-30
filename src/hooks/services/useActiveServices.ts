// src/hooks/services/useActiveServices.ts

'use client'

import { useEffect, useState } from 'react'
import { Service } from '@/services/services/services.service'

export function useActiveServices() {
    const [services, setServices] = useState<Service[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchServices() {
            try {
                const res = await fetch('/api/services')
                if (!res.ok) throw new Error('Error cargando servicios')
                const data = await res.json()
                setServices(data)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchServices()
    }, [])

    return { services, loading, error }
}
