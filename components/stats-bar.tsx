"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "1.5+", label: "Years of Professional Experience" },
  { value: "15+", label: "Production Business Workflows" },
  { value: "500+", label: "Daily Transactions Supported" },
  { value: "8.45", label: "CGPA — Academic Excellence" },
]

export default function StatsBar() {
  return (
    <section className="border-y-2 border-foreground bg-foreground px-5 py-14 md:px-10">
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
            <div className="font-display text-5xl text-mint md:text-6xl">{stat.value}</div>
            <p className="mt-2 text-sm font-medium text-background/80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
