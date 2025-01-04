'use client'

import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export type UserProfile = {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  phone_number?: string
  created_at: string
  preferences?: {
    newsletter: boolean
    notifications: boolean
  }
}

export type Provider = 'google' | 'facebook'

export function useAuth() {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event)
      if (session) {
        // Fetch the user profile when logged in
        const { data, error } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        if (!error && data) {
          setUser(data as UserProfile)
        } else if (error?.code === 'PGRST116') {
          // Profile doesn't exist yet, create it
          const { error: profileError } = await supabase.from('user_profiles').insert([
            {
              id: session.user.id,
              email: session.user.email,
              full_name: session.user.user_metadata.full_name,
              avatar_url: session.user.user_metadata.avatar_url,
              preferences: {
                newsletter: true,
                notifications: true,
              },
            },
          ])
          if (!profileError) {
            setUser({
              id: session.user.id,
              email: session.user.email!,
              full_name: session.user.user_metadata.full_name,
              avatar_url: session.user.user_metadata.avatar_url,
              created_at: new Date().toISOString(),
              preferences: {
                newsletter: true,
                notifications: true,
              },
            })
          }
        }
      } else {
        setUser(null)
      }
      setLoading(false)
      router.refresh()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, router])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    const { error: signUpError, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })
    if (signUpError) throw signUpError

    if (data.user) {
      // Create the user profile
      const { error: profileError } = await supabase.from('user_profiles').insert([
        {
          id: data.user.id,
          email,
          full_name: fullName,
          preferences: {
            newsletter: true,
            notifications: true,
          },
        },
      ])
      if (profileError) throw profileError
    }
  }

  const signInWithProvider = async (provider: Provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (error) throw error
  }

  const signOut = async () => {
    console.log('Signing out from Supabase...')
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Supabase sign out error:', error)
      throw error
    }
    console.log('Supabase sign out successful')
    setUser(null)
  }

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) throw new Error('Not authenticated')
    
    console.log('Updating profile:', updates)
    const { error } = await supabase
      .from('user_profiles')
      .update(updates)
      .eq('id', user.id)
    
    if (error) {
      console.error('Profile update error:', error)
      throw error
    }
    
    console.log('Profile updated successfully')
    setUser({ ...user, ...updates })
  }

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    signInWithProvider,
    updateProfile,
  }
}
