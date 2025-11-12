'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import CanvasContainer from '@/components/canvas/CanvasContainer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleReduceMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleReduceMotionChange)
    return () => mediaQuery.removeEventListener('change', handleReduceMotionChange)
  }, [])

  return (
    <main className="relative">
      <CanvasContainer activeSection={activeSection} isReducedMotion={isReducedMotion} />
      <div className="content-overlay">
        <Navbar activeSection={activeSection} />
        <Hero onVisible={() => setActiveSection('hero')} />
        <Services onVisible={() => setActiveSection('services')} />
        <Portfolio onVisible={() => setActiveSection('portfolio')} />
        <About onVisible={() => setActiveSection('about')} />
        <Contact onVisible={() => setActiveSection('contact')} />
        <Footer />
      </div>
    </main>
  )
}