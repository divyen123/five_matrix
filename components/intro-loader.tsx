"use client"

import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true)
  const [logoVisible, setLogoVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3200)
    const logoTimer = setTimeout(() => setLogoVisible(true), 1800)
    return () => {
      clearTimeout(timer)
      clearTimeout(logoTimer)
    }
  }, [])

  const company = "FIVE MATRIX SHIPPING"

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-navy"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* animated concentric ripples */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute rounded-full border border-ocean/30"
                initial={{ width: 160, height: 160, opacity: 0 }}
                animate={{
                  width: [160, 520],
                  height: [160, 520],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2.6,
                  delay: 0.6 + i * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* logo container */}
          <div className="relative z-10 flex size-40 items-center justify-center md:size-48">
            {/* 1. SVG Stroke Drawing */}
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 size-full text-ocean"
              initial={{ opacity: 1 }}
              animate={{ opacity: logoVisible ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Outer Wheel Rim */}
              <motion.circle
                cx={50} cy={50} r={35}
                stroke="currentColor" strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 }}
              />
              <motion.circle
                cx={50} cy={50} r={30}
                stroke="currentColor" strokeWidth="1" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
              
              {/* Spokes */}
              <motion.line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }} />
              <motion.line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }} />
              <motion.line x1="25.2" y1="25.2" x2="74.8" y2="74.8" stroke="currentColor" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }} />
              <motion.line x1="25.2" y1="74.8" x2="74.8" y2="25.2" stroke="currentColor" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }} />

              {/* Spokes handles */}
              {[
                { cx: 50, cy: 12 }, { cx: 50, cy: 88 }, { cx: 12, cy: 50 }, { cx: 88, cy: 50 },
                { cx: 23, cy: 23 }, { cx: 77, cy: 77 }, { cx: 23, cy: 77 }, { cx: 77, cy: 23 }
              ].map((pt, index) => (
                <motion.circle
                  key={index} cx={pt.cx} cy={pt.cy} r="1.5" fill="currentColor"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                />
              ))}

              {/* Lighthouse Outline */}
              <motion.path d="M42 65 L58 65" stroke="currentColor" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }} />
              <motion.path d="M44 65 L47 42 L53 42 L56 65 Z" stroke="currentColor" strokeWidth="1.5" fill="none"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.7 }} />
              <motion.path d="M45 42 L55 42" stroke="currentColor" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }} />
              <motion.path d="M47 35 Q50 30 53 35 Z" stroke="currentColor" strokeWidth="1.5" fill="none"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.9 }} />

              {/* Waves */}
              <motion.path d="M25 65 Q37 60 50 65 T75 65" stroke="currentColor" strokeWidth="1.5" fill="none"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.9 }} />
              <motion.path d="M20 70 Q35 65 50 70 T80 70" stroke="currentColor" strokeWidth="1.5" fill="none"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 1.0 }} />
            </motion.svg>

            {/* 2. Full Color Logo Badge */}
            <motion.div
              className="absolute inset-0 flex size-full items-center justify-center rounded-full bg-white shadow-2xl shadow-black/40 ring-4 ring-ocean/40 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: logoVisible ? 1 : 0.8,
                opacity: logoVisible ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
              }}
            >
              <Image
                src="/fivematrix-logo.jpg"
                alt="Five Matrix Shipping Pte Ltd logo"
                width={170}
                height={170}
                priority
                className="size-[78%] object-contain rounded-full"
              />
            </motion.div>
          </div>

          {/* company name reveal */}
          <div className="z-10 mt-8 flex overflow-hidden">
            {company.split("").map((char, i) => (
              <motion.span
                key={i}
                className="font-heading text-2xl font-extrabold tracking-[0.25em] text-white md:text-3xl"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="z-10 mt-3 text-xs font-medium uppercase tracking-[0.4em] text-ocean"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.6 }}
          >
            Pte Ltd · Singapore
          </motion.p>

          {/* loading bar */}
          <motion.div
            className="z-10 mt-8 h-[3px] w-44 overflow-hidden rounded-full bg-white/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <motion.div
              className="h-full rounded-full bg-ocean"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.7, duration: 1.3, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
