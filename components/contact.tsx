"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react"

export default function Contact() {
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

  const links = [
    {
      icon: Mail,
      label: "Email",
      value: "mohammadkazim71@gmail.com",
      href: "mailto:mohammadkazim71@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mohammadkazim71",
      href: "https://linkedin.com/in/mohammadkazim71",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Kazim71",
      href: "https://github.com/Kazim71",
      external: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Get in touch
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-8" />
          <p className="text-lg text-secondary-foreground max-w-md leading-relaxed">
            I'm currently open to conversations about software engineering roles, backend systems, or collaboration on production applications.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {links.map((link) => {
            const Icon = link.icon
            
            const content = (
              <>
                <div className="flex items-center gap-4">
                  <div className="text-secondary-foreground group-hover:text-primary transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{link.label}</p>
                    <p className="text-sm text-secondary-foreground mt-0.5">{link.value}</p>
                  </div>
                </div>
                {link.href && (
                  <ArrowUpRight className="w-4 h-4 text-secondary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </>
            )

            return (
              <motion.div key={link.label} variants={itemVariants}>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                    {content}
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
