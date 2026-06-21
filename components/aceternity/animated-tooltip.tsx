"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export const AnimatedTooltip = ({
  items,
}: {
  items: Array<{
    id: number
    name: string
    designation: string
    image?: string
  }>
}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm cursor-pointer border-2 border-background"
            animate={{
              scale: hoveredId === item.id ? 1.2 : 1,
            }}
          >
            {item.name.charAt(0).toUpperCase()}
          </motion.div>

          {hoveredId === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50 whitespace-nowrap"
            >
              <div className="bg-foreground text-background px-3 py-1 rounded-md text-xs font-semibold">
                {item.name}
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
