'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, useTexture, Sparkles, Text } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useRef, useMemo, useEffect, useState, memo } from 'react'
import * as THREE from 'three'

interface AboutSceneProps {
  isReducedMotion: boolean
}

/* -------------------- Constants and Reusable Objects -------------------- */
const SPARKLE_COLORS = ['#ffd700', '#ffed4a', '#fff5cc', '#ffe4b5', '#ffa500']
const SPARKLE_SHAPES = ['star', 'diamond', 'octahedron']

// Reusable geometry objects
const geometries = {
  octahedronSmall: new THREE.OctahedronGeometry(0.2, 0),
  octahedronMedium: new THREE.OctahedronGeometry(0.15, 1),
  tetrahedron: new THREE.TetrahedronGeometry(0.2, 0),
  cylinderSmall: new THREE.CylinderGeometry(0.2, 0.2, 0.8, 8),
  cylinderMedium: new THREE.CylinderGeometry(0.25, 0.25, 1, 8),
  cylinderLarge: new THREE.CylinderGeometry(0.2, 0.2, 3, 8),
  sphereSmall: new THREE.SphereGeometry(0.2, 12, 12),
  sphereMedium: new THREE.SphereGeometry(0.25, 12, 12),
  sphereLarge: new THREE.SphereGeometry(1.5, 16, 16),
  sphereXLarge: new THREE.SphereGeometry(10, 16, 16),
  plane: new THREE.PlaneGeometry(0.08, 2),
  planeLarge: new THREE.PlaneGeometry(30, 30),
  boxSmall: new THREE.BoxGeometry(2, 1, 3),
  boxMedium: new THREE.BoxGeometry(6, 4, 3),
  boxLarge: new THREE.BoxGeometry(2.5, 0.3, 0.8),
  coneSmall: new THREE.ConeGeometry(1.5, 1.5, 6),
  coneMedium: new THREE.ConeGeometry(4, 2.5, 8),
  ring: new THREE.RingGeometry(0.3, 0.32, 16),
  flag: new THREE.PlaneGeometry(0.25, 0.8)
} as const

// Reusable vector objects
const tempVector = new THREE.Vector3()

/* -------------------- Frame Skipping Hook -------------------- */
const useFrameSkip = (skipCount: number = 4) => {
  const frameCount = useRef(0)
  return useFrame((state) => {
    frameCount.current = (frameCount.current + 1) % skipCount
    return frameCount.current === 0
  })
}

