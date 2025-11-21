'use client'

import './globals.css'
import { ThirdwebProvider } from 'thirdweb/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Holiday Crypto Donations</title>
        <meta name="description" content="Spread joy this Christmas season with crypto donations. Support our cause using cryptocurrency or card payments." />
      </head>
      <body>
        <ThirdwebProvider>
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  )
}