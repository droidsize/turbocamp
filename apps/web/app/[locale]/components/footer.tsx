import { env } from '@/env';
import { TentIcon } from '@packages/base/components/icons/camping-icons';
import { legal, type Legal } from '@packages/cms';
import { Github, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../logo.png';

type NavigationItem = {
  title: string;
  href?: string;
  description?: string;
  items?: Array<{
    title: string;
    href: string;
  }>;
};

export const Footer = () => {
  const legalPages = legal.getPosts();

  const navigationItems: NavigationItem[] = [
    {
      title: 'Base Camp',
      href: '/',
      description: '',
    },
    {
      title: 'Explore',
      description: 'Discover the trails.',
      items: [
        {
          title: 'Trail Journal',
          href: '/blog',
        },
      ],
    },
    {
      title: 'Trail Rules',
      description: 'Important guidelines for the journey.',
      items:
        legalPages && legalPages.length > 0
          ? legalPages.map((post: Legal) => ({
              title: post._title,
              href: `/legal/${post._slug}`,
            }))
          : [],
    },
  ];

  if (env.NEXT_PUBLIC_DOCS_URL) {
    navigationItems.at(1)?.items?.push({
      title: 'Trail Maps',
      href: env.NEXT_PUBLIC_DOCS_URL,
    });
  }

  return (
    <footer className="relative border-t border-border/50 bg-[oklch(0.12_0.005_60)] dark:bg-[oklch(0.12_0.005_60)]">
      {/* Topographic pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <pattern
            id="topo-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#topo-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 w-full py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left side - Brand */}
            <div className="flex flex-col items-start gap-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <Image
                    src={Logo}
                    alt="Turbocamp Logo"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 blur-md -z-10" />
                </div>
                <span className="font-bold text-xl text-white tracking-tight group-hover:text-primary transition-colors">
                  Turbocamp
                </span>
              </Link>
              <p className="max-w-sm text-sm text-white/60 leading-relaxed">
                Your digital basecamp for building extraordinary applications.
                Set up camp and start your adventure today.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right side - Navigation */}
            <div className="grid items-start gap-8 sm:grid-cols-3">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start gap-3"
                >
                  <div className="flex items-center gap-2">
                    <TentIcon className="h-4 w-4 text-primary/60" />
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="font-semibold text-white hover:text-primary transition-colors"
                        target={item.href.includes('http') ? '_blank' : undefined}
                        rel={
                          item.href.includes('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span className="font-semibold text-white">
                        {item.title}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 pl-6">
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="text-sm text-white/60 hover:text-primary transition-colors"
                        target={
                          subItem.href.includes('http') ? '_blank' : undefined
                        }
                        rel={
                          subItem.href.includes('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Turbocamp. All trails reserved.
            </p>
            <p className="text-xs text-white/40">
              Built with determination and hot cocoa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
