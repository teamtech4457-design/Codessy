'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Sparkles, useTexture } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useRef, useMemo, useEffect, useState, memo } from 'react'
import * as THREE from 'three'

interface MeadowSceneProps { isReducedMotion: boolean }

/* -------------------- GLOBAL PERFORMANCE TUNING -------------------- */
// How many render frames to skip between heavy update runs.
// Increase this to reduce CPU/GPU usage further (animations remain similar but less smooth).
const FRAME_SKIP = 2

/* -------------------- 3D Glowing Sparkles Component -------------------- */
const ThreeDGlowingSparkles = memo(({ phase }: { phase: number }) => {
  const groupRef = useRef<THREE.Group>(null!)
  const frameRef = useRef(0)

  // Create multiple sparkle objects with different properties
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
    // Throttle heavy per-child updates to every FRAME_SKIP frames
    frameRef.current = (frameRef.current + 1) % FRAME_SKIP
    if (frameRef.current !== 0) return

    if (!groupRef.current) return
    const time = clock.elapsedTime

    groupRef.current.children.forEach((child, i) => {
      const sparkle = sparkles[i]
      if (!sparkle) return

      // Circular orbital movement
      const angle = time * sparkle.speed + i
      child.position.x = sparkle.position[0] + Math.cos(angle) * sparkle.orbitRadius
      child.position.y = sparkle.position[1] + Math.sin(time * sparkle.speed * 0.5 + i) * 2
      child.position.z = sparkle.position[2] + Math.sin(angle) * sparkle.orbitRadius

      // Rotation for sparkle effect
      child.rotation.x = time * sparkle.rotationSpeed
      child.rotation.y = time * sparkle.rotationSpeed * 1.5
      child.rotation.z = time * sparkle.rotationSpeed * 0.7

      // Pulsing scale effect
      const pulse = Math.sin(time * 2 + i) * 0.2 + 1
      child.scale.setScalar(sparkle.scale * pulse)
    })
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
      '/krishna-playing.jpg.png',
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace
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
const SceneManager = memo(({ isReducedMotion }: { isReducedMotion: boolean }) => {
  const { scene } = useThree()
  const [currentPhase, setCurrentPhase] = useState(0)
  const [showBoom, setShowBoom] = useState(false)
  const [showBackground, setShowBackground] = useState(false)
  const [loopCount, setLoopCount] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const startTime = useRef(0)
  const sceneDuration = 12 // Scene duration
  const boomDuration = 2 // Boom transition duration
  const backgroundDuration = 15 // 15 seconds for background display
  const loopInterval = sceneDuration + boomDuration + backgroundDuration // Total loop time

  useFrame((state) => {
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
        <TransitionScene isReducedMotion={isReducedMotion} />
      )}
      
      {/* Enhanced sparkles only appear with background and not during transitions */}
      {showBackground && !isTransitioning && (
        <EnhancedBackgroundSparkles />
      )}

      <CameraController 
        phase={currentPhase} 
        isReducedMotion={isReducedMotion}
        showBoom={showBoom}
        showBackground={showBackground && !isTransitioning}
      />
    </>
  )
})

/* -------------------- Enhanced Background Sparkles -------------------- */
const EnhancedBackgroundSparkles = memo(() => {
  const sparklesRef = useRef<any>(null!)
  const frameRef = useRef(0)

  useFrame(({ clock }) => {
    frameRef.current = (frameRef.current + 1) % FRAME_SKIP
    if (frameRef.current !== 0) return

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
})

/* -------------------- Enhanced Moving Sparkles Component -------------------- */
const MovingSparkles = memo(({
  phase,
  count,
  scale,
  size,
  speed,
  color,
  opacity,
  position,
  movementType = "circular",
  speedMultiplier = 1
}: any) => {
  const sparklesRef = useRef<any>(null!)
  const frameRef = useRef(0)

  useFrame(({ clock }) => {
    frameRef.current = (frameRef.current + 1) % FRAME_SKIP
    if (frameRef.current !== 0) return

    if (!sparklesRef.current) return

    const time = clock.elapsedTime * speedMultiplier

    switch (movementType) {
      case "circular":
        sparklesRef.current.position.x = Math.sin(time * 0.4) * 4
        sparklesRef.current.position.z = Math.cos(time * 0.4) * 4
        sparklesRef.current.rotation.y = time * 0.2
        break

      case "vertical":
        sparklesRef.current.position.y = Math.sin(time * 0.25) * 3
        sparklesRef.current.rotation.x = time * 0.15
        break

      case "diagonal":
        sparklesRef.current.position.x = Math.sin(time * 0.3) * 3
        sparklesRef.current.position.y = Math.cos(time * 0.3) * 2
        sparklesRef.current.position.z = Math.sin(time * 0.25) * 3
        break

      case "wave":
        sparklesRef.current.position.x = Math.sin(time * 0.5) * 3
        sparklesRef.current.position.y = Math.sin(time * 0.4) * 2
        sparklesRef.current.rotation.z = time * 0.18
        break

      case "spiral":
        sparklesRef.current.position.x = Math.sin(time * 0.6) * 2
        sparklesRef.current.position.y = time % 4 - 2
        sparklesRef.current.position.z = Math.cos(time * 0.6) * 2
        sparklesRef.current.rotation.y = time * 0.3
        break

      default:
        sparklesRef.current.position.y = Math.sin(time * 0.2) * 2
        break
    }
  })

  return (
    <Sparkles
      ref={sparklesRef}
      count={count}
      scale={scale}
      size={size}
      speed={speed}
      color={color}
      opacity={opacity}
      position={position}
    />
  )
})

/* -------------------- Enhanced Transition Sparkles -------------------- */
const TransitionSparkles = ({ isReducedMotion }: any) => {
  const transitionSparklesRef = useRef<any>(null!)
  const giantTransitionSparklesRef = useRef<any>(null!)
  const frameRef = useRef(0)

  useFrame(({ clock }) => {
    frameRef.current = (frameRef.current + 1) % FRAME_SKIP
    if (frameRef.current !== 0) return

    const time = clock.elapsedTime

    if (transitionSparklesRef.current) {
      transitionSparklesRef.current.position.y = Math.sin(time * 0.4) * 1.5
      transitionSparklesRef.current.rotation.y = time * 0.25
    }

    if (giantTransitionSparklesRef.current) {
      giantTransitionSparklesRef.current.position.x = Math.cos(time * 0.2) * 3
      giantTransitionSparklesRef.current.position.z = Math.sin(time * 0.2) * 3
    }
  })

  return (
    <>
      <Sparkles
        ref={transitionSparklesRef}
        count={isReducedMotion ? 25 : 50}
        scale={15}
        size={2.0}
        speed={0.4}
        color="#fef3c7"
      />

      <Sparkles
        ref={giantTransitionSparklesRef}
        count={isReducedMotion ? 8 : 15}
        scale={20}
        size={8}
        speed={0.3}
        color="#ffd700"
        opacity={0.9}
        position={[0, 4, 0]}
      />

      <MovingSparkles
        phase={1}
        count={isReducedMotion ? 20 : 35}
        scale={12}
        size={1.5}
        speed={0.6}
        color="#ffd700"
        opacity={0.6}
        position={[0, 2, 0]}
        movementType="circular"
        speedMultiplier={1.5}
      />
    </>
  )
}

/* -------------------- Transition Scene -------------------- */
const TransitionScene = memo(({ isReducedMotion }: { isReducedMotion: boolean }) => (
  <>
    <ThreeDEnvironment />
    <ButterDrops isAnimating />
    <MusicDrops isAnimating />
    <FloatingFlowers />
    <RotatingLotus />
    <DivineOrbs />
    <FlyingBirds />
    <SkySparkles />
    <TransitionSparkles isReducedMotion={isReducedMotion} />
  </>
))

/* -------------------- Enhanced Sky Sparkles -------------------- */
const SkySparkles = memo(() => {
  const skySparklesRef = useRef<any>(null!)
  const giantSkySparklesRef = useRef<any>(null!)
  const frameRef = useRef(0)

  useFrame(({ clock }) => {
    frameRef.current = (frameRef.current + 1) % FRAME_SKIP
    if (frameRef.current !== 0) return

    const time = clock.elapsedTime

    if (skySparklesRef.current) {
      skySparklesRef.current.position.y = 6 + Math.sin(time * 0.15) * 1
      skySparklesRef.current.rotation.y = time * 0.1
    }

    if (giantSkySparklesRef.current) {
      giantSkySparklesRef.current.position.x = Math.sin(time * 0.08) * 4
      giantSkySparklesRef.current.position.z = Math.cos(time * 0.08) * 4
    }
  })

  return (
    <>
      <Sparkles
        ref={skySparklesRef}
        count={50}
        scale={[22, 10, 22]}
        size={2.0}
        speed={0.3}
        position={[0, 6, 0]}
        color="#fffae0"
        opacity={0.7}
      />

      <Sparkles
        ref={giantSkySparklesRef}
        count={12}
        scale={[25, 12, 25]}
        size={7}
        speed={0.2}
        color="#ffd700"
        opacity={0.8}
        position={[0, 8, 0]}
      />

      <MovingSparkles
        phase={1}
        count={30}
        scale={[20, 8, 20]}
        size={1.5}
        speed={0.5}
        color="#ffd700"
        opacity={0.5}
        position={[0, 8, 0]}
        movementType="vertical"
      />
    </>
  )
})

/* -------------------- 3D Environment -------------------- */
const ThreeDEnvironment = memo(() => {
  const ref = useRef<THREE.Group>(null!)
  const frameRef = useRef(0)

  useFrame(({ clock }) => {
    // throttle a bit
    frameRef.current = (frameRef.current + 1) % FRAME_SKIP
    if (frameRef.current !== 0) return

    if (!ref.current) return
    const t = clock.elapsedTime
    ref.current.rotation.y = Math.sin(t * 0.05) * 0.2
    ref.current.position.y = Math.sin(t * 0.1) * 0.1
  })
  return (
    <group ref={ref}>
      <Terrain />
      <FloatingTemples3D />
      <ForestEnvironment />
      <DivineLights3D />
      <FlowingStream />
    </group>
  )
})

/* -------------------- Terrain -------------------- */
const Terrain = memo(() => {
  const ref = useRef<THREE.Mesh>(null!)
  const geom = useMemo(() => {
    const g = new THREE.PlaneGeometry(25, 25, 16, 16)
    const pos = g.attributes.position.array as Float32Array
    for (let i = 0; i < pos.length; i += 3) {
      const x = pos[i], z = pos[i + 2]
      pos[i + 1] =
        Math.sin(x * 0.2) * Math.cos(z * 0.2) * 0.6 +
        Math.sin(x * 0.5 + z * 0.3) * 0.2
    }
    g.computeVertexNormals()
    return g
  }, [])
  const frameRef = useRef(0)
  useFrame(({ clock }) => {
    // throttle vertex updates to be less frequent for performance
    frameRef.current = (frameRef.current + 1) % FRAME_SKIP
    if (frameRef.current !== 0) return

    if (!ref.current) return
    const t = clock.elapsedTime,
      p = geom.attributes.position.array as Float32Array
    for (let i = 0; i < p.length; i += 3)
      p[i + 1] += Math.sin(t * 0.3 + p[i] * 0.1 + p[i + 2] * 0.1) * 0.003
    geom.attributes.position.needsUpdate = true
  })
  return (
    <mesh ref={ref} geometry={geom} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <meshStandardMaterial color="#2d5016" roughness={0.8} metalness={0.1} />
    </mesh>
  )
})

/* -------------------- Forest (optimized for mobile) -------------------- */
const ForestEnvironment = memo(() => {
  // small memoized geometry/material to avoid repeated allocations
  const trunkGeom = useMemo(() => new THREE.CylinderGeometry(0.15, 0.2, 1.5, 6), [])
  const foliageGeom = useMemo(() => new THREE.SphereGeometry(0.8, 6, 5), [])
  const trunkMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#8B4513' }), [])
  const foliageMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#228B22' }), [])

  return (
    <group>
      {Array.from({ length: 5 }).map((_, i) => (
        <group key={i} position={[Math.cos(i) * 6, 0, Math.sin(i) * 6]}>
          <mesh position={[0, 1, 0]} geometry={trunkGeom} material={trunkMat} />
          <mesh position={[0, 2, 0]} geometry={foliageGeom} material={foliageMat} />
        </group>
      ))}
    </group>
  )
})

/* -------------------- Flying Birds (mobile optimized) -------------------- */
const FlyingBirds = memo(() => {
  const ref = useRef<THREE.Group>(null!)
  const birds = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, i) => ({
        angle: (i / 4) * Math.PI * 2,
        height: 4 + Math.random() * 2,
        speed: 0.2 + Math.random() * 0.15,
        radius: 6 + Math.random() * 1,
      })),
    []
  )
  const frameRef = useRef(0)

  useFrame(({ clock }) => {
    frameRef.current = (frameRef.current + 1) % FRAME_SKIP
    if (frameRef.current !== 0) return

    if (!ref.current || !ref.current.children.length) return
    const t = clock.elapsedTime
    ref.current.children.forEach((bird, i) => {
      const d = birds[i]
      if (!d) return
      const { radius, speed, angle, height } = d
      bird.position.x = Math.cos(t * speed + angle) * radius
      bird.position.z = Math.sin(t * speed + angle) * radius
      bird.position.y = height + Math.sin(t * 1.5 + i) * 0.2
    })
  })

  // reuse a simple cone geometry and material for all birds
  const coneGeom = useMemo(() => new THREE.ConeGeometry(0.08, 0.2, 6), [])
  const birdMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#ffffff' }), [])

  return (
    <group ref={ref}>
      {birds.map((_, i) => (
        <mesh key={i} geometry={coneGeom} material={birdMat} />
      ))}
    </group>
  )
})

