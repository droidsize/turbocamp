import { TentIcon } from '@packages/base/components/icons/camping-icons';
import { ModeToggle } from '@packages/base/components/mode-toggle';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { CampingScene } from './components/camping-scene';

type AuthLayoutProps = {
  readonly children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <div className="container relative grid h-dvh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
    {/* Left panel - Camping scene */}
    <div className="relative hidden h-full flex-col text-white lg:flex dark:border-r border-border/20">
      {/* Camping scene background */}
      <CampingScene />

      {/* Logo */}
      <div className="relative z-20 p-10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
            <TentIcon className="h-6 w-6 text-primary" />
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 blur-md -z-10" />
          </div>
          <span className="font-bold text-xl text-white tracking-tight group-hover:text-primary transition-colors">
            Turbocamp
          </span>
        </Link>
      </div>

      {/* Mode toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ModeToggle />
      </div>

      {/* Testimonial at bottom */}
      <div className="relative z-20 mt-auto p-10">
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-primary text-lg">★</span>
            <span className="text-xs uppercase tracking-wider text-white/60">
              Trailblazer Story
            </span>
          </div>
          <blockquote className="space-y-3">
            <p className="text-base text-white/90 leading-relaxed">
              &ldquo;Turbocamp helped us launch our product in record time. The
              camping-themed aesthetic gives our brand a unique, memorable
              identity that our users love.&rdquo;
            </p>
            <footer className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                SD
              </div>
              <div>
                <p className="text-sm font-medium text-white">Sofia Davis</p>
                <p className="text-xs text-white/60">Founder, TrailTech</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>

    {/* Right panel - Auth form */}
    <div className="lg:p-8 flex items-center justify-center">
      <div className="mx-auto flex w-full max-w-[400px] flex-col justify-center space-y-6">
        {children}
      </div>
    </div>
  </div>
);

export default AuthLayout;
