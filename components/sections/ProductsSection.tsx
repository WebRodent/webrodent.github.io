'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '../../utils/animations'
import Image from 'next/image'

interface Product {
  title: string
  description: string
  listItems: string[]
  gradientFrom: string
  gradientTo: string
  icon: string
  addedClass?: string
}

const products: Product[] = [
  {
    title: 'ARO - Aksjonærregisteroppgaven',
    description: 'Automatiser og effektiviser innrapportering av Aksjonærregisteroppgaven med vår egenutviklede løsning.',
    listItems: ['Automatisk prosessering', 'Tidsbesparende', 'Kvalitetssikret'],
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-cyan-400',
    icon: "./assets/aro_colored.png"
  },
  {
    title: 'Skreddersydde Nettsider',
    description: 'Moderne og brukervennlige nettsider tilpasset din bedrifts behov og målgruppe.',
    listItems: ['Responsivt Design', 'SEO-Optimalisert', 'Skalerbare Løsninger'],
    gradientFrom: 'from-cyan-400',
    gradientTo: 'to-fuchsia-500',
    icon: "./assets/icon/website.svg",
    addedClass: "invert"
  },
  {
    title: 'Konsulenttjenester',
    description: 'Strategisk rådgivning og teknisk ekspertise for din digitale transformasjon.',
    listItems: ['Digital Strategi', 'Teknisk Rådgivning', 'Prosjektledelse'],
    gradientFrom: 'from-fuchsia-500',
    gradientTo: 'to-purple-500',
    icon: "./assets/consult.svg",
    addedClass: "invert"
  }
]

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group relative bg-navy-800/30 p-8 md:p-10 rounded-2xl hover:bg-navy-800/40 transition-colors duration-200 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/80 will-change-transform"
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-200"
        style={{
          backgroundImage: `linear-gradient(to right, ${product.gradientFrom.replace('from-', '')}, ${product.gradientTo.replace('to-', '')})`,
        }}
      />

      {/* Icon container */}
      <div className="relative mb-8 transform group-hover:scale-105 transition-transform duration-200 will-change-transform">
        <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${product.gradientFrom} ${product.gradientTo} p-0.5`}>
          <div className="w-full h-full bg-navy-900/90 rounded-[10px] flex items-center justify-center group-hover:bg-navy-900/70 transition-colors duration-200">
            <Image
              src={product.icon}
              alt={product.title}
              width={32}
              height={32}
              className={`w-8 h-8 transform transition-transform duration-200 ${product.addedClass || ''}`}
            />
          </div>
        </div>
        <div className="absolute -inset-4 bg-gradient-to-r opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-200"
          style={{
            backgroundImage: `linear-gradient(to right, ${product.gradientFrom.replace('from-', '')}, ${product.gradientTo.replace('to-', '')})`
          }}
        />
      </div>

      {/* Content */}
      <motion.h3 
        className="text-2xl font-bold mb-4 transition-shadow duration-200 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        style={{
          background: 'transparent',
          color: product.gradientFrom.replace('from-', '')
        }}
      >
        {product.title}
      </motion.h3>
      <p className="text-gray-300/90 text-lg mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-200">{product.description}</p>
      
      {/* List items */}
      <ul className="space-y-4">
        {product.listItems.map((item, index) => (
          <motion.li 
            key={index} 
            className="flex items-center text-lg group/item"
            variants={{
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 }
            }}
            transition={{ delay: index * 0.1 }}
          >
            <span className={`flex items-center justify-center w-6 h-6 rounded-full mr-3 bg-gradient-to-r ${product.gradientFrom} ${product.gradientTo} group-hover/item:scale-110 group-hover/item:shadow-lg group-hover/item:shadow-purple-500/20 transition-all duration-300`}>
              <svg className="w-4 h-4 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
            </span>
            <span className="group-hover/item:text-gray-200 transition-colors duration-300">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function ProductsSection() {
  return (
    <section id="produkter" className="relative py-32 px-4 md:px-8 lg:px-16 text-white overflow-hidden" suppressHydrationWarning>

      <div className="relative w-full max-w-[1400px] mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="space-y-24"
        >
          <div className="text-center space-y-6">
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 [text-shadow:_0_0_30px_rgb(168_85_247_/_0.4),_0_0_60px_rgb(168_85_247_/_0.2),_0_0_100px_rgb(168_85_247_/_0.1)]"
            >
              Våre Produkter
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto font-light"
            >
              Skreddersydde løsninger for din bedrift
            </motion.p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 lg:gap-12 relative"
            variants={staggerChildren}
          >
            {/* Grid Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/20 to-transparent backdrop-blur-3xl rounded-3xl -m-6 p-6" />
            
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 