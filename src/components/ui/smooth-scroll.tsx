'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // Increased duration to make effect more noticeable
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduced multiplier for smoother effect
      touchMultiplier: 1.5,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}