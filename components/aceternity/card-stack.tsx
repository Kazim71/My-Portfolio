"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Card = {
  id: number
  name: string
  designation: string
  content: React.ReactNode
}

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
}: {
  items: Card[]
  offset?: number
  scaleFactor?: number
}) => {
  const CARD_OFFSET = offset
  const SCALE_FACTOR = scaleFactor
  const [cards, setCards] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]
        newArray.unshift(newArray.pop()!)
        return newArray
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-60 w-full">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute h-60 w-full rounded-lg bg-card border border-border p-6 shadow-lg"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="h-full flex flex-col justify-between">
            <p className="text-foreground text-sm leading-relaxed">{card.content}</p>
            <div>
              <p className="font-bold text-foreground">{card.name}</p>
              <p className="text-xs text-muted-foreground">{card.designation}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
