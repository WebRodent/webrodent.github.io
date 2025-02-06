'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, slideIn, staggerChildren } from '@/utils/animations'

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
      className="bg-navy-800/50 p-8 rounded-2xl hover:bg-navy-800 transition-all duration-300 backdrop-blur-sm"
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
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
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-full blur-3xl top-1/4 -right-96" />
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 to-fuchsia-500/10 rounded-full blur-3xl -bottom-32 -left-32" />
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
                className="text-5xl md:text-6xl font-bold"
              >
                Om Oss
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-300"
              >
                Erfaring møter innovasjon
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Vi er skjulte eksperter som leverer kvalitet i kulissene. Med et erfarent utviklingsmiljø 
                leverer vi sømløse digitale løsninger som hjelper bedrifter å vokse og lykkes i den 
                digitale verden.
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
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-10" />
              <Image
                src="/assets/hero2.gif"
                alt="About Webrodent"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full blur-2xl opacity-20" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-2xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 