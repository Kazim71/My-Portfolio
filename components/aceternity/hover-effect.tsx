"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export const HoverEffect = ({
  items,
  className,
}: {
  items: Array<{
    title: string
    description: string
    icon?: ReactNode
  }>
  className?: string
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative group cursor-pointer"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="relative h-full p-6 rounded-lg bg-card border border-border overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              {item.icon && <div className="mb-4">{item.icon}</div>}
              <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
