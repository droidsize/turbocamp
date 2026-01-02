import { env } from '@/env';
import { Button } from '@packages/base/components/ui/button';
import { blog } from '@packages/cms';
import type { Dictionary } from '@packages/i18n';
import { MoveRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { AuthModal } from '../../components/auth-modal';
import { FireflyParticles } from './hero/firefly-particles';
import { MountainSilhouette } from './hero/mountain-silhouette';
import { Starfield } from './hero/starfield';

type HeroProps = {
  dictionary: Dictionary;
};

export const Hero = ({ dictionary }: HeroProps) => {
  const latestPost = blog.getLatestPost();

  return (
    <div className="relative w-full overflow-hidden bg-camp-gradient min-h-[90vh] flex items-center">
      {/* Night sky gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.02_250)] via-[oklch(0.16_0.01_60)] to-[oklch(0.18_0.005_60)]" />

      {/* Starfield background */}
      <Starfield />

      {/* Subtle radial glow from top center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(215,223,35,0.08),transparent)]" />

      {/* Firefly particles */}
      <FireflyParticles />

      {/* Mountain silhouette at bottom */}
      <MountainSilhouette />

      {/* Content */}
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-32">
          {/* Announcement badge - Camp pennant style */}
          {latestPost && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Button
                variant="outline"
                size="sm"
                className="gap-3 border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/50 backdrop-blur-sm group"
                asChild
              >
                <Link href={`/blog/${latestPost._slug}`}>
                  <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" />
                  <span className="text-foreground/90">
                    {dictionary.web.home.hero.announcement}
                  </span>
                  <MoveRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          )}

          {/* Main headline */}
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            <h1 className="max-w-3xl text-center font-semibold text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="inline-block">Build Your</span>{' '}
              <span className="inline-block text-primary text-glow-subtle">
                Digital Basecamp
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-center text-base text-muted-foreground leading-relaxed tracking-tight sm:text-lg md:text-xl">
              {dictionary.web.home.meta.description}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button
              size="lg"
              variant="outline"
              className="gap-3 border-border/50 hover:border-primary/50 hover:bg-primary/5 min-w-[180px]"
              asChild
            >
              <Link href="/contact">
                Explore the Trail
                <MoveRight className="h-4 w-4" />
              </Link>
            </Button>
            <AuthModal
              defaultTab="sign-up"
              title="Start Your Adventure"
              description="Create your basecamp to start building amazing things."
              redirectTo={env.NEXT_PUBLIC_DASHBOARD_URL}
            >
              <Button
                size="lg"
                variant="camping"
                className="gap-3 min-w-[180px] glow-neon"
              >
                Set Up Camp
                <MoveRight className="h-4 w-4" />
              </Button>
            </AuthModal>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 mt-4 animate-in fade-in duration-1000 delay-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground"
                  style={{
                    animationDelay: `${500 + i * 100}ms`,
                  }}
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">500+</span>{' '}
              trailblazers building with Turbocamp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
