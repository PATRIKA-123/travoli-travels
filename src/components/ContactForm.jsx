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

  const whatsappMessage = `*New Enquiry from Website!* 🚀%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Service:* ${form.service}%0A*Message:* ${form.message}`;

  const highlights = [
    { icon: '✈️', title: 'Tailored Itineraries', desc: 'Every trip is crafted around your preferences, budget, and travel style.' },
    { icon: '🌍', title: '50+ Destinations', desc: 'From Maldives to Switzerland — we cover the world so you can explore it.' },
    { icon: '💬', title: '24/7 Support', desc: 'Our travel experts are always a message away, before and during your trip.' },
    { icon: '💰', title: 'Best Price Guarantee', desc: 'We match or beat any comparable quote — no hidden fees, ever.' },
  ];

  return (
    <section id="contact" className="py-24 mt-16 relative overflow-hidden bg-slate-50 border-y border-slate-200">
      
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-teal-600" />
            Get In Touch
            <span className="w-6 h-px bg-teal-600" />
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-slate-900 leading-tight">
            Let's Start Planning
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch max-w-6xl mx-auto">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-4 items-start bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <span className="text-2xl">{h.icon}</span>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{h.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed mt-1">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
                  <div className="w-16 h-16 bg-teal-100 mx-auto rounded-full flex items-center justify-center mb-6 text-teal-600 text-2xl">✓</div>
                  <h3 className="text-2xl font-heading text-slate-900">Enquiry Sent!</h3>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-green-600 text-white px-8 py-3 rounded-xl text-sm font-bold">Confirm on WhatsApp</a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading text-2xl text-slate-900">Request a Quote</h3>
                  <input required placeholder="Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                  <input required placeholder="Phone" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
                  <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500" value={form.service} onChange={(e) => setForm({...form, service: e.target.value})}>
                    <option value="">Select a Service</option>
                    {['Holiday Package', 'Flights', 'Forex', 'Other'].map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <textarea required placeholder="Message" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} />
                  <button type="submit" disabled={loading} className="w-full bg-teal-600 text-white py-4 font-bold rounded-xl hover:bg-teal-700 transition-all">{loading ? 'Sending...' : 'Send Enquiry →'}</button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}