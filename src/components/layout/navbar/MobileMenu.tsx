'use client'

import { motion, AnimatePresence, Variants } from "framer-motion"

export default function MobileMenu({
    open,
    onClose
}: {
    open: boolean
    onClose: () => void
}) {
    // Variantes de animación para el contenedor
    const menuVariants: Variants = {
        hidden: { opacity: 0, clipPath: "circle(0% at 90% 10%)" },
        visible: {
            opacity: 1,
            clipPath: "circle(150% at 90% 10%)",
            transition: {
                type: "spring" as const,
                stiffness: 40,
                restDelta: 2,
                duration: 0.6,
                staggerChildren: 0.1, // Animación en cascada
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            clipPath: "circle(0% at 90% 10%)",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    }

    // Variantes para cada enlace individual
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring" as const, stiffness: 100, damping: 12 }
        }
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col justify-center bg-brand-dark/98 backdrop-blur-3xl px-6 sm:px-10 overflow-hidden"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Botón de Cierre */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-4 rounded-full bg-white/5 hover:bg-white/10 hover:text-accent transition-colors border border-white/10"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Decoración de Fondo (Ruido y Glow Nav) */}
                    <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />
                    <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

                    <div className="flex flex-col space-y-8 mt-10 relative z-10 w-full max-w-sm mx-auto">
                        <motion.a
                            variants={itemVariants}
                            href="/#demos"
                            onClick={onClose}
                            className="text-4xl sm:text-5xl font-display font-bold text-white/90 hover:text-accent transition-colors tracking-tight"
                        >
                            Demos
                        </motion.a>

                        <motion.a
                            variants={itemVariants}
                            href="/#solucion"
                            onClick={onClose}
                            className="text-4xl sm:text-5xl font-display font-bold text-white/90 hover:text-accent transition-colors tracking-tight"
                        >
                            Cómo funciona
                        </motion.a>

                        <motion.a
                            variants={itemVariants}
                            href="/#precios"
                            onClick={onClose}
                            className="text-4xl sm:text-5xl font-display font-bold text-white/90 hover:text-accent transition-colors tracking-tight"
                        >
                            Precios
                        </motion.a>

                        <motion.div variants={itemVariants} className="pt-8 mt-4 border-t border-white/10 w-full">
                            <a
                                href="https://wa.me/573024932976"
                                target="_blank"
                                onClick={onClose}
                                className="relative flex w-full items-center justify-center gap-3 rounded-2xl bg-accent py-5 text-brand-dark font-extrabold text-xl shadow-[0_0_30px_rgba(0,255,163,0.5)] overflow-hidden group/cta"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.46-1.761-1.633-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Hablar por WhatsApp
                                </span>
                                {/* Glow Animado Hover */}
                                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300 ease-out" />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

