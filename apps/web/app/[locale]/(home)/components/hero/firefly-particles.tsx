'use client';

import { useEffect, useState } from 'react';

type Firefly = {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
};

export function FireflyParticles() {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    // Generate random fireflies
    const count = 15;
    const generated: Firefly[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80, // Keep within 10-90% of width
      y: 20 + Math.random() * 50, // Keep in middle portion
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
      size: 3 + Math.random() * 3,
    }));
    setFireflies(generated);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      {fireflies.map((firefly) => (
        <div
          key={firefly.id}
          className="absolute rounded-full"
          style={{
            left: `${firefly.x}%`,
            top: `${firefly.y}%`,
            width: `${firefly.size}px`,
            height: `${firefly.size}px`,
            background:
              'radial-gradient(circle, rgba(215, 223, 35, 0.9) 0%, rgba(215, 223, 35, 0.4) 40%, transparent 70%)',
            boxShadow: `0 0 ${firefly.size * 2}px rgba(215, 223, 35, 0.5), 0 0 ${firefly.size * 4}px rgba(215, 223, 35, 0.3)`,
            animation: `firefly-float-${firefly.id % 3} ${firefly.duration}s ease-in-out infinite, firefly-glow ${firefly.duration * 0.7}s ease-in-out infinite`,
            animationDelay: `${firefly.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes firefly-float-0 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(15px, -20px) scale(1.2);
            opacity: 1;
          }
          50% {
            transform: translate(-10px, -35px) scale(0.9);
            opacity: 0.5;
          }
          75% {
            transform: translate(-20px, -15px) scale(1.1);
            opacity: 0.8;
          }
        }
        @keyframes firefly-float-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(0.9);
            opacity: 0.4;
          }
          25% {
            transform: translate(-15px, -25px) scale(1.1);
            opacity: 0.9;
          }
          50% {
            transform: translate(10px, -40px) scale(1);
            opacity: 0.3;
          }
          75% {
            transform: translate(20px, -10px) scale(1.2);
            opacity: 1;
          }
        }
        @keyframes firefly-float-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1.1);
            opacity: 0.5;
          }
          25% {
            transform: translate(20px, -15px) scale(0.9);
            opacity: 1;
          }
          50% {
            transform: translate(-5px, -30px) scale(1.2);
            opacity: 0.4;
          }
          75% {
            transform: translate(-15px, -20px) scale(1);
            opacity: 0.7;
          }
        }
        @keyframes firefly-glow {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.5);
          }
        }
      `}</style>
    </div>
  );
}
