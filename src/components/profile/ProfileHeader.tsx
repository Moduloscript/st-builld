'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth/hooks/useAuth'
import { LogOut } from 'lucide-react'
import { useState } from 'react'

export default function ProfileHeader() {
  const router = useRouter()
  const { user, signOut } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    try {
      await signOut()
      // Force a hard redirect to the login page
      window.location.href = '/auth/login'
    } catch (error) {
      console.error('Error signing out:', error)
      setIsLoading(false)
    }
  }

  if (!user) {
    return null
  }

  return (
    <div className="w-full px-4 md:px-6 py-8 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          {user.avatar_url ? (
            <img
              src={user.avatar_url}
              alt={user.full_name || 'Profile'}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
              <span className="text-emerald-700 dark:text-emerald-300 text-lg font-semibold">
                {(user.full_name || user.email || '?').charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <div>
            {user.full_name && (
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {user.full_name}
              </h2>
            )}
            <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>
        </div>

        <Button
          color="danger"
          variant="flat"
          onClick={handleSignOut}
          isLoading={isLoading}
          startContent={!isLoading && <LogOut className="w-4 h-4" />}
          className="font-medium"
        >
          {isLoading ? 'Signing out...' : 'Sign Out'}
        </Button>
      </div>
    </div>
  )
}
