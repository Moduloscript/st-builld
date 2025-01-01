import { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { WorldMap } from '@/components/ui/world-map'

const locations = [
  {
    id: 1,
    name: "St Peter's Pharmacy - Main Branch",
    address: "123 Health Street, Medical District, Benin City",
    hours: "Mon-Sat: 8AM-9PM, Sun: 9AM-6PM",
    phone: "+234 123 456 7890",
    coordinates: { lat: 6.3350, lng: 5.6037 }, // Benin City coordinates
  },
  {
    id: 2,
    name: "St Peter's Pharmacy - West End",
    address: "456 Wellness Avenue, GRA, Benin City",
    hours: "Mon-Sat: 8AM-8PM, Sun: 9AM-5PM",
    phone: "+234 123 456 7891",
    coordinates: { lat: 6.3389, lng: 5.6268 }, // Another Benin City location
  },
  {
    id: 3,
    name: "St Peter's Pharmacy - Ring Road",
    address: "789 Medical Plaza, Ring Road, Benin City",
    hours: "Mon-Sat: 8AM-10PM, Sun: 9AM-7PM",
    phone: "+234 123 456 7892",
    coordinates: { lat: 6.3406, lng: 5.6145 }, // Ring Road area
  },
]

const mapDots = [
  {
    start: { lat: 6.3350, lng: 5.6037 },
    end: { lat: 6.3389, lng: 5.6268 },
  },
  {
    start: { lat: 6.3389, lng: 5.6268 },
    end: { lat: 6.3406, lng: 5.6145 },
  },
  {
    start: { lat: 6.3406, lng: 5.6145 },
    end: { lat: 6.3350, lng: 5.6037 },
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function LocationFinder() {
  const [searchQuery, setSearchQuery] = useState('')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const filteredLocations = locations.filter(location =>
    location.address.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 py-24 sm:py-32" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 opacity-20 blur-3xl" 
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(16,185,129,0) 70%)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Find a Location Near You
          </h2>
          <p className="mt-4 text-lg leading-8 text-emerald-300">
            Visit us at any of our convenient locations in Benin City
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-xl mx-auto"
        >
          <Input
            type="text"
            placeholder="Search by area or address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startContent={<MapPinIcon className="w-5 h-5 text-emerald-500" />}
            className="w-full"
            classNames={{
              input: "bg-emerald-800/50 text-white placeholder:text-emerald-300",
              inputWrapper: "shadow-lg shadow-emerald-900/50 ring-1 ring-emerald-700 hover:ring-emerald-600 transition-all duration-300"
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-xl bg-emerald-800/30 p-4 backdrop-blur-sm ring-1 ring-emerald-700"
        >
          <WorldMap dots={mapDots} lineColor="#10B981" />
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredLocations.map((location) => (
            <motion.div
              key={location.id}
              variants={fadeIn}
              className="group"
            >
              <div className="rounded-lg bg-emerald-800/30 backdrop-blur-sm p-8 shadow-lg shadow-emerald-900/50 ring-1 ring-emerald-700 transition-all duration-300 hover:shadow-emerald-800/50 hover:ring-emerald-600">
                <h3 className="text-lg font-semibold text-white">
                  {location.name}
                </h3>
                <address className="mt-4 text-sm not-italic text-emerald-300 space-y-2">
                  <p className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-emerald-500" />
                    {location.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {location.hours}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {location.phone}
                  </p>
                </address>
                <div className="mt-6">
                  <Button
                    color="primary"
                    variant="flat"
                    startContent={<MapPinIcon className="w-4 h-4" />}
                    className="bg-emerald-600 text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-500 hover:shadow-emerald-900/30 transition-all duration-300 group"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">Get Directions</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
