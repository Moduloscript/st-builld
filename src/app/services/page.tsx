"use client"
import { ServiceCards } from "@/components/features/services/ServiceCards";
import { ComplianceSection } from "@/components/features/services/ComplianceSection";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { motion } from "framer-motion";
import { ServiceAccordion } from "@/components/features/services/ServiceAccordion";
import Footer from "@/components/layouts/footer/page";

export default function ServicesPage() {
  const serviceDescriptions = [
    "Comprehensive pharmaceutical care tailored to your needs",
    "Professional health consultations and medication reviews",
    "24/7 emergency services for your peace of mind",
    "Personalized wellness programs and health monitoring"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-emerald-900/80 min-h-[90vh] flex items-center justify-center py-24 sm:py-28 md:py-32 lg:py-36">
          <div 
            className="absolute inset-0 bg-[url('/welcome/login-image.jpg')] bg-cover bg-center opacity-30"
            style={{ 
              backgroundPosition: 'center 30%' 
            }}
          />
          
          <div className="relative w-full">
            <div className="text-center space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-display"
              >
                Our{' '}
                <span className="relative whitespace-nowrap">
                  <motion.svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute left-0 top-2/3 h-[0.7em] w-full fill-emerald-300/90"
                    preserveAspectRatio="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      pathLength: { duration: 1.5, ease: "easeInOut" },
                      opacity: { duration: 0.5 }
                    }}
                  >
                    <motion.path
                      d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                  <motion.span
                    className="relative text-emerald-50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Healthcare
                  </motion.span>
                </span>{' '}
                Services
              </motion.h1>
              <div className="mx-auto max-w-2xl text-xl md:text-2xl text-emerald-100 px-4 sm:px-6">
                <TypewriterText 
                  words={serviceDescriptions}
                  className="font-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Cards Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceCards />
      </div>

      {/* Compliance Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ComplianceSection />
      </div>

      {/* Service Accordion Section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceAccordion />
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-emerald-50 px-6 py-16 sm:p-16">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-emerald-900 font-display">
                Committed to Your Well-being
              </h2>
              <p className="mt-4 text-lg leading-8 text-emerald-700">
                At St Peter&apos;s Pharmacy, we combine modern healthcare solutions with personalized attention. 
                Our team of experienced pharmacists is dedicated to providing you with the highest quality of care.
              </p>
              <div className="mt-10">
                <a
                  href="/contact"
                  className="rounded-md bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
