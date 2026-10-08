"use client"

import { motion } from "framer-motion"

function WavySvg() {
  return (
    <svg viewBox="0 0 140 24" fill="none" className="mx-auto mt-3 h-5 w-32 text-pink" aria-hidden="true">
      <path
        d="M2 12c10-12 20 12 30 0s20-12 30 0 20 12 30 0 20-12 30 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

const services = [
  {
    emoji: "🤖",
    title: "AI Solutions & Agents",
    desc: "LLM applications, RAG over real documents, Custom GPTs, and AI agents with structured output, tool calling, and guardrails.",
  },
  {
    emoji: "🛡️",
    title: "AI Security",
    desc: "Prompt injection detection, input sanitization, output validation, hallucination mitigation, and human escalation paths for AI systems.",
  },
  {
    emoji: "⚡",
    title: "Workflow & CRM Automation",
    desc: "n8n, Zapier, and HubSpot automations — lead capture and routing, CRM data sync, and email/SMS follow-ups with retries and failure handling.",
  },
  {
    emoji: "🐍",
    title: "Full-Stack Development",
    desc: "React/TypeScript front ends backed by Node.js, Express, and Python (FastAPI) services — from data model to deployment.",
  },
  {
    emoji: "🌐",
    title: "Networking & Linux",
    desc: "Linux server administration, TCP/IP networking, DNS, Nginx, firewall configuration, SSL/TLS, and network debugging.",
  },
  {
    emoji: "☁️",
    title: "Cloud & DevOps",
    desc: "Containerized infrastructure with Docker, CI/CD pipelines, observability using Prometheus, Grafana & OpenTelemetry.",
  },
]

export default function About() {
  return (
    <section id="about" className="relative px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            About Me
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-6xl">
            Full-Stack Software, AI Solutions
          </h2>
          <WavySvg />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-base text-muted-foreground md:text-lg"
        >
          <p>
            I&apos;m <strong className="text-foreground">Mohammad Kazim</strong>, a{" "}
            <strong className="text-foreground">Full-Stack Software Engineer</strong> focused on{" "}
            <strong className="text-foreground">AI solutions</strong>, based in{" "}
            <strong className="text-foreground">Noida, India</strong>. For 1.8+ years I&apos;ve built{" "}
            <strong className="text-foreground">React/TypeScript</strong> front ends,{" "}
            <strong className="text-foreground">Node.js and Python</strong> backends, and the LLM integrations,
            agents, and automations that connect them to real business workflows.
          </p>
          <p>
            I work directly with stakeholders to turn requirements into shipped systems — a multi-tenant SaaS
            platform with <strong className="text-foreground">11.7× faster</strong> loads, a booking platform
            serving <strong className="text-foreground">550+ locations</strong>, a RAG agent over{" "}
            <strong className="text-foreground">200+ documents</strong>, and{" "}
            <strong className="text-foreground">15+ automation workflows</strong> that cut manual effort by{" "}
            <strong className="text-foreground">40%</strong>.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="group h-full rounded-3xl border-2 border-foreground bg-card p-7 transition-transform hover:-translate-y-1.5 hover:shadow-brutal">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-foreground bg-mint text-2xl transition-colors group-hover:bg-pink">
                  {svc.emoji}
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-foreground">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
