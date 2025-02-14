'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200/70 p-8 lg:p-10 shadow-sm">
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <label htmlFor="firstName" className="block text-base font-medium text-gray-900 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-600 focus:ring-green-600"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-base font-medium text-gray-900 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-600 focus:ring-green-600"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-base font-medium text-gray-900 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-600 focus:ring-green-600"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-base font-medium text-gray-900 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-600 focus:ring-green-600 resize-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>

        <div className="flex items-center">
          <input
            id="privacy-policy"
            name="privacy-policy"
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300 text-green-700 focus:ring-green-600"
            required
          />
          <label htmlFor="privacy-policy" className="ml-3 block text-base text-gray-900">
            I agree to the{' '}
            <a href="/privacy-policy" className="font-medium text-green-700 hover:text-green-800">
              privacy policy
            </a>
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  )
}
