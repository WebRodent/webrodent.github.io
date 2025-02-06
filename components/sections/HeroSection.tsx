'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, slideIn, staggerChildren } from '@/utils/animations'

export default function HeroSection() {
  return (
    <section id="hjem" className="relative min-h-screen flex items-center text-white">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-cyan-400/10 to-fuchsia-500/10 rounded-full blur-3xl top-1/4 -right-96" />
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-full blur-3xl -bottom-32 -left-32" />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-20">
          <motion.div 
            className="md:w-1/2 space-y-10"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold leading-tight"
              variants={fadeInUp}
            >
              Din{' '}
              <span className="text-cyan-400">Digitale</span>{' '}
              <span className="text-fuchsia-500">Fremtid</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-3xl text-gray-300 max-w-2xl"
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

          <motion.div 
            className="md:w-1/2"
            variants={slideIn('right', 0.3)}
            initial="initial"
            animate="animate"
          >
            <div className="relative w-full aspect-square max-w-[700px] mx-auto">
              <Image
                src="/assets/rats/rat_purple_splash.png"
                alt="Digital Transformation"
                fill
                className="object-contain scale-125"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 