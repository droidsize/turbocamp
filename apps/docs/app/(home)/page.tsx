import Link from 'next/link';
import { 
  Book, 
  Code2, 
  Rocket, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center justify-center gap-6 py-24 text-center">
        <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
          <Zap className="h-4 w-4" />
          Open Source SaaS Starter Kit
        </div>
        
        <h1 className="max-w-4xl font-bold text-5xl tracking-tight sm:text-6xl">
          Build your SaaS with{' '}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Turbocamp
          </span>
        </h1>
        
        <p className="max-w-2xl text-fd-muted-foreground text-lg">
          The comprehensive SaaS starter template with authentication, payments, 
          database, email, analytics, and more. Built with Next.js 15, TypeScript, 
          and modern best practices.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-6 py-3 font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/docs/getting-started/installation"
            className="inline-flex items-center gap-2 rounded-lg border bg-fd-background px-6 py-3 font-medium transition-colors hover:bg-fd-muted"
          >
            <Code2 className="h-4 w-4" />
            Quick Start
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto py-16">
        <h2 className="mb-12 text-center font-bold text-3xl">
          Everything you need to launch your SaaS
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Authentication"
            description="Complete auth system with Better Auth, session management, and cross-domain support."
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6" />}
            title="API Architecture"
            description="Centralized API design with type-safe endpoints and automatic error handling."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Multi-tenancy"
            description="Organization management with member roles, invitations, and permissions."
          />
          <FeatureCard
            icon={<Book className="h-6 w-6" />}
            title="Documentation"
            description="Professional docs with Fumadocs, MDX support, and search functionality."
          />
          <FeatureCard
            icon={<Rocket className="h-6 w-6" />}
            title="Production Ready"
            description="Deployed to Vercel with monitoring, logging, and performance optimization."
          />
          <FeatureCard
            icon={<Code2 className="h-6 w-6" />}
            title="Developer Experience"
            description="TypeScript, ESLint, Prettier, hot reload, and comprehensive testing setup."
          />
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto border-t py-16">
        <h2 className="mb-8 text-center font-bold text-2xl">Quick Links</h2>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <QuickLink
            href="/docs/getting-started"
            title="Getting Started"
            description="Set up your development environment"
          />
          <QuickLink
            href="/docs/setup/authentication"
            title="Authentication"
            description="Configure user authentication"
          />
          <QuickLink
            href="/docs/api/overview"
            title="API Reference"
            description="Explore the API documentation"
          />
          <QuickLink
            href="/docs/deployment/vercel"
            title="Deployment"
            description="Deploy to production"
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border bg-fd-card p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-fd-muted-foreground text-sm">{description}</p>
    </div>
  );
}

function QuickLink({ 
  href, 
  title, 
  description 
}: { 
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-2 rounded-lg border p-4 transition-colors hover:bg-fd-muted"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>
        <ArrowRight className="h-4 w-4 text-fd-muted-foreground transition-transform group-hover:translate-x-1" />
      </div>
      <p className="text-fd-muted-foreground text-sm">{description}</p>
    </Link>
  );
}
