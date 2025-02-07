'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection'
import React from 'react'
const navItems = [
  { name: 'Hjem', href: '#hjem' },
  { name: 'Produkter', href: '#produkter' },
  { name: 'Kunder', href: '#kunder' },
  { name: 'Om Oss', href: '#om-oss' },
  { name: 'Kontakt', href: '#kontakt' }
]

export default function Header() {
  const activeSection = useActiveSection()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-sm">
      <nav className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 h-20 flex items-center justify-between">
        <Link href="/" className="relative flex items-center space-x-4">
          <div className="relative w-14 h-14">
            <Image
              src="./assets/wr_logo.png"
              alt="Webrodent Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-64 h-12">
            <Image
              src="./assets/webrodent_logo.svg"
              alt="Webrodent Text"
              fill
              className="object-contain invert"
            />
          </div>
        </Link>

        <ul className="flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`relative py-2 group ${
                  activeSection === item.href.slice(1) ? 'text-fuchsia-500' : 'text-gray-300'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500"
                  />
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
} 