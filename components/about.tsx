"use client"

import { motion } from "framer-motion"
import { Server, Zap, Shield, GitBranch, Terminal } from "lucide-react"

export default function About() {
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

  const principles = [
    { title: "Reliability First", desc: "Systems should be predictable, stable, and resilient to failure." },
    { title: "Clean Architecture", desc: "Separation of concerns, modularity, and maintainability over clever hacks." },
    { title: "Scalable APIs", desc: "Designing for performance, security, and developer experience." },
    { title: "Automation over Repetition", desc: "If it has to be done more than twice, automate it." },
    { title: "Continuous Learning", desc: "Constantly expanding knowledge in systems, architecture, and new tools." },
  ]

  const focusAreas = [
    { icon: <Server className="w-5 h-5" />, title: "Backend Systems", desc: "Building scalable and robust backend architecture." },
    { icon: <Zap className="w-5 h-5" />, title: "Automation pipelines", desc: "Streamlining workflows to reduce operational overhead." },
    { icon: <Shield className="w-5 h-5" />, title: "Database Optimization", desc: "Designing efficient schemas and query optimization." },
    { icon: <GitBranch className="w-5 h-5" />, title: "Cloud Infrastructure", desc: "Deploying and managing AWS and Docker environments." },
  ]

  return (
    <section id="about" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
      >
        {/* Left Column: Heading */}
        <motion.div variants={itemVariants} className="lg:col-span-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            About
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        {/* Right Column: Content */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Summary */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">Summary</h3>
            <div className="text-base text-secondary-foreground leading-relaxed space-y-4 max-w-2xl">
              <p>
                I am a Software Engineer with over a year of hands-on experience building and maintaining
                production applications, backend services, automation workflows, and database-driven systems.
              </p>
              <p>
                My expertise spans Python, JavaScript, SQL, REST APIs, Linux, Docker, and AWS. I have successfully 
                delivered solutions across 15+ production environments, specializing in API integrations, data processing, 
                infrastructure troubleshooting, and application reliability.
              </p>
            </div>
          </motion.div>

          {/* Core Focus */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">Core Focus</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 text-primary shrink-0 p-2 bg-primary/10 rounded-md">
                    {area.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-foreground">{area.title}</h4>
                    <p className="text-sm text-secondary-foreground mt-1 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Engineering Principles */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">Engineering Principles</h3>
            <ul className="space-y-4 pt-2">
              {principles.map((principle, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <Terminal className="w-5 h-5 text-primary shrink-0 mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <span className="font-medium text-foreground">{principle.title}</span>
                    <span className="text-secondary-foreground ml-2">— {principle.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
