import { motion } from 'framer-motion';
import { services, contactInfo } from '../data/siteContent';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const getWhatsAppLink = (title) => {
    const message = `Hi, I am interested in ${title}. Please share details.`;
    return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-[1500px] mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center font-heading"
        >
          Our Services
        </motion.h2>
        
        {/* Added motion.div to create a smooth staggered appearance for your cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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
              <ServiceCard
                title={service.title}
                image={service.image}
                whatsappLink={getWhatsAppLink(service.title)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}