"use server"

import { createClient } from "@/lib/supabase/server"

export async function getHeroContent() {
  const supabase = createClient()
  
  try {
    const { data, error } = await supabase
      .from('content')
      .select('*')
      .eq('type', 'hero')
      .single()
    
    if (error) throw error
    
    return {
      title: data.title,
      description: data.description,
      image: data.image_url
    }
  } catch (error) {
    console.error('Error fetching hero content:', error)
    return {
      title: "St. Peter's Pharmacy",
      description: "Your trusted healthcare partner",
      image: "/images/image_fx_.jpg"
    }
  }
}
