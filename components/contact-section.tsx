"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-luxury-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">Visit Us</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Schedule a viewing to experience Mulberry Court firsthand
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <Card className="bg-luxury-charcoal/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm mb-8">
              <h3 className="font-serif text-2xl text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-luxury-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <div className="text-white/70">19 Mulberry Street, East Legon, Accra</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-luxury-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a
                      href="mailto:mulberryhomesgh@gmail.com"
                      className="text-white/70 hover:text-luxury-gold transition-colors"
                    >
                      mulberryhomesgh@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-luxury-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-white/70">
                      <div>+233 20 824 7596</div>
                      <div>+233 20 257 0265</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="relative h-80 rounded-3xl overflow-hidden">
              <img src="/map-east-legon-accra-location-pin.jpg" alt="Map" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white rounded-3xl p-8 lg:p-10 text-luxury-charcoal">
            <h3 className="font-serif text-2xl mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <Input
                  id="fullName"
                  required
                  className="rounded-xl border-luxury-charcoal/20"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="rounded-xl border-luxury-charcoal/20"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  className="rounded-xl border-luxury-charcoal/20"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  className="rounded-xl border-luxury-charcoal/20"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-luxury-gold text-white hover:bg-luxury-gold/90 rounded-full py-6 text-lg"
              >
                Submit Inquiry
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
