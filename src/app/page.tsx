import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'

const AboutSection = () => {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div className="about-text">
          <h2>Where creativity<br />comes to life</h2>
          <p>
            At Klei House, we embrace the beauty of mindful craftsmanship. From air-dry clay and Turkish mosaic lamps to traditional rug weaving, our workshops celebrate the art of slowing down and creating with intention.
          </p>
          <p>
            Rooted in simplicity and authenticity, we provide a sanctuary where modern life pauses, and hands reconnect with ancient traditions.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="/general.jpeg"
            alt="Minimal pottery workspace"
          />
        </div>
      </div>
    </section>
  )
}

const WorkshopsSection = () => {
  const workshops = [
    {
      title: "Clay",
      description: "An introduction to working with air-dry clay. Learn basic hand-building techniques to create your own sculptural or functional pieces.",
      duration: "2 hours",
      image: "/beginner.jpeg"
    },
    {
      title: "Turkish Mosaic Lamp", 
      description: "Explore the vibrant art of mosaic lamp making. Create your own glowing piece using hand-cut glass tiles and traditional patterns inspired by Turkish design.",
      duration: "2 hours",
      image: "/mozaik.jpeg"
    },
    {
      title: "Rug Weaving",
      description: "Discover the basics of traditional rug weaving. Learn how to set up a loom and weave your own small textile piece using colorful yarns and simple patterns.",
      duration: "2 hours", 
      image: "/rug.jpeg"
    }
  ]

  return (
    <section id="workshops" className="section">
      <h2 className="section-title">Workshops</h2>
      <div className="workshops-grid">
        {workshops.map((workshop, index) => (
          <div key={index} className="workshop-card">
            <div className="workshop-image">
              <img src={workshop.image} alt={workshop.title} />
            </div>
            <div className="workshop-content">
              <h3 className="workshop-title">{workshop.title}</h3>
              <p className="workshop-description">{workshop.description}</p>
              <div className="workshop-duration">{workshop.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const ContactSection = () => {
  return (
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
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        © 2024 Klei House. All rights reserved.
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkshopsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
