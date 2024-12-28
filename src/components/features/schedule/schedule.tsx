"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ClockIcon, CalendarDaysIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { cn, cardStyles, motionConfig } from "@/lib/utils"
import Image from "next/image"
import { Logos } from "@/components/features/logos/logos"

interface ScheduleDay {
  day: string
  hours: string
  isToday: boolean
}

const schedule: ScheduleDay[] = [
  { day: "Monday", hours: "8:00 AM - 9:00 PM", isToday: false },
  { day: "Tuesday", hours: "8:00 AM - 9:00 PM", isToday: false },
  { day: "Wednesday", hours: "8:00 AM - 9:00 PM", isToday: false },
  { day: "Thursday", hours: "8:00 AM - 9:00 PM", isToday: false },
  { day: "Friday", hours: "8:00 AM - 9:00 PM", isToday: false },
  { day: "Saturday", hours: "9:00 AM - 7:00 PM", isToday: false },
  { day: "Sunday", hours: "10:00 AM - 6:00 PM", isToday: false },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const ScheduleDisplay = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Update isToday based on current day
  const currentDay = new Date().toLocaleDateString("en-US", { weekday: "long" })
  schedule.forEach((day) => {
    day.isToday = day.day === currentDay
  })

  return (
    <>
      <section ref={ref} className="relative -mt-20 px-4 pb-20 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[800px] w-[800px] rounded-full bg-emerald-50/50" />
          <div className="absolute -right-1/4 bottom-0 h-[800px] w-[800px] rounded-full bg-emerald-50/50" />
        </div>

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-2xl shadow-emerald-500/10 ring-1 ring-emerald-500/5 backdrop-blur-xl lg:p-12"
          >
            {/* Glass Morphism Background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/95" />
              <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
            </div>

            {/* Content */}
            <div className="relative">
              <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr]">
                {/* Left Column - Header and Schedule */}
                <div className="space-y-10">
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left"
                  >
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 text-white shadow-lg shadow-emerald-500/30">
                      <ClockIcon className="h-12 w-12" />
                      <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-white" />
                    </div>

                    <div className="flex-1">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Pharmacy Operating Hours
                      </h2>
                      <p className="mt-3 max-w-2xl text-lg text-gray-600">
                        We maintain consistent hours to ensure you always have access to essential healthcare services.
                      </p>
                    </div>
                  </motion.div>

                  {/* Schedule Grid */}
                  <motion.div variants={itemVariants}>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {schedule.map((day) => (
                        <motion.div
                          key={day.day}
                          variants={itemVariants}
                          className={cn(
                            "relative overflow-hidden rounded-xl p-4 transition-all",
                            day.isToday
                              ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white"
                              : "bg-white/50 backdrop-blur-sm hover:bg-emerald-50"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{day.day}</p>
                              <div className="mt-1 flex items-center gap-1.5">
                                <ClockIcon className="h-4 w-4 text-current opacity-70" />
                                <p className="text-sm opacity-90">{day.hours}</p>
                              </div>
                            </div>
                            {day.isToday && (
                              <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white">
                                Open Now
                              </span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Contact Card with Helpdesk Image */}
                <motion.div
                  variants={itemVariants}
                  className="relative flex flex-col overflow-hidden rounded-xl shadow-lg shadow-emerald-500/20"
                >
                  {/* Helpdesk Image Section */}
                  <div className="relative h-[300px] w-full overflow-hidden lg:h-[400px]">
                    <Image
                      src="/images/helpdesk.jpg"
                      alt="Pharmacy Helpdesk"
                      className="object-cover object-center"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Contact Information */}
                  <div className="relative flex flex-1 flex-col justify-end bg-white p-6">
                    <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Need assistance? Our dedicated team is here to help you.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <PhoneIcon className="h-5 w-5 text-emerald-600" />
                      <a
                        href="tel:+2348012345678"
                        className="text-lg font-medium text-emerald-600 hover:text-emerald-500"
                      >
                        +234 801 234 5678
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Add Logos section */}
      <Logos />
    </>
  )
}

export default ScheduleDisplay
