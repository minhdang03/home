import { ReactNode } from 'react'
import Script from 'next/script'

export const metadata = {
  title: 'MinhDangLu Services',
  description: 'Netflix, Tools, Blog, Shop and more services by MinhDangLu',
  openGraph: {
    title: 'MinhDangLu Services',
    description: 'Services by MinhDangLu',
    url: 'https://minhdanglu.com',
    siteName: 'MinhDangLu Services',
    images: [
      {
        url: 'https://minhdanglu.com/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}