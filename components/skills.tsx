"use client"

import { motion } from "framer-motion"
import { Code2, Server, Database, Palette, Cloud, Cpu, Network } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "JavaScript", "SQL", "PHP"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "Authentication", "Authorization"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Database Design", "Query Optimization", "Data Modeling", "Indexing"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Frontend",
      icon: Palette,
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: ["AWS EC2", "Docker", "Linux", "Git", "GitHub", "DNS", "SSL"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Engineering",
      icon: Cpu,
      skills: ["OOP", "Data Structures", "Algorithms", "Debugging", "Unit Testing", "Agile Development"],
      color: "from-rose-500 to-pink-500",
    },
    {
      title: "Systems",
      icon: Network,
      skills: ["Operating Systems", "TCP/IP", "HTTP", "System Design", "Performance Optimization", "Production Troubleshooting"],
      color: "from-amber-500 to-orange-500",
    },
  ]

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div key={category.title} variants={itemVariants}>
                <motion.div
                  className="relative h-full p-6 bg-card rounded-lg border border-border overflow-hidden group cursor-pointer"
                  whileHover={{ y: -8, borderColor: "var(--primary)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <motion.div
                      className="flex items-center gap-3 mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
                    </motion.div>

                    <ul className="space-y-3">
                      {category.skills.map((skill, idx) => (
                        <motion.li
                          key={skill}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05, duration: 0.4 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
