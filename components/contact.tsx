"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, ExternalLink, Download } from "lucide-react"

export default function Contact() {
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
      transition: { duration: 0.6 },
    },
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "mohammadkazim71@gmail.com",
      href: "mailto:mohammadkazim71@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Visit Profile",
      href: "https://linkedin.com/in/mohammadkazim71",
      color: "from-blue-500 to-cyan-500",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Code",
      href: "https://github.com/Kazim71",
      color: "from-gray-600 to-gray-800",
      external: true,
    },
  ]

  const handleDownloadResume = async () => {
    try {
      const response = await fetch("/api/resume")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "Mohammad_Kazim_Resume.txt"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Error downloading resume:", error)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Let's{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to conversations about software engineering roles, backend and API work, or collaboration
            on production systems. Feel free to reach out and let's build something reliable together.
          </p>
        </motion.div>

        

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <motion.div key={method.label} variants={itemVariants}>
                <motion.div
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg h-full"
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </motion.div>
                  <h3 className="font-bold mb-3 text-foreground">{method.label}</h3>
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="text-primary hover:underline text-sm flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
                    aria-label={method.external ? `Visit ${method.label} profile (opens in new window)` : undefined}
                  >
                    {method.value}
                    {method.external && <ExternalLink className="w-3 h-3" aria-hidden="true" />}
                  </a>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
