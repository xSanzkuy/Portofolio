'use client';

import { useEffect, useState } from 'react';

export default function FloatingElements() {
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const floating = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      delay: Math.random() * 5,
    }));
    
    setElements(floating);
  }, []);

  return (
    <>
      {elements.map((element) => (
        <div
          key={element.id}
          className="floating-element"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
          }}
        />
      ))}

      <style jsx>{`
        .floating-element {
          position: fixed;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.1), transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(0px) rotate(180deg);
            opacity: 0.3;
          }
          75% {
            transform: translateY(20px) rotate(270deg);
            opacity: 0.6;
          }
        }
      `}</style>
    </>
  );
}