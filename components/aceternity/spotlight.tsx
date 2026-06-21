"use client"

import type React from "react"

interface SpotlightProps {
  className?: string
  fill?: string
}

export const Spotlight: React.FC<SpotlightProps> = ({ className = "", fill = "white" }) => {
  return (
    <svg
      className={`animate-pulse ${className}`}
      width="100%"
      height="100%"
      viewBox="0 0 1200 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="spotlight-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={fill} stopOpacity="0.8" />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="600" cy="600" r="400" fill="url(#spotlight-gradient)" />
    </svg>
  )
}
