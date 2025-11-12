

'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useRef, useMemo, useEffect, useState } from 'react'
import * as THREE from 'three'

interface HeroSceneProps {
  isReducedMotion: boolean
}

/**
 * PERFORMANCE NOTES (kept minimal & safe):
 * - Reduced particle counts slightly (rain, mist, dust)
 * - Throttled expensive useFrame updates by skipping frames when possible
 * - Lowered geometry segments for decorative spheres where acceptable
 * - Lowered postprocessing intensity/height
 * - Canvas dpr limited and antialias disabled
 */

/* -------------------- Scene Manager (central timeline) -------------------- */
function SceneManager({ isReducedMotion }: { isReducedMotion: boolean }) {
  const { scene } = useThree()
  const [currentPhase, setCurrentPhase] = useState(0) // 0: Prison (15s), 1: Krishna only
  const animationStartTime = useRef(0)

  useFrame((state) => {
    if (animationStartTime.current === 0) {
      animationStartTime.current = state.clock.elapsedTime
    }

    const elapsed = state.clock.elapsedTime - animationStartTime.current

    // After 15 seconds, switch to Krishna background only (remove prison)
    if (elapsed > 15 && currentPhase === 0) {
      setCurrentPhase(1)
    }
  })

  useEffect(() => {
    // Clear background during prison phase (run once ideally)
    if (currentPhase === 0) {
      scene.background = null
    }
  }, [currentPhase, scene])

  return (
    <>
      {/* Show prison elements ONLY in phase 0 (first 15 seconds) */}
      {currentPhase === 0 && (
        <>
          <PrisonCell />
          <PrisonBars />
          <Chains />
          <ParentSilhouettes />
          <DivineLight isReducedMotion={isReducedMotion} phase={currentPhase} />
          <MoonBeam />
          <DustParticles isReducedMotion={isReducedMotion} />
        </>
      )}

      {/* Show Krishna background and weather effects ONLY in phase 1 (after 15 seconds) */}
      {currentPhase === 1 && (
        <>
          <KrishnaBackground />
          <CloudSystem />
          <RainSystem />
          <SeaWater />
          <LightningStorm />
          <OceanMist />
          <DivineLight isReducedMotion={isReducedMotion} phase={currentPhase} />
        </>
      )}

      <CameraController isReducedMotion={isReducedMotion} phase={currentPhase} />
    </>
  )
}

/* -------------------- Krishna Background (load texture once) -------------------- */
function KrishnaBackground() {
  const { scene } = useThree()

  // load texture once
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader()
    let tex: THREE.Texture | null = null
    // We do not actually trigger load here (load is async). We'll call loader in effect to ensure it's client-only.
    return { loader, url: '/krishna-birth-bg.jpg.png', texRef: () => tex }
  }, [])

  useEffect(() => {
    if (!scene) return
    const loader = new THREE.TextureLoader()

    loader.load(
      '/krishna-birth-bg.jpg.png',
      (tex) => {
        // Ensure correct color space and set background
        try {
          // @ts-ignore - colorSpace exists on newer three; fallback handled
          tex.colorSpace = (THREE as any).SRGBColorSpace ?? tex.colorSpace
        } catch (e) {
          // ignore
        }
        scene.background = tex
      },
      undefined,
      (error) => {
        console.error('Error loading texture:', error)
        scene.background = new THREE.Color(0x1a237e)
      }
    )

    return () => {
      if (scene) {
        scene.background = null
      }
    }
  }, [scene])

  return null
}

