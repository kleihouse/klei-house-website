'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <div>
      <Navigation />
      
      <main style={{ paddingTop: '100px' }}>
        {/* Hero Section */}
        <div className="section">
          <div className="about-hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {/* Text Content */}
            <div className="about-text" style={{
              maxWidth: '600px'
            }}>

              
              <div style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.8',
                fontWeight: '300'
              }}>
                <p style={{ marginBottom: '24px' }}>
                  I've never been an instructor — and that's never been the point.
                </p>
                
                <p style={{ marginBottom: '24px' }}>
                  What I've always loved is people. Bringing them together. Watching strangers turn into friends over a shared table. Hearing stories from different cultures, places, and journeys.
                </p>
                
                <p style={{ marginBottom: '24px' }}>
                  I grew up surrounded by diversity — by the colors, textures, and traditions of the places I was born into, traveled to, and called home. Each of them left a mark on me. Over the years, I realized that my happiest moments were always in spaces where people gathered to create, share, and simply be.
                </p>
                
                <p style={{ marginBottom: '24px' }}>
                  Together with my husband, we built Klei House as a way to turn that love into something tangible. It's not just about clay, mosaic, or weaving — it's about slowing down in a fast city. It's about putting your phone aside, sitting at a long table with warm light, and making something with your own hands. It's about seeing the beauty in imperfection and letting the process matter more than the result.
                </p>
                
                <p style={{ marginBottom: '24px' }}>
                  Here, there are no expectations. No pressure. Whether you come with friends, family, or by yourself, you leave with more than what you made — you leave with moments, conversations, and a little piece of yourself shaped into something tangible.
                </p>
                
                <p style={{ marginBottom: '24px' }}>
                  This is our way of gathering people — not just in the same room, but in the same moment.
                </p>
                
                <p style={{ 
                  marginBottom: '32px',
                  fontSize: '18px',
                  fontWeight: '400'
                }}>
                  Welcome to Klei House.
                </p>
                
                <p style={{
                  fontSize: '16px',
                  fontStyle: 'italic',
                  color: '#a76553',
                  fontWeight: '400'
                }}>
                  — Sezen
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="about-image" style={{
              position: 'relative',
              aspectRatio: '3/4',
              background: '#f5f5f5',
              overflow: 'hidden',
              borderRadius: '12px'
            }}>
              <img
                src="/aboutus.jpg"
                alt="Sezen at Klei House"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              />
            </div>
          </div>
        </div>



        {/* Contact Section */}
        <section id="contact" className="section contact">
          <div className="contact-grid">
            <div>
              <h2 className="contact-title">Get in touch</h2>
              <p className="contact-text">
                Ready to begin your creative journey? Reach out to learn more about 
                our workshops or book a session.
              </p>
            </div>
            <div className="text-center space-y-4">
              <p className="contact-text mb-4">Contact us:</p>
              <a 
                href="mailto:contact@kleihouse.com" 
                className="contact-email-button"
              >
                contact@kleihouse.com
              </a>
              
              <div className="flex justify-center mt-4">
                <a 
                  href="https://instagram.com/kleihousenyc" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.017 2.17c3.291 0 3.683.014 4.984.072 1.299.059 2.005.276 2.476.458.623.242 1.067.532 1.533.998.466.466.756.91.998 1.533.182.471.399 1.177.458 2.476.058 1.301.072 1.693.072 4.984s-.014 3.683-.072 4.984c-.059 1.299-.276 2.005-.458 2.476-.242.623-.532 1.067-.998 1.533-.466.466-.91.756-1.533.998-.471.182-1.177.399-2.476.458-1.301.058-1.693.072-4.984.072s-3.683-.014-4.984-.072c-1.299-.059-2.005-.276-2.476-.458-.623-.242-1.067-.532-1.533-.998-.466-.466-.756-.91-.998-1.533-.182-.471-.399-1.177-.458-2.476C2.184 15.7 2.17 15.308 2.17 12.017s.014-3.683.072-4.984c.059-1.299.276-2.005.458-2.476.242-.623.532-1.067.998-1.533.466-.466.91-.756 1.533-.998.471-.182 1.177-.399 2.476-.458C8.334 2.184 8.726 2.17 12.017 2.17m0-2.17C8.64 0 8.216.015 6.877.075 5.54.134 4.688.335 3.946.63c-.789.306-1.459.717-2.126 1.384C1.153 2.681.742 3.351.436 4.14.141 4.882-.06 5.734.075 7.071.015 8.216 0 8.64 0 12.017s.015 3.801.075 5.14c.059 1.337.26 2.189.555 2.931.306.789.717 1.459 1.384 2.126.667.667 1.337 1.078 2.126 1.384.742.295 1.594.496 2.931.555C8.216 23.985 8.64 24 12.017 24s3.801-.015 5.14-.075c1.337-.059 2.189-.26 2.931-.555.789-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.337 1.384-2.126.295-.742.496-1.594.555-2.931.06-1.339.075-1.763.075-5.14s-.015-3.801-.075-5.14c-.059-1.337-.26-2.189-.555-2.931-.306-.789-.717-1.459-1.384-2.126C19.063 1.347 18.393.936 17.604.63 16.862.335 16.01.134 14.673.075 13.334.015 12.91 0 12.017 0z" clipRule="evenodd"/>
                    <path fillRule="evenodd" d="M12.017 5.838c-3.403 0-6.179 2.776-6.179 6.179s2.776 6.179 6.179 6.179 6.179-2.776 6.179-6.179-2.776-6.179-6.179-6.179zm0 10.188c-2.209 0-4.009-1.8-4.009-4.009s1.8-4.009 4.009-4.009 4.009 1.8 4.009 4.009-1.8 4.009-4.009 4.009z" clipRule="evenodd"/>
                    <circle cx="18.406" cy="5.594" r="1.44"/>
                  </svg>
                  <span className="font-medium">@kleihousenyc</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 