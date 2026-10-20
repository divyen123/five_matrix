import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Sora } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Five Matrix Shipping Pte Ltd — Ship Broking & Chartering, Singapore',
  description:
    'Five Matrix Shipping Pte Ltd is a Singapore-based ship broking and chartering company delivering safe, secure and sustainable maritime commerce across Asia and beyond.',
  generator: 'v0.app',
  icons: {
    icon: '/fivematrix-logo.jpg',
    apple: '/fivematrix-logo.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#17243f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} bg-background scroll-smooth`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
