'use client'

import dynamic from 'next/dynamic'
import type { FC } from 'react'

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false })
const MeadowScene = dynamic(() => import('./MeadowScene'), { ssr: false })
const AboutScene = dynamic(() => import('./AboutScene'), { ssr: false })
const PortfolioScene = dynamic<{ isReducedMotion: boolean }>(
  () => import('@/components/canvas/PortfolioScene'),
  { ssr: false }
) as FC<{ isReducedMotion: boolean }>
const ContactScene = dynamic(() => import('./ContactScene'), { ssr: false })

interface CanvasContainerProps {
  activeSection: string
  isReducedMotion: boolean
}

export default function CanvasContainer({ activeSection, isReducedMotion }: CanvasContainerProps) {
  const getSceneComponent = () => {
    switch (activeSection) {
      case 'hero':
        return <HeroScene isReducedMotion={isReducedMotion} />
      case 'services':
        return <MeadowScene isReducedMotion={isReducedMotion} />
      case 'portfolio':
        return <PortfolioScene isReducedMotion={isReducedMotion} />
      case 'about':
        return <AboutScene isReducedMotion={isReducedMotion} />
           case 'contact':
        return <ContactScene isReducedMotion={isReducedMotion} />
      default:
        return <HeroScene isReducedMotion={isReducedMotion} />
    }
  }

  return (
    <div className="canvas-container">
      {getSceneComponent()}
    </div>
  )
}