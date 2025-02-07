'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, slideIn, staggerChildren } from '../../utils/animations'

interface FeatureCard {
  title: string
  description: string
  icon: ReactNode
  gradient: string
}

const features: FeatureCard[] = [
  {
    title: "Innovasjon",
    description: "Vi er alltid i forkant av teknologiske trender",
    gradient: "from-purple-500 to-cyan-400",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Kvalitet",
    description: "Høy kvalitet i alle ledd av utviklingen",
    gradient: "from-cyan-400 to-fuchsia-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]

function FeatureCard({ feature }: { feature: FeatureCard }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-navy-800/30 p-8 md:p-10 rounded-2xl hover:bg-navy-800/50 transition-all duration-300 backdrop-blur-sm"
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 hover:scale-110 transition-transform`}>
        {feature.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
      <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export default function AboutSection() {
  return (
    <section id="om-oss" className="relative py-32 px-4 md:px-8 lg:px-16 text-white">
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
                Om Oss
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto font-light"
              >
                Innovasjon i kulissene
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Vi er innovative og jobber tett sammen med våre kunder for å levere tjenester som passer best etter deres behov. Vi tror på løsninger og tjenester som ikke bare effektiviserer, men som styrker brandingen til våre kunder
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-8"
              variants={staggerChildren}
            >
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideIn('right', 0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#070314_80%)] z-10" />
              <Image
                src="./assets/hero4.gif"
                alt="About Webrodent"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 