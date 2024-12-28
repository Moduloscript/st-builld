import { useState } from 'react'
import { Button, Input } from '@nextui-org/react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      // Add newsletter subscription logic here
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="bg-emerald-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stay Healthy & Informed
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Subscribe to our newsletter for health tips, medication guides, and pharmacy updates.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-10 flex max-w-md mx-auto gap-x-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="min-w-0 flex-auto"
          />
          <Button
            type="submit"
            color="primary"
            isLoading={status === 'loading'}
            className="flex-none"
          >
            Subscribe
          </Button>
        </form>
        
        {status === 'success' && (
          <p className="mt-4 text-sm text-green-600 text-center">
            Thanks for subscribing! Check your email for confirmation.
          </p>
        )}
        
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-600 text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  )
}
