'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import React from 'react'

const StaticBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-[#070314]" />
    <div className="absolute w-[1200px] h-[1200px] rounded-full bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 blur-[120px] -right-[400px] -top-[300px] opacity-30" />
    <div className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-[100px] -left-[300px] top-[40%] opacity-30" />
    <div className="absolute w-[900px] h-[900px] rounded-full bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 blur-[80px] -right-[200px] top-[80%] opacity-30" />
    <div className="absolute inset-0">
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
    </div>
    <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-soft-light" />
  </div>
)

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-[#070314]" />
      
      <motion.div 
        style={{ y: y1, scale: scale1, opacity }}
        className="absolute w-[1200px] h-[1200px] rounded-full bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 blur-[120px] -right-[400px] -top-[300px]"
      />
      <motion.div 
        style={{ y: y2, scale: scale2, opacity }}
        className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-[100px] -left-[300px] top-[40%]"
      />
      <motion.div 
        style={{ y: y3, scale: scale1, opacity }}
        className="absolute w-[900px] h-[900px] rounded-full bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 blur-[80px] -right-[200px] top-[80%]"
      />

      <div className="absolute inset-0">
        <motion.div 
          style={{ opacity }}
          className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent"
        />
        <motion.div 
          style={{ opacity }}
          className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"
        />
      </div>

      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-soft-light" />
    </div>
  )
}

export default function SectionBackground() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? <AnimatedBackground /> : <StaticBackground />
} 