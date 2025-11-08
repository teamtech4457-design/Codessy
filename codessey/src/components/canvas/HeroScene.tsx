'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Text, useTexture } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'

interface HeroSceneProps {
  isReducedMotion: boolean
}

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
        />
      </mesh>
      

      <mesh position={[-4, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[6, 4, 0.3]} />
        <meshStandardMaterial 
          color={stoneColors[1]} 
          roughness={0.9} 
          metalness={0.1}
        />
      </mesh>
      <mesh position={[4, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[6, 4, 0.3]} />
        <meshStandardMaterial 
          color={stoneColors[1]} 
          roughness={0.9} 
          metalness={0.1}
        />
      </mesh>
      
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial 
          color="#0b0f15" 
          roughness={0.95} 
          metalness={0.05}
        />
      </mesh>
      

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 4, 0]} receiveShadow>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial 
          color={stoneColors[2]} 
          roughness={0.9} 
          metalness={0.1}
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
          <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
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
        />
      </mesh>
      
   
      <mesh position={[1.5, 0.5, -2]} rotation={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.4, 0.3, 1.2, 8]} />
        <meshStandardMaterial 
          color="#1e293b" 
          emissive="#1e293b"
          emissiveIntensity={0.1}
          roughness={1}
        />
      </mesh>
    </group>
  )
}

