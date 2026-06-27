import { motion } from 'framer-motion';
import { contactInfo } from '../data/siteContent';

// YEH RHA FRESH UNSPLASH TRAVEL IMAGE URL
const ctaBackgroundImage =
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop';

export default function CTA() {
  return (
    <section aria-label="Call to action" className="relative py-20 overflow-hidden bg-teal-700">
      {/* BACKGROUND IMAGE & OVERLAY WRAPPER WITH Z-INDEX */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src={ctaBackgroundImage}
          alt="Travel background"
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay" 
        />
        <div className="absolute inset-0 bg-teal-950/80 backdrop-blur-[2px]" />
      </div>

      {/* FLOATING CIRCLES */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-16 -left-16 w-96 h-96 bg-teal-400 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-16 -right-16 w-96 h-96 bg-teal-500 rounded-full blur-3xl z-0"
      />
      
      {/* GRID LINES PATTERN */}
      <div
        className="absolute inset-0 opacity-[0.05] z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* CONTENT BLOCK WITH HIGHER Z-INDEX */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-teal-200 text-xs font-semibold tracking-[0.2em] uppercase font-body mb-4">
            <span className="w-6 h-px bg-teal-300" />
            Ready to Travel?
            <span className="w-6 h-px bg-teal-300" />
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-5 leading-tight">
            Your Next Adventure<br />Starts with a Call
          </h2>
          <p className="text-teal-100/80 font-body text-base md:text-lg max-w-xl mx-auto mb-10">
            Talk to our travel experts today. No obligation, just clarity on how we can make your dream trip a reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-teal-700 px-7 py-3.5 font-semibold font-body text-sm tracking-wide uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 active:translate-y-0"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-7 py-3.5 font-semibold font-body text-sm tracking-wide uppercase transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {contactInfo.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}