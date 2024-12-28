'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container } from '@/components/ui/container'

const testimonials = [
  {
    content: "St Peter's Pharmacy has transformed my healthcare experience. Their professional staff and personalized service make managing my medications so much easier.",
    author: {
      name: 'Sarah Williams',
      role: 'Regular Customer',
      image: '/testimonials/customer-1.jpg'
    }
  },
  {
    content: "The pharmacists here are incredibly knowledgeable and always take time to explain my medications thoroughly. Best pharmacy service I've ever experienced!",
    author: {
      name: 'Michael Thompson',
      role: 'Patient',
      image: '/testimonials/customer-2.jpg'
    }
  },
  {
    content: "Their health education programs have been invaluable for managing my chronic condition. The team goes above and beyond regular pharmacy services.",
    author: {
      name: 'Emma Rodriguez',
      role: 'Long-term Patient',
      image: '/testimonials/customer-3.jpg'
    }
  },
  {
    content: "The convenience of their digital prescription service combined with their caring personal touch makes this pharmacy stand out from the rest.",
    author: {
      name: 'David Chen',
      role: 'Local Resident',
      image: '/testimonials/customer-4.jpg'
    }
  }
]

function QuoteIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 12.75H6.75V6H13.5M13.5 25.5H6.75V18.75H13.5M29.25 12.75H22.5V6H29.25M29.25 25.5H22.5V18.75H29.25V25.5Z"
        fill="currentColor"
        opacity={0.25}
      />
    </svg>
  )
}

function TestimonialCard({ content, author }: {
  content: string
  author: {
    name: string
    role: string
    image: string
  }
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200"
    >
      <div>
        <QuoteIcon className="h-8 w-8 text-emerald-500" />
        <p className="mt-4 text-lg font-medium leading-relaxed text-gray-900">
          {content}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{author.name}</p>
          <p className="text-sm text-gray-600">{author.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Discover why our community trusts St Peter's Pharmacy for all their healthcare needs.
              Read what our valued customers have to say about their experiences with us.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