function DivineLight({ isReducedMotion }: { isReducedMotion: boolean }) {
  const lightGroupRef = useRef<THREE.Group>(null!)
  const coreRef = useRef<THREE.Mesh>(null!)
  const auraRef = useRef<THREE.Mesh>(null!)
  const pointLightRef = useRef<THREE.PointLight>(null!)
  const spotLightRef = useRef<THREE.SpotLight>(null!)

  const timeline = useRef({
    startTime: 0,
    hasStarted: false,
    phase: 0 // 0: dark, 1: initial glow, 2: full light, 3: settled
  })

  useFrame((state) => {
    if (!timeline.current.hasStarted) {
      timeline.current.startTime = state.clock.elapsedTime
      timeline.current.hasStarted = true
    }

    const elapsed = state.clock.elapsedTime - timeline.current.startTime
    const loopTime = 30 // 30-second loop
    const loopElapsed = elapsed % loopTime

    if (isReducedMotion) {
      // Reduced motion: stay in settled state
      if (coreRef.current) {
        coreRef.current.scale.setScalar(1)
        ;(coreRef.current.material as THREE.Material).opacity = 0.8
      }
      if (auraRef.current) {
        auraRef.current.scale.setScalar(3)
        ;(auraRef.current.material as THREE.Material).opacity = 0.3
      }
      if (pointLightRef.current) {
        pointLightRef.current.intensity = 2
      }
      if (spotLightRef.current) {
        spotLightRef.current.intensity = 1.5
      }
      return
    }

    // Phase 0-6s: Dark cell
    if (loopElapsed < 6) {
      timeline.current.phase = 0
      if (coreRef.current) {
        coreRef.current.scale.setScalar(0.01)
        ;(coreRef.current.material as THREE.Material).opacity = 0
      }
      if (auraRef.current) {
        auraRef.current.scale.setScalar(0.01)
        ;(auraRef.current.material as THREE.Material).opacity = 0
      }
      if (pointLightRef.current) {
        pointLightRef.current.intensity = 0
      }
      if (spotLightRef.current) {
        spotLightRef.current.intensity = 0
      }
    }
    // Phase 6-8s: Tiny glow appears
    else if (loopElapsed < 8) {
      timeline.current.phase = 1
      const progress = (loopElapsed - 6) / 2
      if (coreRef.current) {
        coreRef.current.scale.setScalar(0.01 + progress * 0.2)
        ;(coreRef.current.material as THREE.Material).opacity = progress * 0.5
      }
      if (pointLightRef.current) {
        pointLightRef.current.intensity = progress * 0.5
      }
    }
    // Phase 8-12s: Bloom & aura grow quickly
    else if (loopElapsed < 12) {
      timeline.current.phase = 2
      const progress = (loopElapsed - 8) / 4
      if (coreRef.current) {
        coreRef.current.scale.setScalar(0.21 + progress * 0.8)
        ;(coreRef.current.material as THREE.Material).opacity = 0.5 + progress * 0.3
      }
      if (auraRef.current) {
        auraRef.current.scale.setScalar(progress * 3)
        ;(auraRef.current.material as THREE.Material).opacity = progress * 0.3
      }
      if (pointLightRef.current) {
        pointLightRef.current.intensity = 0.5 + progress * 1.5
      }
      if (spotLightRef.current) {
        spotLightRef.current.intensity = progress * 1.5
      }
    }
    // Phase 12-30s: Settled with gentle pulse
    else {
      timeline.current.phase = 3
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1
      if (coreRef.current) {
        coreRef.current.scale.setScalar(1 * pulse)
      }
      if (auraRef.current) {
        auraRef.current.scale.setScalar(3 * pulse)
        ;(auraRef.current.material as THREE.Material).opacity = 0.3 * pulse
      }
      if (pointLightRef.current) {
        pointLightRef.current.intensity = 2 * pulse
      }
      if (spotLightRef.current) {
        spotLightRef.current.intensity = 1.5
      }
    }
  })

  return (
    <group ref={lightGroupRef} position={[0, 1, -1]}>
      {/* Divine core - glowing orb */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial
          color="#ffd87a"
          transparent
          opacity={0}
          toneMapped={false}
        />
      </mesh>

      {/* Aura rings */}
      <mesh ref={auraRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#ffc05a"
          transparent
          opacity={0}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </mesh>

      {/* Additional aura layers */}
      <mesh scale={[2, 2, 2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </mesh>

      {/* Point light for omnidirectional glow */}
      <pointLight
        ref={pointLightRef}
        color="#ffd87a"
        intensity={0}
        distance={8}
        decay={2}
      />

      {/* Spot light for godrays */}
      <spotLight
        ref={spotLightRef}
        color="#ffd87a"
        intensity={0}
        distance={10}
        angle={Math.PI / 3}
        penumbra={0.5}
        decay={2}
        position={[0, 0, 0]}
        target-position={[0, 0, -5]}
      />
    </group>
  )
}

function MoonBeam() {
  const beamRef = useRef<THREE.SpotLight>(null!)
  const volumeRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (volumeRef.current) {
      volumeRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group position={[2, 3, -2.8]}>
      <spotLight
        ref={beamRef}
        color="#9fc7ff"
        intensity={0.3}
        distance={6}
        angle={Math.PI / 8}
        penumbra={0.8}
        decay={2}
        position={[0, 0, 0]}
        target-position={[0, -2, -1]}
      />
      
      {/* Volumetric beam visualization */}
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

function DustParticles({ isReducedMotion }: { isReducedMotion: boolean }) {
  const particlesRef = useRef<THREE.Points>(null!)
  const count = 150

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const phases = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Random positions in the cell
      positions[i3] = (Math.random() - 0.5) * 7
      positions[i3 + 1] = Math.random() * 3.5
      positions[i3 + 2] = (Math.random() - 0.5) * 5

      // Dust colors - mostly gray with some catching light
      const isGolden = Math.random() > 0.8
      colors[i3] = isGolden ? 0.98 : 0.6 + Math.random() * 0.2
      colors[i3 + 1] = isGolden ? 0.75 : 0.5 + Math.random() * 0.2
      colors[i3 + 2] = isGolden ? 0.12 : 0.4 + Math.random() * 0.2

      sizes[i] = Math.random() * 0.05 + 0.02
      phases[i] = Math.random() * Math.PI * 2
    }

    return { positions, colors, sizes, phases }
  }, [count])

  useFrame((state) => {
    if (particlesRef.current && !isReducedMotion) {
      const time = state.clock.elapsedTime
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const phase = particles.phases[i]
        positions[i3 + 1] += Math.sin(time + phase) * 0.001 // Gentle floating
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
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
          args={[particles.colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particles.sizes}
          itemSize={1}
          args={[particles.sizes, 1]}
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

function CameraController({ isReducedMotion }: { isReducedMotion: boolean }) {
  const { camera } = useThree()
  const startPosition = useRef(new THREE.Vector3(0, 2, 8))
  const targetPosition = useRef(new THREE.Vector3(0, 1.5, 4))
  
  useFrame((state) => {
    if (isReducedMotion) {
      camera.position.lerp(startPosition.current, 0.1)
      return
    }

    const elapsed = state.clock.elapsedTime
    const loopTime = 30
    const loopElapsed = elapsed % loopTime

    // Start dolly-in at 12s, complete by 18s
    if (loopElapsed > 12) {
      const dollyProgress = Math.min((loopElapsed - 12) / 6, 1)
      camera.position.lerpVectors(
        startPosition.current,
        targetPosition.current,
        dollyProgress
      )
    } else {
      camera.position.lerp(startPosition.current, 0.1)
    }

    camera.lookAt(0, 1, -1)
  })

  return null
}

export default function HeroScene({ isReducedMotion }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 2, 8], fov: 50 }}
      shadows
      style={{ background: 'linear-gradient(to bottom, #000000, #0b0f15)' }}
    >
      <color attach="background" args={['#000000']} />
      
      {/* Lighting */}
      <ambientLight intensity={0.1} color="#9fc7ff" />
      
      {/* Scene Elements */}
      <PrisonCell />
      <PrisonBars />
      <Chains />
      <ParentSilhouettes />
      <DivineLight isReducedMotion={isReducedMotion} />
      <MoonBeam />
      <DustParticles isReducedMotion={isReducedMotion} />

      {/* Camera Control */}
      <CameraController isReducedMotion={isReducedMotion} />
      
      {/* Environment */}
      <Environment preset="night" />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
        maxDistance={10}
        minDistance={3}
        enabled={false} // Disabled for our custom camera control
      />

      {/* Post-processing */}
      <EffectComposer>
        <Bloom 
          intensity={1.2} 
          luminanceThreshold={0.4}
          luminanceSmoothing={0.9}
          height={300}
        />
        <Vignette eskil={false} offset={0.15} darkness={0.8} />
      </EffectComposer>
    </Canvas>
  )
}