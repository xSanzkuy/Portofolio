'use client';

import { useState, useRef, useEffect } from 'react';

export default function DraggableLanyard() {
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
            <div className="avatar">
              <i className="fas fa-user"></i>
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
            <div className="qr-pattern"></div>
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

      <style jsx>{`
        .draggable-lanyard {
          position: fixed;
          z-index: 1000;
          cursor: grab;
          user-select: none;
          transform-style: preserve-3d;
          transition: transform 0.2s ease;
        }

        .draggable-lanyard.dragging {
          cursor: grabbing;
          transform: scale(1.05) rotate(5deg);
          z-index: 1001;
        }

        .lanyard-cord {
          width: 2px;
          height: 40px;
          background: linear-gradient(180deg, #666, #333);
          margin: 0 auto 8px;
          border-radius: 1px;
          position: relative;
        }

        .lanyard-cord::before {
          content: '';
          position: absolute;
          top: -8px;
          left: -4px;
          width: 10px;
          height: 8px;
          background: #333;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }

        .lanyard-card {
          width: 280px;
          height: 180px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
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
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .card-front {
          background: linear-gradient(135deg, 
            rgba(0, 212, 255, 0.1) 0%, 
            rgba(76, 205, 196, 0.1) 50%, 
            rgba(102, 126, 234, 0.1) 100%);
          backdrop-filter: blur(20px);
          color: var(--text-light);
        }

        .card-back {
          background: linear-gradient(135deg, 
            rgba(102, 126, 234, 0.1) 0%, 
            rgba(0, 212, 255, 0.1) 100%);
          backdrop-filter: blur(20px);
          color: var(--text-light);
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 20px 10px;
        }

        .avatar {
          width: 50px;
          height: 50px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
        }

        .status-indicator {
          width: 12px;
          height: 12px;
          background: var(--success-color);
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 0 0 10px var(--success-color);
        }

        .card-content {
          padding: 0 20px 20px;
        }

        .card-content h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 4px;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .card-content p {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .tech-badges {
          display: flex;
          gap: 6px;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }

        .tech-badge {
          background: rgba(0, 212, 255, 0.2);
          color: var(--primary-color);
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          border: 1px solid rgba(0, 212, 255, 0.3);
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .location {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        .location i {
          color: var(--primary-color);
        }

        .qr-code {
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 8px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
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
          background-size: 20px 20px, 20px 20px, 20px 20px, 20px 20px, 15px 15px;
        }

        .social-links-mini {
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }

        .social-links-mini i {
          color: var(--primary-color);
          font-size: 1.2rem;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .social-links-mini i:hover {
          opacity: 1;
        }

        .drag-hint {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.7rem;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .draggable-lanyard:hover .drag-hint {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .lanyard-card {
            width: 240px;
            height: 150px;
          }

          .card-content h3 {
            font-size: 1.1rem;
          }

          .tech-badge {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </div>
  );
}