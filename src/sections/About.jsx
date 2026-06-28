import { motion } from 'framer-motion';
import { about } from '../data/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';

const valueColors = [
  { bg: 'bg-teal-600', shadow: 'shadow-teal-600/30' },
  { bg: 'bg-emerald-600', shadow: 'shadow-emerald-600/30' },
  { bg: 'bg-cyan-600', shadow: 'shadow-cyan-600/30' },
  { bg: 'bg-teal-700', shadow: 'shadow-teal-700/30' },
];

const stats = [
  { value: '500+', label: 'Holidays Crafted' },
  { value: '40+', label: 'Countries Covered' },
  { value: '98%', label: 'Happy Travellers' },
];

export default function About() {
  const { ref, isInView } = useScrollReveal(0.15);

  return (
    <section id="about" aria-label="About Travoli" className="py-24 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-teal-50/40 to-emerald-50/30" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #99f6e4 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Soft glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative border frame */}
            <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-teal-300/40 pointer-events-none" />

            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-teal-900/20 group">
              <img
                src={about.image}
                alt="Travoli team helping customers plan their journey"
                loading="lazy"
                className="w-full h-[280px] sm:h-[380px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Teal gradient wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-teal-950/10 to-transparent" />

              {/* Stats inside image */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex justify-between">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-heading text-2xl lg:text-3xl text-white font-bold">{s.value}</p>
                    <p className="text-white/50 text-[9px] tracking-widest uppercase font-body mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Text ── */}
          <div
            ref={ref}
            className={`lg:col-span-7 lg:pl-6 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold tracking-[0.2em] uppercase font-body mb-3">
              <span className="w-6 h-px bg-teal-500" />
              Our Story
            </span>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              {about.headline}
            </h2>

            <div className="space-y-4 max-w-xl">
              {about.body.map((para, i) => (
                <p key={i} className="text-slate-500 font-body text-[15px] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10 max-w-xl">
              {about.values.map((v, i) => {
                const c = valueColors[i % valueColors.length];
                return (
                  <motion.div
                    key={v.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-xl ${c.bg} shadow-lg ${c.shadow} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-lg" aria-hidden="true">{v.icon}</span>
                    </div>
                    <span className="font-body text-sm font-semibold text-slate-700">{v.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <a href="#contact" className="btn-primary">
                Talk to Our Team
              </a>
              
              <a
                href="https://wa.me/917977905092"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm font-body hover:text-teal-700 transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center group-hover:bg-teal-100 transition-colors shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </span>
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}