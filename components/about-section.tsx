"use client"

import Image from "next/image"
import { Award, Eye, Handshake, Heart, Lightbulb, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const coreValues = [
  { icon: ShieldCheck, title: "Integrity", text: "We conduct every transaction with honesty and accountability." },
  { icon: Award, title: "Professionalism", text: "We maintain the highest standards of operational and commercial excellence." },
  { icon: Heart, title: "Reliability", text: "We deliver dependable solutions that our clients can trust." },
  { icon: Eye, title: "Transparency", text: "We promote open communication and clear commercial practices." },
  { icon: Lightbulb, title: "Innovation", text: "We continuously adapt to evolving market demands and embrace modern business solutions." },
  { icon: Handshake, title: "Partnership", text: "We believe long-term success is achieved through strong, mutually beneficial relationships with our clients and partners worldwide." },
]

const whoWeAreParagraphs = [
  {
    direction: -96,
    text: "FIVE MATRIX Shipping is an international marine, energy, and commodity trading company committed to provide reliable, transparent, and efficient solutions to clients across the global maritime and energy industries.",
  },
  {
    direction: 96,
    text: "Driven by two young mariners with strong professional backgrounds in vessel operations, navigation, ship command, shipping, logistics, marine surveying, marine engineering and international commodity trading, the company combines practical seagoing knowledge with modern commercial expertise. This unique combination enables us to understand every aspect of the supply chain from cargo sourcing and quality assurance to marine logistics, vessel coordination, and successful transaction execution.",
  },
  {
    direction: -96,
    text: "Our team works closely with reputable refineries, title holders, suppliers, shipowners, logistics providers, inspection companies, financial institutions, and legal professionals to ensure that every transaction is conducted with the highest standards of integrity, compliance, and operational excellence.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background">
      <div className="relative flex min-h-screen items-center py-24 md:py-32">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
          <Reveal once={false} y={18} duration={0.8}>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-ocean">
              Who We Are
            </span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              FIVE MATRIX Shipping
            </h2>
          </Reveal>

          <div className="mx-auto mt-7 max-w-4xl space-y-5 overflow-hidden text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {whoWeAreParagraphs.map((paragraph, index) => (
              <Reveal
                key={paragraph.text}
                delay={0.12 + index * 0.18}
                duration={0.95}
                margin="-120px"
                once={false}
                x={paragraph.direction}
                y={0}
              >
                <p>{paragraph.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="relative min-h-screen overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/tanker.jpg"
            alt="Large tanker ship at sea"
            fill
            sizes="100vw"
            className="object-cover object-[18%_center]"
            priority={false}
          />
        </div>
        <div className="absolute inset-0 bg-navy/24" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_38%,rgba(4,19,45,0.18)_52%,rgba(2,14,39,0.72)_72%,rgba(1,11,34,0.98)_100%)]" />
        <div className="absolute inset-y-0 left-[38%] w-[34%] bg-[linear-gradient(90deg,transparent_0%,rgba(2,15,40,0.2)_35%,rgba(2,18,49,0.38)_55%,transparent_100%)] blur-3xl" />
        <div className="absolute inset-y-0 right-0 w-[60%] bg-[radial-gradient(circle_at_28%_24%,rgba(5,57,107,0.12),transparent_40%),linear-gradient(90deg,transparent_0%,rgba(3,25,59,0.22)_34%,rgba(1,13,39,0.92)_100%)]" />

        <div className="relative ml-auto flex min-h-[calc(100vh-12rem)] w-full max-w-xl items-center px-5 md:px-8 lg:mr-8 xl:mr-14">
          <div className="w-full text-center">
            <Reveal once={false} y={22} duration={0.8}>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-ocean">
                Our Values
              </span>
              <h3 className="mx-auto mt-4 max-w-xl font-heading text-2xl font-extrabold leading-tight text-foreground md:text-3xl">
                Principles that guide every transaction
              </h3>
            </Reveal>

            <div className="mt-7 grid gap-3 text-left sm:grid-cols-2">
              {coreValues.map((v, i) => (
                <Reveal
                  key={v.title}
                  delay={0.12 + i * 0.18}
                  duration={0.8}
                  margin="-120px"
                  once={false}
                  y={22}
                >
                  <div className="group relative h-full min-h-[132px] rounded-xl border border-white/10 bg-card/75 p-4 pr-14 shadow-xl shadow-background/20 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-ocean/60 hover:bg-card">
                    <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-ocean group-hover:text-accent-foreground">
                      <v.icon className="size-4" />
                    </span>
                    <h4 className="font-heading text-base font-bold text-foreground">
                      {v.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {v.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
