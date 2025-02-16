"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type Logo = {
  name: string
  logo: string
  width: number
  height: number
}

const logos: Logo[] = [
  {
    name: "Pfizer",
    logo: "/logos/pfizer.svg",
    width: 150,
    height: 40
  },
  {
    name: "GSK",
    logo: "/logos/gsk.svg",
    width: 140,
    height: 40
  },
  {
    name: "Novartis",
    logo: "/logos/novartis.svg",
    width: 150,
    height: 40
  },
  {
    name: "Sanofi",
    logo: "/logos/sanofi.svg",
    width: 150,
    height: 40
  },
  {
    name: "Roche",
    logo: "/logos/roche.svg",
    width: 150,
    height: 40
  },
  {
    name: "Johnson & Johnson",
    logo: "/logos/johnson-and-johnson.svg",
    width: 160,
    height: 40
  },
  {
    name: "Janssen",
    logo: "/logos/janssen.svg",
    width: 150,
    height: 40
  },
  {
    name: "AstraZeneca",
    logo: "/logos/astrazeneca.svg",
    width: 160,
    height: 40
  },
  {
    name: "Merck",
    logo: "/logos/merck.svg",
    width: 150,
    height: 40
  },
  {
    name: "Teva",
    logo: "/logos/teva.svg",
    width: 130,
    height: 40
  },
  {
    name: "Sandoz",
    logo: "/logos/sandoz.svg",
    width: 140,
    height: 40
  },
  {
    name: "Getz",
    logo: "/logos/getz.svg",
    width: 140,
    height: 40
  },
  {
    name: "Reckitt Benckiser",
    logo: "/logos/reckitt-benckiser.svg",
    width: 150,
    height: 40
  }
]

const LogoScroll = ({ logos }: { logos: Logo[] }) => {
  return (
    <div className="flex overflow-x-scroll gap-10 sm:gap-14">
      {logos.map((logo) => (
        <div 
          key={logo.name}
          className="flex min-w-[160px] items-center justify-center"
        >
          <div className="relative h-14 w-full">
            <Image
              src={logo.logo}
              alt={logo.name}
              fill
              className="object-contain filter transition-all duration-300 hover:brightness-110 dark:brightness-90 dark:hover:brightness-110"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export const Logos = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50/30 py-12 dark:from-zinc-950 dark:to-emerald-950/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-emerald-600 to-emerald-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl"
          >
            Trusted by Leading Healthcare Providers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400"
          >
            We partner with the world&apos;s most respected pharmaceutical companies to ensure quality healthcare delivery
          </motion.p>
        </div>

        {/* Logos Scroll */}
        <div className="relative mt-12">
          {/* Background Blur Effects */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
          </div>

          {/* Infinite Scroll Container */}
          <div className="relative mx-auto mask-linear-fade">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll gap-10 sm:gap-14">
                {logos.map((logo) => (
                  <div 
                    key={logo.name}
                    className="flex min-w-[160px] items-center justify-center"
                  >
                    <div className="relative h-14 w-full">
                      <Image
                        src={logo.logo}
                        alt={logo.name}
                        fill
                        className="object-contain filter transition-all duration-300 hover:brightness-110 dark:brightness-90 dark:hover:brightness-110"
                      />
                    </div>
                  </div>
                ))}
                {logos.map((logo) => (
                  <div 
                    key={`${logo.name}-duplicate`}
                    className="flex min-w-[160px] items-center justify-center"
                  >
                    <div className="relative h-14 w-full">
                      <Image
                        src={logo.logo}
                        alt={logo.name}
                        fill
                        className="object-contain filter transition-all duration-300 hover:brightness-110 dark:brightness-90 dark:hover:brightness-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 flex justify-center gap-8 sm:gap-12"
          >
            {[
              { label: "Years of Trust", value: "25+" },
              { label: "Partner Pharmacies", value: "500+" },
              { label: "Patient Satisfaction", value: "98%" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-transparent blur-3xl" />
      </div>
    </section>
  )
}
