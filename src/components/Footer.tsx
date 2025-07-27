'use client'

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-white">
      <div className="container-max-width">
        <div className="py-12 border-b border-amber-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-2xl font-light mb-4">
                Klei House
              </h3>
              <p className="text-amber-100 leading-relaxed mb-6 max-w-md">
                A creative sanctuary where art meets mindfulness. Join our community 
                of makers and discover the therapeutic joy of working with clay.
              </p>
              
              {/* Social Links */}
              <div className="flex">
                <a 
                  href="https://instagram.com/kleihousenyc" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.017 2.17c3.291 0 3.683.014 4.984.072 1.299.059 2.005.276 2.476.458.623.242 1.067.532 1.533.998.466.466.756.91.998 1.533.182.471.399 1.177.458 2.476.058 1.301.072 1.693.072 4.984s-.014 3.683-.072 4.984c-.059 1.299-.276 2.005-.458 2.476-.242.623-.532 1.067-.998 1.533-.466.466-.91.756-1.533.998-.471.182-1.177.399-2.476.458-1.301.058-1.693.072-4.984.072s-3.683-.014-4.984-.072c-1.299-.059-2.005-.276-2.476-.458-.623-.242-1.067-.532-1.533-.998-.466-.466-.756-.91-.998-1.533-.182-.471-.399-1.177-.458-2.476C2.184 15.7 2.17 15.308 2.17 12.017s.014-3.683.072-4.984c.059-1.299.276-2.005.458-2.476.242-.623.532-1.067.998-1.533.466-.466.91-.756 1.533-.998.471-.182 1.177-.399 2.476-.458C8.334 2.184 8.726 2.17 12.017 2.17m0-2.17C8.64 0 8.216.015 6.877.075 5.54.134 4.688.335 3.946.63c-.789.306-1.459.717-2.126 1.384C1.153 2.681.742 3.351.436 4.14.141 4.882-.06 5.734.075 7.071.015 8.216 0 8.64 0 12.017s.015 3.801.075 5.14c.059 1.337.26 2.189.555 2.931.306.789.717 1.459 1.384 2.126.667.667 1.337 1.078 2.126 1.384.742.295 1.594.496 2.931.555C8.216 23.985 8.64 24 12.017 24s3.801-.015 5.14-.075c1.337-.059 2.189-.26 2.931-.555.789-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.337 1.384-2.126.295-.742.496-1.594.555-2.931.06-1.339.075-1.763.075-5.14s-.015-3.801-.075-5.14c-.059-1.337-.26-2.189-.555-2.931-.306-.789-.717-1.459-1.384-2.126C19.063 1.347 18.393.936 17.604.63 16.862.335 16.01.134 14.673.075 13.334.015 12.91 0 12.017 0z" clipRule="evenodd"/>
                    <path fillRule="evenodd" d="M12.017 5.838c-3.403 0-6.179 2.776-6.179 6.179s2.776 6.179 6.179 6.179 6.179-2.776 6.179-6.179-2.776-6.179-6.179-6.179zm0 10.188c-2.209 0-4.009-1.8-4.009-4.009s1.8-4.009 4.009-4.009 4.009 1.8 4.009 4.009-1.8 4.009-4.009 4.009z" clipRule="evenodd"/>
                    <circle cx="18.406" cy="5.594" r="1.44"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-amber-100">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('workshops')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Our Workshops
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Gift Certificates
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-medium mb-4">Get in Touch</h4>
              <div className="space-y-2 text-amber-100 text-sm">
                <p>123 Creative Arts Lane</p>
                <p>San Francisco, CA 94102</p>
                <p className="mt-3">
                  <a href="tel:+1-555-123-4567" className="hover:text-white transition-colors duration-200">
                    +1 (555) 123-4567
                  </a>
                </p>
                <p>
                  <a href="mailto:hello@kleihouse.com" className="hover:text-white transition-colors duration-200">
                    hello@kleihouse.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-amber-200">
          <p>
            © {new Date().getFullYear()} Klei House. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 