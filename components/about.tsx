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
    title: "AI & LLM Integration",
    desc: "Building production AI assistants, prompt engineering frameworks, and RAG-powered applications with safety guardrails.",
  },
  {
    emoji: "🛡️",
    title: "AI Security",
    desc: "Prompt injection detection, input sanitization, output validation, hallucination mitigation, and NIST/SOC 2 compliance for AI systems.",
  },
  {
    emoji: "⚡",
    title: "Workflow Automation",
    desc: "End-to-end agentic automation using n8n, webhooks, and LLM tool-calling to automate multi-step business processes.",
  },
  {
    emoji: "🐍",
    title: "Full-Stack Development",
    desc: "React/TypeScript interfaces backed by Node.js, Express & Python (FastAPI) services, with PHP (OOP) where the stack calls for it — end to end.",
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
            Full-Stack Products, AI-Integrated
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
            <strong className="text-foreground">Full-Stack Engineer</strong> based in{" "}
            <strong className="text-foreground">India</strong>, building{" "}
            <strong className="text-foreground">React/TypeScript</strong> interfaces and{" "}
            <strong className="text-foreground">Node.js/Python</strong> backends, with production experience
            integrating LLM APIs via prompt engineering.
          </p>
          <p>
            I&apos;ve shipped a React/TypeScript operator dashboard, a RAG-grounded AI assistant, and a
            production multi-tenant SaaS platform — delivering measurable results such as supporting{" "}
            <strong className="text-foreground">500+ daily transactions</strong>, cutting load times by{" "}
            <strong className="text-foreground">11.7×</strong>, and reducing manual effort by{" "}
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
