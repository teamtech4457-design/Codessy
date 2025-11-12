'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import './Portfolio.css'

interface PortfolioProps {
  onVisible: () => void
}

const portfolioItems = [
  {
    title: 'Divine Brand Identity',
    description: 'Complete brand overhaul for a spiritual wellness platform',
    image: '/api/placeholder/400/300',
    category: 'Branding'
  },
  {
    title: 'E-commerce Experience',
    description: 'Modern online store with immersive shopping experience',
    image: '/api/placeholder/400/300',
    category: 'Development'
  },
  {
    title: 'Digital Campaign',
    description: 'Viral marketing campaign reaching millions globally',
    image: '/api/placeholder/400/300',
    category: 'Marketing'
  },
  {
    title: 'Mobile Application',
    description: 'Award-winning mobile app for mindful living',
    image: '/api/placeholder/400/300',
    category: 'Development'
  },
  {
    title: 'Luxury Hotel Website',
    description: 'Premium booking experience for luxury hospitality brand',
    image: '/api/placeholder/400/300',
    category: 'Development'
  },
  {
    title: 'Product Packaging',
    description: 'Sustainable packaging design for organic skincare line',
    image: '/api/placeholder/400/300',
    category: 'Design'
  }
]

export default function Portfolio({ onVisible }: PortfolioProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      onVisible()
    }
  }, [isInView, onVisible])

  return (
    <section
      id="portfolio"
      ref={ref}
      className="portfolio-section"
    >
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            Our Creations
          </h2>
          <p className="portfolio-subtitle">
            Discover the magic we've created for visionary brands and innovative businesses worldwide
          </p>
        </div>

        <div className="portfolio-filter">
          <button className="filter-btn active">All Work</button>
          <button className="filter-btn">Branding</button>
          <button className="filter-btn">Development</button>
          <button className="filter-btn">Marketing</button>
          <button className="filter-btn">Design</button>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="portfolio-item"
              data-category={item.category.toLowerCase()}
            >
              <div className="portfolio-image-container">
                <div className="portfolio-image-placeholder">
                  <span className="image-title">{item.title}</span>
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <span className="portfolio-category">
                      {item.category}
                    </span>
                    <p className="portfolio-description">{item.description}</p>
                    <button className="portfolio-view-btn">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-item-title">
                  {item.title}
                </h3>
                <p className="portfolio-item-description">
                  {item.description}
                </p>
                <div className="portfolio-meta">
                  <span className="portfolio-date">2024</span>
                  <span className="portfolio-category-tag">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p className="cta-text">Ready to create something extraordinary together?</p>
          <button className="cta-button">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}