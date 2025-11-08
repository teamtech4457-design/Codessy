export const SCENE_CONFIG = {
  particleDensity: {
    high: 100,
    medium: 50,
    low: 20
  },
  animationSpeed: {
    normal: 1,
    reduced: 0.1
  },
  colors: {
    gold: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    }
  }
} as const

export const NAV_ITEMS = [
  { name: 'Hero', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
] as const

export const SERVICES = [
  {
    icon: '🪷',
    title: 'Branding & Design',
    description: 'Create memorable brand identities that resonate with your audience and stand the test of time.'
  },
  {
    icon: '🎨',
    title: 'Creative Development',
    description: 'Transform ideas into stunning digital experiences with cutting-edge technology and innovative design.'
  },
  {
    icon: '💡',
    title: 'Strategy & Growth',
    description: 'Data-driven strategies that drive growth, engagement, and meaningful connections with your customers.'
  }
] as const