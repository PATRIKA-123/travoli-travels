import { motion } from 'framer-motion';
import { testimonials } from '../data/siteContent';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-slate-300'}`}
          fill="currentColor" viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const cardStyles = [
  { border: 'border-teal-200', bg: 'bg-gradient-to-br from-teal-50 to-white', avatar: 'bg-teal-600', quote: 'text-teal-600', trip: 'text-teal-700 bg-teal-50 border-teal-200' },
  { border: 'border-emerald-200', bg: 'bg-gradient-to-br from-emerald-50 to-white', avatar: 'bg-emerald-600', quote: 'text-emerald-600', trip: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  { border: 'border-cyan-200', bg: 'bg-gradient-to-br from-cyan-50 to-white', avatar: 'bg-cyan-600', quote: 'text-cyan-600', trip: 'text-cyan-700 bg-cyan-50 border-cyan-200' },
  { border: 'border-teal-200', bg: 'bg-gradient-to-br from-teal-50/60 to-white', avatar: 'bg-teal-700', quote: 'text-teal-700', trip: 'text-teal-700 bg-teal-50 border-teal-200' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">

      {/* Dark teal background — matches Hero + CTA */}
      {/* Change this line: */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-950 to-teal-900" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal-300 text-xs font-semibold tracking-[0.2em] uppercase font-body mb-4">
            <span className="w-6 h-px bg-teal-400" />
            Client Stories
            <span className="w-6 h-px bg-teal-400" />
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white">What Our Clients Say</h2>
          <p className="text-teal-300/70 font-body mt-4 text-sm">
            Real stories from travellers who've trusted Travoli.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials?.map((t, i) => {
            const style = cardStyles[i % cardStyles.length];
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-6 rounded-2xl border ${style.bg} ${style.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                {/* Decorative quote mark */}
                <span className={`absolute top-4 right-5 font-heading text-6xl leading-none ${style.quote} opacity-10 select-none group-hover:opacity-20 transition-opacity`}>
                  "
                </span>

                <StarRating rating={t.rating || 5} />

                <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 mb-5 relative z-10">
                  "{t.text}"
                </blockquote>

                {/* Trip badge */}
                {t.trip && (
                  <span className={`inline-block text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4 border w-fit ${style.trip}`}>
                    {t.trip}
                  </span>
                )}

                <div className="h-px bg-slate-100 mb-4" />

                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${style.avatar} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md`}>
                    {t.name?.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center border-t border-teal-800 pt-12"
        >
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '5★', label: 'Average Rating' },
            { value: '40+', label: 'Countries' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-heading text-3xl text-white">{s.value}</p>
              <p className="text-teal-300/60 text-[10px] tracking-widest uppercase font-body mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}