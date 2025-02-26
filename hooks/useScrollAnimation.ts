import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function useScrollAnimation(threshold = 0.1) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold })

  useEffect(() => {
    if (inView) {
      controls.start('animate')
    }
  }, [controls, inView])

  return { ref, controls, inView }
} 