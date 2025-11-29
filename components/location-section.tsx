"use client"

import { MapPin, Plane, ShoppingBag, Building2, GraduationCap } from "lucide-react"

const locationHighlights = [
  {
    icon: Plane,
    title: "10 Minutes",
    subtitle: "Kotoka International Airport",
  },
  {
    icon: ShoppingBag,
    title: "5 Minutes",
    subtitle: "Accra Mall",
  },
  {
    icon: Building2,
    title: "8 Minutes",
    subtitle: "Airport City",
  },
  {
    icon: GraduationCap,
    title: "Nearby",
    subtitle: "Top Schools & Hospitals",
  },
]

export function LocationSection() {
  return (
    <section id="location" className="py-24 lg:py-32 bg-luxury-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
              Perfectly Located — East Legon, Accra
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Experience the convenience of East Legon's most connected address. First-class road network with immediate
              access to everything that matters.
            </p>

            <div className="flex items-center gap-2 text-luxury-gold mb-12">
              <MapPin className="h-5 w-5" />
              <span className="font-mono text-sm">5°38'07.1"N 0°09'12.5"W</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {locationHighlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-xl mb-1">{item.title}</div>
                    <div className="text-white/70 text-sm">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img src="map-of-east-legon-accra-ghana-luxury-neighborhood.jpg" alt="Location Map" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
