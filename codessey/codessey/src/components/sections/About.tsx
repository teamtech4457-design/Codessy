'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import dynamic from 'next/dynamic'
import './about.css'

const AboutScene = dynamic(() => import('@/components/canvas/AboutScene'), { ssr: false })

interface AboutProps {
  onVisible: () => void
}

export default function About({ onVisible }: AboutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      onVisible()
  
      if (ref.current) {
        (ref.current as HTMLElement).classList.add('in-view')
      }
    }
  }, [isInView, onVisible])

  return (
    <section
      id="about"
      ref={ref}
      className="about-section"
    >
      {/* Background Canvas Container */}
      <div className="about-canvas-container">
        <AboutScene isReducedMotion={false} />
      </div>
      
      {/* About Content */}
      <div className="about-container">
        <h2 className="about-title">
          Our Story
        </h2>
        
        <div className="about-content">
          <p className="about-text">
            Just as Krishna enchanted hearts with his flute, we aim to create campaigns that 
            resonate with people. Creativity, strategy, and empathy drive our work. We believe 
            in the power of storytelling to connect brands with their audiences in meaningful ways.
          </p>
          
          <p className="about-text">
            Our journey began with a simple vision: to blend ancient wisdom with modern technology, 
            creating digital experiences that not only look beautiful but also touch the soul.
          </p>
          
          <button className="about-button">
            Know More
          </button>
        </div>
      </div>
    </section>
  )
}