'use client'

import React from "react";
import { ArrowRight } from 'lucide-react';
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import { AnimatedImageGrid } from "@/components/ui/AnimatedImageGrid";

export const ComplianceSection = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Main Header */}
        <div className="text-[3.5rem] leading-[1.2] font-bold tracking-tight text-gray-900 max-w-4xl mb-16">
          <SplitTextReveal 
            text="Streamline your healthcare journey while ensuring quality and building trust in pharmaceutical care."
            className="font-display"
            threshold={0.4}
          />
        </div>

        {/* Subheader and Images Row */}
        <div className="flex items-center gap-16">
          {/* How St Peter's Help You */}
          <div className="flex items-center gap-4 w-[25%]">
            <span className="text-2xl font-medium text-gray-900">How St Peter's help you</span>
            <ArrowRight className="h-8 w-8 text-gray-900" strokeWidth={1.5} />
          </div>

          <AnimatedImageGrid
            images={[
              {
                src: "/displayService/Health Monitoring.jpg",
                alt: "Comprehensive Health Monitoring"
              },
              {
                src: "/displayService/wholesale & Retail.jpg",
                alt: "Professional Pharmacy Services"
              },
              {
                src: "/displayService/prescription services.jpg",
                alt: "Expert Prescription Management"
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
};
