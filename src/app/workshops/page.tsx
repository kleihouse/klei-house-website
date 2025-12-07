'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

interface Workshop {
  id: number
  title: string
  date: string
  time: string
  duration: string
  description: string
  image: string
  spots: number
  price: string
  category: 'clay' | 'mosaic' | 'weaving'
}

const workshops: Workshop[] = [
  {
    id: 1,
    title: "Beginner's Clay Workshop",
    date: "2026-01-20",
    time: "14:00",
    duration: "3 hours",
    description: "Learn the fundamentals of working with clay. Create your first ceramic piece in our welcoming studio environment.",
    image: "/beginner.jpeg",
    spots: 8,
    price: "$85",
    category: "clay"
  },
  {
    id: 2,
    title: "Mosaic Art Creation",
    date: "2026-01-25", 
    time: "10:00",
    duration: "4 hours",
    description: "Design and create stunning mosaic artwork using traditional and contemporary techniques.",
    image: "/mozaik.jpeg",
    spots: 6,
    price: "$95",
    category: "mosaic"
  },
  {
    id: 3,
    title: "Traditional Weaving",
    date: "2026-02-01",
    time: "13:00", 
    duration: "5 hours",
    description: "Discover the ancient art of weaving. Create beautiful textiles using traditional looms and techniques.",
    image: "/rug.jpeg",
    spots: 5,
    price: "$120",
    category: "weaving"
  },
  {
    id: 4,
    title: "Advanced Clay Sculpting",
    date: "2026-02-08",
    time: "11:00",
    duration: "6 hours", 
    description: "Take your clay skills to the next level with advanced sculpting techniques and glazing methods.",
    image: "/general.jpeg",
    spots: 4,
    price: "$150",
    category: "clay"
  },
  {
    id: 5,
    title: "Mosaic Tile Workshop",
    date: "2026-02-15",
    time: "15:00",
    duration: "3 hours",
    description: "Focus on small-scale mosaic work perfect for home decoration and personal projects.",
    image: "/mozaik.jpeg", 
    spots: 10,
    price: "$75",
    category: "mosaic"
  },
  {
    id: 6,
    title: "Contemporary Weaving",
    date: "2026-02-22",
    time: "12:00",
    duration: "4 hours",
    description: "Explore modern weaving techniques and create contemporary textile art pieces.",
    image: "/rug.jpeg",
    spots: 6,
    price: "$110",
    category: "weaving"
  }
]

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric', 
    month: 'long',
    day: 'numeric'
  })
}

const getCategoryColor = (category: Workshop['category']) => {
  switch (category) {
    case 'clay': return 'rgba(167, 101, 83, 0.1)'
    case 'mosaic': return 'rgba(83, 167, 101, 0.1)'
    case 'weaving': return 'rgba(101, 83, 167, 0.1)'
  }
}

const getCategoryBorder = (category: Workshop['category']) => {
  switch (category) {
    case 'clay': return 'rgba(167, 101, 83, 0.3)'
    case 'mosaic': return 'rgba(83, 167, 101, 0.3)'
    case 'weaving': return 'rgba(101, 83, 167, 0.3)'
  }
}

export default function WorkshopsPage() {
  return (
    <div>
      <Navigation />
      
      <main style={{ paddingTop: '100px' }}>
        <div className="section">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h1 className="section-title">Upcoming Workshops</h1>
            <p className="section-subtitle">
              Join our hands-on creative workshops and learn traditional crafts in a modern, inspiring environment.
              All skill levels welcome.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {workshops.map((workshop) => (
              <div
                key={workshop.id}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  position: 'relative',
                  aspectRatio: '16/9',
                  background: '#f5f5f5',
                  overflow: 'hidden'
                }}>
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  />
                  

                </div>

                <div style={{ 
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '16px'
                  }}>
                    <h3 style={{
                      fontSize: '22px',
                      fontWeight: '300',
                      color: '#2d2d2d',
                      margin: '0',
                      letterSpacing: '-0.01em'
                    }}>
                      {workshop.title}
                    </h3>
                    
                    <div style={{
                      fontSize: '18px',
                      fontWeight: '500',
                      color: '#a76553'
                    }}>
                      {workshop.price}
                    </div>
                  </div>

                  <div style={{
                    fontSize: '14px',
                    color: '#666',
                    marginBottom: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}>
                    <div style={{ fontWeight: '500' }}>
                      {formatDate(workshop.date)}
                    </div>
                    <div>
                      {workshop.time} • {workshop.duration}
                    </div>
                  </div>

                  <p style={{
                    fontSize: '15px',
                    color: '#666',
                    lineHeight: '1.6',
                    margin: '0 0 24px 0',
                    fontWeight: '300',
                    flexGrow: 1
                  }}>
                    {workshop.description}
                  </p>



                  <div
                    style={{
                      display: 'block',
                      width: '100%',
                      background: '#cccccc',
                      color: '#666666',
                      textAlign: 'center',
                      padding: '16px',
                      borderRadius: '8px',
                      fontSize: '15px',
                      fontWeight: '500',
                      border: 'none',
                      cursor: 'not-allowed'
                    }}
                  >
                    Coming Soon
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </main>
      
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

      <Footer />
    </div>
  )
} 