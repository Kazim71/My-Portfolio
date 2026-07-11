"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pt-32 pb-16 md:px-10 md:pt-40"
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        className="absolute right-[8%] top-28 hidden h-28 w-28 text-foreground lg:block"
        aria-hidden="true"
      >
        <path d="M8 14c34 6 66 30 74 66" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M62 78c8 4 16 6 22 4M84 82c-2-8-4-14-2-22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full bg-mint px-6 py-2 text-sm font-bold text-foreground"
        >
          Software Engineer &nbsp;&bull;&nbsp; AI Builder &nbsp;&bull;&nbsp; Backend Developer
        </motion.span>

        <h1 className="mt-6 font-display text-[2.9rem] leading-[1.02] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          <span className="sr-only">Mohammad Kazim — Software Engineer &amp; AI Builder in India. </span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mr-3 inline-block"
          >
            SOFTWARE
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 block"
          >
            <span className="inline-block bg-pink px-3 pb-1 text-foreground">ENGINEER</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          Software Engineer &amp; AI Builder in India, building production-grade AI applications,
          backend platforms, and agentic automation workflows using Python, FastAPI, React, and LLM technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-foreground px-8 py-4 text-sm font-bold text-background transition-transform hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-foreground bg-background px-8 py-4 text-sm font-bold text-foreground transition-transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
