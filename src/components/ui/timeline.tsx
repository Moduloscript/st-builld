"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export interface TimelineProps {
  data: Array<{
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
  }>;
  className?: string;
  dotClassName?: string;
  lineClassName?: string;
}

const Timeline: React.FC<TimelineProps> = ({ 
  data, 
  className = "", 
  dotClassName = "bg-green-500",
  lineClassName = "bg-green-500"
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      {/* Timeline line */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className={`absolute left-[20px] md:left-1/2 h-full w-[2px] origin-top ${lineClassName}`}
      />

      <div className="relative">
        {data.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={item.title} className="mb-12 md:mb-24 last:mb-0">
              <div
                className={`flex flex-col md:flex-row gap-8 md:gap-24 relative ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Title section */}
                <div className="flex-1 md:text-right pl-16 md:pl-0 md:pr-12">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring" }}
                    className="sticky top-4"
                  >
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                  </motion.div>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-2 md:mt-0">
                  <div
                    className={`w-12 h-12 rounded-full ${dotClassName} flex items-center justify-center ring-4 ring-offset-4 shadow-lg`}
                  >
                    {item.icon || <CheckCircleIcon className="w-7 h-7 text-white" />}
                  </div>
                </div>

                {/* Content section */}
                <div className="flex-1 pl-16 md:pl-12">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    <div className="prose prose-green max-w-none prose-lg">
                      {item.content}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
