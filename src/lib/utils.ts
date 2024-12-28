import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Shared component styles
export const cardStyles = {
  base: "relative overflow-hidden rounded-2xl border bg-gradient-to-br from-background/50 to-background/80 p-6",
  interactive: "transition-all duration-200 hover:border-primary/20 hover:shadow-lg",
  highlighted: "border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10",
}

export const motionConfig = {
  // Fade in animation
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },
  // Fade up animation
  fadeInUp: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  // Blur animation
  blur: {
    initial: { filter: "blur(2px)" },
    animate: { filter: "blur(0px)" },
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.25 }
  },
  // Stagger children
  staggerChildren: {
    animate: { transition: { staggerChildren: 0.1 } }
  }
}
