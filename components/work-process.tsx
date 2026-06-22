"use client"

import { motion } from "framer-motion"
import { Search, PenTool, Code2, TestTube, Rocket, Activity, ArrowRight } from "lucide-react"

export default function WorkProcess() {
  const steps = [
    { icon: Search, title: "Discovery", desc: "Requirements & Analysis" },
    { icon: PenTool, title: "Architecture", desc: "Design & Data Models" },
    { icon: Code2, title: "Development", desc: "Backend & Integration" },
    { icon: TestTube, title: "Testing", desc: "Validation & QA" },
    { icon: Rocket, title: "Deployment", desc: "CI/CD & Release" },
    { icon: Activity, title: "Monitoring", desc: "Observability & Metrics" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <section id="process" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Engineering Workflow
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full overflow-x-auto pb-8"
      >
        <div className="flex items-center min-w-[800px] justify-between relative px-4">
          {/* Connecting line */}
          <div className="absolute top-8 left-8 right-8 h-px bg-border/80 z-0" />
          
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative z-10 flex flex-col items-center flex-1"
              >
                <div className="w-16 h-16 bg-card border-2 border-border flex items-center justify-center rounded-full mb-6 group-hover:border-primary transition-colors">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground text-sm tracking-wide">{step.title}</h3>
                  <p className="text-xs text-secondary-foreground mt-2 font-medium">{step.desc}</p>
                </div>
                {idx !== steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-secondary-foreground absolute top-[1.75rem] -right-2 opacity-50 bg-background" />
                )}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
