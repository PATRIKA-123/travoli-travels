import { motion } from 'framer-motion';
import { hero, contactInfo } from '../data/siteContent';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* 1. Enhanced Background with Ken Burns Effect */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
          className="w-full h-full"
        >
          <img
            src={hero.backgroundImage}
            alt="Scenic travel destination"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/90 via-teal-900/80 to-slate-900/75 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      </div>

      {/* Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-teal-400/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-teal-400/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-3 text-teal-300 text-xs font-semibold tracking-[0.25em] uppercase font-body mb-6">
              <span className="w-10 h-px bg-teal-400" />
               Your Travel Partner
            </span>
          </motion.div>

          {/* 2. Editorial Typography */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-heading text-5xl sm:text-6xl xl:text-8xl text-white leading-[0.95] mb-8 tracking-tight"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="text-white/70 text-lg md:text-xl font-body leading-relaxed max-w-xl mb-10"
          >
            {hero.subheadline}
          </motion.p>

          {/* 3. Enhanced Interactive Buttons */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-16">
            <a href={hero.cta1.href} className="btn-primary hover:shadow-[0_0_20px_rgba(13,148,136,0.4)]">
              {hero.cta1.label}
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 font-semibold font-body text-sm tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-teal-900 hover:border-white hover:-translate-y-0.5 active:translate-y-0"
            >
              WhatsApp Us
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-12 border-t border-white/10 pt-10">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl text-white">{stat.value}</p>
                <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-body mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}