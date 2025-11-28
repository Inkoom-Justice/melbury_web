"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const inclusions = [
  "Fully Finished 4-Bedroom Detached Home",
  "2,405 sqft of Premium Living Space",
  "High-End Fixtures & Finishes",
  "Designer Kitchen with Built-in Appliances",
  "Luxury Bathrooms with Premium Fittings",
  "AC Units in All Principal Rooms",
  "Custom Wooden Cabinetry",
  "Gated Community with 24/7 Security",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-charcoal mb-6 text-balance">
            Investment Opportunity
          </h2>
          <p className="text-lg text-luxury-charcoal/70 max-w-2xl mx-auto">
            A prime investment in Accra's fast-growing premium neighborhood
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border-0">
          <div className="bg-luxury-charcoal text-white p-8 lg:p-12 text-center">
            <div className="inline-block bg-luxury-gold/20 text-luxury-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
              EXCEPTIONAL VALUE
            </div>
            <h3 className="font-serif text-5xl lg:text-6xl mb-2">USD 420,000</h3>
            <p className="text-white/80 text-lg">4-Bedroom Detached Homes – Fully Finished</p>
          </div>

          <div className="p-8 lg:p-12">
            <h4 className="font-semibold text-xl text-luxury-charcoal mb-6">What's Included</h4>
            <div className="space-y-4 mb-8">
              {inclusions.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-luxury-green/10 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-luxury-green" />
                  </div>
                  <span className="text-luxury-charcoal/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-luxury-gold/10 border-l-4 border-luxury-gold p-6 rounded-lg mb-8">
              <p className="text-sm text-luxury-charcoal">
                <strong className="font-semibold">Investment Highlight:</strong> Located in one of Accra's most
                prestigious and fastest-growing neighborhoods, Mulberry Court offers exceptional long-term value
                appreciation potential.
              </p>
            </div>

            <Button className="w-full bg-luxury-gold text-white hover:bg-luxury-gold/90 rounded-full py-6 text-lg">
              Schedule Private Viewing
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
