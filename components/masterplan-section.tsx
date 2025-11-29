"use client"

import { Card } from "@/components/ui/card"

const floorPlans = [
  {
    title: "Ground Floor",
    area: "1,250 sqft",
    features: ["Living Area", "Dining Area", "Kitchen", "Bedroom", "Bathroom", "Kitchen Yard"],
    image: "architectural-floor-plan-ground-floor-luxury-home.jpg",
  },
  {
    title: "First Floor",
    area: "1,155 sqft",
    features: ["3 Bedrooms", "2 Bathrooms", "Family Area", "Balcony", "Walk-in Closets"],
    image: "architectural-floor-plan-first-floor-luxury-home.jpg",
  },
]

export function MasterplanSection() {
  return (
    <section id="masterplan" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-charcoal mb-6 text-balance">
            Master Development Plan
          </h2>
          <p className="text-lg text-luxury-charcoal/70 max-w-2xl mx-auto">
            Thoughtfully designed spaces for modern family living
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {floorPlans.map((plan) => (
            <Card key={plan.title} className="bg-white rounded-3xl overflow-hidden shadow-xl border-0">
              <div className="relative h-80">
                <img src={plan.image || "placeholder.svg"} alt={plan.title} className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6 bg-luxury-gold text-white px-4 py-2 rounded-full font-semibold">
                  {plan.area}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-luxury-charcoal mb-4">{plan.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {plan.features.map((feature) => (
                    <span key={feature} className="px-4 py-2 bg-luxury-cream text-luxury-charcoal text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
