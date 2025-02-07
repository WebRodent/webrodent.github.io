'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const ratMessages = [
  "Trenger du en nettside?",
  "La oss bygge noe kult sammen!",
  "Skal vi ta en prat?",
  "Vi kan hjelpe deg med IT!",
  "🧀 Ost er godt, kode er bedre!",
  "Psst... vil du se noe kult?",
  "En liten mus med store ideer!",
  "Kode-rotta på vakt! 🐭",
  "404: Ost ikke funnet",
  "while(sleeping === false) { code(); }",
  // Add more messages as needed
]

export default function RatMascot() {
  const [showBubble, setShowBubble] = useState(false)
  const [message, setMessage] = useState(ratMessages[0])

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * ratMessages.length)
    setMessage(ratMessages[randomIndex])
  }, [showBubble])

  return (
    <motion.div
      initial={{ x: "calc(100% + 120px)" }}
      animate={{ x: "calc(100% - 20px)" }}
      whileHover={{ x: "calc(100% - 140px)" }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
      className="fixed right-0 bottom-20 z-50"
    >
      <div 
        className="cursor-pointer"
        onMouseEnter={() => setShowBubble(true)}
        onMouseLeave={() => setShowBubble(false)}
      >
        <div className="relative">
          <motion.img 
            src="./assets/rats/cutie_rat.png" 
            alt="Mascot"
            className="w-32 h-auto"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ 
                  type: "spring",
                  stiffness: 500,
                  damping: 25
                }}
                className="absolute -top-24 -left-32 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="relative">
                  <p className="text-navy-900 text-sm font-medium">{message}</p>
                  <div className="absolute -bottom-4 right-4 w-4 h-4 bg-white transform rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
} 