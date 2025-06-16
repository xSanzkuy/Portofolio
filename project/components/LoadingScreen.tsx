'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-logo">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#4ecdc4', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#loadingGradient)" opacity="0.1"/>
          <path d="M25 35 Q35 25 50 35 Q65 25 75 35 L75 45 Q65 35 50 45 Q35 35 25 45 Z" fill="url(#loadingGradient)"/>
          <circle cx="50" cy="50" r="48" fill="none" stroke="url(#loadingGradient)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" values="0,300;150,150;0,300" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
      <div className="loading-text">Loading Portfolio...</div>
      <div className="loading-progress">
        <div 
          className="loading-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--bg-dark);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: opacity 0.5s ease;
        }

        .loading-logo {
          width: 100px;
          height: 100px;
          margin-bottom: 2rem;
          animation: logoFloat 3s ease-in-out infinite;
        }

        .loading-text {
          color: var(--primary-color);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .loading-progress {
          width: 300px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .loading-progress-bar {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 10px;
          transition: width 0.3s ease;
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}