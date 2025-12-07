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
        <source src="/xmaskleihouseanimation.mp4" type="video/mp4" />
      </video>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content animate-in">
        <h1 className="hero-title">
          Happy Christmas!
        </h1>
        
        <p className="hero-subtitle">
          Join us for our special Christmas Clay Workshop on Saturday, December 13th!<br />
          7pm to 8pm<br />
          Holiday Treasures, Smith Haven Mall<br />
          Lake Grove, NY
        </p>
        
        <a 
          href="https://luma.com/oonxm56w"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          Get Ticket
        </a>
      </div>
    </section>
  )
}

export default HeroSection 