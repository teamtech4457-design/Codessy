'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, useTexture, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'

interface AboutSceneProps {
  isReducedMotion: boolean
}

function KrishnaBackground() {
  const { scene } = useThree()

  useEffect(() => {
    if (!scene) return

    const loader = new THREE.TextureLoader()
    
    loader.load(
      '/krishna-mahabharat.png.jpg', 
      (texture) => {
        console.log('Krishna background loaded for About section')
        scene.background = texture
        texture.colorSpace = THREE.SRGBColorSpace
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

// Wisdom Knowledge Particles
function WisdomParticles() {
  const particlesRef = useRef<THREE.Points>(null!)
  const particleCount = 35

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      
      // Spread particles around the scene
      positions[i3] = (Math.random() - 0.5) * 16
      positions[i3 + 1] = Math.random() * 8
      positions[i3 + 2] = (Math.random() - 0.5) * 10

      // Wisdom colors (gold and blue)
      const isGolden = Math.random() > 0.5
      colors[i3] = isGolden ? 1.0 : 0.3     // R
      colors[i3 + 1] = isGolden ? 0.8 : 0.5 // G
      colors[i3 + 2] = isGolden ? 0.1 : 0.9 // B

      sizes[i] = Math.random() * 0.08 + 0.04
    }

    return { positions, colors, sizes }
  }, [particleCount])

  useFrame((state) => {
    if (particlesRef.current?.geometry) {
      const time = state.clock.elapsedTime
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        
        // Gentle floating motion
        positions[i3 + 1] += Math.sin(time * 0.4 + i) * 0.006
        
        // Gentle circular motion
        positions[i3] += Math.cos(time * 0.3 + i) * 0.003
        positions[i3 + 2] += Math.sin(time * 0.3 + i) * 0.003
        
        // Reset particles that go too high
        if (positions[i3 + 1] > 8) {
          positions[i3 + 1] = 0
          positions[i3] = (Math.random() - 0.5) * 16
          positions[i3 + 2] = (Math.random() - 0.5) * 10
        }
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Floating Wisdom Symbols
function WisdomSymbols() {
  const symbolsRef = useRef<THREE.Group>(null!)
  const symbolCount = 8

  useFrame((state) => {
    if (symbolsRef.current) {
      const time = state.clock.elapsedTime
      
      symbolsRef.current.children.forEach((symbol, index) => {
        const angle = (index / symbolCount) * Math.PI * 2 + time * 0.2
        const radius = 2.5 + Math.sin(time * 0.5 + index) * 0.3
        
        symbol.position.x = Math.cos(angle) * radius
        symbol.position.z = Math.sin(angle) * radius
        
        // Gentle floating up and down
        symbol.position.y = Math.sin(time * 1.5 + index * 0.8) * 0.4 + 1.5
        
        // Subtle rotation
        symbol.rotation.y = time * 0.5 + index
        symbol.rotation.x = Math.sin(time + index) * 0.2
      })
    }
  })

  return (
    <group ref={symbolsRef}>
      {Array.from({ length: symbolCount }).map((_, i) => (
        <mesh key={i}>
          <torusGeometry args={[0.1, 0.03, 8, 16]} />
          <meshBasicMaterial 
            color="#d4af37"
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

// Gentle Music Notes
function MusicNotes() {
  const notesRef = useRef<THREE.Points>(null!)
  const noteCount = 20

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(noteCount * 3)
    const colors = new Float32Array(noteCount * 3)

    for (let i = 0; i < noteCount; i++) {
      const i3 = i * 3
      
      // Start positions for floating notes
      positions[i3] = (Math.random() - 0.5) * 12
      positions[i3 + 1] = Math.random() * 6
      positions[i3 + 2] = (Math.random() - 0.5) * 8

      // Music note colors (golden)
      colors[i3] = 1.0     // R
      colors[i3 + 1] = 0.9 // G
      colors[i3 + 2] = 0.6 // B
    }

    return { positions, colors }
  }, [noteCount])

  useFrame((state) => {
    if (notesRef.current?.geometry) {
      const time = state.clock.elapsedTime
      const positions = notesRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < noteCount; i++) {
        const i3 = i * 3
        
        // Rising motion
        positions[i3 + 1] += 0.02
        
        // Gentle sway
        positions[i3] += Math.sin(time * 1.2 + i) * 0.004
        positions[i3 + 2] += Math.cos(time * 1.2 + i) * 0.004
        
        // Reset notes that rise too high
        if (positions[i3 + 1] > 6) {
          positions[i3 + 1] = 0
          positions[i3] = (Math.random() - 0.5) * 12
          positions[i3 + 2] = (Math.random() - 0.5) * 8
        }
      }
      
      notesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={notesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={noteCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={noteCount}
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

export default function AboutScene({ isReducedMotion }: AboutSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 2, 8], fov: 50 }}
      style={{ background: 'transparent' }}
    >
      <KrishnaBackground />
      <WisdomParticles />
      <WisdomSymbols />
      <MusicNotes />

      <Sparkles
        count={isReducedMotion ? 15 : 40}
        scale={12}
        size={1}
        speed={isReducedMotion ? 0.1 : 0.3}
        color="#fef3c7"
      />

      <Environment preset="dawn" />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
        enabled={false}
      />

      <EffectComposer>
        <Bloom intensity={0.3} luminanceThreshold={0.8} />
        <Vignette eskil={false} offset={0.15} darkness={0.4} />
      </EffectComposer>
    </Canvas>
  )
}