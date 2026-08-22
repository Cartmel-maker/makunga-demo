import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { ComplianceProvider } from '@/components/compliance-modal'
import { IndustrialFaq } from '@/components/industrial-faq'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  title: 'Makhunga Crane & Engineering | LME 327 Certified & DMR 18',
  description: 'Richards Bay 24/7 industrial crane maintenance, statutory load testing, and direct overnight JHB spares corridor.',
  openGraph: {
    title: 'Makhunga Crane & Engineering',
    description: '24/7 Field Maintenance & Heavy Crane Support in Richards Bay.',
    url: 'https://makhunga.co.za',
    siteName: 'Makhunga Crane & Engineering',
    locale: 'en_ZA',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`bg-background ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        <ComplianceProvider>
          {children}
          <IndustrialFaq />
        </ComplianceProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
