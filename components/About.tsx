'use client';

import { useEffect, useState } from 'react';

export default function About() {
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

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          About Me
        </h2>
        <div className="about-content">
          <div className={`about-image ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <div className="profile-card glass">
              <div className="profile-avatar">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face" 
                  alt="Sandi Kurniawan"
                />
                <div className="avatar-ring"></div>
                <div className="avatar-glow"></div>
              </div>
              <h3 className="gradient-text">Sandi Kurniawan</h3>
              <p>Frontend Developer & Designer</p>
              
              <div className="profile-badges">
                <div className="badge">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Student</span>
                </div>
                <div className="badge">
                  <i className="fas fa-briefcase"></i>
                  <span>Freelancer</span>
                </div>
                <div className="badge">
                  <i className="fas fa-code"></i>
                  <span>Developer</span>
                </div>
              </div>
              
              <div className="contact-info">
                <div className="contact-item magnetic-hover">
                  <i className="fas fa-phone"></i>
                  <span>+6285921071555</span>
                </div>
                <div className="contact-item magnetic-hover">
                  <i className="fas fa-envelope"></i>
                  <span>sanzyt2108@gmail.com</span>
                </div>
                <div className="contact-item magnetic-hover">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Yogyakarta, Indonesia</span>
                </div>
                <div className="contact-item magnetic-hover">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Universitas Atma Jaya Yogyakarta</span>
                </div>
                <div className="contact-item magnetic-hover">
                  <i className="fab fa-linkedin"></i>
                  <span>linkedin.com/sandi-kurniawann</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`about-text ${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <div className="text-content">
              <h3 className="neon-text">Tentang Saya</h3>
              <div className="text-highlight">
                <p>
                  Saya adalah mahasiswa aktif S1 Sistem Informasi semester 6 di Universitas Atma Jaya Yogyakarta, 
                  dengan pengalaman mengikuti program Studi Independent Dicoding by Bank DBS 2025. Saya memiliki 
                  keterampilan sebagai desainer grafis dan front-end developer, serta berpengalaman dalam 
                  pengembangan aplikasi web.
                </p>
              </div>
              
              <div className="experience-timeline">
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <div className="timeline-content">
                    <h4>Freelance Journey</h4>
                    <p>Sebagai freelancer sejak Juni 2023, saya telah menyelesaikan berbagai proyek termasuk pembuatan 
                    sistem POS berbasis web, sistem pencatatan gudang, dan website profil perusahaan.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <i className="fas fa-tools"></i>
                  </div>
                  <div className="timeline-content">
                    <h4>Creative Skills</h4>
                    <p>Selain itu, saya terampil menggunakan Canva, Adobe Premiere Pro, dan Capcut untuk membuat 
                    konten digital yang kreatif.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="timeline-content">
                    <h4>Technical Expertise</h4>
                    <p>Saya menguasai bahasa pemrograman HTML, CSS, JavaScript, serta framework React.js, Vue.js, Next.js, 
                    dan Laravel. Minat saya terfokus pada pengembangan web dan data analisis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Statistics Section */}
        <div className={`stats-section ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="stats-grid">
            <div className="stat-card card-3d magnetic-hover">
              <div className="stat-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <span className="stat-number" data-target="10">0</span>
              <div className="stat-label">Projects Completed</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="stat-card card-3d magnetic-hover">
              <div className="stat-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <span className="stat-number" data-target="7">0</span>
              <div className="stat-label">Certificates Earned</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>
            </div>
            
            <div className="stat-card card-3d magnetic-hover">
              <div className="stat-icon">
                <i className="fas fa-clock"></i>
              </div>
              <span className="stat-number" data-target="2">0</span>
              <div className="stat-label">Years Experience</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{ width: '60%' }}></div>
              </div>
            </div>
            
            <div className="stat-card card-3d magnetic-hover">
              <div className="stat-icon">
                <i className="fas fa-heart"></i>
              </div>
              <span className="stat-number" data-target="100">0</span>
              <div className="stat-label">Satisfaction Rate</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #about {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.02), rgba(102, 126, 234, 0.02));
          position: relative;
          z-index: 1;
        }

        .about-content {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 5rem;
          align-items: start;
          margin-top: 3rem;
          min-height: 700px;
        }

        .profile-card {
          background: var(--bg-card);
          backdrop-filter: blur(30px);
          border-radius: 30px;
          padding: 3rem 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          position: relative;
          overflow: hidden;
          height: fit-content;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          transition: all 0.4s ease;
        }

        .profile-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-intense);
        }

        .profile-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
          animation: gradientMove 3s ease infinite;
        }

        .profile-avatar {
          position: relative;
          width: 150px;
          height: 150px;
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-avatar img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid transparent;
          background: var(--gradient-primary);
          padding: 3px;
          position: relative;
          z-index: 2;
        }

        .avatar-ring {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 50%;
          background: var(--gradient-primary);
          z-index: 1;
          animation: pulse 2s infinite;
        }

        .avatar-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.3), transparent);
          z-index: 0;
          animation: floating 3s ease-in-out infinite;
        }

        .profile-card h3 {
          margin-bottom: 0.5rem;
          font-size: 1.6rem;
          font-weight: 700;
        }

        .profile-card > p {
          color: var(--text-muted);
          margin-bottom: 2rem;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .profile-badges {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 212, 255, 0.1);
          color: var(--primary-color);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          border: 1px solid rgba(0, 212, 255, 0.2);
          transition: all 0.3s ease;
        }

        .badge:hover {
          background: rgba(0, 212, 255, 0.2);
          transform: translateY(-2px);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-muted);
          transition: all 0.3s ease;
          cursor: none;
          font-size: 0.95rem;
          padding: 0.8rem;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.03);
        }

        .contact-item:hover {
          color: var(--primary-color);
          background: rgba(0, 212, 255, 0.1);
          transform: translateX(5px);
        }

        .contact-item i {
          color: var(--primary-color);
          width: 20px;
          font-size: 1rem;
        }

        .about-text {
          padding: 0;
          margin: 0;
        }

        .text-content h3 {
          color: var(--primary-color);
          margin-bottom: 2rem;
          font-size: 2.2rem;
          font-weight: 700;
        }

        .text-highlight {
          background: rgba(0, 212, 255, 0.05);
          border-left: 4px solid var(--primary-color);
          padding: 1.5rem;
          border-radius: 0 15px 15px 0;
          margin-bottom: 3rem;
        }

        .text-highlight p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 1.1rem;
        }

        .experience-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--gradient-primary);
          border-radius: 2px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 3rem;
        }

        .timeline-icon {
          position: absolute;
          left: -2.5rem;
          top: 0;
          width: 50px;
          height: 50px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          box-shadow: 0 5px 20px rgba(0, 212, 255, 0.3);
        }

        .timeline-content h4 {
          color: var(--primary-color);
          margin-bottom: 0.8rem;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .timeline-content p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1rem;
        }

        .stats-section {
          padding: 100px 0 0;
          margin-top: 5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          background: var(--bg-card);
          backdrop-filter: blur(30px);
          border-radius: 25px;
          padding: 3rem 2rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          cursor: none;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
        }

        .stat-card:hover {
          transform: translateY(-15px) rotateY(5deg);
          box-shadow: var(--shadow-intense);
        }

        .stat-icon {
          width: 70px;
          height: 70px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 1.8rem;
          color: white;
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          display: block;
        }

        .stat-label {
          color: var(--text-muted);
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .stat-progress {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 3px;
          transition: width 2s ease;
        }

        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 350px 1fr;
            gap: 3rem;
          }

          .profile-card {
            max-width: 350px;
            padding: 2rem 1.5rem;
          }

          .profile-avatar {
            width: 120px;
            height: 120px;
          }
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
            margin-top: 2rem;
          }

          .profile-card {
            max-width: 350px;
            margin: 0 auto;
          }

          .about-text {
            text-align: left;
            padding: 0 1rem;
          }

          .text-content h3 {
            text-align: center;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .timeline-item {
            padding-left: 2.5rem;
          }

          .timeline-icon {
            left: -2rem;
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .about-content {
            gap: 2rem;
          }

          .profile-card {
            max-width: 300px;
            padding: 1.5rem;
          }

          .profile-avatar {
            width: 100px;
            height: 100px;
            margin-bottom: 1.5rem;
          }

          .profile-badges {
            gap: 0.5rem;
          }

          .badge {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }

          .contact-info {
            gap: 0.8rem;
          }

          .contact-item {
            font-size: 0.85rem;
            padding: 0.6rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 2rem 1.5rem;
          }

          .stat-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}