import { Container } from '@/components/ui/container'
import { GradientBackground } from '@/components/ui/gradient'
import { Heading, Lead, Subheading } from '@/components/ui/typography'
import { motion, useInView, useSpring, useTransform, animate, useMotionValue } from 'framer-motion'
import { HeartIcon, LightBulbIcon, UsersIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2 }: CounterProps) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (inView) {
      animate(motionValue, end, {
        duration: duration,
        ease: "easeOut",
      });
    }
  }, [inView, end, duration, motionValue]);

  return (
    <motion.span ref={nodeRef} className="inline-flex">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}

function ImpactNumber({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  return (
    <div className="flex flex-col gap-y-2 border-b border-dotted border-emerald-100 pb-4 group">
      <dt className="text-sm/6 text-gray-600 transition-colors group-hover:text-emerald-600">{label}</dt>
      <dd className="order-first text-6xl font-medium tracking-tight text-emerald-700">
        <Counter end={value} suffix={suffix} />
      </dd>
    </div>
  );
}

function MissionHeader() {
  const impactData = [
    { label: "Years of Service", value: 25, suffix: "+" },
    { label: "Patients Served", value: 50000, suffix: "K+" },
    { label: "Health Programs", value: 20, suffix: "+" },
    { label: "Community Partners", value: 15, suffix: "+" }
  ];

  return (
    <Container className="mt-16">
      <Heading as="h1">Empowering Health Through Accessible Care</Heading>
      <Lead className="mt-6 max-w-3xl text-gray-600">
        We&apos;re on a mission to transform healthcare delivery by combining modern pharmaceutical
        services with personalized care and education.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight text-emerald-800">Our Mission</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            At St. Peter&apos;s Pharmacy, we are dedicated to revolutionizing the pharmacy experience
            through personalized care, education, and innovative health solutions. Our mission
            is to be more than just a pharmacy – we strive to be a trusted healthcare partner
            in our community&apos;s wellness journey.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            We believe in patient-centered care — taking the time to understand each individual&apos;s
            unique health needs and providing tailored solutions. Through our comprehensive
            services, from prescription management to health education, we ensure that every
            patient receives the attention and care they deserve.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-emerald-100/50">
              <img
                alt="Pharmacist consulting with patient"
                src="/mission/mission-1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-emerald-100/50 lg:-mt-32">
              <img
                alt="Modern pharmacy interior"
                src="/mission/mission-2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-emerald-100/50">
              <img
                alt="Health education session"
                src="/mission/mission-3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-emerald-100/50 lg:-mt-32">
              <img
                alt="Digital prescription services"
                src="/mission/mission-4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Subheading>Our Impact</Subheading>
            <hr className="mt-6 border-t border-emerald-100" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {impactData.map((item, index) => (
                <ImpactNumber
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  suffix={item.suffix}
                />
              ))}
            </dl>
          </motion.div>
        </div>
      </section>
    </Container>
  )
}

function Values() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const valueCards = [
    {
      title: "Patient-Centered Care",
      description: "We put our patients first, ensuring personalized attention and care that addresses individual health needs and concerns.",
      icon: HeartIcon,
      gradient: "from-rose-400 to-red-600",
      shadowColor: "shadow-rose-200"
    },
    {
      title: "Innovation in Healthcare",
      description: "We embrace modern technology and innovative solutions to enhance the pharmacy experience and improve health outcomes.",
      icon: LightBulbIcon,
      gradient: "from-amber-400 to-orange-600",
      shadowColor: "shadow-amber-200"
    },
    {
      title: "Community Wellness",
      description: "We're committed to promoting health education and preventive care to build a healthier community.",
      icon: UsersIcon,
      gradient: "from-emerald-400 to-teal-600",
      shadowColor: "shadow-emerald-200"
    }
  ]

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Subheading>Our Values</Subheading>
        <Heading as="h2" className="mt-4 max-w-2xl mx-auto">
          Guided by Care and Innovation
        </Heading>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-3"
      >
        {valueCards.map((card, index) => (
          <motion.div
            key={card.title}
            variants={cardVariants}
            whileHover="hover"
            className={`rounded-2xl bg-white p-8 shadow-lg ${card.shadowColor} relative overflow-hidden group`}
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} p-2.5 mb-6`}>
                <card.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
              
              {/* Interactive element */}
              <motion.div 
                className="mt-6 inline-flex items-center text-sm font-medium text-gray-900"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Learn more
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  )
}

export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <GradientBackground className="from-emerald-50" />
      <MissionHeader />
      <Values />
    </section>
  )
}
