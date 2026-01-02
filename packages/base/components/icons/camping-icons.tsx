import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Tent Icon - Perfect for dashboards, home, or base camp concepts
 */
export function TentIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3.5 21 12 3l8.5 18" />
      <path d="M8.5 21v-6l3.5-3 3.5 3v6" />
      <path d="M3.5 21h17" />
    </svg>
  );
}

/**
 * Compass Icon - Navigation, settings, or direction concepts
 */
export function CompassIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polygon
        points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
}

/**
 * Campfire Icon - Activity, notifications, or warmth concepts
 */
export function CampfireIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 12c-2-2.67-3-5.33-1-8 3 2 4 5 1 8Z" />
      <path d="M12 12c2 2.67 3 5.33 1 8-3-2-4-5-1-8Z" />
      <path d="m4 22 2-4h12l2 4" />
      <path d="M6 18h12" />
    </svg>
  );
}

/**
 * Pine Tree Icon - Nature, growth, or environment concepts
 */
export function PineTreeIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m17 14-5-8-5 8h2l-3 5h12l-3-5Z" />
      <path d="M12 22v-3" />
    </svg>
  );
}

/**
 * Mountain Icon - Goals, achievements, or challenges
 */
export function MountainIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m8 3 4 8 5-5 4 14H3Z" />
      <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42" />
    </svg>
  );
}

/**
 * Trail/Path Icon - Progress, journey, or roadmap concepts
 */
export function TrailIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.6 3 .1 1.2 1.3 2.3 2.5 2.5.2 1.1 1.3 2 2.5 2 1 0 2-.7 2.4-1.5M12 3c1.2 0 2.4.6 3 1.7a3.6 3.6 0 0 1 4.4 4.3c1 .6 1.7 1.8 1.6 3-.1 1.2-1.3 2.3-2.5 2.5-.2 1.1-1.3 2-2.5 2-1 0-2-.7-2.4-1.5" />
      <path d="M12 3v18" />
      <circle cx="12" cy="7" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

/**
 * Backpack Icon - Profile, personal items, or storage
 */
export function BackpackIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
      <path d="M8 10h8" />
    </svg>
  );
}

/**
 * Map Icon - Planning, billing, or overview concepts
 */
export function MapIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  );
}

/**
 * Lantern Icon - Support, guidance, or light concepts
 */
export function LanternIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 2h6" />
      <path d="M12 2v2" />
      <path d="M8 4h8l1 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6l1-2Z" />
      <path d="M12 8v4" />
      <path d="M9 18v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2" />
    </svg>
  );
}

/**
 * Moon & Stars Icon - Night mode, ambient, or time concepts
 */
export function MoonStarsIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
    </svg>
  );
}

/**
 * Camp Group Icon - Team, members, or community
 */
export function CampGroupIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </svg>
  );
}

/**
 * Hiker Icon - User, profile, or individual
 */
export function HikerIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="14" cy="4" r="2" />
      <path d="m14 10-2 4-3 1v4" />
      <path d="m14 10 2 1v5l3 1" />
      <path d="m14 10-1 4 1 3" />
      <path d="m9 15 2 4" />
    </svg>
  );
}

/**
 * Binoculars Icon - Search, scout, or discovery
 */
export function BinocularsIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 10h4" />
      <path d="M5 7c0-1.1.9-2 2-2a1 1 0 0 1 1 1v9H5a2 2 0 0 1-2-2v-4c0-.3.1-.6.3-.8" />
      <path d="M19 7c0-1.1-.9-2-2-2a1 1 0 0 0-1 1v9h3a2 2 0 0 0 2-2v-4c0-.3-.1-.6-.3-.8" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
    </svg>
  );
}

/**
 * Shield Tent Icon - Security, protection, or safety
 */
export function ShieldTentIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 3-5 3 5" />
      <path d="M10 12v3h4v-3" />
    </svg>
  );
}

/**
 * Sunrise Icon - New beginnings, CTA, or start
 */
export function SunriseIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2v4" />
      <path d="m4.93 10.93 2.83 2.83" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-2.83 2.83" />
      <path d="M22 22H2" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
  );
}

/**
 * Trail Marker Icon - Navigation, waypoint, or progress
 */
export function TrailMarkerIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22V8" />
      <path d="M5 8h14" />
      <path d="M5 3h14l-3 5H8l-3-5Z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

/**
 * Firefly Icon - Small decorative element
 */
export function FireflyIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <path d="M12 5v2" />
      <path d="M12 17v2" />
      <path d="M5 12h2" />
      <path d="M17 12h2" />
      <path d="m7.05 7.05 1.4 1.4" />
      <path d="m15.55 15.55 1.4 1.4" />
      <path d="m15.55 8.45 1.4-1.4" />
      <path d="m7.05 16.95 1.4-1.4" />
    </svg>
  );
}
