import { EnvelopeIcon, PhoneIcon, MapPinIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { ContactForm } from './ContactForm'

export function ContactSection() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Email Us */}
        <div className="rounded-2xl border border-accent-200/70 bg-card p-8 shadow-md transition-all hover:scale-105">
          <div className="flex gap-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10">
              <EnvelopeIcon className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
              <p className="mt-2 text-base text-gray-600">Our team is ready to assist</p>
              <p className="mt-4 text-base text-green-700 hover:text-green-800">
                <a href="mailto:contact@stpeters.com">contact@stpeters.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Live Chat Support */}
        <div className="rounded-2xl border border-accent-200/70 bg-card p-8 shadow-md transition-all hover:scale-105">
          <div className="flex gap-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Live Chat Support</h3>
              <p className="mt-2 text-base text-gray-600">Reach out for quick help</p>
              <button className="mt-4 text-base text-green-700 hover:text-green-800">
                Start a new chat
              </button>
            </div>
          </div>
        </div>

        {/* Visit Us */}
        <div className="rounded-2xl border border-accent-200/70 bg-card p-8 shadow-md transition-all hover:scale-105">
          <div className="flex gap-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10">
              <MapPinIcon className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
              <p className="mt-2 text-base text-gray-600">Drop by our office for a chat</p>
              <p className="mt-4 text-base text-gray-600">
                123 Pharmacy Street<br />
                City, State 12345
              </p>
            </div>
          </div>
        </div>

        {/* Call Us */}
        <div className="rounded-2xl border border-accent-200/70 bg-card p-8 shadow-md transition-all hover:scale-105">
          <div className="flex gap-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10">
              <PhoneIcon className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
              <p className="mt-2 text-base text-gray-600">Mon-Fri, 9am-5pm</p>
              <p className="mt-4 text-base text-green-700 hover:text-green-800">
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  )
}
