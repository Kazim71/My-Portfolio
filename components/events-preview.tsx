"use client"

import { motion } from "framer-motion"
import { CalendarDays, Sparkles, ArrowRight } from "lucide-react"

function WavySvg() {
  return (
    <svg viewBox="0 0 140 24" fill="none" className="mx-auto mt-3 h-5 w-32 text-pink" aria-hidden="true">
      <path d="M2 12c10-12 20 12 30 0s20-12 30 0 20 12 30 0 20-12 30 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

const eventsList = [
  "AirLynk Platform Launch",
  "GrowScience AI Agent Deployment",
  "StructuraUI Open Source Release",
]

export default function EventsPreview() {
  return (
    <section id="events-preview" className="border-t-2 border-foreground bg-background px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            Highlights
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-6xl">
            Events &amp; Highlights
          </h2>
          <WavySvg />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mt-12 rounded-[32px] border-2 border-foreground bg-secondary p-6 shadow-brutal-sm md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-foreground">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  Featured events
                </div>
                <h3 className="mt-4 font-display text-3xl tracking-tight text-foreground md:text-4xl">
                  Launches, deployments, and key milestones in one place.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                  A curated glimpse of production launches, AI agent deployments,
                  and platform milestones — from enterprise AI systems to open source contributions.
                </p>
              </div>

              <div className="rounded-[24px] border-2 border-foreground bg-card p-6">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Quick view
                </div>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {eventsList.map((event) => (
                    <li key={event} className="rounded-2xl border border-foreground bg-background px-4 py-3">
                      {event}
                    </li>
                  ))}
                </ul>
                <a
                  href="#projects"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
                >
                  View projects
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
