'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useRef, useEffect, useMemo, memo } from 'react'
import * as THREE from 'three'

interface ContactSceneProps {
  isReducedMotion: boolean
}

/* -------------------- 3D Glowing Sparkles Component (Smaller Size) -------------------- */
const ThreeDGlowingSparkles = memo(() => {
  const groupRef = useRef<THREE.Group>(null!)
  
  const sparkles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12 - 3
      ],
      scale: 0.15 + Math.random() * 0.25,
      speed: 0.3 + Math.random() * 0.4,
      rotationSpeed: 0.15 + Math.random() * 0.3,
      orbitRadius: 1.5 + Math.random() * 2,
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
        child.position.y = sparkle.position[1] + Math.sin(time * sparkle.speed * 0.5 + i) * 1.5
        child.position.z = sparkle.position[2] + Math.sin(angle) * sparkle.orbitRadius
        
        child.rotation.x = time * sparkle.rotationSpeed
        child.rotation.y = time * sparkle.rotationSpeed * 1.5
        child.rotation.z = time * sparkle.rotationSpeed * 0.7
        
        const pulse = Math.sin(time * 2 + i) * 0.15 + 1
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
          {sparkle.shape === 'star' && <octahedronGeometry args={[0.2, 0]} />}
          {sparkle.shape === 'diamond' && <tetrahedronGeometry args={[0.2, 0]} />}
          {sparkle.shape === 'octahedron' && <octahedronGeometry args={[0.15, 1]} />}
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
      '/krishna-resting.png.png', 
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace
        scene.background = texture
      },
      undefined, 
      (error) => {
        console.error('Error loading background image:', error)
        scene.background = new THREE.Color(0x1a237e)
      }
    )
  }, [scene])

  return null
}

/* -------------------- Scene Manager -------------------- */
function SceneManager({ isReducedMotion }: { isReducedMotion: boolean }) {
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
      <BackgroundImage />
      
      {/* 3D Glowing Sparkles - Always visible */}
      <ThreeDGlowingSparkles />
      
      <Sparkles
        ref={sparklesRef}
        count={100}
        scale={[40, 25, 40]}
        size={4}
        speed={0.5}
        color="#ffd700"
        opacity={1}
        position={[0, 0, 0]}
      />
      
      <Sparkles
        count={60}
        scale={[35, 20, 35]}
        size={2}
        speed={0.3}
        color="#ffffff"
        opacity={0.6}
        position={[0, 5, 0]}
      />

      <CameraController />
    </>
  )
}

/* -------------------- Camera Controller -------------------- */
function CameraController() {
  const { camera } = useThree()
  
  useFrame(() => {
    camera.position.lerp(new THREE.Vector3(0, 3, 10), 0.05)
    camera.lookAt(0, 2, 0)
  })

  return null
}

/* -------------------- Main Scene -------------------- */
export default function ContactScene({ isReducedMotion }: ContactSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 3, 10], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
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
        <Bloom intensity={0.4} luminanceThreshold={0.7} />
        <Vignette eskil={false} offset={0.1} darkness={0.4} />
      </EffectComposer>
    </Canvas>
  )
}