"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useSpring } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { href: "#about", id: "about", label: "About" },
  { href: "#architecture", id: "architecture", label: "System" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#skills", id: "skills", label: "Stack" },
  { href: "#certifications", id: "certifications", label: "Certs" },
  { href: "#resume", id: "resume", label: "Resume" },
  { href: "#faq", id: "faq", label: "FAQ" },
  { href: "#blog", id: "blog", label: "Blog" },
  { href: "#contact", id: "contact", label: "Contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>("")

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded focus:bg-foreground focus:p-2 focus:text-background"
      >
        Skip to main content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <Link
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
              window.history.replaceState(null, "", "#top")
            }}
            className="flex items-center gap-2"
            title="Mohammad Kazim — Software Engineer"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-foreground bg-foreground text-background font-display text-lg">
              MK
            </span>
            <span className="font-display text-2xl tracking-wide text-foreground">MOHAMMAD KAZIM</span>
          </Link>

          <ul className="hidden items-center gap-6 lg:flex lg:gap-7">
            {navLinks.map((link) => {
              const active = activeId === link.id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active ? "true" : undefined}
                    className={`relative text-sm font-semibold transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-foreground after:transition-all hover:after:w-full ${
                      active ? "text-foreground after:w-full" : "text-foreground/70 after:w-0 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition-transform hover:-translate-y-0.5 lg:inline-flex"
            >
              Get In Touch
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </nav>

        {/* Scroll progress bar */}
        <motion.div
          className="h-0.5 origin-left bg-mint"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />

        {isMenuOpen && (
          <nav className="border-t-2 border-foreground bg-background px-5 pb-6 pt-4 lg:hidden" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-base font-semibold ${activeId === link.id ? "text-foreground" : "text-foreground/70"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="mt-2 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}
