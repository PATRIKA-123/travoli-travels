import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { contactInfo } from '../data/siteContent';

export default function ServiceCard({ id, title, image }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', destination: '', adults: '2', children: '',
    departure: '', arrival: '', email: '', phone: '', notes: ''
  });

  const isHolidayPackage = id === 'holidays';

  const handleAction = (e) => {
    e.preventDefault();
    if (isHolidayPackage) {
      setIsOpen(true);
    } else {
      const phone = contactInfo?.whatsapp || '';
      const message = `Hi, I am interested in ${title}. Please share details.`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const phone = contactInfo?.whatsapp || '';
    const message =
      `*Holiday Inquiry: ${title}*\n` +
      `Name: ${formData.name}\n` +
      `Destination: ${formData.destination}\n` +
      `Adults: ${formData.adults}\n` +
      `Children: ${formData.children || '0'}\n` +
      `Departure: ${formData.departure}\n` +
      `Return: ${formData.arrival}\n` +
      `Mobile: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      (formData.notes ? `Notes: ${formData.notes}` : '');
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const inputClass = "w-full bg-white border border-gray-200 px-4 py-3 text-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent placeholder-gray-400 transition";
  const labelClass = "block text-[10px] font-semibold tracking-widest text-gray-500 uppercase mb-1.5";

  // Modal rendered via portal — completely outside card DOM tree
  const modal = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] overflow-y-auto flex items-center justify-center p-4 py-10"
          style={{ backgroundColor: 'rgba(13, 27, 42, 0.75)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Teal header */}
            <div className="bg-[#0d4a3f] px-10 pt-10 pb-8">
              <p className="text-xs font-semibold tracking-widest text-teal-300 uppercase mb-2">Holiday Packages</p>
              <h2 className="text-3xl font-bold text-white font-heading">Plan Your Perfect Escape</h2>
              <p className="mt-2 text-sm text-teal-100/80">
                Fill in your details and our travel expert will craft a personalised itinerary for you.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                {['Reply within 24 hours', 'Tailored itineraries', 'Best-in-city forex bundled'].map(pt => (
                  <span key={pt} className="flex items-center gap-1.5 text-xs text-teal-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 inline-block flex-shrink-0" />
                    {pt}
                  </span>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppSubmit} className="px-10 py-8 space-y-5 bg-gray-50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name <span className="text-teal-600">*</span></label>
                  <input required placeholder="e.g. Priya Sharma" className={inputClass}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <label className={labelClass}>Destination <span className="text-teal-600">*</span></label>
                  <input required placeholder="Where to?" className={inputClass}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })} />
                </div>
                <div>
                  <label className={labelClass}>Departure Date <span className="text-teal-600">*</span></label>
                  <input type="date" required className={inputClass}
                    onChange={(e) => setFormData({ ...formData, departure: e.target.value })} />
                </div>
                <div>
                  <label className={labelClass}>Return Date <span className="text-teal-600">*</span></label>
                  <input type="date" required className={inputClass}
                    onChange={(e) => setFormData({ ...formData, arrival: e.target.value })} />
                </div>
                <div>
                  <label className={labelClass}>Adults <span className="text-teal-600">*</span></label>
                  <select required defaultValue="2" className={inputClass}
                    onChange={(e) => setFormData({ ...formData, adults: e.target.value })}>
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Children</label>
                  <select defaultValue="" className={inputClass}
                    onChange={(e) => setFormData({ ...formData, children: e.target.value })}>
                    <option value="">0</option>
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Mobile <span className="text-teal-600">*</span></label>
                  <input type="tel" required placeholder="+91 98XXXXXXXX" className={inputClass}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div>
                  <label className={labelClass}>Email <span className="text-teal-600">*</span></label>
                  <input type="email" required placeholder="you@example.com" className={inputClass}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Anything Specific? <span className="font-normal normal-case text-gray-400">(optional)</span></label>
                <textarea rows={3} placeholder="e.g. honeymoon, vegetarian meals, 4-star+ hotels, beach focused..."
                  className={`${inputClass} resize-none`}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })} />
              </div>

              <div className="flex gap-3 pt-1">
                <button type="button" onClick={() => setIsOpen(false)}
                  className="px-6 py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors">
                  Cancel
                </button>
                <button type="submit"
                  className="flex-1 py-3.5 bg-[#0d4a3f] hover:bg-[#0a3830] text-white font-bold text-sm rounded-lg transition-colors tracking-wide">
                  Send to WhatsApp →
                </button>
              </div>

              <p className="text-center text-xs text-gray-400">
                By submitting, you agree to be contacted by Travoli. We never share your details.
              </p>
            </form>

            {/* Close X */}
            <button onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Card */}
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

      {/* Modal rendered via portal — outside card, directly into document.body */}
      {createPortal(modal, document.body)}
    </>
  );
}