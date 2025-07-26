'use client'

import { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <nav className={`nav ${!isScrolled ? 'nav-transparent' : ''}`}>
      <div className="nav-container">
        <button 
          onClick={() => scrollToSection('hero')}
          className="nav-logo"
        >
          <img
            src="/logoblack.svg"
            alt="Klei House"
            className="nav-logo-img mobile-logo-big"
          />
        </button>
        
        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection('workshops')} className="nav-link">
            Workshops
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-menu">
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('workshops')} className="mobile-nav-link">
              Workshops
            </button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation 