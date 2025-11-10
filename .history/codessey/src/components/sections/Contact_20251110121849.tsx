'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Send, Mail, MapPin, Phone, Calendar } from 'lucide-react'
import './contact.css'

interface ContactProps {
  onVisible: () => void
}

export default function Contact({ onVisible }: ContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    queryType: '',
    appointmentDate: ''
  })

  useEffect(() => {
    if (isInView) {
      onVisible()
    }
  }, [isInView, onVisible])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      message: '',
      queryType: '',
      appointmentDate: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to start your digital journey? Let&apos;s create something amazing together.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <div>
              <h3 className="contact-info-title">Let&apos;s Connect</h3>
              <p className="contact-info-description">
                We&apos;re here to help you bring your vision to life. Reach out and let&apos;s
                discuss how we can create something extraordinary together.
              </p>
            </div>

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

          {/* Contact Form */}
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
                rows={6}
                className="form-textarea"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* New Query Type Section */}
            <div className="form-field">
              <label htmlFor="queryType" className="form-label">
                Query Type
              </label>
              <select
                id="queryType"
                name="queryType"
                value={formData.queryType}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select your query</option>
                <option value="general">General Inquiry</option>
                <option value="project">Project Discussion</option>
                <option value="support">Technical Support</option>
                <option value="collaboration">Collaboration / Partnership</option>
              </select>
            </div>

            {/* Appointment Schedule Section */}
            <div className="form-field">
              <label htmlFor="appointmentDate" className="form-label">
                Schedule an Appointment (optional)
              </label>
              <div className="appointment-container">
                <input
                  type="datetime-local"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  className="form-input"
                />
                <Calendar className="calendar-icon" size={20} />
              </div>
            </div>

            <button type="submit" className="submit-button">
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
