'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const testimonialData = [
  {
    content: "St Peter's Pharmacy has transformed my healthcare experience. Their professional staff and personalized service make managing my medications so much easier.",
    author: {
      name: 'Sarah Williams',
      role: 'Regular Customer',
      image: '/avatar/avatar-1.jpg',
    },
  },
  {
    content: "The pharmacists here are incredibly knowledgeable and always take time to explain my medications thoroughly. Best pharmacy service I've ever experienced!",
    author: {
      name: 'Michael Thompson',
      role: 'Patient',
      image: '/avatar/avatar-2.jpg',
    },
  },
  {
    content: "Their health education programs have been invaluable for managing my chronic condition. The team goes above and beyond regular pharmacy services.",
    author: {
      name: 'Emma Rodriguez',
      role: 'Long-term Patient',
      image: '/avatar/avatar-3.jpg',
    },
  },
  {
    content: "I appreciate how they remember my preferences and always provide thoughtful recommendations. It's like having a personal healthcare advisor.",
    author: {
      name: 'James Foster',
      role: 'Local Resident',
      image: '/avatar/avatar-5.jpg',
    },
  },
  {
    content: "The convenience of their digital prescription service combined with their caring personal touch makes this pharmacy stand out from the rest.",
    author: {
      name: 'David Chen',
      role: 'Regular Patient',
      image: '/avatar/avatar-4.jpg',
    },
  },
  {
    content: "Their commitment to community health education and preventive care shows they're not just a pharmacy, but a true healthcare partner.",
    author: {
      name: 'Lisa Martinez',
      role: 'Healthcare Professional',
      image: '/avatar/avatar-5.jpg',
    },
  },
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: typeof testimonialData[0]
  className?: string
}) {
  return (
    <div
      className={cn(
        'w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-emerald-500/10 px-8 py-6 md:w-[450px] bg-gradient-to-b from-emerald-800/95 to-emerald-900/95 backdrop-blur-[2px] transition-all duration-300',
        className
      )}
    >
      <QuoteIcon className="absolute left-6 top-6 fill-emerald-100/10" />
      <blockquote>
        <div
          aria-hidden="true"
          className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
        ></div>
        <span className="relative z-20 text-base leading-[1.6] text-gray-100 font-normal">
          {testimonial.content}
        </span>
        <div className="relative z-20 mt-6 flex items-center gap-4">
          <div className="overflow-hidden rounded-full bg-emerald-50 ring-2 ring-emerald-100/50">
            <Image
              className="h-12 w-12 object-cover"
              src={testimonial.author.image}
              alt={testimonial.author.name}
              width={48}
              height={48}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-100">
              {testimonial.author.name}
            </span>
            <span className="text-sm text-emerald-300">
              {testimonial.author.role}
            </span>
          </div>
        </div>
      </blockquote>
    </div>
  )
}

function InfiniteMovingCards({
  items,
  direction = 'up',
  speed = 'fast',
  className,
}: {
  items: typeof testimonialData
  direction?: 'up' | 'down'
  speed?: 'fast' | 'normal' | 'slow'
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const duration = speed === 'fast' ? 20 : speed === 'normal' ? 30 : 40

    container.style.setProperty('--duration', `${duration}s`)

    // Add duplicate items for seamless loop
    setStart(true)
  }, [speed])

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex flex-col gap-4 overflow-hidden py-4 h-full',
        className
      )}
    >
      {/* Gradient Overlays */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white via-white/70 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white via-white/70 to-transparent z-20 pointer-events-none" />
      
      {/* Scrolling Content */}
      <div className="flex flex-col gap-4">
        <div
          className={cn(
            'flex flex-col gap-4 animate-scroll',
            direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'
          )}
        >
          {/* Original items */}
          {items.map((item, idx) => (
            <TestimonialCard
              key={idx}
              testimonial={item}
              className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            />
          ))}
          {/* Duplicate items for seamless loop */}
          {items.map((item, idx) => (
            <TestimonialCard
              key={`clone-${idx}`}
              testimonial={item}
              className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-gradient-to-b from-emerald-50/50 to-white py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Trusted by Our Community
          </h2>
          <p className="mt-6 text-xl font-medium tracking-tight text-gray-600">
            Discover why our community trusts St Peter's Pharmacy for all their healthcare needs.
            Read what our valued customers have to say about their experiences with us.
          </p>
        </div>

        {/* Mobile View - Static Cards */}
        <div className="mt-16 block lg:hidden">
          <div className="space-y-6">
            {testimonialData.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                testimonial={testimonial}
                className="mx-auto"
              />
            ))}
          </div>
        </div>

        {/* Desktop View - Animated Columns */}
        <div className="relative mx-auto mt-16 hidden grid-cols-1 gap-8 lg:mt-20 lg:grid lg:grid-cols-3">
          <div className="h-[40rem] overflow-hidden">
            <InfiniteMovingCards
              items={testimonialData.slice(0, 2)}
              direction="up"
              speed="slow"
            />
          </div>
          <div className="h-[40rem] overflow-hidden">
            <InfiniteMovingCards
              items={testimonialData.slice(2, 4)}
              direction="down"
              speed="normal"
            />
          </div>
          <div className="h-[40rem] overflow-hidden">
            <InfiniteMovingCards
              items={testimonialData.slice(4, 6)}
              direction="up"
              speed="fast"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
