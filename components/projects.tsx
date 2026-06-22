"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Server, Database, Activity, GitBranch } from "lucide-react"

export default function Projects() {
  const caseStudies = [
    {
      title: "Airport Reservation & Dispatch Management Platform",
      problem: "Managing complex booking operations and driver dispatches across 100+ geographical locations.",
      solution: "Built comprehensive backend workflows, automation pipelines, robust data validation layers, and operational reporting systems to handle high-throughput booking logic.",
      impact: "Automated the onboarding and management of 100+ service locations, significantly reducing manual operational effort and data entry errors.",
      stack: ["Python", "PostgreSQL", "REST APIs", "Automation"],
      architecture: [
        { name: "Booking Engine", icon: <Server className="w-4 h-4" /> },
        { name: "Validation Layer", icon: <CheckCircle2 className="w-4 h-4" /> },
        { name: "Reporting Pipeline", icon: <Activity className="w-4 h-4" /> },
        { name: "Data Processing", icon: <Database className="w-4 h-4" /> },
      ],
    },
    {
      title: "E-Commerce Catalog & Content Management Platform",
      problem: "Scaling a dynamic content management system to support complex relationships across hundreds of products and categories efficiently.",
      solution: "Developed reusable data models, administrative workflows, and optimized database-driven filtering and search APIs for performant catalog management.",
      impact: "Improved catalog retrieval performance, search efficiency, and system maintainability for large-scale e-commerce operations.",
      stack: ["Node.js", "MySQL", "REST APIs", "Data Modeling"],
      architecture: [
        { name: "Product Catalog", icon: <Database className="w-4 h-4" /> },
        { name: "Search & Filtering", icon: <Activity className="w-4 h-4" /> },
        { name: "Admin Workflows", icon: <GitBranch className="w-4 h-4" /> },
        { name: "API Layer", icon: <Server className="w-4 h-4" /> },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Engineering Case Studies
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-24"
      >
        {caseStudies.map((study, idx) => (
          <motion.div key={idx} variants={itemVariants} className="relative group">
            {/* Connecting line between case studies if not the last one */}
            {idx !== caseStudies.length - 1 && (
              <div className="hidden lg:block absolute -bottom-12 left-8 w-px h-12 bg-border/50" />
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              
              {/* Left Column: Context & Overview */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.stack.map(tech => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-secondary border border-border text-foreground rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Problem</h4>
                    <p className="text-secondary-foreground text-sm leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Solution</h4>
                    <p className="text-secondary-foreground text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Impact</h4>
                    <p className="text-foreground text-sm leading-relaxed font-medium">{study.impact}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Architecture Highlights */}
              <div className="lg:col-span-7 bg-card border border-border rounded-xl p-8 flex flex-col justify-center">
                <h4 className="text-base font-semibold text-foreground mb-6">Architecture Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.architecture.map((arch, archIdx) => (
                    <div 
                      key={archIdx} 
                      className="p-4 bg-background border border-border/50 rounded-lg flex items-center gap-3 hover:border-primary/50 transition-colors"
                    >
                      <div className="text-primary bg-primary/10 p-2 rounded-md">
                        {arch.icon}
                      </div>
                      <span className="font-medium text-sm text-foreground">{arch.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
