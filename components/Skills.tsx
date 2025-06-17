'use client';

import { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [progressAnimated, setProgressAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setProgressAnimated(true), 500);
        }
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL'],
      progressSkills: [
        { name: 'HTML5', percent: 95 },
        { name: 'CSS3', percent: 90 },
        { name: 'JavaScript', percent: 85 },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: 'fab fa-react',
      skills: ['React.js', 'Vue.js', 'Next.js', 'Laravel', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      title: 'Design & Creative Tools',
      icon: 'fas fa-paint-brush',
      skills: ['Canva', 'Adobe Premiere Pro', 'Capcut', 'Figma', 'Adobe After Effects', 'Lightroom'],
    },
    {
      title: 'Development Tools',
      icon: 'fas fa-tools',
      skills: ['Git', 'GitHub', 'VS Code', 'MySQL', 'MongoDB', 'Node.js'],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <ScrollReveal direction="fade">
          <h2 className="section-title">Skills & Technologies</h2>
        </ScrollReveal>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} direction="up" delay={index * 0.1}>
              <div className="skill-category card-featured glow-on-hover">
                <h3>
                  <i className={category.icon}></i>
                  {category.title}
                </h3>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag hover-lift">{skill}</span>
                  ))}
                </div>
                {category.progressSkills && (
                  <div className="skill-progress-container">
                    {category.progressSkills.map((skill) => (
                      <div key={skill.name} className="skill-progress-item">
                        <div className="skill-progress-header">
                          <span className="skill-progress-name">{skill.name}</span>
                          <span className="skill-progress-percent">{skill.percent}%</span>
                        </div>
                        <div className="skill-progress-bar">
                          <div
                            className="skill-progress-fill"
                            style={{
                              width: progressAnimated ? `${skill.percent}%` : '0%',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .skill-category {
          background: var(--bg-card);
          backdrop-filter: blur(30px);
          border-radius: var(--border-radius-lg);
          padding: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .skill-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
        }

        .skill-category:hover {
          transform: translateY(-12px);
          box-shadow: var(--shadow-intense);
        }

        .skill-category h3 {
          color: var(--primary-color);
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .skill-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.2rem;
          margin-bottom: 2.5rem;
        }

        .skill-tag {
          background: rgba(99, 102, 241, 0.15);
          color: var(--primary-color);
          padding: 1rem 1.5rem;
          border-radius: 25px;
          font-size: 0.95rem;
          border: 1px solid rgba(99, 102, 241, 0.3);
          text-align: center;
          transition: all 0.3s ease;
          font-weight: 600;
          cursor: pointer;
        }

        .skill-tag:hover {
          background: rgba(99, 102, 241, 0.25);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
        }

        .skill-progress-container {
          margin-top: 2.5rem;
        }

        .skill-progress-item {
          margin-bottom: 2rem;
        }

        .skill-progress-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.8rem;
        }

        .skill-progress-name {
          color: var(--text-light);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .skill-progress-percent {
          color: var(--primary-color);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .skill-progress-bar {
          height: 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .skill-progress-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 10px;
          transition: width 2.5s ease;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .skill-list {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }

          .skill-category {
            padding: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .skill-category {
            padding: 2rem;
          }

          .skill-list {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 1rem;
          }

          .skill-tag {
            padding: 0.8rem 1.2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}