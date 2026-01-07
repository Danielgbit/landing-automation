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
            colors: {
                // 🎯 Brand base
                brand: {
                    dark: '#0B0B0B',      // negro principal
                    surface: '#111827',   // gris oscuro (headers, nav)
                    muted: '#374151',     // gris medio
                    subtle: '#6B7280',    // texto secundario
                    light: '#F9FAFB',     // fondo claro
                    white: '#FFFFFF',
                },

                // 🟢 Accent (acción)
                accent: {
                    DEFAULT: '#22C55E',   // verde principal
                    hover: '#16A34A',     // hover CTA
                    soft: '#DCFCE7',      // fondos suaves
                },

                // 🧱 Estados (opcional, pero profesional)
                state: {
                    success: '#16A34A',
                    warning: '#F59E0B',
                    error: '#EF4444',
                },
            },

            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },

            borderRadius: {
                xl: '0.75rem',
                '2xl': '1rem',
            },

            boxShadow: {
                soft: '0 2px 8px rgba(0,0,0,0.04)',
                card: '0 4px 14px rgba(0,0,0,0.06)',
            },
        },
    },
    plugins: [],
}

export default config
