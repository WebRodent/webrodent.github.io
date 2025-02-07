'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '../../utils/animations'

interface Customer {
  name: string
  logo: string
  mission: string
  website: string
}

const customers: Customer[] = [
  {
    name: "Pigeon Vitality",
    logo: "./assets/pgv.png",
    mission: "Kartlegging av IT-infrastruktur og digital strategi",
    website: "https://www.pigeonvitality.com/"
  },
  {
    name: "Aicono",
    logo: "./assets/aicono_negativ.png",
    mission: "IT tjeneste leverandør",
    website: "https://www.aicono.no/"
  },
  {
    name: "One Accounting",
    logo: "./assets/oneaccounting-logo.png",
    mission: "IT tjeneste leverandør",
    website: "https://www.oneaccounting.no/"
  }
]

function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group bg-navy-800/30 p-8 md:p-10 rounded-2xl hover:bg-navy-800/50 transition-all duration-300 backdrop-blur-sm"
    >
      <a 
        href={customer.website} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative h-24 mb-8">
          <Image
            src={customer.logo}
            alt={customer.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform"
          />
        </div>
        <h3 className="text-2xl font-bold text-center mb-4">{customer.name}</h3>
        <p className="text-gray-300 text-lg text-center mb-6">{customer.mission}</p>
        <motion.div 
          className="flex items-center justify-center text-fuchsia-500 group-hover:text-fuchsia-400"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="text-lg mr-3">Besøk nettside</span>
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </motion.div>
      </a>
    </motion.div>
  )
}

export default function CustomersSection() {
  return (
    <section id="kunder" className="relative py-32 px-4 md:px-8 lg:px-16 text-white">
      <div className="relative w-full max-w-[1400px] mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="space-y-20"
        >
          <div className="text-center space-y-6">
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 [text-shadow:_0_0_30px_rgb(168_85_247_/_0.4),_0_0_60px_rgb(168_85_247_/_0.2),_0_0_100px_rgb(168_85_247_/_0.1)]"
            >
              Våre Kunder
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto font-light"
            >
              Vi er stolte av å levere for våre kunder
            </motion.p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
            variants={staggerChildren}
          >
            {customers.map((customer, index) => (
              <CustomerCard key={index} customer={customer} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 