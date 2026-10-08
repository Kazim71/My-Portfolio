"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
  type AnimationPlaybackControls,
  type MotionValue,
} from "framer-motion"
import { Pause, Play, RotateCcw } from "lucide-react"

/*
 * "From Request to Production" — a 15s motion piece.
 *
 * Everything on the stage is a pure function of a single `progress` motion
 * value (seconds, 0 → 15). Nodes, edges, the request packet, and the title
 * cards all derive their state from it with useTransform, so playback causes
 * no React re-renders, and pause / seek / reduced-motion are just "set the
 * clock". Pure SVG + HTML: no canvas, so it never competes with the WebGL
 * scene in the "How I Build" section below it.
 */

const DURATION = 15
const HOLD_MS = 1800

const INK = "#F5F0E8"
const MONO = "var(--font-geist-mono), ui-monospace, monospace"
const TONE = { mint: "#6ECB9A", pink: "#F2A7C3", sun: "#F5D47A" } as const
type Tone = keyof typeof TONE

type Kind = "entry" | "core" | "ai" | "chip" | "auto"
const KIND_TONE: Record<Kind, Tone> = { entry: "mint", core: "mint", ai: "pink", chip: "pink", auto: "sun" }

// Labels + the real stack behind each node (shown on hover / in captions).
const NODE_META = {
  user: { label: "USER REQUEST", kind: "entry", at: 1.95, desc: "A request leaves the browser" },
  client: { label: "CLIENT", kind: "core", at: 2.25, desc: "React · Next.js · TypeScript" },
  api: { label: "API", kind: "core", at: 2.75, desc: "REST · GraphQL · JWT / RBAC" },
  backend: { label: "BACKEND", kind: "core", at: 4.1, desc: "Node.js · Express · Python" },
  database: { label: "DATABASE", kind: "core", at: 4.8, desc: "PostgreSQL · MySQL · MongoDB" },
  ai: { label: "AI ENGINE", kind: "ai", at: 7.15, desc: "OpenAI · Gemini · prompt engineering" },
  llm: { label: "LLM", kind: "chip", at: 7.7, desc: "OpenAI and Gemini APIs" },
  rag: { label: "RAG", kind: "chip", at: 7.85, desc: "Responses grounded in real data" },
  tools: { label: "TOOLS", kind: "chip", at: 8.0, desc: "Function calling into real APIs" },
  webhook: { label: "WEBHOOK", kind: "auto", at: 10.0, desc: "Event-driven trigger" },
  workflow: { label: "WORKFLOW", kind: "auto", at: 10.35, desc: "n8n multi-step automation" },
  action: { label: "ACTION", kind: "auto", at: 10.7, desc: "Third-party APIs & dashboards" },
} as const satisfies Record<string, { label: string; kind: Kind; at: number; desc: string }>
type NodeId = keyof typeof NODE_META
const NODE_IDS = Object.keys(NODE_META) as NodeId[]

type Edge = { a: NodeId; b: NodeId; at: number; tone: Tone | "ink"; dashed?: boolean }
const EDGES: Edge[] = [
  { a: "user", b: "client", at: 2.45, tone: "ink" },
  { a: "client", b: "api", at: 3.0, tone: "ink" },
  { a: "api", b: "backend", at: 4.3, tone: "ink" },
  { a: "backend", b: "database", at: 5.05, tone: "ink" },
  { a: "backend", b: "ai", at: 7.45, tone: "pink" },
  { a: "ai", b: "llm", at: 7.7, tone: "pink" },
  { a: "ai", b: "rag", at: 7.85, tone: "pink" },
  { a: "ai", b: "tools", at: 8.0, tone: "pink" },
  { a: "rag", b: "database", at: 8.4, tone: "pink", dashed: true },
  { a: "ai", b: "webhook", at: 10.1, tone: "sun" },
  { a: "webhook", b: "workflow", at: 10.5, tone: "sun" },
  { a: "workflow", b: "action", at: 10.9, tone: "sun" },
]

