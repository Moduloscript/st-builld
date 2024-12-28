import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const headingVariants = cva(
  'scroll-m-20 tracking-tight font-display',
  {
    variants: {
      size: {
        default: 'text-4xl font-bold lg:text-5xl',
        lg: 'text-5xl font-bold lg:text-6xl',
        sm: 'text-3xl font-bold lg:text-4xl',
        xs: 'text-2xl font-bold lg:text-3xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

const subheadingVariants = cva(
  'scroll-m-20 tracking-tight font-display',
  {
    variants: {
      size: {
        default: 'text-3xl font-semibold',
        sm: 'text-2xl font-semibold',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

const leadVariants = cva(
  'text-muted-foreground',
  {
    variants: {
      size: {
        default: 'text-xl',
        sm: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

interface SubheadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof subheadingVariants> {
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

interface LeadProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof leadVariants> {}

export function Heading({
  className,
  size,
  as: Component = 'h1',
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(headingVariants({ size, className }))}
      {...props}
    />
  )
}

export function Subheading({
  className,
  size,
  as: Component = 'h2',
  ...props
}: SubheadingProps) {
  return (
    <Component
      className={cn(subheadingVariants({ size, className }))}
      {...props}
    />
  )
}

export function Lead({ className, size, ...props }: LeadProps) {
  return (
    <p
      className={cn(leadVariants({ size, className }))}
      {...props}
    />
  )
}
