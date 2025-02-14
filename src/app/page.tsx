"use client";

import HeroSection from "@/components/layouts/hero/page";
import { ScheduleDisplay } from "@/components/features/schedule"
import { PharmacyFeatures } from "@/components/features/feature/page";
import NewsletterSignup from "@/components/features/newsletterSignup/page";
import HealthTipsSection from "@/components/features/healthTipsSection/page";
import ServicesSection from "@/components/features/services/page";
import FeaturedProducts from '@/components/features/featuredProducts/page'
import Footer from "@/components/layouts/footer/page";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ScheduleDisplay />
      <PharmacyFeatures />
      <ServicesSection />
      <FeaturedProducts />
      <HealthTipsSection />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}
