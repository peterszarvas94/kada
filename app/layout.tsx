import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mock Webshop',
  description: 'This is my solution to the Kada Solutuions hiring task'
}

const generalSans = localFont({
  src: '../font/GeneralSans-Variable.ttf',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={generalSans.className}>{children}</body>
    </html>
  )
}
