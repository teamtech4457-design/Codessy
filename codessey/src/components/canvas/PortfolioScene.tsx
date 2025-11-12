'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useRef, useMemo, useEffect, useState, memo } from 'react'
import * as THREE from 'three'

interface PortfolioSceneProps {
  isReducedMotion: boolean
}

/* -------------------- 3D Glowing Sparkles Component -------------------- */
const ThreeDGlowingSparkles = memo(({ phase }: { phase: number }) => {
  const groupRef = useRef<THREE.Group>(null!)
  
  const sparkles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15 - 5
      ],
      scale: 0.3 + Math.random() * 0.5,
      speed: 0.3 + Math.random() * 0.5,
      rotationSpeed: 0.2 + Math.random() * 0.4,
      orbitRadius: 2 + Math.random() * 3,
      color: ['#ffd700', '#ffed4a', '#fff5cc', '#ffe4b5', '#ffa500'][Math.floor(Math.random() * 5)],
      shape: ['star', 'diamond', 'octahedron'][Math.floor(Math.random() * 3)]
    }))
  }, [])
  
  useFrame(({ clock }) => {
    if (typeof document !== 'undefined' && document.hidden) return
    if (!groupRef.current) return
    const time = clock.elapsedTime
    
    try {
      groupRef.current.children.forEach((child, i) => {
        const sparkle = sparkles[i]
        if (!sparkle) return
        
        const angle = time * sparkle.speed + i
        child.position.x = sparkle.position[0] + Math.cos(angle) * sparkle.orbitRadius
        child.position.y = sparkle.position[1] + Math.sin(time * sparkle.speed * 0.5 + i) * 2
        child.position.z = sparkle.position[2] + Math.sin(angle) * sparkle.orbitRadius
        
        child.rotation.x = time * sparkle.rotationSpeed
        child.rotation.y = time * sparkle.rotationSpeed * 1.5
        child.rotation.z = time * sparkle.rotationSpeed * 0.7
        
        const pulse = Math.sin(time * 2 + i) * 0.2 + 1
        child.scale.setScalar(sparkle.scale * pulse)
      })
    } catch (err) {
      // console.warn('ThreeDGlowingSparkles frame error', err)
    }
  })
  
  return (
    <group ref={groupRef}>
      {sparkles.map((sparkle, i) => (
        <mesh key={i} position={sparkle.position as [number, number, number]}>
          {sparkle.shape === 'star' && <octahedronGeometry args={[0.4, 0]} />}
          {sparkle.shape === 'diamond' && <tetrahedronGeometry args={[0.4, 0]} />}
          {sparkle.shape === 'octahedron' && <octahedronGeometry args={[0.3, 1]} />}
          <meshStandardMaterial
            color={sparkle.color}
            emissive={sparkle.color}
            emissiveIntensity={2}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  )
})

/* -------------------- Background Image Component -------------------- */
function BackgroundImage() {
  const { scene } = useThree()
  
  useEffect(() => {
    const loader = new THREE.TextureLoader()
    loader.load(
      '/krishna-defeatingdevil.png.jpg',
      (texture) => {
        texture.colorSpace = (THREE as any).SRGBColorSpace ? (THREE as any).SRGBColorSpace : (texture as any).colorSpace
        // Only set background if we're still in the background phase
        scene.background = texture
      },
      undefined,
      () => {
        // Fallback to black instead of blue during transitions
        scene.background = new THREE.Color(0x000000)
      }
    )

    // Cleanup function to clear background when component unmounts
    return () => {
      scene.background = null
    }
  }, [scene])

  return null
}

/* -------------------- Golden Boom Transition -------------------- */
function GoldenBoomTransition({ onComplete }: { onComplete: () => void }) {
  const lightRef = useRef<THREE.PointLight>(null!)
  const sphereRef = useRef<THREE.Mesh>(null!)
  const [intensity, setIntensity] = useState(0)
  const startTime = useRef<number | null>(null)

  useFrame(({ clock }) => {
    if (startTime.current === null) startTime.current = clock.elapsedTime
    const elapsed = clock.elapsedTime - startTime.current

    // Boom animation: quick expansion then fade
    if (elapsed < 0.5) {
      // Expand quickly
      const progress = elapsed / 0.5
      setIntensity(progress)
    } else if (elapsed < 1.5) {
      // Hold and fade
      const progress = (elapsed - 0.5) / 1.0
      setIntensity(1 - progress)
    } else {
      // Complete
      onComplete()
    }

    // Update light and sphere
    if (lightRef.current) {
      lightRef.current.intensity = intensity * 15
    }
    if (sphereRef.current) {
      sphereRef.current.scale.setScalar(intensity * 10)
      const mat = sphereRef.current.material as THREE.MeshBasicMaterial
      if (mat) mat.opacity = (1 - intensity) * 0.8
    }
  })

  return (
    <group>
      <pointLight ref={lightRef} color="#ffd700" intensity={0} distance={50} />
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#ffd700" transparent opacity={0.8} side={THREE.BackSide} />
      </mesh>
      <Sparkles count={150} scale={25} size={3} speed={0.2} color="#ffd700" opacity={intensity} />
    </group>
  )
}

/* -------------------- Scene Manager with 15-second Loop -------------------- */
function SceneManager({ isReducedMotion }: { isReducedMotion: boolean }) {
  const { scene } = useThree()
  const [currentPhase, setCurrentPhase] = useState(0)
  const [showBoom, setShowBoom] = useState(false)
  const [showBackground, setShowBackground] = useState(false)
  const [loopCount, setLoopCount] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const startTime = useRef(0)
  const sceneDuration = 14 // Scene duration
  const boomDuration = 1 // Boom transition duration
  const backgroundDuration = 15 // 15 seconds for background display
  const loopInterval = sceneDuration + boomDuration + backgroundDuration // Total loop time

  useFrame((state) => {
    if (typeof document !== 'undefined' && document.hidden) return
    
    if (!startTime.current) startTime.current = state.clock.elapsedTime
    
    const elapsed = state.clock.elapsedTime - startTime.current
    const currentLoopTime = elapsed % loopInterval
    
    // Calculate which phase we're in during the current loop
    if (currentLoopTime < sceneDuration) {
      // Scene phase
      if (currentPhase !== 0) {
        setCurrentPhase(0)
        // Clear background when starting new scenes
        scene.background = null
        setIsTransitioning(true)
      }
      setShowBackground(false)
      setShowBoom(false)
    } else if (currentLoopTime < sceneDuration + boomDuration) {
      // Boom transition phase
      if (!showBoom) {
        setShowBoom(true)
        setShowBackground(false)
        setCurrentPhase(1)
        // Clear background during boom transition
        scene.background = null
        setIsTransitioning(true)
      }
    } else {
      // Background phase (15 seconds)
      if (showBoom) {
        setShowBoom(false)
      }
      if (!showBackground) {
        setShowBackground(true)
        setIsTransitioning(false)
      }
    }
    
    // Track loop count (for internal logic only, not displayed)
    const newLoopCount = Math.floor(elapsed / loopInterval)
    if (newLoopCount !== loopCount) {
      setLoopCount(newLoopCount)
      // When loop restarts, ensure background is cleared
      scene.background = null
      setIsTransitioning(true)
    }
  })

  const handleBoomComplete = () => {
    setShowBoom(false)
    setShowBackground(true)
    setIsTransitioning(false)
  }

  // Clear background when component unmounts or when transitioning
  useEffect(() => {
    return () => {
      scene.background = null
    }
  }, [scene])

  // Set black background during transitions
  useEffect(() => {
    if (isTransitioning && !showBackground) {
      scene.background = new THREE.Color(0x000000)
    }
  }, [isTransitioning, showBackground, scene])

  return (
    <>
      {/* 3D Glowing Sparkles - Always visible */}
      <ThreeDGlowingSparkles phase={currentPhase} />
      
      {/* Golden Boom Transition */}
      {showBoom && <GoldenBoomTransition onComplete={handleBoomComplete} />}
      
      {/* Background image only appears after golden boom transition and only during background phase */}
      {showBackground && !isTransitioning && (
        <BackgroundImage />
      )}
      
      {/* Show scenes only when not in boom transition or background phase */}
      {!showBoom && !showBackground && (
        <>
          <YamunaRiver />
          <RiverBank />
          <KrishnaCharacter />
          <KaliyaNaag />
          <DivineAura />
          <WaterRipples />
          <LightRays />
          <EnergyWaves />
          <Villagers />
          <FlyingBirds />
          <DivineSparkles />
          <DivineEnergyParticles />
          <VictoryEnergyDrops />
        </>
      )}
      
      {/* Enhanced sparkles only appear with background and not during transitions */}
      {showBackground && !isTransitioning && (
        <EnhancedBackgroundSparkles />
      )}

      <CameraController 
        isReducedMotion={isReducedMotion} 
        phase={currentPhase}
        showBoom={showBoom}
        showBackground={showBackground && !isTransitioning}
      />
    </>
  )
}

/* -------------------- Enhanced Background Sparkles -------------------- */
function EnhancedBackgroundSparkles() {
  const sparklesRef = useRef<any>(null!)
  
  useFrame(({ clock }) => {
    if (sparklesRef.current) {
      const time = clock.elapsedTime
      sparklesRef.current.position.y = Math.sin(time * 0.1) * 0.5
      sparklesRef.current.rotation.y = time * 0.05
    }
  })

  return (
    <>
      <Sparkles
        ref={sparklesRef}
        count={80}
        scale={[30, 20, 30]}
        size={3}
        speed={0.6}
        color="#ffd700"
        opacity={1}
        position={[0, 0, 0]}
      />
      <Sparkles
        count={40}
        scale={[25, 15, 25]}
        size={1.5}
        speed={0.3}
        color="#ffffff"
        opacity={0.7}
        position={[0, 5, 0]}
      />
    </>
  )
}

/* -------------------- Divine Sparkles -------------------- */
function DivineSparkles() {
  return <Sparkles count={30} scale={10} size={1.5} speed={0.3} color="#ffd700" opacity={0.4} />
}

/* -------------------- Yamuna River -------------------- */
function YamunaRiver() {
  const waterRef = useRef<THREE.Mesh>(null!)
  const waterGeometry = useMemo(() => new THREE.PlaneGeometry(20, 8, 16, 16), [])

  useFrame(({ clock }) => {
    if (typeof document !== 'undefined' && document.hidden) return
    if (!waterRef.current) return
    try {
      const t = clock.elapsedTime
      const posAttr = (waterGeometry.attributes && (waterGeometry.attributes as any).position) || null
      const pos = posAttr?.array as Float32Array | undefined
      if (!pos) return
      for (let i = 0; i < pos.length; i += 3) {
        const x = pos[i]
        const z = pos[i + 2]
        pos[i + 1] = Math.sin(x * 0.2 + t) * 0.03 + Math.cos(z * 0.3 + t * 0.5) * 0.02
      }
      posAttr.needsUpdate = true
    } catch (err) {
      // console.warn('YamunaRiver frame error', err)
    }
  })

  return (
    <mesh ref={waterRef} geometry={waterGeometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <meshStandardMaterial color="#1e3a8a" transparent opacity={0.8} roughness={0.1} metalness={0.7} />
    </mesh>
  )
}

/* -------------------- River Bank -------------------- */
function RiverBank() {
  const stones = useMemo(
    () => Array.from({ length: 3 }).map(() => ({ x: -9 + Math.random() * 3, z: -3 + Math.random() * 6 })),
    []
  )

  return (
    <group>
      <mesh position={[-11, -0.5, 0]}>
        <boxGeometry args={[4, 1, 10]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      <mesh position={[11, -0.5, 0]}>
        <boxGeometry args={[4, 1, 10]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      {stones.map((s, i) => (
        <mesh key={i} position={[s.x, -0.2, s.z]}>
          <sphereGeometry args={[0.2, 6, 6]} />
          <meshStandardMaterial color="#696969" roughness={0.9} />
        </mesh>
      ))}
    </group>
  )
}

/* -------------------- Krishna Character -------------------- */
function KrishnaCharacter() {
  const krishnaRef = useRef<THREE.Group>(null!)
  useFrame(({ clock }) => {
    if (typeof document !== 'undefined' && document.hidden) return
    if (!krishnaRef.current) return
    try {
      const t = clock.elapsedTime
      krishnaRef.current.position.y = Math.sin(t * 1.5) * 0.05 + 1
      krishnaRef.current.rotation.y = t * 0.2
    } catch (err) {
      // console.warn('KrishnaCharacter frame error', err)
    }
  })

  return (
    <group ref={krishnaRef} position={[0, 1, 0]}>
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 1, 8]} />
        <meshStandardMaterial color="#f0c070" />
      </mesh>

      <mesh position={[0, 1.15, 0]}>
        <sphereGeometry args={[0.18, 8, 8]} />
        <meshStandardMaterial color="#f0c070" />
      </mesh>

      <mesh position={[0, 1.3, 0]}>
        <ringGeometry args={[0.3, 0.4, 16]} />
        <meshBasicMaterial color="#ffd700" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

/* -------------------- Kaliya Naag -------------------- */
function KaliyaNaag() {
  const naagRef = useRef<THREE.Group>(null!)
  useFrame(({ clock }) => {
    if (typeof document !== 'undefined' && document.hidden) return
    if (!naagRef.current) return
    try {
      naagRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.5) * 0.03
    } catch (err) {
      // console.warn('KaliyaNaag frame error', err)
    }
  })

  return (
    <group ref={naagRef} position={[0, -0.3, 0]}>
      <mesh>
        <cylinderGeometry args={[0.3, 0.4, 6, 8]} />
        <meshStandardMaterial color="#228B22" metalness={0.2} roughness={0.5} />
      </mesh>

      {[0, 1, 2].map((index) => (
        <group key={index} position={[Math.cos(index * 1.2) * 0.6, 3, Math.sin(index * 1.2) * 0.6]}>
          <mesh>
            <sphereGeometry args={[0.25, 6, 6]} />
            <meshStandardMaterial color="#32CD32" metalness={0.3} roughness={0.4} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

/* -------------------- Divine Aura -------------------- */
function DivineAura() {
  const auraRef = useRef<THREE.Mesh>(null!)
  useFrame(({ clock }) => {
    if (typeof document !== 'undefined' && document.hidden) return
    if (!auraRef.current) return
    try {
      auraRef.current.rotation.y = clock.elapsedTime * 0.08
    } catch (err) {
      // console.warn('DivineAura frame error', err)
    }
  })
  return (
    <mesh ref={auraRef} position={[0, 1, 0]}>
      <sphereGeometry args={[1.2, 8, 8]} />
      <meshBasicMaterial color="#ffd700" transparent opacity={0.04} side={THREE.BackSide} />
    </mesh>
  )
}

/* -------------------- Water Ripples -------------------- */
function WaterRipples() {
  const ripplesRef = useRef<THREE.Group>(null!)
  useFrame(({ clock }) => {
    if (typeof document !== 'undefined' && document.hidden) return
    if (!ripplesRef.current) return
    try {
      const time = clock.elapsedTime
      ripplesRef.current.children.forEach((ripple, index) => {
        if (ripple) {
          const rippleTime = time + index * 0.3
          const scale = 1 + Math.sin(rippleTime * 0.8) * 0.2
          ripple.scale.setScalar(scale)
        }
      })
    } catch (err) {
      // console.warn('WaterRipples frame error', err)
    }
  })

  return (
    <group ref={ripplesRef} position={[0, -0.9, 0]}>
      {Array.from({ length: 2 }).map((_, i) => (
        <group key={i} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh>
            <ringGeometry args={[0.4, 0.6, 12]} />
            <meshBasicMaterial color="#4f8ff7" transparent opacity={0.2} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

/* -------------------- Light Rays -------------------- */
function LightRays() {
  const raysRef = useRef<THREE.Group>(null!)
  useFrame(({ clock }) => {
    if (typeof document !== 'undefined' && document.hidden) return
    if (!raysRef.current) return
    try {
      raysRef.current.rotation.y = clock.elapsedTime * 0.03
    } catch (err) {
      // console.warn('LightRays frame error', err)
    }
  })

  return (
    <group ref={raysRef} position={[0, 1, 0]}>
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i / 4) * Math.PI * 2
        return (
          <mesh key={i} rotation={[0, angle, 0]} position={[0, 2, 0]}>
            <planeGeometry args={[0.2, 3]} />
            <meshBasicMaterial color="#ffd700" transparent opacity={0.15} side={THREE.DoubleSide} />
          </mesh>
        )
      })}
    </group>
  )
}

/* -------------------- Energy Waves -------------------- */
function EnergyWaves() {
  const wavesRef = useRef<THREE.Group>(null!)
  useFrame(({ clock }) => {
    if (typeof document !== 'undefined' && document.hidden) return
    if (!wavesRef.current) return
    try {
      const time = clock.elapsedTime
      wavesRef.current.children.forEach((wave, index) => {
        if (wave) {
          const scale = 1 + Math.sin(time * 0.2 + index) * 0.3
          wave.scale.setScalar(scale)
        }
      })
    } catch (err) {
      // console.warn('EnergyWaves frame error', err)
    }
  })

  return (
    <group ref={wavesRef} position={[0, 1, 0]}>
      {Array.from({ length: 1 }).map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.8, 8, 8]} />
          <meshBasicMaterial color="#ff6b6b" transparent opacity={0.06} side={THREE.BackSide} />
        </mesh>
      ))}
    </group>
  )
}

/* -------------------- Villagers -------------------- */
function Villagers() {
  return (
    <group>
      {Array.from({ length: 2 }).map((_, i) => (
        <mesh key={i} position={[-7 + i * 3, 0, -4]}>
          <cylinderGeometry args={[0.12, 0.12, 0.6, 6]} />
          <meshStandardMaterial color={`hsl(${30 + i * 40}, 60%, 50%)`} />
        </mesh>
      ))}
    </group>
  )
}

/* -------------------- Flying Birds -------------------- */
function FlyingBirds() {
  const birdsRef = useRef<THREE.Group>(null!)
  useFrame(({ clock }) => {
    if (typeof document !== 'undefined' && document.hidden) return
    if (!birdsRef.current) return
    try {
      const time = clock.elapsedTime
      birdsRef.current.children.forEach((bird, index) => {
        if (!bird) return
        bird.position.x = Math.sin(time * 0.2 + index) * 8
        bird.position.y = 5 + Math.sin(time * 0.8 + index) * 0.3
      })
    } catch (err) {
      // console.warn('FlyingBirds frame error', err)
    }
  })

  return (
    <group ref={birdsRef}>
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh key={i} position={[0, 5, -5]}>
          <coneGeometry args={[0.06, 0.15, 3]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      ))}
    </group>
  )
}

/* -------------------- Divine Energy Particles -------------------- */
function DivineEnergyParticles() {
  const particlesRef = useRef<THREE.Points>(null!)
  const particleCount = 20
  const frameSkip = useRef(0)

  const data = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 10
      positions[i3 + 1] = Math.random() * 5
      positions[i3 + 2] = (Math.random() - 0.5) * 8
      colors[i3] = 1.0
      colors[i3 + 1] = 0.9
      colors[i3 + 2] = 0.3
    }
    return { positions, colors }
  }, [])

  useFrame(() => {
    if (typeof document !== 'undefined' && document.hidden) return
    frameSkip.current = (frameSkip.current + 1) % 4
    if (frameSkip.current !== 0) return

    const points = particlesRef.current
    if (!points?.geometry) return

    try {
      const pos = points.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        pos[i3 + 1] += 0.01
        if (pos[i3 + 1] > 5) {
          pos[i3 + 1] = 0
          pos[i3] = (Math.random() - 0.5) * 10
          pos[i3 + 2] = (Math.random() - 0.5) * 8
        }
      }
      points.geometry.attributes.position.needsUpdate = true
    } catch (err) {
      // console.warn('DivineEnergyParticles frame error', err)
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={data.positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={data.colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

/* -------------------- Victory Energy Drops -------------------- */
function VictoryEnergyDrops() {
  const dropsRef = useRef<THREE.Points>(null!)
  const dropCount = 15
  const frameSkip = useRef(0)

  const data = useMemo(() => {
    const positions = new Float32Array(dropCount * 3)
    const colors = new Float32Array(dropCount * 3)
    for (let i = 0; i < dropCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 8
      positions[i3 + 1] = Math.random() * 4 + 3
      positions[i3 + 2] = (Math.random() - 0.5) * 6
      colors[i3] = 1.0
      colors[i3 + 1] = 0.95
      colors[i3 + 2] = 0.8
    }
    return { positions, colors }
  }, [])

  useFrame(() => {
    if (typeof document !== 'undefined' && document.hidden) return
    frameSkip.current = (frameSkip.current + 1) % 4
    if (frameSkip.current !== 0) return

    const points = dropsRef.current
    if (!points?.geometry) return

    try {
      const pos = points.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < dropCount; i++) {
        const i3 = i * 3
        pos[i3 + 1] -= 0.02
        if (pos[i3 + 1] < -1) {
          pos[i3 + 1] = Math.random() * 3 + 4
          pos[i3] = (Math.random() - 0.5) * 8
        }
      }
      points.geometry.attributes.position.needsUpdate = true
    } catch (err) {
      // console.warn('VictoryEnergyDrops frame error', err)
    }
  })

  return (
    <points ref={dropsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={dropCount} array={data.positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={dropCount} array={data.colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

/* -------------------- Camera Controller -------------------- */
function CameraController({ 
  isReducedMotion, 
  phase, 
  showBoom, 
  showBackground 
}: { 
  isReducedMotion: boolean; 
  phase: number;
  showBoom: boolean;
  showBackground: boolean;
}) {
  const { camera } = useThree()
  const start = useRef<number | null>(null)

  useFrame(({ clock }) => {
    if (typeof document !== 'undefined' && document.hidden) return
    if (!start.current) start.current = clock.elapsedTime
    if (!camera) return

    try {
      const elapsed = clock.elapsedTime - start.current
      if (isReducedMotion) {
        camera.position.set(0, 2, 8)
        camera.lookAt(0, 1, 0)
        return
      }

      let target
      
      if (showBoom) {
        // During boom transition, pull back camera for dramatic effect
        target = new THREE.Vector3(0, 5, 20)
      } else if (showBackground) {
        // Final position with background
        target = new THREE.Vector3(0, 2, 8)
      } else {
        // Normal scene transitions
        if (elapsed < 5) {
          target = new THREE.Vector3(Math.sin(elapsed * 0.1) * 2, 4, 10)
        } else if (elapsed < 10) {
          target = new THREE.Vector3(3, 3, 7)
        } else {
          target = new THREE.Vector3(0, 3, 6)
        }
      }
      
      camera.position.lerp(target, 0.05)
      camera.lookAt(0, 1, 0)
    } catch (err) {
      // console.warn('CameraController frame error', err)
    }
  })

  return null
}

/* -------------------- Portfolio Scene -------------------- */
export default function PortfolioScene({ isReducedMotion }: PortfolioSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 4, 10], fov: 50 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        depth: true,
        stencil: false,
      }}
      dpr={[1, 1.5]}
      frameloop="always"
      style={{ background: 'transparent' }}
      onCreated={({ gl }) => {
        try {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.setClearColor('#0a0a2a')
          gl.shadowMap.enabled = false
        } catch (err) {
          // console.warn('onCreated error', err)
        }
      }}
    >
      <color attach="background" args={['#0a0a2a']} />
      <SceneManager isReducedMotion={isReducedMotion} />
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffd700" />
      <Environment preset="night" />
      <EffectComposer multisampling={0}>
        <Bloom intensity={0.6} luminanceThreshold={0.4} luminanceSmoothing={0.9} />
        <Vignette eskil={false} offset={0.1} darkness={0.2} />
      </EffectComposer>
    </Canvas>
  )
}