// Where the request packet sits, and for how long. Travel happens between dwells.
const DWELLS: [NodeId, number, number][] = [
  ["user", 2.0, 2.6],
  ["client", 3.1, 3.4],
  ["api", 3.9, 4.4],
  ["backend", 5.0, 5.4],
  ["database", 6.0, 6.4],
  ["backend", 6.9, 7.6],
  ["ai", 8.2, 8.4],
  ["rag", 8.7, 8.8],
  ["database", 9.15, 9.3], // retrieval: RAG grounds the answer in stored data
  ["rag", 9.65, 9.7],
  ["ai", 10.0, 10.25],
  ["webhook", 10.6, 10.9],
  ["workflow", 11.25, 11.5],
  ["action", 11.85, 12.4],
]

const CHAPTERS = [
  { start: 0, still: 1.0, name: "Identity", caption: "Mohammad Kazim — Full-Stack Software Engineer, AI Solutions." },
  { start: 2, still: 3.95, name: "Request", caption: "A user request enters through the client and reaches the API." },
  { start: 4, still: 6.95, name: "Backend", caption: "The backend processes it and persists state to the database." },
  { start: 7, still: 9.95, name: "AI Layer", caption: "An AI engine — LLM, RAG, and tools — reasons over grounded data." },
  { start: 10, still: 12.25, name: "Automation", caption: "A webhook triggers a workflow that takes a real action." },
  { start: 12, still: 15, name: "Ship", caption: "Build. Integrate. Automate. Ship." },
] as const

const END_WORDS = [
  { word: "Build", at: 12.55, color: INK },
  { word: "Integrate", at: 12.85, color: TONE.pink },
  { word: "Automate", at: 13.15, color: TONE.sun },
  { word: "Ship", at: 13.45, color: TONE.mint },
] as const

type Rect = { x: number; y: number; w: number; h: number }
type Layout = {
  vw: number
  vh: number
  grid: number
  fs: number
  chipFs: number
  boxFs: number
  packet: number
  nodes: Record<NodeId, Rect>
  boxes: { label: string; tone: Tone; at: number; r: Rect }[]
  legend?: { x: number; y: number }
}

// 16:9 — tablet and up. Coordinates are node centers.
const WIDE: Layout = {
  vw: 960,
  vh: 540,
  grid: 24,
  fs: 15,
  chipFs: 12,
  boxFs: 10,
  packet: 5,
  nodes: {
    user: { x: 108, y: 150, w: 164, h: 44 },
    client: { x: 290, y: 150, w: 124, h: 50 },
    api: { x: 470, y: 150, w: 124, h: 50 },
    backend: { x: 470, y: 290, w: 140, h: 54 },
    database: { x: 470, y: 430, w: 140, h: 54 },
    ai: { x: 740, y: 290, w: 164, h: 58 },
    llm: { x: 662, y: 198, w: 66, h: 30 },
    rag: { x: 742, y: 198, w: 66, h: 30 },
    tools: { x: 826, y: 198, w: 78, h: 30 },
    webhook: { x: 632, y: 450, w: 112, h: 46 },
    workflow: { x: 762, y: 450, w: 112, h: 46 },
    action: { x: 888, y: 450, w: 104, h: 46 },
  },
  boxes: [
    { label: "SYSTEM", tone: "mint", at: 3.95, r: { x: 392, y: 108, w: 156, h: 360 } },
    { label: "AI LAYER", tone: "pink", at: 7.0, r: { x: 608, y: 160, w: 310, h: 172 } },
    { label: "AUTOMATION", tone: "sun", at: 9.95, r: { x: 566, y: 410, w: 382, h: 82 } },
  ],
  legend: { x: 44, y: 410 },
}

// Portrait — phones. Stacked so labels stay legible at ~360px wide.
const NARROW: Layout = {
  vw: 360,
  vh: 510,
  grid: 20,
  fs: 11,
  chipFs: 10,
  boxFs: 8.5,
  packet: 3.5,
  nodes: {
    user: { x: 180, y: 52, w: 150, h: 34 },
    client: { x: 95, y: 118, w: 116, h: 40 },
    api: { x: 265, y: 118, w: 116, h: 40 },
    database: { x: 95, y: 196, w: 116, h: 40 },
    backend: { x: 265, y: 196, w: 116, h: 40 },
    ai: { x: 180, y: 296, w: 150, h: 44 },
    llm: { x: 100, y: 352, w: 64, h: 26 },
    rag: { x: 180, y: 352, w: 64, h: 26 },
    tools: { x: 262, y: 352, w: 72, h: 26 },
    webhook: { x: 66, y: 452, w: 100, h: 38 },
    workflow: { x: 180, y: 452, w: 104, h: 38 },
    action: { x: 296, y: 452, w: 92, h: 38 },
  },
  boxes: [
    { label: "SYSTEM", tone: "mint", at: 3.95, r: { x: 24, y: 86, w: 312, h: 142 } },
    { label: "AI LAYER", tone: "pink", at: 7.0, r: { x: 24, y: 266, w: 312, h: 108 } },
    { label: "AUTOMATION", tone: "sun", at: 9.95, r: { x: 12, y: 424, w: 336, h: 56 } },
  ],
}

