"use client"

import { useRef, useMemo, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Html, OrbitControls, Sparkles, Stars, ContactShadows, QuadraticBezierLine } from "@react-three/drei"
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing"
import * as THREE from "three"

export type NodeInfo = {
  id: number
  label: string
  sub: string
  color: string
  position: [number, number, number]
}

export const NODES: NodeInfo[] = [
  { id: 0, label: "Client", sub: "Request", color: "#FFFFFF", position: [-4.2, 2.3, 0] },
  { id: 1, label: "Edge", sub: "Security", color: "#4FD8EA", position: [-2.6, 1.2, 1.1] },
  { id: 2, label: "Backend", sub: "API Layer", color: "#6EE7B0", position: [-1, 0.3, -0.5] },
  { id: 3, label: "AI Engine", sub: "LLM + RAG", color: "#FF9FD1", position: [0.8, -0.5, 1] },
  { id: 4, label: "Cloud", sub: "Deploy", color: "#FFDD73", position: [2.6, -1.3, 0] },
  { id: 5, label: "Database", sub: "Persist", color: "#6EE7B0", position: [1, -2.7, -1] },
  { id: 6, label: "Observability", sub: "Monitor", color: "#C9A6FF", position: [-1.6, -2.1, 1.6] },
]

type EdgeType = "flow" | "loop" | "tap"
type EdgeInfo = { from: number; to: number; type: EdgeType }

const EDGES: EdgeInfo[] = [
  { from: 0, to: 1, type: "flow" },
  { from: 1, to: 2, type: "flow" },
  { from: 2, to: 3, type: "flow" },
  { from: 3, to: 4, type: "flow" },
  { from: 4, to: 5, type: "flow" },
  { from: 5, to: 2, type: "loop" },
  { from: 2, to: 6, type: "tap" },
  { from: 4, to: 6, type: "tap" },
]

function isEdgeActive(edge: EdgeInfo, activeNode: number) {
  if (edge.type === "flow") return activeNode >= edge.from
  if (edge.type === "loop") return activeNode === edge.from
  return activeNode === 6 || activeNode === edge.from
}

function PipelineNode({
  node,
  isActive,
  isHovered,
  onHover,
  onUnhover,
  onClick,
}: {
  node: NodeInfo
  isActive: boolean
  isHovered: boolean
  onHover: () => void
  onUnhover: () => void
  onClick: () => void
}) {
  const groupRef = useRef<THREE.Group>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.PointLight>(null)
  const haloRef = useRef<THREE.Mesh>(null)
  const seed = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime()
    const breathe = 1 + Math.sin(t * 1.4 + seed) * 0.035
    const boost = isActive ? 1.18 : isHovered ? 1.1 : 1
    if (groupRef.current) {
      const s = breathe * boost
      groupRef.current.scale.lerp(new THREE.Vector3(s, s, s), delta * 5)
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * (isActive ? 1.6 : 0.3)
      ringRef.current.rotation.x += delta * 0.15
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * (isActive ? 1.1 : 0.2)
      ring2Ref.current.rotation.y += delta * 0.2
    }
    if (glowRef.current) {
      glowRef.current.intensity = THREE.MathUtils.lerp(
        glowRef.current.intensity,
        isActive ? 3.2 : isHovered ? 2 : 0.8,
        delta * 4
      )
    }
    if (haloRef.current) {
      const mat = haloRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, isActive ? 0.28 : isHovered ? 0.2 : 0.1, delta * 4)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group
        position={node.position}
        onPointerOver={(e) => { e.stopPropagation(); onHover() }}
        onPointerOut={onUnhover}
        onClick={(e) => { e.stopPropagation(); onClick() }}
      >
        <group ref={groupRef}>
          {/* Bright HDR core — toneMapped=false keeps it a true bloom source */}
          <mesh>
            <icosahedronGeometry args={[0.4, 3]} />
            <meshBasicMaterial color={node.color} toneMapped={false} transparent opacity={isActive ? 1 : 0.9} />
          </mesh>
          <mesh>
            <icosahedronGeometry args={[0.42, 2]} />
            <meshBasicMaterial color={node.color} wireframe toneMapped={false} transparent opacity={isActive ? 0.7 : 0.35} />
          </mesh>
          {/* Soft additive glow halo — the "energy" bloom feeds off this */}
          <mesh ref={haloRef}>
            <icosahedronGeometry args={[0.72, 1]} />
            <meshBasicMaterial
              color={node.color}
              toneMapped={false}
              transparent
              opacity={0.12}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
              side={THREE.BackSide}
            />
          </mesh>
        </group>

        {/* Twin counter-rotating rings for a layered "reactor" feel */}
        <mesh ref={ringRef}>
          <torusGeometry args={[0.62, 0.022, 16, 64]} />
          <meshBasicMaterial color={node.color} toneMapped={false} transparent opacity={isActive ? 1 : 0.5} />
        </mesh>
        <mesh ref={ring2Ref} rotation={[Math.PI / 2.3, 0, 0]}>
          <torusGeometry args={[0.78, 0.014, 16, 64]} />
          <meshBasicMaterial color={node.color} toneMapped={false} transparent opacity={isActive ? 0.7 : 0.28} />
        </mesh>

        {/* Micro particle halo — orbiting energy motes */}
        <Sparkles
          count={isActive ? 14 : 7}
          scale={1.7}
          size={2.2}
          speed={0.4}
          noise={0.4}
          color={node.color}
          opacity={isActive ? 0.9 : 0.45}
        />

        <pointLight ref={glowRef} color={node.color} intensity={0.8} distance={5.5} />

        {/* Fixed-pixel-size DOM label — no distanceFactor scaling, so it
            never shrinks into garbled sub-pixel text at any camera angle
            or on any screen density (the root cause of the mobile bug). */}
        <Html center occlude={false} style={{ pointerEvents: "none", userSelect: "none" }}>
          <div className="flex -translate-y-6 flex-col items-center text-center">
            <span className="whitespace-nowrap font-display text-[11px] font-bold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] sm:text-[13px]">
              {node.label}
            </span>
            <span
              className="whitespace-nowrap text-[9px] font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] sm:text-[10px]"
              style={{ color: node.color }}
            >
              {node.sub}
            </span>
          </div>
        </Html>
      </group>
    </Float>
  )
}

