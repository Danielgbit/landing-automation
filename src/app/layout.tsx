import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/NavBar'
import './globals.css'
import Footer from '@/components/layout/Footer'

import { defaultMetadata } from '@/lib/seo/default'

export const metadata = defaultMetadata


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans antialiased bg-brand-dark text-brand-muted`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