function glowFor(id: NodeId) {
  const windows = DWELLS.filter((d) => d[0] === id)
  if (!windows.length) return { input: [0, 1], output: [0, 0] }
  const input: number[] = []
  const output: number[] = []
  for (const [, a, b] of windows) {
    input.push(a - 0.2, a, b, b + 0.25)
    output.push(0, 1, 1, 0)
  }
  return { input, output }
}

function useMedia(query: string, initial: boolean) {
  const [match, setMatch] = useState(initial)
  useEffect(() => {
    const m = window.matchMedia(query)
    const sync = () => setMatch(m.matches)
    sync()
    m.addEventListener("change", sync)
    return () => m.removeEventListener("change", sync)
  }, [query])
  return match
}

function chapterAt(t: number) {
  let idx = 0
  for (let i = 0; i < CHAPTERS.length; i++) if (t >= CHAPTERS[i].start) idx = i
  return idx
}

/* ------------------------------------------------------------------ */
/* SVG pieces — one component per element so each owns its hooks      */
/* ------------------------------------------------------------------ */

function DiagramBox({ box, p, fs }: { box: Layout["boxes"][number]; p: MotionValue<number>; fs: number }) {
  const opacity = useTransform(p, [box.at, box.at + 0.5], [0, 1])
  const { x, y, w, h } = box.r
  const c = TONE[box.tone]
  return (
    <motion.g style={{ opacity }}>
      <rect x={x} y={y} width={w} height={h} rx={14} fill={c} fillOpacity={0.025} stroke={c} strokeOpacity={0.3} strokeDasharray="2 6" />
      <text x={x + 4} y={y - 8} fill={c} fillOpacity={0.75} fontSize={fs} style={{ fontFamily: MONO, letterSpacing: "0.22em" }}>
        {box.label}
      </text>
    </motion.g>
  )
}

function LegendItem({ y, x, label, tone, at, p }: { x: number; y: number; label: string; tone: Tone; at: number; p: MotionValue<number> }) {
  const opacity = useTransform(p, [at, at + 0.4], [0, 1])
  return (
    <motion.g style={{ opacity }}>
      <rect x={x} y={y - 5} width={10} height={10} rx={2} fill={TONE[tone]} fillOpacity={0.85} />
      <text x={x + 18} y={y} dy="0.35em" fill={INK} fillOpacity={0.5} fontSize={10} style={{ fontFamily: MONO, letterSpacing: "0.18em" }}>
        {label}
      </text>
    </motion.g>
  )
}

function DiagramEdge({ e, L, p, hovered }: { e: Edge; L: Layout; p: MotionValue<number>; hovered: NodeId | null }) {
  const a = L.nodes[e.a]
  const b = L.nodes[e.b]
  const pathLength = useTransform(p, [e.at, e.at + 0.4], [0, 1])
  const opacity = useTransform(p, [e.at, e.at + 0.12], [0, 1])
  const lit = hovered !== null && (e.a === hovered || e.b === hovered)
  const stroke = e.tone === "ink" ? INK : TONE[e.tone]
  const base = e.tone === "ink" ? 0.26 : 0.5
  return (
    <motion.line
      x1={a.x}
      y1={a.y}
      x2={b.x}
      y2={b.y}
      stroke={stroke}
      strokeOpacity={lit ? 0.95 : base}
      strokeWidth={lit ? 1.75 : 1.25}
      strokeLinecap="round"
      strokeDasharray={e.dashed ? "3 5" : undefined}
      // pathLength drives stroke-dasharray, so dashed edges fade instead of draw.
      style={e.dashed ? { opacity } : { pathLength, opacity }}
    />
  )
}

