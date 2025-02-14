'use client'

import Image from 'next/image'
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react"
import { Star, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Product } from './ProductGrid'

interface ProductCardProps {
  product: Product
  className?: string
  index: number
  viewMode?: 'grid' | 'list'
}

export function ProductCard({ product, className, index, viewMode = 'grid' }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card 
        className={cn(
          'overflow-hidden bg-gradient-to-b from-white via-white to-emerald-50/30',
          'backdrop-blur-lg hover:shadow-xl transition-all duration-300',
          'border border-emerald-100 relative',
          viewMode === 'list' && 'flex flex-row',
          className
        )}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-x-2 -inset-y-4 bg-gradient-to-t from-emerald-50/50 to-transparent blur-2xl group-hover:from-emerald-100/30 transition-colors duration-500" />
        
        <div className={cn(
          viewMode === 'list' ? 'w-1/3' : 'w-full',
          'relative'
        )}>
          <div className={cn(
            "relative overflow-hidden",
            viewMode === 'list' ? 'h-full' : 'aspect-[4/3]'
          )}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/5 to-emerald-950/30 z-10" />
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-2 right-2 z-20">
              <Chip
                startContent={<Star className="h-4 w-4" />}
                variant="flat"
                color="success"
                className="bg-white/90 backdrop-blur-sm text-emerald-700 font-medium"
              >
                {product.rating}
              </Chip>
            </div>
          </div>
        </div>
        
        <CardBody className={cn(
          "relative p-6",
          viewMode === 'list' && 'flex-1'
        )}>
          <div className={cn(
            "mb-4",
            viewMode === 'list' && 'flex flex-col h-full'
          )}>
            <div className={viewMode === 'list' ? 'mb-auto' : ''}>
              <Chip size="sm" variant="flat" className="mb-2 bg-emerald-100 text-emerald-700">
                {product.category}
              </Chip>
              <h3 className="text-xl font-semibold text-emerald-950 font-display">
                {product.name}
              </h3>
              <p className="mt-2 text-emerald-800/80 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className={cn(
              "space-y-4",
              viewMode === 'list' ? 'mt-4' : 'mt-6'
            )}>
              <div className="space-y-2">
                <div className="text-sm font-medium text-emerald-800">
                  Highlights:
                </div>
                <ul className={cn(
                  "space-y-1",
                  viewMode === 'list' && 'grid grid-cols-2 gap-2 space-y-0'
                )}>
                  {product.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-sm text-emerald-700">
                      <Sparkles className="h-4 w-4 mr-2 text-emerald-500 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-emerald-100">
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-emerald-900 font-display">
                    ₦{product.price.toLocaleString('en-NG')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  )
}
