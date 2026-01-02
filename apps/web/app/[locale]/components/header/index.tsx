'use client';

import { env } from '@/env';
import { useSession } from '@packages/auth/client';
import { ModeToggle } from '@packages/base/components/mode-toggle';
import { Button } from '@packages/base/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@packages/base/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@packages/base/components/ui/navigation-menu';
import {
  Building2,
  LogOut,
  Menu,
  MoveRight,
  Settings,
  User,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import type { Dictionary } from '@packages/i18n';
import Image from 'next/image';
import Logo from '../../logo.png';
import { AuthModal } from '../auth-modal';
import { LanguageSwitcher } from './language-switcher';

type HeaderProps = {
  dictionary: Dictionary;
};

const UserMenu = ({
  user,
  onSignOut,
}: { user: any; onSignOut: () => void }) => {
  const getInitials = (name?: string, email?: string) => {
    if (name) {
      return name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    if (email) {
      return email[0].toUpperCase();
    }
    return 'U';
  };

  const userInitials = getInitials(user.name, user.email);
  const displayName = user.name || user.email || 'User';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-10 w-10 rounded-full hover:bg-primary/10"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 font-medium text-primary text-sm ring-2 ring-primary/30">
            {user.image ? (
              <Image
                src={user.image}
                alt={`${displayName} avatar`}
                width={32}
                height={32}
                className="h-10 w-10 rounded-full"
              />
            ) : (
              userInitials
            )}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="font-medium text-sm leading-none">{displayName}</p>
            <p className="text-muted-foreground text-xs leading-none">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href={`${env.NEXT_PUBLIC_DASHBOARD_URL}`}
            className="cursor-pointer"
          >
            <User className="mr-2 h-4 w-4" />
            <span>Go to Basecamp</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Building2 className="mr-2 h-4 w-4" />
          <span>New Camp</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Camp Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onSignOut} className="text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Break Camp</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const Header = ({ dictionary }: HeaderProps) => {
  const { data: session } = useSession();
  const [isOpen, setOpen] = useState(false);

  const handleSignOut = async () => {
    const { signOut } = await import('@packages/auth/client');
    await signOut();
  };

  const navigationItems = [
    {
      title: dictionary.web.header.home,
      href: '/',
      description: '',
    },
    {
      title: dictionary.web.header.product.title,
      description: dictionary.web.header.product.description,
      items: [
        {
          title: dictionary.web.header.product.pricing,
          href: '/pricing',
        },
      ],
    },
    {
      title: dictionary.web.header.blog,
      href: '/blog',
      description: '',
    },
  ];

  if (env.NEXT_PUBLIC_DOCS_URL) {
    navigationItems.push({
      title: dictionary.web.header.docs,
      href: env.NEXT_PUBLIC_DOCS_URL,
      description: '',
    });
  }

  return (
    <header className="sticky top-0 left-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container relative mx-auto flex min-h-16 flex-row items-center gap-4 lg:grid lg:grid-cols-3">
        {/* Desktop Navigation */}
        <div className="hidden flex-row items-center justify-start gap-4 lg:flex">
          <NavigationMenu className="flex items-start justify-start">
            <NavigationMenuList className="flex flex-row justify-start gap-2">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink asChild>
                      <Button
                        variant="ghost"
                        className="text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
                        asChild
                      >
                        <Link href={item.href}>{item.title}</Link>
                      </Button>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex grid-cols-2 flex-col gap-4 lg:grid">
                          <div className="flex h-full flex-col justify-between">
                            <div className="flex flex-col">
                              <p className="text-base font-semibold">
                                {item.title}
                              </p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button
                              size="sm"
                              variant="camping"
                              className="mt-10"
                              asChild
                            >
                              <Link href="/contact">
                                {dictionary.web.global.primaryCta}
                              </Link>
                            </Button>
                          </div>
                          <div className="flex h-full flex-col justify-end text-sm">
                            {item.items?.map((subItem, idx) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={idx}
                                className="flex flex-row items-center justify-between rounded-lg px-4 py-3 hover:bg-primary/5 transition-colors group"
                              >
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                  {subItem.title}
                                </span>
                                <MoveRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 lg:justify-center group"
        >
          <div className="relative">
            <Image
              src={Logo}
              alt="Turbocamp Logo"
              width={28}
              height={28}
              className="rounded-md transition-transform group-hover:scale-105"
            />
            {/* Neon glow on hover */}
            <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 blur-md -z-10" />
          </div>
          <span className="whitespace-nowrap font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
            Turbocamp
          </span>
        </Link>

        {/* Right side actions */}
        <div className="flex w-full justify-end gap-3">
          <Button
            variant="ghost"
            className="hidden md:inline text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link href="/contact">{dictionary.web.header.contact}</Link>
          </Button>
          <div className="hidden border-r border-border/50 md:inline" />
          <div className="hidden md:inline">
            <LanguageSwitcher />
          </div>
          <div className="hidden md:inline">
            <ModeToggle />
          </div>
          {session?.user ? (
            <UserMenu user={session.user} onSignOut={handleSignOut} />
          ) : (
            <>
              <AuthModal
                defaultTab="sign-in"
                title="Welcome Back, Trailblazer"
                description="Sign in to continue your adventure"
              >
                <Button
                  variant="ghost"
                  className="hidden md:inline text-muted-foreground hover:text-foreground"
                >
                  {dictionary.web.header.signIn}
                </Button>
              </AuthModal>
              <AuthModal defaultTab="sign-up">
                <Button variant="camping" className="glow-neon">
                  {dictionary.web.header.signUp}
                </Button>
              </AuthModal>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="flex w-12 shrink items-end justify-end lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          {isOpen && (
            <div className="container absolute top-16 right-0 flex w-full flex-col gap-6 border-t border-border/50 bg-background/95 backdrop-blur-md py-6 shadow-lg">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-2 hover:text-primary transition-colors"
                        target={
                          item.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          item.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-lg font-medium">{item.title}</span>
                        <MoveRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg font-medium text-foreground">
                        {item.title}
                      </p>
                    )}
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex items-center justify-between py-2 pl-4 border-l-2 border-primary/30 hover:border-primary transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-muted-foreground hover:text-foreground transition-colors">
                          {subItem.title}
                        </span>
                        <MoveRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <LanguageSwitcher />
                <ModeToggle />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
