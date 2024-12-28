import { cn } from '@/lib/utils'

interface GradientBackgroundProps {
  className?: string
  children?: React.ReactNode
}

export function GradientBackground({
  className,
  children,
}: GradientBackgroundProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gradient-to-b from-indigo-50/75 to-white',
        className
      )}
    >
      {children}
    </div>
  )
}
