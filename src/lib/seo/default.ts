// src/lib/seo/default.ts

import { ogBase } from './og'

export const defaultMetadata = {
  metadataBase: new URL('https://focusidestudio.com'),

  title: {
    default: 'Focuside Studio | Agencia Especializada en Ecosistemas Digitales y IA',
    template: '%s | Focuside Studio',
  },

  description:
    'Focuside Studio no es un software más, somos la Agencia Especializada que desarrolla todo el ecosistema: Landings que convierten, conexiones de e-commerce, formularios web avanzados y Agentes IA 24/7 en WhatsApp.',

  keywords: ['Agencia de Automatización', 'WhatsApp IA 24/7', 'Formularios web a WhatsApp', 'Desarrollo de Landing Pages', 'eCommerce Inteligente', 'Focuside Studio'],

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    ...ogBase,
    title: 'Focuside Studio | Landings, eCommerce y Automatizaciones WhatsApp 24/7',
    description:
      'Focuside Studio no es un software más, somos la Agencia Especializada que desarrolla todo el ecosistema: Landings que convierten, conexiones de e-commerce, formularios web avanzados y Agentes IA 24/7 en WhatsApp.',
    images: [
      {
        url: '/og.png', // relativo al public
        width: 1200,
        height: 630,
        alt: 'Focuside Studio — Agile Automation & Web',
      },
    ],
  },
}
