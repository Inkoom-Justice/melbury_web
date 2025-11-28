"use client"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { FeaturesSection } from "@/components/features-section"
import { MasterplanSection } from "@/components/masterplan-section"
import { LocationSection } from "@/components/location-section"
import { LifestyleSection } from "@/components/lifestyle-section"
import { PricingSection } from "@/components/pricing-section"
import { EstateManagementSection } from "@/components/estate-management-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <FeaturesSection />
      <MasterplanSection />
      <LocationSection />
      <LifestyleSection />
      <PricingSection />
      <EstateManagementSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
