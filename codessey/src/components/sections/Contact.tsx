'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone } from 'lucide-react'
import './contact.css'

export default function Contact() {
  const ref = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const formItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="contact-section"
    >
      {/* Background Image */}
      <div className="contact-background"></div>
      
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="contact-title">
            Get In Touch
          </motion.h2>
          <motion.p variants={itemVariants} className="contact-subtitle">
            Ready to start your digital journey? Let&apos;s create something amazing together.
          </motion.p>
        </motion.div>

        <motion.div 
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="contact-info">
            <div>
              <h3 className="contact-info-title">
                Let&apos;s Connect
              </h3>
              <p className="contact-info-description">
                We&apos;re here to help you bring your vision to life. Reach out and let&apos;s 
                discuss how we can create something extraordinary together.
              </p>
            </div>

            <div className="contact-details">
              <motion.div 
                className="contact-detail-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon-container">
                  <Mail className="contact-icon" size={24} />
                </div>
                <div>
                  <p className="contact-detail-label">Email</p>
                  <p className="contact-detail-value">shuklamanya99@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-detail-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon-container">
                  <Phone className="contact-icon" size={24} />
                </div>
                <div>
                  <p className="contact-detail-label">Phone</p>
                  <p className="contact-detail-value">+91 80055 86588</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-detail-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon-container">
                  <MapPin className="contact-icon" size={24} />
                </div>
                <div>
                  <p className="contact-detail-label">Location</p>
                  <p className="contact-detail-value">Digital Everywhere</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="contact-form"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={formItemVariants} className="form-field">
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
            </motion.div>

            <motion.div variants={formItemVariants} className="form-field">
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
            </motion.div>

            <motion.div variants={formItemVariants} className="form-field">
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
            </motion.div>

            <motion.button
              type="submit"
              className="submit-button"
              variants={formItemVariants}
              whileHover={{ 
                scale: isSubmitting ? 1 : 1.05,
                background: isSubmitting 
                  ? "linear-gradient(to right, rgb(180, 143, 86), rgb(161, 98, 7))"
                  : "linear-gradient(to right, rgb(161, 98, 7), rgb(120, 53, 15))"
              }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              disabled={isSubmitting}
            >
              <Send size={20} />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}