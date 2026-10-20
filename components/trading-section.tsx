"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Globe2, Zap, Boxes, CircleDollarSign } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { TypewriterText } from "@/components/typewriter-text"

const points = [
  {
    icon: CircleDollarSign,
    title: "CFR and CIF",
    text: "We supply customers worldwide on CFR and CIF basis with the best competitive rates.",
  },
  {
    icon: Zap,
    title: "Energy Solutions",
    text: "Our commitment to excellence drives us to redefine the future of energy, providing solutions that not only meet today's demands but pave the way for a cleaner, more efficient tomorrow.",
  },
  {
    icon: Boxes,
    title: "Global Sourcing Network",
    text: "Trusted sourcing partners spanning Asia, PG, AG, Fareast.",
  },
]

export function TradingSection() {
  return (
    <section id="trading" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-ocean">
              <Globe2 className="size-4" /> Trading Terms & Reach
            </span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              <TypewriterText text="Trading &" />
              <br />
              <TypewriterText text="transporting Energies" delay={0.25} />
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Our global network team of expert brokers delivers the scale and scope clients need to succeed. We manage all tanker requirements, including spot carriage, contracts of affreightment, Voyage and Time charters for all sizes of crude and petroleum products
            </p>
          </Reveal>

          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-8 flex flex-col gap-4"
          >
            {points.map((p) => (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, x: -40, scale: 0.95 },
                  show: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
                }}
              >
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/50 hover:shadow-md">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <p.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Reveal className="order-1 lg:order-2" y={40}>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy/20">
              <Image
                src="/lpg.jpg"
                alt="Bulk carrier vessel loaded with steel billets and rail tracks at sea"
                width={900}
                height={760}
                className="h-[480px] w-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
              <div className="text-xs font-bold uppercase tracking-widest text-ocean">
                Routes
              </div>
              <div className="mt-1.5 font-heading text-lg font-extrabold tracking-wide">
                Asia, PG, AG, Fareast
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