/* -------------------- CloudSystem (throttled update) -------------------- */
function CloudSystem() {
  const cloudsRef = useRef<THREE.Group>(null!)
  const cloudCount = 8

  const clouds = useMemo(() => {
    const cloudData: { position: [number, number, number]; scale: number; speed: number }[] = []
    for (let i = 0; i < cloudCount; i++) {
      cloudData.push({
        position: [
          (Math.random() - 0.5) * 15,
          4 + Math.random() * 3,
          -8 + Math.random() * 4
        ],
        scale: 0.5 + Math.random() * 0.8,
        speed: 0.08 + Math.random() * 0.15
      })
    }
    return cloudData
  }, [cloudCount])

  // frame skip for throttling
  const frameSkipRef = useRef(0)
  useFrame((state) => {
    frameSkipRef.current = (frameSkipRef.current + 1) % 2 // update every 2 frames
    if (frameSkipRef.current !== 0) return

    if (cloudsRef.current?.children) {
      const time = state.clock.elapsedTime
      cloudsRef.current.children.forEach((cloud, index) => {
        if (index < clouds.length) {
          const cloudInfo = clouds[index]
          cloud.position.x = cloudInfo.position[0] + Math.sin(time * cloudInfo.speed + index) * 2
          cloud.position.y = cloudInfo.position[1] + Math.sin(time * cloudInfo.speed * 0.5 + index) * 0.5
        }
      })
    }
  })

  return (
    <group ref={cloudsRef}>
      {clouds.map((cloud, i) => (
        <mesh key={i} position={cloud.position as [number, number, number]} scale={cloud.scale}>
          {/* Lowered sphere detail (8 segments) */}
          <sphereGeometry args={[1, 8, 6]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.6}
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  )
}

/* -------------------- RainSystem (reduced count + throttled) -------------------- */
function RainSystem() {
  const rainRef = useRef<THREE.Points>(null!)
  const rainCount = 250 // reduced from 500 -> lighter but still dense

  const rain = useMemo(() => {
    const positions = new Float32Array(rainCount * 3)
    const velocities = new Float32Array(rainCount)

    for (let i = 0; i < rainCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 20
      positions[i3 + 1] = Math.random() * 10 + 5
      positions[i3 + 2] = (Math.random() - 0.5) * 15 - 5

      velocities[i] = 0.5 + Math.random() * 0.5
    }

    return { positions, velocities }
  }, [rainCount])

  // throttle updates
  const frameSkipRef = useRef(0)
  useFrame((state) => {
    frameSkipRef.current = (frameSkipRef.current + 1) % 2 // update every 2 frames
    if (frameSkipRef.current !== 0) return

    if (rainRef.current?.geometry) {
      const positions = rainRef.current.geometry.attributes.position.array as Float32Array

      for (let i = 0; i < rainCount; i++) {
        const i3 = i * 3
        positions[i3 + 1] -= rain.velocities[i] * 0.12 // slightly faster to keep rhythm

        if (positions[i3 + 1] < -2) {
          positions[i3] = (Math.random() - 0.5) * 20
          positions[i3 + 1] = Math.random() * 5 + 8
          positions[i3 + 2] = (Math.random() - 0.5) * 15 - 5
        }
      }

      rainRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={rainRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={rainCount}
          array={rain.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#9fc7ff"
        size={0.02}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

/* -------------------- Sea Water (lighter geometry detail) -------------------- */
function SeaWater() {
  const waterRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (waterRef.current) {
      const time = state.clock.elapsedTime

      const wave1 = Math.sin(time * 1.5) * 0.08
      const wave2 = Math.cos(time * 0.8) * 0.04
      const wave3 = Math.sin(time * 2.2 + 2) * 0.06

      waterRef.current.rotation.x = wave1
      waterRef.current.rotation.z = wave2
      waterRef.current.position.y = -1 + (wave3 * 0.1)
    }
  })

  // lowered subdivisions from 32 -> 16 to reduce vertex count
  return (
    <mesh ref={waterRef} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[25, 25, 16, 16]} />
      <meshStandardMaterial
        color="#1e3a8a"
        transparent
        opacity={0.85}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

/* -------------------- LightningStorm (keeps behavior but lightweight) -------------------- */
function LightningStorm() {
  const [lightningActive, setLightningActive] = useState(false)
  const [lightningIntensity, setLightningIntensity] = useState(0)
  const lightningRefs = useRef<THREE.PointLight[]>([])

  // small throttle: trigger check every few frames using internal time-based random
  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (Math.random() > 0.92 && !lightningActive) {
      setLightningActive(true)
      setLightningIntensity(12)

      setTimeout(() => {
        setLightningIntensity(0)
        setTimeout(() => {
          setLightningIntensity(6)
          setTimeout(() => {
            setLightningIntensity(0)
            setLightningActive(false)
          }, 50)
        }, 100)
      }, 100)
    }

    lightningRefs.current.forEach(light => {
      if (light) {
        light.intensity = THREE.MathUtils.lerp(
          light.intensity,
          lightningIntensity,
          0.2
        )
      }
    })
  })

  return (
    <group>
      <pointLight
        ref={ref => {
          if (ref) lightningRefs.current[0] = ref
        }}
        color="#4f46e5"
        intensity={0}
        distance={25}
        position={[3, 8, -5]}
      />

      <pointLight
        ref={ref => {
          if (ref) lightningRefs.current[1] = ref
        }}
        color="#6366f1"
        intensity={0}
        distance={20}
        position={[-4, 7, -3]}
      />
    </group>
  )
}

/* -------------------- OceanMist (reduced count + throttled) -------------------- */
function OceanMist() {
  const fogRef = useRef<THREE.Points>(null!)
  const mistCount = 60 // reduced from 100

  const mist = useMemo(() => {
    const positions = new Float32Array(mistCount * 3)
    const sizes = new Float32Array(mistCount)

    for (let i = 0; i < mistCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 12
      positions[i3 + 1] = Math.random() * 3
      positions[i3 + 2] = (Math.random() - 0.5) * 8 - 2

      sizes[i] = Math.random() * 0.25 + 0.08
    }

    return { positions, sizes }
  }, [mistCount])

  const frameSkipRef = useRef(0)
  useFrame((state) => {
    frameSkipRef.current = (frameSkipRef.current + 1) % 2 // update every 2 frames
    if (frameSkipRef.current !== 0) return

    if (fogRef.current?.geometry) {
      const time = state.clock.elapsedTime
      const positions = fogRef.current.geometry.attributes.position.array as Float32Array

      for (let i = 0; i < mistCount; i++) {
        const i3 = i * 3
        positions[i3 + 1] += Math.sin(time * 0.5 + i) * 0.004
        positions[i3 + 0] += Math.cos(time * 0.3 + i) * 0.002
      }

      fogRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={fogRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={mistCount}
          array={mist.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={mistCount}
          array={mist.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#e0f2fe"
        size={0.18}
        transparent
        opacity={0.38}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

/* -------------------- DivineLight (kept behavior but reduced sphere detail) -------------------- */
function DivineLight({ isReducedMotion, phase }: { isReducedMotion: boolean; phase: number }) {
  const lightGroupRef = useRef<THREE.Group>(null!)
  const coreRef = useRef<THREE.Mesh>(null!)
  const pointLightRef = useRef<THREE.PointLight>(null!)
  const animationStartTime = useRef(0)

  useFrame((state) => {
    if (!coreRef.current || !pointLightRef.current) return

    if (animationStartTime.current === 0) {
      animationStartTime.current = state.clock.elapsedTime
    }

    const elapsed = state.clock.elapsedTime - animationStartTime.current

    if (phase === 0) {
      // Prison phase - faster divine light animation (15 seconds total)
      if (elapsed < 3) {
        coreRef.current.scale.setScalar(0.01)
        ;(coreRef.current.material as THREE.MeshBasicMaterial).opacity = 0
        pointLightRef.current.intensity = 0
      } else if (elapsed < 6) {
        const progress = (elapsed - 3) / 3
        coreRef.current.scale.setScalar(0.01 + progress * 0.3)
        ;(coreRef.current.material as THREE.MeshBasicMaterial).opacity = progress * 0.7
        pointLightRef.current.intensity = progress * 0.8
      } else if (elapsed < 12) {
        const progress = (elapsed - 6) / 6
        coreRef.current.scale.setScalar(0.31 + progress * 0.7)
        ;(coreRef.current.material as THREE.MeshBasicMaterial).opacity = 0.7 + progress * 0.2
        pointLightRef.current.intensity = 0.8 + progress * 1.2
      } else {
        const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1
        coreRef.current.scale.setScalar(1 * pulse)
        pointLightRef.current.intensity = 2 * pulse
      }
    } else {
      // Krishna phase - enhanced divine light in the sky
      const pulse = Math.sin(state.clock.elapsedTime * 3) * 0.2 + 1
      coreRef.current.scale.setScalar(2 * pulse)
      coreRef.current.position.y = 5
      ;(coreRef.current.material as THREE.MeshBasicMaterial).opacity = 1
      pointLightRef.current.intensity = 8 * pulse
      pointLightRef.current.position.y = 5
    }
  })

  return (
    <group ref={lightGroupRef} position={[0, 1, -1]}>
      <mesh ref={coreRef}>
        {/* Lowered sphere detail from 32 -> 16 */}
        <sphereGeometry args={[0.5, 16, 12]} />
        <meshBasicMaterial
          color="#ffd87a"
          transparent
          opacity={0}
          toneMapped={false}
        />
      </mesh>

      <pointLight
        ref={pointLightRef}
        color="#ffd87a"
        intensity={0}
        distance={25}
        decay={2}
      />
    </group>
  )
}

/* -------------------- CameraController -------------------- */
function CameraController({ isReducedMotion, phase }: { isReducedMotion: boolean; phase: number }) {
  const { camera } = useThree()
  const animationStartTime = useRef(0)

  useFrame((state) => {
    if (isReducedMotion) {
      camera.position.set(0, 2, 8)
      return
    }

    if (animationStartTime.current === 0) {
      animationStartTime.current = state.clock.elapsedTime
    }

    const elapsed = state.clock.elapsedTime - animationStartTime.current

    if (phase === 0) {
      // Prison phase camera - faster dolly (15 seconds total)
      if (elapsed > 6) {
        camera.position.lerp(new THREE.Vector3(0, 1.5, 4), 0.1)
      } else {
        camera.position.lerp(new THREE.Vector3(0, 2, 8), 0.1)
      }
      camera.lookAt(0, 1, -1)
    } else {
      // Krishna phase camera - show the full scene with sky
      camera.position.lerp(new THREE.Vector3(0, 5, 15), 0.05)
      camera.lookAt(0, 2, 0)
    }
  })

  return null
}

/* -------------------- Prison / Props (kept as-is but lowered some geometry detail) -------------------- */
function PrisonCell() {
  const wallsRef = useRef<THREE.Group>(null!)

  const stoneColors = ['#0b0f15', '#1a2430', '#111827', '#0f172a']

  return (
    <group ref={wallsRef}>
      <mesh position={[0, 2, -3]} receiveShadow>
        <boxGeometry args={[8, 4, 0.3]} />
        <meshStandardMaterial
          color={stoneColors[0]}
          roughness={0.9}
          metalness={0.1}
          transparent={true}
          opacity={0.8}
        />
      </mesh>

      <mesh position={[-4, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[6, 4, 0.3]} />
        <meshStandardMaterial
          color={stoneColors[1]}
          roughness={0.9}
          metalness={0.1}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
      <mesh position={[4, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[6, 4, 0.3]} />
        <meshStandardMaterial
          color={stoneColors[1]}
          roughness={0.9}
          metalness={0.1}
          transparent={true}
          opacity={0.8}
        />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial
          color="#0b0f15"
          roughness={0.95}
          metalness={0.05}
          transparent={true}
          opacity={0.7}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 4, 0]} receiveShadow>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial
          color={stoneColors[2]}
          roughness={0.9}
          metalness={0.1}
          transparent={true}
          opacity={0.8}
        />
      </mesh>

      <mesh position={[2, 3, -2.9]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1, 0.5]} />
        <meshBasicMaterial color="#9fc7ff" transparent opacity={0.3} />
      </mesh>

      {[-0.3, 0, 0.3].map((x, i) => (
        <mesh key={i} position={[2 + x, 3, -2.85]} castShadow>
          <boxGeometry args={[0.05, 0.5, 0.05]} />
          <meshStandardMaterial color="#4b5563" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  )
}

function PrisonBars() {
  const barsRef = useRef<THREE.Group>(null!)

  return (
    <group ref={barsRef} position={[0, 2, 1.5]}>
      {Array.from({ length: 9 }).map((_, i) => (
        <mesh key={i} position={[i - 4, 0, 0]} castShadow>
          <boxGeometry args={[0.08, 4, 0.08]} />
          <meshStandardMaterial
            color="#374151"
            metalness={0.9}
            roughness={0.1}
            transparent={true}
            opacity={0.9}
          />
        </mesh>
      ))}

      <mesh position={[0, 3, 0]} castShadow>
        <boxGeometry args={[8, 0.08, 0.08]} />
        <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[8, 0.08, 0.08]} />
        <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

function Chains() {
  return (
    <group>
      {Array.from({ length: 4 }).map((_, i) => (
        <group key={i}>
          <mesh position={[-3.5 + i * 2, 2.5, -2.8]} castShadow>
            <cylinderGeometry args={[0.06, 0.06, 0.8, 8]} />
            <meshStandardMaterial color="#6b7280" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[-3.5 + i * 2, 1.5, -2.8]} castShadow>
            <sphereGeometry args={[0.1, 8, 6]} />
            <meshStandardMaterial color="#4b5563" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function ParentSilhouettes() {
  return (
    <group>
      <mesh position={[-1.5, 0.5, -2]} rotation={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.4, 0.3, 1.2, 8]} />
        <meshStandardMaterial
          color="#1e293b"
          emissive="#1e293b"
          emissiveIntensity={0.1}
          roughness={1}
          transparent={true}
          opacity={0.7}
        />
      </mesh>

      <mesh position={[1.5, 0.5, -2]} rotation={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.4, 0.3, 1.2, 8]} />
        <meshStandardMaterial
          color="#1e293b"
          emissive="#1e293b"
          emissiveIntensity={0.1}
          roughness={1}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
    </group>
  )
}

function MoonBeam() {
  const beamRef = useRef<THREE.SpotLight>(null!)
  const volumeRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (volumeRef.current) {
      volumeRef.current.rotation.z = state.clock.elapsedTime * 0.06
    }
  })

  return (
    <group position={[2, 3, -2.8]}>
      <spotLight
        ref={beamRef}
        color="#9fc7ff"
        intensity={0.28}
        distance={6}
        angle={Math.PI / 8}
        penumbra={0.8}
        decay={2}
        position={[0, 0, 0]}
      />

      <mesh ref={volumeRef} position={[0, -1, -0.5]}>
        <cylinderGeometry args={[0.1, 0.8, 2, 8, 1, true]} />
        <meshBasicMaterial
          color="#9fc7ff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

/* -------------------- DustParticles (reduced + throttled) -------------------- */
function DustParticles({ isReducedMotion }: { isReducedMotion: boolean }) {
  const particlesRef = useRef<THREE.Points>(null!)
  const count = 100 // reduced from 150

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const phases = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 7
      positions[i3 + 1] = Math.random() * 3.5
      positions[i3 + 2] = (Math.random() - 0.5) * 5

      const isGolden = Math.random() > 0.8
      colors[i3] = isGolden ? 0.98 : 0.6 + Math.random() * 0.2
      colors[i3 + 1] = isGolden ? 0.75 : 0.5 + Math.random() * 0.2
      colors[i3 + 2] = isGolden ? 0.12 : 0.4 + Math.random() * 0.2

      sizes[i] = Math.random() * 0.05 + 0.02
      phases[i] = Math.random() * Math.PI * 2
    }

    return { positions, colors, sizes, phases }
  }, [count])

  const frameSkipRef = useRef(0)
  useFrame((state) => {
    // skip updates if reduced motion
    if (isReducedMotion) return

    frameSkipRef.current = (frameSkipRef.current + 1) % 2
    if (frameSkipRef.current !== 0) return

    if (particlesRef.current?.geometry) {
      const time = state.clock.elapsedTime
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array

      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const phase = particles.phases[i]
        positions[i3 + 1] += Math.sin(time + phase) * 0.0012
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

/* -------------------- Exported HeroScene (Canvas settings optimized) -------------------- */
export default function HeroScene({ isReducedMotion }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 2, 8], fov: 50 }}
      // Performance-oriented settings:
      dpr={[1, 1.5]} // avoid ultra-high DPR rendering
      gl={{ antialias: false, powerPreference: 'high-performance' }}
      shadows={false} // toggle off to reduce GPU unless you need shadows
      style={{ background: 'transparent' }}
    >
      <SceneManager isReducedMotion={isReducedMotion} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
        maxDistance={10}
        minDistance={3}
        enabled={false}
      />

      {/* Slightly reduced bloom and vignette to lower postprocess cost */}
      <EffectComposer>
        <Bloom
          intensity={0.9} /* reduced from 1.5 */
          luminanceThreshold={0.35}
          luminanceSmoothing={0.9}
          height={180} /* reduced from 300 */
        />
        <Vignette eskil={false} offset={0.12} darkness={0.6} />
      </EffectComposer>

      {/* Environment remains — cheap preset */}
      <Environment preset="park" />
    </Canvas>
  )
}
