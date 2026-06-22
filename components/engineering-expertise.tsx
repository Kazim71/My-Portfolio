"use client"

import { motion } from "framer-motion"
import { Server, Cloud, Zap, Database, Network, Wrench } from "lucide-react"

export default function EngineeringExpertise() {
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

  const expertise = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Engineering",
      desc: "Building reliable, scalable backend services using Node.js and Python. Focusing on clean architecture and performance.",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Infrastructure",
      desc: "Deploying and managing AWS environments. Proficient with EC2, Docker containerization, and Linux server administration.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automation",
      desc: "Creating scripts and workflows to automate repetitive tasks, data ingestion, and operational reporting.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Systems",
      desc: "Designing schemas and optimizing queries for PostgreSQL and MySQL. Focusing on data integrity and execution efficiency.",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "API Development",
      desc: "Designing RESTful APIs with strict validation, authentication, and comprehensive documentation.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Production Troubleshooting",
      desc: "Investigating incidents, debugging complex failures, and ensuring high availability for production systems.",
    },
  ]

  return (
    <section id="engineering" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Engineering Expertise
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {expertise.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-6 bg-card border border-border hover:border-primary/50 transition-colors rounded-lg flex flex-col group"
          >
            <div className="p-3 bg-secondary rounded-md w-fit mb-4 text-secondary-foreground group-hover:text-primary transition-colors">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-secondary-foreground leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
