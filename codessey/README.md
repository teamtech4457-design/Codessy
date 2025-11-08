# Codessey Frontend

A modern, interactive portfolio website built with Next.js, featuring immersive 3D experiences powered by Three.js. The site showcases digital design and development services with smooth animations and responsive design.

## 🚀 Tech Stack

### Core Framework
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript** - Type-safe JavaScript

### 3D Graphics & Animation
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **@react-three/postprocessing** - Post-processing effects
- **Framer Motion** - Animation library for React
- **GSAP** - High-performance animation library

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📁 Folder Structure

```
codessey/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Home page (single-page app)
│   │   ├── globals.css        # Global styles
│   │   ├── error.tsx          # Error boundary
│   │   ├── loading.tsx        # Loading component
│   │   └── not-found.tsx      # 404 page
│   ├── components/
│   │   ├── canvas/            # Three.js 3D scene components
│   │   │   ├── CanvasContainer.tsx    # Main canvas wrapper
│   │   │   ├── HeroScene.tsx          # Hero section 3D scene
│   │   │   ├── MeadowScene.tsx        # Services section scene
│   │   │   ├── PortfolioScene.tsx     # Portfolio section scene
│   │   │   ├── AboutScene.tsx         # About section scene
│   │   │   └── ContactScene.tsx       # Contact section scene
│   │   ├── sections/          # Main content sections
│   │   │   ├── Hero.tsx       # Hero/landing section
│   │   │   ├── Services.tsx   # Services offered
│   │   │   ├── Portfolio.tsx  # Portfolio showcase
│   │   │   ├── About.tsx      # About the creator
│   │   │   ├── Contact.tsx    # Contact form
│   │   │   └── Footer.tsx     # Site footer
│   │   └── ui/                # Reusable UI components
│   │       └── Navbar.tsx     # Navigation component
│   ├── hooks/                 # Custom React hooks
│   │   └── useScrollAnimation.ts  # Scroll-based animations
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts           # Main type exports
│   └── utils/                 # Utility functions and constants
│       └── constants.ts       # App-wide constants
├── public/                    # Static assets
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.*         # Tailwind CSS config
└── tsconfig.json             # TypeScript configuration
```

## 📄 Pages & Sections

### Single-Page Application Structure

The website is built as a single-page application with smooth scrolling navigation between sections:

#### 🏠 Hero Section
- **Purpose**: Landing section with compelling introduction
- **Features**: Animated text, call-to-action buttons
- **3D Scene**: Prison cell environment with atmospheric lighting
- **Animation**: GSAP-powered text animations and scroll triggers

#### 💼 Services Section
- **Purpose**: Showcase digital services offered
- **Features**: Service cards with icons and descriptions
- **3D Scene**: Peaceful meadow environment with floating elements
- **Content**: Branding, Design, Development, Marketing services

#### 🎨 Portfolio Section
- **Purpose**: Display creative work and projects
- **Features**: Filterable project grid, modal details
- **3D Scene**: Interactive portfolio showcase environment
- **Animation**: Smooth transitions and hover effects

#### 👤 About Section
- **Purpose**: Personal introduction and background
- **Features**: Biography, skills, experience timeline
- **3D Scene**: Reflective environment representing personal growth
- **Animation**: Scroll-triggered reveals and animations

#### 📬 Contact Section
- **Purpose**: Contact form and information
- **Features**: Form validation, social links, location info
- **3D Scene**: Communication-themed interactive environment
- **Integration**: Connected to backend API for form submissions

#### 🔗 Footer
- **Purpose**: Site navigation and additional links
- **Features**: Quick links, social media, copyright info

## 🎭 TypeScript Types

```typescript
// Section visibility callback
interface SectionProps {
  onVisible: () => void
}

// Canvas scene configuration
interface CanvasSceneProps {
  isReducedMotion: boolean
}

// Portfolio project structure
interface PortfolioItem {
  title: string
  description: string
  image: string
  category: string
}

// Service offering structure
interface Service {
  icon: string
  title: string
  description: string
}

// Contact form data
interface FormData {
  name: string
  email: string
  message: string
}
```

## 🎨 Three.js Integration

### Architecture
The application uses **React Three Fiber** as the React renderer for Three.js, providing a declarative way to build 3D scenes.

### Scene Management
- **CanvasContainer**: Main wrapper that dynamically loads appropriate scenes based on active section
- **Dynamic Imports**: Scenes are lazy-loaded to optimize bundle size
- **SSR Disabled**: 3D scenes are client-side only for performance

### Scene Features
- **Hero Scene**: Atmospheric prison cell with stone walls and lighting effects
- **Meadow Scene**: Peaceful nature environment with floating particles
- **Portfolio Scene**: Interactive project showcase with dynamic lighting
- **About Scene**: Reflective surfaces and geometric elements
- **Contact Scene**: Communication-themed 3D elements

### Performance Optimizations
- **Reduced Motion Support**: Respects user accessibility preferences
- **Dynamic Quality**: Adjusts particle density based on performance
- **Post-processing Effects**: Bloom, vignette, and other effects using @react-three/postprocessing

### Animation System
- **Framer Motion**: UI component animations
- **GSAP**: Complex 3D object animations and scroll triggers
- **React Three Fiber Hooks**: useFrame for continuous animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/teamtech4457-design/Codessy.git
   cd codessey
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Reduced motion support and semantic HTML
- **Performance**: Optimized bundle splitting and lazy loading
- **Modern Stack**: Latest versions of React, Next.js, and TypeScript
- **3D Immersion**: Rich Three.js experiences synchronized with content
- **Smooth Animations**: Combination of Framer Motion and GSAP
- **SEO Ready**: Proper meta tags and semantic structure

## 🔧 Configuration

- **Next.js Config**: `next.config.ts` - Custom Next.js settings
- **Tailwind Config**: Tailwind CSS v4 configuration
- **ESLint Config**: `eslint.config.mjs` - Code quality rules
- **TypeScript Config**: `tsconfig.json` - Type checking settings

## 📦 Dependencies Overview

### Production
- **@react-three/fiber**: React Three.js renderer
- **@react-three/drei**: Three.js helpers and abstractions
- **@react-three/postprocessing**: 3D post-processing effects
- **framer-motion**: Animation library
- **gsap**: Professional animation library
- **lucide-react**: Icon library
- **three**: 3D graphics library

### Development
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling framework
- **ESLint**: Code linting
- **PostCSS**: CSS processing

---

**Created by**: Manya Shukla
**Inspired by**: Stories, powered by design & technology
