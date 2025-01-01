export { Star, Sparkles, Shield, CheckCircle } from 'lucide-react'

export function Flask(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 3h6M9 3v4.5M15 3v4.5M10 12l2 7.5 2-7.5M10.5 7.5h3" />
      <path d="M6 20c-1.5-1.5-3-3.4-3-6 0-4 3-7 3-7h12s3 3 3 7c0 2.6-1.5 4.5-3 6H6Z" />
    </svg>
  )
}
