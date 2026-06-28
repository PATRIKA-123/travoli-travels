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
    {
      icon: '✈️',
      title: 'Tailored Itineraries',
      desc: 'Every trip is crafted around your preferences, budget, and travel style.',
    },
    {
      icon: '🌍',
      title: '50+ Destinations',
      desc: 'From Maldives to Switzerland — we cover the world so you can explore it.',
    },
    {
      icon: '💬',
      title: '24/7 Support',
      desc: 'Our travel experts are always a message away, before and during your trip.',
    },
    {
      icon: '💰',
      title: 'Best Price Guarantee',
      desc: 'We match or beat any comparable quote — no hidden fees, ever.',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch max-w-6xl mx-auto">

          {/* ── Left Column ── */}
          <div className="flex flex-col justify-between border-l-4 border-teal-600 pl-8">
            <div>
              <p className="section-label mb-3">Get In Touch</p>
              <h2 className="font-heading text-4xl lg:text-5xl leading-tight mb-4">
                Let's Start <br /> Planning
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                Tell us where you want to go and we'll handle everything — flights, stays, transfers, and more.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-2xl mt-0.5">{h.icon}</span>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{h.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="mt-10 flex items-center gap-3 bg-teal-50 border border-teal-100 rounded-xl px-5 py-4">
              <span className="text-3xl">🏆</span>
              <div>
                <p className="text-sm font-bold text-teal-800">Trusted by 2,000+ Travellers</p>
                <p className="text-xs text-teal-600 mt-0.5">Rated 4.9 ★ across Google & TripAdvisor</p>
              </div>
            </div>
          </div>

          {/* ── Right Column — Form ── */}
          <div className="bg-slate-50 p-10 border border-slate-100 rounded-2xl">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-teal-100 mx-auto rounded-full flex items-center justify-center mb-6 text-teal-600 text-2xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-heading">Enquiry Sent!</h3>
                  <p className="text-slate-500 mt-2 mb-6">Click below to confirm on WhatsApp:</p>
                  
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-8 py-4 font-bold uppercase hover:bg-green-700 transition-all shadow-lg rounded-xl"
                  >
                    Confirm on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-heading text-2xl">Request a Quote</h3>
                    <p className="text-slate-400 text-xs mt-1">We'll get back to you within 2 hours.</p>
                  </div>

                  {/* Name & Phone side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['name', 'phone'].map((field) => (
                      <div key={field} className="relative">
                        <input
                          required
                          placeholder=" "
                          id={field}
                          className="peer w-full bg-white border border-slate-200 rounded-lg px-4 pt-5 pb-2 text-sm outline-none focus:border-teal-500 transition"
                          value={form[field]}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        />
                        <label
                          htmlFor={field}
                          className="absolute left-4 top-1.5 text-[10px] font-bold tracking-widest uppercase text-slate-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-teal-600 transition-all"
                        >
                          {field}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Service */}
                  <div className="relative">
                    <select
                      required
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm outline-none focus:border-teal-500 transition text-slate-600 appearance-none"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">Select a Service</option>
                      {['Holiday Package', 'Flights', 'Forex', 'Other'].map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">▾</span>
                  </div>

                  {/* Message */}
                  <textarea
                    required
                    placeholder="Tell us about your dream trip..."
                    rows={4}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-teal-500 transition resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 text-white py-4 font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-teal-700 transition-all"
                  >
                    {loading ? 'SENDING...' : 'Send Enquiry'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}