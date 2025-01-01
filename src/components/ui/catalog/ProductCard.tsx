'use client'

import Image from 'next/image'
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react"
import { Star, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: {
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
  className?: string
  index: number
}

export function ProductCard({ product, className, index }: ProductCardProps) {
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
          'overflow-hidden bg-gradient-to-b from-white via-white to-gray-50/50',
          'backdrop-blur-lg hover:shadow-xl transition-all duration-300',
          'border border-white/20 relative',
          className
        )}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-x-2 -inset-y-4 bg-gradient-to-t from-white/50 to-transparent blur-2xl group-hover:from-primary/5 transition-colors duration-500" />
        
        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/30 z-10" />
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
            
            <div className="absolute top-4 left-4 flex gap-2 z-30">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Chip 
                  className="bg-white/95 backdrop-blur-sm text-xs font-medium shadow-lg"
                  variant="flat"
                  startContent={<Sparkles className="h-3 w-3 text-primary" />}
                >
                  {product.category}
                </Chip>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 shadow-lg">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </CardHeader>
        
        <CardBody className="relative p-6 z-20">
          <motion.div
            initial={false}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div>
              <h3 className="font-semibold tracking-tight text-xl mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/60 transition-all duration-300">
                {product.name}
              </h3>
              <p className="text-default-500 text-sm line-clamp-2">
                {product.description}
              </p>
            </div>
            
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                Key Benefits
              </h4>
              <ul className="grid gap-2">
                {product.highlights.map((highlight, i) => (
                  <motion.li 
                    key={i}
                    initial={false}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="rounded-full h-1.5 w-1.5 bg-primary mt-2 flex-shrink-0" />
                    <span className="text-gray-600">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>
  )
}
