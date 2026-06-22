"use client"

import { motion } from "framer-motion"
import { Code2, Server, Database, Cloud, Palette, Cpu } from "lucide-react"

export default function Skills() {
  const domains = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "JavaScript", "SQL", "PHP"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "Authentication"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Indexing", "Query Optimization"],
    },
    {
      title: "Cloud",
      icon: Cloud,
      skills: ["AWS EC2", "Docker", "Linux"],
    },
    {
      title: "Frontend",
      icon: Palette,
      skills: ["React", "Next.js", "Tailwind"],
    },
    {
      title: "Engineering",
      icon: Cpu,
      skills: ["Git", "Testing", "Debugging", "Agile"],
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
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Technical Skills
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {domains.map((domain, idx) => {
          const Icon = domain.icon
          return (
            <motion.div
              key={domain.title}
              variants={itemVariants}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4 pb-2 border-b border-border/50">
                <Icon className="w-5 h-5 text-secondary-foreground" />
                <h3 className="font-semibold text-lg text-foreground">{domain.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2 mt-2">
                {domain.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 bg-secondary border border-border rounded-md text-sm font-medium text-foreground transition-colors hover:border-primary/50"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
