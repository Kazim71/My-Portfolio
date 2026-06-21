"use client"

export const Grid = ({ className = "" }: { className?: string }) => {
  return (
    <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 1200 800" preserveAspectRatio="none">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00b4d8" strokeWidth="0.5" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#grid)" />
    </svg>
  )
}
