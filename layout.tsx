import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cairo } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'مساعد الروشتة والدواء | Prescription AI',
  description:
    'اقرأ الروشتات والتحاليل الطبية مجاناً، ابحث عن أسعار الأدوية وبدائلها، ونظّم مواعيد علاجك. Read prescriptions and lab tests, find medicine prices and alternatives.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#2b7fd0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`light ${cairo.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
