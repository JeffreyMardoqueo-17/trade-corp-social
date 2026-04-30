import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://grupotcorp.com'),
  title: {
    default: 'Grupo Trade Corp | Comunidad Privada de Trading y CopyTrading',
    template: '%s | Grupo Trade Corp',
  },
  description:
    'Grupo Trade Corp es una comunidad privada donde aprendes, entiendes y ejecutas con criterio. Formación profesional, CopyTrading y decisiones financieras con claridad.',
  keywords: [
    'Grupo Trade Corp',
    'trading',
    'copytrading',
    'formacion financiera',
    'mercados financieros',
    'traders activos',
    'El Salvador',
  ],
  authors: [{ name: 'Grupo Trade Corp', url: 'https://grupotcorp.com' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_SV',
    url: 'https://grupotcorp.com',
    siteName: 'Grupo Trade Corp',
    title: 'Grupo Trade Corp | La base del trabajo en mercados',
    description:
      'Disciplina, criterio y responsabilidad para construir patrimonio sólido y sostenible. Comunidad privada con formación profesional y CopyTrading.',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Logo de Grupo Trade Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo Trade Corp | Comunidad Privada de Trading',
    description:
      'Aprende, entiende y ejecuta con criterio. Formación profesional, CopyTrading y crecimiento con consistencia.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/ico.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ico.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.ico',
        type: 'image/svg+xml',
      },
    ],
    apple: '/ico.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
