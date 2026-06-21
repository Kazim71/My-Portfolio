"use client"

import { motion } from "framer-motion"
import { AnimatedCard } from "./aceternity/animated-card"

export default function Projects() {
  const projects = [
    {
      title: "Airport Reservation & Dispatch Management Platform",
      description:
        "Built backend workflows supporting booking requests, ride scheduling, customer enquiries, and administrative operations, with database-driven pipelines for service locations, trip management, and reporting. Bulk data ingestion automated onboarding of 100+ service locations.",
      technologies: ["Python", "REST APIs", "PostgreSQL", "Data Pipelines", "Automation"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "E-Commerce Catalog & Content Management Platform",
      description:
        "Contributed to backend systems supporting a large-scale product catalog of hundreds of products and categories. Developed reusable data models and administrative workflows, and optimized database-driven filtering, search, and catalog management for performance and maintainability.",
      technologies: ["Node.js", "MySQL", "REST APIs", "Query Optimization", "Data Modeling"],
      gradient: "from-indigo-500 to-blue-500",
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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-balance"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <AnimatedCard key={project.title} className="h-full">
              <div className="group relative p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-xl h-full overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
