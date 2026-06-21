"use client"

import type React from "react"
import { motion } from "framer-motion"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
