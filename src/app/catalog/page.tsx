import { ProductGrid } from '@/components/ui/catalog/ProductGrid'
import { CatalogFilters } from '@/components/ui/catalog/CatalogFilters'
import { Input } from "@nextui-org/react"
import { Search } from 'lucide-react'

// This would come from your database
const SAMPLE_CATEGORIES = [
  'Prescription Medications',
  'Over-the-Counter',
  'Vitamins & Supplements',
  'Personal Care',
  'First Aid',
  'Health Devices',
]

const SAMPLE_PRODUCTS = [
  {
    id: '1',
    name: 'Vitamin D3 Supplements',
    description: 'High-quality vitamin D3 supplements for immune support and bone health.',
    price: 24.99,
    image: '/images/products/vitamin-d3.jpg',
    category: 'Vitamins & Supplements',
    rating: 4.5,
    inStock: true,
  },
  // Add more sample products...
]

export default function CatalogPage() {
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
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <aside className="hidden lg:block">
          <CatalogFilters
            categories={SAMPLE_CATEGORIES}
            onFilterChange={(filters) => {
              console.log('Filters changed:', filters)
            }}
          />
        </aside>

        <main>
          <ProductGrid products={SAMPLE_PRODUCTS} />
        </main>
      </div>
    </div>
  )
}
