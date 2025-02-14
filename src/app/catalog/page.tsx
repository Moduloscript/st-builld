'use client'

import { ProductGrid, Product } from '@/components/ui/catalog/ProductGrid'
import { Input, Button, Chip } from "@nextui-org/react"
import { Search, SlidersHorizontal, Grid, List, ChevronDown } from 'lucide-react'
import { useState, Fragment } from 'react'
import { cn } from '@/lib/utils'
import { Menu, Transition } from '@headlessui/react'

// Static categories
const CATEGORIES = [
  'Skincare and Beauty',
  'Vitamins and Supplements',
  'Over-the-Counter Medications',
  'Baby Care',
  'Personal Care and Hygiene',
  'Health Devices and Equipment',
  'Natural and Alternative Health',
  'First Aid and Wound Care',
  "Women's Health",
  'Medical Supplies and Equipment'
]

// Static products data
const PRODUCTS: Product[] = [
  // Skincare and Beauty Products
  {
    id: 'skin-1',
    name: 'CeraVe Moisturizing Cream',
    description: 'Daily face and body moisturizer with ceramides and hyaluronic acid for dry to very dry skin',
    price: 8500,
    image: '/products/skincare&beauty-3.jpg',
    category: 'Skincare and Beauty',
    rating: 4.8,
    highlights: [
      'With 3 essential ceramides',
      'Fragrance-free',
      'Non-comedogenic',
      'Developed with dermatologists'
    ],
    details: 'Suitable for sensitive skin, provides 24-hour hydration'
  },
  {
    id: 'skin-2',
    name: 'Neutrogena Ultra Sheer Sunscreen SPF 50',
    description: 'Lightweight, non-greasy sunscreen with broad spectrum protection',
    price: 7200,
    image: '/products/skincare&beauty-2.jpg',
    category: 'Skincare and Beauty',
    rating: 4.7,
    highlights: [
      'SPF 50 protection',
      'Water-resistant',
      'Non-comedogenic',
      'Fast-absorbing'
    ]
  },
  {
    id: 'skin-3',
    name: 'La Roche-Posay Effaclar Duo',
    description: 'Dual action acne treatment with niacinamide and LHA',
    price: 12000,
    image: '/products/skincare&beauty-1.jpg',
    category: 'Skincare and Beauty',
    rating: 4.6,
    highlights: [
      'Targets acne and dark spots',
      'Oil-free formula',
      'Suitable for sensitive skin',
      'Clinically proven results'
    ]
  },
  // Vitamins and Supplements
  {
    id: 'vit-1',
    name: 'Premium Multivitamin Complex',
    description: 'Complete daily multivitamin with essential minerals and antioxidants',
    price: 12500,
    image: '/products/product-4.jpg',
    category: 'Vitamins and Supplements',
    rating: 4.9,
    highlights: [
      '23 essential vitamins and minerals',
      'Immune system support',
      'Energy boost formula',
      'Once daily dosage'
    ]
  },
  {
    id: 'vit-2',
    name: 'High-Strength Omega-3 Fish Oil',
    description: 'Pure and potent omega-3 supplement for heart and brain health',
    price: 15000,
    image: '/products/omega-fish-oil.jpg',
    category: 'Vitamins and Supplements',
    rating: 4.8,
    highlights: [
      'High EPA/DHA content',
      'Mercury-free',
      'Wild-caught fish source',
      'Lemon flavored'
    ]
  },
  {
    id: 'vit-3',
    name: 'Vital Proteins Collagen Peptides',
    description: 'Premium collagen supplement for hair, skin, nails, and joints',
    price: 18000,
    image: '/products/product-6.jpg',
    category: 'Vitamins and Supplements',
    rating: 4.7,
    highlights: [
      'Type I & III Collagen',
      'Grass-fed and pasture-raised',
      'Dissolves easily',
      'Unflavored'
    ]
  },
  // Over-the-Counter Medications
  {
    id: 'otc-1',
    name: 'Advanced Pain Relief Tablets',
    description: 'Fast-acting pain relief for headaches and body pain',
    price: 3500,
    image: '/products/product-7.jpg',
    category: 'Over-the-Counter Medications',
    rating: 4.7,
    highlights: [
      'Rapid absorption',
      'Up to 8 hours relief',
      'Non-drowsy formula',
      'Gentle on stomach'
    ]
  },
  {
    id: 'otc-2',
    name: 'Cold & Flu Relief Max',
    description: 'Complete relief from cold and flu symptoms',
    price: 4800,
    image: '/products/product-8.jpg',
    category: 'Over-the-Counter Medications',
    rating: 4.6,
    highlights: [
      'Relieves multiple symptoms',
      'Day/Night formula',
      'Non-drowsy daytime option',
      'Fever reduction'
    ]
  },
  {
    id: 'otc-3',
    name: 'Zyrtec Allergy Relief',
    description: '24-hour relief from seasonal allergies',
    price: 6500,
    image: '/products/product-9.jpg',
    category: 'Over-the-Counter Medications',
    rating: 4.8,
    highlights: [
      '24-hour protection',
      'Non-drowsy',
      'Indoor & outdoor allergies',
      'Fast-acting relief'
    ]
  },
  // Personal Care and Hygiene
  {
    id: 'care-1',
    name: 'Sensodyne Pronamel Toothpaste',
    description: 'Strengthening enamel toothpaste for sensitive teeth',
    price: 2800,
    image: '/products/product-10.jpg',
    category: 'Personal Care and Hygiene',
    rating: 4.7,
    highlights: [
      'Protects against sensitivity',
      'Strengthens enamel',
      'Fresh mint flavor',
      'Cavity protection'
    ]
  },
  {
    id: 'care-2',
    name: 'Listerine Cool Mint Mouthwash',
    description: 'Antiseptic mouthwash for fresh breath and germ protection',
    price: 3200,
    image: '/products/product-11.jpg',
    category: 'Personal Care and Hygiene',
    rating: 4.6,
    highlights: [
      'Kills 99.9% of germs',
      'Fresh breath protection',
      'Reduces plaque',
      'Alcohol-based formula'
    ]
  },
  // Women's Health
  {
    id: 'women-1',
    name: 'Clearblue Digital Pregnancy Test',
    description: 'Advanced digital pregnancy test with weeks indicator',
    price: 5500,
    image: '/products/product-12.jpg',
    category: "Women's Health",
    rating: 4.9,
    highlights: [
      'Over 99% accurate',
      'Clear digital display',
      'Shows weeks since conception',
      'Easy to use'
    ]
  },
  {
    id: 'women-2',
    name: 'DivaCup Menstrual Cup',
    description: 'Reusable silicone menstrual cup for eco-friendly period care',
    price: 8000,
    image: '/products/product-13.jpg',
    category: "Women's Health",
    rating: 4.7,
    highlights: [
      'Medical-grade silicone',
      'Up to 12 hours protection',
      'Eco-friendly',
      'Cost-effective'
    ]
  },
  // Natural and Alternative Health
  {
    id: 'nat-1',
    name: 'doTERRA Lavender Essential Oil',
    description: 'Pure therapeutic grade lavender essential oil',
    price: 9500,
    image: '/products/product-14.jpg',
    category: 'Natural and Alternative Health',
    rating: 4.8,
    highlights: [
      '100% pure oil',
      'Promotes relaxation',
      'Multiple uses',
      'Steam distilled'
    ]
  },
  {
    id: 'nat-2',
    name: 'Organic Hemp CBD Oil',
    description: 'Full spectrum CBD oil for natural wellness support',
    price: 25000,
    image: '/products/product-15.jpg',
    category: 'Natural and Alternative Health',
    rating: 4.7,
    highlights: [
      'Organic hemp extract',
      'Full spectrum CBD',
      'Lab tested',
      'THC-free'
    ]
  },
  // Medical Supplies and Equipment
  {
    id: 'med-1',
    name: 'Professional Compression Socks',
    description: 'Medical-grade compression socks for improved circulation',
    price: 7500,
    image: '/products/product-16.jpg',
    category: 'Medical Supplies and Equipment',
    rating: 4.6,
    highlights: [
      'Graduated compression',
      'Moisture-wicking',
      'Anti-fatigue',
      'Suitable for travel'
    ]
  },
  {
    id: 'med-2',
    name: 'Dr. Scholl\'s Knee Support',
    description: 'Advanced knee support brace with stabilizing technology',
    price: 12000,
    image: '/products/product-17.jpg',
    category: 'Medical Supplies and Equipment',
    rating: 4.7,
    highlights: [
      'Adjustable fit',
      'Breathable material',
      'Stabilizing support',
      'Comfortable wear'
    ]
  },
  // Baby Care Products
  {
    id: 'baby-1',
    name: 'Gentle Baby Moisturizing Lotion',
    description: 'Ultra-gentle, fragrance-free moisturizer for sensitive baby skin',
    price: 5500,
    image: '/products/product-7.jpg',
    category: 'Baby Care',
    rating: 4.9,
    highlights: [
      'Pediatrician tested',
      'Hypoallergenic',
      '24-hour moisture',
      'Natural ingredients'
    ]
  },
  {
    id: 'baby-2',
    name: 'Premium Baby Wipes Bundle',
    description: 'Pure water wipes with natural ingredients, perfect for sensitive skin',
    price: 3200,
    image: '/products/product-8.jpg',
    category: 'Baby Care',
    rating: 4.8,
    highlights: [
      '99% pure water',
      'Plastic-free',
      'Biodegradable',
      'No harsh chemicals'
    ]
  },
  // Health Devices
  {
    id: 'dev-1',
    name: 'Digital Blood Pressure Monitor',
    description: 'Professional-grade blood pressure monitor for home use',
    price: 45000,
    image: '/products/product-9.jpg',
    category: 'Health Devices and Equipment',
    rating: 4.9,
    highlights: [
      'Clinical accuracy',
      'Large display',
      'Memory function',
      'Irregular heartbeat detection'
    ]
  },
  // First Aid
  {
    id: 'aid-1',
    name: 'Complete First Aid Kit',
    description: 'Comprehensive first aid kit for home and travel',
    price: 18500,
    image: '/products/product-1.jpg',
    category: 'First Aid and Wound Care',
    rating: 4.8,
    highlights: [
      '100+ essential items',
      'Organized compartments',
      'Emergency guide included',
      'Durable case'
    ]
  }
]

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured')

  // Filter products based on category and search query
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-emerald-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 max-w-lg">
              <Input
                placeholder="Search products..."
                startContent={<Search className="text-emerald-600" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                size="lg"
                variant="bordered"
                classNames={{
                  input: "text-base font-medium",
                  inputWrapper: "shadow-none border-emerald-200 hover:border-emerald-400 focus-within:border-emerald-600 bg-white/50"
                }}
              />
            </div>
            <div className="flex items-center gap-3">
              {/* Category Filter Dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-emerald-900 bg-white/50 border border-emerald-200 hover:border-emerald-400 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Filter</span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => setSelectedCategory('')}
                            className={cn(
                              'flex w-full items-center px-4 py-2.5 text-sm',
                              active ? 'bg-emerald-50 text-emerald-900' : 'text-gray-700',
                              !selectedCategory && 'text-emerald-600 font-medium'
                            )}
                          >
                            <span className="flex-1 text-left">All Categories</span>
                            {!selectedCategory && (
                              <span className="ml-2 h-2 w-2 rounded-full bg-emerald-500"></span>
                            )}
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      {CATEGORIES.map((category) => (
                        <Menu.Item key={category}>
                          {({ active }) => (
                            <button
                              onClick={() => setSelectedCategory(category)}
                              className={cn(
                                'flex w-full items-center px-4 py-2.5 text-sm',
                                active ? 'bg-emerald-50 text-emerald-900' : 'text-gray-700',
                                selectedCategory === category && 'text-emerald-600 font-medium'
                              )}
                            >
                              <span className="flex-1 text-left">{category}</span>
                              {selectedCategory === category && (
                                <span className="ml-2 h-2 w-2 rounded-full bg-emerald-500"></span>
                              )}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/* Sort Dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-emerald-900 bg-white/50 border border-emerald-200 hover:border-emerald-400 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                  <ChevronDown className="h-4 w-4" />
                  <span>Sort By</span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {[
                        { key: 'featured', label: 'Featured' },
                        { key: 'price-asc', label: 'Price: Low to High' },
                        { key: 'price-desc', label: 'Price: High to Low' },
                        { key: 'name', label: 'Name' }
                      ].map((option) => (
                        <Menu.Item key={option.key}>
                          {({ active }) => (
                            <button
                              onClick={() => setSortBy(option.key as typeof sortBy)}
                              className={cn(
                                'flex w-full items-center px-4 py-2.5 text-sm',
                                active ? 'bg-emerald-50 text-emerald-900' : 'text-gray-700',
                                sortBy === option.key && 'text-emerald-600 font-medium'
                              )}
                            >
                              <span className="flex-1 text-left">{option.label}</span>
                              {sortBy === option.key && (
                                <span className="ml-2 h-2 w-2 rounded-full bg-emerald-500"></span>
                              )}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <div className="flex items-center gap-2 border-l border-emerald-200 pl-3">
                <Button
                  isIconOnly
                  variant="light"
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    "text-emerald-600",
                    viewMode === 'grid' ? 'bg-emerald-100' : 'hover:bg-emerald-50'
                  )}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  isIconOnly
                  variant="light"
                  onClick={() => setViewMode('list')}
                  className={cn(
                    "text-emerald-600",
                    viewMode === 'list' ? 'bg-emerald-100' : 'hover:bg-emerald-50'
                  )}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Active Filters */}
        {(selectedCategory || searchQuery) && (
          <div className="mb-6 flex flex-wrap gap-2">
            {selectedCategory && (
              <Chip 
                onClose={() => setSelectedCategory('')}
                variant="flat"
                className="bg-emerald-100 text-emerald-900"
              >
                {selectedCategory}
              </Chip>
            )}
            {searchQuery && (
              <Chip 
                onClose={() => setSearchQuery('')}
                variant="flat"
                className="bg-emerald-100 text-emerald-900"
              >
                Search: {searchQuery}
              </Chip>
            )}
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-emerald-950 font-display">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Available
          </h1>
        </div>

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} viewMode={viewMode} />
      </main>
    </div>
  )
}
