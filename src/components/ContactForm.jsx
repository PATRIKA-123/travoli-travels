import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { contactInfo } from '../data/siteContent';

export default function ContactForm({ addToast }) {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('contact_submissions').insert([form]);

    if (!error) {
      setSubmitted(true);
      addToast({ type: 'success', title: 'Enquiry Sent!', message: "Data saved successfully." });
    } else {
      addToast({ type: 'error', title: 'Error', message: 'Something went wrong.' });
      console.error('Error:', error);
    }
    setLoading(false);
  }

  // WhatsApp Message Format
  const whatsappMessage = `*New Enquiry from Website!* 🚀%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Service:* ${form.service}%0A*Message:* ${form.message}`;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start max-w-5xl mx-auto">
          <div className="space-y-8 border-l-4 border-teal-600 pl-8">
            <h2 className="font-heading text-4xl">Let’s Start Planning</h2>
          </div>

          <div className="bg-slate-50 p-10 border border-slate-100">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
                  <div className="w-16 h-16 bg-teal-100 mx-auto rounded-full flex items-center justify-center mb-6 text-teal-600">✓</div>
                  <h3 className="text-2xl font-heading">Enquiry Sent!</h3>
                  <p className="text-slate-500 mt-2 mb-6">Click below to confirm on WhatsApp:</p>
                  
                  <a 
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappMessage}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-8 py-4 font-bold uppercase hover:bg-green-700 transition-all shadow-lg"
                  >
                    Confirm on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h3 className="font-heading text-xl">Request a Quote</h3>
                  {['name', 'phone'].map((field) => (
                    <input key={field} required placeholder={field.toUpperCase()} className="w-full bg-transparent border-b border-slate-300 py-3 focus:border-teal-600 outline-none uppercase text-sm" value={form[field]} onChange={(e) => setForm({...form, [field]: e.target.value})} />
                  ))}
                  <select required className="w-full bg-transparent border-b border-slate-300 py-3 outline-none uppercase text-sm text-slate-500" value={form.service} onChange={(e) => setForm({...form, service: e.target.value})}>
                    <option value="">SELECT SERVICE</option>
                    {['Holiday Package', 'Flights', 'Forex', 'Other'].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <textarea required placeholder="MESSAGE" rows={4} className="w-full bg-transparent border-b border-slate-300 py-3 outline-none uppercase text-sm" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} />
                  <button type="submit" disabled={loading} className="w-full bg-slate-900 text-white py-4 font-bold tracking-[0.2em] uppercase hover:bg-teal-700 transition-all">
                    {loading ? 'SENDING...' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}