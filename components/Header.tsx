'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed w-full bg-navy-900/95 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/Rodent_Web_logo.png"
              alt="Webrodent"
              width={40}
              height={40}
            />
            <span className="text-white text-xl font-bold">WEBRODENT</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#hjem" className="text-white hover:text-cyan-400 transition">
              Hjem
            </Link>
            <Link href="/#produkter" className="text-white hover:text-cyan-400 transition">
              Produkter
            </Link>
            <Link href="/#kunder" className="text-white hover:text-cyan-400 transition">
              Kunder
            </Link>
            <Link href="/#om-oss" className="text-white hover:text-cyan-400 transition">
              Om Oss
            </Link>
            <Link href="/#kontakt" className="text-fuchsia-500 hover:text-fuchsia-400 transition">
              Kontakt
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 