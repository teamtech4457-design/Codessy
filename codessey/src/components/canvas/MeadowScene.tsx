// components/canvas/MeadowScene.tsx
'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, useTexture, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useRef, useMemo, useEffect, useState } from 'react'
import * as THREE from 'three'

interface MeadowSceneProps {
  isReducedMotion: boolean
}

function SceneManager({ isReducedMotion }: { isReducedMotion: boolean }) {
  const { scene } = useThree()
  const [currentPhase, setCurrentPhase] = useState(0) // 0: Transition (10s), 1: Static background
  const animationStartTime = useRef(0)

  useFrame((state) => {
    if (animationStartTime.current === 0) {
      animationStartTime.current = state.clock.elapsedTime
    }

    const elapsed = state.clock.elapsedTime - animationStartTime.current

    // After 10 seconds, switch to static background
    if (elapsed > 10 && currentPhase === 0) {
      setCurrentPhase(1)
    }
  })

  useEffect(() => {
    // Set background to Krishna image after transition
    if (currentPhase === 1) {
      const loader = new THREE.TextureLoader()
      loader.load(
        '/krishna-playing.jpg.png', 
        (texture) => {
          scene.background = texture
          texture.colorSpace = THREE.SRGBColorSpace
        },
        undefined, 
        (error) => {
          console.error('Error loading texture:', error)
          scene.background = new THREE.Color(0x1a237e)
        }
      )
    } else {
      scene.background = null
    }
  }, [currentPhase, scene])

  return (
    <>
      {/* Show transition animations ONLY in phase 0 (first 10 seconds) */}
      {currentPhase === 0 && (
        <>
          <TransitionEnvironment />
          <ButterDrops isAnimating={true} />
          <MusicDrops isAnimating={true} />
          <GopiDrops isAnimating={true} />
          <DivineDrops isAnimating={true} />
          <FallingButterDrops isAnimating={true} />
          <SprinkleDrops isAnimating={true} />
          <TransitionSparkles isReducedMotion={isReducedMotion} />
        </>
      )}

      {/* Show static elements in both phases */}
      <ButterDrops isAnimating={currentPhase === 0} />
      <MusicDrops isAnimating={currentPhase === 0} />
      
      <CameraController isReducedMotion={isReducedMotion} phase={currentPhase} />
    </>
  )
}

