'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '../../utils/animations'

export default function HeroSection() {
  return (
    <section id="hjem" className="relative min-h-screen flex items-center text-white" suppressHydrationWarning>
      {/* Background Image Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 to-[#070314]/80" />
        <Image
          src="./assets/rats/rat_purple_splash.png"
          alt="Background"
          fill
          className="object-cover opacity-20 object-right-bottom"
          priority
        />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 pt-20 pb-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-20">
          <motion.div 
            className="md:w-2/3 space-y-12 md:-mt-20"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight [text-shadow:_0_0_30px_rgb(168_85_247_/_0.4),_0_0_60px_rgb(168_85_247_/_0.2),_0_0_100px_rgb(168_85_247_/_0.1)]"
              variants={fadeInUp}
            >
              Din{' '}
              <span className="text-cyan-400">Digitale</span>{' '}
              <span className="text-fuchsia-500">Fremtid</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-3xl text-gray-300 max-w-2xl"
              variants={fadeInUp}
            >
              Vi leverer moderne løsninger for din bedrift
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-6"
              variants={fadeInUp}
            >
              <Link 
                href="#produkter" 
                className="px-10 py-5 bg-cyan-400 text-navy-900 rounded-xl font-medium hover:bg-cyan-300 transition-colors text-lg"
              >
                Utforsk våre tjenester
              </Link>
              <Link 
                href="#kontakt"
                className="px-10 py-5 border-2 border-fuchsia-500 text-white rounded-xl font-medium hover:bg-fuchsia-500/10 transition-colors text-lg"
              >
                Ta kontakt
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 