import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'

const AboutSection = () => {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div className="about-text">
          <h2>Where creativity<br />comes to life</h2>
          <p>
            At Klei House, we believe in the power of simplicity. Our minimal approach 
            to pottery and ceramics creates space for authentic expression.
          </p>
          <p>
            Founded on principles of mindful creation, we offer a sanctuary where 
            modern life slows down and hands reconnect with ancient craft.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      title: "Beginner's Foundation",
      description: "Introduction to clay work and basic wheel throwing techniques.",
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Advanced Techniques", 
      description: "Complex glazing methods and sculptural approaches.",
      duration: "4 hours",
      image: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Mindful Making",
      description: "Therapeutic pottery focusing on meditation and mindfulness.",
      duration: "2.5 hours", 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
        <form className="contact-form">
          <input type="text" placeholder="Name" className="contact-input" />
          <input type="email" placeholder="Email" className="contact-input" />
          <textarea placeholder="Message" className="contact-textarea"></textarea>
          <button type="submit" className="contact-submit">Send Message</button>
        </form>
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
