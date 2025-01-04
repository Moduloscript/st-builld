import type { Metadata } from 'next'
import { Card, CardBody } from '@nextui-org/react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Authentication - St Peter\'s Pharmacy',
  description: 'Login or create an account to access personalized features',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8 bg-[#004D40] dark:bg-[#00332B]">
        <Card className="w-full max-w-md bg-white/95 dark:bg-gray-900/95 shadow-xl">
          <CardBody className="px-8 py-10 space-y-6">
            <div className="flex justify-center mb-4">
              <div className="relative h-12 w-48">
                <Image
                  src="/images/logo-dark.png"
                  alt="St Peter's Pharmacy"
                  fill
                  className="object-contain hidden dark:block"
                  priority
                />
                <Image
                  src="/images/logo-light.png"
                  alt="St Peter's Pharmacy"
                  fill
                  className="object-contain block dark:hidden"
                  priority
                />
              </div>
            </div>
            {children}
          </CardBody>
        </Card>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#004D40] dark:bg-[#00332B]">
        <div className="absolute inset-0">
          <Image
            src="/welcome/login-image.jpg"
            alt="Welcome to St Peter's Pharmacy"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 to-emerald-900/50" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-lg text-white space-y-6 z-10">
            <h2 className={`text-4xl font-bold ${poppins.className}`}>
              Your Health, Our Priority
            </h2>
            <p className="text-lg text-emerald-50 leading-relaxed">
              Join our community to access personalized health services, exclusive offers,
              and expert medical advice from our dedicated team of professionals.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-emerald-800/30 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 rounded-lg bg-emerald-500/20">
                    <svg className="w-5 h-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <h3 className={`font-semibold text-xl ${poppins.className}`}>24/7 Support</h3>
                </div>
                <p className="text-emerald-100/80">Expert healthcare advice available anytime, anywhere</p>
              </div>
              <div className="bg-emerald-800/30 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 rounded-lg bg-emerald-500/20">
                    <svg className="w-5 h-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </span>
                  <h3 className={`font-semibold text-xl ${poppins.className}`}>Fast Delivery</h3>
                </div>
                <p className="text-emerald-100/80">Quick and secure medication delivery to your doorstep</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