/* -------------------- Floating Temples (mobile optimized) -------------------- */
const FloatingTemples3D = memo(() => {
  const ref = useRef<THREE.Group>(null!)
  const temples = useMemo(() => Array.from({ length: 4 }).map((_, i) => {
    const a = (i / 4) * Math.PI * 2, r = 8 + Math.random() * 3
    return { pos: [Math.cos(a) * r, 1.5 + Math.random() * 2, Math.sin(a) * r], s: 0.3 + Math.random() * 0.2 }
  }), [])
  const frameRef = useRef(0)

  useFrame(({ clock }) => {
    frameRef.current = (frameRef.current + 1) % FRAME_SKIP
    if (frameRef.current !== 0) return

    if (!ref.current) return
    const t = clock.elapsedTime
    ref.current.children.forEach((temple, i) => {
      const d = temples[i]; if (!d) return
      temple.position.y = d.pos[1] + Math.sin(t * 0.2 + i) * 0.3
    })
  })

  // memoized small geometries/materials for temple parts
  const baseGeom = useMemo(() => new THREE.BoxGeometry(1, 0.2, 1), [])
  const midGeom = useMemo(() => new THREE.BoxGeometry(0.8, 1, 0.8), [])
  const topGeom = useMemo(() => new THREE.ConeGeometry(0.6, 0.8, 6), [])
  const brownMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#8B4513' }), [])
  const goldMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#d4af37' }), [])
  const topMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#b8860b' }), [])

  return (
    <group ref={ref}>
      {temples.map((t, i) => (
        <group key={i} position={t.pos as [number, number, number]} scale={t.s}>
          <mesh geometry={baseGeom} material={brownMat} />
          <mesh position={[0, 0.6, 0]} geometry={midGeom} material={goldMat} />
          <mesh position={[0, 1.4, 0]} geometry={topGeom} material={topMat} />
        </group>
      ))}
    </group>
  )
})

