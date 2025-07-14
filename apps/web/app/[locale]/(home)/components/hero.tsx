import { env } from '@/env';
import { Button } from '@packages/base/components/ui/button';
import { blog } from '@packages/cms';
import type { Dictionary } from '@packages/i18n';
import { MoveRight, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { AuthModal } from '../../components/auth-modal';

type HeroProps = {
  dictionary: Dictionary;
};

export const Hero = ({ dictionary }: HeroProps) => {
  const latestPost = blog.getLatestPost();

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          {latestPost && (
            <div>
              <Button variant="secondary" size="sm" className="gap-4" asChild>
                <Link href={`/blog/${latestPost._slug}`}>
                  {dictionary.web.home.hero.announcement}{' '}
                  <MoveRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
          <div className="flex flex-col gap-4">
            <h1 className="max-w-2xl text-center font-regular text-5xl tracking-tighter md:text-7xl">
              {dictionary.web.home.meta.title}
            </h1>
            <p className="max-w-2xl text-center text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
              {dictionary.web.home.meta.description}
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline" asChild>
              <Link href="/contact">
                Get in touch <PhoneCall className="h-4 w-4" />
              </Link>
            </Button>
            <AuthModal
              defaultTab="sign-up"
              title="Get Started with Turbocamp"
              description="Create your account to start building amazing things."
              redirectTo={env.NEXT_PUBLIC_DASHBOARD_URL}
            >
              <Button size="lg" className="gap-4">
                Sign up <MoveRight className="h-4 w-4" />
              </Button>
            </AuthModal>
          </div>
        </div>
      </div>
    </div>
  );
};
