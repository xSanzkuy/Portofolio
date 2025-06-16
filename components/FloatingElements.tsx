'use client';

import { useEffect, useState } from 'react';

export default function FloatingElements() {
  const [elements, setElements] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    size: number; 
    delay: number; 
    type: 'circle' | 'triangle' | 'square' | 'hexagon';
    color: string;
  }>>([]);

  useEffect(() => {
    const colors = [
      'rgba(0, 212, 255, 0.1)',
      'rgba(255, 107, 107, 0.1)',
      'rgba(76, 205, 196, 0.1)',
      'rgba(102, 126, 234, 0.1)',
      'rgba(255, 215, 0, 0.1)',
      'rgba(255, 20, 147, 0.1)'
    ];
    
    const types: Array<'circle' | 'triangle' | 'square' | 'hexagon'> = ['circle', 'triangle', 'square', 'hexagon'];
    
    const floating = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 30,
      delay: Math.random() * 10,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    
    setElements(floating);
  }, []);

  const getShapeStyles = (type: string, size: number, color: string) => {
    const baseStyles = {
      width: `${size}px`,
      height: `${size}px`,
      background: color,
      position: 'absolute' as const,
    };

    switch (type) {
      case 'circle':
        return { ...baseStyles, borderRadius: '50%' };
      case 'triangle':
        return {
          width: '0',
          height: '0',
          borderLeft: `${size/2}px solid transparent`,
          borderRight: `${size/2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
          background: 'transparent',
          position: 'absolute' as const,
        };
      case 'square':
        return { ...baseStyles, borderRadius: '10px', transform: 'rotate(45deg)' };
      case 'hexagon':
        return { 
          ...baseStyles, 
          borderRadius: '20%',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        };
      default:
        return baseStyles;
    }
  };

  return (
    <>
      {elements.map((element) => (
        <div
          key={element.id}
          className="floating-element"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            ...getShapeStyles(element.type, element.size, element.color),
          }}
        />
      ))}

      <style jsx>{`
        .floating-element {
          position: fixed;
          pointer-events: none;
          z-index: -1;
          animation: complexFloat 25s ease-in-out infinite;
          filter: blur(1px);
        }

        @keyframes complexFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) translateX(20px) rotate(90deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(180deg);
            opacity: 0.4;
          }
          75% {
            transform: translateY(25px) translateX(10px) rotate(270deg);
            opacity: 0.6;
          }
        }

        @media (max-width: 768px) {
          .floating-element {
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}