/* -------------------- Lights, Stream, Camera -------------------- */
const DivineLights3D = memo(() => (
  <group>
    <pointLight color="#ffd87a" intensity={2} distance={15} position={[6, 6, 6]} />
    <pointLight color="#9fc7ff" intensity={1.5} distance={12} position={[-6, 4, -6]} />
  </group>
))

const FlowingStream = memo(() => {
  const ref = useRef<THREE.Mesh>(null!)
  const geom = useMemo(() => new THREE.PlaneGeometry(6, 15, 12, 12), [])
  const frameRef = useRef(0)

  useFrame(({ clock }) => {
    // throttle vertex updates to reduce cost
    frameRef.current = (frameRef.current + 1) % FRAME_SKIP
    if (frameRef.current !== 0) return

    if (!ref.current) return
    const t = clock.elapsedTime, p = geom.attributes.position.array as Float32Array
    for (let i = 0; i < p.length; i += 3) p[i + 1] = Math.sin(p[i] * 0.5 + t * 1.5) * 0.08
    geom.attributes.position.needsUpdate = true
  })
  return (
    <mesh ref={ref} geometry={geom} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.8, 0]}>
      <meshStandardMaterial color="#1e90ff" transparent opacity={0.6} roughness={0.1} metalness={0.8} />
    </mesh>
  )
})

