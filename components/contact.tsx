"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"

const contacts = [
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
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Kazim71",
    href: "https://github.com/Kazim71",
  },
]

const interests = [
  "Full-Stack Development",
  "Node.js & Python",
  "AI Integration",
  "AI Security",
  "Backend Systems",
  "LLM Applications",
  "Agentic Automation",
  "Linux & Networks",
  "Full-time Roles",
  "Freelance Projects",
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
      <svg
        viewBox="0 0 120 120"
        fill="none"
        className="absolute left-[6%] top-24 hidden h-24 w-24 rotate-90 text-foreground lg:block"
        aria-hidden="true"
      >
        <path d="M8 14c34 6 66 30 74 66" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M62 78c8 4 16 6 22 4M84 82c-2-8-4-14-2-22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            Let&apos;s Connect
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-foreground md:text-7xl md:leading-[0.95]">
            LET&apos;S BUILD SOMETHING{" "}
            <span className="box-decoration-clone bg-pink px-2 leading-tight">GREAT</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            I&apos;m always interested in discussing AI engineering, backend systems,
            LLM applications, freelance opportunities and full-time roles.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {contacts.map((c, idx) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="relative flex h-full flex-col rounded-3xl border-2 border-foreground bg-card p-7 transition-transform hover:-translate-y-1.5 hover:shadow-brutal">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-foreground bg-mint">
                      <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
                    </span>
                    <span className="mt-5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="mt-1 whitespace-nowrap font-semibold text-foreground">{c.value}</span>
                  </div>
                </a>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {interests.map((tag) => (
            <span
              key={tag}
              className="rounded-full border-2 border-foreground bg-background px-4 py-2 text-sm font-semibold text-foreground"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://linkedin.com/in/mohammadkazim71"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-9 py-4 text-base font-bold text-background transition-transform hover:-translate-y-1"
          >
            Say Hello
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
