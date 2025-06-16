'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Sandi Kurniawan';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="status-badge">
          <div className="status-indicator"></div>
          Available for Work
        </div>
        <h1 className="hero-title">
          {typedText}
          <span className="cursor-blink">|</span>
        </h1>
        <p className="hero-subtitle">Frontend Developer & Designer</p>
        <p className="hero-description">
          Mahasiswa S1 Sistem Informasi semester 6 di Universitas Atma Jaya Yogyakarta. 
          Berpengalaman sebagai freelancer web developer dan mengikuti program Studi Independent Dicoding by Bank DBS 2025.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">
            <i className="fas fa-code"></i>
            Lihat Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            <i className="fas fa-envelope"></i>
            Hubungi Saya
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
          z-index: 1;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(40, 167, 69, 0.1);
          color: var(--success-color);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(40, 167, 69, 0.3);
          animation: slideInUp 1s ease-out 0.3s both;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          background: var(--success-color);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .hero-title {
          font-size: 4.5rem;
          margin-bottom: 1rem;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: slideInUp 1s ease-out;
          font-weight: 700;
          min-height: 5.5rem;
        }

        .cursor-blink {
          color: var(--primary-color);
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-subtitle {
          font-size: 1.8rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          animation: slideInUp 1s ease-out 0.2s both;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          animation: slideInUp 1s ease-out 0.4s both;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 2.5rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: slideInUp 1s ease-out 0.6s both;
        }

        @media (max-width: 768px) {
          .hero {
            height: 100vh;
            padding-top: 100px;
          }

          .hero-title {
            font-size: 2.5rem;
            min-height: 3.5rem;
          }

          .hero-subtitle {
            font-size: 1.3rem;
          }

          .hero-description {
            font-size: 1rem;
            margin-bottom: 2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding-top: 120px;
          }

          .hero-content {
            padding: 0 1rem;
          }

          .hero-title {
            font-size: 2rem;
            min-height: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}