const CameraController = ({ isReducedMotion, phase, showBoom, showBackground }: any) => {
  const { camera } = useThree()
  const start = useRef(0)
  useFrame(({ clock }) => {
    if (!camera) return
    if (!start.current) start.current = clock.elapsedTime
    const t = clock.elapsedTime - start.current
    
    let target
    
    if (showBoom) {
      // During boom transition, pull back camera for dramatic effect
      target = new THREE.Vector3(0, 5, 20)
    } else if (showBackground) {
      // Final position with background
      target = new THREE.Vector3(0, 6, 12)
    } else {
      // Normal scene transitions
      target =
        t < 4
          ? new THREE.Vector3(0, 8, 15)
          : t < 8
          ? new THREE.Vector3(0, 5, 10)
          : new THREE.Vector3(0, 3, 6)
    }
    
    camera.position.lerp(target, 0.05)
    camera.lookAt(0, 0, 0)
  })
  return null
}

/* -------------------- Canvas -------------------- */
export default function MeadowScene({ isReducedMotion }: MeadowSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 8, 15], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{
        antialias: false,
        powerPreference: 'high-performance',
        alpha: true
      }}
      dpr={[1, 1]}
    >
      <SceneManager isReducedMotion={isReducedMotion} />
      <Environment preset="sunset" />
      <EffectComposer multisampling={0}>
        <Bloom intensity={0.5} luminanceThreshold={0.5} />
        <Vignette eskil={false} offset={0.1} darkness={0.3} />
      </EffectComposer>
    </Canvas>
  )
}

