'use client'

import { useAuth } from '@/lib/auth/hooks/useAuth'
import { Spinner } from '@nextui-org/react'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
}
