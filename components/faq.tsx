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
    a: "Mohammad Kazim is a Full-Stack Software Engineer focused on AI solutions, based in Noida, India. He has 1.8+ years of professional experience — Full-Stack Software Engineer (AI Solutions) at EZ Rankings since March 2026, and Software Engineer (Backend) at Clay Brains from December 2024 to February 2026. He builds React/TypeScript front ends, Node.js and Python backends, and production LLM integrations, AI agents, and automations.",
  },
  {
    q: "What kind of AI solutions does Kazim build?",
    a: "End-to-end AI systems for real business workflows: RAG agents grounded in real documents, Custom GPTs and AI agents with structured output and guardrails, an LLM-to-SQL analytics app where every number is computed by the database, and n8n automations for lead outreach, CRM sync with HubSpot, and feedback routing — built with retries, validation, and failure handling for production.",
  },
  {
    q: "What technologies and tools does Kazim work with?",
    a: "Full stack: React, Next.js, TypeScript, Node.js, Express, Python, FastAPI, GraphQL. AI: OpenAI, Anthropic Claude, Google Gemini, Groq, LangChain, LangGraph, LlamaIndex, RAG, vector databases, prompt engineering. Automation: n8n, Zapier, HubSpot, webhooks, Twilio, WhatsApp Business API. Data and infra: PostgreSQL, MySQL, MongoDB, Supabase, DuckDB, Redis, Docker, AWS EC2, Oracle Cloud, GitHub Actions, Linux.",
  },
  {
    q: "What results has Kazim delivered in production?",
    a: "Key outcomes include: an 11.7× load-time reduction (6.1s → 525ms) on a multi-tenant SaaS platform, a booking platform serving 550+ service locations and 350+ daily transactions, 15+ AI automation workflows used daily by 50+ stakeholders with 40% less manual effort, 60% faster critical SQL queries, and an outreach engine sending 200+ automated emails a day.",
  },
  {
    q: "Is Kazim available for hire or freelance work?",
    a: "Yes. Kazim is open to full-time software engineering and AI roles — in India, remote, onsite, or on US-timezone shifts — as well as freelance projects involving full-stack development, AI integration, or automation. You can reach him via email, LinkedIn, or WhatsApp.",
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
