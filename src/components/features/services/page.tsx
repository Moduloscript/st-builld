'use client'

import React, { useState, useRef } from 'react'
import { Container } from '@/components/ui/container'
import { SectionIntro } from '@/components/ui/section-intro'
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'
import Timeline from '@/components/ui/timeline'
import { 
  Pill, 
  Syringe, 
  Stethoscope, 
  ClipboardList 
} from 'lucide-react'

const DURATION = 0.4;
const STAGGER = 0.03;

const FlipText = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: STAGGER * i,
            }}
            className="inline-block text-green-500"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

const serviceImages = {
  prescription: '/services/prescription.jpg',
  consultation: '/services/consultation.jpg',
  nursing: '/services/nurse.jpg',
  records: '/services/records.jpg',
}

function ServiceImage({ service }: { service: typeof services[0] }) {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { 
    margin: "-100px",
    amount: 0.3 
  })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const width = useTransform(scrollYProgress, [0, 0.3, 1], [128, 400, 400])
  const height = useTransform(scrollYProgress, [0, 0.3, 1], [128, 400, 400])
  const borderRadius = useTransform(scrollYProgress, [0, 0.3, 1], [80, 30, 30])
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.95, 1.05, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1, 1])

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center justify-center relative min-h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute aspect-square h-36 overflow-hidden rounded-full blur-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1.2 : 0,
          opacity: isHovered ? 0.6 : 0
        }}
        transition={{
          duration: 0.6,
          ease: [0.32, 0.72, 0, 1]
        }}
      >
        <img
          src={service.image}
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        className="relative overflow-hidden"
        style={{
          width,
          height,
          borderRadius,
          scale,
          opacity
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20
        }}
        transition={{
          duration: 0.8,
          ease: [0.32, 0.72, 0, 1]
        }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full select-none object-cover"
        />

        <motion.div
          className="gradient-mask-t-50 absolute bottom-0 h-1/2 w-full bg-black/40 backdrop-blur-xl"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0, 1])
          }}
        />

        <motion.div
          className="absolute bottom-0 flex w-full flex-col items-start justify-center gap-1 p-5"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0, 1])
          }}
        >
          {isInView && (
            <>
              <motion.div
                className="text-2xl font-bold text-zinc-50"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <FlipText>{service.title}</FlipText>
              </motion.div>
              <motion.p
                className="text-sm text-zinc-200"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {service.description}
              </motion.p>
            </>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0])
        }}
        className="flex items-center justify-center mt-4 gap-1 whitespace-nowrap"
      >
        <motion.span
          className="text-3xl font-bold text-green-500"
        >
          {service.icon}
        </motion.span>
        {isHovered && (
          <motion.span
            className="font-semibold text-zinc-500"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.11, duration: 0.2 }}
          >
            <FlipText>{service.title}</FlipText>
          </motion.span>
        )}
      </motion.div>
    </div>
  )
}

const services = [
  {
    title: 'Prescription Services',
    icon: <Pill className="h-4 w-4" />,
    image: serviceImages.prescription,
    description: 'Expert prescription processing with thorough medication reviews, ensuring safety and accuracy. We offer convenient refill services and medication synchronization for your convenience.'
  },
  {
    title: 'Health Consultations',
    icon: <Stethoscope className="h-4 w-4" />,
    image: serviceImages.consultation,
    description: 'Professional health consultations with our experienced pharmacists for personalized care and advice.'
  },
  {
    title: 'Medication Management',
    icon: <Syringe className="h-4 w-4" />,
    image: serviceImages.nursing,
    description: 'Comprehensive medication therapy management, including detailed counseling on proper usage, potential interactions, and side effects monitoring for optimal health outcomes.'
  },
  {
    title: 'Healthcare Records',
    icon: <ClipboardList className="h-4 w-4" />,
    image: serviceImages.records,
    description: 'Secure and organized healthcare record management to ensure continuity of care and easy access to your medical history.'
  },
]

export default function ServicesSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const timelineData = services.map(service => ({
    title: service.title,
    icon: service.icon,
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8,
          ease: [0.32, 0.72, 0, 1]
        }}
        viewport={{ once: true }}
      >
        <div className="space-y-4">
          <ServiceImage service={service} />
          <motion.div 
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FlipText>{service.title}</FlipText>
            <p className="mt-2 text-sm text-gray-600">{service.description}</p>
          </motion.div>
        </div>
      </motion.div>
    )
  }))

  return (
    <section ref={containerRef} className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20
          }}
          transition={{
            duration: 0.8,
            ease: [0.32, 0.72, 0, 1]
          }}
        >
          <SectionIntro
            eyebrow="Our Services"
            title="Comprehensive Healthcare Solutions"
            className="mt-24 sm:mt-32 lg:mt-40"
          >
            <p>
              Experience our full range of pharmaceutical and healthcare services,
              designed to meet your unique needs with care and precision.
            </p>
          </SectionIntro>
        </motion.div>

        <div className="mt-16 lg:mt-20">
          <Timeline 
            data={timelineData}
            className="timeline-services"
            dotClassName="bg-emerald-100 ring-emerald-500"
            lineClassName="bg-emerald-200"
          />
        </div>
      </Container>
    </section>
  )
}
