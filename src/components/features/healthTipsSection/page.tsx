import { Card, CardBody, Button } from "@nextui-org/react"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const healthTips = [
  {
    id: 1,
    title: "Staying Healthy During Flu Season",
    excerpt: "Learn essential tips to protect yourself and your family during flu season.",
    category: "Wellness",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Understanding Your Medications",
    excerpt: "Important information about managing your prescriptions effectively.",
    category: "Medication",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Natural Immunity Boosters",
    excerpt: "Discover natural ways to strengthen your immune system.",
    category: "Natural Health",
    readTime: "6 min read",
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function HealthTipsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="relative bg-gradient-to-b from-white via-emerald-50/30 to-white py-24 sm:py-32" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute left-0 bottom-0 -z-10 h-96 w-96 opacity-20 blur-3xl" 
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
          <h2 className="bg-gradient-to-r from-gray-900 via-emerald-900 to-gray-900 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Health Tips & Resources
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Expert advice and information to help you maintain optimal health
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
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
          {healthTips.map((tip) => (
            <motion.div key={tip.id} variants={fadeIn}>
              <Card className="group bg-white/80 backdrop-blur-sm shadow-lg shadow-emerald-500/5 ring-1 ring-gray-900/5 transition-all hover:shadow-emerald-500/10 hover:ring-emerald-500/20">
                <CardBody className="p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2024-01" className="text-gray-500">
                      {tip.readTime}
                    </time>
                    <span className="relative z-10 rounded-full bg-emerald-50 px-3 py-1.5 font-medium text-emerald-600 ring-1 ring-inset ring-emerald-600/20">
                      {tip.category}
                    </span>
                  </div>
                  <div className="group relative mt-3">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {tip.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {tip.excerpt}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button
                      endContent={<ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                      variant="light"
                      color="primary"
                      className="bg-gradient-to-r from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200 group"
                    >
                      Read more
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
