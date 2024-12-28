"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const PharmacyFeatures = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white">
      <TextParallaxContent
        imgUrl="/images/customer-care.jpg"
        subheading="Customer First"
        heading="Personalized Care"
        overlayColor="bg-teal-950/60"
      >
        <FeatureContent
          title="Dedicated Customer Service"
          description="Our commitment to exceptional customer care sets us apart. Every interaction is an opportunity to demonstrate our dedication to your health and well-being."
          description2="Experience personalized attention from our trained healthcare professionals who understand your unique needs and provide tailored solutions."
          buttonText="Meet Our Team"
          buttonColor="bg-teal-600 hover:bg-teal-700"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="/images/delivery-fleet.jpg"
        subheading="Swift Delivery"
        heading="Reliable Distribution"
        overlayColor="bg-emerald-950/60"
      >
        <FeatureContent
          title="Advanced Logistics Network"
          description="Our state-of-the-art delivery fleet ensures your medications reach you promptly and safely. We maintain strict quality controls throughout the delivery process."
          description2="Track your deliveries in real-time and receive instant updates about your order status through our advanced tracking system."
          buttonText="Track Order"
          buttonColor="bg-emerald-600 hover:bg-emerald-700"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="/images/warehouse.jpg"
        subheading="Quality Assured"
        heading="Modern Warehousing"
        overlayColor="bg-cyan-950/60"
      >
        <FeatureContent
          title="State-of-the-Art Storage"
          description="Our temperature-controlled warehouses maintain the perfect environment for medication storage. We utilize advanced inventory management systems to ensure product quality and availability."
          description2="Every product is carefully monitored and stored according to pharmaceutical grade standards, guaranteeing safety and efficacy."
          buttonText="Learn More"
          buttonColor="bg-cyan-600 hover:bg-cyan-700"
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 16;

const TextParallaxContent = ({ imgUrl, subheading, heading, overlayColor, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      className="py-12"
    >
      <div className="relative h-[140vh]">
        <StickyImage imgUrl={imgUrl} overlayColor={overlayColor} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl, overlayColor }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 4]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
        filter: blur.get() > 0 ? `blur(${blur.get()}px)` : undefined,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-[2rem] shadow-2xl transition-all duration-700 ease-out"
    >
      <motion.div
        className={`absolute inset-0 ${overlayColor} transition-opacity duration-500`}
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <motion.p 
        className="mb-2 text-center text-xl font-light tracking-wider md:mb-4 md:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {subheading}
      </motion.p>
      <motion.p 
        className="text-center text-5xl font-bold tracking-tight md:text-7xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {heading}
      </motion.p>
    </motion.div>
  );
};

const FeatureContent = ({ title, description, description2, buttonText, buttonColor }) => (
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-24 pt-16 md:grid-cols-12">
    <motion.h2 
      className="col-span-1 text-3xl font-bold tracking-tight text-gray-900 md:col-span-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>
    <motion.div 
      className="col-span-1 md:col-span-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p className="mb-4 text-xl leading-relaxed text-gray-600 md:text-2xl">
        {description}
      </p>
      <p className="mb-8 text-xl leading-relaxed text-gray-600 md:text-2xl">
        {description2}
      </p>
      <button className={`group w-full rounded-lg ${buttonColor} px-9 py-4 text-xl text-white transition-all duration-300 ease-out hover:shadow-lg md:w-fit`}>
        {buttonText}{" "}
        <FiArrowUpRight className="inline transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </motion.div>
  </div>
);

export default function FeaturePage(): JSX.Element {
  return (
    <div>
      <PharmacyFeatures />
    </div>
  )
}
