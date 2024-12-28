"use client"

import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export function useAuth() {
  const router = useRouter()
  const supabase = createClient()

  const signOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return {
    signOut,
  }
}
