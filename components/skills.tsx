"use client"

import { motion } from "framer-motion"
import { Target } from "lucide-react"

function WavySvg() {
  return (
    <svg viewBox="0 0 140 24" fill="none" className="mx-auto mt-3 h-5 w-32 text-pink" aria-hidden="true">
      <path d="M2 12c10-12 20 12 30 0s20-12 30 0 20 12 30 0 20-12 30 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

const domains = [
  {
    title: "AI Engineering",
    skills: ["Agentic AI", "LLM Applications", "Prompt Engineering", "RAG", "AI Safety", "AI Evaluation", "OpenAI", "Claude", "Gemini"],
  },
  {
    title: "AI Security",
    skills: ["Prompt Injection Detection", "Input Sanitization", "Output Validation", "Hallucination Mitigation", "NIST / SOC 2", "AI Safety Guardrails"],
  },
  {
    title: "AI Automation",
    skills: ["n8n", "Agentic Workflows", "Workflow Orchestration", "Webhooks", "LLM Tool-Calling", "AI Agent Frameworks"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "PHP (OOP)", "REST APIs", "GraphQL APIs", "JWT", "OAuth2", "WebSockets"],
  },
  {
    title: "Networking & Linux",
    skills: ["Linux Administration", "TCP/IP", "DNS", "Nginx", "SSH", "Firewall & iptables", "Network Debugging", "SSL/TLS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "AWS", "GitHub Actions", "CI/CD", "RabbitMQ", "Prometheus", "Grafana", "OpenTelemetry"],
  },
]

const specializations = [
  "Full-Stack Development",
  "React & TypeScript",
  "Node.js & Python",
  "API Development",
  "AI-Powered Applications",
  "Agentic Automation",
  "LLM Integration",
  "AI Security & Safety",
  "Backend Systems",
  "Networking & Linux",
  "Cloud Infrastructure",
  "System Design",
]

export default function Skills() {
  return (
    <>
      <section id="skills" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
              Toolbox
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-6xl">
              Tech Stack
            </h2>
            <WavySvg />
          </motion.div>

          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {domains.map((domain, idx) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="h-full rounded-3xl border-2 border-foreground bg-card p-7">
                  <h3 className="font-display text-2xl tracking-tight text-foreground">
                    {domain.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {domain.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border-2 border-foreground bg-background px-3 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-mint"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-foreground bg-mint px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
              Focus Areas
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-6xl">
              Specialization
            </h2>
            <WavySvg />
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specializations.map((spec, idx) => (
              <motion.div
                key={spec}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <div className="flex h-full items-center gap-3 rounded-2xl border-2 border-foreground bg-background p-5 transition-transform hover:-translate-y-1 hover:shadow-brutal">
                  <Target className="h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
                  <span className="font-semibold text-foreground">{spec}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
