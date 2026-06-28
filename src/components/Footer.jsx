import { brand, contactInfo, services } from '../data/siteContent';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

function LogoMark() {
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

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-white" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5" aria-label="Travoli home">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                <LogoMark />
              </div>
              <span className="font-heading text-xl text-white">{brand.name}</span>
            </a>
            <p className="text-teal-300/70 text-sm font-body leading-relaxed mb-5">
              Trusted travel partner for holiday packages, international flights, and forex services.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 text-teal-300/70 hover:text-white text-sm font-body transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {contactInfo.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal-300/70 hover:text-white text-sm font-body transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <p className="flex items-center gap-2 text-teal-300/50 text-sm font-body">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {brand.location}
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-400 font-body mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-teal-300/70 hover:text-white text-sm font-body transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-teal-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-400 font-body mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-teal-300/70 hover:text-white text-sm font-body transition-colors relative group"
                  >
                    {s.title}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-teal-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-400 font-body mb-5">Business Hours</h4>
            <p className="text-teal-300/70 text-sm font-body mb-2">{contactInfo.hours}</p>
            <p className="text-teal-300/40 text-xs font-body">Sunday: Closed</p>
            <div className="mt-6 p-4 border border-teal-800 bg-teal-900/40">
              <p className="text-teal-300/80 text-xs font-body leading-relaxed">
                For urgent travel needs, WhatsApp us anytime. We monitor messages round-the-clock.
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-teal-900/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-teal-300/40 text-xs font-body">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved. Based in {brand.location}.
          </p>
          <p className="text-teal-300/30 text-xs font-body">
            Holiday Packages &middot; International Flights &middot; Forex Services
          </p>
        </div>
      </div>
    </footer>
  );
}
