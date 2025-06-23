'use client';

import { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal'; // Pastikan ScrollReveal diimport

export default function Certificates() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const certificatesSection = document.getElementById('certificates');
    if (certificatesSection) {
      observer.observe(certificatesSection);
    }

    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      title: 'Belajar Dasar Git dengan GitHub',
      provider: 'Dicoding Indonesia',
      year: '2025',
      description: 'Mempelajari fundamental version control menggunakan Git dan GitHub, termasuk branching, merging, collaborative development, dan best practices dalam manajemen kode untuk proyek software development.',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      icon: 'fab fa-git-alt',
      featured: true,
      certLink: 'https://drive.google.com/file/d/1AnjpLGFHz1EeLISihlFMDhLc0b4i1rZK/view?usp=sharing',
    },
    {
      title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
      provider: 'Dicoding Indonesia',
      year: '2025',
      description: 'Memahami konsep dasar logika pemrograman, algoritma, flowchart, pseudocode, dan problem solving sebagai fondasi kuat dalam pengembangan software dan computational thinking.',
      skills: ['Programming Logic', 'Algorithm', 'Problem Solving', 'Flowchart'],
      icon: 'fas fa-brain',
      certLink: 'https://drive.google.com/file/d/1o_OJYCx272Frjiuo09MK1McQLAeG4Oal/view?usp=sharing',
    },
    {
      title: 'Belajar Dasar Pemrograman JavaScript',
      provider: 'Dicoding Indonesia',
      year: '2025',
      description: 'Menguasai syntax fundamental JavaScript, manipulasi DOM, event handling, asynchronous programming, dan konsep OOP dalam JavaScript ES6+ untuk pengembangan web modern.',
      skills: ['JavaScript', 'DOM Manipulation', 'ES6+', 'Async/Await'],
      icon: 'fab fa-js-square',
      featured: true,
      certLink: 'https://drive.google.com/file/d/1PpseNwYZfDh__81runkz3jxx_m_RBnOk/view?usp=sharing',
    },
    {
      title: 'Belajar Dasar Pemrograman Web',
      provider: 'Dicoding Indonesia',
      year: '2025',
      description: 'Memahami fundamental pengembangan web, HTML5 semantic, CSS3 advanced, responsive design, accessibility, dan web standards untuk membangun website modern yang optimal.',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Web Standards'],
      icon: 'fas fa-globe',
      certLink: 'https://drive.google.com/file/d/1PtuQz1YiOKK4kS5Am9wMfD_qsxxAp_H8/view?usp=drive_link',
    },
    {
      title: 'Belajar Fundamental Front-End Web Development',
      provider: 'Dicoding Indonesia',
      year: '2025',
      description: 'Mendalami teknik advanced front-end development, modern CSS frameworks, JavaScript ES6+, module bundlers, build tools, dan development workflow yang profesional.',
      skills: ['Advanced CSS', 'Modern JavaScript', 'Webpack', 'NPM'],
      icon: 'fas fa-code',
      featured: true,
      certLink: 'https://drive.google.com/file/d/1-SSYv5QAIo0NwGJtK0UNzNTD0SG7ISxb/view?usp=sharing',
    },
    {
      title: 'Belajar Membuat Front-End Web untuk Pemula',
      provider: 'Dicoding Indonesia',
      year: '2025',
      description: 'Praktik hands-on dalam membuat aplikasi web interaktif, implementasi design patterns, API integration, testing, dan deployment website ke production environment.',
      skills: ['Web Applications', 'API Integration', 'Deployment', 'UI/UX'],
      icon: 'fas fa-laptop-code',
      certLink: 'https://drive.google.com/file/d/1PtuQz1YiOKK4kS5Am9wMfD_qsxxAp_H8/view?usp=drive_link',
    },
    {
      title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
      provider: 'Dicoding Indonesia',
      year: '2025',
      description: 'Roadmap komprehensif menjadi software developer, best practices dalam coding, software engineering principles, clean code, dan career development dalam tech industry.',
      skills: ['Software Engineering', 'Best Practices', 'Career Development', 'Code Quality'],
      icon: 'fas fa-rocket',
      certLink: 'https://drive.google.com/file/d/1NDIFcwf8Dgmy0Ym0Y6BA14rioTJ_64x3/view?usp=sharing',
    },
    {
      title: 'PELINDUNGAN DATA PRIBADI: TANTANGAN DAN SOLUSI DI DUNIA SIBER',
      provider: 'Inixindo Bandung',
      year: '2024',
      description: 'Sertifikat untuk pelatihan terkait perlindungan data pribadi dalam dunia siber.',
      skills: ['Data Protection', 'Cybersecurity'],
      icon: 'fas fa-shield-alt',
      certLink: 'https://drive.google.com/file/d/1ah9BkiKyHYViV6fhDteYM7G7vBmXq7QU/view?usp=sharing',
    },
    {
      title: 'Belajar Membuat Front-End Web untuk Pemula',
      provider: 'Dicoding Indonesia',
      year: '2025',
      description: 'Praktik hands-on dalam membuat aplikasi web interaktif, implementasi design patterns, API integration, testing, dan deployment website ke production environment.',
      skills: ['Web Applications', 'API Integration', 'Deployment', 'UI/UX'],
      icon: 'fas fa-laptop-code',
      certLink: 'https://drive.google.com/file/d/1C7g7hYtnfzWFnwAaqODlx7mTuZG93GHV/view?usp=sharing',
    },
    {
      title: 'Videographer',
      provider: 'Unknown',
      year: '2025',
      description: 'Sertifikat terkait keahlian videographer.',
      skills: ['Videography', 'Film Production'],
      icon: 'fas fa-video',
      certLink: 'https://drive.google.com/file/d/1OsH-F8B-oTeZkoq6S8SWh3zcUkaMoa-p/view?usp=sharing',
    },
    {
      title: 'CSCU',
      provider: 'Unknown',
      year: '2025',
      description: 'Sertifikat terkait keamanan komputer.',
      skills: ['Cybersecurity', 'Computer Science'],
      icon: 'fas fa-shield-alt',
      certLink: 'https://drive.google.com/file/d/19bBgKyH0tqg57reINJKTJfNxzz8L149y/view?usp=sharing',
    },
  ];

  const handleCertificateClick = (certLink: string) => {
    // Open the certificate link in a new tab
    window.open(certLink, '_blank');
  };

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          Certificates & Achievements
        </h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <ScrollReveal key={cert.title} direction="up" delay={0.2 * index} duration={1} distance={60}>
              <div
                className={`certificate-card ${cert.featured ? 'featured' : ''} ${isVisible ? 'fade-in visible' : 'fade-in'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="certificate-badge">{cert.year}</div>
                <div className="certificate-header">
                  <div className="certificate-icon">
                    <i className={cert.icon}></i>
                  </div>
                  <div className="certificate-meta">
                    <div className="certificate-provider">{cert.provider}</div>
                    <div className="certificate-year">{cert.year}</div>
                  </div>
                </div>
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-description">{cert.description}</p>
                <div className="certificate-skills">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="certificate-skill">{skill}</span>
                  ))}
                </div>
                <button
                  className="certificate-link"
                  onClick={() => handleCertificateClick(cert.certLink)}
                >
                  <i className="fas fa-external-link-alt"></i>
                  Lihat Sertifikat
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .certificates-section {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.02), rgba(102, 126, 234, 0.02));
          position: relative;
          overflow: hidden;
        }

        .certificates-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 40%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(102, 126, 234, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
          position: relative;
          z-index: 1;
        }

        .certificate-card {
          background: var(--bg-card);
          backdrop-filter: blur(30px);
          border-radius: 25px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transform-style: preserve-3d;
        }

        .certificate-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-purple);
          transition: all 0.3s ease;
        }

        .certificate-card:hover::before {
          height: 6px;
          background: var(--gradient-primary);
        }

        .certificate-card:hover {
          transform: translateY(-15px) rotateX(5deg);
          box-shadow: 
            0 25px 50px rgba(102, 126, 234, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border-color: rgba(102, 126, 234, 0.3);
        }

        .certificate-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--gradient-success);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .certificate-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }

        .certificate-icon {
          width: 70px;
          height: 70px;
          background: var(--gradient-purple);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: white;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .certificate-meta {
          flex: 1;
        }

        .certificate-provider {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .certificate-year {
          color: var(--primary-color);
          font-size: 1.1rem;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .certificate-title {
          font-size: 1.4rem;
          margin-bottom: 1.2rem;
          color: var(--text-light);
          font-weight: 700;
          line-height: 1.4;
          position: relative;
          z-index: 2;
        }

        .certificate-description {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.7;
          font-size: 1rem;
          position: relative;
          z-index: 2;
        }

        .certificate-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }

        .certificate-skill {
          background: rgba(102, 126, 234, 0.15);
          color: var(--purple-accent);
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          font-size: 0.85rem;
          border: 1px solid rgba(102, 126, 234, 0.3);
          font-weight: 600;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          cursor: pointer;
        }

        .certificate-skill:hover {
          background: rgba(102, 126, 234, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .certificate-link {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          color: white;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          padding: 1rem 2rem;
          background: var(--gradient-primary);
          border-radius: 30px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
          z-index: 2;
          cursor: pointer;
          border: none;
        }

        .certificate-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(0, 212, 255, 0.4);
        }

        .certificate-card.featured {
          border: 2px solid rgba(0, 212, 255, 0.3);
          background: linear-gradient(135deg, var(--bg-card), rgba(0, 212, 255, 0.05));
        }

        .certificate-card.featured::before {
          background: var(--gradient-primary);
        }

        .certificate-card.featured .certificate-icon {
          background: var(--gradient-primary);
        }

        @media (max-width: 1024px) {
          .certificates-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          }
          
          .certificate-card {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .certificates-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .certificate-card {
            padding: 1.5rem;
          }

          .certificate-header {
            gap: 1rem;
          }

          .certificate-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .certificate-card {
            padding: 1rem;
          }

          .certificate-skills {
            gap: 0.5rem;
          }

          .certificate-skill {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}