function quadPoint(t: number, p0: THREE.Vector3, p1: THREE.Vector3, p2: THREE.Vector3, out: THREE.Vector3) {
  const mt = 1 - t
  out.x = mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x
  out.y = mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y
  out.z = mt * mt * p0.z + 2 * mt * t * p1.z + t * t * p2.z
  return out
}

function DataBeam({ from, to, color, active }: { from: [number, number, number]; to: [number, number, number]; color: string; active: boolean }) {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 10

  const { fromVec, toVec, midVec } = useMemo(() => {
    const f = new THREE.Vector3(...from)
    const t = new THREE.Vector3(...to)
    const mid = f.clone().lerp(t, 0.5)
    const dir = t.clone().sub(f).normalize()
    const perp = new THREE.Vector3(0, 0, 1).cross(dir)
    if (perp.lengthSq() < 0.001) perp.set(1, 0, 0)
    perp.normalize().multiplyScalar(f.distanceTo(t) * 0.16)
    mid.add(perp)
    return { fromVec: f, toVec: t, midVec: mid }
  }, [from, to])

  const particlePositions = useMemo(() => new Float32Array(particleCount * 3), [])
  const tmp = useMemo(() => new THREE.Vector3(), [])

  useFrame(({ clock }) => {
    if (!particlesRef.current || !active) return
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
    const t = clock.getElapsedTime()

    for (let i = 0; i < particleCount; i++) {
      const progress = (t * 0.45 + i / particleCount) % 1
      quadPoint(progress, fromVec, midVec, toVec, tmp)
      positions[i * 3] = tmp.x
      positions[i * 3 + 1] = tmp.y
      positions[i * 3 + 2] = tmp.z
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <group>
      <QuadraticBezierLine
        start={fromVec}
        end={toVec}
        mid={midVec}
        color={color}
        lineWidth={active ? 1.6 : 0.8}
        transparent
        opacity={active ? 0.55 : 0.16}
        toneMapped={false}
      />

      {active && (
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={particlePositions}
              count={particleCount}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            color={color}
            size={0.07}
            transparent
            opacity={0.95}
            sizeAttenuation
            toneMapped={false}
          />
        </points>
      )}
    </group>
  )
}

function AmbientParticles() {
  const ref = useRef<THREE.Points>(null)
  const count = 220

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14
      arr[i * 3 + 2] = (Math.random() - 0.5) * 7
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.getElapsedTime() * 0.02
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.05
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#6ECB9A" size={0.03} transparent opacity={0.5} sizeAttenuation toneMapped={false} />
    </points>
  )
}

export type PipelineSceneProps = {
  activeNode: number
  onNodeHover: (idx: number | null) => void
  onNodeClick: (idx: number) => void
}

function Scene({ activeNode, onNodeHover, onNodeClick }: PipelineSceneProps) {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)
  const focus = hoveredNode ?? activeNode
  const controlsRef = useRef<{ autoRotate: boolean; enabled: boolean } | null>(null)

  return (
    <>
      <color attach="background" args={["#050506"]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} />
      <directionalLight position={[-4, -3, 3]} intensity={0.4} />

      <Stars radius={45} depth={25} count={900} factor={2.2} saturation={0} fade speed={0.4} />
      <Sparkles count={45} scale={10} size={1.6} speed={0.25} opacity={0.35} color="#ffffff" />
      <AmbientParticles />

      {EDGES.map((edge, i) => (
        <DataBeam
          key={i}
          from={NODES[edge.from].position}
          to={NODES[edge.to].position}
          color={NODES[edge.to].color}
          active={isEdgeActive(edge, activeNode)}
        />
      ))}

      {NODES.map((node) => (
        <PipelineNode
          key={node.id}
          node={node}
          isActive={focus === node.id}
          isHovered={hoveredNode === node.id}
          onHover={() => {
            setHoveredNode(node.id)
            onNodeHover(node.id)
          }}
          onUnhover={() => {
            setHoveredNode(null)
            onNodeHover(null)
          }}
          onClick={() => onNodeClick(node.id)}
        />
      ))}

      <ContactShadows position={[0, -4, 0]} opacity={0.5} scale={14} blur={2.6} far={4.5} resolution={256} color="#000000" />

      <OrbitControls
        ref={controlsRef}
        makeDefault
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.35}
        minPolarAngle={Math.PI / 2 - 0.7}
        maxPolarAngle={Math.PI / 2 + 0.7}
        minAzimuthAngle={-1.1}
        maxAzimuthAngle={1.1}
        onStart={() => onNodeHover(null)}
      />

      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.3} intensity={1.1} mipmapBlur radius={0.55} />
        <Vignette eskil={false} offset={0.25} darkness={0.7} />
      </EffectComposer>
    </>
  )
}

export default function PipelineScene(props: PipelineSceneProps) {
  return (
    <div className="h-full w-full cursor-grab touch-none active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 9.5], fov: 50 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Scene {...props} />
      </Canvas>
    </div>
  )
}
