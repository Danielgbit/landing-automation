'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useScrollDirection } from "@/hooks/navbar/useScrollDirection"
import MobileMenu from "./MobileMenu"
import NavbarShell from "./NavbarShell"
import NavbarClient from "./NavbarClient"

/**
 * Navbar wrapper
 * Evita hydration mismatch renderizando una versión neutra en SSR
 */
export default function Navbar() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // 🔑 Durante SSR y primer paint del cliente → versión neutra
    if (!mounted) {
        return <NavbarShell />
    }

    // 🔥 UI real solo cuando el cliente está listo
    return <NavbarClient />
}
