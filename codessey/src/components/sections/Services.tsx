'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import './Services.css'

interface ServicesProps {
  onVisible: () => void
}

const services = [
  {
    icon: '🪷',
    title: 'Branding & Design',
    description: 'Create memorable brand identities that resonate with your audience and stand the test of time.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Packaging Design']
  },
  {
    icon: '🎨',
    title: 'Creative Development',
    description: 'Transform ideas into stunning digital experiences with cutting-edge technology and innovative design.',
    features: ['Web Development', 'Mobile Apps', 'E-commerce', 'UI/UX Design']
  },
  {
    icon: '💡',
    title: 'Strategy & Growth',
    description: 'Data-driven strategies that drive growth, engagement, and meaningful connections with your customers.',
    features: ['Digital Strategy', 'SEO Optimization', 'Content Marketing', 'Analytics']
  },
  {
    icon: '🚀',
    title: 'Digital Marketing',
    description: 'Amplify your brand presence with targeted campaigns that convert and engage your ideal audience.',
    features: ['Social Media', 'PPC Advertising', 'Email Marketing', 'Conversion Optimization']
  },
  {
    icon: '📱',
    title: 'Mobile Solutions',
    description: 'Build powerful mobile experiences that keep your users engaged and coming back for more.',
    features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization']
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Scale your infrastructure with robust cloud solutions and efficient development workflows.',
    features: ['Cloud Architecture', 'CI/CD Pipelines', 'Serverless Computing', 'Infrastructure as Code']
  }
]

export default function Services({ onVisible }: ServicesProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      onVisible()
    }
  }, [isInView, onVisible])

  return (
    <section
      id="services"
      ref={ref}
      className="services-section"
    >
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            Our Services
          </h2>
          <p className="services-subtitle">
            From concept to execution, we deliver excellence in every project with precision and passion
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card"
              data-index={index}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">
                {service.title}
              </h3>
              <p className="service-description">
                {service.description}
              </p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={feature} className="service-feature">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-actions">
                <button className="service-learn-more">
                  Learn More
                </button>
                <button className="service-cta">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-footer">
          <div className="services-cta">
            <h3 className="cta-title">Ready to Transform Your Digital Presence?</h3>
            <p className="cta-description">
              Let's collaborate to create something extraordinary that drives results and exceeds expectations.
            </p>
            <div className="cta-actions">
              <button className="cta-primary">
                Start Your Project
              </button>
              <button className="cta-secondary">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}