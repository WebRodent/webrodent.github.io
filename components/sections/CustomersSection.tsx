'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

const customers = [
  {
    name: 'Pigeon Vitality',
    logo: './assets/customers/pigeon_vitality.png',
    description: 'Kartlegging av IT-infrastruktur og digital strategi',
    link: 'https://pigeonvitality.com'
  },
  {
    name: 'Aicono',
    logo: './assets/customers/aicono.png',
    description: 'IT tjeneste leverandør',
    link: 'https://aicono.no'
  },
  {
    name: 'One Accounting',
    logo: './assets/customers/one_accounting.png',
    description: 'IT tjeneste leverandør',
    link: 'https://oneaccounting.no'
  }
]

function CustomerCard({ customer }: { customer: typeof customers[0] }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative group"
    >
      <div className="relative p-8 rounded-2xl bg-navy-900/80 backdrop-blur-sm border border-gray-800/50 hover:border-fuchsia-500/20 transition-colors duration-300">
        <a 
          href={customer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative h-20 flex items-center justify-center">
            {/* Pulsating glow effect */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/35 blur-2xl animate-glow-pulse" />
            
            <Image
              src={customer.logo}
              alt={customer.name}
              width={200}
              height={80}
              className="object-contain max-h-20 relative"
              priority
            />
          </div>
          <p className="text-center mt-4 text-sm text-gray-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:[text-shadow:_0_0_30px_rgb(168_85_247_/_0.4),_0_0_60px_rgb(168_85_247_/_0.2),_0_0_100px_rgb(168_85_247_/_0.1)]">
            {customer.description}
          </p>
        </a>
      </div>
    </motion.div>
  )
}

export default function CustomersSection() {
  return (
    <section id="kunder" className="relative py-32 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="space-y-24"
        >
          <motion.div 
            variants={fadeInUp}
            className="text-center space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 [text-shadow:_0_0_30px_rgb(168_85_247_/_0.4),_0_0_60px_rgb(168_85_247_/_0.2),_0_0_100px_rgb(168_85_247_/_0.1)]">
              Våre Kunder
            </h2>
            <p className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto font-light">
              Vi er stolte av å levere for våre kunder
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {customers.map((customer) => (
              <CustomerCard key={customer.name} customer={customer} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 