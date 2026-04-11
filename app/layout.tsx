import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileStickyBar } from '@/components/mobile-sticky-bar'
import { SubscriptionWrapper } from "@/components/subscription-wrapper"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: {
    default: 'Aqua024 - Vízszerelő 0-24 Budapest | Azonnali Kiszállás',
    template: '%s | Aqua024'
  },
  description: 'Non-stop vízszerelő szolgáltatás Budapest és 60 km-es körzetében. Csőtörés, duguláselhárítás, vízszivárgás - 1-2 órán belül nálad vagyunk! Hívj: +36 30 598 8450',
  keywords: ['vízszerelő', 'vízszerelő 0-24', 'nonstop vízszerelő', 'csőtörés', 'duguláselhárítás', 'Budapest', 'azonnal'],
  authors: [{ name: 'Aqua024' }],
  openGraph: {
    title: 'Aqua024 - Vízszerelő 0-24 Budapest',
    description: 'Non-stop vízszerelő szolgáltatás - 1-2 órán belül nálad vagyunk!',
    url: 'https://aqua024.hu',
    siteName: 'Aqua024',
    locale: 'hu_HU',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SubscriptionWrapper>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <MobileStickyBar />
        </SubscriptionWrapper>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18081709744"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18081709744');
          `}
        </Script>
        
        {/* Event snippet for Kattint és hív conversion page */}
        <Script id="gtag-report-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-18081709744/cuvUCI6KoZocELD9g65D',
                    'value': 1.0,
                    'currency': 'HUF',
                    'event_callback': callback
                });
              } else {
                callback();
              }
              return false;
            }
          `}
        </Script>
      </body>
    </html>
  )
}
