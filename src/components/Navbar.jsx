import { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';

const navItems = [
  { label: 'Home',       href: 'hero' },
  { label: 'About',      href: 'about' },
  { label: 'Services',   href: 'services' },
  { label: 'Projects',   href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Contact',    href: 'contact' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      /* Active section highlighting */
      const sections = navItems.map(n => document.getElementById(n.href));
      const scrollMid = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollMid) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Smooth scroll helper ── */
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10, 22, 40, 0.96)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(74,158,218,0.15)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: 'linear-gradient(135deg, #e8a020, #4a9eda)' }}
          >
            <HardHat size={20} color="#0a1628" strokeWidth={2.5} />
          </div>
          <span className="text-white font-bold text-lg hidden sm:block">
            Anil<span style={{ color: '#e8a020' }}>.</span>Gadher
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="tel:+918469446362"
          className="hidden lg:flex btn-primary text-sm"
        >
          📞 Call Now
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="lg:hidden text-white p-2 rounded-lg transition-colors hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          opacity: menuOpen ? 1 : 0,
          background: 'rgba(10,22,40,0.98)',
          borderBottom: menuOpen ? '1px solid rgba(74,158,218,0.15)' : 'none',
        }}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className={`nav-link text-base ${activeSection === item.href ? 'active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <a href="tel:+918469446362" className="btn-primary w-full justify-center">
              📞 Call Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