function DiagramNode({
  id,
  L,
  p,
  hovered,
  onHover,
}: {
  id: NodeId
  L: Layout
  p: MotionValue<number>
  hovered: NodeId | null
  onHover: ((id: NodeId | null) => void) | null
}) {
  const meta = NODE_META[id]
  const r = L.nodes[id]
  const tone = TONE[KIND_TONE[meta.kind]]
  const opacity = useTransform(p, [meta.at, meta.at + 0.35], [0, 1])
  const y = useTransform(p, [meta.at, meta.at + 0.35], [6, 0])
  const g = glowFor(id)
  const glow = useTransform(p, g.input, g.output)
  const halo = useTransform(glow, (v) => v * 0.16)
  const check = useTransform(p, [11.9, 12.2], [0, 1])

  const isChip = meta.kind === "chip"
  const rx = meta.kind === "entry" ? r.h / 2 : isChip ? 6 : 10
  const x0 = r.x - r.w / 2
  const y0 = r.y - r.h / 2
  const isHover = hovered === id
  const fs = isChip ? L.chipFs : L.fs

  return (
    <motion.g
      style={{ opacity, y }}
      onPointerEnter={onHover ? (ev) => ev.pointerType === "mouse" && onHover(id) : undefined}
      onPointerLeave={onHover ? () => onHover(null) : undefined}
    >
      <motion.rect x={x0 - 5} y={y0 - 5} width={r.w + 10} height={r.h + 10} rx={rx + 5} fill={tone} style={{ opacity: halo }} />
      <rect
        x={x0}
        y={y0}
        width={r.w}
        height={r.h}
        rx={rx}
        fill={meta.kind === "entry" ? "#0F1A14" : "#111111"}
        stroke={isHover ? tone : meta.kind === "entry" ? tone : INK}
        strokeOpacity={isHover ? 1 : meta.kind === "entry" ? 0.7 : 0.24}
        strokeWidth={1.25}
      />
      <motion.rect x={x0} y={y0} width={r.w} height={r.h} rx={rx} fill="none" stroke={tone} strokeWidth={1.75} style={{ opacity: glow }} />
      {/* Status LED in the corner — clear of the centered label at any width. */}
      {!isChip && meta.kind !== "entry" && <circle cx={x0 + 8} cy={y0 + 8} r={2.2} fill={tone} fillOpacity={0.9} />}
      <text
        x={r.x}
        y={r.y}
        dy="0.35em"
        textAnchor="middle"
        fill={INK}
        fillOpacity={isHover ? 1 : 0.92}
        fontSize={fs}
        style={{ fontFamily: MONO, letterSpacing: "0.1em" }}
      >
        {meta.label}
      </text>
      {id === "action" && (
        // "Done" badge pinned to the node's corner, outside the label.
        <motion.g style={{ opacity: check }}>
          <circle cx={x0 + r.w} cy={y0} r={L.packet + 4} fill={TONE.mint} stroke="#0A0A0A" strokeWidth={2} />
          <motion.path
            d={`M ${x0 + r.w - L.packet * 0.8} ${y0} l ${L.packet * 0.6} ${L.packet * 0.6} l ${L.packet} ${-L.packet * 1.2}`}
            fill="none"
            stroke="#0A0A0A"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pathLength: check }}
          />
        </motion.g>
      )}
    </motion.g>
  )
}

function Packet({ L, p }: { L: Layout; p: MotionValue<number> }) {
  const times: number[] = []
  const xs: number[] = []
  const ys: number[] = []
  for (const [id, a, b] of DWELLS) {
    const n = L.nodes[id]
    times.push(a, b)
    xs.push(n.x, n.x)
    ys.push(n.y, n.y)
  }
  const cx = useTransform(p, times, xs)
  const cy = useTransform(p, times, ys)
  const opacity = useTransform(p, [1.95, 2.15, 12.4, 12.7], [0, 1, 1, 0])
  const fill = useTransform(p, [7.5, 8.15, 10.2, 10.55], [TONE.mint, TONE.pink, TONE.pink, TONE.sun])
  return (
    <motion.g style={{ opacity }} pointerEvents="none">
      <motion.circle cx={cx} cy={cy} r={L.packet * 3} fill={fill} fillOpacity={0.16} />
      <motion.circle cx={cx} cy={cy} r={L.packet} fill={fill} />
    </motion.g>
  )
}

