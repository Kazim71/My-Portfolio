"use client"

import { Fragment, useEffect, useState } from "react"
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const
// The intro runs as the page loader's curtain lifts (see page-loader.tsx).
const D = 1.25

const rotatingWords = [
  { text: "FULL-STACK APPS", bg: "bg-mint" },
  { text: "AI SOLUTIONS", bg: "bg-pink" },
  { text: "AUTOMATIONS", bg: "bg-sun" },
]

const HEADLINE = "BUILDING"
const TRACE = ["Request", "API", "AI", "Automate", "Ship"]

// Highlighter-wipe word: the color bar sweeps in from the left, the word rises
// into it, then on exit the word lifts away and the bar sweeps out to the right.
const bar = {
  initial: { scaleX: 0, originX: 0 },
  animate: { scaleX: 1, originX: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { scaleX: 0, originX: 1, transition: { duration: 0.42, ease: EASE, delay: 0.12, originX: { duration: 0 } } },
}
const word = {
  initial: { y: "105%" },
  animate: { y: "0%", transition: { duration: 0.6, ease: EASE, delay: 0.28 } },
  exit: { y: "-105%", transition: { duration: 0.36, ease: EASE } },
}

export default function Hero() {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()

  // Auto-rotating text is skipped entirely for reduced-motion users.
  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), 3400)
    return () => clearInterval(id)
  }, [reduce])

  const current = rotatingWords[index]

  return (
    <MotionConfig reducedMotion="user">
      <section id="top" className="relative overflow-hidden px-5 pt-32 pb-16 md:px-10 md:pt-40">
        {/* Faint technical grid, masked to the center — sets up the system language used below. */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: D - 0.2 }}
          className="pointer-events-none absolute inset-0 -z-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--foreground) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--foreground) 7%, transparent) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%)",
          }}
        />

        <svg
          viewBox="0 0 120 120"
          fill="none"
          className="absolute right-[8%] top-28 hidden h-28 w-28 animate-float-slow text-foreground lg:block"
          aria-hidden="true"
        >
          <motion.path
            d="M8 14c34 6 66 30 74 66"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: D + 1.1, ease: EASE }}
          />
          <motion.path
            d="M62 78c8 4 16 6 22 4M84 82c-2-8-4-14-2-22"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: D + 1.9, ease: EASE }}
          />
        </svg>

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: D, ease: EASE }}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-foreground bg-mint px-4 py-2 text-xs font-bold text-foreground sm:gap-2.5 sm:px-5 sm:text-sm"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/50 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            Full-Stack Software Engineer &nbsp;·&nbsp; AI Solutions
          </motion.span>

          <h1 className="mt-6 font-display text-[2.9rem] leading-[1.02] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            <span className="sr-only">
              Mohammad Kazim — Full-Stack Software Engineer, AI Solutions, in Noida, India. Building {current.text.toLowerCase()}.
            </span>

            {/* Letter-mask reveal: each glyph rises out of its own clipping box. */}
            <span className="block" aria-hidden="true">
              {HEADLINE.split("").map((ch, i) => (
                <span key={i} className="inline-block overflow-hidden pt-[0.06em] -mt-[0.06em] align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.75, delay: D + 0.12 + i * 0.045, ease: EASE }}
                  >
                    {ch}
                  </motion.span>
                </span>
              ))}
            </span>

            <span className="mt-2 block" aria-hidden="true">
              {/* All words sit invisibly in one grid cell, so the slot is always as wide
                  as the widest word and swapping never re-centers the line (no layout shift). */}
              <span className="relative inline-grid min-h-[1.12em] place-items-center align-top">
                {rotatingWords.map((w) => (
                  <span key={w.text} className="invisible col-start-1 row-start-1 px-3 pb-1">
                    {w.text}
                  </span>
                ))}
                {/* Stretched to the full slot and centered via text-align: the wrapper itself
                    never moves, only the freshly mounted word changes (which CLS doesn't count). */}
                <span className="col-start-1 row-start-1 w-full justify-self-stretch text-center">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={current.text}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative inline-block overflow-hidden px-3 pb-1"
                  >
                    <motion.span variants={bar} className={`absolute inset-0 ${current.bg}`} />
                    <motion.span variants={word} className="relative inline-block text-foreground">
                      {current.text}
                    </motion.span>
                  </motion.span>
                </AnimatePresence>
                </span>
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: D + 0.6, ease: EASE }}
            className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            Full-Stack Software Engineer in India with 1.8+ years building React/TypeScript front ends, Node.js and
            Python backends, and production AI — LLM integrations, RAG, AI agents, and n8n automations that cut
            manual work by 40% across 15+ business workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: D + 0.75, ease: EASE }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-foreground px-8 py-4 text-sm font-bold text-background transition-transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#resume"
              className="rounded-full border-2 border-foreground bg-background px-8 py-4 text-sm font-bold text-foreground transition-transform hover:-translate-y-1"
            >
              View Resume
            </a>
          </motion.div>

          {/* Request trace — a one-line preview of the "From Request to Production" piece below. */}
          <div
            aria-hidden="true"
            className="relative mx-auto mt-12 flex max-w-lg items-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px]"
          >
            {TRACE.map((step, i) => (
              <Fragment key={step}>
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: D + 1.0 + i * 0.14, ease: EASE }}
                  // Opaque label above the packet: the packet passes *behind* each step,
                  // visible only on the connecting lines.
                  className="relative z-10 shrink-0 bg-background px-1"
                >
                  {step}
                </motion.span>
                {i < TRACE.length - 1 && (
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.35, delay: D + 1.07 + i * 0.14, ease: EASE }}
                    className="mx-2 h-px min-w-3 flex-1 origin-left bg-foreground/30 sm:mx-3"
                  />
                )}
              </Fragment>
            ))}
            <span className="hero-trace pointer-events-none absolute inset-y-0 left-0 right-0 z-0 flex items-center justify-end">
              <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_0_4px_color-mix(in_oklab,var(--mint)_30%,transparent)]" />
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: D + 1.8 }}
            className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80 sm:text-[11px]"
          >
            Currently at EZ Rankings · Noida, India
          </motion.p>
        </div>
      </section>
    </MotionConfig>
  )
}
