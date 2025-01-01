"use client"

import { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, BellAlertIcon, ShieldCheckIcon, BeakerIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: BellAlertIcon,
    title: 'Medication Reminders',
    description: 'Never miss a dose with timely alerts'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Health Tips',
    description: 'Expert advice for your well-being'
  },
  {
    icon: BeakerIcon,
    title: 'Research Updates',
    description: 'Latest in pharmaceutical science'
  }
]

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      // Add newsletter subscription logic here
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 to-white dark:from-emerald-950/20 dark:to-zinc-950 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent sm:text-4xl">
              Your Health Journey, Guided by Experts
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Join our community of health-conscious individuals and stay updated with personalized insights.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12"
          >
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="relative group"
              >
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-emerald-500/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 space-y-4">
                  <feature.icon className="h-8 w-8 text-emerald-500 mx-auto" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
            <div className="absolute inset-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div
                className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-emerald-500/30 to-emerald-500/0 opacity-30"
                style={{
                  clipPath:
                    'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                }}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <div className="relative flex-grow">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  startContent={<EnvelopeIcon className="h-5 w-5 text-gray-400" />}
                  classNames={{
                    input: "h-12 text-base",
                    inputWrapper: "h-12 shadow-lg shadow-emerald-500/10"
                  }}
                />
              </div>
              <Button
                type="submit"
                color="primary"
                isLoading={status === 'loading'}
                className="h-12 px-8 font-semibold bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/50 transition-shadow"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
              </Button>
            </div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: status === 'success' || status === 'error' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-center"
          >
            {status === 'success' && (
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2">
                <ShieldCheckIcon className="h-5 w-5" />
                Thanks for subscribing! Check your email for confirmation.
              </p>
            )}
            
            {status === 'error' && (
              <p className="text-sm font-medium text-red-600 dark:text-red-400 flex items-center justify-center gap-2">
                <BellAlertIcon className="h-5 w-5" />
                Something went wrong. Please try again.
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
