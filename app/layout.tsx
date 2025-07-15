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
        <title>Web3 Donations</title>
        <meta name="description" content="Donate using cryptocurrency or card payments" />
      </head>
      <body>
        <ThirdwebProvider>
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  )
}