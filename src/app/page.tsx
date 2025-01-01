"use client";

import HeroSection from "@/components/layouts/hero/page";
import { ScheduleDisplay } from "@/components/features/schedule"
import { PharmacyFeatures } from "@/components/features/feature/page";
import NewsletterSignup from "@/components/features/newsletterSignup/page";
import HealthTipsSection from "@/components/features/healthTipsSection/page";
import { TestimonialsSection } from "@/components/features/testimonialsSection/page";
import LocationFinder from "@/components/features/locationFinder/page";
import ServicesSection from "@/components/features/services/page";
import Mission from '@/components/features/mission/page'
import { Team } from '@/components/features/team/page'
import FeaturedProducts from '@/components/features/featuredProducts/page'
import Footer from "@/components/layouts/footer/page";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ScheduleDisplay />
      <PharmacyFeatures />
      <ServicesSection />
      <Mission />
      <Team />
      <FeaturedProducts />
      <TestimonialsSection />
      <HealthTipsSection />
      <LocationFinder />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}
