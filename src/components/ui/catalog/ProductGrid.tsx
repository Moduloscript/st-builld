'use client'

import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Array<{
    id: string
    name: string
    description: string
    price: number
    image: string
    category: string
    rating: number
    highlights: string[]
    details?: string
  }>
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          index={index}
        />
      ))}
    </div>
  )
}
