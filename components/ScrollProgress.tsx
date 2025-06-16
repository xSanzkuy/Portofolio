'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div 
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
    >
      <style jsx>{`
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #00d4ff, #4ecdc4);
          z-index: 9999;
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }
      `}</style>
    </div>
  );
}