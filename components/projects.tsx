"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Zap } from "lucide-react"

function WavySvg() {
  return (
    <svg viewBox="0 0 140 24" fill="none" className="mx-auto mt-3 h-5 w-32 text-pink" aria-hidden="true">
      <path d="M2 12c10-12 20 12 30 0s20-12 30 0 20 12 30 0 20-12 30 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

const projects = [
  {
    num: "01",
    category: "Full-Stack SaaS",
    title: "LeadPulse — Multi-Tenant Lead Capture & Identity Resolution",
    desc: "Production platform for e-commerce storefronts, verified end-to-end against live data: diagnosed a CSP misconfiguration that silently disabled all client-side interactivity for three weeks, eliminated a recurring PostgREST 1,000-row truncation bug across three endpoints, resolved Postgres RLS query-planning timeouts invisible to service-role testing, and migrated the backend off a failing free-tier host onto a self-managed Oracle Cloud VM with a zero-downtime HTTPS cutover.",
    stack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Supabase", "Oracle Cloud", "nginx", "GitHub Actions"],
    impact: "11.7× faster loads (6.1s → 525ms), 23 verified migrations",
    href: "https://github.com/Kazim71",
  },
  {
    num: "02",
    category: "Enterprise AI",
    title: "AirLynk — Cloud-Native AI-Ready Platform",
    desc: "Cloud-native transportation platform supporting real-time booking, authentication, pricing, notifications, and operational dashboards for 300+ service locations with 500+ daily transactions.",
    stack: ["Python", "FastAPI", "GraphQL", "React", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
    impact: "300+ locations, 500+ daily transactions",
    href: "https://airportlimolink.ca",
  },
  {
    num: "03",
    category: "AI Agent",
    title: "GrowScience — Enterprise AI Agent",
    desc: "Enterprise AI agent architecture using prompt engineering, RAG, and AI safety guardrails across 15+ prompt frameworks integrating 200+ documents for domain-specific recommendations.",
    stack: ["Python", "OpenAI", "Prompt Engineering", "RAG", "AI Safety"],
    impact: "15+ prompt frameworks, 200+ documents",
    href: "https://chatbot.senadvertising.com/",
  },
  {
    num: "04",
    category: "AI SaaS",
    title: "StructuraUI — AI-Powered UI Generation",
    desc: "AI SaaS platform using Google Gemini to generate editable UI layouts from natural language prompts, supporting 20+ component types and reducing design-to-code time by 70%.",
    stack: ["Next.js", "Gemini", "TypeScript", "React"],
    impact: "70% faster design-to-code",
    href: "https://github.com/Kazim71/StructuraUI",
  },
  {
    num: "05",
    category: "Security & Compliance",
    title: "Compliance Automation & Asset Monitoring",
    desc: "Compliance monitoring platform integrating multi-source asset discovery pipelines with policy-as-code validation frameworks, continuous configuration compliance checks, and posture reports aligned to NIST and SOC 2 control requirements.",
    stack: ["Python", "Grafana", "PostgreSQL", "Docker", "AWS", "Policy-as-Code"],
    impact: "NIST & SOC 2 aligned automation",
    href: "https://github.com/Kazim71",
  },
  {
    num: "06",
    category: "Data Engineering",
    title: "ETL Pipeline & Observability System",
    desc: "ETL pipelines aggregating multi-source operational data into PostgreSQL with Grafana dashboards providing real-time visibility into system health, data quality posture, and compliance metrics across 10,000+ catalog items.",
    stack: ["Node.js", "PostgreSQL", "Grafana", "Docker", "GitHub Actions"],
    impact: "50% query latency reduction, 10,000+ items",
    href: "https://spacesbyu.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-t-2 border-foreground bg-secondary px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            Case Studies
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-6xl">
            Featured Projects
          </h2>
          <WavySvg />
        </motion.div>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full md:w-[calc(50%-0.75rem)]"
            >
              <div className="group flex h-full flex-col rounded-3xl border-2 border-foreground bg-card p-7 transition-transform hover:-translate-y-1.5 hover:shadow-brutal-lg md:p-9">
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl text-foreground/15">{project.num}</span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground bg-background transition-colors group-hover:bg-mint"
                  >
                    <ArrowUpRight className="h-5 w-5 text-foreground" aria-hidden="true" />
                  </a>
                </div>

                <span className="mt-2 inline-block w-fit rounded-full bg-pink px-3 py-1 text-xs font-bold text-foreground">
                  {project.category}
                </span>

                <h3 className="mt-3 font-display text-2xl tracking-tight text-foreground md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-foreground bg-background px-2.5 py-1 text-xs font-semibold text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex items-center gap-2 rounded-2xl bg-foreground px-4 py-3 text-sm font-bold text-background">
                    <Zap className="h-4 w-4 text-sun" aria-hidden="true" />
                    {project.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