function Stage({ L, p, hovered, onHover }: { L: Layout; p: MotionValue<number>; hovered: NodeId | null; onHover: ((id: NodeId | null) => void) | null }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "")
  const gridId = `grid-${uid}`
  const dim = useTransform(p, [12.25, 12.85], [1, 0.06])
  const g = L.grid

  return (
    <svg
      viewBox={`0 0 ${L.vw} ${L.vh}`}
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-labelledby={`${uid}-t ${uid}-d`}
    >
      <title id={`${uid}-t`}>From request to production</title>
      <desc id={`${uid}-d`}>
        A user request moves through the client and API into the backend and database, then into an AI engine with LLM,
        RAG and tools, and finally triggers a webhook, workflow and action.
      </desc>
      <defs>
        <pattern id={gridId} width={g} height={g} patternUnits="userSpaceOnUse">
          <path d={`M ${g} 0 L 0 0 0 ${g}`} fill="none" stroke={INK} strokeOpacity={0.045} strokeWidth={1} />
        </pattern>
      </defs>
      <rect width={L.vw} height={L.vh} fill={`url(#${gridId})`} />

      <motion.g style={{ opacity: dim }}>
        {L.boxes.map((b) => (
          <DiagramBox key={b.label} box={b} p={p} fs={L.boxFs} />
        ))}
        {L.legend && (
          <>
            <LegendItem p={p} x={L.legend.x} y={L.legend.y} label="CORE STACK" tone="mint" at={3.95} />
            <LegendItem p={p} x={L.legend.x} y={L.legend.y + 26} label="AI LAYER" tone="pink" at={7.0} />
            <LegendItem p={p} x={L.legend.x} y={L.legend.y + 52} label="AUTOMATION" tone="sun" at={9.95} />
          </>
        )}
        {EDGES.map((e) => (
          <DiagramEdge key={`${e.a}-${e.b}`} e={e} L={L} p={p} hovered={hovered} />
        ))}
        {/* Drawn under the nodes: the packet "enters" each node, which lights up. */}
        <Packet L={L} p={p} />
        {NODE_IDS.map((id) => (
          <DiagramNode key={id} id={id} L={L} p={p} hovered={hovered} onHover={onHover} />
        ))}
      </motion.g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* HTML overlays — title + closing card, sized with container units    */
/* ------------------------------------------------------------------ */

function TitleCard({ p }: { p: MotionValue<number> }) {
  const opacity = useTransform(p, [0, 0.45, 1.65, 1.95], [0, 1, 1, 0])
  const y = useTransform(p, [0, 0.45, 1.65, 1.95], [14, 0, 0, -10])
  const rule = useTransform(p, [0.3, 0.95], [0, 1])
  const sub = useTransform(p, [0.5, 0.9], [0, 1])
  return (
    <motion.div style={{ opacity, y }} className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center" aria-hidden="true">
      <p className="font-display uppercase leading-none text-[#F5F0E8]" style={{ fontSize: "clamp(36px, 9.5cqw, 104px)" }}>
        Mohammad Kazim
      </p>
      <motion.span style={{ scaleX: rule }} className="mt-[2.2cqw] block h-px w-[34cqw] origin-center bg-[#F5F0E8]/40" />
      <motion.div
        style={{ opacity: sub, fontSize: "clamp(10px, 1.55cqw, 15px)" }}
        className="mt-[2.2cqw] flex flex-col items-center gap-1.5 font-mono uppercase tracking-[0.32em] md:flex-row md:gap-4"
      >
        <span className="text-[#6ECB9A]">Full-Stack Software Engineer</span>
        <span className="hidden text-[#F5F0E8]/25 md:inline">/</span>
        <span className="text-[#F2A7C3]">AI Solutions</span>
      </motion.div>
    </motion.div>
  )
}

function EndWord({ word, at, color, index, p }: { word: string; at: number; color: string; index: number; p: MotionValue<number> }) {
  const opacity = useTransform(p, [at, at + 0.3], [0, 1])
  const y = useTransform(p, [at, at + 0.3], [12, 0])
  return (
    <motion.span style={{ opacity, y }} className="flex flex-col items-center">
      <span className="font-mono text-[#F5F0E8]/35" style={{ fontSize: "clamp(9px, 1.1cqw, 12px)", letterSpacing: "0.2em" }}>
        0{index + 1}
      </span>
      <span className="font-display uppercase leading-none" style={{ color, fontSize: "clamp(30px, 6.4cqw, 78px)" }}>
        {word}
      </span>
    </motion.span>
  )
}

function ClosingCard({ p }: { p: MotionValue<number> }) {
  const sig = useTransform(p, [13.95, 14.4], [0, 1])
  const sigY = useTransform(p, [13.95, 14.4], [10, 0])
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center" aria-hidden="true">
      <div className="flex flex-wrap items-end justify-center gap-x-[2.6cqw] gap-y-3">
        {END_WORDS.map((w, i) => (
          <EndWord key={w.word} {...w} index={i} p={p} />
        ))}
      </div>
      <motion.div style={{ opacity: sig, y: sigY }} className="mt-[4.5cqw] flex flex-col items-center">
        <span className="mb-[2cqw] block h-px w-[22cqw] bg-[#F5F0E8]/30" />
        <p className="font-display uppercase leading-none text-[#F5F0E8]" style={{ fontSize: "clamp(22px, 4.2cqw, 48px)" }}>
          Mohammad Kazim
        </p>
        <p className="mt-2 font-mono uppercase text-[#F5F0E8]/60" style={{ fontSize: "clamp(9px, 1.3cqw, 13px)", letterSpacing: "0.28em" }}>
          Full-Stack Software Engineer · AI Solutions
        </p>
      </motion.div>
    </div>
  )
}

