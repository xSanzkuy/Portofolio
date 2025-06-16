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
          background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          animation: patternMove 30s linear infinite;
          pointer-events: none;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem;
          z-index: 1;
          position: relative;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(16, 185, 129, 0.1);
          color: var(--success-color);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 1rem;
          margin-bottom: 2.5rem;
          border: 1px solid rgba(16, 185, 129, 0.3);
          backdrop-filter: blur(20px);
          animation: slideInUp 1s ease-out 0.3s both;
          font-weight: 600;
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.2);
        }

        .status-indicator {
          width: 10px;
          height: 10px;
          background: var(--success-color);
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.6);
        }

        .hero-title {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          background: var(--gradient-hero);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: slideInUp 1s ease-out;
          font-weight: 800;
          min-height: 6rem;
          letter-spacing: -0.02em;
          text-shadow: 0 0 40px rgba(99, 102, 241, 0.3);
        }

        .cursor-blink {
          color: var(--primary-color);
          animation: blink 1s infinite;
          text-shadow: 0 0 20px currentColor;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-subtitle {
          font-size: 2rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          animation: slideInUp 1s ease-out 0.2s both;
          font-weight: 600;
          background: linear-gradient(135deg, var(--text-muted), var(--primary-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 3rem;
          animation: slideInUp 1s ease-out 0.4s both;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 3rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .cta-buttons {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: slideInUp 1s ease-out 0.6s both;
        }

        @keyframes patternMove {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(60px) translateY(60px); }
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 4rem;
            min-height: 5rem;
          }

          .hero-subtitle {
            font-size: 1.6rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .hero {
            height: 100vh;
            padding-top: 100px;
          }

          .hero-title {
            font-size: 2.8rem;
            min-height: 3.5rem;
          }

          .hero-subtitle {
            font-size: 1.4rem;
          }

          .hero-description {
            font-size: 1rem;
            margin-bottom: 2.5rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }

          .status-badge {
            font-size: 0.9rem;
            padding: 0.6rem 1.2rem;
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
            font-size: 2.2rem;
            min-height: 2.8rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .hero-description {
            font-size: 0.95rem;
          }

          .status-badge {
            font-size: 0.85rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </section>
  );
}