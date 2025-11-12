export interface SectionProps {
  onVisible: () => void
}

export interface CanvasSceneProps {
  isReducedMotion: boolean
}

export interface PortfolioItem {
  title: string
  description: string
  image: string
  category: string
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface FormData {
  name: string
  email: string
  message: string
}