"use client"

export function LifestyleSection() {
  return (
    <section id="lifestyle" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-charcoal mb-6 text-balance">
            Live in East Legon's Most Connected Address
          </h2>
          <p className="text-lg text-luxury-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect balance of convenience, community, and premium urban comfort in Accra's most
            prestigious neighborhood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <img src="/luxury-lifestyle-dining-modern-home-ghana.jpg" alt="Lifestyle" className="w-full h-full object-cover" />
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <img src="/modern-luxury-home-outdoor-space-ghana-evening.jpg" alt="Lifestyle" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="mt-16 bg-luxury-cream rounded-3xl p-8 lg:p-12">
          <blockquote className="text-center">
            <p className="font-serif text-2xl md:text-3xl text-luxury-charcoal mb-6 italic text-balance">
              "A sanctuary where modern elegance meets everyday convenience in the heart of Accra's most sought-after
              address."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
