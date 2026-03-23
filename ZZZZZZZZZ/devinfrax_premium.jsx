import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Send, Building2, TrendingUp, Award, Users } from 'lucide-react';

export default function DevInfraXPremium() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '', subject: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: '', email: '', phone: '', message: '', subject: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-slate-950 shadow-lg border-b border-orange-500'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <div className={`${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
                <h1 className="text-2xl font-bold">DevInfraX</h1>
                <p className="text-xs font-semibold text-orange-500">Building Strong Foundations</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className={`hidden md:flex gap-8 ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
              {['Home', 'About', 'Services', 'Portfolio', 'Investors', 'Careers', 'Contact'].map((item) => (
                <button key={item} className="text-sm font-medium hover:text-orange-500 transition">
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 bg-white dark:bg-slate-800 rounded-b-lg shadow-lg space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Investors', 'Careers', 'Contact'].map((item) => (
                <button
                  key={item}
                  className="block w-full text-left px-4 py-2 text-slate-900 dark:text-white hover:bg-orange-50 dark:hover:bg-slate-700 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block mb-6 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
                <p className="text-orange-500 text-sm font-semibold">Leading Infrastructure Provider</p>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Building India's
                <span className="text-orange-500"> Strong Foundation</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Premium stone crushing, aggregate processing, and construction materials for India's most critical infrastructure projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition transform hover:scale-105">
                  Get in Touch <ChevronRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 font-semibold rounded-lg transition">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { number: '20+', label: 'Years Experience' },
                  { number: '1000+', label: 'Satisfied Clients' },
                  { number: '50K+', label: 'Tons Processed' },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-3xl font-bold text-orange-500">{stat.number}</p>
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl transform -skew-y-3 opacity-20"></div>
              <div className="relative h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building2 className="w-16 h-16 text-white opacity-60" />
                  </div>
                  <p className="text-white text-sm font-semibold">Premium Quality Materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/20 rounded-2xl p-12 h-96 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-24 h-24 text-orange-500 mx-auto mb-4 opacity-50" />
                  <p className="text-slate-600 dark:text-slate-300 font-semibold">Sustainable Growth</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">About DevInfraX</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                DevInfraX Private Limited is India's leading provider of quality stone crushing, screening, and construction materials. Based in Jiregaon, Daund, Maharashtra, we supply premium aggregates for major infrastructure projects.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                With state-of-the-art crushing and screening equipment, ISO certifications, and a commitment to environmental responsibility, we deliver consistent quality that meets international standards.
              </p>

              <div className="space-y-4">
                {[
                  'ISO 9001:2015 Certified Quality Management',
                  'Modern Crushing & Screening Technology',
                  'Environmental Compliance & Sustainability',
                  'Expert Technical Support Team',
                  '24/7 Operational Availability',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <ChevronRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Our Services</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Comprehensive solutions for infrastructure & construction</p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚙️',
                title: 'Stone Crushing',
                desc: 'High-capacity crushing units producing consistent quality aggregates for all construction needs.',
              },
              {
                icon: '📊',
                title: 'Screening & Grading',
                desc: 'Precise size classification and grading of materials for specific project requirements.',
              },
              {
                icon: '🏗️',
                title: 'Aggregate Supply',
                desc: 'Large-scale supply of crushed stone, sand, and specialty aggregates with guaranteed quality.',
              },
              {
                icon: '🔬',
                title: 'Quality Testing',
                desc: 'Comprehensive testing & certification services meeting international standards.',
              },
              {
                icon: '📦',
                title: 'Logistics',
                desc: 'Reliable transportation and delivery services with fleet management.',
              },
              {
                icon: '👥',
                title: 'Consultation',
                desc: 'Expert advisory services for material selection and project specifications.',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 sm:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Major Projects</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Trusted by India's leading infrastructure builders</p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'National Highway Authority - Phase III', location: 'Maharashtra', materials: '50,000 MT', year: '2024' },
              { title: 'Residential Complex Development', location: 'Daund', materials: '25,000 MT', year: '2023' },
              { title: 'Industrial Foundation Project', location: 'Jiregaon', materials: '35,000 MT', year: '2023' },
              { title: 'Bridge Construction', location: 'Pune Region', materials: '18,000 MT', year: '2022' },
              { title: 'Urban Infrastructure', location: 'Regional', materials: '40,000 MT', year: '2022' },
              { title: 'Railway Foundation Works', location: 'Central India', materials: '30,000 MT', year: '2021' },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-orange-500 to-orange-600 flex items-end p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10">
                    <p className="text-white text-3xl font-bold">{project.year}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{project.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">{project.materials}</span>
                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">Learn More →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 bg-slate-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Quality Assured', desc: 'ISO certified processes' },
              { icon: Users, title: 'Expert Team', desc: '200+ professionals' },
              { icon: TrendingUp, title: 'Growth Focused', desc: 'Expanding capacity' },
              { icon: Building2, title: 'Proven Track', desc: '20+ years experience' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <feature.icon className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Get in Touch</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Ready to discuss your project requirements? Connect with our team for quotations, bulk orders, and technical consultation.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Phone, title: 'Phone', items: ['+91 7773970164', '+91 8527792280'] },
                  { icon: Mail, title: 'Email', items: ['DevInfraX@gmail.com', 'info@devinfrax.com'] },
                  { icon: MapPin, title: 'Location', items: ['Survey no. 273, Jiregaon', 'Tal. Daund, 413802, Maharashtra'] },
                ].map((contact, idx) => (
                  <div key={idx} className="flex gap-4">
                    <contact.icon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white mb-2">{contact.title}</p>
                      {contact.items.map((item, i) => (
                        <p key={i} className="text-slate-600 dark:text-slate-400 text-sm">{item}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full px-5 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-orange-500 transition"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full px-5 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-orange-500 transition"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                className="w-full px-5 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-orange-500 transition"
                required
              />
              <select
                value={contactForm.subject}
                onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                className="w-full px-5 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-orange-500 transition"
              >
                <option value="">Select Inquiry Type</option>
                <option value="quote">Request Quote</option>
                <option value="bulk">Bulk Order</option>
                <option value="consultation">Technical Consultation</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Your Message"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                rows="4"
                className="w-full px-5 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-orange-500 transition resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
              {formSubmitted && (
                <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-sm font-semibold">
                  ✓ Message sent successfully! We'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <span className="text-xl font-bold">DevInfraX</span>
              </div>
              <p className="text-slate-400 text-sm mb-6">Building India's strong foundation since 2005. Premier provider of quality construction materials.</p>
              <div className="flex gap-4">
                {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                  <button key={idx} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {[
              { title: 'Services', links: ['Stone Crushing', 'Screening', 'Aggregates', 'Consultation'] },
              { title: 'Company', links: ['About Us', 'Projects', 'Certifications', 'Sustainability'] },
              { title: 'Support', links: ['Contact', 'FAQs', 'Pricing', 'Terms & Conditions'] },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-lg mb-6">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-slate-400 hover:text-orange-500 transition text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left text-slate-400 text-sm">
              <p>&copy; 2025 DevInfraX Private Limited. All rights reserved.</p>
              <div className="flex gap-6 justify-center md:justify-end">
                <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
                <a href="#" className="hover:text-orange-500 transition">Terms of Service</a>
                <a href="#" className="hover:text-orange-500 transition">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}