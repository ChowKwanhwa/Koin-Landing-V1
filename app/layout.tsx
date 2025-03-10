import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  title: 'KOIN - The Future of African Finance',
  description: 'KOIN is revolutionizing African finance through blockchain technology, providing innovative financial solutions and fostering economic growth across the continent.',
  keywords: ['KOIN', 'African Finance', 'Blockchain', 'Cryptocurrency', 'DeFi', 'Financial Innovation'],
  authors: [{ name: 'KOIN Team' }],
  icons: {
    icon: '/G-6.svg',
    shortcut: '/G-6.svg',
    apple: '/G-6.svg',
  },
  openGraph: {
    title: 'KOIN - The Future of African Finance',
    description: 'KOIN is revolutionizing African finance through blockchain technology, providing innovative financial solutions and fostering economic growth across the continent.',
    url: 'https://koin.finance',
    siteName: 'KOIN',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/G-6-wOqU0MpcgT2vcnP3rwBesVjmz3klgE.svg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KOIN - The Future of African Finance',
    description: 'KOIN is revolutionizing African finance through blockchain technology, providing innovative financial solutions and fostering economic growth across the continent.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/G-6-wOqU0MpcgT2vcnP3rwBesVjmz3klgE.svg'],
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/G-6-wOqU0MpcgT2vcnP3rwBesVjmz3klgE.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
