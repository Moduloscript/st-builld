"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function verify(phone: string, token: string) {
  const supabase = createClient()
  
  try {
    const { data, error } = await supabase.auth.verifyOtp({
      phone,
      token,
      type: 'sms'
    })
    
    if (error) throw error
    
    revalidatePath("/")
    return { success: true }
  } catch (error) {
    return { error: "Failed to verify OTP" }
  }
}
