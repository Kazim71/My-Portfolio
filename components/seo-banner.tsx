"use client"

import { motion } from "framer-motion"

export default function SeoBanner() {
  const highlights = [
    "500+ daily transactions supported",
    "40% reduction in manual effort",
    "99.9% uptime on production infrastructure",
    "Enterprise clients across India",
  ]

  const tags = [
    "OpenAI", "Claude", "FastAPI", "n8n", "RAG", "AI Agents", "Python", "GraphQL",
  ]

  return (
    <section aria-label="Software Engineer & AI Solutions in India" className="border-t-2 border-foreground bg-sun px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl leading-tight tracking-tight text-foreground md:text-5xl">
            Software Engineer &amp; AI Solutions in India
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/80 md:text-lg">
            I&apos;m Mohammad Kazim — I build production AI applications, backend platforms, and agentic
            automation workflows using Python, FastAPI, React, OpenAI, Claude, RAG, and n8n.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="rounded-2xl border-2 border-foreground bg-background px-4 py-3 text-sm font-bold text-foreground">
                {h}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border-2 border-foreground bg-background px-4 py-1.5 text-xs font-bold text-foreground">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