function ChapterTick({ i, p, active, onSelect }: { i: number; p: MotionValue<number>; active: boolean; onSelect: () => void }) {
  const c = CHAPTERS[i]
  const end = i + 1 < CHAPTERS.length ? CHAPTERS[i + 1].start : DURATION
  const fill = useTransform(p, [c.start, end], [0, 1])
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={active ? "step" : undefined}
      aria-label={`Step ${i + 1}: ${c.name} — ${c.caption}`}
      className="group/tick w-full rounded-md py-1 text-left"
    >
      <span className="block h-1.5 overflow-hidden rounded-full bg-foreground/15">
        <motion.span style={{ scaleX: fill }} className={`block h-full origin-left rounded-full ${active ? "bg-mint" : "bg-foreground/55"}`} />
      </span>
      <span
        className={`mt-2 block font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
          active ? "text-foreground" : "text-muted-foreground group-hover/tick:text-foreground"
        }`}
      >
        0{i + 1}
        <span className="hidden md:inline"> · {c.name}</span>
      </span>
    </button>
  )
}

/* ------------------------------------------------------------------ */

const WavySvg = () => (
  <svg viewBox="0 0 140 24" fill="none" className="mx-auto mt-3 h-5 w-32 text-pink" aria-hidden="true">
    <path d="M2 12c10-12 20 12 30 0s20-12 30 0 20 12 30 0 20-12 30 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
)

