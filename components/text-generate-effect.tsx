"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface TextGenerateEffectProps {
  words: string
  className?: string
  duration?: number
  filter?: boolean
}

export const TextGenerateEffect = ({
  words,
  className = "",
  duration = 0.5,
  filter = true,
}: TextGenerateEffectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const controls = useAnimation()

  const wordsArray = words.split(" ")

  const variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * duration,
      },
    }),
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div ref={ref} className={className}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          custom={idx}
          variants={variants}
          initial="hidden"
          animate={controls}
          className={filter ? "drop-shadow-lg" : ""}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  )
}
