// src/components/motion/FadeIn.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay }}
        >
            {children}
        </motion.div>
    )
}