export default function MotionStory() {
  const stageRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<HTMLSpanElement>(null)
  const ctrl = useRef<AnimationPlaybackControls | null>(null)
  const hold = useRef<number | null>(null)
  const spot = useRef<number | null>(null)

  const inView = useInView(stageRef, { amount: 0.4 })
  // useReducedMotion reads matchMedia on the client's first render but is
  // false on the server — gating on `mounted` keeps the first client render
  // identical to the SSR HTML (otherwise the play controls hydration-mismatch).
  const prefersReduced = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const reduce = mounted && !!prefersReduced
  const wide = useMedia("(min-width: 768px)", true)
  const finePointer = useMedia("(hover: hover) and (pointer: fine)", false)

  const progress = useMotionValue(0)
  const [playing, setPlaying] = useState(true)
  const [chapter, setChapter] = useState(0)
  const [hovered, setHovered] = useState<NodeId | null>(null)

  const halt = useCallback(() => {
    ctrl.current?.stop()
    ctrl.current = null
    if (hold.current !== null) {
      window.clearTimeout(hold.current)
      hold.current = null
    }
  }, [])

  const start = useCallback(() => {
    halt()
    const run = () => {
      const from = progress.get() >= DURATION ? 0 : progress.get()
      progress.set(from)
      ctrl.current = animate(progress, DURATION, {
        duration: DURATION - from,
        ease: "linear",
        onComplete: () => {
          // Hold on the closing card, then loop while the stage stays in view.
          hold.current = window.setTimeout(() => {
            progress.set(0)
            run()
          }, HOLD_MS)
        },
      })
    }
    run()
  }, [halt, progress])

  // Only animate while visible; reduced motion gets a static frame of the full system.
  useEffect(() => {
    if (reduce) {
      halt()
      progress.set(CHAPTERS[4].still)
      return
    }
    if (inView && playing) start()
    else halt()
    return halt
  }, [reduce, inView, playing, start, halt, progress])

  useMotionValueEvent(progress, "change", (v) => {
    const idx = chapterAt(v)
    setChapter((c) => (c === idx ? c : idx))
    if (timeRef.current) timeRef.current.textContent = `T+${v.toFixed(1).padStart(4, "0")}s`
  })

  const seek = (i: number) => {
    halt()
    progress.set(reduce ? CHAPTERS[i].still : CHAPTERS[i].start)
    setChapter(i)
    if (!reduce && playing && inView) start()
  }

  const togglePlay = () => {
    if (!playing && progress.get() >= DURATION) progress.set(0)
    setPlaying((v) => !v)
  }

  const replay = () => {
    progress.set(0)
    setChapter(0)
    setPlaying(true)
    if (inView && !reduce) start()
  }

  // Desktop-only cursor spotlight: CSS variables written in rAF, no React state.
  const interactive = finePointer && !reduce
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive || spot.current !== null) return
    const el = e.currentTarget
    const { clientX, clientY } = e
    spot.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect()
      el.style.setProperty("--mx", `${clientX - r.left}px`)
      el.style.setProperty("--my", `${clientY - r.top}px`)
      spot.current = null
    })
  }

  const caption = hovered ? `${NODE_META[hovered].label} — ${NODE_META[hovered].desc}` : CHAPTERS[chapter].caption

  return (
    <section id="motion" aria-labelledby="motion-heading" className="border-t-2 border-foreground bg-background px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border-2 border-foreground px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            Engineering in Motion
          </span>
          <h2 id="motion-heading" className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-foreground md:text-6xl">
            From Request to Production
          </h2>
          <WavySvg />
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Turning complex backend and AI workflows into clear visual systems.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 max-w-md md:max-w-none">
          <div
            ref={stageRef}
            onPointerMove={interactive ? onPointerMove : undefined}
            onPointerLeave={() => setHovered(null)}
            className="@container group relative aspect-[12/17] overflow-hidden rounded-3xl border-2 border-foreground bg-[#0A0A0A] shadow-brutal md:aspect-[16/9]"
          >
            <Stage L={wide ? WIDE : NARROW} p={progress} hovered={hovered} onHover={interactive ? setHovered : null} />

            {interactive && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(110,203,154,0.07), transparent 70%)" }}
              />
            )}

            <TitleCard p={progress} />
            <ClosingCard p={progress} />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5F0E8]/45 md:px-6 md:py-4 md:text-[11px]"
            >
              <span>
                0{chapter + 1} · {CHAPTERS[chapter].name}
              </span>
              <span>
                <span ref={timeRef}>T+00.0s</span>
                <span className="text-[#F5F0E8]/25"> / 15.0s</span>
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {!reduce && (
              <>
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={playing ? "Pause animation" : "Play animation"}
                  // Fixed width so the Pause↔Play label swap never shifts the caption beside it.
                  className="inline-flex w-[6.75rem] items-center justify-center gap-2 rounded-full border-2 border-foreground bg-background px-4 py-2 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5"
                >
                  {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
                  {playing ? "Pause" : "Play"}
                </button>
                <button
                  type="button"
                  onClick={replay}
                  aria-label="Replay from the start"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Replay
                </button>
              </>
            )}
            <p className="min-h-[2.5rem] flex-1 basis-full text-sm text-muted-foreground sm:basis-0 sm:text-right">{caption}</p>
          </div>

          <ol className="mt-4 grid grid-cols-6 gap-2" aria-label="Animation steps">
            {CHAPTERS.map((_, i) => (
              <li key={i}>
                <ChapterTick i={i} p={progress} active={i === chapter} onSelect={() => seek(i)} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
