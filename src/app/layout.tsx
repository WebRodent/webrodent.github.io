import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebRodent Nest',
  description: 'WebRodent Nest is your chosen partner for generative AI adoption.',
  icons: [
    { rel: "icon", url: '/favicon-32x32.png' },
    { rel: "icon", url: '/favicon-16x16.png' },
    { rel: "apple-touch-icon", url: '/apple-touch-icon.png' },
  ],
  // Add more metadata as needed
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}