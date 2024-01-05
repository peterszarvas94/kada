import type { Metadata } from 'next'
import './globals.css'
import { generalSans } from '@/font'

export const metadata: Metadata = {
  title: 'Our products - The Cool Shop',
  description: 'Very cool shop indeed',
}

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
