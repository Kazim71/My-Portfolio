"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "./aceternity/hover-effect"
import { Code2, Users, Shield, Zap, Lightbulb, BookOpen, MapPin, Mail, Phone, Clock } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const highlights = [
    {
      title: "Backend Development",
      description:
        "Designing and maintaining REST APIs, business validation layers, and data-processing workflows for production systems.",
      icon: <Code2 size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Automation & Scripting",
      description:
        "Building Python automation utilities for CSV ingestion, data validation, reporting, and workflow automation.",
      icon: <Zap size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Database Engineering",
      description: "Optimizing SQL queries, indexing strategies, and execution plans for performant, reliable data systems.",
      icon: <Shield size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Cloud & Infrastructure",
      description: "Managing Linux-based AWS infrastructure including EC2, SSL, DNS, Docker, and deployment workflows.",
      icon: <Users size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Production Troubleshooting",
      description: "Investigating and resolving incidents involving API failures, deployment regressions, and data inconsistencies.",
      icon: <Lightbulb size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Continuous Learning",
      description: "Strengthening foundations in system design, data structures, algorithms, testing, and scalable architecture.",
      icon: <BookOpen size={28} strokeWidth={1.5} className="text-primary" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a Software Engineer with{" "}
              <span className="font-semibold text-foreground">1.6+ year</span> of experience developing and maintaining
              production applications, backend services, automation workflows, and database-driven systems. I work
              across Python, JavaScript, SQL, REST APIs, Linux, Docker, and AWS.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I've delivered solutions across{" "}
              <span className="font-semibold text-foreground">15+ production environments</span> involving API
              integrations, data processing, database optimization, infrastructure troubleshooting, and application
              reliability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I bring a strong foundation in{" "}
              <span className="font-semibold text-foreground">
                scalable system design, debugging, testing, and cross-functional collaboration
              </span>
              , and I'm always sharpening my skills in software engineering fundamentals.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Core Expertise</h3>
            <HoverEffect items={highlights} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Quick Info</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Location", value: "India", icon: <MapPin size={24} strokeWidth={1.5} /> },
                {
                  label: "Email",
                  value: "mohammadkazim71@gmail.com",
                  link: "mailto:mohammadkazim71@gmail.com",
                  icon: <Mail size={24} strokeWidth={1.5} />,
                },
                {
                  label: "Phone",
                  value: "+91 7898184847",
                  link: "tel:+917898184847",
                  icon: <Phone size={24} strokeWidth={1.5} />,
                },
                { label: "Experience", value: "1+ Years", icon: <Clock size={24} strokeWidth={1.5} /> },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-primary mb-2">{item.icon}</div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="font-semibold text-primary hover:underline text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
