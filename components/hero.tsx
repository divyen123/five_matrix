"use client"

import { motion } from "motion/react"
import { ArrowRight, Ship } from "lucide-react"
import { TypewriterText } from "@/components/typewriter-text"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

type HeroProps = {
  animateTitle?: boolean
}

export function Hero({ animateTitle = true }: HeroProps) {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* video background */}
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/port-aerial.png"
      >
        <source src="/download.mp4" type="video/mp4" />
      </video>
      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-20 md:px-8"
      >
        <motion.h1
          variants={item}
          className="mt-6 min-h-[3.3em] max-w-4xl font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-6xl lg:text-7xl"
        >
          {animateTitle && (
            <>
              <TypewriterText text="Navigating Global" />
              <br />
              <TypewriterText text="Trade with" delay={0.4} />
              <br />
              <TypewriterText text="Trust & Precision" className="text-ocean" delay={0.7} />
            </>
          )}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80 md:text-lg"
        >
          A reputed and dependable Ship Chartering and Ship Broking company connecting shipowners and cargo across Asia, PG, AG, Fareast with integrity, efficiency and transparency.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ocean px-7 py-3.5 text-sm font-semibold text-navy shadow-xl shadow-ocean/30 transition-transform hover:scale-105"
          >
            Explore Our Services
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <Ship className="size-4 text-ocean" />
            Charter a Vessel
          </a>
        </motion.div>

        {/* mini stats */}
        <motion.div
          variants={item}
          className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/15 pt-7"
        >
          {[
            { k: "15+", v: "International Clients" },
            { k: "3+", v: "Insurance Coverage Types" },
            { k: "2+", v: "Continents Sourced" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-heading text-3xl font-extrabold text-white md:text-4xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs leading-snug text-white/70">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
