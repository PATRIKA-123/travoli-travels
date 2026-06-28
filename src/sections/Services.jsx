import { motion } from 'framer-motion';
import { services } from '../data/siteContent'; 
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  return (
    // Yahan maine background mein ek light gray diya hai jo premium lagta hai
    // aur sath mein upar-niche thoda soft border effect diya hai
    <section id="services" className="py-24 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-[1500px] mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center font-heading"
        >
          Our Services
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="w-full"
            >
              {/* Card container mein hum thoda transition aur shadow add kar rahe hain */}
              <div className="h-full bg-white rounded-2xl p-1 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  image={service.image}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}