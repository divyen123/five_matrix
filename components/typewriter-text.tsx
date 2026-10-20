"use client"

import { motion } from "motion/react"

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
}

export function TypewriterText({ text, className = "", delay = 0 }: TypewriterTextProps) {
  // Split text into characters
  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.025, 
        delayChildren: delay 
      }
    }
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
    hidden: {
      opacity: 0,
      y: 8,
      x: 2,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
  }

  return (
    <motion.span
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ display: "inline-block", whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}
