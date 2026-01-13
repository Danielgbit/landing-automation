import { useState } from "react"
import MobileMenu from "./MobileMenu"
import NavbarContent from "./NavbarContent"
import { useScrollDirection } from "@/hooks/navbar/useScrollDirection"

export default function NavbarClient() {
    const isVisible = useScrollDirection()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header
                className={`
          fixed top-0 left-0 right-0 z-50
          px-4 pt-4
          transition-all duration-300 ease-out
          ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}
        `}
            >
                <NavbarContent onMenu={() => setIsOpen(true)} />
            </header>

            <MobileMenu open={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}
