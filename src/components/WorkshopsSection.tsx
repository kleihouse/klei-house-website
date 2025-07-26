'use client'

import Image from 'next/image'

const WorkshopsSection = () => {
  const workshops = [
    {
      id: 1,
      title: "Beginner&apos;s Pottery",
      description: "Perfect for those new to clay work. Learn basic wheel throwing techniques and hand-building methods in a supportive environment.",
      duration: "3 hours",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Wheel throwing basics", "Hand-building techniques", "Glazing introduction", "Take home your creations"]
    },
    {
      id: 2,
      title: "Advanced Ceramics",
      description: "Develop your skills with complex techniques, advanced glazing methods, and sculptural approaches to ceramic art.",
      duration: "4 hours",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Complex throwing techniques", "Advanced glazing", "Sculptural methods", "Kiln firing techniques"]
    },
    {
      id: 3,
      title: "Kids Creative Clay",
      description: "A fun, safe introduction to pottery for children aged 6-12. Let their imagination run wild while learning basic clay techniques.",
      duration: "2 hours",
      level: "Kids (6-12)",
      image: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Age-appropriate techniques", "Safe, non-toxic materials", "Creative expression focus", "Parent participation welcome"]
    },
    {
      id: 4,
      title: "Mindful Making",
      description: "Combine meditation and mindfulness with clay work. A therapeutic workshop focusing on the meditative aspects of ceramic art.",
      duration: "2.5 hours",
      level: "All levels",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Mindfulness techniques", "Stress relief focus", "Therapeutic approach", "Small group setting"]
    },
    {
      id: 5,
      title: "Couples Workshop",
      description: "Create together in this romantic workshop designed for couples. Make matching pieces while enjoying quality time together.",
      duration: "3.5 hours",
      level: "All levels",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Couples activities", "Romantic atmosphere", "Collaborative projects", "Wine and snacks included"]
    },
    {
      id: 6,
      title: "Corporate Team Building",
      description: "Strengthen team bonds through creative collaboration. Perfect for corporate groups looking for unique team-building experiences.",
      duration: "4 hours",
      level: "All levels",
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Team building focus", "Group projects", "Leadership activities", "Catering available"]
    }
  ]

  return (
    <section id="workshops" className="section-padding bg-white">
      <div className="container-max-width">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-amber-800 mb-6">
            Our Creative
            <span className="block text-amber-600">
              Workshops
            </span>
          </h2>
          <p className="body-lg text-gray-700">
            Choose from our diverse range of workshops designed to inspire creativity, 
            build skills, and connect you with the therapeutic art of ceramics.
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div 
              key={workshop.id} 
              className="bg-orange-50 rounded-2xl overflow-hidden card-hover group"
            >
              {/* Workshop Image */}
              <div className="image-container h-48">
                <Image
                  src={workshop.image}
                  alt={`${workshop.title} workshop at Klei House showing participants creating ceramic art`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              {/* Workshop Content */}
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="heading-sm text-amber-800">
                      {workshop.title}
                    </h3>
                    <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                      {workshop.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Duration: {workshop.duration}
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {workshop.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-amber-700">
                    What you&apos;ll learn:
                  </h4>
                  <ul className="space-y-1">
                    {workshop.features.map((feature, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center">
                        <svg 
                          className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <button className="w-full mt-4 btn-primary text-sm py-2">
                  Book This Workshop
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12">
            <h3 className="heading-md text-amber-800 mb-4">
              Can&apos;t find what you&apos;re looking for?
            </h3>
            <p className="body-md text-gray-700 mb-6 max-w-2xl mx-auto">
              We offer custom workshops tailored to your specific needs and interests. 
              Whether it&apos;s a private session or a specialized technique, we&apos;re here to help.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
              aria-label="Contact us for custom workshop inquiries"
            >
              Contact Us for Custom Workshops
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkshopsSection 