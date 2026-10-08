"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Zap } from "lucide-react"

function WavySvg() {
  return (
    <svg viewBox="0 0 140 24" fill="none" className="mx-auto mt-3 h-5 w-32 text-pink" aria-hidden="true">
      <path d="M2 12c10-12 20 12 30 0s20-12 30 0 20 12 30 0 20-12 30 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

const projects = [
  {
    num: "01",
    category: "Full-Stack SaaS",
    title: "LeadPulse / NorthQu — Multi-Tenant Lead Intelligence Platform",
    desc: "Production lead-capture and identity-resolution platform for e-commerce storefronts, verified end-to-end against live data: diagnosed a CSP misconfiguration that silently disabled all client-side interactivity for three weeks, eliminated a recurring PostgREST 1,000-row truncation bug across three endpoints, resolved Postgres RLS query-planning timeouts invisible to service-role testing, and migrated the API off a failing free-tier host onto a self-managed Oracle Cloud VM (Nginx, PM2, TLS) with a zero-downtime cutover.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "Oracle Cloud", "GitHub Actions"],
    impact: "11.7× faster loads (6.1s → 525ms), 23 verified migrations",
    href: "https://northqu.vercel.app",
  },
  {
    num: "02",
    category: "Cloud-Native Platform",
    title: "AirLynk — Cloud-Native Booking Platform",
    desc: "Booking platform taken from requirements to production: real-time booking, pricing, notifications, and authentication across customer and operator apps. GraphQL and REST APIs, React/TypeScript operator dashboards, event-driven workflows on RabbitMQ and Redis, and observability with Prometheus, Grafana, Loki, and OpenTelemetry — containerized with Docker Compose and CI/CD.",
    stack: ["Python", "FastAPI", "GraphQL", "React", "TypeScript", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
    impact: "550+ service locations, 350+ daily transactions",
    href: "https://airportlimolink.ca",
  },
  {
    num: "03",
    category: "Enterprise AI Agent",
    title: "GrowScience — Enterprise AI Agent",
    desc: "RAG-grounded AI agent over 200+ product documents and 15+ prompt frameworks, so answers cite real product data instead of guessing. Guardrails cover 8 mapped failure modes — prompt injection, hallucinated claims, and a hard escalation-to-human rule for medical topics — with a 4-phase roadmap for multilingual support, memory, and integrations.",
    stack: ["Python", "OpenAI", "RAG", "Prompt Engineering", "AI Safety"],
    impact: "200+ documents, 15+ prompt frameworks, 8 risk categories",
    href: "https://chatbot.senadvertising.com/",
  },
  {
    num: "04",
    category: "AI · Data",
    title: "AI-Powered Data Q&A Platform",
    desc: "Upload CSV or Excel files and ask questions in plain English. The LLM only sees a schema profile and writes SQL; DuckDB executes it, so every number is computed and the SQL behind it is shown. SELECT-only validation with sqlglot, join inference from real value overlap, one-shot error-driven query repair, and charts chosen deterministically from the result shape.",
    stack: ["Python", "FastAPI", "DuckDB", "Groq", "sqlglot", "Next.js"],
    impact: "104+ automated tests · live on Vercel + Render",
    href: "https://github.com/Kazim71",
  },
  {
    num: "05",
    category: "AI Automation",
    title: "AI Lead Outreach & Follow-Up Automation",
    desc: "End-to-end lead pipeline: capture, enrichment, AI-personalized messaging, database persistence, branching logic, and automated email/SMS follow-ups — with retries and failure handling on every API call.",
    stack: ["n8n", "LLM APIs", "Supabase", "SMTP", "Twilio"],
    impact: "200+ automated emails per day",
    href: "https://github.com/Kazim71",
  },
  {
    num: "06",
    category: "E-commerce · Data Pipeline",
    title: "Spaces by U — E-commerce Lead & Analytics Funnel",
    desc: "Pulls Meta Ads leads and website form data through APIs and webhooks into one pipeline, tags each lead by source, and routes it to sales. Automated WhatsApp follow-ups, and GA4 campaign and checkout data track each customer from ad click to purchase. Multi-tenant by design: each organization gets isolated data and RBAC roles, added without code changes.",
    stack: ["Python", "n8n", "WhatsApp Business API", "Meta Ads", "GA4"],
    impact: "7,000 users · 15–17K tracked events per day",
    href: "https://spacesbyu.com",
  },
  {
    num: "07",
    category: "AI Automation",
    title: "AI Feedback Routing System",
    desc: "Automated multilingual feedback intake: LLM classification and sentiment analysis route each issue to the right owner through Gmail, with conditional logic and database persistence connected in n8n.",
    stack: ["n8n", "OpenAI", "Supabase", "Gmail API"],
    impact: "Multilingual intake, auto-routed to owners",
    href: "https://github.com/Kazim71",
  },
  {
    num: "08",
    category: "E-commerce",
    title: "Aarav Electronics — Shopify Storefront",
    desc: "Managed a 500+ product storefront across catalogs, collections, pricing, inventory, checkout, payment integrations, and order workflows; customized Shopify Liquid and JavaScript and tuned image optimization and lazy loading.",
    stack: ["Shopify", "Liquid", "JavaScript", "Payments", "SEO"],
    impact: "~1.5s faster homepage load, 500+ products",
    href: "https://aaravelectronics.com/",
  },
  {
    num: "09",
    category: "AI SaaS",
    title: "StructuraUI — AI-Powered UI Generation",
    desc: "AI SaaS platform using Google Gemini to generate editable UI layouts from natural-language prompts, with iterative AI editing, RBAC, and secure authentication across 20+ component types.",
    stack: ["Next.js", "Gemini", "TypeScript", "React"],
    impact: "70% faster design-to-code",
    href: "https://github.com/Kazim71/StructuraUI",
  },
  {
    num: "10",
    category: "Security & Compliance",
    title: "Compliance Automation & Asset Monitoring",
    desc: "Compliance monitoring platform integrating multi-source asset discovery pipelines with policy-as-code validation frameworks, continuous configuration compliance checks, and posture reports aligned to NIST and SOC 2 control requirements.",
    stack: ["Python", "Grafana", "PostgreSQL", "Docker", "AWS", "Policy-as-Code"],
    impact: "NIST & SOC 2 aligned automation",
    href: "https://github.com/Kazim71",
  },
]

// Smaller builds, integrations, and earlier ML work — all from the resume history.
const moreBuilds = [
  { title: "Odoo ↔ WooCommerce Sync", note: "REST + webhook sync of products, orders, inventory, and customers with source-of-truth rules — replaced paid connectors.", stack: "REST APIs · Webhooks" },
  { title: "Real-Time Voice AI Assistant", note: "Streaming audio → OpenAI → spoken response over WebSockets, built for low-latency conversation.", stack: "OpenAI · WebSockets" },
  { title: "TxnSight", note: "FastAPI backend with PostgreSQL schemas for analyzing transaction failures and retries.", stack: "Python · FastAPI · PostgreSQL · Docker" },
  { title: "AI Inventory Opportunity Center", note: "Product case study and Next.js prototype for Spyne's Auto Retail Suite: ranks which listing issues to fix first.", stack: "Next.js · AI · Product" },
  { title: "Task Planner Agent", note: "LLM agent that builds daily plans using Tavily web search and OpenWeatherMap tools; CI/CD on Railway.", stack: "Python · FastAPI · PostgreSQL", href: "https://task-planner-agent-production.up.railway.app" },
  { title: "DPMI India — Education Platform", note: "Maintained a production Laravel platform: backend features, forms, data-driven components, deployment, and performance.", stack: "PHP · Laravel · MySQL" },
  { title: "LocalRAGAgent", note: "Offline document QA: PDFs chunked and embedded into ChromaDB, answered by Llama 3 via FastAPI with sub-300ms latency.", stack: "LangChain · ChromaDB · Llama 3" },
  { title: "Secure Offline AI Assistant", note: "Fine-tuned Llama 3.2 3B with Unsloth on domain logs for on-device diagnostics, cutting MTTR by 30%.", stack: "Llama 3.2 · Unsloth · NLP" },
  { title: "AI-Powered Fraud Detection", note: "ML classifiers over 100K+ transaction records — 92% recall with 18% fewer false positives.", stack: "Python · Scikit-learn · Pandas" },
  { title: "Motorcycle Fault Detection", note: "Random Forest, SVM, and KNN on 500+ engine audio samples with MFCC features — 94.7% accuracy.", stack: "Random Forest · SVM · KNN" },
]

export default function Projects() {
  return (
    <section id="projects" className="border-t-2 border-foreground bg-secondary px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            Case Studies
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-6xl">
            Featured Projects
          </h2>
          <WavySvg />
        </motion.div>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
              className="w-full md:w-[calc(50%-0.75rem)]"
            >
              <div className="group flex h-full flex-col rounded-3xl border-2 border-foreground bg-card p-7 transition-transform hover:-translate-y-1.5 hover:shadow-brutal-lg md:p-9">
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl text-foreground/15">{project.num}</span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground bg-background transition-colors group-hover:bg-mint"
                  >
                    <ArrowUpRight className="h-5 w-5 text-foreground" aria-hidden="true" />
                  </a>
                </div>

                <span className="mt-2 inline-block w-fit rounded-full bg-pink px-3 py-1 text-xs font-bold text-foreground">
                  {project.category}
                </span>

                <h3 className="mt-3 font-display text-2xl tracking-tight text-foreground md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-foreground bg-background px-2.5 py-1 text-xs font-semibold text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex items-center gap-2 rounded-2xl bg-foreground px-4 py-3 text-sm font-bold text-background">
                    <Zap className="h-4 w-4 shrink-0 text-sun" aria-hidden="true" />
                    {project.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-center font-display text-3xl tracking-tight text-foreground md:text-4xl">More Builds</h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            Integrations, prototypes, and earlier ML work.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {moreBuilds.map((b) => (
              <li key={b.title} className="rounded-2xl border-2 border-foreground bg-card p-5 transition-transform hover:-translate-y-1 hover:shadow-brutal">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-display text-xl tracking-tight text-foreground">{b.title}</p>
                  {b.href && (
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${b.title}`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-foreground bg-background transition-colors hover:bg-mint"
                    >
                      <ArrowUpRight className="h-4 w-4 text-foreground" aria-hidden="true" />
                    </a>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.note}</p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/70">{b.stack}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
