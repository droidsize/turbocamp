import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpen, Github, Home } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-foreground font-bold text-background text-xs">
            T
          </div>
          <span className="font-bold">Turbocamp</span>
          <span className="text-muted-foreground text-xs">Docs</span>
        </div>
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      text: 'Home',
      url: process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000',
      icon: <Home className="h-4 w-4" />,
      external: true,
    },
    {
      text: 'GitHub',
      url: 'https://github.com/turbocamp/turbocamp',
      icon: <Github className="h-4 w-4" />,
      external: true,
    },
  ],
};
