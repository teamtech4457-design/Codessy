'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Sparkles, Float } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'

interface MeadowSceneProps {
  isReducedMotion: boolean
}

export default function MeadowScene({ isReducedMotion }: MeadowSceneProps) {
  return (
    <Canvas
      camera={{ position: [5, 3, 5], fov: 50 }}
      style={{ background: 'linear-gradient(to bottom, #065f46, #1e3a8a)' }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} color="#86efac" />
      <pointLight position={[0, 3, 0]} intensity={0.3} color="#bef264" />

     
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[20, 20, 32, 32]} />
        <meshStandardMaterial color="#166534" roughness={0.8} />
      </mesh>


      {[-5, 5, -8, 8].map((x, index) => (
        <group key={index}>

          <mesh position={[x, 0, -index * 2]}>
            <cylinderGeometry args={[0.3, 0.4, 3, 8]} />
            <meshStandardMaterial color="#7c2d12" roughness={0.9} />
          </mesh>
  
          <mesh position={[x, 2, -index * 2]}>
            <sphereGeometry args={[1.5, 16, 16]} />
            <meshStandardMaterial color="#166534" roughness={0.7} />
          </mesh>
        </group>
      ))}

   
      <Float
        speed={isReducedMotion ? 0 : 2}
        rotationIntensity={isReducedMotion ? 0 : 1}
        floatIntensity={isReducedMotion ? 0 : 0.5}
      >
        <mesh position={[0, 2, 0]} rotation={[0, Math.PI / 4, Math.PI / 6]}>
          <cylinderGeometry args={[0.05, 0.05, 3, 8]} />
          <meshStandardMaterial 
            color="#fbbf24" 
            emissive="#f59e0b"
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>


      <Sparkles
        count={isReducedMotion ? 30 : 80}
        scale={15}
        size={1.5}
        speed={isReducedMotion ? 0.2 : 1}
        color="#fef3c7"
      />

      <Environment preset="park" />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 6}
        autoRotate={!isReducedMotion}
        autoRotateSpeed={0.3}
      />

      <EffectComposer>
        <Bloom intensity={0.3} luminanceThreshold={0.7} />
        <Vignette eskil={false} offset={0.1} darkness={0.6} />
      </EffectComposer>
    </Canvas>
  )
}