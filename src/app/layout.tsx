import { Syne, Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from '@/components/layout/navbar/NavBar'
import './globals.css'
import Footer from '@/components/layout/Footer'

import { defaultMetadata } from '@/lib/seo/default'

export const metadata = defaultMetadata

// Tipografía para Títulos (Display)
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

// Tipografía para Cuerpo (Legibilidad SaaS)
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${syne.variable} ${jakarta.variable} font-sans antialiased text-brand-muted bg-brand-dark min-h-screen selection:bg-accent selection:text-brand-dark`}
      >
        <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-50"></div>
        <div className="relative z-0 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
