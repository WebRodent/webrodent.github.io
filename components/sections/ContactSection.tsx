'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '../../utils/animations'

interface ContactLink {
  icon: React.ReactNode
  text: string
  href: string
}

const contactLinks: ContactLink[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: "post@webrodent.com",
    href: "mailto:post@webrodent.com"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852v2.743c0 .267.18.578.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    text: "GitHub",
    href: "https://github.com/webrodent"
  }
]

function ContactCard({ link }: { link: ContactLink }) {
  return (
    <motion.a 
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex items-center p-6 bg-navy-800/50 rounded-2xl hover:bg-navy-800 transition-all duration-300 backdrop-blur-sm"
      variants={fadeInUp}
      whileHover={{ x: 10 }}
    >
      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
        {link.icon}
      </div>
      <span className="text-xl group-hover:text-fuchsia-400 transition-colors">{link.text}</span>
    </motion.a>
  )
}

export default function ContactSection() {
  return (
    <section id="kontakt" className="relative py-32 px-4 md:px-8 lg:px-16 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 to-[#070314]/80" />
        <Image
          src="./assets/rats/rat_purple_wave_transp.png"
          alt="Background"
          fill
          className="object-cover opacity-20 object-right"
          priority
        />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.h2 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 [text-shadow:_0_0_30px_rgb(168_85_247_/_0.4),_0_0_60px_rgb(168_85_247_/_0.2),_0_0_100px_rgb(168_85_247_/_0.1)]"
              >
                Kontakt Oss
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-300"
              >
                Ta kontakt for en uforpliktende prat
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Vi er her for å hjelpe deg med å ta din bedrift til neste nivå. 
                Send oss en melding, så tar vi kontakt!
              </motion.p>
            </div>

            <motion.div 
              className="space-y-6"
              variants={staggerChildren}
            >
              {contactLinks.map((link, index) => (
                <ContactCard key={index} link={link} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 