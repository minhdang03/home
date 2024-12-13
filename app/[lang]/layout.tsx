import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
  params: { lang: string }
}

export default function Layout({
  children,
  params: { lang }
}: LayoutProps) {
  return (
    <html lang={lang}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  )
}
