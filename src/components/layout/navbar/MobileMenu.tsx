'use client'

import { motion, AnimatePresence } from "framer-motion"

export default function MobileMenu({
    open,
    onClose
}: {
    open: boolean
    onClose: () => void
}) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Panel */}
                    <motion.div
                        className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white p-6 shadow-xl"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="space-y-6 text-center">
                            <a href="/#demos" onClick={onClose} className="block text-lg font-medium">
                                Demos
                            </a>
                            <a href="/#solucion" onClick={onClose} className="block text-lg font-medium">
                                Cómo funciona
                            </a>
                            <a href="/#precios" onClick={onClose} className="block text-lg font-medium">
                                Precios
                            </a>

                            <a
                                href="https://wa.me/573024932976"
                                target="_blank"
                                className="mt-6 inline-flex w-full justify-center rounded-xl bg-accent py-3 text-white font-medium shadow-md"
                            >
                                Hablar por WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
