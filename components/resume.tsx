"use client"

import { motion } from "framer-motion"
import { Download, Eye, FileText, Briefcase, GraduationCap, Wrench } from "lucide-react"

const RESUME_PATH = "/Mohammad_Kazim_Resume.pdf"

function WavySvg() {
  return (
    <svg viewBox="0 0 140 24" fill="none" className="mx-auto mt-3 h-5 w-32 text-pink" aria-hidden="true">
      <path d="M2 12c10-12 20 12 30 0s20-12 30 0 20 12 30 0 20-12 30 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

const highlights = [
  { icon: Briefcase, label: "Experience", value: "1.8+ years — EZ Rankings (Mar 2026 – Present), Clay Brains (Dec 2024 – Feb 2026)" },
  { icon: Wrench, label: "Focus", value: "Full-stack development, AI agents & RAG, workflow automation" },
  { icon: GraduationCap, label: "Education", value: "B.Tech ECE — 8.45 CGPA" },
]

export default function Resume() {
  return (
    <section id="resume" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            Resume
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-6xl">
            My Resume
          </h2>
          <WavySvg />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Summary card */}
          <div className="flex flex-col rounded-3xl border-2 border-foreground bg-card p-7 md:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-foreground bg-mint">
                <FileText className="h-6 w-6 text-foreground" aria-hidden="true" />
              </span>
              <div className="text-left">
                <p className="font-display text-2xl tracking-tight text-foreground">Mohammad Kazim</p>
                <p className="text-sm font-semibold text-muted-foreground">Full-Stack Software Engineer · AI Solutions</p>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {highlights.map((h) => {
                const Icon = h.icon
                return (
                  <li key={h.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 border-foreground bg-background">
                      <Icon className="h-4 w-4 text-foreground" aria-hidden="true" />
                    </span>
                    <div className="text-left">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{h.label}</p>
                      <p className="text-sm font-semibold text-foreground">{h.value}</p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={RESUME_PATH}
                download
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition-transform hover:-translate-y-1"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download PDF
              </a>
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-6 py-3 text-sm font-bold text-foreground transition-transform hover:-translate-y-1"
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
                Open in new tab
              </a>
            </div>
          </div>

          {/* Embedded preview */}
          <div className="overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-brutal-sm">
            <div className="flex items-center gap-2 border-b-2 border-foreground bg-background px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-pink" />
              <span className="h-3 w-3 rounded-full bg-sun" />
              <span className="h-3 w-3 rounded-full bg-mint" />
              <span className="ml-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Mohammad Kazim Resume
              </span>
            </div>
            <object
              data={`${RESUME_PATH}#toolbar=0&navpanes=0&view=FitH`}
              type="application/pdf"
              className="h-[340px] w-full bg-white"
              aria-label="Resume preview"
            >
              <div className="flex h-[340px] items-center justify-center p-8 text-center text-sm text-muted-foreground">
                <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline">
                  Preview unavailable — open the resume PDF here.
                </a>
              </div>
            </object>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
