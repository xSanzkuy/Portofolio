'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Sandi Kurniawan';
  const [showCursor, setShowCursor] = useState(true);

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

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="status-badge">
          <div className="status-indicator"></div>
          <span>Available for Work</span>
          <div className="badge-glow"></div>
        </div>
        
        <h1 className="hero-title">
          <span className="title-text">{typedText}</span>
          <span className={`cursor-blink ${showCursor ? 'visible' : ''}`}>|</span>
        </h1>
        
        <div className="hero-subtitle-container">
          <p className="hero-subtitle gradient-text">Frontend Developer & Designer</p>
          <div className="subtitle-underline"></div>
        </div>
        
        <p className="hero-description">
          Mahasiswa S1 Sistem Informasi semester 6 di Universitas Atma Jaya Yogyakarta. 
          Berpengalaman sebagai freelancer web developer dan mengikuti program Studi Independent Dicoding by Bank DBS 2025.
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">7</span>
            <span className="stat-label">Certificates</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Exp</span>
          </div>
        </div>
        
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary magnetic-hover">
            <i className="fas fa-code"></i>
            <span>Lihat Projects</span>
            <div className="btn-shine"></div>
          </a>
          <a href="#contact" className="btn btn-secondary magnetic-hover">
            <i className="fas fa-envelope"></i>
            <span>Hubungi Saya</span>
          </a>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
          <span>Scroll to explore</span>
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

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(76, 205, 196, 0.1));
          animation: floating 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 120px;
          height: 120px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 60px;
          height: 60px;
          top: 30%;
          right: 25%;
          animation-delay: 4s;
        }

        .shape-4 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 20%;
          animation-delay: 1s;
        }

        .shape-5 {
          width: 90px;
          height: 90px;
          top: 10%;
          right: 40%;
          animation-delay: 3s;
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
          gap: 0.8rem;
          background: rgba(40, 167, 69, 0.15);
          color: var(--success-color);
          padding: 0.8rem 1.5rem;
          border-radius: 30px;
          font-size: 0.95rem;
          margin-bottom: 2.5rem;
          border: 1px solid rgba(40, 167, 69, 0.3);
          animation: slideInUp 1s ease-out 0.3s both;
          position: relative;
          backdrop-filter: blur(10px);
          font-weight: 600;
        }

        .status-indicator {
          width: 10px;
          height: 10px;
          background: var(--success-color);
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 0 0 10px var(--success-color);
        }

        .badge-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, transparent, rgba(40, 167, 69, 0.3), transparent);
          border-radius: 30px;
          z-index: -1;
          animation: gradientMove 3s ease infinite;
        }

        .hero-title {
          font-size: 4.5rem;
          margin-bottom: 1.5rem;
          animation: slideInUp 1s ease-out;
          font-weight: 700;
          min-height: 5.5rem;
          position: relative;
        }

        .title-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          position: relative;
        }

        .title-text::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          animation: lineGrow 2s ease-out 1s forwards;
        }

        @keyframes lineGrow {
          to { transform: scaleX(1); }
        }

        .cursor-blink {
          color: var(--primary-color);
          opacity: 0;
          transition: opacity 0.1s;
          font-weight: 300;
        }

        .cursor-blink.visible {
          opacity: 1;
        }

        .hero-subtitle-container {
          position: relative;
          margin-bottom: 2rem;
        }

        .hero-subtitle {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          animation: slideInUp 1s ease-out 0.2s both;
          font-weight: 600;
        }

        .subtitle-underline {
          width: 100px;
          height: 3px;
          background: var(--gradient-secondary);
          margin: 0 auto;
          border-radius: 2px;
          animation: slideInUp 1s ease-out 0.4s both;
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
          color: var(--text-muted);
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 3rem;
          animation: slideInUp 1s ease-out 0.5s both;
        }

        .stat-item {
          text-align: center;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .cta-buttons {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: slideInUp 1s ease-out 0.6s both;
          margin-bottom: 4rem;
        }

        .btn {
          position: relative;
          overflow: hidden;
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .btn:hover .btn-shine {
          left: 100%;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          animation: slideInUp 1s ease-out 0.8s both;
          z-index: 10;
        }

        .scroll-arrow {
          width: 40px;
          height: 40px;
          border: 2px solid var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: floating 2s ease-in-out infinite;
          color: var(--primary-color);
          background: rgba(0, 212, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .scroll-indicator span {
          font-size: 0.9rem;
          font-weight: 500;
        }

        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 768px) {
          .hero {
            height: 100vh;
            padding-top: 100px;
          }

          .hero-title {
            font-size: 2.8rem;
            min-height: 4rem;
          }

          .hero-subtitle {
            font-size: 1.5rem;
          }

          .hero-description {
            font-size: 1.1rem;
            margin-bottom: 2.5rem;
          }

          .hero-stats {
            gap: 1.5rem;
            flex-wrap: wrap;
          }

          .stat-item {
            padding: 0.8rem 1rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }

          .shape {
            opacity: 0.5;
          }

          .scroll-indicator {
            bottom: 30px;
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
            min-height: 3rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-stats {
            gap: 1rem;
          }

          .stat-item {
            padding: 0.6rem 0.8rem;
          }

          .stat-number {
            font-size: 1.3rem;
          }

          .stat-label {
            font-size: 0.8rem;
          }

          .scroll-indicator {
            bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}