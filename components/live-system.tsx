"use client"

import { useEffect, useRef, useState, useCallback, lazy, Suspense } from "react"
import { motion, useInView } from "framer-motion"
import { Play, Pause, RotateCcw, Activity, Zap, Timer, Loader2, Aperture } from "lucide-react"

const PipelineScene = lazy(() => import("@/components/pipeline-scene"))

// Index-aligned with the node palette in pipeline-scene.tsx, but with the
// Client node's white swapped for a readable foreground-safe tone — this
// array only ever paints UI text/dots on light card backgrounds, never the
// 3D scene, so pure white would vanish here even though it glows nicely
// against the scene's black background.
const nodeTextColors = ["#8A8F98", "#0891A8", "#1F9D6E", "#D6479E", "#B8860B", "#1F9D6E", "#7C5CD6"]

const EASE = [0.22, 1, 0.36, 1] as const

function WavySvg() {
  return (
    <svg viewBox="0 0 140 24" fill="none" className="mx-auto mt-3 h-5 w-32 text-pink" aria-hidden="true">
      <path d="M2 12c10-12 20 12 30 0s20-12 30 0 20 12 30 0 20-12 30 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

type NodeData = {
  title: string
  sub: string
  detail: string
  tags: string[]
  latency: string
  throughput: string
  logs: string[]
}

const nodes: NodeData[] = [
  {
    title: "Client",
    sub: "Request",
    detail: "A user action fires a typed request from the browser. The request is serialized, signed, and dispatched over TLS.",
    tags: ["React", "Next.js", "TypeScript"],
    latency: "12ms",
    throughput: "1.2K req/s",
    logs: [
      "→ POST /api/v1/analyze",
      "  Content-Type: application/json",
      "  Authorization: Bearer ey***",
      "  Body: { model: \"gpt-4o\", stream: true }",
      "  TLS 1.3 handshake complete",
    ],
  },
  {
    title: "Edge / Security",
    sub: "WAF & Rate Limiting",
    detail: "Requests pass through a WAF and edge auth layer — bot filtering, IP reputation checks, and rate limiting before ever reaching the backend.",
    tags: ["WAF", "Rate Limiting", "DDoS Protection"],
    latency: "4ms",
    throughput: "6.1K req/s",
    logs: [
      "✓ IP reputation: clean",
      "✓ Bot score: 0.02 (human)",
      "✓ Rate limit bucket: 94/100",
      "→ Forwarding to origin",
      "  Edge PoP: bom1 (Mumbai)",
    ],
  },
  {
    title: "Backend / API",
    sub: "Routing & Auth",
    detail: "FastAPI validates the payload schema, verifies JWT claims, applies rate limits, and routes to the correct handler.",
    tags: ["FastAPI", "GraphQL", "REST"],
    latency: "8ms",
    throughput: "4.8K req/s",
    logs: [
      "✓ JWT verified — sub: user_0x3f",
      "✓ Rate limit: 847/1000 remaining",
      "✓ Schema validated (AnalyzeRequest)",
      "→ Dispatching to ai_handler.run()",
      "  Trace ID: tr-7a9b2c1e",
    ],
  },
  {
    title: "AI Engine",
    sub: "Reason & Act",
    detail: "LLM agents reason over context, call tools via function calling, orchestrate multi-step workflows, and stream responses.",
    tags: ["n8n", "LLM Agents", "RAG"],
    latency: "340ms",
    throughput: "45 tok/s",
    logs: [
      "⚡ Agent initialized (tools: 6)",
      "  → Retrieving context (cosine: 0.94)",
      "  → Function call: search_docs()",
      "  → Streaming completion...",
      "✓ Response: 312 tokens, 0.34s",
    ],
  },
  {
    title: "Cloud",
    sub: "Deploy & Scale",
    detail: "Containers autoscale on demand. CI/CD pushes green builds to staging, then promotes to production with zero downtime.",
    tags: ["Docker", "AWS EC2", "CI/CD"],
    latency: "3ms",
    throughput: "99.97% up",
    logs: [
      "✓ Container healthy (cpu: 23%)",
      "  Replicas: 3/3 running",
      "  Memory: 412MB / 1024MB",
      "→ Autoscaler: no action needed",
      "  Last deploy: 14m ago (v2.8.1)",
    ],
  },
  {
    title: "Database",
    sub: "Persist & Respond",
    detail: "State is persisted to PostgreSQL with Redis caching. The structured response is streamed back to the client in real time.",
    tags: ["PostgreSQL", "Redis", "RabbitMQ"],
    latency: "5ms",
    throughput: "12K ops/s",
    logs: [
      "→ INSERT INTO responses (...)",
      "  Cache SET: res:7a9b2c1e (TTL 300s)",
      "  Queue publish: events.completed",
      "✓ 200 OK — stream closed",
      "  Total latency: 368ms p95",
    ],
  },
  {
    title: "Observability",
    sub: "Monitor & Alert",
    detail: "Every hop emits traces and metrics. Grafana dashboards and alerting rules watch latency, error rates, and saturation in real time.",
    tags: ["Prometheus", "Grafana", "OpenTelemetry"],
    latency: "1ms",
    throughput: "18K metrics/s",
    logs: [
      "✓ Trace exported: tr-7a9b2c1e",
      "✓ p95 latency: 368ms (nominal)",
      "✓ Error rate: 0.02% (nominal)",
      "→ Dashboards updated",
      "  No active alerts",
    ],
  },
]

const STEP_MS = 2600

export default function LiveSystem() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const inView = useInView(sectionRef, { once: false, margin: "-10% 0px -10% 0px" })

  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const [running, setRunning] = useState(true)
  const [scrubbing, setScrubbing] = useState(false)
  const [viewKey, setViewKey] = useState(0)
  const [logLines, setLogLines] = useState<string[]>([])
  const [totalRequests, setTotalRequests] = useState(2847)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const logTimer = useRef<ReturnType<typeof setInterval> | null>(null)
  const logContainerRef = useRef<HTMLDivElement | null>(null)

  const focus = hovered ?? active

  useEffect(() => {
    setLogLines([])
    if (logTimer.current) clearInterval(logTimer.current)

    const stepLogs = nodes[focus]?.logs ?? []
    let lineIdx = 0
    logTimer.current = setInterval(() => {
      if (lineIdx >= stepLogs.length) {
        if (logTimer.current) clearInterval(logTimer.current)
        return
      }
      const nextLine = stepLogs[lineIdx]
      lineIdx++
      if (nextLine) setLogLines((prev) => [...prev, nextLine])
    }, 180)

    return () => {
      if (logTimer.current) clearInterval(logTimer.current)
    }
  }, [focus])

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight
    }
  }, [logLines])

  useEffect(() => {
    if (!inView) return
    const interval = setInterval(() => {
      setTotalRequests((r) => r + Math.floor(Math.random() * 3) + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [inView])

  // Auto-advance the pipeline. Explicit user intents (scrubbing, a hovered node,
  // or Pause) all suspend it — none of them can get "stuck" independently of
  // the Play/Pause button because togglePlay/restart force-clear hover + scrub.
  useEffect(() => {
    const paused = hovered !== null || scrubbing || !running || !inView
    if (paused) {
      if (timer.current) clearInterval(timer.current)
      return
    }
    timer.current = setInterval(() => {
      setActive((a) => (a + 1) % nodes.length)
    }, STEP_MS)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [hovered, scrubbing, running, inView])

  const restart = useCallback(() => {
    setActive(0)
    setHovered(null)
    setScrubbing(false)
    setRunning(true)
  }, [])

  const togglePlay = useCallback(() => {
    // Clear any stuck hover/scrub lock so Play always visibly resumes —
    // this is the fix for the "Play/Pause does nothing" bug on touch
    // devices, where a tap can set hover without a matching un-hover.
    setHovered(null)
    setScrubbing(false)
    setRunning((r) => !r)
  }, [])

  const handleNodeHover = useCallback((idx: number | null) => {
    setHovered(idx)
  }, [])

  const handleNodeClick = useCallback((idx: number) => {
    setActive(idx)
    setHovered(null)
    setRunning(false)
  }, [])

  const handleScrub = useCallback((idx: number) => {
    setHovered(null)
    setActive(idx)
  }, [])

  const resetView = useCallback(() => {
    // Remounting the scene is the simplest reliable way to reset OrbitControls
    // after free-drag orbiting — there's no imperative "reset camera" hook
    // exposed through the lazy-loaded scene boundary.
    setViewKey((k) => k + 1)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className="border-t-2 border-foreground bg-background px-5 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            How I Build
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-foreground md:text-6xl">
            AI Backend Infra
          </h2>
          <WavySvg />
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            A live, 7-layer 3D map of a request traversing the production AI backend — edge security,
            routing, reasoning, deployment, storage, and observability. Hover a node to inspect it,
            click to lock focus, drag the scene to orbit, or drag the timeline to scrub through steps.
          </p>

          {/* Layer legend — maps 3D node color to pipeline stage */}
          <div className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {nodes.map((n, i) => (
              <button
                key={n.title}
                onClick={() => handleScrub(i)}
                className={`flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-semibold transition-colors ${
                  i === focus ? "bg-foreground/10 text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full ring-1 ring-foreground/20"
                  style={{ backgroundColor: nodeTextColors[i], boxShadow: `0 0 6px ${nodeTextColors[i]}` }}
                />
                {n.title.split(" / ")[0]}
              </button>
            ))}
          </div>

          {/* Live metrics bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-4 py-2">
              <Activity className="h-4 w-4 text-mint" />
              <span className="font-mono text-sm font-bold text-foreground">{totalRequests.toLocaleString()}</span>
              <span className="text-xs text-muted-foreground">requests</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-4 py-2">
              <Timer className="h-4 w-4 text-pink" />
              <span className="font-mono text-sm font-bold text-foreground">368ms</span>
              <span className="text-xs text-muted-foreground">p95 latency</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-4 py-2">
              <Zap className="h-4 w-4 text-sun" />
              <span className="font-mono text-sm font-bold text-foreground">99.97%</span>
              <span className="text-xs text-muted-foreground">uptime</span>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={restart}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Replay trace
            </button>
            <button
              onClick={togglePlay}
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-5 py-2.5 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5"
            >
              {running ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
              {running ? "Pause" : "Play"}
            </button>
            <button
              onClick={resetView}
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-5 py-2.5 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5"
            >
              <Aperture className="h-4 w-4" aria-hidden="true" />
              Reset view
            </button>
          </div>
        </motion.div>

        {/* 3D Scene + Inspector */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div
              onPointerLeave={() => handleNodeHover(null)}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl border-2 border-foreground bg-[#0A0A0A] shadow-brutal-sm md:aspect-[16/10]"
            >
              <Suspense
                fallback={
                  <div className="flex h-full w-full items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-mint" />
                    <span className="ml-3 font-mono text-sm text-white/50">Loading 3D scene...</span>
                  </div>
                }
              >
                <PipelineScene
                  key={viewKey}
                  activeNode={active}
                  onNodeHover={handleNodeHover}
                  onNodeClick={handleNodeClick}
                />
              </Suspense>

              <div className="pointer-events-none absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
                <span className="font-mono text-[10px] font-bold text-white/70">LIVE</span>
              </div>
            </div>

            {/* Drag-to-scrub timeline */}
            <div className="mt-4 rounded-2xl border-2 border-foreground bg-card px-4 py-3">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <span>Client</span>
                <span>Observability</span>
              </div>
              <input
                type="range"
                min={0}
                max={nodes.length - 1}
                step={1}
                value={active}
                onChange={(e) => handleScrub(Number(e.target.value))}
                onPointerDown={() => setScrubbing(true)}
                onPointerUp={() => setScrubbing(false)}
                aria-label="Scrub pipeline timeline"
                className="mt-2 h-2 w-full cursor-grab appearance-none rounded-full bg-foreground/15 accent-mint active:cursor-grabbing"
              />
              <div className="mt-1 flex items-center justify-between">
                {nodes.map((n, i) => (
                  <button
                    key={n.title}
                    onClick={() => handleScrub(i)}
                    className={`h-1.5 rounded-full border border-foreground/30 transition-all ${i === focus ? "w-6" : "w-1.5"}`}
                    style={{
                      backgroundColor: i <= active ? nodeTextColors[i] : undefined,
                      opacity: i <= active ? 1 : 0.2,
                    }}
                    aria-label={`Jump to ${n.title}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right panel — Inspector + Terminal */}
          <div className="space-y-4 lg:sticky lg:top-28">
            <motion.div
              key={focus}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="rounded-3xl border-2 border-foreground bg-card p-6 shadow-brutal-sm"
            >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Step {focus + 1} / {nodes.length}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-mint px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-foreground">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground" />
                    Live
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2.5">
                  <span
                    className="h-3 w-3 shrink-0 rounded-full ring-2 ring-foreground/15"
                    style={{ backgroundColor: nodeTextColors[focus], boxShadow: `0 0 10px ${nodeTextColors[focus]}` }}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-2xl tracking-wide text-foreground md:text-3xl">
                    {nodes[focus].title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {nodes[focus].detail}
                </p>

                {/* Metrics */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-foreground/20 bg-background p-3">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Latency</div>
                    <div className="mt-1 font-mono text-lg font-bold" style={{ color: nodeTextColors[focus] }}>
                      {nodes[focus].latency}
                    </div>
                  </div>
                  <div className="rounded-xl border border-foreground/20 bg-background p-3">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Throughput</div>
                    <div className="mt-1 font-mono text-lg font-bold text-pink">{nodes[focus].throughput}</div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {nodes[focus].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border-2 border-foreground bg-background px-3 py-1 text-xs font-semibold text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
            </motion.div>

            {/* Live terminal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl border-2 border-foreground bg-[#0A0A0A] p-5 shadow-brutal-sm"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[10px] text-white/50">
                  system-trace — {nodes[focus].title.toLowerCase()}
                </span>
              </div>

              <div
                ref={logContainerRef}
                className="h-36 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20"
              >
                {logLines.map((line, i) => {
                  if (!line) return null
                  const color = line.startsWith("✓") ? "text-[#6ECB9A]" : line.startsWith("⚡") ? "text-[#F5D47A]" : line.startsWith("→") ? "text-[#F2A7C3]" : "text-white/70"
                  return (
                    <motion.div
                      key={`${focus}-${i}`}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-mono text-xs leading-6"
                    >
                      <span className="mr-3 select-none text-white/30">{String(i + 1).padStart(2, "0")}</span>
                      <span className={color}>{line}</span>
                    </motion.div>
                  )
                })}
                {logLines.length < (nodes[focus]?.logs?.length ?? 0) && (
                  <motion.span
                    className="inline-block h-4 w-1.5 bg-mint/80"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
