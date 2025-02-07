'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface Props {
  position: 'top' | 'middle' | 'bottom'
}

export default function BackgroundGradient({ position }: Props) {
  const gradients = {
    top: {
      first: {
        className: "absolute w-[800px] h-[800px] bg-gradient-to-r from-cyan-400/10 to-fuchsia-500/10 rounded-full blur-3xl",
        style: { top: '10%', right: '-20%' }
      },
      second: {
        className: "absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-full blur-3xl",
        style: { bottom: '-10%', left: '-10%' }
      }
    },
    middle: {
      first: {
        className: "absolute w-[800px] h-[800px] bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 rounded-full blur-3xl",
        style: { top: '20%', left: '-20%' }
      },
      second: {
        className: "absolute w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 to-fuchsia-500/10 rounded-full blur-3xl",
        style: { bottom: '-5%', right: '10%' }
      }
    },
    bottom: {
      first: {
        className: "absolute w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-full blur-3xl",
        style: { top: '15%', right: '-15%' }
      },
      second: {
        className: "absolute w-[600px] h-[600px] bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 rounded-full blur-3xl",
        style: { bottom: '10%', left: '-15%' }
      }
    }
  }

  const { first, second } = gradients[position]

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div {...first} />
        <div {...second} />
      </motion.div>
    </div>
  )
} 