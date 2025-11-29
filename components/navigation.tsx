"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Location", href: "#location" },
    { label: "Masterplan", href: "#masterplan" },
    { label: "Pricing", href: "#pricing" },
    { label: "Lifestyle", href: "#lifestyle" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Image
              src={
                scrolled
                  ? "/images/mulberry-homes-logo-refined-black.png"
                  : "/images/mulberry-homes-logo-refined-white.png"
              }
              alt="Mulberry Court"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-luxury-gold ${
                  scrolled ? "text-luxury-charcoal" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-luxury-gold text-white hover:bg-luxury-gold/90 rounded-full px-6">
              Book a Viewing
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className={scrolled ? "text-luxury-charcoal" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-luxury-charcoal" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-luxury-charcoal hover:text-luxury-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-luxury-gold text-white hover:bg-luxury-gold/90 rounded-full">
              Book a Viewing
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
