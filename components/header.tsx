"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#events-preview", label: "Events" },
    { href: "#skills", label: "Stack" },
    { href: "#certifications", label: "Certifications" },
    { href: "#faq", label: "FAQ" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:p-2 focus:bg-foreground focus:text-background focus:rounded"
      >
        Skip to main content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b-2 border-foreground"
            : "bg-background/90 backdrop-blur-md border-b-2 border-foreground"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <Link
            href="#"
            className="flex items-center gap-2"
            title="Mohammad Kazim — Software Engineer"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-foreground bg-foreground text-background font-display text-lg">
              MK
            </span>
            <span className="font-display text-2xl tracking-wide text-foreground">
              MOHAMMAD KAZIM
            </span>
          </Link>

          <ul className="hidden items-center gap-6 lg:flex lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-semibold text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
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

        {isMenuOpen && (
          <nav
            className="lg:hidden border-t-2 border-foreground bg-background px-5 pb-6 pt-4"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base font-semibold text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="inline-block rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background mt-2"
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
