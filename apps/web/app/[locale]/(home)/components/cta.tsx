import { env } from '@/env';
import { Button } from '@packages/base/components/ui/button';
import type { Dictionary } from '@packages/i18n';
import { MoveRight, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { AuthModal } from '../../components/auth-modal';

type CTAProps = {
  dictionary: Dictionary;
};

export const CTA = ({ dictionary }: CTAProps) => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-8 rounded-md bg-muted p-4 text-center lg:p-14">
        <div className="flex flex-col gap-2">
          <h3 className="max-w-xl font-regular text-3xl tracking-tighter md:text-5xl">
            {dictionary.web.home.cta.title}
          </h3>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed tracking-tight">
            {dictionary.web.home.cta.description}
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="gap-4" variant="outline" asChild>
            <Link href="/contact">
              {dictionary.web.global.primaryCta}{' '}
              <PhoneCall className="h-4 w-4" />
            </Link>
          </Button>
          <AuthModal
            defaultTab="sign-up"
            title="Get Started with Turbocamp"
            description="Create your account to start building amazing things."
            redirectTo={env.NEXT_PUBLIC_DASHBOARD_URL}
          >
            <Button className="gap-4">
              {dictionary.web.global.secondaryCta}{' '}
              <MoveRight className="h-4 w-4" />
            </Button>
          </AuthModal>
        </div>
      </div>
    </div>
  </div>
);
