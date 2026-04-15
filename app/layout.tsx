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

        {/* --- Google Tag (gtag.js) --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18042176502"
          strategy="afterInteractive"
        />
        <Script id="gtag-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18042176502');
          `}
        </Script>

        {/* --- Google Ads Conversion helper --- */}
        <Script id="gtag-call-helper" strategy="afterInteractive">
          {`
            window.gtag_report_conversion = function (url) {
              var callback = function () {
                if (typeof url !== 'undefined') {
                  window.location = url;
                }
              };
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                  'send_to': 'AW-18042176502/NB1pCOvt1ZwcEPaHl5tD',
                  'event_callback': callback
                });
              } else {
                callback();
              }
              return false;
            };
          `}
        </Script>

        {/* --- Automatikus tel: link figyelés --- */}
        <Script id="tel-auto-conversion" strategy="afterInteractive">
          {`
            (function () {
              function findAnchor(el) {
                while (el && el !== document.body) {
                  if (el.tagName === 'A') return el;
                  el = el.parentElement;
                }
                return null;
              }
              document.addEventListener('click', function (e) {
                var t = e.target;
                var a = t ? findAnchor(t) : null;
                if (!a) return;

                var href = (a.getAttribute('href') || '').trim();
                if (/^tel:/i.test(href)) {
                  try {
                    if (typeof window.gtag_report_conversion === 'function') {
                      window.gtag_report_conversion();
                    } else if (typeof window.gtag === 'function') {
                      window.gtag('event', 'conversion', {
                        'send_to': 'AW-18042176502/NB1pCOvt1ZwcEPaHl5tD'
                      });
                    }
                  } catch (err) {}
                }
              }, true);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}