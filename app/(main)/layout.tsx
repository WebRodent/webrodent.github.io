import React from 'react'
import '../globals.css'
import Header from '../../components/Header'
import BackgroundEffect from '../../components/BackgroundEffect'
import SectionBackground from '../../components/SectionBackground'
import Socials from '../../components/Socials'

export const metadata = {
  title: 'Webrodent',
  description: 'Din Digitale Fremtid',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Socials />
      <BackgroundEffect />
      <SectionBackground />
      <Header />
      <main>
        {children}
      </main>
    </>
  )
} 
