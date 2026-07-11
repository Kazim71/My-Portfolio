"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

function WavySvg() {
  return (
    <svg viewBox="0 0 140 24" fill="none" className="mx-auto mt-3 h-5 w-32 text-pink" aria-hidden="true">
      <path d="M2 12c10-12 20 12 30 0s20-12 30 0 20 12 30 0 20-12 30 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

const certifications = [
  {
    title: "AI Systems & Automation Engineering",
    issuer: "EZ Rankings",
    desc: "Building production AI-enabled backend services, agentic n8n workflows, and LLM-powered automation.",
    year: "2026",
  },
  {
    title: "Backend & Infrastructure Engineering",
    issuer: "Clay Brains",
    desc: "Production backend services, AWS infrastructure, authentication systems, and database optimization.",
    year: "2025",
  },
  {
    title: "B.Tech — Electronics & Communication",
    issuer: "Bharati Vidyapeeth Deemed University",
    desc: "Bachelor of Technology with 8.45/10 CGPA, strong foundation in engineering and systems thinking.",
    year: "2025",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            Credentials
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-6xl">
            Certifications
          </h2>
          <WavySvg />
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="flex h-full flex-col rounded-3xl border-2 border-foreground bg-card p-6 transition-transform hover:-translate-y-1.5 hover:shadow-brutal">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-foreground bg-sun">
                  <Award className="h-6 w-6 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl leading-tight tracking-tight text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-foreground">{cert.issuer}</p>
                <p className="mt-2 text-sm text-muted-foreground">{cert.desc}</p>
                <span className="mt-auto pt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
