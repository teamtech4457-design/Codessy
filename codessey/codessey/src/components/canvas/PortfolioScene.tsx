'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'

interface PortfolioSceneProps {
  isReducedMotion: boolean
}

/* -------------------- Krishna Background -------------------- */
function KrishnaBackground() {
  const { scene } = useThree()

  useEffect(() => {
    if (typeof window === 'undefined' || !scene) return

    const loader = new THREE.TextureLoader()
    let mounted = true

    loader.load(
      '/krishna-defeatingdevil.png.jpg',
      (texture) => {
        if (!mounted) return
        texture.colorSpace = THREE.SRGBColorSpace
        scene.background = texture
      },
      undefined,
      (error) => {
        console.error('Error loading texture:', error)
        scene.background = new THREE.Color(0x1a237e)
      }
    )

    return () => {
      mounted = false
      scene.background = null
    }
  }, [scene])

  return null
}

/* -------------------- Divine Energy Particles -------------------- */
function DivineEnergyParticles() {
  const particlesRef = useRef<THREE.Points>(null!)
  const particleCount = 60
  const frameSkip = useRef(0) // declared first to keep hooks order stable

  const data = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 20
      positions[i3 + 1] = Math.random() * 12
      positions[i3 + 2] = (Math.random() - 0.5) * 15
      const isGolden = Math.random() > 0.3
      colors[i3] = isGolden ? 1.0 : 0.95
      colors[i3 + 1] = isGolden ? 0.9 : 0.3
      colors[i3 + 2] = isGolden ? 0.2 : 0.1
      sizes[i] = Math.random() * 0.15 + 0.08
    }
    return { positions, colors, sizes }
  }, [])

  useFrame((state) => {
    frameSkip.current = (frameSkip.current + 1) % 2
    if (frameSkip.current !== 0) return // throttle to 30fps

    const points = particlesRef.current
    if (!points?.geometry) return

    const time = state.clock.elapsedTime
    const pos = points.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      pos[i3 + 1] += Math.sin(time * 0.5 + i) * 0.01
      pos[i3] += Math.cos(time * 0.4 + i) * 0.005
      if (pos[i3 + 1] > 12) {
        pos[i3 + 1] = 0
        pos[i3] = (Math.random() - 0.5) * 20
        pos[i3 + 2] = (Math.random() - 0.5) * 15
      }
    }
    points.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={data.positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={data.colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={particleCount} array={data.sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

/* -------------------- Victory Energy Drops -------------------- */
function VictoryEnergyDrops() {
  const dropsRef = useRef<THREE.Points>(null!)
  const dropCount = 35
  const frameSkip = useRef(0)

  const data = useMemo(() => {
    const positions = new Float32Array(dropCount * 3)
    const colors = new Float32Array(dropCount * 3)
    for (let i = 0; i < dropCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 18
      positions[i3 + 1] = Math.random() * 10 + 6
      positions[i3 + 2] = (Math.random() - 0.5) * 12
      colors[i3] = 1.0
      colors[i3 + 1] = 0.95
      colors[i3 + 2] = 0.8
    }
    return { positions, colors }
  }, [])

  useFrame((state) => {
    frameSkip.current = (frameSkip.current + 1) % 2
    if (frameSkip.current !== 0) return // update every other frame

    const points = dropsRef.current
    if (!points?.geometry) return

    const time = state.clock.elapsedTime
    const pos = points.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < dropCount; i++) {
      const i3 = i * 3
      pos[i3 + 1] -= 0.05
      pos[i3] += Math.sin(time * 2 + i) * 0.008
      if (pos[i3 + 1] < -2) {
        pos[i3 + 1] = Math.random() * 6 + 8
        pos[i3] = (Math.random() - 0.5) * 18
        pos[i3 + 2] = (Math.random() - 0.5) * 12
      }
    }
    points.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={dropsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={dropCount} array={data.positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={dropCount} array={data.colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.9} sizeAttenuation />
    </points>
  )
}

/* -------------------- Portfolio Scene -------------------- */
export default function PortfolioScene({ isReducedMotion }: PortfolioSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 3, 10], fov: 50 }}
      dpr={[1, 1.5]}
      frameloop="always"
      gl={{ antialias: false, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <KrishnaBackground />
      <DivineEnergyParticles />
      <VictoryEnergyDrops />

      <Sparkles
        count={isReducedMotion ? 30 : 80}
        scale={18}
        size={1.5}
        speed={isReducedMotion ? 0.2 : 0.6}
        color="#fef3c7"
      />

      <Environment preset="night" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
        enabled={false}
      />

      <EffectComposer>
        <Bloom intensity={0.6} luminanceThreshold={0.5} luminanceSmoothing={0.9} />
        <Vignette eskil={false} offset={0.1} darkness={0.4} />
      </EffectComposer>
    </Canvas>
  )
}
