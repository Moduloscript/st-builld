"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface ImageItem {
  src: string
  alt: string
}

interface AnimatedImageGridProps {
  images: ImageItem[]
  className?: string
}

export function AnimatedImageGrid({ images, className = '' }: AnimatedImageGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform values for different effects
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  // Stagger delays for each image
  const delays = [0, 0.1, 0.2]

  return (
    <motion.div
      ref={containerRef}
      style={{
        scale,
        opacity
      }}
      className={`w-[75%] grid grid-cols-[1.5fr,1fr,1fr] gap-4 h-[300px] ${className}`}
    >
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, y: 50 }}
          style={{ y }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              delay: delays[index],
              ease: [0.33, 1, 0.68, 1]
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative h-full overflow-hidden rounded-xl group"
        >
          <motion.div
            className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors duration-300"
          />
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            className="relative w-full h-full"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              quality={95}
              priority
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
