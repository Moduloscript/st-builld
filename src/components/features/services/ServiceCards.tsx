'use client'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Pill, Clock4, UserRound, Users, Store, Activity, Sparkles } from 'lucide-react';
import clsx from 'clsx';

export const ServiceCards = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900">
      <div
        className="absolute inset-0 bg-[url('/images/background-pattern.svg')] bg-[length:40px_40px] bg-repeat bg-center opacity-[0.15]"
        style={{
          mask: 'linear-gradient(180deg, transparent 0%, white 5%, white 95%, transparent 100%)',
          WebkitMask: 'linear-gradient(180deg, transparent 0%, white 5%, white 95%, transparent 100%)',
          color: 'currentColor'
        }}
      />
      <div className="absolute -left-80 top-0 transform">
        <div className="absolute h-[800px] w-[800px] rounded-full bg-emerald-500 opacity-20 blur-3xl" />
        <div className="absolute h-[600px] w-[600px] rounded-full bg-emerald-300 opacity-20 blur-2xl" />
      </div>

      <motion.div 
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-40 sm:py-44 lg:py-48"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg text-3xl font-semibold md:text-4xl text-white"
          >
            Professional Healthcare Services at
            <span className="text-emerald-300"> St Peter's Pharmacy</span>
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="whitespace-nowrap rounded-md bg-white px-6 py-3 font-medium text-emerald-900 transition-colors hover:bg-emerald-50 flex items-center gap-2"
          >
            Schedule Consultation <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>

        {/* First Row */}
        <div className="mb-8 grid grid-cols-12 gap-6">
          {/* Prescription Services */}
          <ServiceCard 
            className="col-span-12 md:col-span-4"
            icon={<Pill className="h-6 w-6 text-emerald-400" />}
            title="Prescription Services"
            description="Expert medication management and refill services with personalized care"
          />

          {/* Consultation Services */}
          <ServiceCard 
            className="col-span-12 md:col-span-8"
            icon={<Users className="h-6 w-6 text-emerald-400" />}
            title="Consultation Services"
            description="Professional health consultations and medication reviews by certified pharmacists"
          />
        </div>

        {/* Second Row */}
        <div className="mb-8 grid grid-cols-12 gap-6">
          {/* Wholesale and Retail */}
          <ServiceCard 
            className="col-span-12 md:col-span-8"
            icon={<Store className="h-6 w-6 text-emerald-400" />}
            title="Wholesale & Retail"
            description="Bulk supplies for healthcare facilities and retail services for individuals"
          />

          {/* Health Monitoring */}
          <ServiceCard 
            className="col-span-12 md:col-span-4"
            icon={<Activity className="h-6 w-6 text-emerald-400" />}
            title="Health Monitoring"
            description="Regular health check-ups and vital signs monitoring services"
          />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-12 gap-6">
          {/* Emergency Services */}
          <ServiceCard 
            className="col-span-12 md:col-span-4"
            icon={<Clock4 className="h-6 w-6 text-emerald-400" />}
            title="Emergency Services"
            description="24/7 emergency pharmaceutical services for urgent medical needs"
          />

          {/* Personalized Care */}
          <ServiceCard 
            className="col-span-12 md:col-span-8"
            icon={<UserRound className="h-6 w-6 text-emerald-400" />}
            title="Personalized Care"
            description="Tailored healthcare solutions and medication plans for individual needs"
          />
        </div>
      </motion.div>
    </section>
  );
};

// Update the ServiceCard component with a new design
const ServiceCard = ({ className, icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={clsx(
        'group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm px-8 py-8 transition-all hover:bg-white/10',
        'ring-1 ring-inset ring-white/10',
        className
      )}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="mt-4 text-base text-emerald-100/90">{description}</p>
      </div>
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl transition-all group-hover:bg-emerald-500/20" />
    </motion.div>
  );
};
