// src/hooks/useScrollDirection.ts
'use client'

import { useEffect, useState } from 'react'

export function useScrollDirection(threshold = 10) {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY

            const delta = currentScrollY - lastScrollY

            if (Math.abs(delta) < threshold) return

            if (currentScrollY < 80) {
                setIsVisible(true) // siempre visible cerca del top
            } else if (delta > 0) {
                setIsVisible(false) // bajando → ocultar
            } else {
                setIsVisible(true) // subiendo → mostrar
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [lastScrollY, threshold])

    return isVisible
}
