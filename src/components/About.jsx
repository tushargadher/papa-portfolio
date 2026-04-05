import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { name: 'Civil Planning',        icon: '📐', pct: 98 },
  { name: '3D Building Modeling',  icon: '🏗️', pct: 95 },
  { name: 'Structural Design',     icon: '🏛️', pct: 97 },
  { name: 'Construction Mgmt',     icon: '👷', pct: 96 },
  { name: 'Site Supervision',      icon: '🔍', pct: 94 },
  { name: 'AutoCAD / Revit',       icon: '💻', pct: 92 },
];

const highlights = [
  { icon: '🏆', title: '30+ Years', sub: 'Professional Experience' },
  { icon: '🏢', title: '500+',      sub: 'Projects Completed' },
  { icon: '🤝', title: '300+',      sub: 'Happy Clients' },
  { icon: '🌆', title: '50+',       sub: 'Cities Served' },
];

function SkillBar({ skill, visible }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-white flex items-center gap-2">
          <span>{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-sm font-bold" style={{ color: '#e8a020' }}>{skill.pct}%</span>
      </div>
      <div className="progress-bar-outer">
        <div
          className="progress-bar-inner"
          style={{ width: visible ? `${skill.pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const titleRef    = useScrollAnimation();
  const textRef     = useScrollAnimation();
  const skillsRef   = useScrollAnimation();
  const statsRef    = useStaggerAnimation('.stagger-child', 120);

  return (
    <section id="about" className="py-24 lg:py-32 blueprint-bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div ref={titleRef} className="fade-in-up text-center mb-16">
          <p className="section-subtitle mb-3">Who I Am</p>
          <h2 className="section-title">About Me</h2>
          <div className="accent-bar mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Bio ── */}
          <div ref={textRef} className="fade-in-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(232,160,32,0.1)',
                border: '1px solid rgba(232,160,32,0.3)',
              }}
            >
              <span className="text-amber-400 text-sm font-semibold">
                🏗️ Experienced. Trusted. Expert.
              </span>
            </div>

            <h3
              className="text-2xl lg:text-3xl font-bold mb-5"
              style={{ color: '#fff', fontFamily: "'Playfair Display',serif" }}
            >
              Shaping Skylines for Over Three Decades
            </h3>

            <p className="mb-5 leading-relaxed" style={{ color: '#8fa8c8' }}>
              I am <span className="text-white font-semibold">Anil Gadher</span>, a Senior Civil
              Engineer with over <span className="text-amber-400 font-bold">30 years of hands-on
              experience</span> in design, planning, and execution of both residential and
              commercial projects across India and beyond.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: '#8fa8c8' }}>
              My journey began with a Bachelor's in Civil Engineering and has spanned landmark
              infrastructure, high-rise residential complexes, industrial facilities, and
              large-scale commercial developments. I combine time-proven engineering principles
              with modern technologies like BIM and 3D modelling to deliver precision-built
              structures.
            </p>

            {/* Highlights row */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
              {highlights.map(h => (
                <div key={h.title} className="stat-card stagger-child fade-in-up">
                  <div className="text-2xl mb-1">{h.icon}</div>
                  <div className="text-xl font-bold text-white">{h.title}</div>
                  <div className="text-xs mt-1" style={{ color: '#8fa8c8' }}>{h.sub}</div>
                </div>
              ))}
            </div>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-2">
              {['AutoCAD', 'Revit', 'SketchUp', 'STAAD Pro', '3ds Max', 'MS Project'].map(s => (
                <span key={s} className="skill-badge">{s}</span>
              ))}
            </div>
          </div>

          {/* ── Right: Skill Bars ── */}
          <div ref={skillsRef} className="fade-in-right">
            <div className="glass-card p-8">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-amber-400">⚙️</span> Core Competencies
              </h4>
              {skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} visible={true} />
              ))}
            </div>

            {/* Quote */}
            <div
              className="mt-6 p-6 rounded-2xl relative"
              style={{
                background: 'rgba(232,160,32,0.06)',
                border: '1px solid rgba(232,160,32,0.2)',
              }}
            >
              <span
                className="text-5xl absolute -top-4 left-6 font-serif leading-none"
                style={{ color: 'rgba(232,160,32,0.4)' }}
              >
                "
              </span>
              <p className="text-white italic leading-relaxed pt-4">
                Engineering is not just a profession — it's the art of solving human problems
                with precision, creativity, and responsibility.
              </p>
              <p className="mt-3 text-sm font-semibold" style={{ color: '#e8a020' }}>
                — Anil Gadher, Civil Engineer
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
