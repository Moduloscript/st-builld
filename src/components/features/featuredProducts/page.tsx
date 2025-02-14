'use client'

import { ProductGrid } from '@/components/ui/catalog/ProductGrid'
import { motion } from 'framer-motion'
import { Sparkles, Star, Flask, Shield, CheckCircle } from '@/components/ui/icons'

// Helper function to format price
const formatPrice = (price: number) => {
  return `₦${price.toLocaleString('en-NG')}`
}

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Advanced Immune Support Complex',
    description: 'Comprehensive immune system support with a powerful blend of vitamins, minerals, and antioxidants.',
    price: 22500,
    image: '/products/product-1.jpg',
    category: 'Premium Supplements',
    rating: 4.9,
    highlights: [
      'High-potency vitamin C and D3',
      'Zinc and Selenium for immune function',
      'Elderberry and Echinacea blend',
      'Natural antioxidant support'
    ]
  },
  {
    id: '2',
    name: 'Ultra Pure Omega-3 Elite',
    description: 'Pharmaceutical-grade fish oil with exceptional purity and potency for heart and brain health.',
    price: 27000,
    image: '/products/product-2.jpg',
    category: 'Premium Supplements',
    rating: 4.8,
    highlights: [
      'Molecularly distilled for maximum purity',
      'High EPA/DHA concentration',
      'Sustainably sourced from wild fish',
      'Enteric-coated for better absorption'
    ]
  },
  {
    id: '3',
    name: 'Advanced Joint Support Formula',
    description: 'Professional-grade joint support supplement with glucosamine, chondroitin, and MSM.',
    price: 24500,
    image: '/products/product-3.jpg',
    category: 'Wellness Solutions',
    rating: 4.7,
    highlights: [
      'Clinically proven ingredients',
      'Enhanced mobility support',
      'Anti-inflammatory properties',
      'With Hyaluronic Acid'
    ]
  },
  {
    id: '4',
    name: 'Complete Probiotic Complex',
    description: 'Advanced probiotic formula with 15 strains of beneficial bacteria for optimal gut health.',
    price: 19500,
    image: '/products/product-4.jpg',
    category: 'Digestive Health',
    rating: 4.9,
    highlights: [
      '50 billion CFU guarantee',
      'Delayed-release technology',
      'Supports immune function',
      'Promotes nutrient absorption'
    ]
  },
  {
    id: '5',
    name: 'Premium Sleep Support',
    description: 'Natural sleep aid combining melatonin, magnesium, and calming herbs for restful sleep.',
    price: 17500,
    image: '/products/product-5.jpg',
    category: 'Sleep & Recovery',
    rating: 4.8,
    highlights: [
      'Non-habit forming formula',
      'Time-released melatonin',
      'With L-Theanine & GABA',
      'Promotes deep, restful sleep'
    ]
  },
  {
    id: '6',
    name: 'Professional Blood Pressure Monitor',
    description: 'Hospital-grade blood pressure monitoring system with smart connectivity and advanced features.',
    price: 65000,
    image: '/products/product-6.jpg',
    category: 'Medical Devices',
    rating: 4.9,
    highlights: [
      'Clinical accuracy ±3mmHg',
      'Bluetooth connectivity',
      'Multi-user memory function',
      'Irregular heartbeat detection'
    ]
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-primary/[0.08] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-gray-900/[0.04] via-transparent to-transparent" />
      
      {/* Decorative dots */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm text-primary-600 font-medium rounded-full bg-primary/10 mb-4">
              <Sparkles className="h-4 w-4" />
              Featured Collection
            </span>
            
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary/80 to-gray-600">
              Premium Healthcare Products
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium healthcare products, 
              chosen for their exceptional quality and proven effectiveness.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            {[
              { text: 'Premium Quality', icon: Star },
              { text: 'Clinically Tested', icon: Flask },
              { text: 'Expert Selected', icon: Shield },
              { text: 'Satisfaction Guaranteed', icon: CheckCircle }
            ].map((feature, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white shadow-md border border-gray-100"
              >
                <feature.icon className="h-4 w-4 text-primary" />
                {feature.text}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <ProductGrid products={FEATURED_PRODUCTS} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white to-gray-50/50 border border-gray-100 shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="p-2 rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
            </div>
            <p className="text-gray-600 font-medium">
              Our products are carefully selected and verified by healthcare professionals to ensure the highest standards of quality and efficacy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
