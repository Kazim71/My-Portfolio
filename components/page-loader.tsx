"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useMotionValue, useTransform, animate } from "framer-motion"

const EASE = [0.65, 0, 0.35, 1] as const

export default function PageLoader() {
  const [done, setDone] = useState(false)
  const [count, setCount] = useState(0)
  const progress = useMotionValue(0)
  const scaleX = useTransform(progress, [0, 100], [0, 1])

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setDone(true)
      return
    }

    document.body.style.overflow = "hidden"

    const controls = animate(progress, 100, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    })

    const timer = setTimeout(() => {
      setDone(true)
      document.body.style.overflow = ""
    }, 1750)

    return () => {
      controls.stop()
      clearTimeout(timer)
      document.body.style.overflow = ""
    }
  }, [progress])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] bg-foreground"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          aria-hidden="true"
        >
          {/* Two-panel curtain wipe on exit */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-foreground"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: EASE }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-foreground"
            exit={{ y: "100%" }}
            transition={{ duration: 0.7, ease: EASE }}
          />

          <div className="relative flex h-full flex-col items-center justify-center px-6">
            {/* Brand mark */}
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-background bg-background font-display text-2xl text-foreground"
            >
              MK
            </motion.span>

            {/* Name — clip reveal */}
            <div className="mt-7 overflow-hidden">
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-3xl uppercase tracking-[0.18em] text-background md:text-4xl"
              >
                Mohammad Kazim
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-background"
            >
              Software Engineer &middot; AI Solutions
            </motion.p>

            {/* Progress bar + counter, bottom-anchored */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 px-6 pb-8 md:px-10">
              <div className="flex items-end justify-between">
                <span className="font-display text-5xl leading-none text-background md:text-6xl">
                  {count}
                  <span className="text-mint">%</span>
                </span>
                <span className="mb-1 text-xs font-semibold uppercase tracking-[0.3em] text-background/50">
                  Loading
                </span>
              </div>
              <div className="h-0.5 w-full overflow-hidden bg-background/20">
                <motion.div className="h-full origin-left bg-mint" style={{ scaleX }} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
