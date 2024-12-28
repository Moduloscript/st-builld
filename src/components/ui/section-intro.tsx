import React from 'react'
import clsx from 'clsx'

interface SectionIntroProps {
  eyebrow?: string
  title: string | React.ReactNode
  children?: React.ReactNode
  smaller?: boolean
  centered?: boolean
  className?: string
}

export function SectionIntro({
  eyebrow,
  title,
  children,
  smaller = false,
  centered = false,
  className,
}: SectionIntroProps) {
  return (
    <div
      className={clsx(
        'max-w-5xl',
        centered && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p className="font-display text-base font-medium text-primary">
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          'mt-2 font-display',
          smaller ? 'text-3xl' : 'text-4xl',
          'font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl'
        )}
      >
        {title}
      </h2>
      {children && (
        <div className="mt-6 text-xl text-neutral-600">
          {children}
        </div>
      )}
    </div>
  )
}
