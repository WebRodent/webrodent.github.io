'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import React from 'react'

const StaticBackground = () => (
  <div className="fixed inset-0 overflow-hidden -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-[#070314]" />
    <div className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-3xl -left-[400px] -top-[200px] opacity-30" />
    <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl -right-[300px] top-[30%] opacity-30" />
    <div className="absolute inset-0">
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500/5 via-transparent to-transparent" />
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
    </div>
    <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light" />
  </div>
)

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [360, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-[#070314]" />
      <motion.div 
        style={{ y: y1, rotate: rotate1, opacity }}
        className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-3xl -left-[400px] -top-[200px]"
      />
      <motion.div 
        style={{ y: y2, rotate: rotate2, opacity }}
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl -right-[300px] top-[30%]"
      />
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500/5 via-transparent to-transparent" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
      </div>
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light" />
    </div>
  )
}

export default function BackgroundEffect() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? <AnimatedBackground /> : <StaticBackground />
} 