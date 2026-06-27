import { motion } from 'framer-motion';

export default function ServiceCard({ title, image, whatsappLink }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl overflow-hidden shadow-xl w-full h-[400px] cursor-pointer"
    >
      {/* Image with subtle zoom on hover */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Subtle Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-3">
        <h3 className="font-heading font-bold text-2xl text-white">
          {title}
        </h3>
        
        {/* NEW REFINED GLASS BUTTON */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm rounded-full hover:bg-white hover:text-teal-900 transition-all duration-300 group/button"
        >
          <span>Enquire Now</span>
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}