'use client';

<<<<<<< HEAD
import { useState, useRef, useEffect } from 'react';

export default function CodeLanyard() {
  const [position, setPosition] = useState({ x: 100, y: 200 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const lanyardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const rect = lanyardRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div
      ref={lanyardRef}
      className={`code-lanyard ${isDragging ? 'dragging' : ''} ${isFlipped ? 'flipped' : ''}`}
      style={{
        left: position.x,
        top: position.y,
      }}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
    >
      <div className="lanyard-cord"></div>
      <div className="lanyard-card">
        <div className="card-front">
          <div className="card-header">
            <div className="avatar">
              <i className="fas fa-code"></i>
            </div>
            <div className="status-indicator"></div>
          </div>
          <div className="card-content">
            <h3>Sandi Kurniawan</h3>
            <p>Frontend Developer</p>
            <div className="tech-badges">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Next.js</span>
              <span className="tech-badge">Vue.js</span>
            </div>
            <div className="card-footer">
              <span className="location">
                <i className="fas fa-map-marker-alt"></i>
                Yogyakarta, ID
              </span>
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="qr-code">
            <div className="qr-pattern">
              <div className="qr-square"></div>
              <div className="qr-square"></div>
              <div className="qr-square"></div>
              <div className="qr-square"></div>
              <div className="qr-square"></div>
              <div className="qr-square"></div>
              <div className="qr-square"></div>
              <div className="qr-square"></div>
              <div className="qr-square"></div>
            </div>
          </div>
          <p>Scan to view portfolio</p>
          <div className="social-links-mini">
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fas fa-envelope"></i>
          </div>
        </div>
      </div>
      <div className="drag-hint">Double-click to flip • Drag to move</div>
=======
import { useEffect, useRef, useState } from 'react';

export default function CodeLanyard() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="lanyard-wrapper">
      <div className="code-lanyard">
        <div className="lanyard-strap"></div>
        <div className="code-card">
          <div className="card-header">
            <div className="card-clip"></div>
            <div className="card-title">Developer.js</div>
          </div>
          <div className="card-content">
            <div className="code-line">
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">developer</span>{' '}
              <span className="code-operator">=</span>{' '}
              <span className="code-bracket">{'{'}</span>
            </div>
            <div className="code-line code-indent">
              <span className="code-property">name</span>
              <span className="code-operator">:</span>{' '}
              <span className="code-string">"Sandi Kurniawan"</span>
              <span className="code-operator">,</span>
            </div>
            <div className="code-line code-indent">
              <span className="code-property">role</span>
              <span className="code-operator">:</span>{' '}
              <span className="code-string">"Frontend Developer"</span>
              <span className="code-operator">,</span>
            </div>
            <div className="code-line code-indent">
              <span className="code-property">skills</span>
              <span className="code-operator">:</span>{' '}
              <span className="code-bracket">[</span>
              <span className="code-string">"React"</span>
              <span className="code-operator">,</span>{' '}
              <span className="code-string">"Next.js"</span>
              <span className="code-bracket">]</span>
              <span className="code-operator">,</span>
            </div>
            <div className="code-line code-indent">
              <span className="code-property">location</span>
              <span className="code-operator">:</span>{' '}
              <span className="code-string">"Yogyakarta, ID"</span>
            </div>
            <div className="code-line">
              <span className="code-bracket">{'}'}</span>
              <span className="code-operator">;</span>
            </div>
          </div>
        </div>
      </div>
>>>>>>> b50fa1e0c5b4d8647c82b4f5a63af9412e795b2b

      <style jsx>{`
        .code-lanyard {
          position: fixed;
<<<<<<< HEAD
          z-index: 1000;
          cursor: grab;
          user-select: none;
          transform-style: preserve-3d;
          transition: transform 0.2s ease;
        }

        .code-lanyard.dragging {
          cursor: grabbing;
          transform: scale(1.05) rotate(5deg);
          z-index: 1001;
        }

        .lanyard-cord {
          width: 3px;
          height: 50px;
          background: linear-gradient(180deg, #6366f1, #8b5cf6, #a855f7);
          margin: 0 auto 10px;
          border-radius: 2px;
          position: relative;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
        }

        .lanyard-cord::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -5px;
          width: 13px;
          height: 10px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
        }

        .lanyard-card {
          width: 350px; /* Increased width */
          height: 240px; /* Increased height */
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
          perspective: 1000px;
          padding: 15px; /* Added padding to ensure content has space */
        }

        .code-lanyard.flipped .lanyard-card {
          transform: rotateY(180deg);
        }

        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .card-front {
          background: linear-gradient(135deg, 
            rgba(99, 102, 241, 0.1) 0%, 
            rgba(139, 92, 246, 0.1) 50%, 
            rgba(168, 85, 247, 0.1) 100%);
          backdrop-filter: blur(25px);
          color: var(--text-light);
        }

        .card-back {
          background: linear-gradient(135deg, 
            rgba(168, 85, 247, 0.1) 0%, 
            rgba(139, 92, 246, 0.1) 50%,
            rgba(99, 102, 241, 0.1) 100%);
          backdrop-filter: blur(25px);
          color: var(--text-light);
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 25px;
=======
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 999;
          overflow: hidden;
        }

        .code-lanyard {
          position: absolute;
          top: 20px;
          right: 100px;
          pointer-events: auto;
          animation: float 6s ease-in-out infinite;
        }

        .lanyard-strap {
          width: 4px;
          height: 150px;
          background: linear-gradient(180deg, #6366f1, #8b5cf6, #06b6d4);
          margin: 0 auto 10px;
          border-radius: 2px;
          position: relative;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
        }

        .lanyard-strap::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 12px;
          background: #374151;
          border-radius: 50%;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }

        .code-card {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border-radius: 12px;
          padding: 20px;
          width: 280px;
          border: 1px solid rgba(99, 102, 241, 0.3);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(99, 102, 241, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          cursor: grab;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .code-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4);
        }

        .code-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(99, 102, 241, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .code-card:active {
          cursor: grabbing;
          transform: scale(0.98);
>>>>>>> b50fa1e0c5b4d8647c82b4f5a63af9412e795b2b
        }

        .card-header {
          display: flex;
          align-items: center;
<<<<<<< HEAD
          justify-content: space-between;
          padding: 25px 25px 15px;
        }

        .avatar {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          box-shadow: 
            0 8px 25px rgba(139, 92, 246, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .status-indicator {
          width: 14px;
          height: 14px;
          background: linear-gradient(135deg, #10b981, #34d399);
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 
            0 0 15px rgba(16, 185, 129, 0.6),
            0 0 0 3px rgba(16, 185, 129, 0.2);
        }

        .card-content {
          padding: 0 25px 25px;
        }

        .card-content h3 {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 6px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-content p {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 15px;
          font-weight: 500;
        }

        .tech-badges {
          display: flex;
          gap: 8px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .tech-badge {
          background: rgba(139, 92, 246, 0.2);
          color: #a855f7;
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(139, 92, 246, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          background: rgba(139, 92, 246, 0.3);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .location {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .location i {
          color: #6366f1;
          font-size: 0.9rem;
        }

        .qr-code {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          border-radius: 12px;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .qr-pattern {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
          padding: 15px;
        }

        .qr-square {
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, #1e293b, #334155);
          border-radius: 2px;
          animation: qrPulse 2s ease-in-out infinite;
        }

        .qr-square:nth-child(1) { animation-delay: 0s; }
        .qr-square:nth-child(2) { animation-delay: 0.2s; }
        .qr-square:nth-child(3) { animation-delay: 0.4s; }
        .qr-square:nth-child(4) { animation-delay: 0.6s; }
        .qr-square:nth-child(5) { animation-delay: 0.8s; }
        .qr-square:nth-child(6) { animation-delay: 1s; }
        .qr-square:nth-child(7) { animation-delay: 1.2s; }
        .qr-square:nth-child(8) { animation-delay: 1.4s; }
        .qr-square:nth-child(9) { animation-delay: 1.6s; }

        @keyframes qrPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }

        .card-back p {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 15px;
          font-weight: 500;
        }

        .social-links-mini {
          display: flex;
          gap: 18px;
          margin-top: 12px;
        }

        .social-links-mini i {
          color: #6366f1;
          font-size: 1.3rem;
          opacity: 0.8;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-links-mini i:hover {
          opacity: 1;
          transform: translateY(-2px) scale(1.1);
          color: #8b5cf6;
        }

        .drag-hint {
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(30, 41, 59, 0.9));
          color: white;
          padding: 8px 15px;
          border-radius: 25px;
          font-size: 0.75rem;
          white-space: nowrap;
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .code-lanyard:hover .drag-hint {
          opacity: 1;
          transform: translateX(-50%) translateY(-5px);
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 
              0 0 15px rgba(16, 185, 129, 0.6),
              0 0 0 3px rgba(16, 185, 129, 0.2);
          }
          50% { 
            transform: scale(1.1);
            box-shadow: 
              0 0 25px rgba(16, 185, 129, 0.8),
              0 0 0 6px rgba(16, 185, 129, 0.3);
=======
          gap: 10px;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-clip {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #9ca3af, #6b7280);
          border-radius: 3px;
          position: relative;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }

        .card-clip::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 2px;
          background: #374151;
          border-radius: 1px;
        }

        .card-title {
          color: #f8fafc;
          font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
          font-size: 14px;
          font-weight: 600;
          flex: 1;
        }

        .card-content {
          font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
          font-size: 12px;
          line-height: 1.6;
        }

        .code-line {
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2px;
        }

        .code-indent {
          padding-left: 20px;
        }

        .code-keyword {
          color: #c792ea;
          font-weight: 600;
        }

        .code-variable {
          color: #82aaff;
        }

        .code-property {
          color: #ffcb6b;
        }

        .code-string {
          color: #c3e88d;
        }

        .code-operator {
          color: #89ddff;
        }

        .code-bracket {
          color: #f78c6c;
          font-weight: 600;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateY(-15px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }

        @media (max-width: 1024px) {
          .code-lanyard {
            right: 20px;
            top: 80px;
          }

          .code-card {
            width: 240px;
            padding: 15px;
          }

          .card-content {
            font-size: 11px;
          }

          .lanyard-strap {
            height: 100px;
>>>>>>> b50fa1e0c5b4d8647c82b4f5a63af9412e795b2b
          }
        }

        @media (max-width: 768px) {
<<<<<<< HEAD
          .lanyard-card {
            width: 260px;
            height: 165px;
          }

          .card-content h3 {
            font-size: 1.2rem;
          }

          .tech-badge {
            font-size: 0.7rem;
            padding: 3px 8px;
          }

          .avatar {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }

          .qr-code {
            width: 75px;
            height: 75px;
          }

          .qr-square {
            width: 10px;
            height: 10px;
=======
          .code-lanyard {
            display: none;
>>>>>>> b50fa1e0c5b4d8647c82b4f5a63af9412e795b2b
          }
        }
      `}</style>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b50fa1e0c5b4d8647c82b4f5a63af9412e795b2b
