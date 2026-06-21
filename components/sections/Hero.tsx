"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { profile } from "@/lib/content";

const fade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-8">
        {/* Left: copy */}
        <div>
          <motion.div
            {...fade}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span className="font-mono text-xs text-text-muted">
              Backend &amp; Systems · India
            </span>
          </motion.div>

          <motion.h1
            {...fade}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-text text-balance md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            {...fade}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-3 font-heading text-xl font-medium text-accent md:text-2xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            {...fade}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted text-pretty"
          >
            {profile.tagline}
          </motion.p>

          {/* Stack */}
          <motion.ul
            {...fade}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
          >
            {profile.stack.map((tech, i) => (
              <li key={tech} className="flex items-center gap-5">
                {i > 0 && (
                  <span className="h-1 w-1 rounded-full bg-text-soft" aria-hidden="true" />
                )}
                <span className="font-mono text-sm text-text-muted">{tech}</span>
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg-elevated transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              View projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent-line hover:text-accent"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Right: engineering artifact */}
        <div className="flex justify-center lg:justify-end">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}
