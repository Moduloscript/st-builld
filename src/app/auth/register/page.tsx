import { RegisterForm } from '@/components/auth/RegisterForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Account - St Peter\'s Pharmacy',
  description: 'Create your St Peter\'s Pharmacy account',
}

export default function RegisterPage() {
  return <RegisterForm />
}
