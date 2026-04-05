import { useState } from 'react';
import { Phone, MessageCircle, Send, MapPin, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const titleRef = useScrollAnimation();
  const leftRef  = useScrollAnimation();
  const rightRef = useScrollAnimation();

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with your backend / EmailJS / Formspree
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 blueprint-bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={titleRef} className="fade-in-up text-center mb-16">
          <p className="section-subtitle mb-3">Let's Connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="accent-bar mx-auto mt-4 mb-6" />
          <p className="max-w-xl mx-auto" style={{ color: '#8fa8c8' }}>
            Ready to start your project? Reach out for a free consultation and let's build something exceptional together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Left: Contact Info ── */}
          <div ref={leftRef} className="fade-in-left">

            {/* Big call-to-action card */}
            <div
              className="rounded-2xl p-8 mb-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(232,160,32,0.12), rgba(74,158,218,0.12))',
                border: '1px solid rgba(232,160,32,0.25)',
              }}
            >
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10"
                style={{ background: '#e8a020' }}
              />
              <Phone size={28} color="#e8a020" className="mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">Call Me Directly</h3>
              <p className="mb-5" style={{ color: '#8fa8c8' }}>
                Available for new projects
              </p>
              <a
                href="tel:+918469446362"
                id="contact-call-btn"
                className="btn-primary w-fit"
              >
                <Phone size={18} /> +91 846 944 6362
              </a>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918469446362?text=Hello%20Anil%20Gadher%2C%20I%20am%20interested%20in%20your%20civil%20engineering%20services."
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-btn"
              className="whatsapp-btn w-full justify-center mb-6"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>

            {/* Info items */}
            <div className="flex flex-col gap-4">
              {[
                { icon: <MapPin size={18} />, label: 'Location', value: 'Surat, Gujrat, India' },
                { icon: <Mail size={18} />, label: 'Email', value: 'gadheranil1964@gmail.com' },
                { icon: <Phone size={18} />, label: 'Office', value: '+91 846 944 6362' },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(74,158,218,0.12)' }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: 'rgba(74,158,218,0.12)', color: '#4a9eda' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: '#8fa8c8' }}>{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div ref={rightRef} className="fade-in-right">
            <div className="glass-card p-8">
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <Send size={20} color="#e8a020" />
                Send a Message
              </h3>

              {sent && (
                <div
                  className="mb-6 p-4 rounded-xl text-sm font-semibold"
                  style={{
                    background: 'rgba(37,211,102,0.12)',
                    border: '1px solid rgba(37,211,102,0.3)',
                    color: '#25D366',
                  }}
                >
                  ✅ Message sent! we will get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-2" htmlFor="contact-name">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Tushar gadher"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2" htmlFor="contact-message">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="btn-primary justify-center w-full mt-2"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
