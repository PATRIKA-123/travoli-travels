import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D', label: 'Maldives', tag: 'Honeymoon' },
  { src: 'https://images.pexels.com/photos/258136/pexels-photo-258136.jpeg', label: 'Europe', tag: 'Cultural' },
  { src: 'https://images.pexels.com/photos/1707310/pexels-photo-1707310.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Dubai', tag: 'City Break' },
  { src: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Bali', tag: 'Beaches' },
  { src: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1600', label: 'Switzerland', tag: 'Mountains' },
  { src: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Paris', tag: 'Romance' },
  { src: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Thailand', tag: 'Adventure' },
  { src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Japan', tag: 'Cultural' },
];

function GalleryCard({ img, onClick }) {
  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl cursor-pointer group"
      onClick={() => onClick(img)}
    >
      <img
        src={img.src}
        alt={img.label}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
      <span className="absolute top-3 left-3 bg-white text-slate-800 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm z-10">
        {img.tag}
      </span>
      <div className="absolute bottom-3 left-3 z-10">
        <p className="text-white/70 text-[11px] flex items-center gap-1 mb-0.5">
          <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Explore
        </p>
        <p className="text-white font-bold text-xl leading-tight">{img.label}</p>
      </div>
    </div>
  );
}

function AspectBox({ ratio = 66, children }) {
  return (
    <div className="relative w-full" style={{ paddingBottom: `${ratio}%` }}>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="section-label mb-3">Where Will You Go Next</p>
          <h2 className="section-title">The World Is Waiting</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            From sun-kissed beaches to snow-capped peaks — wherever you dream of going, Travoli will take you there.
          </p>
        </motion.div>
      </div>

      <div className="px-3 sm:px-4">
        <div className="flex flex-col gap-3 sm:hidden">
          {galleryImages.map((img, i) => (
            <AspectBox key={i} ratio={60}>
              <GalleryCard img={img} onClick={setLightbox} />
            </AspectBox>
          ))}
        </div>

        <div className="hidden sm:grid lg:hidden gap-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {galleryImages.map((img, i) => (
            <AspectBox key={i} ratio={65}>
              <GalleryCard img={img} onClick={setLightbox} />
            </AspectBox>
          ))}
        </div>

        <div className="hidden lg:flex flex-col gap-3">
          <div className="grid gap-3" style={{ gridTemplateColumns: '2fr 1fr' }}>
            <AspectBox ratio={52}>
              <GalleryCard img={galleryImages[0]} onClick={setLightbox} />
            </AspectBox>
            <div className="flex flex-col gap-3">
              <AspectBox ratio={52}>
                <GalleryCard img={galleryImages[1]} onClick={setLightbox} />
              </AspectBox>
              <div className="grid grid-cols-2 gap-3">
                <AspectBox ratio={80}>
                  <GalleryCard img={galleryImages[2]} onClick={setLightbox} />
                </AspectBox>
                <AspectBox ratio={80}>
                  <GalleryCard img={galleryImages[3]} onClick={setLightbox} />
                </AspectBox>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[galleryImages[6], galleryImages[5], galleryImages[4], galleryImages[7]].map((img, i) => (
              <AspectBox key={i} ratio={65}>
                <GalleryCard img={img} onClick={setLightbox} />
              </AspectBox>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary inline-block">Plan My Trip</a>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
            style={{ backgroundColor: 'rgba(13, 27, 42, 0.92)', backdropFilter: 'blur(8px)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.label}
                className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="flex items-center justify-between mt-4 px-1 flex-wrap gap-3">
                <div>
                  <span className="text-teal-300 text-[10px] tracking-widest uppercase">{lightbox.tag}</span>
                  <p className="text-white font-bold text-2xl">{lightbox.label}</p>
                </div>
                <a
                  href="#contact"
                  className="btn-primary inline-block text-xs"
                  onClick={() => setLightbox(null)}
                >
                  Plan This Trip
                </a>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}