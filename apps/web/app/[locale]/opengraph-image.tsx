import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Turbocamp - Production-ready SaaS Starter Kit';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
        }}
      >
        {/* Tent Icon SVG */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100"
          fill="none"
          style={{ marginBottom: 20 }}
        >
          <path
            d="M50 10 L20 80 L80 80 Z"
            stroke="#d4ff00"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M50 10 L50 80"
            stroke="#d4ff00"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M35 80 L50 45 L65 80"
            stroke="#d4ff00"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M43 5 L50 10 L57 5"
            stroke="#d4ff00"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-2px',
            }}
          >
            Turbocamp
          </span>
          <span
            style={{
              fontSize: 28,
              color: '#888888',
              textAlign: 'center',
            }}
          >
            Production-ready SaaS Starter Kit
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
