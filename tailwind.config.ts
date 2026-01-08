import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/hooks/**/*.{js,ts,jsx,tsx}',
        './src/lib/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            // 🎨 BRAND COLORS — SISTEMA OFICIAL
            colors: {
                brand: {
                    // 🧱 Estructura (dark)
                    dark: '#0B0B0B',        // navbar, hero, footer
                    surface: '#111827',     // overlays, modales, secciones dark

                    // ✍️ Texto
                    primary: '#0B0B0B',     // títulos / datos clave
                    muted: '#374151',       // texto normal
                    subtle: '#6B7280',      // texto secundario / labels

                    // 📄 Fondos
                    light: '#F9FAFB',       // fondo general
                    white: '#FFFFFF',       // cards / bloques
                },

                // 🟢 ACCENT — ACCIÓN (ÚNICO COLOR DE ACCIÓN)
                accent: {
                    DEFAULT: '#22C55E',     // CTA principal
                    hover: '#16A34A',       // hover CTA
                    soft: 'rgba(34,197,94,0.1)', // fondos suaves (check, confirmación)
                },

                // 🧱 ESTADOS (NO CTA)
                state: {
                    success: '#16A34A',
                    warning: '#F59E0B',
                    error: '#EF4444',
                },
            },

            // ✍️ TIPOGRAFÍA
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },

            // 📐 BORDER RADIUS — LOOK SaaS
            borderRadius: {
                xl: '0.75rem',
                '2xl': '1rem',
            },

            // 🌫️ SHADOWS — MUY SUTILES
            boxShadow: {
                soft: '0 1px 4px rgba(0,0,0,0.04)',
                card: '0 1px 6px rgba(0,0,0,0.05)',
            },
        },
    },
    plugins: [],
}

export default config
