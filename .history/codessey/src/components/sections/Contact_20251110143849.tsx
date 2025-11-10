'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import './styles/contact.css';

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

  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: '', email: '', message: '', queryMessage: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again later.');
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

            <div className="form-field">
              <label htmlFor="queryMessage" className="form-label">
                Query Message
              </label>
              <textarea
                id="queryMessage"
                name="queryMessage"
                value={formData.queryMessage}
                onChange={handleChange}
                required
                rows={6}
                className="form-textarea"
                placeholder="Ask your query..."
              />
            </div>

            <button type="submit" className="submit-button">
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
