"use client"

import { Spinner } from "@nextui-org/react"

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <div className="text-center space-y-4">
        <Spinner size="lg" />
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    </div>
  )
}

export function LoadingSpinner({ size = "sm" }: { size?: "sm" | "md" | "lg" }) {
  return <Spinner size={size} />
}
