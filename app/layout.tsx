import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CartProvider } from '@/context/cart-context'
import { ThemeProvider } from '@/context/theme-context'

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Dulce Corteza | Panaderia Artesanal',
  description: 'Pasteles, panes y tortas artesanales hechos frescos diariamente con los mejores ingredientes.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
