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
            <div key={item.title} className="mb-8 md:mb-16 last:mb-0">
              <div
                className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Title section */}
                <div className="flex-1 md:text-right pl-12 md:pl-0">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring" }}
                    className="sticky top-4"
                  >
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                  </motion.div>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                  <div
                    className={`w-10 h-10 rounded-full ${dotClassName} flex items-center justify-center ring-2 ring-offset-2`}
                  >
                    {item.icon || <CheckCircleIcon className="w-6 h-6 text-white" />}
                  </div>
                </div>

                {/* Content section */}
                <div className="flex-1 pl-12 md:pl-0">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    <div className="prose prose-green max-w-none">
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
