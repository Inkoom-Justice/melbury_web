"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="https://github.com/Inkoom-Justice/melbury_web/blob/2d381fec25a9ad5af8fe0f17d5c2b98ccd45f96f/public/modern-luxury-home-exterior-architecture-in-ghana.jpg" alt="Mulberry Court" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal/70 via-luxury-charcoal/50 to-luxury-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-in text-balance">
          Premium Living in the Heart of Accra
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
          Fully finished 4-bedroom detached homes in East Legon's most connected address.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-luxury-gold text-white hover:bg-luxury-gold/90 rounded-full px-8 py-6 text-lg">
            Explore Homes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-luxury-charcoal rounded-full px-8 py-6 text-lg bg-transparent"
          >
            Download Brochure
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
