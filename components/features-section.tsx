"use client"

import { Card } from "@/components/ui/card"
import { Home, Ruler, ChefHat, Wind, Bath, Cable as Cabinet, Sparkles, Plus } from "lucide-react"

const features = [
  {
    icon: Home,
    title: "4-Bedroom Detached Homes",
    description: "Fully finished with premium quality",
  },
  {
    icon: Ruler,
    title: "Spacious Floor Plans",
    description: "2,405 sqft of refined living space",
  },
  {
    icon: ChefHat,
    title: "Premium Designer Kitchen",
    description: "Quartz countertops, built-in appliances",
  },
  {
    icon: Wind,
    title: "Cooling Comfort",
    description: "ACs in all principal rooms",
  },
  {
    icon: Bath,
    title: "Luxurious Bathrooms",
    description: "Freestanding tubs, walk-in showers",
  },
  {
    icon: Cabinet,
    title: "Wooden Cabinetry",
    description: "Custom wardrobes and vanities",
  },
  {
    icon: Sparkles,
    title: "Premium Finishes",
    description: "High-end materials throughout",
  },
  {
    icon: Plus,
    title: "Optional Extensions",
    description: "Servant's quarters, outdoor kitchen",
  },
]

const estateAmenities = [
  "24/7 Security Post",
  "Surveillance & Access Control",
  "Landscaped Common Areas",
  "Backup Generator Infrastructure",
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-charcoal mb-6 text-balance">
            Property Features
          </h2>
          <p className="text-lg text-luxury-charcoal/70 max-w-2xl mx-auto">
            Every detail crafted for exceptional living
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0"
            >
              <div className="w-14 h-14 rounded-full bg-luxury-green/10 flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-luxury-green" />
              </div>
              <h3 className="font-semibold text-lg text-luxury-charcoal mb-2">{feature.title}</h3>
              <p className="text-luxury-charcoal/70 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-luxury-charcoal rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">Estate Amenities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {estateAmenities.map((amenity) => (
              <div key={amenity} className="flex items-center justify-center gap-3 text-white">
                <div className="w-2 h-2 rounded-full bg-luxury-gold" />
                <span className="text-sm font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
