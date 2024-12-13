import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({
  children
}: LayoutProps) {
  return (
    <html>
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
