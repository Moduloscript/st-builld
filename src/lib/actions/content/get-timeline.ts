"use server"

import { createClient } from "@/lib/supabase/server"

export async function getTimeline() {
  const supabase = createClient()
  
  try {
    const { data, error } = await supabase
      .from('content')
      .select('*')
      .eq('type', 'timeline')
      .order('date', { ascending: true })
    
    if (error) throw error
    
    return data.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      date: item.date
    }))
  } catch (error) {
    console.error('Error fetching timeline:', error)
    return []
  }
}
