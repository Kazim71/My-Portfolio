"use client"

import { ArrowRight, Download, Server, Database, Activity, Globe, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  const technologies = ["Python", "Node.js", "PostgreSQL", "Docker", "AWS", "Linux"]

  return (
    <section className="min-h-screen pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center" id="main-content">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left relative z-10"
        >
          <motion.h1
            variants={itemVariants}
            className="text-[4rem] sm:text-[5rem] font-bold text-foreground tracking-tight leading-none mb-6"
          >
            Mohammad Kazim
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl text-secondary-foreground font-medium tracking-tight mb-6"
          >
            Software Engineer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-secondary-foreground mb-8 max-w-xl leading-relaxed"
          >
            Building backend systems, automation workflows, APIs, and cloud-native applications.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary border border-border text-foreground text-sm font-medium rounded-md"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/Kazim_Backend_Developer_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-transparent text-foreground rounded-md font-medium hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full aspect-square max-w-lg mx-auto lg:mx-0 flex items-center justify-center"
        >
          {/* Subtle grid background for the diagram area */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#23272F_1px,transparent_1px),linear-gradient(to_bottom,#23272F_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-20 pointer-events-none" />

          <div className="relative w-full h-full flex flex-col items-center justify-between py-8">
            
            {/* Client Tier */}
            <motion.div 
              className="w-48 bg-card border border-border rounded-lg p-4 shadow-sm relative z-10 flex items-center gap-3"
              whileHover={{ y: -2, borderColor: 'var(--primary)' }}
            >
              <Globe className="w-5 h-5 text-secondary-foreground" />
              <div className="text-sm font-medium text-foreground">Client</div>
            </motion.div>

            {/* Down Arrow */}
            <div className="w-px h-8 bg-border" />

            {/* API Gateway */}
            <motion.div 
              className="w-56 bg-secondary border border-border rounded-lg p-4 shadow-sm relative z-10 flex items-center gap-3"
              whileHover={{ y: -2, borderColor: 'var(--primary)' }}
            >
              <Shield className="w-5 h-5 text-secondary-foreground" />
              <div className="text-sm font-medium text-foreground">API Gateway</div>
            </motion.div>

            {/* Down Arrow */}
            <div className="w-px h-8 bg-border" />

            {/* Services Tier */}
            <div className="flex gap-6 w-full justify-center">
              <motion.div 
                className="w-40 bg-card border border-border rounded-lg p-4 shadow-sm flex flex-col items-center gap-2"
                whileHover={{ y: -2, borderColor: 'var(--primary)' }}
              >
                <Server className="w-5 h-5 text-primary" />
                <div className="text-xs font-medium text-foreground text-center">Auth Service</div>
              </motion.div>
              <motion.div 
                className="w-40 bg-card border border-border rounded-lg p-4 shadow-sm flex flex-col items-center gap-2"
                whileHover={{ y: -2, borderColor: 'var(--primary)' }}
              >
                <Server className="w-5 h-5 text-primary" />
                <div className="text-xs font-medium text-foreground text-center">Core API</div>
              </motion.div>
            </div>

            {/* Connecting Lines */}
            <div className="flex justify-center w-full my-4">
               <div className="w-px h-8 bg-border mr-10" />
               <div className="w-px h-8 bg-border ml-10" />
            </div>

            {/* Database & Analytics */}
            <div className="flex gap-6 w-full justify-center">
              <motion.div 
                className="w-40 bg-popover border border-border rounded-lg p-4 shadow-sm flex items-center gap-3"
                whileHover={{ y: -2, borderColor: 'var(--primary)' }}
              >
                <Database className="w-5 h-5 text-secondary-foreground" />
                <div className="text-xs font-medium text-foreground text-center">PostgreSQL</div>
              </motion.div>
              <motion.div 
                className="w-40 bg-popover border border-border rounded-lg p-4 shadow-sm flex items-center gap-3"
                whileHover={{ y: -2, borderColor: 'var(--primary)' }}
              >
                <Activity className="w-5 h-5 text-secondary-foreground" />
                <div className="text-xs font-medium text-foreground text-center">Analytics</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Metrics Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32"
      >
        {[
          { value: "15+", label: "Production Systems", desc: "Deployed and maintained" },
          { value: "1+", label: "Years Experience", desc: "Building backend services" },
          { value: "8.45", label: "CGPA", desc: "Academic excellence" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-6 rounded-lg bg-card border border-border hover:border-border/80 transition-colors flex flex-col"
          >
            <div className="text-4xl font-bold text-foreground mb-2">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
            <div className="text-sm text-secondary-foreground">{stat.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
