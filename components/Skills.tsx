'use client';

import { useEffect, useState, useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function EnhancedSkills() {
  const [isVisible, setIsVisible] = useState(false);
  const [progressAnimated, setProgressAnimated] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [particlesVisible, setParticlesVisible] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setProgressAnimated(true), 800);
          setTimeout(() => setParticlesVisible(true), 1200);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: '💻',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      skills: [
        { name: 'HTML5', level: 95, color: '#E34F26', description: 'Semantic markup & modern standards' },
        { name: 'CSS3', level: 90, color: '#1572B6', description: 'Advanced animations & layouts' },
        { name: 'JavaScript', level: 85, color: '#F7DF1E', description: 'ES6+ & async programming' },
        { name: 'PHP', level: 80, color: '#777BB4', description: 'Backend development & APIs' },
        { name: 'SQL', level: 78, color: '#336791', description: 'Database design & optimization' }
      ],
      description: 'Core technologies for web development'
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: '🚀',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      skills: [
        { name: 'React.js', level: 88, color: '#61DAFB', description: 'Component-based architecture' },
        { name: 'Vue.js', level: 82, color: '#4FC08D', description: 'Progressive web applications' },
        { name: 'Next.js', level: 85, color: '#000000', description: 'Full-stack React framework' },
        { name: 'Laravel', level: 80, color: '#FF2D20', description: 'Elegant PHP framework' },
        { name: 'Bootstrap', level: 90, color: '#7952B3', description: 'Responsive design system' },
        { name: 'Tailwind CSS', level: 92, color: '#06B6D4', description: 'Utility-first CSS framework' }
      ],
      description: 'Modern development frameworks and tools'
    },
    {
      id: 'design',
      title: 'Design & Creative Tools',
      icon: '🎨',
      gradient: 'from-pink-500 via-rose-500 to-orange-500',
      skills: [
        { name: 'Canva', level: 85, color: '#00C4CC', description: 'Graphic design & branding' },
        { name: 'Adobe Premiere Pro', level: 78, color: '#9999FF', description: 'Video editing & production' },
        { name: 'Capcut', level: 82, color: '#000000', description: 'Mobile video editing' },
        { name: 'Figma', level: 88, color: '#F24E1E', description: 'UI/UX design & prototyping' },
        { name: 'Adobe After Effects', level: 75, color: '#9999FF', description: 'Motion graphics & VFX' },
        { name: 'Lightroom', level: 80, color: '#31A8FF', description: 'Photo editing & enhancement' }
      ],
      description: 'Creative and design applications'
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: '🛠️',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      skills: [
        { name: 'Git', level: 88, color: '#F05032', description: 'Version control & collaboration' },
        { name: 'GitHub', level: 90, color: '#181717', description: 'Code hosting & project management' },
        { name: 'VS Code', level: 95, color: '#007ACC', description: 'Code editing & debugging' },
        { name: 'MySQL', level: 82, color: '#4479A1', description: 'Relational database management' },
        { name: 'MongoDB', level: 78, color: '#47A248', description: 'NoSQL database solutions' },
        { name: 'Node.js', level: 80, color: '#339933', description: 'Server-side JavaScript runtime' }
      ],
      description: 'Essential development and productivity tools'
    },
  ];

  const Particles = () => (
    <div className={`particles ${particlesVisible ? 'visible' : ''}`}>
      {[...Array(20)].map((
        _, i) => (
        <div key={i} className={`particle particle-${i % 5}`} />
      ))}
    </div>
  );

  return (
    <section id="skills" className="section relative overflow-hidden" ref={containerRef}>
      <Particles />
      
      <div className="container relative z-10">
        <ScrollReveal direction="fade">
          <div className="text-center mb-16">
            <h2 className="section-title bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent text-6xl font-bold mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Crafting digital experiences with cutting-edge technologies and creative tools
            </p>
          </div>
        </ScrollReveal>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.id} direction="up" delay={index * 0.2}>
              <div 
                className={`skill-category ${activeCategory === category.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <span className="icon-emoji">{category.icon}</span>
                    <div className={`icon-glow bg-gradient-to-r ${category.gradient}`} />
                  </div>
                  <div className="category-info">
                    <h3 className="category-title">{category.title}</h3>
                    <p className="category-description">{category.description}</p>
                  </div>
                </div>

                <div className="skills-container">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className={`skill-item ${hoveredSkill === `${category.id}-${skill.name}` ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredSkill(`${category.id}-${skill.name}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{ '--delay': `${skillIndex * 0.1}s` } as React.CSSProperties}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-description">{skill.description}</div>
                      </div>
                      
                      <div className="skill-progress">
                        <div className="progress-track">
                          <div 
                            className="progress-fill"
                            style={{
                              '--skill-color': skill.color,
                              width: progressAnimated ? `${skill.level}%` : '0%'
                            } as React.CSSProperties}
                          />
                          <div className="progress-glow" style={{ '--skill-color': skill.color } as React.CSSProperties} />
                        </div>
                      </div>

                      <div className="skill-badge" style={{ '--skill-color': skill.color } as React.CSSProperties}>
                        <div className="badge-inner">
                          <span className="badge-text">{skill.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive 3D hover effect */}
                <div className={`category-overlay bg-gradient-to-br ${category.gradient}`} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
        }

        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 2s ease;
        }

        .particles.visible {
          opacity: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          animation: float 20s infinite linear;
        }

        .particle-0 {
          background: #8b5cf6;
          left: 10%;
          animation-delay: 0s;
        }

        .particle-1 {
          background: #06b6d4;
          left: 30%;
          animation-delay: -4s;
        }

        .particle-2 {
          background: #f59e0b;
          left: 50%;
          animation-delay: -8s;
        }

        .particle-3 {
          background: #10b981;
          left: 70%;
          animation-delay: -12s;
        }

        .particle-4 {
          background: #f97316;
          left: 90%;
          animation-delay: -16s;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          transform-style: preserve-3d;
        }

        .skill-category:hover {
          transform: translateY(-20px) rotateX(5deg);
          box-shadow: 
            0 35px 80px rgba(0, 0, 0, 0.3),
            0 0 50px rgba(139, 92, 246, 0.2);
        }

        .skill-category.active {
          transform: translateY(-25px) rotateX(8deg);
          box-shadow: 
            0 40px 100px rgba(0, 0, 0, 0.4),
            0 0 60px rgba(139, 92, 246, 0.3);
        }

        .category-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: -1;
        }

        .skill-category:hover .category-overlay {
          opacity: 0.1;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          position: relative;
        }

        .category-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
        }

        .icon-emoji {
          font-size: 2.5rem;
          z-index: 2;
          position: relative;
        }

        .icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(20px);
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
        }

        .category-info {
          flex: 1;
        }

        .category-title {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #fff 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .category-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
          line-height: 1.5;
        }

        .skills-container {
          display: grid;
          gap: 1.5rem;
        }

        .skill-item {
          position: relative;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateX(-30px);
          animation: slideIn 0.6s ease forwards;
          animation-delay: var(--delay);
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .skill-item:hover,
        .skill-item.hovered {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--skill-color);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          transform: translateX(8px);
        }

        .skill-header {
          margin-bottom: 1rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 700;
          font-size: 1.1rem;
          color: #fff;
        }

        .skill-level {
          font-weight: 600;
          color: var(--skill-color);
          font-size: 1.1rem;
        }

        .skill-description {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .skill-progress {
          position: relative;
        }

        .progress-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--skill-color), lighten(var(--skill-color), 20%));
          border-radius: 8px;
          transition: width 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4));
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }

        .progress-glow {
          position: absolute;
          top: -2px;
          left: 0;
          height: 12px;
          background: var(--skill-color);
          border-radius: 8px;
          filter: blur(8px);
          opacity: 0.5;
          transition: width 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .skill-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 40px;
          height: 40px;
          background: var(--skill-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .skill-item:hover .skill-badge,
        .skill-item.hovered .skill-badge {
          opacity: 1;
          transform: scale(1);
        }

        .badge-inner {
          width: 32px;
          height: 32px;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .badge-text {
          font-size: 8px;
          font-weight: 700;
          color: #fff;
          text-align: center;
          line-height: 1;
        }

        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .skill-category {
            padding: 2rem;
          }

          .category-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .category-icon {
            width: 60px;
            height: 60px;
          }

          .icon-emoji {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .section {
            padding: 4rem 0;
          }

          .skill-category {
            padding: 1.5rem;
          }

          .skill-item {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
}