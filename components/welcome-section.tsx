"use client"

import { Home, Shield, TreePine } from "lucide-react"

const callouts = [
  {
    icon: Home,
    title: "Move-in Ready Luxury",
    description: "Fully finished homes with premium fixtures",
  },
  {
    icon: Shield,
    title: "Secure Gated Estate",
    description: "24/7 security and surveillance",
  },
  {
    icon: TreePine,
    title: "Quiet Urban Retreat",
    description: "Peaceful living in prime location",
  },
]

export function WelcomeSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-charcoal mb-8 text-balance">
              Welcome to Mulberry Court
            </h2>
            <p className="text-lg text-luxury-charcoal/80 leading-relaxed mb-8">
              Mulberry Court sets a new benchmark for elegant urban living. Located in the highly coveted East Legon
              neighborhood, this gated development features fully finished 4-bedroom detached homes that blend refined
              architecture with superior quality finishes—designed for those who appreciate substance and style.
            </p>
            <div className="space-y-6">
              {callouts.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-luxury-green/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-luxury-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-luxury-charcoal mb-1">{item.title}</h3>
                    <p className="text-luxury-charcoal/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/luxury-modern-home-interior-living-room-ghana.jpg"
              alt="Mulberry Court Interior"
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-luxury-gold/20 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
