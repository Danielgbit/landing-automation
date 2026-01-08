import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/NavBar'
import './globals.css'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Automatización para negocios',
  description:
    'Landing pages y WhatsApp automatizado para pequeñas empresas',
}

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
