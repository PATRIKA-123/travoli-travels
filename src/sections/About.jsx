import { motion } from 'framer-motion';
import { about } from '../data/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { ref, isInView } = useScrollReveal(0.15);

  return (
    <section id="about" aria-label="About Travoli" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CHANGED: Switched to grid-cols-12 to perfectly proportion the layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Image Block (Spans 5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm group">
              <img
                src={about.image}
                alt="Travoli team helping customers plan their journey"
                loading="lazy"
                className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-slate-900/5 pointer-events-none" />
            </div>
            
            {/* Cleaner, rounded-xl 500+ stats badge */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-xl shadow-xl p-5 hidden sm:block min-w-[160px]">
              <p className="font-heading text-4xl font-black text-slate-900 leading-none">500+</p>
              <p className="text-slate-500 text-[10px] font-mono uppercase tracking-wider mt-2">Holidays Crafted</p>
            </div>
          </motion.div>

          {/* Right Side: Text Block (Spans 7 Columns) */}
          <div
            ref={ref}
            className={`lg:col-span-7 lg:pl-6 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="font-mono text-xs tracking-widest uppercase text-teal-600 font-semibold block mb-2">
              Our Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-6 text-balance">
              {about.headline}
            </h2>

            {/* FIXED: max-w-xl stops text lines from stretching all the way across desktop monitors */}
            <div className="space-y-4 max-w-xl">
              {about.body.map((para, i) => (
                <p 
                  key={i} 
                  className="text-slate-500 font-body text-[15px] leading-relaxed tracking-wide text-pretty"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Cleaned up Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-10 max-w-xl">
              {about.values.map((v) => (
                <div
                  key={v.label}
                  className="flex items-center gap-3.5 p-4 bg-slate-50/40 border border-slate-100 rounded-xl transition-all duration-300 hover:bg-slate-50 hover:border-teal-500/30"
                >
                  <span className="text-xl flex-shrink-0" aria-hidden="true">{v.icon}</span>
                  <span className="text-slate-800 font-body text-sm font-semibold tracking-tight">{v.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#contact" className="btn-primary inline-flex">
                Talk to Our Team
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}