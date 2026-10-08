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
    role: "Full-Stack Software Engineer — AI Solutions",
    company: "EZ Rankings",
    period: "March 2026 – Present",
    location: "Noida, India",
    highlights: [
      "Gather requirements with clients and stakeholders and deliver 15+ AI automation workflows using n8n, LLM APIs, webhooks, and internal tools — owning each from scoping to rollout",
      "Build and maintain REST API integrations in Node.js and Python, connecting CRM, analytics, and third-party platforms with request validation, retries, and error handling",
      "Automated HubSpot CRM workflows (contacts, deals, lead routing) through the HubSpot API and webhooks, connecting CRM data with AI services",
      "Built Custom GPTs and AI agents with structured prompts, output constraints, and guardrails for consistent, traceable business workflows",
      "Shipped self-service dashboards and automations used daily by 50+ stakeholders, cutting manual effort by 40%",
      "Debug failed executions through logs, payload inspection, and root-cause analysis across APIs, SQL databases, and AWS EC2 / Oracle Cloud hosting",
    ],
  },
  {
    role: "Software Engineer — Backend",
    company: "Clay Brains",
    period: "December 2024 – February 2026",
    location: "Delhi, India",
    highlights: [
      "Built and maintained Python REST services, backend modules, and SQL schemas behind customer-facing web apps, including authentication and input validation",
      "Developed web features with React, Next.js, Node.js, and Express.js, plus third-party API integrations with auth, validation, and request/response transformation",
      "Optimized SQL queries and indexing, cutting critical query time by 60%",
      "Built JWT/RBAC authentication and API monitoring and alerting, reducing issue-detection time by 30%",
      "Maintained Docker environments and GitHub Actions CI/CD pipelines, keeping 99.9% uptime across 5+ environments",
      "Resolved production incidents through log analysis, database inspection, and root-cause fixes across application and integration layers",
    ],
  },
  {
    role: "Project Member — Data Science & AI Club",
    company: "Bharati Vidyapeeth Deemed University",
    period: "September 2024 – May 2025",
    location: "Pune, India",
    highlights: [
      "Built ML and GenAI projects (fraud detection, document QA) in a 5-member team, deployed locally and on cloud",
      "Ran Python and ML workshops for 40+ juniors with hands-on exercises",
    ],
  },
  {
    role: "Edge AI Intern — Instrumentation & Control",
    company: "SAIL",
    period: "June 2024 – August 2024",
    location: "India",
    highlights: [
      "Applied ML to industrial processes, analyzing 250K+ time-series sensor readings to optimize performance",
      "Built lightweight ML models and pipelines for real-time monitoring on edge devices, without altering existing hardware",
      "Developed interactive dashboards that surfaced insights for management and engineers",
      "Worked with cross-functional teams to integrate ML insights into instrumentation workflows",
    ],
  },
]

const education = [
  {
    degree: "B.Tech, Electronics & Communication Engineering",
    institution: "Bharati Vidyapeeth Deemed University, Pune",
    period: "2021 – 2025",
    detail: "CGPA: 8.45/10 · Final-year project: ML-based acoustic motorcycle fault detection (Random Forest, SVM, KNN) — 94.7% accuracy",
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
