"use client"

import { motion } from "framer-motion"
import { Newspaper, PenLine, ArrowRight } from "lucide-react"

function WavySvg() {
  return (
    <svg viewBox="0 0 140 24" fill="none" className="mx-auto mt-3 h-5 w-32 text-pink" aria-hidden="true">
      <path d="M2 12c10-12 20 12 30 0s20-12 30 0 20 12 30 0 20-12 30 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

const posts = [
  "Building Agentic Workflows with n8n & LLM Tool-Calling",
  "Prompt Engineering Patterns for Production AI Agents",
  "Designing GraphQL APIs for Real-Time Platforms",
]

export default function BlogPreview() {
  return (
    <section id="blog" className="border-t-2 border-foreground bg-secondary px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            Writing
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-6xl">
            From the Blog
          </h2>
          <WavySvg />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mt-12 rounded-[32px] border-2 border-foreground bg-background p-6 shadow-brutal-sm md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-foreground">
                  <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
                  Notes &amp; writeups
                </div>
                <h3 className="mt-4 font-display text-3xl tracking-tight text-foreground md:text-4xl">
                  Thoughts on AI engineering, automation, and backend systems.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                  A running log of what I&apos;m learning while shipping production AI
                  systems — from prompt engineering to distributed backend architecture.
                </p>
              </div>

              <div className="rounded-[24px] border-2 border-foreground bg-card p-6">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                  <PenLine className="h-4 w-4" aria-hidden="true" />
                  Recent posts
                </div>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {posts.map((post) => (
                    <li key={post} className="rounded-2xl border border-foreground bg-background px-4 py-3">
                      {post}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
                >
                  Get notified
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
