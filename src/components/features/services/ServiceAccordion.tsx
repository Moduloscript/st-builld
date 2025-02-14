"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface ServiceContent {
  title: string;
  description: string[];
  image: string;
}

const services: {
  id: string;
  title: string;
  content: ServiceContent;
}[] = [
  {
    id: '01',
    title: 'Prescription Services',
    content: {
      title: 'Advanced Prescription Management and Dispensing Services',
      description: [
        'Our state-of-the-art prescription services ensure accurate and timely medication dispensing with advanced digital tracking systems. We provide comprehensive medication reviews and automated refill reminders to maintain your health regimen.',
        'Our experienced pharmacists offer personalized consultation services, helping you understand your medications, potential interactions, and optimal usage patterns. We maintain detailed electronic health records to track your prescription history and ensure safe medication combinations.',
        'We also offer specialized compounding services for patients requiring customized medication formulations, and our automated prescription alert system keeps you informed about refills, drug interactions, and important updates about your medications.'
      ],
      image: '/displayService/service1.jpg'
    }
  },
  {
    id: '02',
    title: 'Health Monitoring',
    content: {
      title: 'Comprehensive Health Monitoring and Wellness Services',
      description: [
        'Our health monitoring services include regular blood pressure checks, diabetes screening, cholesterol testing, and other vital health metrics. We provide ongoing health tracking and personalized wellness recommendations based on your specific health profile.',
        'Our certified healthcare professionals offer one-on-one consultations to discuss your health goals and create tailored wellness plans. We utilize advanced diagnostic tools and maintain detailed digital records to track your progress over time.',
        'Regular health assessments and preventive care recommendations help you maintain optimal health and identify potential issues early. We also provide vaccination services and seasonal health screenings to support your overall wellbeing.'
      ],
      image: '/displayService/service2.jpg'
    }
  },
  {
    id: '03',
    title: 'Medical Supplies',
    content: {
      title: 'Complete Range of Medical Supplies and Equipment',
      description: [
        'We stock a comprehensive range of medical supplies and equipment, from basic first aid materials to specialized medical devices. Our inventory includes mobility aids, wound care supplies, diabetes management tools, and home healthcare equipment.',
        'Our knowledgeable staff provides expert guidance on selecting the right medical supplies for your specific needs. We offer equipment fitting services and demonstrations to ensure proper usage and maximum benefit.',
        'We maintain relationships with leading medical supply manufacturers to provide you with the latest innovations in healthcare equipment and supplies, ensuring access to cutting-edge medical technology for home care.'
      ],
      image: '/displayService/service3.jpg'
    }
  },
  {
    id: '04',
    title: 'Wellness Programs',
    content: {
      title: 'Customized Wellness Programs and Health Education',
      description: [
        'Our wellness programs are designed to promote preventive healthcare and maintain optimal health. We offer nutrition counseling, weight management programs, smoking cessation support, and stress management techniques.',
        'Our certified health educators provide regular workshops and seminars on various health topics, helping you make informed decisions about your health. We create personalized wellness plans that align with your lifestyle and health goals.',
        'We also offer specialized programs for managing chronic conditions, including diabetes management, cardiovascular health, and respiratory care education.'
      ],
      image: '/displayService/service4.jpg'
    }
  },
  {
    id: '05',
    title: 'Emergency Services',
    content: {
      title: '24/7 Emergency Pharmaceutical Services',
      description: [
        'Our emergency pharmaceutical services ensure round-the-clock access to essential medications and healthcare support. We maintain an extensive inventory of emergency medications and supplies for immediate access when needed.',
        'Our trained emergency response team is available 24/7 to handle urgent medication needs and provide critical healthcare support. We coordinate with healthcare providers to ensure continuous care during emergencies.',
        'We also offer emergency consultation services and maintain emergency protocols for rapid response to critical healthcare situations.'
      ],
      image: '/displayService/service5.jpg'
    }
  },
  {
    id: '06',
    title: 'Digital Healthcare',
    content: {
      title: 'Advanced Digital Healthcare Solutions',
      description: [
        'Our digital healthcare platform provides convenient access to your health information and prescription services. Features include online prescription refills, medication reminders, and secure communication with our healthcare team.',
        'We offer telehealth consultations for minor health concerns and medication reviews, making healthcare more accessible. Our mobile app allows you to manage prescriptions, track health metrics, and access important health resources.',
        'Our digital platform integrates with various health monitoring devices and apps, providing a comprehensive view of your health status and enabling better healthcare management.'
      ],
      image: '/displayService/service6.jpg'
    }
  }
]

export function ServiceAccordion() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div className="space-y-px">
      {services.map((service) => (
        <div 
          key={service.id} 
          className="border-b border-gray-200 group hover:bg-gray-50 transition-colors duration-200"
        >
          <button
            onClick={() => setActiveId(activeId === service.id ? null : service.id)}
            className="flex w-full items-center justify-between py-6 text-left"
          >
            <div className="flex items-center">
              <span className="text-2xl font-light text-gray-400 w-16 group-hover:text-emerald-600">{service.id}</span>
              <span className="text-2xl font-medium text-gray-900 group-hover:text-emerald-700">{service.title}</span>
            </div>
            <div className={`relative h-6 w-6 transition-transform duration-200 ${
              activeId === service.id ? 'rotate-45' : ''
            }`}>
              {activeId === service.id ? (
                <MinusIcon className="h-6 w-6 text-gray-500 group-hover:text-emerald-600" />
              ) : (
                <PlusIcon className="h-6 w-6 text-gray-500 group-hover:text-emerald-600" />
              )}
            </div>
          </button>
          <AnimatePresence>
            {activeId === service.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-gray-100"
              >
                <div className="p-8">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Text Content */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-medium text-gray-900">
                        {service.content.title}
                      </h3>
                      <div className="space-y-4">
                        {service.content.description.map((paragraph, idx) => (
                          <p key={idx} className="text-gray-600 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                    
                    {/* Image Section */}
                    <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                      <Image
                        src={service.content.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
