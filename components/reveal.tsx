"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  margin?: string
  once?: boolean
  x?: number
  y?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  margin = "-80px",
  once = true,
  x = 0,
  y = 28,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
