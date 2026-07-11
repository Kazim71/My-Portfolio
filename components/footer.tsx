"use client"

import { Linkedin } from "lucide-react"

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className || "h-4 w-4 text-sun"} aria-hidden="true">
      <path
        d="M24 3c2 12 9 19 21 21-12 2-19 9-21 21-2-12-9-19-21-21 12-2 19-9 21-21Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-foreground bg-foreground px-5 py-12 text-background md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-background bg-background text-foreground font-display text-lg">
            MK
          </span>
          <span className="font-display text-2xl tracking-wide">Mohammad Kazim</span>
        </div>

        <p className="max-w-md text-sm text-background/70">
          Building production-grade backend systems, automation workflows, and reliable applications.
        </p>

        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold">
          <a href="#projects" className="text-background/80 hover:text-background">Projects</a>
          <a href="#experience" className="text-background/80 hover:text-background">Experience</a>
          <a href="#about" className="text-background/80 hover:text-background">About</a>
          <a href="#events-preview" className="text-background/80 hover:text-background">Events</a>
          <a href="#skills" className="text-background/80 hover:text-background">Stack</a>
          <a href="#blog" className="text-background/80 hover:text-background">Blog</a>
          <a href="#contact" className="text-background/80 hover:text-background">Contact</a>
        </nav>

        <a
          href="https://linkedin.com/in/mohammadkazim71"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on LinkedIn"
          className="inline-flex items-center gap-2 rounded-full border-2 border-background px-5 py-2 text-sm font-bold text-background transition-transform hover:-translate-y-1 hover:bg-background hover:text-foreground"
        >
          <Linkedin className="h-5 w-5" aria-hidden="true" />
          Connect
        </a>

        <div className="flex items-center gap-2 text-sm text-background/70">
          <StarIcon />
          If you like my work, consider connecting on LinkedIn!
          <StarIcon />
        </div>

        <p className="text-xs text-background/50">
          &copy; {currentYear} Mohammad Kazim. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
