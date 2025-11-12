'use client'

import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react'
import './footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            {/* Brand */}
            <div className="footer-brand">
              <h3 className="footer-brand-text">
                Codessey
              </h3>
              <p className="footer-brand-description">
                Crafting divine digital experiences inspired by timeless stories and powered by modern technology.
              </p>
            </div>

            {/* Social Links */}
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  <social.icon 
                    size={20} 
                    className="footer-social-icon" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            {/* Copyright */}
            <div className="footer-copyright">
              <span>© {currentYear} Codessey. Made with</span>
              <Heart size={16} className="footer-heart" />
              <span>& creativity by MANYA SHUKLA.</span>
            </div>

            {/* Footer Links */}
            <div className="footer-links">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="footer-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}