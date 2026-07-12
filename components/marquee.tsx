const keywords = [
  "AI Solutions",
  "LLM Development",
  "AI Security",
  "n8n Workflows",
  "FastAPI",
  "Agentic AI",
  "Python",
  "Linux & Networks",
  "React",
  "GraphQL",
  "Docker",
  "Production AI",
]

function StarIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-5 w-5 text-foreground" aria-hidden="true">
      <path
        d="M24 3c2 12 9 19 21 21-12 2-19 9-21 21-2-12-9-19-21-21 12-2 19-9 21-21Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Marquee() {
  const items = keywords.map((kw) => (
    <span key={kw} className="flex items-center gap-8">
      <span className="font-display text-2xl uppercase tracking-wide text-foreground md:text-3xl">
        {kw}
      </span>
      <StarIcon />
    </span>
  ))

  return (
    <div className="overflow-hidden border-y-2 border-foreground bg-pink py-5">
      <div className="flex w-max animate-marquee items-center gap-8">
        {items}
        {items}
      </div>
    </div>
  )
}
