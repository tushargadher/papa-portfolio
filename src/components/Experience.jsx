import { useScrollAnimation } from '../hooks/useScrollAnimation';

const timeline = [
  {
    period: '1990 – 1994',
    title: 'Graduate Civil Engineer',
    company: 'National Engineering Services India (NESI)',
    desc: 'Joined as a junior engineer, contributing to highway and bridge infrastructure projects. Gained foundational expertise in structural analysis and site execution.',
    icon: '🎓',
    side: 'left',
  },
  {
    period: '1994 – 2000',
    title: 'Project Engineer',
    company: 'Frontier Works Organization (FWO)',
    desc: 'Led a team of engineers on military and civil infrastructure projects across northern India. Specialized in reinforced concrete structures and remote-site logistics.',
    icon: '🏗️',
    side: 'right',
  },
  {
    period: '2000 – 2008',
    title: 'Senior Structural Engineer',
    company: 'Habib Rafiq Pvt. Ltd. (HRL)',
    desc: 'Oversaw structural design review for 50+ low-rise and commercial buildings. Introduced CAD-based workflows that reduced design cycles by 35%.',
    icon: '📐',
    side: 'left',
  },
  {
    period: '2008 – 2014',
    title: 'Construction Manager',
    company: 'DHA Development Authority, Surat',
    desc: 'Managed housing sector development covering 1,200+ residential units. Coordinated multi-disciplinary teams and maintained 98% on-schedule delivery rate.',
    icon: '👷',
    side: 'right',
  },
  {
    period: '2014 – 2020',
    title: 'Chief Civil Engineer',
    company: 'Bahria Town Pvt. Ltd.',
    desc: 'Directed civil design and execution for mega-scale township developments. Mentored 80+ junior engineers; implemented BIM across all major project workflows.',
    icon: '🏛️',
    side: 'left',
  },
  {
    period: '2020 – Present',
    title: 'Independent Consultant & Director',
    company: 'Raza Engineering Consultants (REC)',
    desc: 'Providing premium civil engineering consultancy to private clients, NGOs, and government bodies. Specialist in structural audits, 3D modeling, and smart city planning.',
    icon: '🌟',
    side: 'right',
  },
];

export default function Experience() {
  const titleRef = useScrollAnimation();

  return (
    <section id="experience" className="py-24 lg:py-32 blueprint-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={titleRef} className="fade-in-up text-center mb-16">
          <p className="section-subtitle mb-3">Career Journey</p>
          <h2 className="section-title">Experience</h2>
          <div className="accent-bar mx-auto mt-4 mb-6" />
          <p className="max-w-xl mx-auto" style={{ color: '#8fa8c8' }}>
            30+ years of progressive achievements across India's largest engineering organizations.
          </p>
        </div>

        {/* ── Desktop Timeline ── */}
        <div className="relative hidden lg:block">
          <div className="timeline-line" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, idx) => {
              const isLeft = item.side === 'left';
              return (
                <div key={idx} className="grid grid-cols-2 gap-0 items-center">

                  {/* Left column */}
                  <div className={`${isLeft ? 'pr-12 text-right' : 'pl-12'} ${!isLeft ? 'order-2' : ''}`}>
                    {isLeft && (
                      <TimelineCard item={item} align="right" />
                    )}
                  </div>

                  {/* Center dot */}
                  <div
                    className="relative flex justify-center"
                    style={{ gridColumn: 'span 0' }}
                  >
                    {/* This is handled by the line, dots positioned absolutely */}
                  </div>

                  {/* Right column */}
                  <div className={`${isLeft ? 'pl-12' : 'pr-12 text-right'} ${isLeft ? 'order-2' : ''}`}>
                    {!isLeft && (
                      <TimelineCard item={item} align="left" />
                    )}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Dots overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative h-full flex flex-col justify-around py-6">
              {timeline.map((_, idx) => (
                <div key={idx} className="flex justify-center">
                  <div className="timeline-dot" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile Timeline ── */}
        <div className="lg:hidden relative pl-8">
          <div
            className="absolute left-3 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(to bottom, #e8a020, #4a9eda)' }}
          />
          {timeline.map((item, idx) => (
            <div key={idx} className="relative mb-8">
              <div
                className="absolute -left-5 top-4 w-4 h-4 rounded-full border-2 border-amber-400"
                style={{ background: '#0a1628', boxShadow: '0 0 0 3px rgba(232,160,32,0.2)' }}
              />
              <TimelineCard item={item} align="left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function TimelineCard({ item, align }) {
  return (
    <div className={`glass-card p-6 relative ${align === 'right' ? 'ml-auto' : ''}`}
         style={{ maxWidth: '420px' }}>
      <div
        className="inline-flex items-center gap-2 mb-3 text-xs font-bold px-3 py-1 rounded-full"
        style={{ background: 'rgba(232,160,32,0.12)', color: '#e8a020' }}
      >
        <span>{item.icon}</span> {item.period}
      </div>
      <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
      <p className="text-sm font-medium mb-3" style={{ color: '#4a9eda' }}>{item.company}</p>
      <p className="text-sm leading-relaxed" style={{ color: '#8fa8c8' }}>{item.desc}</p>
    </div>
  );
}
