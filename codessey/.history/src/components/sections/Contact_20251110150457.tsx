'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import './contact.css';

interface ContactProps {
  onVisible: () => void;
}

export default function Contact({ onVisible }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    queryMessage: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', queryMessage: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to start your digital journey? Let's create something amazing together.
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="status-message success">
            Thank you for your message! We'll get back to you soon. A confirmation email has been sent to your inbox.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="status-message error">
            Failed to send message. Please try again later or contact us directly at shuklamanya99@gmail.com
          </div>
        )}

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <div>
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-description">
                We're here to help you bring your vision to life. Reach out and let's discuss how we
                can create something extraordinary together.
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
                disabled={isLoading}
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
                disabled={isLoading}
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
                rows={4}
                className="form-textarea"
                placeholder="Tell us about your project..."
                disabled={isLoading}
              />
            </div>

            <div className="form-field">
              <label htmlFor="queryMessage" className="form-label">
                Query Message (Optional)
              </label>
              <textarea
                id="queryMessage"
                name="queryMessage"
                value={formData.queryMessage}
                onChange={handleChange}
                rows={4}
                className="form-textarea"
                placeholder="Any specific questions or queries..."
                disabled={isLoading}
              />
            </div>

            <button 
              type="submit" 
              className={submit-button ${isLoading ? 'loading' : ''}}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}