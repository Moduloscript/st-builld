"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/buttons/button"
import { ArrowRightIcon, PhoneIcon, ShieldCheckIcon, BeakerIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function HeroSection() {
  const [imageError, setImageError] = useState(false)
  const [avatarError, setAvatarError] = useState(false)
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute right-0 top-0 -z-10 h-96 w-96 opacity-30 blur-3xl" 
          style={{ background: "radial-gradient(circle, rgba(5,150,105,0.4) 0%, rgba(5,150,105,0) 70%)" }} />
        <div className="absolute left-0 bottom-0 -z-10 h-96 w-96 opacity-20 blur-3xl" 
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(16,185,129,0) 70%)" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-10">
          {/* Content */}
          <div className="lg:max-w-lg">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                <ShieldCheckIcon className="mr-2 h-4 w-4 text-emerald-600" /> Trusted by Healthcare Professionals
              </div>
              <motion.h1
                className="bg-gradient-to-r from-gray-900 via-emerald-900 to-gray-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
                variants={fadeIn}
              >
                Your Health, Our Priority
              </motion.h1>
              <motion.p
                className="mt-6 text-lg leading-8 text-gray-600"
                variants={fadeIn}
                transition={{ delay: 0.4 }}
              >
                Experience modern healthcare solutions with St Peter&apos;s Pharmacy. We combine professional expertise with cutting-edge technology to provide you with the best pharmaceutical care.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
                variants={fadeIn}
                transition={{ delay: 0.6 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:from-emerald-700 hover:to-emerald-600">
                  Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="group border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50">
                  <PhoneIcon className="mr-2 h-4 w-4 text-emerald-600" />
                  Contact Sales
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                </Button>
              </motion.div>

              {/* Feature Grid */}
              <motion.div
                className="mt-10 grid grid-cols-2 gap-4"
                variants={fadeIn}
                transition={{ delay: 0.8 }}
              >
                <div className="group rounded-lg bg-white p-4 shadow-lg shadow-emerald-500/5 ring-1 ring-gray-900/5 transition-all hover:shadow-emerald-500/10 hover:ring-emerald-500/20">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30">
                      <BeakerIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-900">500+</p>
                      <p className="text-sm text-emerald-600">Medications</p>
                    </div>
                  </div>
                </div>
                <div className="group rounded-lg bg-white p-4 shadow-lg shadow-emerald-500/5 ring-1 ring-gray-900/5 transition-all hover:shadow-emerald-500/10 hover:ring-emerald-500/20">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30">
                      <UserGroupIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-900">10k+</p>
                      <p className="text-sm text-emerald-600">Happy Customers</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative h-[600px] w-full overflow-hidden rounded-2xl bg-gray-50 shadow-2xl shadow-emerald-500/20">
              {!imageError ? (
                <Image
                  src="/images/hero-image.jpg"
                  alt="Modern pharmacy interior"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  quality={100}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-emerald-50 p-12">
                  <BeakerIcon className="h-32 w-32 text-emerald-600" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-emerald-900/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              className="absolute -right-4 -top-4 rounded-xl bg-white/95 p-4 shadow-xl shadow-emerald-500/20 ring-1 ring-emerald-900/10 backdrop-blur-sm sm:-right-12 sm:top-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30">
                  <ShieldCheckIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-600">Licensed Pharmacy</p>
                  <p className="text-xl font-semibold text-emerald-900">Since 2010</p>
                </div>
              </div>
            </motion.div>

            {/* Additional Floating Elements */}
            <motion.div
              className="absolute -left-4 bottom-4 rounded-xl bg-white/95 p-4 shadow-xl shadow-emerald-500/20 ring-1 ring-emerald-900/10 backdrop-blur-sm sm:-left-12"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="flex items-center gap-4">
                {!avatarError ? (
                  <Image
                    src="/images/pharmacist.jpg"
                    alt="Professional Pharmacist"
                    width={48}
                    height={48}
                    className="rounded-full object-cover ring-2 ring-emerald-500/20"
                    onError={() => setAvatarError(true)}
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                    <UserGroupIcon className="h-6 w-6" />
                  </div>
                )}
                <div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-emerald-900">Professional Care</span>
                    <div className="ml-2 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-emerald-600">Available 24/7</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
