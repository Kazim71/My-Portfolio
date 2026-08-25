"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

function WavySvg() {
  return (
    <svg viewBox="0 0 140 24" fill="none" className="mx-auto mt-3 h-5 w-32 text-pink" aria-hidden="true">
      <path d="M2 12c10-12 20 12 30 0s20-12 30 0 20 12 30 0 20-12 30 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

const experiences = [
  {
    role: "Software Engineer — Full-Stack & AI Integration",
    company: "EZ Rankings",
    period: "March 2026 – Present",
    location: "Noida, India",
    highlights: [
      "Developed and maintained Node.js/Python REST APIs integrating CRM, analytics, and third-party platforms across 15+ business workflows; debugged production issues end to end and deployed fixes directly",
      "Designed prompt engineering workflows integrating OpenAI's API into internal tools via n8n, wiring LLM calls, webhooks, and third-party APIs into multi-step automations covering 15+ business processes",
      "Automated multi-step operational workflows end to end, cutting manual effort by 40% and enabling self-service dashboards used daily by 50+ people",
      "Translated operational challenges into scalable, AI-driven workflow solutions in collaboration with stakeholders",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Clay Brains",
    period: "February 2025 – February 2026",
    location: "Delhi, India",
    highlights: [
      "Developed backend modules and REST APIs in JavaScript and Python; debugged and optimized SQL/database queries, cutting query time by 60% on the production database",
      "Built JWT/RBAC authentication modules and real-time WebSocket services; deployed via GitHub Actions CI/CD, maintaining 99.9% uptime across 5+ environments",
      "Designed production backend services and data pipelines on AWS EC2",
      "Developed real-time monitoring solutions, reducing issue-detection time by 30%",
    ],
  },
]

const education = [
  {
    degree: "B.Tech, Electronics & Communication Engineering",
    institution: "Bharati Vidyapeeth Deemed University, Pune",
    period: "2021 – 2025",
    detail: "CGPA: 8.45/10",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            Career
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-6xl">
            Professional Experience
          </h2>
          <WavySvg />
        </motion.div>

        <div className="mt-14 space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="rounded-3xl border-2 border-foreground bg-card p-7 transition-shadow hover:shadow-brutal md:p-9">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-foreground">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block rounded-full bg-mint px-4 py-1 text-xs font-bold text-foreground">
                      {exp.period}
                    </span>
                    <p className="mt-2 flex items-center justify-end gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-3xl border-2 border-foreground bg-card p-7 transition-shadow hover:shadow-brutal md:p-9">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-foreground">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block rounded-full bg-sun px-4 py-1 text-xs font-bold text-foreground">
                      {edu.period}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">{edu.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
