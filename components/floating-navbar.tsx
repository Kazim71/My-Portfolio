"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  link: string
  icon?: React.ReactNode
}

interface FloatingNavbarProps {
  navItems: NavItem[]
  className?: string
}

export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ navItems, className }) => {
  const [visible, setVisible] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 1, y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-10 left-1/2 transform -translate-x-1/2 z-50 flex gap-1 px-8 py-4 rounded-full border border-transparent bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg",
        className,
      )}
    >
      {navItems.map((item, idx) => (
        <a
          key={`link=${idx}`}
          href={item.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
          )}
        >
          <span className="block sm:hidden">{item.icon}</span>
          <span className="hidden sm:block text-sm">{item.name}</span>
        </a>
      ))}
    </motion.div>
  )
}
