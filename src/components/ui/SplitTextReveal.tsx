"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SplitTextRevealProps {
  text: string
  className?: string
  threshold?: number
}

export function SplitTextReveal({ 
  text, 
  className = '',
  threshold = 0.2 
}: SplitTextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: threshold,
    once: false // Set to true if you want the animation to only play once
  })

  const words = text.split(' ')

  // Animation variants for the container
  const containerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04,
      },
    },
  }

  // Animation variants for each word
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],  // Custom easing
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`overflow-hidden ${className}`}
    >
      <div className="flex flex-wrap">
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            variants={wordVariants}
            className="relative inline-block mr-[0.25em] last:mr-0"
            style={{ 
              transformOrigin: "50% 100%",
              perspective: "1000px",
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
