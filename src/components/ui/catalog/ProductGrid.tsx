'use client'

import { ProductCard } from './ProductCard'
import { motion } from 'framer-motion'

export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  highlights: string[]
  details?: string
}

interface ProductGridProps {
  products: Product[]
  viewMode?: 'grid' | 'list'
}

const products: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is product 1',
    price: 10.99,
    image: 'https://example.com/product1.jpg',
    category: 'Category 1',
    rating: 4.5,
    highlights: ['Highlight 1', 'Highlight 2'],
    details: 'This is a detailed description of product 1'
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is product 2',
    price: 9.99,
    image: 'https://example.com/product2.jpg',
    category: 'Category 2',
    rating: 4.2,
    highlights: ['Highlight 3', 'Highlight 4']
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'This is product 3',
    price: 12.99,
    image: 'https://example.com/product3.jpg',
    category: 'Category 3',
    rating: 4.8,
    highlights: ['Highlight 5', 'Highlight 6'],
    details: 'This is a detailed description of product 3'
  }
]

export function ProductGrid({ products, viewMode = 'grid' }: ProductGridProps) {
  return (
    <div 
      className={
        viewMode === 'grid' 
          ? "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8" 
          : "space-y-6"
      }
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProductCard
            product={product}
            index={index}
            viewMode={viewMode}
          />
        </motion.div>
      ))}
    </div>
  )
}
