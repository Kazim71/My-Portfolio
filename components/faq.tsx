"use client"

import { motion } from "framer-motion"

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
    a: "Mohammad Kazim is a Software Engineer & AI Builder based in India, who builds production AI applications, backend platforms, and agentic automation workflows for enterprise clients using Python, FastAPI, React, and LLM technologies.",
  },
  {
    q: "What does a Software Engineer & AI Builder do?",
    a: "A Software Engineer & AI Builder designs, builds and deploys AI-powered applications and backend platforms — from LLM integration and prompt engineering to agentic automation workflows, GraphQL APIs, and cloud-native infrastructure that runs business operations at scale.",
  },
  {
    q: "What technologies does Kazim work with?",
    a: "Kazim works with Python, FastAPI, GraphQL, React, Next.js, TypeScript, OpenAI, Claude, Gemini, n8n, Docker, PostgreSQL, Redis, RabbitMQ, and cloud infrastructure to ship production-ready AI and backend systems.",
  },
  {
    q: "Is Kazim available for hire?",
    a: "Yes. Kazim is available for full-time software engineering and AI roles, both in India and remotely. You can reach him via email, LinkedIn, or GitHub.",
  },
]

export default function FAQ() {
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
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="rounded-3xl border-2 border-foreground bg-card p-6 md:p-7">
                <dt className="font-display text-xl leading-tight tracking-tight text-foreground md:text-2xl">
                  {faq.q}
                </dt>
                <dd className="mt-3 text-sm text-muted-foreground md:text-base">
                  {faq.a}
                </dd>
              </div>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
