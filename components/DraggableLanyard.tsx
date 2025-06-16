'use client';

import { useState, useRef, useEffect } from 'react';

export default function DraggableLanyard() {
  const [position, setPosition] = useState({ x: 50, y: 150 });
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
      className={`draggable-lanyard ${isDragging ? 'dragging' : ''} ${isFlipped ? 'flipped' : ''}`}
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
            <div className="profile-photo">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face" 
                alt="Sandi Kurniawan"
              />
              <div className="photo-border"></div>
            </div>
            <div className="status-indicator"></div>
          </div>
          <div className="card-content">
            <h3>Sandi Kurniawan</h3>
            <p>Frontend Developer & Designer</p>
            <div className="tech-badges">
              <span className="tech-badge react">React</span>
              <span className="tech-badge next">Next.js</span>
              <span className="tech-badge vue">Vue.js</span>
            </div>
            <div className="card-footer">
              <div className="location">
                <i className="fas fa-map-marker-alt"></i>
                <span>Yogyakarta, ID</span>
              </div>
              <div className="experience">
                <i className="fas fa-code"></i>
                <span>2+ Years</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="qr-section">
            <div className="qr-code">
              <div className="qr-pattern"></div>
            </div>
            <p>Scan to view portfolio</p>
          </div>
          <div className="social-links-mini">
            <div className="social-item">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </div>
            <div className="social-item">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </div>
            <div className="social-item">
              <i className="fas fa-envelope"></i>
              <span>Email</span>
            </div>
          </div>
          <div className="achievements">
            <div className="achievement">
              <i className="fas fa-trophy"></i>
              <span>7 Certificates</span>
            </div>
            <div className="achievement">
              <i className="fas fa-project-diagram"></i>
              <span>10+ Projects</span>
            </div>
          </div>
        </div>
      </div>
      <div className="drag-hint">Double-click to flip • Drag to move</div>

      <style jsx>{`
        .draggable-lanyard {
          position: fixed;
          z-index: 1000;
          cursor: grab;
          user-select: none;
          transform-style: preserve-3d;
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
        }

        .draggable-lanyard.dragging {
          cursor: grabbing;
          transform: scale(1.05) rotate(5deg);
          z-index: 1001;
          filter: drop-shadow(0 20px 50px rgba(0, 212, 255, 0.4));
        }

        .lanyard-cord {
          width: 3px;
          height: 40px;
          background: linear-gradient(180deg, #666, #333, #666);
          margin: 0 auto 8px;
          border-radius: 2px;
          position: relative;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }

        .lanyard-cord::before {
          content: '';
          position: absolute;
          top: -8px;
          left: -4px;
          width: 11px;
          height: 8px;
          background: linear-gradient(145deg, #444, #222);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .lanyard-card {
          width: 260px;
          height: 160px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          perspective: 1000px;
        }

        .draggable-lanyard.flipped .lanyard-card {
          transform: rotateY(180deg);
        }

        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .card-front {
          background: linear-gradient(135deg, 
            rgba(0, 212, 255, 0.15) 0%, 
            rgba(76, 205, 196, 0.15) 30%, 
            rgba(102, 126, 234, 0.15) 70%,
            rgba(255, 107, 107, 0.1) 100%);
          backdrop-filter: blur(25px);
          color: var(--text-light);
          position: relative;
        }

        .card-front::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-primary);
          animation: gradientMove 3s ease infinite;
        }

        .card-back {
          background: linear-gradient(135deg, 
            rgba(102, 126, 234, 0.15) 0%, 
            rgba(0, 212, 255, 0.15) 50%,
            rgba(76, 205, 196, 0.1) 100%);
          backdrop-filter: blur(25px);
          color: var(--text-light);
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          padding: 16px;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 16px 8px;
        }

        .profile-photo {
          position: relative;
          width: 50px;
          height: 50px;
        }

        .profile-photo img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid transparent;
          background: var(--gradient-primary);
          padding: 1px;
        }

        .photo-border {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 50%;
          background: var(--gradient-primary);
          z-index: -1;
          animation: pulse 2s infinite;
        }

        .status-indicator {
          width: 12px;
          height: 12px;
          background: var(--success-color);
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 0 0 12px var(--success-color);
          border: 2px solid white;
        }

        .card-content {
          padding: 0 16px 16px;
          flex: 1;
        }

        .card-content h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 4px;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-content > p {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin-bottom: 12px;
          font-weight: 500;
        }

        .tech-badges {
          display: flex;
          gap: 6px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .tech-badge {
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 0.65rem;
          font-weight: 600;
          border: 1px solid;
          transition: all 0.3s ease;
        }

        .tech-badge.react {
          background: rgba(97, 218, 251, 0.2);
          color: #61dafb;
          border-color: rgba(97, 218, 251, 0.3);
        }

        .tech-badge.next {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .tech-badge.vue {
          background: rgba(79, 192, 141, 0.2);
          color: #4fc08d;
          border-color: rgba(79, 192, 141, 0.3);
        }

        .tech-badge:hover {
          transform: translateY(-1px);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .location, .experience {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--text-muted);
          font-size: 0.7rem;
        }

        .location i, .experience i {
          color: var(--primary-color);
          font-size: 0.8rem;
        }

        .qr-section {
          text-align: center;
          margin-bottom: 16px;
        }

        .qr-code {
          width: 70px;
          height: 70px;
          background: white;
          border-radius: 10px;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .qr-pattern {
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 20%, #000 2px, transparent 2px),
            radial-gradient(circle at 80% 20%, #000 2px, transparent 2px),
            radial-gradient(circle at 20% 80%, #000 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, #000 2px, transparent 2px),
            radial-gradient(circle at 50% 50%, #000 3px, transparent 3px);
          background-size: 18px 18px, 18px 18px, 18px 18px, 18px 18px, 14px 14px;
        }

        .qr-section p {
          color: var(--text-muted);
          font-size: 0.75rem;
          margin: 0;
        }

        .social-links-mini {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }

        .social-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-size: 0.75rem;
          transition: all 0.3s ease;
        }

        .social-item:hover {
          color: var(--primary-color);
          transform: translateX(3px);
        }

        .social-item i {
          color: var(--primary-color);
          font-size: 0.9rem;
          width: 16px;
        }

        .achievements {
          display: flex;
          justify-content: space-between;
          gap: 8px;
        }

        .achievement {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--text-muted);
          font-size: 0.65rem;
          background: rgba(0, 212, 255, 0.1);
          padding: 6px 10px;
          border-radius: 12px;
          border: 1px solid rgba(0, 212, 255, 0.2);
        }

        .achievement i {
          color: var(--gold-accent);
          font-size: 0.8rem;
        }

        .drag-hint {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.65rem;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .draggable-lanyard:hover .drag-hint {
          opacity: 1;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 768px) {
          .lanyard-card {
            width: 220px;
            height: 140px;
          }

          .profile-photo {
            width: 40px;
            height: 40px;
          }

          .card-content h3 {
            font-size: 1rem;
          }

          .tech-badge {
            font-size: 0.6rem;
            padding: 2px 6px;
          }

          .qr-code {
            width: 60px;
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .lanyard-card {
            width: 200px;
            height: 130px;
          }

          .card-header {
            padding: 12px 12px 6px;
          }

          .card-content {
            padding: 0 12px 12px;
          }

          .profile-photo {
            width: 35px;
            height: 35px;
          }

          .status-indicator {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  );
}