'use client'

import { Button } from "@nextui-org/react"

interface CatalogFiltersProps {
  categories: string[]
  selectedCategory: string
  onFilterChange: (category: string) => void
}

export function CatalogFilters({ 
  categories,
  selectedCategory,
  onFilterChange
}: CatalogFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === '' ? 'solid' : 'ghost'}
        color={selectedCategory === '' ? 'primary' : 'default'}
        onClick={() => onFilterChange('')}
        className="text-sm"
      >
        All Products
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'solid' : 'ghost'}
          color={selectedCategory === category ? 'primary' : 'default'}
          onClick={() => onFilterChange(category)}
          className="text-sm"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
