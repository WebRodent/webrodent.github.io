'use client'

import { useState, useEffect } from 'react'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    // Function to determine active section
    const determineActiveSection = () => {
      const sections = document.querySelectorAll('section[id]')
      const viewportHeight = window.innerHeight
      const scrollTop = window.scrollY
      const buffer = 80 // Header height

      // Check each section's position
      let currentSection = ''
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + scrollTop
        const sectionMiddle = sectionTop + (rect.height / 2)
        
        if (scrollTop + buffer <= sectionMiddle && 
            sectionMiddle <= scrollTop + viewportHeight) {
          currentSection = section.id === 'hjem' ? '' : section.id
        }
      })

      setActiveSection(currentSection)
    }

    // Initial check
    determineActiveSection()

    // Set up scroll listener
    window.addEventListener('scroll', determineActiveSection)
    window.addEventListener('resize', determineActiveSection)

    // Optional: Also keep the IntersectionObserver for smoother updates
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

    // Cleanup
    return () => {
      window.removeEventListener('scroll', determineActiveSection)
      window.removeEventListener('resize', determineActiveSection)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return activeSection
} 