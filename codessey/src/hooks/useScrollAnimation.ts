'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface UseScrollAnimationProps {
  onVisible: () => void
  threshold?: number
}

export function useScrollAnimation({ onVisible, threshold = 0.3 }: UseScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: threshold })

  useEffect(() => {
    if (isInView) {
      onVisible()
    }
  }, [isInView, onVisible])

  return ref
}