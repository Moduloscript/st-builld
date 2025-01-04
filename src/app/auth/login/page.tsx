import { LoginForm } from '@/components/auth/LoginForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In - St Peter\'s Pharmacy',
  description: 'Sign in to your St Peter\'s Pharmacy account',
}

export default function LoginPage() {
  return <LoginForm />
}
