import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Added luxury serif font for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for Mulberry Court
export const metadata: Metadata = {
  title: "Mulberry Court | Premium 4-Bedroom Homes in East Legon, Accra",
  description:
    "Fully finished 4-bedroom detached homes in East Legon's most connected address. Experience refined architecture with superior quality finishes in Accra's premier gated community.",
  keywords:
    "luxury homes Accra, East Legon property, gated community Ghana, 4-bedroom homes Accra, premium real estate Ghana",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

// <CHANGE> Updated viewport for optimal mobile experience
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2C3539",
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
