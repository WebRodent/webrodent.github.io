'use client'

import { useState, useEffect } from 'react'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const buffer = 80 // Header height in pixels

    const determineActiveSection = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollTop = window.scrollY

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - buffer
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight

        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
          setActiveSection(section.id === 'hjem' ? '' : section.id)
        }
      })
    }

    window.addEventListener('scroll', determineActiveSection)
    determineActiveSection() // Initial check

    return () => window.removeEventListener('scroll', determineActiveSection)
  }, [])

  return activeSection
} 