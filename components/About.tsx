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
          <div className={`about-image ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="profile-card glass card-hover">
              <div className="profile-avatar">
                <i className="fas fa-user"></i>
                <div className="avatar-glow"></div>
              </div>
              <h3>Sandi Kurniawan</h3>
              <p>Frontend Developer & Designer</p>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+6285921071555</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>sanzyt2108@gmail.com</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Yogyakarta, Indonesia</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Universitas Atma Jaya Yogyakarta</span>
                </div>
                <div className="contact-item">
                  <i className="fab fa-linkedin"></i>
                  <span>linkedin.com/sandi-kurniawann</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`about-text ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <h3 className="gradient-text">Tentang Saya</h3>
            <p>
              Saya adalah mahasiswa aktif S1 Sistem Informasi semester 6 di Universitas Atma Jaya Yogyakarta, 
              dengan pengalaman mengikuti program Studi Independent Dicoding by Bank DBS 2025. Saya memiliki 
              keterampilan sebagai desainer grafis dan front-end developer, serta berpengalaman dalam 
              pengembangan aplikasi web.
            </p>
            <p>
              Sebagai freelancer sejak Juni 2023, saya telah menyelesaikan berbagai proyek termasuk pembuatan 
              sistem POS berbasis web, sistem pencatatan gudang, dan website profil perusahaan. Selain itu, 
              saya terampil menggunakan Canva, Adobe Premiere Pro, dan Capcut untuk membuat konten digital yang kreatif.
            </p>
            <p>
              Saya menguasai bahasa pemrograman HTML, CSS, JavaScript, serta framework React.js, Vue.js, Next.js, 
              dan Laravel. Minat saya terfokus pada pengembangan web dan data analisis, dengan komitmen untuk terus 
              mengembangkan keterampilan teknis dan berkontribusi dalam proyek-proyek yang menantang.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card glass hover-lift">
              <div className="stat-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <span className="stat-number">10+</span>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card glass hover-lift">
              <div className="stat-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <span className="stat-number">7</span>
              <div className="stat-label">Certificates Earned</div>
            </div>
            <div className="stat-card glass hover-lift">
              <div className="stat-icon">
                <i className="fas fa-clock"></i>
              </div>
              <span className="stat-number">2+</span>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card glass hover-lift">
              <div className="stat-icon">
                <i className="fas fa-heart"></i>
              </div>
              <span className="stat-number">100%</span>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #about {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.02), rgba(139, 92, 246, 0.02));
          position: relative;
          z-index: 1;
        }

        .about-content {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 5rem;
          align-items: start;
          margin-top: 3rem;
          min-height: 600px;
        }

        .profile-card {
          background: var(--bg-glass);
          backdrop-filter: blur(30px);
          border-radius: var(--border-radius-lg);
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          position: relative;
          overflow: hidden;
          height: fit-content;
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
        }

        .profile-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: var(--gradient-primary);
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        }

        .profile-avatar {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: var(--gradient-primary);
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: white;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 20px 40px rgba(99, 102, 241, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .avatar-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: rotate 4s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .profile-card h3 {
          color: var(--primary-color);
          margin-bottom: 0.75rem;
          font-size: 1.6rem;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .profile-card > p {
          color: var(--text-muted);
          margin-bottom: 2rem;
          font-size: 1.1rem;
          font-weight: 500;
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
          padding: 0.5rem;
          border-radius: 10px;
          font-weight: 500;
        }

        .contact-item:hover {
          color: var(--primary-color);
          background: rgba(99, 102, 241, 0.1);
          transform: translateX(5px);
        }

        .contact-item i {
          color: var(--primary-color);
          width: 18px;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .about-text {
          padding: 0;
          margin: 0;
        }

        .about-text h3 {
          margin-bottom: 2rem;
          font-size: 2.2rem;
          font-weight: 700;
        }

        .about-text p {
          margin-bottom: 2rem;
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 1.1rem;
          text-align: justify;
          font-weight: 500;
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
          background: var(--bg-glass);
          backdrop-filter: blur(30px);
          border-radius: var(--border-radius);
          padding: 3rem 2rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
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
          background: var(--gradient-secondary);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: var(--gradient-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 1.5rem;
          color: white;
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 0.75rem;
          display: block;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          color: var(--text-muted);
          font-weight: 600;
          font-size: 1.1rem;
        }

        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 320px 1fr;
            gap: 4rem;
          }

          .profile-card {
            max-width: 320px;
            padding: 2rem;
          }

          .profile-avatar {
            width: 160px;
            height: 160px;
            font-size: 3.5rem;
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
            max-width: 300px;
            margin: 0 auto;
          }

          .profile-avatar {
            width: 140px;
            height: 140px;
            font-size: 3rem;
          }

          .about-text {
            text-align: left;
            padding: 0 1rem;
          }

          .about-text p {
            text-align: left;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .about-content {
            gap: 2rem;
          }

          .profile-card {
            max-width: 280px;
            padding: 1.5rem;
          }

          .profile-avatar {
            width: 120px;
            height: 120px;
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
          }

          .contact-info {
            gap: 0.75rem;
          }

          .contact-item {
            font-size: 0.9rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 2rem 1.5rem;
          }

          .stat-number {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
}