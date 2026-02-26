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
            // 🎨 BRAND COLORS — CYBER/INDUSTRIAL LUXURY
            colors: {
                brand: {
                    // 🧱 Estructura (ultra dark)
                    dark: '#050505',        // navbar, hero, footer, main bg
                    surface: '#111827',     // overlays, cards (gray-900)
                    surface_light: '#1F2937', // bordes sutiles o hovers (gray-800)

                    // ✍️ Texto
                    primary: '#F9FAFB',     // títulos (gray-50)
                    muted: '#9CA3AF',       // texto normal (gray-400)
                    subtle: '#4B5563',      // texto secundario (gray-600)
                },

                // 🟢 ACCENT — ALTO CONTRASTE (NEÓN)
                accent: {
                    DEFAULT: '#00FFA3',     // CTA principal y glows (Verde Neón)
                    hover: '#00D185',       // hover CTA
                    glow: 'rgba(0,255,163,0.15)', // Para box-shadows desenfocados
                    soft: 'rgba(0,255,163,0.05)', // Para fondos de badge
                },

                // 🧱 ESTADOS
                state: {
                    success: '#10B981',
                    warning: '#F59E0B',
                    error: '#EF4444',
                },
            },

            // ✍️ TIPOGRAFÍA — CONTRASTE TECNOLÓGICO/EDITORIAL
            fontFamily: {
                sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'], // Alta legibilidad
                display: ['var(--font-syne)', 'system-ui', 'sans-serif'], // Títulos impactantes
            },

            // 📐 BORDER RADIUS — GEOMÉTRICO CON LIGERO REDONDEO
            borderRadius: {
                xl: '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },

            // 🌫️ SHADOWS — GLOWS NEÓN
            boxShadow: {
                soft: '0 4px 24px -4px rgba(0,0,0,0.5)',
                card: '0 8px 32px -8px rgba(0,0,0,0.6)',
                glow: '0 0 24px -4px rgba(0,255,163,0.2)', // Resplandor verde intermedio
                glow_strong: '0 0 40px -8px rgba(0,255,163,0.4)', // Resplandor verde fuerte
                glow_subtle: '0 0 16px -2px rgba(255,255,255,0.05)', // Resplandor blanco sutil
            },

            // ANIMACIONES PERSONALIZADAS
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}

export default config