/* -------------------- Reusable Particles (mobile optimized) -------------------- */
function ButterDrops({ isAnimating }: any) {
  return useAnimatedSphere(isAnimating, [1.5, 0.8, 1], '#fef3c7', 0.12)
}

function MusicDrops({ isAnimating }: any) {
  return useCircularSpheres(isAnimating, 4, 1.5, '#fbbf24')
}

const FloatingFlowers = memo(() => useFloatingMeshes(6, 'hsl(50, 70%, 60%)'))
const RotatingLotus = memo(() => useFloatingMeshes(4, '#ff6b6b', 3))
const DivineOrbs = memo(() => useFloatingMeshes(3, '#ffd700', 2))

/* -------------------- Utility Hooks (mobile optimized) -------------------- */
const useAnimatedSphere = (animate: boolean, pos: any, color: string, size: number) => {
  const ref = useRef<THREE.Group>(null!)
  const frameRef = useRef(0)
  useFrame(({ clock }) => {
    frameRef.current = (frameRef.current + 1) % FRAME_SKIP
    if (frameRef.current !== 0) return
    if (animate && ref.current) ref.current.position.y = Math.sin(clock.elapsedTime * 1.2) * 0.15 + 0.8
  })
  // reuse sphere geometry and material to avoid reallocation
  const sphereGeom = useMemo(() => new THREE.SphereGeometry(size, 12, 12), [size])
  const mat = useMemo(() => new THREE.MeshStandardMaterial({ color }), [color])
  return (
    <group ref={ref} position={pos}>
      <mesh geometry={sphereGeom} material={mat} />
    </group>
  )
}

const useCircularSpheres = (animate: boolean, count: number, r: number, color: string) => {
  const ref = useRef<THREE.Group>(null!)
  const frameRef = useRef(0)
  useFrame(({ clock }) => {
    frameRef.current = (frameRef.current + 1) % FRAME_SKIP
    if (frameRef.current !== 0) return
    if (!ref.current || !animate) return
    const t = clock.elapsedTime
    ref.current.children.forEach((d, i) => {
      const a = (i / count) * Math.PI * 2
      d.position.set(Math.cos(a) * r, Math.sin(t + i) * 0.2 + 0.8, Math.sin(a) * r)
    })
  })
  const geom = useMemo(() => new THREE.SphereGeometry(0.06, 8, 8), [])
  const mat = useMemo(() => new THREE.MeshStandardMaterial({ color }), [color])
  return (
    <group ref={ref}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} geometry={geom} material={mat} />
      ))}
    </group>
  )
}

const useFloatingMeshes = (count: number, color: string, radius = 0) => {
  const ref = useRef<THREE.Group>(null!)
  const frameRef = useRef(0)
  useFrame(({ clock }) => {
    frameRef.current = (frameRef.current + 1) % FRAME_SKIP
    if (frameRef.current !== 0) return
    if (!ref.current) return
    const t = clock.elapsedTime
    ref.current.children.forEach((m, i) => {
      m.position.y = 0.8 + Math.sin(t * 0.6 + i) * 0.2
    })
  })
  const sphereGeom = useMemo(() => new THREE.SphereGeometry(0.2, 6, 6), [])
  const mat = useMemo(() => new THREE.MeshStandardMaterial({ color }), [color])
  return (
    <group ref={ref}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} position={radius ? [Math.cos(i) * radius, 0.8, Math.sin(i) * radius] : [(i - count / 2) * 1.5, 0.8, 0]}>
          <primitive object={sphereGeom} />
          {/* using primitive to keep mesh geometry stable while preserving your visuals */}
          <meshStandardMaterial color={color} />
        </mesh>
      ))}
    </group>
  )
}