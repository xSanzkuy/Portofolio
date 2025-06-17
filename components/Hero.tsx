'use client';

import { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

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
        <ScrollReveal direction="fade" delay={0.2}>
          <div className="status-badge">
            <div className="status-indicator"></div>
            Available for Work
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.4}>
          <h1 className="hero-title">
            {typedText}
            <span className="cursor-blink">|</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.6}>
          <p className="hero-subtitle">Frontend Developer & Designer</p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.8}>
          <p className="hero-description">
            Mahasiswa S1 Sistem Informasi semester 6 di Universitas Atma Jaya Yogyakarta. 
            Berpengalaman sebagai freelancer web developer dan mengikuti program Studi Independent Dicoding by Bank DBS 2025.
          </p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={1.0}>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary glow-on-hover">
              <i className="fas fa-code"></i>
              Lihat Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              <i className="fas fa-envelope"></i>
              Hubungi Saya
            </a>
          </div>
        </ScrollReveal>
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
          background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          animation: patternMove 40s linear infinite;
          pointer-events: none;
        }

        .hero-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
          z-index: 1;
          position: relative;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(16, 185, 129, 0.15);
          color: var(--success-color);
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          margin-bottom: 3rem;
          border: 1px solid rgba(16, 185, 129, 0.3);
          backdrop-filter: blur(25px);
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-indicator {
          width: 12px;
          height: 12px;
          background: var(--success-color);
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
        }

        .hero-title {
          font-size: 5.5rem;
          margin-bottom: 2rem;
          background: var(--gradient-hero);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
          min-height: 6.5rem;
          letter-spacing: -0.03em;
          text-shadow: 0 0 50px rgba(99, 102, 241, 0.4);
          line-height: 1.1;
        }

        .cursor-blink {
          color: var(--primary-color);
          animation: blink 1s infinite;
          text-shadow: 0 0 25px currentColor;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-subtitle {
          font-size: 2.2rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--text-muted), var(--primary-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-description {
          font-size: 1.3rem;
          line-height: 1.8;
          margin-bottom: 3.5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 3.5rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .cta-buttons {
          display: flex;
          gap: 2.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @keyframes patternMove {
          0% { transform: translateX(0) translateY(0) rotate(0deg); }
          100% { transform: translateX(60px) translateY(60px) rotate(360deg); }
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 4.5rem;
            min-height: 5.5rem;
          }

          .hero-subtitle {
            font-size: 1.8rem;
          }

          .hero-description {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 768px) {
          .hero {
            height: 100vh;
            padding-top: 100px;
          }

          .hero-title {
            font-size: 3.2rem;
            min-height: 4rem;
          }

          .hero-subtitle {
            font-size: 1.5rem;
          }

          .hero-description {
            font-size: 1.1rem;
            margin-bottom: 3rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }

          .status-badge {
            font-size: 1rem;
            padding: 0.8rem 1.5rem;
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
            font-size: 2.5rem;
            min-height: 3rem;
          }

          .hero-subtitle {
            font-size: 1.3rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .status-badge {
            font-size: 0.9rem;
            padding: 0.7rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}