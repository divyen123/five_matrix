"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X, Anchor } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Trading", href: "#trading" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200 // Offset for navbar height

      // Check if near top
      if (window.scrollY < 120) {
        setActiveSection("")
        return
      }

      // Check if at bottom
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact")
        return
      }

      for (const link of links) {
        const id = link.href.substring(1)
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", href)
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-navy/90 backdrop-blur-md shadow-lg shadow-navy/20" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, "#top")}
          className="flex items-center gap-3"
        >
          <span className="flex size-11 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-white/20 overflow-hidden">
            <Image
              src="/fivematrix-logo.jpg"
              alt="Five Matrix Shipping logo"
              width={44}
              height={44}
              className="size-[80%] object-contain rounded-full"
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-heading text-sm font-extrabold tracking-wide text-white">
              FIVE MATRIX SHIPPING
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-ocean">
              Pte Ltd · Singapore
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = l.href === `#${activeSection}`
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleLinkClick(e, l.href)}
                className={cn(
                  "group relative text-sm font-medium transition-colors",
                  isActive ? "text-ocean font-semibold" : "text-white/80 hover:text-white"
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-0.5 bg-ocean transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="hidden items-center gap-2 rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-navy shadow-lg shadow-ocean/30 transition-transform hover:scale-105 md:flex"
          >
            <Anchor className="size-4" />
            Get a Quote
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="overflow-hidden border-t border-white/10 bg-navy/95 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => {
              const isActive = l.href === `#${activeSection}`
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    setOpen(false)
                    handleLinkClick(e, l.href)
                  }}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-ocean/15 text-ocean font-semibold border-l-2 border-ocean rounded-l-none"
                      : "text-white/85 hover:bg-white/10"
                  )}
                >
                  {l.label}
                </a>
              )
            })}
            <a
              href="#contact"
              onClick={(e) => {
                setOpen(false)
                handleLinkClick(e, "#contact")
              }}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-navy"
            >
              <Anchor className="size-4" /> Get a Quote
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}
