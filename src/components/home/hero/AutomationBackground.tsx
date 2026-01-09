'use client'

import { motion } from "framer-motion"
import { useMemo } from "react"
import {
    MessageCircle,
    Calendar,
    Bot,
    Zap,
    Workflow,
} from "lucide-react"

const icons = [MessageCircle, Calendar, Bot, Zap, Workflow]

type FloatingIcon = {
    Icon: any
    size: number
    left: number
    startY: number
    duration: number
}

export default function AutomationBackground() {
    const floatingIcons = useMemo<FloatingIcon[]>(() => {
        return Array.from({ length: 14 }).map((_, i) => {
            const Icon = icons[i % icons.length]

            return {
                Icon,
                size: 28 + Math.random() * 36,
                left: Math.random() * 100,
                startY: Math.random() * 120 - 20, // ya distribuidos en el eje Y
                duration: 18 + Math.random() * 20,
                delay: Math.random() * 8,
            }
        })
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {floatingIcons.map((item, i) => (
                <motion.div
                    key={i}
                    className="absolute text-white/10"
                    style={{
                        left: `${item.left}%`,
                        bottom: `${item.startY}vh`,
                    }}
                    animate={{
                        y: ["0vh", "-140vh"],
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <item.Icon size={item.size} />
                </motion.div>
            ))}
        </div>
    )
}
