// src/components/motion/SlideUp.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideUpProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function SlideUp({ children, delay = 0, className = "" }: SlideUpProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
        >
            {children}
        </motion.div>
    )
}
