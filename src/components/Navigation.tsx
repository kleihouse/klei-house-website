'use client'

import { useState } from 'react'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const handleMobileMenuToggle = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('🍔 Hamburger clicked! Current state:', isMobileMenuOpen)
    setIsMobileMenuOpen(!isMobileMenuOpen)
    console.log('🍔 New state will be:', !isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    console.log('🔴 Closing mobile menu')
    setIsMobileMenuOpen(false)
  }

  console.log('🔄 Navigation render - isMobileMenuOpen:', isMobileMenuOpen)

  return (
    <>
      <nav className="nav">
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

          {/* Modern Hamburger Button */}
          <button 
            className="mobile-menu-btn"
            onClick={handleMobileMenuToggle}
            onTouchEnd={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
            type="button"
            style={{
              width: '44px',
              height: '44px',
              background: 'transparent',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1000
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(45, 45, 45, 0.05)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            <div 
              className={`modern-hamburger ${isMobileMenuOpen ? 'open' : ''}`}
              style={{
                width: '20px',
                height: '14px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <span style={{
                display: 'block',
                height: '2px',
                width: '100%',
                background: '#2d2d2d',
                borderRadius: '1px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transformOrigin: 'center',
                transform: isMobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'rotate(0deg) translateY(0)',
                opacity: isMobileMenuOpen ? 1 : 1
              }}></span>
              <span style={{
                display: 'block',
                height: '2px',
                width: '100%',
                background: '#2d2d2d',
                borderRadius: '1px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transformOrigin: 'center',
                transform: isMobileMenuOpen ? 'scaleX(0)' : 'scaleX(1)',
                opacity: isMobileMenuOpen ? 0 : 1
              }}></span>
              <span style={{
                display: 'block',
                height: '2px',
                width: '100%',
                background: '#2d2d2d',
                borderRadius: '1px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transformOrigin: 'center',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'rotate(0deg) translateY(0)',
                opacity: isMobileMenuOpen ? 1 : 1
              }}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Side Drawer */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="mobile-menu-backdrop"
            onClick={closeMobileMenu}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.3)',
              zIndex: 9998,
              animation: 'fadeIn 0.2s ease-out'
            }}
          />
          
          <div 
            className="mobile-menu-drawer"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '280px',
              height: '100vh',
              background: 'white',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              padding: '80px 40px 40px',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.1)',
              animation: 'slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={closeMobileMenu}
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                color: '#666',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '50%',
                transition: 'all 0.2s ease',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)'
                e.currentTarget.style.color = '#2d2d2d'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'none'
                e.currentTarget.style.color = '#666'
              }}
            >
              ×
            </button>

            {/* Navigation Items */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <button 
                onClick={() => scrollToSection('about')} 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: '300',
                  color: '#2d2d2d',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#8B4513'
                  e.currentTarget.style.paddingLeft = '8px'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#2d2d2d'
                  e.currentTarget.style.paddingLeft = '0'
                }}
              >
                About
              </button>
              
              <button 
                onClick={() => scrollToSection('workshops')} 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: '300',
                  color: '#2d2d2d',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#8B4513'
                  e.currentTarget.style.paddingLeft = '8px'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#2d2d2d'
                  e.currentTarget.style.paddingLeft = '0'
                }}
              >
                Workshops
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')} 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: '300',
                  color: '#2d2d2d',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#8B4513'
                  e.currentTarget.style.paddingLeft = '8px'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#2d2d2d'
                  e.currentTarget.style.paddingLeft = '0'
                }}
              >
                Contact
              </button>
            </nav>

            {/* Small Logo at Bottom */}
            <div style={{ 
              marginTop: 'auto',
              textAlign: 'center',
              opacity: '0.3'
            }}>
              <img 
                src="/logoblack.svg" 
                alt="Klei House" 
                style={{
                  width: '80px',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0;
          }
          to { 
            opacity: 1;
          }
        }
        
        @keyframes slideInRight {
          from { 
            transform: translateX(100%);
          }
          to { 
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}

export default Navigation 