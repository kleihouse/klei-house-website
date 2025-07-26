'use client'

import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-orange-50">
      <div className="container-max-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-lg text-amber-800 mb-6">
                Where Creativity
                <span className="block text-amber-600">
                  Comes to Life
                </span>
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p className="body-md">
                  At Klei House, we believe that everyone has a creative spark waiting to be ignited. 
                  Our thoughtfully designed workshop space provides the perfect environment for 
                  artistic expression and personal growth.
                </p>
                
                <p className="body-md">
                  Founded on the principles of mindful creation and sustainable practices, 
                  we offer a sanctuary where modern life slows down, and hands reconnect 
                  with the ancient art of clay work.
                </p>
                
                <p className="body-md">
                  Whether you&apos;re a complete beginner or an experienced artist, our welcoming 
                  community and expert guidance will help you discover the therapeutic joy 
                  of working with your hands.
                </p>
              </div>
            </div>
            
            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="heading-sm text-amber-700">
                  Expert Guidance
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn from experienced ceramic artists and pottery masters
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="heading-sm text-amber-700">
                  Premium Materials
                </h3>
                <p className="text-gray-600 text-sm">
                  Work with high-quality clays and glazes sourced responsibly
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="heading-sm text-amber-700">
                  Inspiring Space
                </h3>
                <p className="text-gray-600 text-sm">
                  Create in a beautiful, light-filled studio designed for creativity
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="heading-sm text-amber-700">
                  Community Focus
                </h3>
                <p className="text-gray-600 text-sm">
                  Join a supportive community of fellow artists and makers
                </p>
              </div>
            </div>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-96 lg:h-[600px]">
            <div className="space-y-4">
              <div className="image-container h-2/3">
                <Image
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Pottery wheel in action with skilled hands shaping clay"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="image-container h-1/3">
                <Image
                  src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Beautiful ceramic pieces created by workshop participants"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="image-container h-1/3">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Natural materials and tools used in ceramic workshops"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="image-container h-2/3">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Bright, welcoming workshop space with natural lighting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 