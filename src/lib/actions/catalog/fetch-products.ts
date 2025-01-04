import { createClient } from '@/lib/supabase/server'

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
  created_at: string
  updated_at: string
}

export type ProductFilters = {
  category?: string
  minPrice?: number
  maxPrice?: number
  search?: string
}

export async function fetchProducts(filters?: ProductFilters) {
  const supabase = createClient()
  
  let query = supabase
    .from('product_catalog')
    .select('*')
  
  if (filters?.category) {
    query = query.eq('category', filters.category)
  }
  
  if (filters?.minPrice) {
    query = query.gte('price', filters.minPrice)
  }
  
  if (filters?.maxPrice) {
    query = query.lte('price', filters.maxPrice)
  }
  
  if (filters?.search) {
    query = query.textSearch('name', filters.search)
  }
  
  const { data, error } = await query
  
  if (error) {
    console.error('Error fetching products:', error)
    throw new Error('Failed to fetch products')
  }
  
  return data as Product[]
}

export async function fetchProductCategories() {
  const supabase = createClient()
  
  // Using a raw query with select distinct
  const { data, error } = await supabase
    .rpc('get_distinct_categories')
  
  if (error) {
    console.error('Error fetching categories:', error)
    throw new Error('Failed to fetch categories')
  }
  
  return data as string[]
}
