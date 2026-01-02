'use client';

import { useEffect, useState } from 'react';

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
};

export function CampingScene() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars
    const generated: Star[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60, // Keep stars in upper portion
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }));
    setStars(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Night sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.10_0.02_250)] via-[oklch(0.14_0.01_60)] to-[oklch(0.18_0.005_60)]" />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Moon */}
      <div className="absolute top-16 right-16 w-16 h-16">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 opacity-90" />
        <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(255,255,200,0.4)]" />
      </div>

      {/* Mountains SVG */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-64"
        viewBox="0 0 800 200"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="mountain-back" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.22 0.01 60)" />
            <stop offset="100%" stopColor="oklch(0.18 0.005 60)" />
          </linearGradient>
          <linearGradient id="mountain-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.20 0.01 60)" />
            <stop offset="100%" stopColor="oklch(0.16 0.005 60)" />
          </linearGradient>
          <linearGradient id="tree-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.18 0.03 145)" />
            <stop offset="100%" stopColor="oklch(0.14 0.02 145)" />
          </linearGradient>
        </defs>

        {/* Back mountains */}
        <path
          d="M0,200 L0,120 Q100,60 200,100 Q300,40 400,90 Q500,30 600,85 Q700,50 800,100 L800,200 Z"
          fill="url(#mountain-back)"
          opacity="0.6"
        />

        {/* Front mountains */}
        <path
          d="M0,200 L0,140 L80,110 L160,140 L240,90 L320,130 L400,70 L480,120 L560,85 L640,125 L720,95 L800,130 L800,200 Z"
          fill="url(#mountain-front)"
        />

        {/* Pine trees */}
        <g fill="url(#tree-gradient)">
          <path d="M60,200 L60,170 L45,170 L70,140 L55,140 L80,110 L105,140 L90,140 L115,170 L100,170 L100,200 Z" />
          <path d="M130,200 L130,175 L118,175 L140,150 L128,150 L150,125 L172,150 L160,150 L182,175 L170,175 L170,200 Z" />
          <path d="M680,200 L680,165 L665,165 L690,135 L675,135 L700,105 L725,135 L710,135 L735,165 L720,165 L720,200 Z" />
          <path d="M740,200 L740,170 L728,170 L750,145 L738,145 L760,120 L782,145 L770,145 L792,170 L780,170 L780,200 Z" />
        </g>
      </svg>

      {/* Tent and campfire scene */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <svg width="200" height="120" viewBox="0 0 200 120">
          {/* Tent */}
          <path
            d="M40,100 L100,30 L160,100 Z"
            fill="oklch(0.30 0.02 60)"
            stroke="oklch(0.35 0.02 60)"
            strokeWidth="2"
          />
          <path
            d="M40,100 L100,30 L100,100 Z"
            fill="oklch(0.25 0.02 60)"
          />
          <path
            d="M80,100 L100,70 L120,100 Z"
            fill="oklch(0.22 0.01 60)"
          />

          {/* Campfire logs */}
          <ellipse cx="100" cy="115" rx="25" ry="5" fill="oklch(0.20 0.05 30)" />
          <rect x="85" y="105" width="30" height="8" rx="2" fill="oklch(0.25 0.08 30)" transform="rotate(-10 100 109)" />
          <rect x="85" y="105" width="30" height="8" rx="2" fill="oklch(0.22 0.06 30)" transform="rotate(10 100 109)" />

          {/* Fire glow */}
          <ellipse cx="100" cy="100" rx="12" ry="8" fill="rgba(215, 223, 35, 0.3)" />
          <ellipse cx="100" cy="98" rx="8" ry="5" fill="rgba(215, 223, 35, 0.5)" />

          {/* Animated fire flames */}
          <g className="animate-pulse">
            <path
              d="M100,105 Q95,95 100,85 Q105,75 100,65 Q110,80 105,90 Q112,85 100,105"
              fill="rgba(215, 223, 35, 0.9)"
            />
            <path
              d="M95,105 Q90,95 95,88 Q100,80 95,75 Q102,85 98,92 Q105,88 95,105"
              fill="rgba(255, 180, 50, 0.8)"
            />
            <path
              d="M105,105 Q110,95 105,88 Q100,82 107,78 Q100,88 103,93 Q98,90 105,105"
              fill="rgba(255, 200, 80, 0.7)"
            />
          </g>
        </svg>
      </div>

      {/* Firefly particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${40 + Math.random() * 30}%`,
              background: 'radial-gradient(circle, rgba(215, 223, 35, 0.9) 0%, transparent 70%)',
              boxShadow: '0 0 8px rgba(215, 223, 35, 0.5)',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
