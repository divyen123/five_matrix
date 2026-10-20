"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Reveal } from "@/components/reveal"
import { TypewriterText } from "@/components/typewriter-text"

const capabilityItems = [
  "Coordinating single cargo parcels as well as long-term supply programs.",
  "Managing complex cross-border commodity transactions.",
  "Coordinating with internationally recognized inspection companies and surveyors.",
  "Supporting buyers and sellers throughout the complete transaction cycle.",
  "Managing marine documentation, logistics planning, vessel nominations, and loading operations.",
  "Working with experienced legal and financial professionals to ensure secure and compliant transactions.",
]

const commitmentItems = [
  "Conducting business with honesty, transparency, and integrity.",
  "Delivering reliable and commercially competitive solutions.",
  "Maintaining strict compliance with international trade and maritime regulations.",
  "Providing responsive customer service and professional operational support.",
  "Building strategic partnerships that create sustainable value for all stakeholders.",
]

export function VisionSection() {
  return (
    <section id="vision" className="relative overflow-hidden bg-navy text-white">
      <div className="relative flex min-h-screen py-20 md:py-24">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.07]" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
          {/* compass video */}
          <Reveal>
            <motion.div
              className="relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden rounded-full shadow-2xl shadow-black/30"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <video
                  className="size-full scale-[1.22] object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/compass.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </motion.div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-ocean">
                Vision & Mission
              </span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight md:text-4xl">
                <TypewriterText text="A clear bearing towards" />
                <br />
                <TypewriterText text="global excellence" delay={0.6} />
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-5">
              <Reveal delay={0.12}>
                <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition-colors hover:border-ocean/40">
                  <h3 className="font-heading text-lg font-bold text-white">Our Vision</h3>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    To become one of the world's most trusted marine, energy, and commodity trading companies by connecting global suppliers and buyers through innovative, transparent, and dependable commercial solutions.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={0.24}>
                <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition-colors hover:border-ocean/40">
                  <h3 className="font-heading text-lg font-bold text-white">Our Mission</h3>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    Our mission is to simplify international commodity trading by combining maritime expertise, operational excellence, and commercial innovation. We strive to deliver efficient supply-chain solutions, create lasting partnerships, and contribute to the sustainable growth of the global marine and energy industries.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex min-h-screen items-center overflow-hidden py-20 md:py-24">
        <Image
          src="/vision-singapore.png"
          alt="Singapore skyline at night"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/70" />
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />

        <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-ocean">
              Our Capability & Commitment
            </span>
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-tight md:text-4xl">
              Built for reliable global trade execution
            </h2>
          </Reveal>

          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            <Reveal delay={0.12} x={-48} y={0} duration={0.85}>
              <article className="h-full rounded-2xl border border-white/20 bg-[#0b2a52]/40 p-5 shadow-2xl shadow-black/25 ring-1 ring-white/10 transition-colors hover:border-ocean/45 hover:bg-[#0b2a52]/40">
                <h3 className="font-heading text-lg font-bold text-white">Our Capability</h3>
                <p className="mt-2 text-sm leading-6 text-white/72">
                  Our operational knowledge and extensive industry network enable us to facilitate transactions across major international trading hubs, including the Middle East, Southeast Asia, Europe, and other strategic energy markets.
                </p>
                <p className="mt-3 text-sm font-semibold text-white/90">Our capabilities include:</p>
                <ul className="mt-2 space-y-1.5 pl-5 text-sm leading-6 text-white/72">
                  {capabilityItems.map((item) => (
                    <li key={item} className="list-disc marker:text-ocean">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm leading-6 text-white/72">
                  Every transaction is handled with careful attention to operational efficiency, commercial transparency, regulatory compliance, and risk management.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.32} x={48} y={0} duration={0.85}>
              <article className="h-full rounded-2xl border border-white/20 bg-[#0b2a52]/40 p-5 shadow-2xl shadow-black/25 ring-1 ring-white/10 transition-colors hover:border-ocean/45 hover:bg-[#0b2a52]/40">
                <h3 className="font-heading text-lg font-bold text-white">Our Commitment</h3>
                <p className="mt-2 text-sm leading-6 text-white/72">
                  At Five Matrix Shipping, we believe that successful business is built on trust, professionalism, and long-term relationships.
                </p>
                <p className="mt-3 text-sm font-semibold text-white/90">We are committed to:</p>
                <ul className="mt-2 space-y-1.5 pl-5 text-sm leading-6 text-white/72">
                  {commitmentItems.map((item) => (
                    <li key={item} className="list-disc marker:text-ocean">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
