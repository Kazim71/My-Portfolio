"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-text">
                Mohammad Kazim
              </h1>
              <p className="text-lg md:text-2xl text-text-muted max-w-lg leading-relaxed font-light">
                Full Stack Developer specializing in MERN stack and AI integrations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-3 bg-bg-soft text-accent border border-border rounded-pill text-sm font-medium hover:bg-bg-elevated transition-all duration-300 shadow-soft"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[3/4] max-w-[280px] sm:max-w-sm mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-bgSoft dark:bg-bgElevated rounded-card shadow-card transform rotate-2 transition-transform duration-500 hover:rotate-0" />
              <div className="relative w-full h-full rounded-card overflow-hidden border border-border bg-bgSoft">
                <img
                  src="/hero.jpg"
                  alt="Mohammad Kazim"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
