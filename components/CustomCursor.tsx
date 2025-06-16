'use client';

import { useEffect, useState } from 'react';

interface Trail {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Trail[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    let trailId = 0;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create trail with reduced frequency
      if (trailId % 3 === 0) { // Only create trail every 3rd movement
        const newTrail: Trail = {
          id: trailId++,
          x: e.clientX,
          y: e.clientY,
        };
        
        setTrails(prevTrails => {
          const updatedTrails = [...prevTrails, newTrail];
          if (updatedTrails.length > 8) { // Reduced from 20 to 8
            updatedTrails.shift();
          }
          return updatedTrails;
        });

        // Remove trail after shorter delay
        setTimeout(() => {
          setTrails(prevTrails => prevTrails.filter(trail => trail.id !== newTrail.id));
        }, 200); // Reduced from 300ms to 200ms
      }
      trailId++;
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target instanceof Element && target.matches) {
        if (target.matches('a, button, .btn, .skill-tag, .certificate-card, .project-card, .social-link, .stat-card, .skill-category')) {
          setIsHovering(true);
        }
      }
    };

    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
      />
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="trail"
          style={{
            left: trail.x - 2,
            top: trail.y - 2,
            opacity: (index + 1) / trails.length * 0.4, // Reduced opacity
          }}
        />
      ))}
      
      <style jsx>{`
        .cursor {
          position: fixed;
          width: 24px;
          height: 24px;
          background: rgba(0, 212, 255, 0.3);
          border: 2px solid rgba(0, 212, 255, 0.6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          mix-blend-mode: difference;
          backdrop-filter: blur(2px);
        }

        .cursor-dot {
          position: fixed;
          width: 4px;
          height: 4px;
          background: rgba(0, 212, 255, 0.8);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transition: all 0.1s ease;
        }

        .cursor.hover {
          transform: scale(1.8);
          background: rgba(0, 212, 255, 0.15);
          border-color: rgba(0, 212, 255, 0.8);
        }

        .cursor.click {
          transform: scale(0.6);
          background: rgba(255, 107, 107, 0.4);
          border-color: rgba(255, 107, 107, 0.8);
        }

        .trail {
          position: fixed;
          width: 4px;
          height: 4px;
          background: rgba(0, 212, 255, 0.6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: opacity 0.2s ease-out;
        }

        @media (max-width: 768px) {
          .cursor,
          .cursor-dot,
          .trail {
            display: none;
          }
        }
      `}</style>
    </>
  );
}