'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container } from '@/components/ui/container'

const products = [
  {
    name: 'Premium Vitamins & Supplements',
    description: 'High-quality supplements for optimal health and wellness.',
    image: '/products/vitamins.jpg',
    category: 'Wellness'
  },
  {
    name: 'Prescription Medications',
    description: 'Full-service pharmacy with comprehensive medication management.',
    image: '/products/medications.jpg',
    category: 'Pharmacy'
  },
  {
    name: 'Healthcare Equipment',
    description: 'Modern medical devices and equipment for home care.',
    image: '/products/equipment.jpg',
    category: 'Equipment'
  },
  {
    name: 'Natural Health Products',
    description: 'Organic and natural health solutions for holistic wellness.',
    image: '/products/natural.jpg',
    category: 'Natural'
  }
]

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-md"
    >
      <div className="aspect-h-4 aspect-w-3 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute bottom-0 w-full p-6 text-white">
        <p className="mb-2 text-sm font-medium text-emerald-400">
          {product.category}
        </p>
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-200">
          {product.description}
        </p>
      </div>
    </motion.div>
  )
}

export function ProductShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Products & Services
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Explore our comprehensive range of healthcare products and pharmaceutical services,
              designed to meet all your wellness needs.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
