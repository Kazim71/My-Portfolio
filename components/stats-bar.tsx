"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 1.5, suffix: "+", decimal: 1, label: "Years of Professional Experience" },
  { value: 15, suffix: "+", decimal: 0, label: "Production Business Workflows" },
  { value: 500, suffix: "+", decimal: 0, label: "Daily Transactions Supported" },
  { value: 8.45, suffix: "", decimal: 2, label: "CGPA — Academic Excellence" },
]

function AnimatedNumber({ value, suffix, decimal, trigger }: { value: number; suffix: string; decimal: number; trigger: boolean }) {
  const [display, setDisplay] = useState("0")

  useEffect(() => {
    if (!trigger) return
    const duration = 1800
    const steps = 60
    const stepTime = duration / steps
    let step = 0

    const interval = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * value
      setDisplay(current.toFixed(decimal))
      if (step >= steps) {
        setDisplay(value.toFixed(decimal))
        clearInterval(interval)
      }
    }, stepTime)

    return () => clearInterval(interval)
  }, [trigger, value, decimal])

  return <>{display}{suffix}</>
}

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="border-y-2 border-foreground bg-foreground px-5 py-14 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-5xl text-mint md:text-6xl">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} decimal={stat.decimal} trigger={inView} />
            </div>
            <p className="mt-2 text-sm font-medium text-background/80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
