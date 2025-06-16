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
            <div className="profile-card">
              <div className="profile-avatar">
                <i className="fas fa-user"></i>
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
            <h3>Tentang Saya</h3>
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
            <div className="stat-card">
              <span className="stat-number">10+</span>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">7</span>
              <div className="stat-label">Certificates Earned</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">2+</span>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #about {
          background: rgba(0, 0, 0, 0.02);
          position: relative;
          z-index: 1;
        }

        .about-content {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 4rem;
          align-items: start;
          margin-top: 2rem;
          min-height: 600px;
        }

        .profile-card {
          background: var(--bg-card);
          backdrop-filter: blur(25px);
          border-radius: 25px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          position: relative;
          overflow: hidden;
          height: fit-content;
          width: 100%;
          max-width: 350px;
          margin: 0 auto;
        }

        .profile-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
        }

        .profile-avatar {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: var(--gradient-primary);
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .profile-card h3 {
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          font-size: 1.4rem;
          font-weight: 600;
        }

        .profile-card > p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-top: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--text-muted);
          transition: all 0.3s ease;
          cursor: none;
          font-size: 0.9rem;
        }

        .contact-item:hover {
          color: var(--primary-color);
        }

        .contact-item i {
          color: var(--primary-color);
          width: 16px;
          font-size: 0.9rem;
        }

        .about-text {
          padding: 0;
          margin: 0;
        }

        .about-text h3 {
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
          font-weight: 600;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 1rem;
          text-align: justify;
        }

        .stats-section {
          padding: 80px 0 0;
          background: rgba(0, 212, 255, 0.02);
          margin-top: 4rem;
          border-radius: 25px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .stat-card {
          background: var(--bg-card);
          backdrop-filter: blur(25px);
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
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
          height: 3px;
          background: var(--gradient-primary);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-glow);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          display: block;
        }

        .stat-label {
          color: var(--text-muted);
          font-weight: 500;
          font-size: 1.1rem;
        }

        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 300px 1fr;
            gap: 3rem;
          }

          .profile-card {
            max-width: 300px;
            padding: 1.5rem;
          }

          .profile-avatar {
            width: 150px;
            height: 150px;
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
            margin-top: 1rem;
          }

          .profile-card {
            max-width: 280px;
            margin: 0 auto;
          }

          .profile-avatar {
            width: 120px;
            height: 120px;
            font-size: 2.5rem;
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
            gap: 1.5rem;
          }

          .profile-card {
            max-width: 250px;
            padding: 1rem;
          }

          .profile-avatar {
            width: 100px;
            height: 100px;
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .contact-info {
            gap: 0.5rem;
          }

          .contact-item {
            font-size: 0.8rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}