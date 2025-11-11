'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Contact from '../sections/Contact'

interface ContactSceneProps {
  isReducedMotion: boolean
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function ContactScene({ isReducedMotion }: ContactSceneProps) {
  const sceneRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Initialize particles
  useEffect(() => {
    if (isReducedMotion) return

    const initialParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.3 + 0.1
    }))
    
    setParticles(initialParticles)
  }, [isReducedMotion])

  // Mouse move effect
  useEffect(() => {
    if (isReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!sceneRef.current) return
      
      const rect = sceneRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isReducedMotion])

  // Particle animation
  useEffect(() => {
    if (isReducedMotion || particles.length === 0) return

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX
        let newY = particle.y + particle.speedY

        // Boundary check with wrap-around
        if (newX > 100) newX = 0
        if (newX < 0) newX = 100
        if (newY > 100) newY = 0
        if (newY < 0) newY = 100

        // Mouse interaction
        const dx = particle.x - mousePosition.x
        const dy = particle.y - mousePosition.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        let adjustedSpeedX = particle.speedX
        let adjustedSpeedY = particle.speedY
        
        if (distance < 20) {
          // Repel from mouse
          const force = (20 - distance) / 20
          adjustedSpeedX += (dx / distance) * force * 0.5
          adjustedSpeedY += (dy / distance) * force * 0.5
        }

        return {
          ...particle,
          x: newX,
          y: newY,
          speedX: adjustedSpeedX,
          speedY: adjustedSpeedY
        }
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [particles, mousePosition, isReducedMotion])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: isReducedMotion ? 0 : 1.2,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const shimmerVariants = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  return (
    <motion.div
      ref={sceneRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="contact-scene relative overflow-hidden"
    >
      {/* Animated Background Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={shimmerVariants}
        animate="animate"
        style={{
          background: `linear-gradient(
            45deg,
            rgba(180, 143, 86, 0.03) 0%,
            rgba(161, 98, 7, 0.05) 25%,
            rgba(120, 53, 15, 0.03) 50%,
            rgba(180, 143, 86, 0.05) 75%,
            rgba(161, 98, 7, 0.03) 100%
          )`,
          backgroundSize: '400% 400%'
        }}
      />

      {/* Floating Particles */}
      {!isReducedMotion && particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, 
              rgba(180, 143, 86, ${particle.opacity}) 0%,
              rgba(180, 143, 86, ${particle.opacity * 0.3}) 70%,
              transparent 100%)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(180, 143, 86, ${particle.opacity * 0.5})`
          }}
          variants={floatingVariants}
          animate="float"
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Floating Orbs */}
      {!isReducedMotion && (
        <>
          <motion.div
            className="absolute w-32 h-32 rounded-full pointer-events-none opacity-10 blur-xl"
            style={{
              background: 'radial-gradient(circle, rgba(180, 143, 86, 0.3) 0%, transparent 70%)',
              top: '20%',
              left: '10%'
            }}
            variants={floatingVariants}
            animate="float"
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-24 h-24 rounded-full pointer-events-none opacity-15 blur-lg"
            style={{
              background: 'radial-gradient(circle, rgba(161, 98, 7, 0.4) 0%, transparent 70%)',
              top: '60%',
              right: '15%'
            }}
            variants={floatingVariants}
            animate="float"
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1 
            }}
          />
          <motion.div
            className="absolute w-20 h-20 rounded-full pointer-events-none opacity-20 blur-md"
            style={{
              background: 'radial-gradient(circle, rgba(120, 53, 15, 0.3) 0%, transparent 70%)',
              bottom: '30%',
              left: '20%'
            }}
            variants={floatingVariants}
            animate="float"
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2 
            }}
          />
        </>
      )}

      {/* Subtle Glow Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          background: `radial-gradient(
            ellipse at center,
            rgba(180, 143, 86, 0.1) 0%,
            rgba(161, 98, 7, 0.05) 30%,
            transparent 70%
          )`
        }}
      />

      <Contact />
    </motion.div>
  )
}