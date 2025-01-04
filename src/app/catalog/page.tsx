import { ProductGrid } from '@/components/ui/catalog/ProductGrid'
import { CatalogFilters } from '@/components/ui/catalog/CatalogFilters'
import { Input } from "@nextui-org/react"
import { Search } from 'lucide-react'
import { fetchProducts, fetchProductCategories } from '@/lib/actions/catalog/fetch-products'
import { Suspense } from 'react'

// This would come from your database
const SAMPLE_CATEGORIES = [
  'Over-the-Counter Medications',
  'Health & Wellness Products',
  'Personal Care',
  'First Aid',
  'Vitamins & Supplements',
  'Medical Supplies',
]

const SAMPLE_PRODUCTS = [
  {
    id: '1',
    name: 'Pain Relief Tablets',
    description: 'Fast-acting pain relief for headaches and minor aches',
    price: 9.99,
    image: '/products/pain-relief.jpg',
    category: 'Over-the-Counter Medications',
    rating: 4.5,
    highlights: [
      'Fast-acting formula',
      'Suitable for adults and children over 12',
      'Easy to swallow tablets'
    ],
    details: 'Contains paracetamol 500mg. Always read the label before use.'
  },
  {
    id: '2',
    name: 'Vitamin C Complex',
    description: 'High-strength vitamin C with zinc for immune support',
    price: 14.99,
    image: '/products/vitamin-c.jpg',
    category: 'Vitamins & Supplements',
    rating: 4.8,
    highlights: [
      'High strength formula',
      'With added zinc',
      'Supports immune system'
    ],
    details: 'Contains 1000mg Vitamin C and 15mg Zinc per tablet.'
  },
  {
    id: '3',
    name: 'First Aid Kit',
    description: 'Complete first aid kit for home and travel',
    price: 24.99,
    image: '/products/first-aid.jpg',
    category: 'First Aid',
    rating: 4.7,
    highlights: [
      'Comprehensive kit',
      'Travel-friendly size',
      'Includes guide book'
    ],
    details: 'Contains bandages, antiseptic wipes, scissors, and more.'
  }
]

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const products = await fetchProducts({
    category: searchParams.category,
    search: searchParams.search,
    minPrice: searchParams.minPrice ? parseFloat(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? parseFloat(searchParams.maxPrice) : undefined,
  })
  
  const categories = await fetchProductCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Product Catalog</h1>
        <p className="text-default-500">
          Browse our wide selection of healthcare products and medications
        </p>
      </div>

      <div className="relative mb-6">
        <Input
          placeholder="Search products..."
          startContent={<Search className="text-default-400" />}
          className="max-w-2xl"
          defaultValue={searchParams.search}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <aside className="hidden lg:block">
          <Suspense fallback={<div>Loading filters...</div>}>
            <CatalogFilters
              categories={categories}
              selectedCategory={searchParams.category}
              onFilterChange={(filters) => {
                // This will be handled by client-side navigation
                const searchParams = new URLSearchParams()
                if (filters.categories?.length > 0) {
                  searchParams.set('category', filters.categories[0])
                }
                if (filters.priceRange) {
                  searchParams.set('minPrice', filters.priceRange[0].toString())
                  searchParams.set('maxPrice', filters.priceRange[1].toString())
                }
                window.location.search = searchParams.toString()
              }}
            />
          </Suspense>
        </aside>

        <main>
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductGrid products={products} />
          </Suspense>
        </main>
      </div>
    </div>
  )
}
