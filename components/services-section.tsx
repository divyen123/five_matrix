"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { 
  Container, Ship, Compass, Boxes, Layers, 
  ClipboardCheck, Droplets, Leaf, X 
} from "lucide-react"
import { Reveal } from "@/components/reveal"
import { TypewriterText } from "@/components/typewriter-text"

interface ServiceItem {
  id: string
  icon: any
  title: string
  shortText: string
  externalLink?: string
  description: string
  details: string[]
  footerLink?: {
    text: string
    linkText: string
    url: string
  }
}

const servicesList: ServiceItem[] = [
  {
    id: "sea-freight",
    icon: Container,
    title: "Sea Freight",
    shortText: "Comprehensive global FCL, LCL, and Roll-on/Roll-off shipping services.",
    description: "Sea freight has been the backbone of our global logistics network for decades. Our sea freight services are designed to meet the shipping needs of a wide range of industries, offering tailored solutions for businesses of all sizes.",
    details: [
      "Full Container Load (FCL) and Less than Container Load (LCL) consolidation.",
      "Roll-on/Roll-off (RoRo) services for wheeled cargo and heavy machinery.",
      "Modern vessel operations with advanced shipping technologies.",
      "Established partnerships with leading global shipping lines for competitive rates.",
      "Reliable routes connecting key markets across Asia, Europe, and the Americas."
    ]
  },
  {
    id: "ship-chartering",
    icon: Ship,
    title: "Ship Chartering",
    shortText: "Hiring cargo vessels for Voyage or Time charter arrangements globally.",
    description: "Our ship chartering division acts on behalf of charterers and shipowners, arranging rentals for voyage charters or time charters to move bulk cargoes securely.",
    details: [
      "Voyage Charter: Renting a vessel for a single specified voyage.",
      "Time Charter: Renting a vessel for a specific duration or period.",
      "Expert matching of vessel capacity with bulk cargo demands.",
      "Strong coordination between shipowners and charterers.",
      "Full compliance with international maritime trade regulations."
    ]
  },
  {
    id: "ship-broking",
    icon: Compass,
    title: "Ship Broking",
    shortText: "Expert intermediaries connecting shipowners and cargo owners.",
    description: "Our shipbrokers act as professional intermediaries, leveraging deep market knowledge and industry networks to negotiate rates and draft charter party agreements.",
    details: [
      "Strong negotiation and drafting of custom Charter Parties (contracts).",
      "Real-time market analysis and forecasting of freight rates.",
      "Specialized operations in dry bulk, tankers, and gas markets.",
      "Commercial coordination and dispute resolution support during transits.",
      "Access to a powerful global maritime network."
    ]
  },
  {
    id: "warehousing",
    icon: Boxes,
    title: "Warehousing & Distribution",
    shortText: "Strategic inventory storage and distribution with 24/7 visibility.",
    description: "We offer robust warehousing and distribution services to support businesses in managing inventory and meeting customer demand efficiently.",
    details: [
      "24/7 inventory management systems with real-time stock visibility.",
      "Customized warehousing solutions tailored to dry bulk or packaged goods.",
      "Prompt distribution services designed to optimize supply chain speed.",
      "Value-added services including specialized packaging and labelling."
    ]
  },
  {
    id: "supply-chain",
    icon: Layers,
    title: "Supply Chain Solutions",
    shortText: "Procurement-to-delivery logistics integration to optimize flow.",
    description: "We provide end-to-end supply chain solutions that help businesses streamline procurement, storage, and final transit operations.",
    details: [
      "Full integration of procurement, warehousing, and transport processes.",
      "Real-time shipment tracking and milestone monitoring.",
      "Customizable supply chain logistics designs matching specific industry demands.",
      "Close collaboration with international partners to reduce overall friction."
    ]
  },
  {
    id: "survey-appraisal",
    icon: ClipboardCheck,
    title: "Survey & Appraisal",
    shortText: "Certified premier independent third-party inspection and Survey company.",
    description: "SURVEYING & APPRAISAL SERVICE is a premier independent third-party inspection and Survey company delivering a wide range of services to marine and commodities internationally.",
    details: [
      "We are a team of experts; highly qualified and experienced in the surveying industry, ready to provide full Testing, Inspection and Certification Services globally.",
      "Our mission is to provide the market with expert, independent assessments, focusing on every detail of customer requirements to provide a customer-oriented solution; our ultimate aim is to add value to our customer's product or service offerings.",
      "Product testing is a means to verify that goods comply with applicable standards or contractual obligations prior to shipment.",
      "The result of laboratory testing depends how effectively the commodity or the product has been sampled, the test methods applied, the credibility of the laboratory in which the tests have been performed and the interpretation of the test results."
    ],
    footerLink: {
      text: "For more details, please ",
      linkText: "click here",
      url: "https://smrsas.me"
    }
  },
  {
    id: "petroleum",
    icon: Droplets,
    title: "Petroleum",
    shortText: "Wide range of Petroleum, LNG, LPG and Petrochem products.",
    description: "Oil products are used as \"energy carriers\", i.e. various grades of fuel oil and gasoline. These fuels include or can be blended to give gasoline, jet fuel, diesel fuel, heating oil, and heavier fuel oils.",
    details: [
      "Oil is primarily shipped in bulk using pipelines, ocean tankers, railcars, and tanker trucks. The exact method chosen depends on volume, distance, and geography.",
      "Crude Tankers: Massive vessels (like VLCCs, which can carry 2 million barrels) transport unrefined crude oil from extraction sites to refineries.",
      "Product Tankers: Smaller ships designed to move refined products (such as gasoil, gasoline or jet fuel) to consumer markets.",
      "Safety & Stability: International regulations mandate that these ships have double hulls to prevent leaks, and internal tanks are divided to prevent \"sloshing\" as the ship rocks."
    ]
  },
  {
    id: "csr-environment",
    icon: Leaf,
    title: "Environmental Stewardship",
    shortText: "Preserving global ecosystems through sustainability programs.",
    description: "Environmental responsibility is core to our corporate values. We actively participate in and fund projects that preserve local ecosystems and reduce carbon footprints.",
    details: [
      "Supporting global reforestation programs and biodiversity initiatives.",
      "Implementing green shipping practices and waste reduction strategies.",
      "Collaborating with environmental organizations to promote eco-friendly policies."
    ]
  }
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)

  return (
    <section id="services" className="relative overflow-hidden py-20 text-white md:py-28">
      {/* full-section ship video background */}
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/download.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/90 to-navy/95" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-ocean">
            Our Services
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold text-white md:text-4xl">
            <TypewriterText text="Complete maritime solutions" />
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-white/70">
            From freight logistics and chartering to responsible global actions, explore our complete offerings.
          </p>
        </Reveal>

        {/* 4x2 Responsive Grid */}
        <motion.div 
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {servicesList.map((s) => (
            <motion.div
              key={s.id}
              variants={{
                hidden: { opacity: 0, y: 35, scale: 0.95 },
                show: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  transition: { 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    duration: 0.6 
                  } 
                }
              }}
              className="h-full"
            >
              <div
                onClick={() => s.externalLink ? window.open(s.externalLink, "_blank") : setSelectedService(s)}
                className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl flex flex-col items-center justify-between text-center transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-ocean/40 hover:bg-white/10 origin-center cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-ocean/15 text-ocean group-hover:bg-ocean group-hover:text-navy transition-all duration-300">
                    <s.icon className="size-6" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-white transition-colors group-hover:text-ocean">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/70 leading-relaxed">
                    {s.shortText}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-ocean group-hover:text-white transition-colors">
                  View Details &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Details Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/85 p-5 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-card p-6 shadow-2xl md:p-8 scrollbar-none"
            >
              {/* close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all"
                aria-label="Close details"
              >
                <X className="size-5" />
              </button>

              {/* content header */}
              <div className="flex items-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-ocean/20 text-ocean">
                  <selectedService.icon className="size-7" />
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-white">
                  {selectedService.title}
                </h3>
              </div>

              {/* content body */}
              <div className="mt-6 space-y-4">
                {selectedService.description && (
                  <p className="text-base leading-relaxed text-white/80">
                    {selectedService.description}
                  </p>
                )}
                {selectedService.details && selectedService.details.length > 0 && (
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-ocean">
                      Key Details & Offerings
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {selectedService.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ocean" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedService.footerLink && (
                  <div className="border-t border-white/10 pt-6 text-sm leading-relaxed text-white/70">
                    <span>{selectedService.footerLink.text}</span>
                    <a
                      href={selectedService.footerLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ocean hover:underline font-semibold transition-colors"
                    >
                      {selectedService.footerLink.linkText}
                    </a>
                    <span>.</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
