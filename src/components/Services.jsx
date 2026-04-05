import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: '📋',
    title: 'Building Plan Design',
    desc: 'Comprehensive architectural and structural drawings for residential and commercial projects, from concept to permit-ready documentation.',
    tags: ['AutoCAD', 'Blueprints', 'Permits'],
  },
  {
    icon: '🏗️',
    title: '3D Model Design',
    desc: 'Photorealistic 3D visualizations and BIM models to help clients visualize their project before a single brick is laid.',
    tags: ['Revit', '3ds Max', 'SketchUp'],
  },
  {
    icon: '🏘️',
    title: 'Residential & Commercial Projects',
    desc: 'Full-cycle design and supervision of residential villas, apartment complexes, shopping centers, and office buildings.',
    tags: ['Full-Cycle', 'Multi-Story', 'Mixed-Use'],
  },
  {
    icon: '👷',
    title: 'Site Supervision',
    desc: 'On-site quality control, contractor coordination, and progress monitoring to ensure your project is delivered on time and on budget.',
    tags: ['QC/QA', 'Coordination', 'Reporting'],
  },
  // {
  //   icon: '🔧',
  //   title: 'Renovation & Remodeling',
  //   desc: 'Structural assessment and smart renovation plans to modernize existing buildings while maintaining structural integrity.',
  //   tags: ['Assessment', 'Retrofit', 'Modernization'],
  // },
  {
    icon: '🤝',
    title: 'Engineering Consulting',
    desc: 'Expert advisory for feasibility studies, structural audits, code compliance reviews, and project troubleshooting.',
    tags: ['Feasibility', 'Audit', 'Compliance'],
  },
];

export default function Services() {
  const titleRef    = useScrollAnimation();
  const cardsRef    = useStaggerAnimation('.service-item', 120);

  return (
    <section id="services" className="py-24 lg:py-32 blueprint-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={titleRef} className="fade-in-up text-center mb-16">
          <p className="section-subtitle mb-3">What I Offer</p>
          <h2 className="section-title">My Services</h2>
          <div className="accent-bar mx-auto mt-4 mb-6" />
          <p className="max-w-xl mx-auto" style={{ color: '#8fa8c8' }}>
            From concept blueprints to final inspection, I deliver end-to-end civil engineering
            services with precision and professionalism.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc) => (
            <div key={svc.title} className="service-card service-item fade-in-up">
              <div className="service-icon">
                <span>{svc.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{svc.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#8fa8c8' }}>
                {svc.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: 'rgba(74,158,218,0.1)',
                      border: '1px solid rgba(74,158,218,0.2)',
                      color: '#4a9eda',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
