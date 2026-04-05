import { useEffect, useState } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';

const TYPED_WORDS = [
  'Civil Planning',
  '3D Building Modeling',
  'Structural Design',
  'Construction Management',
  'Site Supervision',
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  /* ── Typewriter effect ── */
  useEffect(() => {
    const word = TYPED_WORDS[wordIdx];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % TYPED_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden blueprint-bg"
    >
      {/* Decorative radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(74,158,218,0.08) 0%, transparent 70%),' +
            'radial-gradient(ellipse 40% 50% at 80% 20%, rgba(232,160,32,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Geometric decorative lines */}
      <div className="absolute top-24 left-8 opacity-20 hidden xl:block">
        <div className="border-l-2 border-t-2 border-amber-400 w-16 h-16 rounded-tl-sm" />
      </div>
      <div className="absolute bottom-24 right-8 opacity-20 hidden xl:block">
        <div className="border-r-2 border-b-2 border-sky-400 w-16 h-16 rounded-br-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className="order-2 lg:order-1">
            <p className="section-subtitle mb-4 fade-in-up" style={{ animationDelay: '0.1s' }}>
              🏗️ Senior Civil Engineer
            </p>

            <h1
              className="font-extrabold leading-tight mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                color: '#fff',
              }}
            >
              Building{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #e8a020, #f5c060)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Planning
              </span>{' '}
              That Stand{' '}
              <span style={{ color: '#4a9eda' }}>The Test of Time</span>
            </h1>

            <p className="text-lg mb-3" style={{ color: '#8fa8c8' }}>
              <span className="text-white font-semibold">30+ Years of Experience</span> in
            </p>

            {/* Typewriter */}
            <div className="mb-8 h-10 flex items-center">
              <span className="text-xl font-bold" style={{ color: '#e8a020' }}>
                {displayed}
              </span>
              <span
                className="ml-0.5 w-0.5 h-7 inline-block animate-pulse"
                style={{ background: '#e8a020' }}
              />
            </div>

            <p className="mb-10 leading-relaxed" style={{ color: '#8fa8c8', maxWidth: '520px' }}>
              Expert in Civil Planning, 3D Modeling, and end-to-end Construction Solutions.
              Trusted by hundreds of clients across residential, commercial, and infrastructure projects.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
                id="hero-view-projects"
              >
                View Projects <ChevronRight size={18} />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-outline"
                id="hero-contact"
              >
                Contact Now
              </button>
            </div>

            {/* Mini stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { value: '30+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Done' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="font-extrabold text-3xl"
                    style={{ color: '#e8a020', fontFamily: "'Playfair Display',serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: '#8fa8c8' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Outer ring decoration */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-30"
                style={{
                  background:
                    'conic-gradient(from 180deg at 50% 50%, #e8a020, #4a9eda, #e8a020)',
                  animation: 'spin 8s linear infinite',
                  filter: 'blur(2px)',
                }}
              />
              <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
              `}</style>

              {/* Photo */}
              <div
                className="relative w-72 h-80 md:w-96 md:h-[26rem] rounded-2xl overflow-hidden corner-accent"
                style={{
                  border: '2px solid rgba(74,158,218,0.35)',
                  animation: 'float 6s ease-in-out infinite',
                }}
              >
                <img
                  src="/anil.jpg"
                  alt="Anil Gadher - Senior Civil Engineer"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,22,40,0.85), transparent)',
                  }}
                />
                {/* Badge */}
                <div
                  className="absolute bottom-4 left-4 right-4 glass-card p-3 flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: 'rgba(232,160,32,0.2)' }}
                  >
                    🏆
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Anil Gadher</p>
                    <p className="text-xs" style={{ color: '#8fa8c8' }}>Senior Civil Engineer</p>
                  </div>
                </div>
              </div>

              {/* Floating tag */}
              <div
                className="absolute -top-4 -right-4 glass-card px-4 py-2 text-sm font-bold"
                style={{ color: '#e8a020' }}
              >
                30+ Yrs ⭐
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs opacity-60 hover:opacity-100 transition-opacity"
        style={{ color: '#8fa8c8' }}
        aria-label="Scroll down"
      >
        <span>Scroll Down</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
