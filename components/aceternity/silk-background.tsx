"use client"

import type React from "react"
import { useRef } from "react"
import { motion } from "framer-motion"

export const SilkBackground = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Flowing silk shapes with gradient animations */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/25 via-primary/15 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-accent/20 via-secondary/15 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 40, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-tl from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 50, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 11,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
