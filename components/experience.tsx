"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "EZ Rankings",
      period: "Mar 2025 – Present",
      location: "India",
      highlights: [
        "Developed and maintained backend workflows, APIs, and database-driven applications across 15+ production systems",
        "Built Python automation utilities for CSV ingestion, data validation, reporting, and workflow automation",
        "Designed and integrated REST APIs, business validation layers, and data-processing workflows",
        "Investigated and resolved production incidents involving API failures, deployment regressions, and database inconsistencies",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Clay Brains",
      period: "Feb 2025 – Feb 2026",
      location: "India",
      highlights: [
        "Developed backend modules, reusable services, and data-driven features for production applications",
        "Improved database performance through SQL query optimization, indexing strategies, and execution plan analysis",
        "Managed Linux-based cloud infrastructure including AWS EC2, SSL configuration, DNS management, and deployment workflows",
        "Participated in debugging, testing, code maintenance, and release activities across multiple projects",
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 hover:border-primary transition-colors"
                whileHover={{ paddingLeft: 32 }}
              >
                <motion.div
                  className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full"
                  aria-hidden="true"
                  whileHover={{ scale: 1.3 }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time>{exp.period}</time>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-muted-foreground flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">
                        •
                      </span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-bold text-lg text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time>{edu.period}</time>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{edu.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