/* -------------------- 3D Glowing Sparkles Component (Smaller Size) -------------------- */
const ThreeDGlowingSparkles = memo(({ phase }: { phase: number }) => {
  const groupRef = useRef<THREE.Group>(null!)
  
  const sparkles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12 - 3
      ] as [number, number, number],
      scale: 0.15 + Math.random() * 0.25,
      speed: 0.3 + Math.random() * 0.4,
      rotationSpeed: 0.15 + Math.random() * 0.3,
      orbitRadius: 1.5 + Math.random() * 2,
      color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
      shape: SPARKLE_SHAPES[Math.floor(Math.random() * SPARKLE_SHAPES.length)]
    }))
  }, [])
  
  useFrame(({ clock }) => {
    if (typeof document !== 'undefined' && document.hidden) return
    const group = groupRef.current
    if (!group) return
    
    const time = clock.elapsedTime
    
    try {
      const children = group.children
      for (let i = 0; i < children.length; i++) {
        const child = children[i]
        const sparkle = sparkles[i]
        if (!child || !sparkle) continue
        
        const angle = time * sparkle.speed + i
        child.position.x = sparkle.position[0] + Math.cos(angle) * sparkle.orbitRadius
        child.position.y = sparkle.position[1] + Math.sin(time * sparkle.speed * 0.5 + i) * 1.5
        child.position.z = sparkle.position[2] + Math.sin(angle) * sparkle.orbitRadius
        
        child.rotation.x = time * sparkle.rotationSpeed
        child.rotation.y = time * sparkle.rotationSpeed * 1.5
        child.rotation.z = time * sparkle.rotationSpeed * 0.7
        
        const pulse = Math.sin(time * 2 + i) * 0.15 + 1
        child.scale.setScalar(sparkle.scale * pulse)
      }
    } catch (err) {
      // console.warn('ThreeDGlowingSparkles frame error', err)
    }
  })
  
  return (
    <group ref={groupRef}>
      {sparkles.map((sparkle, i) => (
        <mesh key={i} position={sparkle.position}>
          {sparkle.shape === 'star' && <primitive object={geometries.octahedronSmall} />}
          {sparkle.shape === 'diamond' && <primitive object={geometries.tetrahedron} />}
          {sparkle.shape === 'octahedron' && <primitive object={geometries.octahedronMedium} />}
          <meshStandardMaterial
            color={sparkle.color}
            emissive={sparkle.color}
            emissiveIntensity={1.8}
            metalness={0.7}
            roughness={0.3}
            transparent
            opacity={0.85}
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
      '/krishna-mahabharat.png.png', 
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace
        // Only set background if we're still in the background phase
        scene.background = texture
      },
      undefined, 
      (error) => {
        console.error('Error loading background image:', error)
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
  const [currentScene, setCurrentScene] = useState(0)
  const [showBoom, setShowBoom] = useState(false)
  const [showBackground, setShowBackground] = useState(false)
  const [loopCount, setLoopCount] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const startTime = useRef(0)
  const sceneDuration = 3.5
  const backgroundDuration = 15 // 15 seconds for background display
  const loopInterval = sceneDuration * 3 + 2 + backgroundDuration // Total loop time

  useFrame((state) => {
    if (typeof document !== 'undefined' && document.hidden) return
    
    if (!startTime.current) startTime.current = state.clock.elapsedTime
    
    const elapsed = state.clock.elapsedTime - startTime.current
    const currentLoopTime = elapsed % loopInterval
    
    // Calculate which phase we're in during the current loop
    if (currentLoopTime < sceneDuration * 3) {
      // Scene phase (scenes 0, 1, 2)
      const sceneIndex = Math.floor(currentLoopTime / sceneDuration)
      if (sceneIndex !== currentScene && sceneIndex < 3) {
        setCurrentScene(sceneIndex)
        
        // Clear background when starting new scenes
        if (sceneIndex === 0) {
          scene.background = null
          setIsTransitioning(true)
        }
      }
      setShowBackground(false)
    } else if (currentLoopTime < sceneDuration * 3 + 2) {
      // Boom transition phase (2 seconds)
      if (!showBoom) {
        setShowBoom(true)
        setShowBackground(false)
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
      <ThreeDGlowingSparkles phase={currentScene} />
      
      {/* Golden Boom Transition */}
      {showBoom && <GoldenBoomTransition onComplete={handleBoomComplete} />}
      
      {/* Background image only appears after golden boom transition and only during background phase */}
      {showBackground && !isTransitioning && (
        <BackgroundImage />
      )}
      
      {/* Show scenes only when not in boom transition or background phase */}
      {!showBoom && !showBackground && (
        <>
          {currentScene === 0 && (
            <DwarkaScene isReducedMotion={isReducedMotion} />
          )}
          
          {currentScene === 1 && (
            <BattlefieldScene isReducedMotion={isReducedMotion} />
          )}
          
          {currentScene === 2 && (
            <BhagavadGitaScene isReducedMotion={isReducedMotion} />
          )}
        </>
      )}
      
      {/* Enhanced sparkles only appear with background and not during transitions */}
      {showBackground && !isTransitioning && (
        <EnhancedBackgroundSparkles />
      )}

      <CameraController 
        scene={currentScene} 
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

/* -------------------- Scene 1: Dwarka - The King (FIXED) -------------------- */
function DwarkaScene({ isReducedMotion }: { isReducedMotion: boolean }) {
  const oceanRef = useRef<THREE.Mesh>(null!)
  const palaceRef = useRef<THREE.Group>(null!)
  const krishnaRef = useRef<THREE.Group>(null!)
  const lightRaysRef = useRef<THREE.Group>(null!)
  const flagsRef = useRef<THREE.Group>(null!)

  const oceanGeometry = useMemo(() => new THREE.PlaneGeometry(30, 30, 32, 32), [])

  useFrame((state) => {
    if (typeof document !== 'undefined' && document.hidden) return
    
    const time = state.clock.elapsedTime
    
    if (oceanRef.current) {
      const positions = oceanGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const z = positions[i + 2]
        positions[i + 1] = Math.sin(x * 0.2 + time * 0.5) * 0.3 + Math.cos(z * 0.3 + time * 0.3) * 0.2
      }
      oceanGeometry.attributes.position.needsUpdate = true
    }
    
    if (palaceRef.current) {
      palaceRef.current.position.y = Math.sin(time * 0.2) * 0.1
    }
    
    if (krishnaRef.current) {
      krishnaRef.current.position.y = Math.sin(time * 1.5) * 0.05 + 2
      krishnaRef.current.rotation.y = time * 0.1
    }
    
    if (lightRaysRef.current) {
      lightRaysRef.current.rotation.y = time * 0.2
    }
    
    if (flagsRef.current) {
      const children = flagsRef.current.children
      for (let i = 0; i < children.length; i++) {
        const flag = children[i]
        if (flag) flag.rotation.z = Math.sin(time * 2 + i) * 0.1
      }
    }
  })

  return (
    <group>
      {/* Single main palace structure - removed overlapping side buildings */}
      <group ref={palaceRef} position={[0, 0, -15]}>
        <mesh position={[0, 3, 0]}>
          <primitive object={geometries.boxMedium} />
          <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.1} />
        </mesh>
        
        <mesh position={[0, 5.5, 0]}>
          <primitive object={geometries.coneMedium} />
          <meshStandardMaterial color="#b8860b" />
        </mesh>
        
        <group position={[0, 1.5, 0]}>
          {Array.from({ length: 4 }, (_, i) => (
            <mesh key={i} position={[-2.5 + i * 1.7, 0, 0]}>
              <primitive object={geometries.cylinderLarge} />
              <meshStandardMaterial color="#d4af37" />
            </mesh>
          ))}
        </group>
        
        <mesh position={[0, 2, 1.8]}>
          <primitive object={geometries.boxLarge} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        <group ref={flagsRef} position={[0, 7, 0]}>
          {Array.from({ length: 3 }, (_, i) => (
            <mesh key={i} position={[-1.5 + i * 1.5, 0, 0]} rotation={[0, 0, 0.2]}>
              <primitive object={geometries.flag} />
              <meshStandardMaterial color="#ff6b6b" side={THREE.DoubleSide} />
            </mesh>
          ))}
        </group>

        {/* REMOVED the overlapping side buildings that were causing the issue */}
      </group>

      <group ref={krishnaRef} position={[0, 2, -13]}>
        <mesh position={[0, 0.5, 0]}>
          <primitive object={geometries.cylinderSmall} />
          <meshStandardMaterial color="#f0c070" />
        </mesh>
        <mesh position={[0, 1, 0]}>
          <primitive object={geometries.sphereSmall} />
          <meshStandardMaterial color="#f0c070" />
        </mesh>
        <mesh position={[0.3, 0.7, 0.1]} rotation={[0, 0.5, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#ff6b6b" />
        </mesh>
      </group>

      <group ref={lightRaysRef} position={[0, 2, -13]}>
        {Array.from({ length: 8 }, (_, i) => (
          <mesh key={i} rotation={[0, (i / 8) * Math.PI * 2, 0]}>
            <primitive object={geometries.plane} />
            <meshBasicMaterial color="#ffd700" transparent opacity={0.3} side={THREE.DoubleSide} />
          </mesh>
        ))}
      </group>

      <mesh ref={oceanRef} geometry={oceanGeometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <meshStandardMaterial 
          color="#1e3a8a" 
          transparent 
          opacity={0.8} 
          roughness={0.1} 
          metalness={0.9} 
        />
      </mesh>

      <mesh position={[12, 5, -20]}>
        <primitive object={geometries.sphereLarge} />
        <meshBasicMaterial color="#ff6b35" />
      </mesh>

      <Sparkles count={20} scale={15} size={1.5} speed={0.3} color="#ffd700" />
    </group>
  )
}

/* -------------------- Scene 2: Battlefield - The Charioteer -------------------- */
function BattlefieldScene({ isReducedMotion }: { isReducedMotion: boolean }) {
  const dustRef = useRef<THREE.Points>(null!)
  const horsesRef = useRef<THREE.Group>(null!)
  const krishnaRef = useRef<THREE.Group>(null!)
  const arjunaRef = useRef<THREE.Group>(null!)
  const bowRef = useRef<THREE.Mesh>(null!)
  const shouldUpdate = useFrameSkip(4)

  const dustParticles = useMemo(() => {
    const positions = new Float32Array(50 * 3)
    const colors = new Float32Array(50 * 3)
    for (let i = 0; i < 50; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 20
      positions[i3 + 1] = Math.random() * 3
      positions[i3 + 2] = (Math.random() - 0.5) * 10
      colors[i3] = 0.8
      colors[i3 + 1] = 0.7
      colors[i3 + 2] = 0.5
    }
    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (!shouldUpdate || typeof document !== 'undefined' && document.hidden) return
    
    const time = state.clock.elapsedTime
    
    if (dustRef.current?.geometry) {
      const positions = dustRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < 50; i++) {
        const i3 = i * 3
        positions[i3 + 1] += Math.sin(time + i) * 0.01
        positions[i3] += Math.cos(time * 0.5 + i) * 0.02
        if (positions[i3 + 1] > 3) positions[i3 + 1] = 0
      }
      dustRef.current.geometry.attributes.position.needsUpdate = true
    }
    
    if (horsesRef.current) {
      horsesRef.current.position.x = Math.sin(time) * 0.1
    }
    
    if (bowRef.current) {
      bowRef.current.rotation.z = Math.sin(time * 8) * 0.05
    }
    
    if (krishnaRef.current) {
      krishnaRef.current.rotation.y = Math.sin(time * 0.5) * 0.02
    }
  })

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <primitive object={geometries.planeLarge} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      <group position={[0, 0, 0]}>
        <mesh position={[0, 0.5, 0]}>
          <primitive object={geometries.boxSmall} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        <group ref={horsesRef} position={[0, 0, -2]}>
          {Array.from({ length: 4 }, (_, i) => (
            <mesh key={i} position={[-1 + i * 0.6, 0.8, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 1, 8]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
          ))}
        </group>

        <group ref={krishnaRef} position={[0, 1.2, 0.5]}>
          <mesh>
            <primitive object={geometries.cylinderMedium} />
            <meshStandardMaterial color="#f0c070" />
          </mesh>
          <mesh position={[0, 0.8, 0]}>
            <primitive object={geometries.sphereSmall} />
            <meshStandardMaterial color="#f0c070" />
          </mesh>
          <mesh position={[0, 0.5, -1]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 2, 4]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
        </group>

        <group ref={arjunaRef} position={[0.5, 1.2, -0.5]}>
          <mesh>
            <primitive object={geometries.cylinderMedium} />
            <meshStandardMaterial color="#e0b070" />
          </mesh>
          <mesh position={[0, 0.8, 0]}>
            <primitive object={geometries.sphereSmall} />
            <meshStandardMaterial color="#e0b070" />
          </mesh>
          <mesh ref={bowRef} position={[0.3, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
            <primitive object={geometries.ring} />
            <meshStandardMaterial color="#8B4513" side={THREE.DoubleSide} />
          </mesh>
        </group>
      </group>

      <points ref={dustRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={50} array={dustParticles.positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={50} array={dustParticles.colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.1} vertexColors transparent opacity={0.6} sizeAttenuation />
      </points>

      <pointLight color="#ff6b35" intensity={0.5} position={[5, 5, 5]} />
    </group>
  )
}

/* -------------------- Scene 3: Bhagavad Gita - Enlightenment -------------------- */
function BhagavadGitaScene({ isReducedMotion }: { isReducedMotion: boolean }) {
  const lightRef = useRef<THREE.Mesh>(null!)
  const krishnaRef = useRef<THREE.Group>(null!)
  const versesRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (typeof document !== 'undefined' && document.hidden) return
    
    const time = state.clock.elapsedTime
    
    if (lightRef.current) {
      const scale = 1 + Math.sin(time * 2) * 0.1
      lightRef.current.scale.setScalar(scale)
    }
    
    if (krishnaRef.current) {
      krishnaRef.current.children[2].position.y = Math.sin(time * 3) * 0.05 + 0.8
    }
    
    if (versesRef.current) {
      const children = versesRef.current.children
      for (let i = 0; i < children.length; i++) {
        const verse = children[i]
        if (verse) {
          verse.position.y = Math.sin(time * 0.5 + i) * 0.1
          verse.rotation.y = time * 0.1 + i
        }
      }
    }
  })

  return (
    <group>
      <mesh>
        <primitive object={geometries.sphereXLarge} />
        <meshBasicMaterial color="#d4af37" side={THREE.BackSide} />
      </mesh>

      <mesh ref={lightRef} position={[0, 2, -5]}>
        <sphereGeometry args={[3, 16, 16]} />
        <meshBasicMaterial color="#ffd700" transparent opacity={0.3} side={THREE.BackSide} />
      </mesh>

      <group position={[0, 0, 0]}>
        <group ref={krishnaRef} position={[-1, 0, 0]}>
          <mesh>
            <cylinderGeometry args={[0.3, 0.3, 1.5, 8]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh position={[0, 1, 0]}>
            <primitive object={geometries.sphereMedium} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh position={[0.4, 0.8, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.3, 6]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
        </group>

        <mesh position={[1, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 1.5, 8]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
      </group>

      <group ref={versesRef}>
        <Text
          position={[0, 2, -2]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Do your duty
        </Text>
        <Text
          position={[0, 1.5, -2]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          without attachment
        </Text>
        <Text
          position={[0, 1, -2]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          to results
        </Text>
      </group>

      <Sparkles count={30} scale={15} size={3} speed={0.5} color="#ffffff" />
    </group>
  )
}

/* -------------------- Camera Controller -------------------- */
function CameraController({ scene, showBoom, showBackground }: { scene: number; showBoom: boolean; showBackground: boolean }) {
  const { camera } = useThree()
  const start = useRef(0)

  useFrame(({ clock }) => {
    if (typeof document !== 'undefined' && document.hidden) return
    if (!start.current) start.current = clock.elapsedTime
    
    const time = clock.elapsedTime - start.current
    
    let target
    
    if (showBoom) {
      // During boom transition, pull back camera for dramatic effect
      target = tempVector.set(0, 5, 20)
    } else if (showBackground) {
      // Final position with background
      target = tempVector.set(0, 2, 8)
    } else {
      // Normal scene transitions
      switch (scene) {
        case 0:
          target = tempVector.set(0, 4, 16)
          break
        case 1:
          target = tempVector.set(2, 2, 8)
          break
        case 2:
          target = tempVector.set(0, 2, 10)
          break
        default:
          target = tempVector.set(0, 2, 8)
      }
    }
    
    camera.position.lerp(target, 0.05)
    camera.lookAt(0, 1, 0)
  })

  return null
}

/* -------------------- Main Scene -------------------- */
export default function AboutScene({ isReducedMotion }: AboutSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 4, 16], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        depth: true,
        stencil: false,
      }}
      dpr={[1, 1]}
      frameloop="always"
    >
      <SceneManager isReducedMotion={isReducedMotion} />
      
      <Environment preset="sunset" />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
        enabled={false}
      />

      <EffectComposer multisampling={0}>
        <Bloom intensity={0.3} luminanceThreshold={0.7} />
        <Vignette eskil={false} offset={0.1} darkness={0.3} />
      </EffectComposer>
    </Canvas>
  )
}