import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import BackgroundEffect from '../components/BackgroundEffect'
import SectionBackground from '../components/SectionBackground'
import Socials from '../components/Socials'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Webrodent',
  description: 'Din Digitale Fremtid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <head>
        <Socials />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <BackgroundEffect />
        <SectionBackground />
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 