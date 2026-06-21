"use client"

import type React from "react"
import { useRef } from "react"
import { motion } from "framer-motion"

interface BeamOptions {
  initialX?: number
  translateX?: number
  initialY?: string
  translateY?: string
  rotate?: number
  className?: string
  duration?: number
  delay?: number
  repeatDelay?: number
}

interface CollisionMechanismProps {
  containerRef: React.RefObject<HTMLDivElement>
  parentRef: React.RefObject<HTMLDivElement>
  beamOptions?: BeamOptions
}

const Beam = ({ beamOptions }: { beamOptions?: BeamOptions }) => {
  const {
    initialX = 0,
    translateX = 0,
    initialY = "-200px",
    translateY = "1800px",
    rotate = 0,
    className = "",
    duration = 8,
    delay = 0,
    repeatDelay = 0,
  } = beamOptions || {}

  return (
    <motion.div
      initial={{
        x: initialX,
        y: initialY,
        rotate: rotate,
      }}
      animate={{
        x: translateX,
        y: translateY,
        rotate: rotate,
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: repeatDelay,
        ease: "linear",
      }}
      className={`absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary via-secondary to-primary blur-sm ${className}`}
    />
  )
}

export const BackgroundBeamsWithCollision = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const parentRef = useRef<HTMLDivElement>(null)

  const beams = [
    {
      initialX: 10,
      translateX: 100,
      initialY: "-200px",
      translateY: "1800px",
      rotate: 0,
      duration: 8,
      delay: 0,
      repeatDelay: 5,
    },
    {
      initialX: -50,
      translateX: 50,
      initialY: "-200px",
      translateY: "1800px",
      rotate: 0,
      duration: 10,
      delay: 2,
      repeatDelay: 5,
    },
    {
      initialX: 30,
      translateX: -50,
      initialY: "-200px",
      translateY: "1800px",
      rotate: 0,
      duration: 9,
      delay: 4,
      repeatDelay: 5,
    },
    {
      initialX: -30,
      translateX: 100,
      initialY: "-200px",
      translateY: "1800px",
      rotate: 0,
      duration: 11,
      delay: 1,
      repeatDelay: 5,
    },
    {
      initialX: 50,
      translateX: -30,
      initialY: "-200px",
      translateY: "1800px",
      rotate: 0,
      duration: 8,
      delay: 3,
      repeatDelay: 5,
    },
  ]

  return (
    <div ref={parentRef} className={`relative w-full overflow-hidden ${className}`}>
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {beams.map((beam, idx) => (
          <Beam key={idx} beamOptions={beam} />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
