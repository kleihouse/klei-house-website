'use client'

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src="/Generated File July 25, 2025 - 2_03PM.mp4" type="video/mp4" />
      </video>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content animate-in">
        <h1 className="hero-title">
          Create<br />Learn<br />Express
        </h1>
        
        <p className="hero-subtitle">
          Discover the beauty of hands-on craft through clay, mosaic, and weaving in our warm, inspiring studio space.
        </p>
        
        <button 
          onClick={() => document.getElementById('workshops')?.scrollIntoView({ behavior: 'smooth' })}
          className="hero-cta"
        >
          Get Ticket
        </button>
      </div>
    </section>
  )
}

export default HeroSection 