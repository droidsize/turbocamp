import { env } from '@/env';
import { MountainIcon, SunriseIcon } from '@packages/base/components/icons/camping-icons';
import { Button } from '@packages/base/components/ui/button';
import type { Dictionary } from '@packages/i18n';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { AuthModal } from '../../components/auth-modal';

type CTAProps = {
  dictionary: Dictionary;
};

export const CTA = ({ dictionary }: CTAProps) => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="relative flex flex-col items-center gap-8 rounded-2xl overflow-hidden p-8 text-center lg:p-16">
        {/* Background gradient - sunrise over mountains */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.005_60)] via-[oklch(0.22_0.02_30)] to-[oklch(0.35_0.08_45)]" />

        {/* Mountain silhouette at bottom */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-24 text-[oklch(0.15_0.005_60)]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L0,60 L150,90 L300,40 L450,80 L600,20 L750,70 L900,30 L1050,60 L1200,45 L1200,120 Z"
            fill="currentColor"
          />
        </svg>

        {/* Sun glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[radial-gradient(ellipse_at_center,rgba(215,223,35,0.3)_0%,transparent_70%)]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="inline-flex items-center justify-center gap-2 mx-auto">
            <SunriseIcon className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Ready for the Summit
            </span>
          </div>
          <h3 className="max-w-xl font-bold text-3xl tracking-tight text-white md:text-4xl lg:text-5xl">
            {dictionary.web.home.cta.title}
          </h3>
          <p className="max-w-xl text-base text-white/70 leading-relaxed md:text-lg">
            {dictionary.web.home.cta.description}
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
          <Button
            variant="outline"
            size="lg"
            className="gap-3 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30 backdrop-blur-sm"
            asChild
          >
            <Link href="/contact">
              <MountainIcon className="h-4 w-4" />
              {dictionary.web.global.primaryCta}
            </Link>
          </Button>
          <AuthModal
            defaultTab="sign-up"
            title="Begin Your Ascent"
            description="Create your basecamp to reach new heights."
            redirectTo={env.NEXT_PUBLIC_DASHBOARD_URL}
          >
            <Button variant="camping" size="lg" className="gap-3 glow-neon">
              {dictionary.web.global.secondaryCta}
              <MoveRight className="h-4 w-4" />
            </Button>
          </AuthModal>
        </div>
      </div>
    </div>
  </div>
);
