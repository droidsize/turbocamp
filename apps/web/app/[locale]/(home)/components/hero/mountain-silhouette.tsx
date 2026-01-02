export function MountainSilhouette() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]">
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <defs>
          {/* Mountain gradient - darker at bottom */}
          <linearGradient id="mountainGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.25 0.01 60)" />
            <stop offset="100%" stopColor="oklch(0.18 0.005 60)" />
          </linearGradient>
          {/* Back mountain - slightly lighter */}
          <linearGradient id="mountainBackGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.28 0.01 60)" />
            <stop offset="100%" stopColor="oklch(0.20 0.005 60)" />
          </linearGradient>
          {/* Tree gradient */}
          <linearGradient id="treeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.22 0.02 145)" />
            <stop offset="100%" stopColor="oklch(0.18 0.01 60)" />
          </linearGradient>
        </defs>

        {/* Back mountain range - larger, further back */}
        <path
          d="M0,320 L0,200 Q180,80 360,180 Q480,100 600,160 Q750,40 900,140 Q1050,60 1200,150 Q1350,90 1440,180 L1440,320 Z"
          fill="url(#mountainBackGradient)"
          opacity="0.7"
        />

        {/* Front mountain range - sharper peaks */}
        <path
          d="M0,320 L0,220 L120,180 L200,220 L280,160 L400,200 L480,140 L580,190 L680,120 L800,180 L920,100 L1040,170 L1140,130 L1240,190 L1320,150 L1440,200 L1440,320 Z"
          fill="url(#mountainGradient)"
        />

        {/* Pine tree silhouettes on the left */}
        <g fill="url(#treeGradient)">
          {/* Tree group left */}
          <path d="M60,320 L60,280 L40,280 L70,240 L50,240 L80,200 L110,240 L90,240 L120,280 L100,280 L100,320 Z" />
          <path d="M130,320 L130,290 L115,290 L140,260 L125,260 L150,230 L175,260 L160,260 L185,290 L170,290 L170,320 Z" />
          <path d="M20,320 L20,295 L8,295 L30,270 L18,270 L40,245 L62,270 L50,270 L72,295 L60,295 L60,320 Z" />

          {/* Tree group right */}
          <path d="M1340,320 L1340,285 L1325,285 L1355,250 L1340,250 L1370,215 L1400,250 L1385,250 L1415,285 L1400,285 L1400,320 Z" />
          <path d="M1380,320 L1380,270 L1360,270 L1395,225 L1375,225 L1410,180 L1445,225 L1425,225 L1460,270 L1440,270 L1440,320 Z" />
        </g>
      </svg>
    </div>
  );
}
