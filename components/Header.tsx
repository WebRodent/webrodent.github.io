'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
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

  return (
    <header className="header-fixed fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-sm border-b border-gray-800/50">
      <nav className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`relative py-2 group ${
                  activeSection === (item.href === '#hjem' ? '' : item.href.slice(1))
                    ? 'text-fuchsia-500'
                    : 'text-gray-300'
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
          className="mobile-menu-button md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
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
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        className={`
          fixed inset-x-0 top-[4rem] md:top-[5rem] bottom-0
          bg-[#070314] md:hidden
          ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        initial={false}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="min-h-full w-full flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-md mx-auto relative">
            {/* Menu Background with Gradient */}
            <div className="absolute inset-0 -m-6 rounded-3xl bg-navy-900/80 backdrop-blur-xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-fuchsia-500/5 via-cyan-400/5 to-purple-500/5" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>

            {/* Menu Items */}
            <ul className="relative space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`
                      block py-4 px-8 rounded-xl transition-all
                      ${activeSection === (item.href === '#hjem' ? '' : item.href.slice(1))
                        ? 'bg-navy-900/50 text-fuchsia-500 text-2xl font-bold shadow-[0_0_20px_rgba(217,70,219,0.15)] border border-fuchsia-500/20'
                        : 'text-gray-200 text-xl hover:text-white hover:bg-navy-900/30'
                      }
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </header>
  )
} 