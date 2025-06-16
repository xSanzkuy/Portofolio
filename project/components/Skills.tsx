'use client';

import { useEffect, useState } from 'react';

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
        <h2 className={`section-title ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          Skills & Technologies
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`skill-category ${isVisible ? 'fade-in visible' : 'fade-in'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>
                <i className={category.icon}></i>
                {category.title}
              </h3>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
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
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .skill-category {
          background: var(--bg-card);
          backdrop-filter: blur(25px);
          border-radius: 25px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: none;
        }

        .skill-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-primary);
        }

        .skill-category:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-glow);
        }

        .skill-category h3 {
          color: var(--primary-color);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.4rem;
          font-weight: 600;
        }

        .skill-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .skill-tag {
          background: rgba(0, 212, 255, 0.1);
          color: var(--primary-color);
          padding: 0.8rem 1.2rem;
          border-radius: 25px;
          font-size: 0.9rem;
          border: 1px solid rgba(0, 212, 255, 0.3);
          text-align: center;
          transition: all 0.3s ease;
          font-weight: 500;
          cursor: none;
        }

        .skill-tag:hover {
          background: rgba(0, 212, 255, 0.2);
          transform: translateY(-2px);
        }

        .skill-progress-container {
          margin-top: 2rem;
        }

        .skill-progress-item {
          margin-bottom: 1.5rem;
        }

        .skill-progress-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .skill-progress-name {
          color: var(--text-light);
          font-weight: 600;
        }

        .skill-progress-percent {
          color: var(--primary-color);
          font-weight: 600;
        }

        .skill-progress-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .skill-progress-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 10px;
          transition: width 2s ease;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-list {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          }
        }
      `}</style>
    </section>
  );
}