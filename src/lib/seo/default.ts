// src/lib/seo/default.ts

import { ogBase } from './og'

export const defaultMetadata = {
    metadataBase: new URL('https://focusidestudio.com'),

    title: {
        default: 'Focuside Studio - Web & Automatizations',
        template: '%s | Focuside',
    },

    description:
        'Automatiza tu WhatsApp y convierte visitas en clientes con landing pages optimizadas para negocios locales.',

    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        ...ogBase,
        title: 'Más clientes por WhatsApp — sin responder todo el día',
        description:
          'Landing pages y automatización para peluquerías, centros de estética y negocios locales.',
        images: [
          {
            url: 'og.png', // relativo al public
            width: 1200,
            height: 630,
            alt: 'Focuside — Automatiza tu WhatsApp',
          },
        ],
      },
      
      
}
