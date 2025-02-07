'use client'

import { useState, useEffect } from 'react'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (intersecting.length > 0) {
          const mostVisible = intersecting[0]
          setActiveSection(mostVisible.target.id === 'hjem' ? '' : mostVisible.target.id)
        }
      },
      { 
        threshold: [0.2, 0.5, 0.8],
        rootMargin: '-80px 0px -80px 0px'
      }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return activeSection
} 