import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactInfo } from '../data/siteContent';

export default function ServiceCard({ id, title, image }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    adults: '',
    children: '',
    departure: '',
    arrival: '',
    email: '',
    phone: ''
  });

  const isHolidayPackage = id === 'holidays';

  const handleAction = (e) => {
    e.preventDefault(); // Prevents default link behavior causing white screens
    
    if (isHolidayPackage) {
      setIsOpen(true);
    } else {
      // Ensure the phone number exists before opening
      const phone = contactInfo?.whatsapp || '';
      const message = `Hi, I am interested in ${title}. Please share details.`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const phone = contactInfo?.whatsapp || '';
    const message = `*Holiday Inquiry: ${title}*%0A
    Name: ${formData.name}%0A
    Destination: ${formData.destination}%0A
    Adults: ${formData.adults}%0A
    Children: ${formData.children}%0A
    Departure: ${formData.departure}%0A
    Arrival: ${formData.arrival}%0A
    Email: ${formData.email}%0A
    Phone: ${formData.phone}`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const inputClass = "w-full bg-white/5 border border-white/10 p-3 text-white rounded-lg focus:outline-none focus:border-teal-400 placeholder-white/30";

  return (
    <>
      <motion.div 
        whileHover={{ y: -8 }} 
        className="group relative rounded-3xl overflow-hidden shadow-xl w-full h-[400px] cursor-pointer"
      >
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-3">
          <h3 className="font-heading font-bold text-2xl text-white">{title}</h3>
          
          <button 
            onClick={handleAction}
            className="relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm rounded-full hover:bg-white hover:text-teal-900 transition-all duration-300"
          >
            Enquire Now
          </button>
        </div>
      </motion.div>

      {/* FIXED: Added z-[100] to ensure it stays above navbar */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }} 
              className="bg-slate-900 border border-white/10 p-8 w-full max-w-lg rounded-2xl shadow-2xl my-auto"
            >
              <h2 className="text-white text-2xl mb-6 font-heading">Plan Your Escape</h2>
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <input required placeholder="Full Name" className={inputClass} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input required placeholder="Destination" className={inputClass} onChange={(e) => setFormData({...formData, destination: e.target.value})} />
                <div className="grid grid-cols-2 gap-4">
                  <input type="number" required placeholder="Adults" className={inputClass} onChange={(e) => setFormData({...formData, adults: e.target.value})} />
                  <input type="number" required placeholder="Children" className={inputClass} onChange={(e) => setFormData({...formData, children: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" required className={inputClass} onChange={(e) => setFormData({...formData, departure: e.target.value})} />
                  <input type="date" required className={inputClass} onChange={(e) => setFormData({...formData, arrival: e.target.value})} />
                </div>
                <input type="email" required placeholder="Email Address" className={inputClass} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input type="tel" required placeholder="Phone Number" className={inputClass} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                
                <div className="flex gap-3 mt-6">
                  <button type="button" onClick={() => setIsOpen(false)} className="w-full py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">Close</button>
                  <button type="submit" className="w-full py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-500 transition-colors">Submit to WhatsApp</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}