'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  duration: number;
  type: 'bubble' | 'star' | 'heart' | 'code';
}

export default function ParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;
    const colors = [
      'rgba(0, 212, 255, 0.8)', 
      'rgba(255, 107, 107, 0.8)', 
      'rgba(76, 205, 196, 0.8)', 
      'rgba(102, 126, 234, 0.8)',
      'rgba(255, 215, 0, 0.8)',
      'rgba(255, 20, 147, 0.8)'
    ];
    const types: Array<'bubble' | 'star' | 'heart' | 'code'> = ['bubble', 'star', 'heart', 'code'];

    const createParticle = () => {
      if (particles.length > 20) return;

      const particle: Particle = {
        id: particleId++,
        x: Math.random() * 100,
        y: 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 3,
        duration: Math.random() * 4 + 5,
        type: types[Math.floor(Math.random() * types.length)],
      };

      setParticles(prev => [...prev, particle]);

      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== particle.id));
      }, particle.duration * 1000);
    };

    const interval = setInterval(createParticle, 800);
    return () => clearInterval(interval);
  }, [particles.length]);

  const getParticleContent = (type: string) => {
    switch (type) {
      case 'star':
        return '⭐';
      case 'heart':
        return '💖';
      case 'code':
        return '💻';
      default:
        return '';
    }
  };

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle particle-${particle.type}`}
          style={{
            left: `${particle.x}vw`,
            bottom: '0',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.type === 'bubble' ? particle.color : 'transparent',
            animationDuration: `${particle.duration}s`,
            fontSize: particle.type !== 'bubble' ? `${particle.size}px` : '0',
          }}
        >
          {particle.type !== 'bubble' && getParticleContent(particle.type)}
        </div>
      ))}

      <style jsx>{`
        .particle {
          position: fixed;
          pointer-events: none;
          z-index: -1;
          animation: float-up linear forwards;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .particle-bubble {
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        .particle-star,
        .particle-heart,
        .particle-code {
          animation: float-up-rotate linear forwards;
        }

        @keyframes float-up {
          to {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }

        @keyframes float-up-rotate {
          to {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}