// NEW: Sprinkle Drops Component - Only shows during 10-second transition
function SprinkleDrops({ isAnimating }: { isAnimating: boolean }) {
  const sprinklesRef = useRef<THREE.Points>(null!)
  const sprinkleCount = 50

  const { positions, colors, sizes, velocities } = useMemo(() => {
    const positions = new Float32Array(sprinkleCount * 3)
    const colors = new Float32Array(sprinkleCount * 3)
    const sizes = new Float32Array(sprinkleCount)
    const velocities = new Float32Array(sprinkleCount * 3)

    for (let i = 0; i < sprinkleCount; i++) {
      const i3 = i * 3
      
      // Start positions - spread around the scene
      positions[i3] = (Math.random() - 0.5) * 25
      positions[i3 + 1] = Math.random() * 15 + 5 // Start above the scene
      positions[i3 + 2] = (Math.random() - 0.5) * 20

      // Random velocities - falling with some horizontal movement
      velocities[i3] = (Math.random() - 0.5) * 0.02 // X velocity
      velocities[i3 + 1] = -0.05 - Math.random() * 0.03 // Y velocity (falling)
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02 // Z velocity

      // Color variations - golden, white, and light blue sprinkles
      const colorType = Math.random()
      if (colorType < 0.6) {
        // Golden sprinkles (60%)
        colors[i3] = 1.0
        colors[i3 + 1] = 0.9
        colors[i3 + 2] = 0.3
      } else if (colorType < 0.8) {
        // White sprinkles (20%)
        colors[i3] = 1.0
        colors[i3 + 1] = 1.0
        colors[i3 + 2] = 1.0
      } else {
        // Light blue sprinkles (20%)
        colors[i3] = 0.6
        colors[i3 + 1] = 0.8
        colors[i3 + 2] = 1.0
      }

      // Random sizes
      sizes[i] = Math.random() * 0.04 + 0.02
    }

    return { positions, colors, sizes, velocities }
  }, [sprinkleCount])

  useFrame((state) => {
    if (sprinklesRef.current?.geometry && isAnimating) {
      const time = state.clock.elapsedTime
      const positions = sprinklesRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < sprinkleCount; i++) {
        const i3 = i * 3
        
        // Apply velocity
        positions[i3] += velocities[i3]
        positions[i3 + 1] += velocities[i3 + 1]
        positions[i3 + 2] += velocities[i3 + 2]
        
        // Add subtle swaying motion
        positions[i3] += Math.sin(time * 3 + i) * 0.002
        positions[i3 + 2] += Math.cos(time * 2 + i) * 0.002
        
        // Add slight rotation effect
        const rotation = time * 0.5 + i
        const radius = 0.1
        positions[i3] += Math.sin(rotation) * radius * 0.01
        positions[i3 + 2] += Math.cos(rotation) * radius * 0.01
        
        // Reset sprinkles that fall below the scene
        if (positions[i3 + 1] < -5) {
          positions[i3] = (Math.random() - 0.5) * 25
          positions[i3 + 1] = Math.random() * 10 + 15 // Reset to top
          positions[i3 + 2] = (Math.random() - 0.5) * 20
          
          // Reset velocity with some variation
          velocities[i3] = (Math.random() - 0.5) * 0.02
          velocities[i3 + 1] = -0.05 - Math.random() * 0.03
          velocities[i3 + 2] = (Math.random() - 0.5) * 0.02
        }
        
        // Flickering effect - random opacity changes
        const material = sprinklesRef.current.material as THREE.PointsMaterial
        if (Math.random() > 0.95) {
          material.opacity = 0.3 + Math.random() * 0.5
        }
      }
      
      sprinklesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={sprinklesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={sprinkleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={sprinkleCount}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sprinkleCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Enhanced Transition Environment with animated elements
function TransitionEnvironment() {
  const environmentRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (environmentRef.current) {
      const time = state.clock.elapsedTime
      // Gentle overall movement
      environmentRef.current.rotation.y = Math.sin(time * 0.1) * 0.1
    }
  })

  return (
    <group ref={environmentRef}>
      {/* Animated ground plane */}
      <AnimatedGround />
      
      {/* Floating temple structures */}
      <FloatingTemples />
      
      {/* Divine light sources */}
      <DivineLights />
    </group>
  )
}

function AnimatedGround() {
  const groundRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (groundRef.current) {
      const time = state.clock.elapsedTime
      // Subtle pulsing effect
      const material = groundRef.current.material as THREE.MeshStandardMaterial
      material.emissiveIntensity = 0.1 + Math.sin(time * 2) * 0.05
    }
  })

  return (
    <mesh ref={groundRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
      <planeGeometry args={[20, 20, 32, 32]} />
      <meshStandardMaterial
        color="#2d5016"
        emissive="#1a3a08"
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  )
}

function FloatingTemples() {
  const templesRef = useRef<THREE.Group>(null!)
  const templeCount = 4

  const temples = useMemo(() => {
    const templeData = []
    for (let i = 0; i < templeCount; i++) {
      const angle = (i / templeCount) * Math.PI * 2
      const radius = 8
      templeData.push({
        position: [
          Math.cos(angle) * radius,
          Math.random() * 2 + 1,
          Math.sin(angle) * radius
        ],
        scale: 0.3 + Math.random() * 0.2
      })
    }
    return templeData
  }, [templeCount])

  useFrame((state) => {
    if (templesRef.current?.children) {
      const time = state.clock.elapsedTime
      
      templesRef.current.children.forEach((temple, index) => {
        // Gentle floating motion
        temple.position.y = temples[index].position[1] + Math.sin(time * 0.5 + index) * 0.3
        temple.rotation.y = time * 0.2 + index
      })
    }
  })

  return (
    <group ref={templesRef}>
      {temples.map((temple, i) => (
        <group key={i} position={temple.position as [number, number, number]} scale={temple.scale}>
          <mesh>
            <boxGeometry args={[1, 2, 1]} />
            <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.1} />
          </mesh>
          <mesh position={[0, 1.5, 0]}>
            <coneGeometry args={[0.8, 1, 4]} />
            <meshStandardMaterial color="#b8860b" />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function DivineLights() {
  const lightsRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (lightsRef.current) {
      const time = state.clock.elapsedTime
      lightsRef.current.rotation.y = time * 0.1
    }
  })

  return (
    <group ref={lightsRef}>
      <pointLight color="#ffd87a" intensity={2} distance={15} position={[5, 5, 5]} />
      <pointLight color="#9fc7ff" intensity={1.5} distance={12} position={[-5, 3, -5]} />
    </group>
  )
}

function TransitionSparkles({ isReducedMotion }: { isReducedMotion: boolean }) {
  return (
    <Sparkles
      count={isReducedMotion ? 30 : 80}
      scale={20}
      size={2}
      speed={isReducedMotion ? 0.2 : 1}
      color="#fef3c7"
    />
  )
}

// Updated ButterDrops with phase control
function ButterDrops({ isAnimating }: { isAnimating: boolean }) {
  const butterRef = useRef<THREE.Group>(null!)
  const butterJarRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (butterRef.current && butterJarRef.current && isAnimating) {
      const time = state.clock.elapsedTime
      
      // Gentle floating up and down for butter
      butterRef.current.position.y = Math.sin(time * 1.5) * 0.2 + 1
      
      // Butter jar subtle floating
      butterJarRef.current.position.y = Math.sin(time * 0.8) * 0.1 + 2
    }
  })

  return (
    <>
      {/* Floating butter drop */}
      <group ref={butterRef} position={[2, 1, 1]}>
        <mesh>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            color="#fef3c7"
            emissive="#fef3c7"
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>

      {/* Butter jar */}
      <group ref={butterJarRef} position={[-2, 2, 1]}>
        <mesh>
          <cylinderGeometry args={[0.25, 0.2, 0.5, 16]} />
          <meshStandardMaterial color="#a16207" />
        </mesh>
        <mesh position={[0, 0.25, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#fef3c7" />
        </mesh>
      </group>
    </>
  )
}

// Updated MusicDrops with phase control
function MusicDrops({ isAnimating }: { isAnimating: boolean }) {
  const dropsRef = useRef<THREE.Group>(null!)
  const dropCount = 6

  useFrame((state) => {
    if (dropsRef.current && isAnimating) {
      const time = state.clock.elapsedTime
      
      dropsRef.current.children.forEach((drop, index) => {
        const angle = (index / dropCount) * Math.PI * 2
        const radius = 2.5
        
        drop.position.x = Math.cos(angle) * radius
        drop.position.z = Math.sin(angle) * radius
        
        // Gentle floating up and down
        drop.position.y = Math.sin(time * 1.2 + index * 0.5) * 0.3 + 1
        
        // Subtle scale pulsing
        const pulse = Math.sin(time * 2 + index) * 0.1 + 0.9
        drop.scale.setScalar(pulse)
      })
    }
  })

  return (
    <group ref={dropsRef}>
      {Array.from({ length: dropCount }).map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial 
            color="#fbbf24"
            emissive="#f59e0b"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

// Updated GopiDrops with phase control
function GopiDrops({ isAnimating }: { isAnimating: boolean }) {
  const dropsRef = useRef<THREE.Group>(null!)
  const dropCount = 4

  useFrame((state) => {
    if (dropsRef.current && isAnimating) {
      const time = state.clock.elapsedTime
      
      dropsRef.current.children.forEach((drop, index) => {
        const angle = (index / dropCount) * Math.PI * 2 + time * 0.2
        const radius = 3
        
        drop.position.x = Math.cos(angle) * radius
        drop.position.z = Math.sin(angle) * radius
        
        // Gentle floating
        drop.position.y = Math.sin(time * 1 + index * 0.7) * 0.2 + 0.5
      })
    }
  })

  return (
    <group ref={dropsRef}>
      {Array.from({ length: dropCount }).map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color={`hsl(${i * 90}, 70%, 60%)`} />
        </mesh>
      ))}
    </group>
  )
}

// Updated DivineDrops with phase control
function DivineDrops({ isAnimating }: { isAnimating: boolean }) {
  const dropsRef = useRef<THREE.Points>(null!)
  const dropCount = 30

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(dropCount * 3)
    const colors = new Float32Array(dropCount * 3)
    const sizes = new Float32Array(dropCount)

    for (let i = 0; i < dropCount; i++) {
      const i3 = i * 3
      
      // Spread drops around the scene
      positions[i3] = (Math.random() - 0.5) * 15
      positions[i3 + 1] = Math.random() * 8
      positions[i3 + 2] = (Math.random() - 0.5) * 10

      // Golden divine colors
      colors[i3] = 1.0
      colors[i3 + 1] = 0.9
      colors[i3 + 2] = 0.3

      // Random sizes
      sizes[i] = Math.random() * 0.08 + 0.03
    }

    return { positions, colors, sizes }
  }, [dropCount])

  useFrame((state) => {
    if (dropsRef.current?.geometry && isAnimating) {
      const time = state.clock.elapsedTime
      const positions = dropsRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < dropCount; i++) {
        const i3 = i * 3
        
        // Gentle floating motion
        positions[i3 + 1] += Math.sin(time * 0.5 + i) * 0.005
        
        // Reset drops that go too high
        if (positions[i3 + 1] > 8) {
          positions[i3 + 1] = 0
          positions[i3] = (Math.random() - 0.5) * 15
          positions[i3 + 2] = (Math.random() - 0.5) * 10
        }
      }
      
      dropsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={dropsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={dropCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={dropCount}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={dropCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Updated FallingButterDrops with phase control
function FallingButterDrops({ isAnimating }: { isAnimating: boolean }) {
  const dropsRef = useRef<THREE.Points>(null!)
  const dropCount = 20

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(dropCount * 3)
    const colors = new Float32Array(dropCount * 3)

    for (let i = 0; i < dropCount; i++) {
      const i3 = i * 3
      
      // Start positions for falling drops
      positions[i3] = (Math.random() - 0.5) * 12
      positions[i3 + 1] = Math.random() * 10 + 5
      positions[i3 + 2] = (Math.random() - 0.5) * 8

      // Butter yellow colors
      colors[i3] = 1.0
      colors[i3 + 1] = 0.95
      colors[i3 + 2] = 0.6
    }

    return { positions, colors }
  }, [dropCount])

  useFrame((state) => {
    if (dropsRef.current?.geometry && isAnimating) {
      const time = state.clock.elapsedTime
      const positions = dropsRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < dropCount; i++) {
        const i3 = i * 3
        
        // Falling motion
        positions[i3 + 1] -= 0.05
        
        // Gentle side-to-side sway
        positions[i3] += Math.sin(time * 2 + i) * 0.01
        
        // Reset drops that fall too low
        if (positions[i3 + 1] < -2) {
          positions[i3 + 1] = Math.random() * 5 + 8
          positions[i3] = (Math.random() - 0.5) * 12
          positions[i3 + 2] = (Math.random() - 0.5) * 8
        }
      }
      
      dropsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={dropsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={dropCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={dropCount}
          array={colors}
          itemSize={3}
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

// Camera Controller for 10-second transition
function CameraController({ isReducedMotion, phase }: { isReducedMotion: boolean; phase: number }) {
  const { camera } = useThree()
  const animationStartTime = useRef(0)
  
  useFrame((state) => {
    if (isReducedMotion) {
      camera.position.set(0, 3, 10)
      camera.lookAt(0, 1, 0)
      return
    }

    if (animationStartTime.current === 0) {
      animationStartTime.current = state.clock.elapsedTime
    }

    const elapsed = state.clock.elapsedTime - animationStartTime.current

    if (phase === 0) {
      // 10-second transition phase - dynamic camera movement
      if (elapsed < 3) {
        // First 3 seconds - wide overview
        camera.position.lerp(new THREE.Vector3(0, 6, 12), 0.1)
      } else if (elapsed < 7) {
        // Middle 4 seconds - medium view
        camera.position.lerp(new THREE.Vector3(0, 4, 8), 0.1)
      } else {
        // Last 3 seconds - close view
        camera.position.lerp(new THREE.Vector3(0, 2, 6), 0.1)
      }
      camera.lookAt(0, 1, 0)
    } else {
      // Static phase - fixed position
      camera.position.lerp(new THREE.Vector3(0, 3, 10), 0.05)
      camera.lookAt(0, 1, 0)
    }
  })

  return null
}

export default function MeadowScene({ isReducedMotion }: MeadowSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 6, 12], fov: 50 }}
      style={{ background: 'transparent' }}
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

      <EffectComposer>
        <Bloom intensity={0.6} luminanceThreshold={0.5} />
        <Vignette eskil={false} offset={0.1} darkness={0.4} />
      </EffectComposer>
    </Canvas>
  )
}