'use client'

import { Button, Card, CardBody, CardHeader, Checkbox, Accordion, AccordionItem, Slider } from "@nextui-org/react"
import { useState } from 'react'

interface CatalogFiltersProps {
  categories: string[]
  onFilterChange: (filters: any) => void
}

export function CatalogFilters({ categories, onFilterChange }: CatalogFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleCategoryChange = (category: string) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]
    setSelectedCategories(updated)
    onFilterChange({ categories: updated, priceRange })
  }

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
    onFilterChange({ categories: selectedCategories, priceRange: value })
  }

  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Filters</h3>
      </CardHeader>
      <CardBody className="grid gap-6">
        <Accordion>
          <AccordionItem key="categories" aria-label="Categories" title="Categories">
            <div className="grid gap-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    value={category}
                    isSelected={selectedCategories.includes(category)}
                    onValueChange={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Checkbox>
                </div>
              ))}
            </div>
          </AccordionItem>
          <AccordionItem key="price" aria-label="Price Range" title="Price Range">
            <div className="space-y-4">
              <Slider
                label="Price Range"
                step={10}
                minValue={0}
                maxValue={1000}
                value={priceRange}
                onChange={handlePriceChange}
                className="max-w-md"
              />
              <div className="flex items-center justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
        <Button
          variant="bordered"
          onPress={() => {
            setSelectedCategories([])
            setPriceRange([0, 1000])
            onFilterChange({ categories: [], priceRange: [0, 1000] })
          }}
        >
          Reset Filters
        </Button>
      </CardBody>
    </Card>
  )
}
