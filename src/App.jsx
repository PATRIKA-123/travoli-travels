import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import FAQAccordion from './components/FAQAccordion';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ContactDock from './components/ContactDock';
import Gallery from './sections/Gallery';

export default function App() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
          <Gallery />
        <About />
        <Testimonials />
        <FAQAccordion />
        <CTA />
        <ContactForm addToast={addToast} />
      </main>
      <Footer />
      <Toast toasts={toasts} dismiss={dismissToast} />
      <ContactDock />
    </>
  );
}
