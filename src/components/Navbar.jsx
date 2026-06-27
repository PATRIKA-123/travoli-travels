import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brand } from '../data/siteContent';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

function TraveliLogo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2"/>
      <path d="M20 8 C14 14 14 26 20 32 C26 26 26 14 20 8Z" fill="white" fillOpacity="0.65"/>
      <path d="M8 20 C14 14 26 14 32 20 C26 26 14 26 8 20Z" fill="white" fillOpacity="0.65"/>
      <circle cx="20" cy="20" r="3.5" fill="white"/>
      <circle cx="7" cy="20" r="2" fill="white" fillOpacity="0.8"/>
      <circle cx="33" cy="20" r="2" fill="white" fillOpacity="0.8"/>
      <circle cx="20" cy="7" r="2" fill="white" fillOpacity="0.8"/>
      <circle cx="20" cy="33" r="2" fill="white" fillOpacity="0.8"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(sections[i]);
          return;
        }
      }
      setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3" aria-label="Travoli home">
            <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
              <TraveliLogo />
            </div>
            <span
              className={`font-heading text-2xl tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-teal-700' : 'text-white'
              }`}
            >
              {brand.name}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium font-body tracking-wide group transition-colors duration-200 ${
                    scrolled
                      ? isActive ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'
                      : isActive ? 'text-teal-300' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-teal-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold font-body tracking-wide uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${
                scrolled
                  ? 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-teal-600/30'
                  : 'bg-white/15 text-white border border-white/30 hover:bg-white hover:text-teal-700 backdrop-blur-sm'
              }`}
            >
              Get Quote
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className={`block w-5 h-0.5 bg-current mb-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span className="block w-5 h-0.5 bg-current" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-b border-slate-100 shadow-lg overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-700 font-medium font-body py-3 px-3 hover:bg-teal-50 hover:text-teal-700 transition-colors border-b border-slate-50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 btn-primary justify-center"
              >
                Get a Free Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}