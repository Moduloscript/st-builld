"use client"

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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Stay Updated with St Peter's Pharmacy
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Join our newsletter for health tips, wellness advice, and pharmacy updates.
            </p>
          </motion.div>

          {/* Static Form */}
          <div className="mt-10">
            <form action="https://formspree.io/f/your-form-id" method="POST" className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-auto"
                startContent={<EnvelopeIcon className="h-5 w-5 text-gray-400" />}
              />
              <Button
                type="submit"
                className="bg-emerald-600 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-emerald-600"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Features Grid */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <feature.icon className="h-5 w-5 flex-none text-emerald-600" aria-hidden="true" />
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
