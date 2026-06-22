"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      role: "Backend Developer",
      company: "EZ Rankings",
      period: "Mar 2026 – Present",
      location: "India",
      highlights: [
        "Developed and maintained backend workflows, APIs, and database-driven applications across 15+ production systems.",
        "Built Python automation utilities for CSV ingestion, data validation, reporting, and workflow automation.",
        "Designed and integrated REST APIs, business validation layers, and data-processing workflows.",
        "Investigated and resolved production incidents involving API failures, deployment regressions, and database inconsistencies.",
      ],
    },
    {
      role: "Junior Web Developer",
      company: "Clay Brains",
      period: "Feb 2025 – Feb 2026",
      location: "India",
      highlights: [
        "Developed backend modules, reusable services, and data-driven features for production applications.",
        "Improved database performance through SQL query optimization, indexing strategies, and execution plan analysis.",
        "Managed Linux-based cloud infrastructure including AWS EC2, SSL configuration, DNS management, and deployment workflows.",
        "Participated in debugging, testing, code maintenance, and release activities across multiple projects.",
      ],
    },
  ]

  const education = [
    {
      degree: "B.Tech, Electronics & Communication Engineering",
      institution: "Bharati Vidyapeeth Deemed University",
      period: "2021 – 2025",
      detail: "CGPA: 8.45",
    },
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
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Experience */}
        <div className="lg:col-span-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Experience
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-6 sm:pl-8 group">
                {/* Timeline Line */}
                <div className="absolute top-2 bottom-0 left-[3px] w-[2px] bg-border group-last:bg-transparent" />
                
                {/* Timeline Node */}
                <div className="absolute top-2 left-0 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{exp.role}</h3>
                    <p className="text-primary text-sm font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 text-sm font-medium text-secondary-foreground whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 mt-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-secondary-foreground leading-relaxed flex items-start gap-3">
                      <span className="text-primary/50 select-none mt-1">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Education */}
        <div className="lg:col-span-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Education
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-6 sm:pl-8 group">
                <div className="absolute top-2 bottom-0 left-[3px] w-[2px] bg-border group-last:bg-transparent" />
                <div className="absolute top-2 left-0 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />
                
                <h3 className="font-semibold text-base text-foreground mb-1">{edu.degree}</h3>
                <p className="text-primary text-sm font-medium mb-2">{edu.institution}</p>
                <div className="text-sm font-medium text-secondary-foreground mb-3">{edu.period}</div>
                <p className="text-sm text-secondary-foreground">{edu.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
