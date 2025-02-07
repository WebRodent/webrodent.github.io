'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection'
import React, { useState, useEffect } from 'react'
const navItems = [
  { name: 'Hjem', href: '#hjem' },
  { name: 'Produkter', href: '#produkter' },
  { name: 'Kunder', href: '#kunder' },
  { name: 'Om Oss', href: '#om-oss' },
  { name: 'Kontakt', href: '#kontakt' }
]

export default function Header() {
  const activeSection = useActiveSection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Debug log
  console.log('Active Section:', activeSection)

  // Close mobile menu when section changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [activeSection])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-sm border-b border-gray-800/50">
      <nav className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="relative flex items-center space-x-4">
          <div className="relative w-10 h-10 md:w-14 md:h-14">
            <Image
              src="./assets/wr_logo.png"
              alt="Webrodent Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-40 h-8 md:w-64 md:h-12">
            <Image
              src="./assets/webrodent_logo.svg"
              alt="Webrodent Text"
              fill
              className="object-contain invert"
            />
          </div>
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`relative py-2 group ${
                  ((item.href === '#hjem' && activeSection === '') || 
                   (item.href === '#produkter' && activeSection === 'produkter') ||
                   (item.href === '#kunder' && activeSection === 'kunder') ||
                   (item.href === '#om-oss' && activeSection === 'om-oss') ||
                   (item.href === '#kontakt' && activeSection === 'kontakt'))
                    ? 'text-fuchsia-500' : 'text-gray-300'
                }`}
              >
                {item.name}
                {activeSection === (item.href === '#hjem' ? '' : item.href.slice(1)) && (
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Mobile Menu Overlay */}
        <motion.div
          className={`fixed inset-x-0 bottom-0 top-16 bg-[#070314] md:hidden ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
          animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
          initial={false}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="h-full w-full flex flex-col items-center justify-start pt-12 p-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: mobileMenuOpen ? 0 : -20, opacity: mobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav>
              {/* Shared Background Container */}
              <div className="relative">
                <div 
                  className="absolute inset-0 -m-6 rounded-3xl bg-navy-900/80 backdrop-blur-xl before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-b before:from-fuchsia-500/10 before:via-cyan-400/5 before:to-purple-500/10 after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-r after:from-transparent after:via-white/5 after:to-transparent"
                />
                <ul className="flex flex-col items-center space-y-8 relative">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block py-3 px-8 rounded-lg transition-all ${
                          (item.href === '#hjem' && activeSection === '') || 
                          (item.href === '#produkter' && activeSection === 'produkter') ||
                          (item.href === '#kunder' && activeSection === 'kunder') ||
                          (item.href === '#om-oss' && activeSection === 'om-oss') ||
                          (item.href === '#kontakt' && activeSection === 'kontakt')
                          ? 'text-fuchsia-500 text-2xl font-bold bg-navy-900/50 hover:bg-navy-900/70 shadow-[0_0_15px_rgba(217,70,219,0.15)] border border-fuchsia-500/20'
                          : 'text-gray-200 text-2xl hover:text-white bg-navy-900/30 hover:bg-navy-900/50 hover:shadow-[0_0_15px_rgba(217,70,219,0.1)] border border-transparent hover:border-gray-700/50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </motion.div>
        </motion.div>
      </nav>
    </header>
  )
} 