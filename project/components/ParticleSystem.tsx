'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  duration: number;
}

export default function ParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;
    const colors = ['rgba(0, 212, 255, 0.6)', 'rgba(255, 107, 107, 0.6)', 'rgba(76, 205, 196, 0.6)', 'rgba(102, 126, 234, 0.6)'];

    const createParticle = () => {
      if (particles.length > 15) return;

      const particle: Particle = {
        id: particleId++,
        x: Math.random() * 100,
        y: 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 2,
        duration: Math.random() * 3 + 4,
      };

      setParticles(prev => [...prev, particle]);

      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== particle.id));
      }, particle.duration * 1000);
    };

    const interval = setInterval(createParticle, 1200);
    return () => clearInterval(interval);
  }, [particles.length]);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}vw`,
            bottom: '0',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      <style jsx>{`
        .particle {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
          animation: float-up linear forwards;
        }

        @keyframes float-up {
          to {
            transform: translateY(-120vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}