"use client"

import { ArrowRight, Download, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "./aceternity/text-generate-effect"
import { SilkBackground } from "./aceternity/silk-background"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <SilkBackground>
      <section
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
        id="main-content"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
            aria-hidden="true"
          />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <motion.div
              className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-medium border border-primary/30 flex items-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Welcome to my portfolio
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Mohammad Kazim
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-muted-foreground mb-4 text-balance font-semibold"
          >
            Software Engineer
          </motion.p>

          <motion.div variants={itemVariants} className="mb-12">
            <TextGenerateEffect
              words="Software Engineer with 1+ year of experience building production applications, backend services, automation workflows, and database-driven systems across Python, JavaScript, SQL, REST APIs, Linux, Docker, and AWS."
              className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
              duration={0.05}
              filter={true}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="#process"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="/api/resume"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary/50 rounded-lg font-medium hover:bg-primary/10 hover:border-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
              <Download className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: "1+", label: "Years Experience" },
              { value: "15+", label: "Production Systems" },
              { value: "8.45", label: "CGPA" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="p-4 rounded-lg bg-card border border-border/50 hover:border-primary transition-colors"
              >
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, delay: idx * 0.2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </SilkBackground>
  )
}
