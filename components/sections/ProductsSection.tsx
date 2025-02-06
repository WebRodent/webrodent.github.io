'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '@/utils/animations'

interface Product {
  title: string
  description: string
  listItems: string[]
  gradientFrom: string
  gradientTo: string
}

const products: Product[] = [
  {
    title: 'ARO - Aksjonærregisteroppgaven',
    description: 'Automatiser og effektiviser innrapportering av Aksjonærregisteroppgaven med vår egenutviklede løsning.',
    listItems: ['Automatisk prosessering', 'Tidsbesparende', 'Kvalitetssikret'],
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-cyan-400'
  },
  {
    title: 'Skreddersydde Nettsider',
    description: 'Moderne og brukervennlige nettsider tilpasset din bedrifts behov og målgruppe.',
    listItems: ['Responsivt Design', 'SEO-Optimalisert', 'Skalerbare Løsninger'],
    gradientFrom: 'from-cyan-400',
    gradientTo: 'to-fuchsia-500'
  },
  {
    title: 'Konsulenttjenester',
    description: 'Strategisk rådgivning og teknisk ekspertise for din digitale transformasjon.',
    listItems: ['Digital Strategi', 'Teknisk Rådgivning', 'Prosjektledelse'],
    gradientFrom: 'from-fuchsia-500',
    gradientTo: 'to-purple-500'
  }
]

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group bg-navy-800/50 p-8 md:p-10 rounded-2xl hover:bg-navy-800 transition-all duration-300 backdrop-blur-sm"
    >
      <div className={`w-20 h-20 bg-gradient-to-r ${product.gradientFrom} ${product.gradientTo} rounded-xl mb-6 group-hover:scale-110 transition-transform`}></div>
      <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
      <p className="text-gray-300 text-lg mb-8 leading-relaxed">{product.description}</p>
      <ul className="space-y-4">
        {product.listItems.map((item, index) => (
          <motion.li 
            key={index} 
            className="flex items-center text-lg"
            variants={{
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 }
            }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="text-cyan-400 mr-3 text-xl">✓</span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function ProductsSection() {
  return (
    <section id="produkter" className="relative py-32 px-4 md:px-8 lg:px-16 text-white">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-full blur-3xl top-1/4 -left-96" />
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 to-fuchsia-500/10 rounded-full blur-3xl -bottom-32 right-32" />
      </div>

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
              className="text-5xl md:text-6xl font-bold"
            >
              Våre Produkter
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Skreddersydde løsninger for din bedrift
            </motion.p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
            variants={staggerChildren}
          >
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 