'use client'

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-green-50 to-orange-100">
      <div className="container-max-width">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-amber-800 mb-6">
            Get in Touch
            <span className="block text-amber-600">
              Start Your Creative Journey
            </span>
          </h2>
          <p className="body-lg text-gray-700">
            Ready to discover the joy of working with clay? Contact us to book a workshop, 
            ask questions, or learn more about our creative community.
          </p>
        </div>

        {/* Contact Email */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto">
            <h3 className="heading-md text-amber-800 mb-4">
              Contact Us
            </h3>
            <p className="body-md text-gray-700 mb-6">
              Send us an email and we'll get back to you as soon as possible.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://instagram.com/kleihousenyc" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-amber-700 hover:text-amber-800 transition-colors duration-200"
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
      </div>
    </section>
  )
}

export default ContactSection 