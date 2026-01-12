'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollDirection(threshold = 10) {
    const [isVisible, setIsVisible] = useState(true)
    const [mounted, setMounted] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        setMounted(true)

        const onScroll = () => {
            const current = window.scrollY
            const delta = current - lastScrollY.current

            if (Math.abs(delta) < threshold) return

            if (current < 80) {
                setIsVisible(true)
            } else if (delta > 0) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            lastScrollY.current = current
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [threshold])

    // Antes de montar → estado neutro para que SSR y client coincidan
    if (!mounted) return true

    return isVisible
}
