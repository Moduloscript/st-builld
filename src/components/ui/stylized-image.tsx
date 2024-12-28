'use client'

import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

const SHAPES = {
  MODERN: 0,
  WAVE: 1,
  ORGANIC: 2,
} as const

type ShapeType = typeof SHAPES[keyof typeof SHAPES]

const shapes = [
  {
    width: 655,
    height: 680,
    path: `M0,0 
           L655,0 
           L655,580 
           C655,580 555,680 455,680 
           C355,680 0,680 0,680 
           L0,100 
           C0,100 50,80 50,50 
           C50,20 0,0 0,0 Z`,
  },
  {
    width: 655,
    height: 680,
    path: `M0,0 
           L655,0 
           L655,680 
           C655,680 525,640 455,640
           C385,640 345,680 275,680
           C205,680 165,640 95,640
           C25,640 0,680 0,680
           L0,0 Z`,
  },
  {
    width: 655,
    height: 680,
    path: `M50,0 
           C150,0 200,40 300,40
           C400,40 450,0 550,0
           L655,0 
           L655,680
           L50,680
           C150,680 200,640 300,640
           C400,640 450,680 550,680
           L0,680
           L0,0
           L50,0 Z`,
  },
]

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt' | 'width' | 'height'> & { 
  alt?: string 
}

interface StylizedImageProps extends ImagePropsWithOptionalAlt {
  shape?: ShapeType
  className?: string
  priority?: boolean
  objectFit?: 'cover' | 'contain' | 'fill'
  objectPosition?: string
}

export function StylizedImage({
  shape = SHAPES.MODERN,
  className,
  priority = false,
  alt = '',
  objectFit = 'cover',
  objectPosition = 'center',
  ...props
}: StylizedImageProps) {
  const id = useId()
  const { width, height, path } = shapes[shape]

  return (
    <div 
      className={clsx(
        'relative mx-auto',
        className
      )}
      style={{ 
        width: '100%',
        maxWidth: width,
        aspectRatio: `${width} / ${height}`,
      }}
    >
      {/* Main container with clipping */}
      <div 
        className="relative h-full w-full overflow-hidden"
        style={{
          clipPath: `url(#${id}-clip)`,
        }}
      >
        {/* Image wrapper with hover effects */}
        <div className="group relative h-full w-full transform-gpu transition duration-500 ease-in-out hover:scale-[1.02]">
          {/* Image */}
          <div className="relative h-full w-full">
            <Image
              alt={alt}
              className={clsx(
                'h-full w-full transform-gpu',
                'transition duration-500 ease-in-out',
                'group-hover:scale-105'
              )}
              style={{
                objectFit,
                objectPosition,
              }}
              fill
              sizes={`(min-width: 1024px) ${width}px, 100vw`}
              priority={priority}
              quality={90}
              {...props}
            />
          </div>

          {/* Overlay for subtle shadow effect */}
          <div 
            className="absolute inset-0 rounded-sm bg-gradient-to-br from-emerald-500/5 to-emerald-600/10"
          />
        </div>
      </div>

      {/* SVG definitions */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="absolute left-0 top-0 h-0 w-0"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={`${id}-clip`} clipPathUnits="objectBoundingBox">
            <path
              d={path}
              transform={`scale(${1 / width}, ${1 / height})`}
            />
          </clipPath>
          <linearGradient id={`${id}-gradient`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#059669" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Creative outline effects */}
      <div 
        className="pointer-events-none absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-[1.02]"
        style={{
          clipPath: `url(#${id}-clip)`,
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-sm ring-1 ring-inset ring-emerald-500/20" />
        
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-sm ring-2 ring-inset ring-gradient-to-br from-emerald-400/30 via-emerald-500/20 to-emerald-600/30 animate-gradient-x" />
        
        {/* Outer glow */}
        <div className="absolute -inset-[2px] rounded-sm bg-gradient-to-br from-emerald-400/10 via-emerald-500/5 to-emerald-600/10 blur-sm" />
        
        {/* Accent lines */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-20 w-[2px] animate-glow-y bg-gradient-to-b from-emerald-400/0 via-emerald-500/50 to-emerald-400/0" />
          <div className="absolute right-0 top-0 h-20 w-[2px] animate-glow-y bg-gradient-to-b from-emerald-400/0 via-emerald-500/50 to-emerald-400/0" 
               style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Corner accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-10 w-10 rounded-br-xl border-l-2 border-t-2 border-emerald-500/30" />
        <div className="absolute right-0 top-0 h-10 w-10 rounded-bl-xl border-r-2 border-t-2 border-emerald-500/30" />
        <div className="absolute bottom-0 left-0 h-10 w-10 rounded-tr-xl border-b-2 border-l-2 border-emerald-500/30" />
        <div className="absolute bottom-0 right-0 h-10 w-10 rounded-tl-xl border-b-2 border-r-2 border-emerald-500/30" />
      </div>
    </div>
  )
}
