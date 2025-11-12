'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import dynamic from 'next/dynamic'
import './Hero.css'

const HeroScene = dynamic(() => import('@/components/canvas/HeroScene'), { ssr: false })

interface HeroProps {
  onVisible: () => void
}

export default function Hero({ onVisible }: HeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      onVisible()
    }
  }, [isInView, onVisible])

  return (
    <section
      id="hero"
      ref={ref}
      className="hero-section"
    >
      <div className="hero-canvas-container">
        <HeroScene isReducedMotion={false} />
      </div>
      
      <div className="hero-container">
        <h1 className="hero-title">
          Crafting{' '}
          <span className="hero-highlight">
            Divine
          </span>{' '}
          Digital Experiences
        </h1>
        
        <p className="hero-subtitle">
          We are a full-service digital agency creating stunning websites, 
          powerful applications, and unforgettable brand experiences that 
          drive results and elevate your digital presence.
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
        
        <div className="hero-actions">
          <button className="hero-btn primary">
            Start Your Project
          </button>
          <button className="hero-btn secondary">
            View Our Work
          </button>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  )
}