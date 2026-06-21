"use client"
import { motion } from "framer-motion"

export const Beams = ({ className = "" }: { className?: string }) => {
  return (
    <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 1200 800" preserveAspectRatio="none">
      <defs>
        <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0077b6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00b4d8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="beam2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#90e0ef" stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.line
        x1="0"
        y1="0"
        x2="1200"
        y2="800"
        stroke="url(#beam1)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.line
        x1="1200"
        y1="0"
        x2="0"
        y2="800"
        stroke="url(#beam2)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
      />
    </svg>
  )
}
