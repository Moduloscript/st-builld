"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function login(phone: string) {
  const supabase = createClient()
  
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      phone,
    })
    
    if (error) throw error
    
    revalidatePath("/")
    return { success: true }
  } catch (error) {
    return { error: "Failed to login" }
  }
}
