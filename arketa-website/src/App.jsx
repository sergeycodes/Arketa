import React, { useState, useEffect } from 'react';
import { Camera, Mail, Phone, MapPin, ChevronRight, X } from 'lucide-react';
import { portfolioItems, contactInfo, companyStats, materials } from './portfolioData';

export default function ArketaWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredPortfolio = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.material === activeFilter);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fallback image handler
  const handleImageError = (e) => {
    e.target.src = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop`;
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }

        .elegant-title {
          font-family: 'Cormorant Garamond', serif;
        }

        .appear-animation {
          animation: appearUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .appear-delay-1 { animation-delay: 0.1s; }
        .appear-delay-2 { animation-delay: 0.2s; }
        .appear-delay-3 { animation-delay: 0.3s; }
        .appear-delay-4 { animation-delay: 0.4s; }

        @keyframes appearUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grain-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" opacity="0.05"/%3E%3C/svg%3E');
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: overlay;
        }

        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .material-texture {
          background: linear-gradient(135deg, rgba(120, 113, 108, 0.05) 0%, rgba(214, 211, 209, 0.05) 100%);
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #78716c;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .image-reveal {
          overflow: hidden;
          position: relative;
        }

        .image-reveal::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
          z-index: 1;
        }

        .image-reveal:hover::before {
          left: 100%;
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #78716c, #d6d3d1) border-box;
          border: 2px solid transparent;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: #78716c;
        }

        .modal-backdrop {
          backdrop-filter: blur(8px);
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <h1 className="elegant-title text-4xl font-bold text-stone-800 tracking-wide">
              ARKETA
            </h1>
            <div className="hidden md:flex gap-10">
              <a href="#home" className="nav-link text-stone-700 font-medium">Home</a>
              <a href="#portfolio" className="nav-link text-stone-700 font-medium">Portfolio</a>
              <a href="#about" className="nav-link text-stone-700 font-medium">About</a>
              <a href="#contact" className="nav-link text-stone-700 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 material-texture pt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="elegant-title text-7xl md:text-8xl font-bold text-stone-800 mb-6 appear-animation">
            Timeless Elegance<br />in Natural Stone
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 mb-12 max-w-3xl mx-auto font-light appear-animation appear-delay-1">
            Crafting exquisite countertops from the finest granite, quartz, quartzite, and marble
          </p>
          <div className="flex gap-6 justify-center appear-animation appear-delay-2">
            <a href="#portfolio" className="px-8 py-4 bg-stone-800 text-white font-medium hover:bg-stone-700 transition-colors duration-300 flex items-center gap-2 shadow-lg">
              View Our Work <ChevronRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-stone-800 text-stone-800 font-medium hover:bg-stone-800 hover:text-white transition-all duration-300">
              Get a Quote
            </a>
          </div>
          
          {/* Floating Material Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 appear-animation appear-delay-3">
            {materials.map((mat, idx) => (
              <div key={mat.tag} className={`bg-white p-6 shadow-lg hover-lift appear-animation appear-delay-${idx + 1}`}>
                <h3 className="elegant-title text-2xl font-semibold text-stone-800 mb-2">{mat.name}</h3>
                <div className="w-16 h-1 bg-stone-800 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="elegant-title text-6xl font-bold text-stone-800 mb-4">Our Portfolio</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Discover the beauty and craftsmanship of our custom stone installations
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                activeFilter === 'all' 
                  ? 'bg-stone-800 text-white shadow-lg' 
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              All Work
            </button>
            {materials.map(mat => (
              <button
                key={mat.tag}
                onClick={() => setActiveFilter(mat.tag)}
                className={`px-6 py-3 font-medium transition-all duration-300 ${
                  activeFilter === mat.tag 
                    ? 'bg-stone-800 text-white shadow-lg' 
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {mat.name}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, idx) => (
              <div 
                key={item.id}
                className="group cursor-pointer hover-lift appear-animation"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="image-reveal overflow-hidden bg-stone-200 aspect-[4/3]">
                  <img 
                    src={item.image}
                    alt={item.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="elegant-title text-2xl font-semibold text-stone-800">{item.title}</h3>
                  <p className="text-stone-600 capitalize mt-1">{item.material}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-stone-800 to-stone-900 text-white material-texture">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="elegant-title text-6xl font-bold mb-6">About Arketa</h2>
              <p className="text-lg text-stone-300 mb-6 leading-relaxed">
                For over two decades, Arketa has been transforming spaces with the timeless beauty of natural stone. Our master craftsmen combine traditional techniques with modern precision to create countertops that are both functional works of art and lasting investments.
              </p>
              <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                We specialize in premium granite, quartz, quartzite, and marble, sourcing only the finest materials from quarries around the world. Each piece is carefully selected, expertly cut, and meticulously installed to exceed our clients' expectations.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="elegant-title text-5xl font-bold text-stone-300 mb-2">
                    {companyStats.yearsExperience}
                  </div>
                  <div className="text-stone-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="elegant-title text-5xl font-bold text-stone-300 mb-2">
                    {companyStats.projectsCompleted}
                  </div>
                  <div className="text-stone-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="elegant-title text-5xl font-bold text-stone-300 mb-2">
                    {companyStats.satisfactionRate}
                  </div>
                  <div className="text-stone-400">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=500&fit=crop&q=80" 
                alt="Craftsmanship" 
                onError={handleImageError}
                className="w-full h-64 object-cover shadow-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=500&fit=crop&q=80" 
                alt="Detail work" 
                onError={handleImageError}
                className="w-full h-64 object-cover shadow-2xl mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1565183928294-7d22f5e0b7be?w=400&h=500&fit=crop&q=80" 
                alt="Finished product" 
                onError={handleImageError}
                className="w-full h-64 object-cover shadow-2xl -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=500&fit=crop&q=80" 
                alt="Stone selection" 
                onError={handleImageError}
                className="w-full h-64 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="elegant-title text-6xl font-bold text-stone-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Ready to transform your space? Contact us for a free consultation and quote
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="gradient-border p-8 bg-white">
              <h3 className="elegant-title text-3xl font-semibold text-stone-800 mb-6">Send us a Message</h3>
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-semibold text-stone-800 mb-2">Thank You!</h4>
                  <p className="text-stone-600">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 border-2 border-stone-200 text-stone-800 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 border-2 border-stone-200 text-stone-800 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 border-2 border-stone-200 text-stone-800 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-stone-200 text-stone-800 transition-colors duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-stone-800 text-white font-medium hover:bg-stone-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message <ChevronRight size={20} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 shadow-lg hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-stone-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-800 mb-2">Phone</h4>
                    <p className="text-stone-600">{contactInfo.phone}</p>
                    <p className="text-stone-500 text-sm mt-1">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 shadow-lg hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-stone-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-800 mb-2">Email</h4>
                    <p className="text-stone-600">{contactInfo.email}</p>
                    <p className="text-stone-500 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 shadow-lg hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-stone-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-800 mb-2">Showroom</h4>
                    <p className="text-stone-600">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                    </p>
                    <p className="text-stone-500 text-sm mt-1">Visit by appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="elegant-title text-4xl font-bold mb-4">ARKETA</h3>
          <p className="text-stone-400 mb-6">Crafting timeless elegance in natural stone</p>
          <div className="flex justify-center gap-8 text-sm text-stone-400">
            <span>© 2026 Arketa. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 modal-backdrop"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-stone-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage.image}
              alt={selectedImage.title}
              onError={handleImageError}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-6 text-white text-center">
              <h3 className="elegant-title text-3xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-stone-300 capitalize">{selectedImage.material}</p>
              {selectedImage.description && (
                <p className="text-stone-400 mt-2">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}