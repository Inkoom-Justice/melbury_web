"use client"

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Location", href: "#location" },
  { label: "Masterplan", href: "#masterplan" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-luxury-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <Image
              src="/images/mulberry-homes-logo-refined-white.png"
              alt="Mulberry Court"
              width={150}
              height={75}
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/70 text-sm max-w-md">
              Premium 4-bedroom detached homes in East Legon, Accra. Where refined architecture meets elegant urban
              living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-luxury-gold transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-luxury-gold transition-colors flex items-center justify-center"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} Mulberry Court. All rights reserved.</p>
            <p className="text-white/50 text-xs max-w-2xl text-center md:text-right">
              All images, floor plans, and specifications are indicative only and subject to change. Prospective buyers
              should verify all information independently.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
