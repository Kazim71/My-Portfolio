"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

function WavySvg() {
  return (
    <svg viewBox="0 0 140 24" fill="none" className="mx-auto mt-3 h-5 w-32 text-pink" aria-hidden="true">
      <path d="M2 12c10-12 20 12 30 0s20-12 30 0 20 12 30 0 20-12 30 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

const faqs = [
  {
    q: "Who is Mohammad Kazim?",
    a: "Mohammad Kazim is a Full-Stack Engineer based in India with 1.5+ years of professional experience building React/TypeScript interfaces and PHP/Laravel backends, with production experience integrating LLM APIs via prompt engineering. He's shipped a React/TypeScript operator dashboard, a RAG-grounded AI assistant, and a production multi-tenant SaaS platform — working across the full stack from frontend to cloud infrastructure.",
  },
  {
    q: "What kind of AI solutions does Kazim build?",
    a: "Kazim designs and deploys end-to-end AI-powered systems — including LLM-based chatbots, RAG pipelines, agentic workflows with tool-calling, AI security layers with prompt injection detection, and multi-step automation using n8n. Every solution is built for production with observability, error handling, and scalability in mind.",
  },
  {
    q: "What technologies and tools does Kazim work with?",
    a: "Core stack: React, Next.js, TypeScript, PHP (Laravel, WordPress/ACF), Node.js, Express, Python, FastAPI, GraphQL. AI/ML: OpenAI, Gemini, Claude, RAG, prompt engineering. Automation: n8n, agentic workflows, webhooks. Infra: PostgreSQL, Supabase, MySQL, MongoDB, Docker, AWS, Oracle Cloud, Linux, CI/CD. Security: AI safety, prompt injection detection, NIST/SOC 2 compliance.",
  },
  {
    q: "What results has Kazim delivered in production?",
    a: "Key outcomes include: an 11.7× load-time reduction (6.1s → 525ms) on a production SaaS platform, 500+ daily transactions on a cloud-native platform, 40% reduction in manual effort through AI automation, 99.9% uptime on production infrastructure, and enterprise AI agents handling real customer interactions with built-in safety guardrails.",
  },
  {
    q: "Is Kazim available for hire or freelance work?",
    a: "Yes. Kazim is open to full-time software engineering and AI roles (both in India and remote), as well as freelance projects involving AI integration, backend development, or automation. You can reach him via email, LinkedIn, or WhatsApp.",
  },
  {
    q: "How does Kazim approach AI security?",
    a: "Every AI system Kazim builds includes security by design — prompt injection detection, input sanitization, output validation, hallucination mitigation, and compliance with frameworks like NIST and SOC 2. AI safety isn't an afterthought; it's baked into the architecture from day one.",
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-6xl">
            Frequently Asked Questions
          </h2>
          <WavySvg />
        </motion.div>

        <dl className="mt-14 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <div className="rounded-3xl border-2 border-foreground bg-card transition-shadow hover:shadow-brutal-sm">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left md:p-7"
                  >
                    <dt className="font-display text-xl leading-tight tracking-tight text-foreground md:text-2xl">
                      {faq.q}
                    </dt>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-foreground" aria-hidden="true" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm text-muted-foreground md:px-7 md:pb-7 md:text-base">
                          {faq.a}
                        </div>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
