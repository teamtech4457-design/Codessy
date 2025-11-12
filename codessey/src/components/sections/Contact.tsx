'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Send, Mail, MapPin, Phone } from 'lucide-react'
import './contact.css'

const ContactScene = dynamic(() => import('@/components/canvas/ContactScene'), { ssr: false })

interface ContactProps {
  onVisible: () => void
}

export default function Contact({ onVisible }: ContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isInView) {
      onVisible()
      if (ref.current) {
        (ref.current as HTMLElement).classList.add('in-view')
      }
    }
  }, [isInView, onVisible])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', formData)
      alert('Thank you for your message! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Submission error:', error)
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="contact-section"
    >
      {/* Background Canvas Container */}
      <div className="contact-canvas-container">
        <ContactScene isReducedMotion={false} />
      </div>
      
      {/* Contact Content */}
      <div className="contact-container">
        <h2 className="contact-title">
          Get In Touch
        </h2>
        
        <p className="contact-subtitle">
          Ready to start your digital journey? Let&apos;s create something amazing together.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">
              Let&apos;s Connect
            </h3>
            <p className="contact-info-description">
              We&apos;re here to help you bring your vision to life. Reach out and let&apos;s 
              discuss how we can create something extraordinary together.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon-container">
                  <Mail className="contact-icon" size={24} />
                </div>
                <div>
                  <p className="contact-detail-label">Email</p>
                  <p className="contact-detail-value">shuklamanya99@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-container">
                  <Phone className="contact-icon" size={24} />
                </div>
                <div>
                  <p className="contact-detail-label">Phone</p>
                  <p className="contact-detail-value">+91 80055 86588</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-container">
                  <MapPin className="contact-icon" size={24} />
                </div>
                <div>
                  <p className="contact-detail-label">Location</p>
                  <p className="contact-detail-value">Digital Everywhere</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-field">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="form-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="form-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows={6}
                className="form-textarea"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              <Send size={20} />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}