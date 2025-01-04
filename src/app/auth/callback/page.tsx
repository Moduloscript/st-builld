'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

export default function AuthCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    // Handle the OAuth callback
    supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth event:', event)
      
      if (event === 'SIGNED_IN') {
        // Get the redirect URL from query params or default to profile
        const redirectTo = searchParams.get('redirect') || '/profile'
        router.push(redirectTo)
      } else if (event === 'SIGNED_OUT') {
        // Ensure we redirect to login page on sign out
        router.push('/auth/login')
      }
    })
  }, [router, searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Processing authentication...
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Please wait while we redirect you
        </p>
      </div>
    </div>
  )
}
