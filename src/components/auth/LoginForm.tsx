'use client'

import { Button, Input, Link as NextUILink, Divider } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '@/lib/auth/hooks/useAuth'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { signIn, signInWithProvider } = useAuth()

  const toggleVisibility = () => setIsVisible(!isVisible)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await signIn(email, password)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialSignIn = async (provider: 'google' | 'facebook') => {
    setError('')
    try {
      await signInWithProvider(provider)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h1 className={`text-2xl font-bold text-center ${poppins.className}`}>Welcome Back</h1>
        <p className="text-center text-default-500">
          Sign in to access your account
        </p>
      </div>

      {error && (
        <div className="p-4 text-sm text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        </div>
      )}

      <div className="space-y-4">
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          startContent={<Mail className="text-emerald-600 dark:text-emerald-400" size={18} />}
          variant="bordered"
          classNames={{
            label: "text-default-600 font-medium",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-500",
            ],
            inputWrapper: [
              "border-emerald-500/20",
              "hover:border-emerald-500",
              "focus-within:border-emerald-500",
              "dark:focus-within:border-emerald-400",
            ],
          }}
          isRequired
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          startContent={<Lock className="text-emerald-600 dark:text-emerald-400" size={18} />}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeOff className="text-default-400" size={18} />
              ) : (
                <Eye className="text-default-400" size={18} />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          variant="bordered"
          classNames={{
            label: "text-default-600 font-medium",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-500",
            ],
            inputWrapper: [
              "border-emerald-500/20",
              "hover:border-emerald-500",
              "focus-within:border-emerald-500",
              "dark:focus-within:border-emerald-400",
            ],
          }}
          isRequired
        />

        <div className="flex justify-end">
          <Link
            href="/auth/forgot-password"
            className="text-sm text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium"
        size="lg"
        isLoading={isLoading}
      >
        Sign In
      </Button>

      <div className="relative">
        <Divider className="my-4" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-content1 px-2 text-default-500 text-sm">
          Or continue with
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          className="w-full bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-200 group"
          variant="bordered"
          startContent={
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
            </svg>
          }
          onClick={() => handleSocialSignIn('google')}
        >
          <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
            Google
          </span>
        </Button>

        <Button
          className="w-full bg-[#1877F2] hover:bg-[#0C63D4] text-white transition-all duration-200"
          variant="flat"
          startContent={
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" 
                fill="currentColor"/>
            </svg>
          }
          onClick={() => handleSocialSignIn('facebook')}
        >
          <span>
            Facebook
          </span>
        </Button>
      </div>

      <div className="text-center text-sm">
        <p className="text-default-500">
          Don&apos;t have an account?{' '}
          <Link
            href="/auth/register"
            className="text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  )
}
