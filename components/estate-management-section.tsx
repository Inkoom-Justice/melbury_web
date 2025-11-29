"use client"

import { Shield, Trash2, Wrench, Users } from "lucide-react"

const managementFeatures = [
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Professional security personnel and surveillance systems",
  },
  {
    icon: Trash2,
    title: "Waste Management",
    description: "Regular waste collection and disposal services",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Common area upkeep and infrastructure management",
  },
  {
    icon: Users,
    title: "HOA Transition",
    description: "Seamless handover to homeowners association after first year",
  },
]

export function EstateManagementSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-charcoal mb-6 text-balance">
              Professional Estate Management
            </h2>
            <p className="text-lg text-luxury-charcoal/80 leading-relaxed mb-8">
              Your first year is professionally managed to ensure seamless community living. After the first year, the
              Homeowners Association takes over, ensuring continued excellence in estate management.
            </p>
            <div className="space-y-6">
              {managementFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-luxury-green/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-luxury-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-luxury-charcoal mb-1">{feature.title}</h3>
                    <p className="text-luxury-charcoal/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="luxury-gated-community-entrance-ghana-security.jpg"
              alt="Estate Management"
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
