"use client"

import { useState } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"

interface HeaderProps {
  isDark: boolean
  toggleDarkMode: () => void
}

export default function Header({ isDark, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#process", label: "Process" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:p-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="#"
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MK</span>
              </div>
              <span className="font-bold text-lg hidden sm:inline">Mohammad</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-2 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 hover:bg-secondary rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
