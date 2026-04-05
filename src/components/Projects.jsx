import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    id: 'p1',
    img: '/project_residential.png',
    title: 'Al-Noor Residential Complex',
    category: 'Residential',
    desc: '14-story residential tower with 120 luxury apartments. Designed and supervised from foundation to handover in Surat.',
    year: '2022',
  },
  {
    id: 'p2',
    img: '/project_commercial.png',
    title: 'Pearl Business Center',
    category: 'Commercial',
    desc: 'G+8 commercial complex featuring modern office spaces, retail outlets, and underground parking in Islamabad.',
    year: '2021',
  },
  {
    id: 'p3',
    img: '/project_bridge.png',
    title: 'River Crossing Bridge',
    category: 'Infrastructure',
    desc: 'A 180-meter pre-stressed concrete bridge linking two industrial zones, completed ahead of schedule.',
    year: '2019',
  },
  {
    id: 'p4',
    img: '/project_3dmodel.png',
    title: 'Smart City 3D Master Plan',
    category: '3D Modeling',
    desc: 'Complete BIM-based 3D master plan for a mixed-use smart city development — 500+ units planned.',
    year: '2023',
  },
  {
    id: 'p5',
    img: '/project_renovation.png',
    title: 'Heritage Hotel Renovation',
    category: 'Renovation',
    desc: 'Structural retrofitting and interior renovation of a 1960s heritage hotel, upgrading to modern safety codes.',
    year: '2020',
  },
  {
    id: 'p6',
    img: '/project_residential.png',
    title: 'Green Valley Villas',
    category: 'Residential',
    desc: 'A gated community of 80 eco-friendly villas with solar integration and sustainable stormwater management.',
    year: '2022',
  },
];

const categories = ['All', ...new Set(projects.map(p => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const titleRef = useScrollAnimation();

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 lg:py-32 blueprint-bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={titleRef} className="fade-in-up text-center mb-12">
          <p className="section-subtitle mb-3">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="accent-bar mx-auto mt-4 mb-6" />
          <p className="max-w-xl mx-auto" style={{ color: '#8fa8c8' }}>
            A selection of landmark projects built with precision, passion, and professional excellence.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: activeCategory === cat
                  ? 'linear-gradient(135deg, #e8a020, #d4880a)'
                  : 'rgba(255,255,255,0.05)',
                color: activeCategory === cat ? '#0a1628' : '#8fa8c8',
                border: activeCategory === cat
                  ? '1px solid transparent'
                  : '1px solid rgba(74,158,218,0.2)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={proj.id}
                className="project-card"
              >
                {/* Image */}
              <div className="project-img-wrap">
                <img src={proj.img} alt={proj.title} loading="lazy" />
                <div className="project-overlay" />
                {/* Category badge */}
                <span
                  className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(232,160,32,0.9)',
                    color: '#0a1628',
                  }}
                >
                  {proj.category}
                </span>
                <span
                  className="absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(10,22,40,0.8)',
                    color: '#8fa8c8',
                  }}
                >
                  {proj.year}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2">{proj.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8fa8c8' }}>
                  {proj.desc}
                </p>
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(74,158,218,0.15)' }}>
                  <button
                    className="text-sm font-semibold transition-colors hover:text-white"
                    style={{ color: '#4a9eda' }}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
