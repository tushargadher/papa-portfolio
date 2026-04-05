import { Phone, Mail, MapPin, HardHat } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="pt-16 pb-6"
      style={{
        background: '#050e1a',
        borderTop: '1px solid rgba(74,158,218,0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 mb-10"
             style={{ borderBottom: '1px solid rgba(74,158,218,0.1)' }}>

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #e8a020, #4a9eda)' }}
              >
                <HardHat size={22} color="#0a1628" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">Anil Gadher</p>
                <p className="text-xs" style={{ color: '#8fa8c8' }}>Senior Civil Engineer</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#8fa8c8', maxWidth: '400px' }}>
              30+ years of delivering precision-built structures across India.
              From blueprint to build — your vision, expertly engineered.
            </p>
            {/* Contact quick-links */}
            <div className="flex flex-col gap-2">
              {[
                { icon: <Phone size={14}/>,   text: '+91 846 944 6362', href: 'tel:+918469446362' },
                { icon: <Mail size={14}/>,    text: 'gadheranil1964@gmail.com', href: 'mailto:gadheranil1964@gmail.com' },
                { icon: <MapPin size={14}/>,  text: 'Surat, Gujrat, India', href: '#' },
              ].map(item => (
                <a
                  key={item.text}
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: '#8fa8c8' }}
                >
                  <span style={{ color: '#4a9eda' }}>{item.icon}</span>
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 pb-2"
                style={{ borderBottom: '2px solid rgba(232,160,32,0.3)' }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Home',       id: 'hero' },
                { label: 'About',      id: 'about' },
                { label: 'Services',   id: 'services' },
                { label: 'Projects',   id: 'projects' },
                { label: 'Experience', id: 'experience' },
                { label: 'Contact',    id: 'contact' },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm transition-colors hover:text-white hover:pl-1"
                    style={{ color: '#8fa8c8', transitionProperty: 'all', transitionDuration: '200ms' }}
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 pb-2"
                style={{ borderBottom: '2px solid rgba(74,158,218,0.3)' }}>
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                'Building Plan Design',
                '3D Model Design',
                'Residential Projects',
                'Commercial Projects',
                'Site Supervision',
                'Engineering Consulting',
              ].map(s => (
                <li
                  key={s}
                  className="text-sm"
                  style={{ color: '#8fa8c8' }}
                >
                  ✦ {s}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm"
             style={{ color: '#8fa8c8' }}>
          <p>© {new Date().getFullYear()} Anil Gadher — Gadher Engineering Consultants. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#25D366' }}
            />
            <span>Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
