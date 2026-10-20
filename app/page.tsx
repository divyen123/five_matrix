"use client"

import { useState } from "react"
import { IntroLoader } from "@/components/intro-loader"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { MarqueeStrip } from "@/components/marquee-strip"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TradingSection } from "@/components/trading-section"
import { VisionSection } from "@/components/vision-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}
      <SiteHeader />
      <main>
        <Hero animateTitle={introDone} />
        <MarqueeStrip />
        <AboutSection />
        <ServicesSection />
        <TradingSection />
        <VisionSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
