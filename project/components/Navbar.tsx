'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo">
            <svg className="logo-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#4ecdc4', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" opacity="0.1"/>
              <path d="M25 35 Q35 25 50 35 Q65 25 75 35 L75 45 Q65 35 50 45 Q35 35 25 45 Z" fill="url(#logoGradient)"/>
              <path d="M30 55 L45 55 L45 75 L35 75 L35 65 L30 65 Z" fill="url(#logoGradient)"/>
              <path d="M55 55 L70 55 L70 65 L60 65 L60 75 L70 75 L70 65 L70 55" fill="url(#logoGradient)"/>
              <circle cx="50" cy="50" r="48" fill="none" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.5">
                <animate attributeName="stroke-dasharray" values="0,300;150,150;0,300" dur="2s" repeatCount="indefinite"/>
              </circle>
            </svg>
            <span className="logo-text">Sandi K.</span>
          </a>
          
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          
          <button className="mobile-menu" onClick={toggleMobileMenu}>
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMobileMenu}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(10, 10, 10, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.95);
          box-shadow: 0 2px 30px rgba(0, 212, 255, 0.15);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--text-light);
          text-decoration: none;
          cursor: none;
        }

        .logo-svg {
          width: 45px;
          height: 45px;
          position: relative;
        }

        .logo-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2.5rem;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          color: var(--text-light);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          font-weight: 500;
          font-size: 1rem;
          cursor: none;
        }

        .nav-links a:hover {
          color: var(--primary-color);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-primary);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .mobile-menu {
          display: none;
          background: none;
          border: none;
          color: var(--text-light);
          font-size: 1.5rem;
          cursor: none;
        }

        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-nav-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .mobile-nav-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mobile-nav-links li {
          margin: 2rem 0;
        }

        .mobile-nav-links a {
          color: var(--text-light);
          font-size: 1.5rem;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: none;
        }

        .mobile-nav-links a:hover {
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu {
            display: block;
          }

          .nav-container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  );
}