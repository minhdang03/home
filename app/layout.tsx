import { ReactNode } from 'react'
import Script from 'next/script'

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html>
<head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
    
    <title>MinhDangLu Services - Netflix, Tools, Blog, Shop</title>
    <meta name="description" content="Get Netflix login codes, natural stones, useful tools and latest blog updates from MinhDangLu Services" />
    
    {/* Open Graph */}
    <meta property="og:url" content="https://minhdanglu.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="MinhDangLu Services - Netflix, Tools, Blog, Shop" />
    <meta property="og:description" content="Get Netflix login codes, natural stones, useful tools and latest blog updates from MinhDangLu Services" />
    <meta property="og:image" content="https://minhdanglu.com/og.jpg" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="MinhDangLu Services" />
    <meta name="twitter:description" content="Get Netflix login codes, natural stones, useful tools and latest blog updates" />
    <meta name="twitter:image" content="https://minhdanglu.com/og.jpg" />
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