<a href="https://github.com/droidsize/turbobase">
  <img alt="Turbobase - Open-source SaaS Starter" src="public/og-image.png">
  <h1 align="center">Turbobase</h1>
</a>

<p align="center">
  🚀 Open-source SaaS starter that gets you to production fast without breaking the bank!
</p>

<p align="center">
  <a href="https://twitter.com/droidsize">
    <img src="https://img.shields.io/twitter/follow/droidsize?style=flat&label=droidsize&logo=twitter&color=0bf&logoColor=fff" alt="Droidsize Twitter follower count" />
  </a>
  <a href="https://github.com/droidsize/turbobase">
    <img src="https://img.shields.io/github/stars/droidsize/turbobase?style=flat&logo=github&color=0bf&logoColor=fff" alt="GitHub stars" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#project-structure"><strong>Project Structure</strong></a> ·
  <a href="#deployment"><strong>Deployment</strong></a> ·
  <a href="#roadmap"><strong>Roadmap</strong></a> ·
  <a href="#author"><strong>Author</strong></a> ·
  <a href="#credits"><strong>Credits</strong></a>
</p>
<br/>

## Introduction

Turbobase is a modern, open-source SaaS starter template that gets you to production fast without breaking the bank. Built with [Next.js 15](https://nextjs.org/), [Turborepo](https://turbo.build/), [Prisma](https://prisma.io/), [Better Auth](https://www.better-auth.com/), [Stripe](https://stripe.com/), [Resend](https://resend.com/), [PostHog](https://posthog.com/), [Sentry](https://sentry.io/), [Fumadocs](https://fumadocs.vercel.app/), and production-grade SEO tools.

This template features **role-based access control**, **centralized API**, **admin dashboard**, **payments**, **internationalization**, **email systems**, **rate-limiting**, **logging**, and **AI-ready components** - all seamlessly integrated to accelerate your SaaS development journey.

**Turbobase** is designed to maximize the use of open-source tools and minimize vendor lock-in, giving you complete control over your data and infrastructure while keeping costs low. It's inspired by [next-forge](https://github.com/vercel/next-forge) but focuses on cost-effective, open-source alternatives.

### 🎯 Why Turbobase?

- 🔓 **Freedom**: No dependency on external SaaS platforms to get started
- 🛠️ **Control**: Full control over your data and infrastructure  
- 💰 **Cost-effective**: Leverage free, open-source alternatives first
- 🚀 **Production-ready**: Battle-tested tools and patterns
- 📈 **Scalable**: Easy migration to premium services when needed
- 🔐 **Secure**: Built-in security, rate limiting, and best practices

## Installation

Clone & create this repo locally with the following command:

```bash
npx turbobase@latest init my-saas-project
```

Or, deploy with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdroidsize%2Fturbobase)

### Steps

1. **Install dependencies** using pnpm:

```bash
pnpm install
```

2. **Copy environment files** and update the variables:

```bash
# Database Environment
cp packages/db/.env.example packages/db/.env

# API Environment
cp apps/api/.env.example apps/api/.env.local

# Main App Environment  
cp apps/app/.env.example apps/app/.env.local

# Web Environment
cp apps/web/.env.example apps/web/.env.local

# CMS Environment
cp packages/cms/.env.example packages/cms/.env.local

# i18n Environment
cp packages/i18n/.env.example packages/i18n/.env.local
```

3. **Set up your database** in `packages/db/.env`:

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/turbobase?schema=public"
```

4. **Run database migrations**:

```bash
pnpm migrate
```

5. **Start the development server**:

```bash
pnpm dev
```

Your applications will be available at:
- **Main App**: http://localhost:3000
- **Marketing Site**: http://localhost:3001  
- **API**: http://localhost:3002
- **Email Preview**: http://localhost:3003
- **Documentation**: http://localhost:3004
- **Database Studio**: http://localhost:3005

> **Note**: Use `pnpm` for best compatibility. You can also use `bun` or `npm` but pnpm is recommended for monorepos.

## Tech Stack + Features

### Frameworks

- **[Next.js 15](https://nextjs.org/)** – React framework with App Router, Server Components, and Server Actions
- **[Turborepo](https://turbo.build/)** – High-performance monorepo build system with caching and parallel execution
- **[Better Auth](https://www.better-auth.com/)** – Type-safe, open-source authentication with built-in providers
- **[Prisma](https://prisma.io/)** – Next-generation TypeScript ORM with type safety and migrations
- **[React Email](https://react.email/)** – Build beautiful emails with React components

### Platforms & Services

- **[Vercel](https://vercel.com/)** – Deploy and preview with git integration
- **[Resend](https://resend.com/)** – Developer-first email API for transactional emails
- **[Stripe](https://stripe.com/)** – Complete payment processing and subscription management
- **[PostHog](https://posthog.com/)** – Open-source product analytics and feature flags
- **[Sentry](https://sentry.io/)** – Error monitoring and performance tracking

### UI & Design

- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for rapid UI development
- **[shadcn/ui](https://ui.shadcn.com/)** – Beautiful, accessible components built with Radix UI and Tailwind CSS
- **[Lucide Icons](https://lucide.dev/)** – Beautiful, customizable SVG icons
- **[Framer Motion](https://www.framer.com/motion/)** – Production-ready motion library for React
- **Custom Fonts** – Optimized font loading with `next/font`

### Development & Code Quality

- **[TypeScript](https://www.typescriptlang.org/)** – Static type checking for reliability and developer experience
- **[Biome](https://biomejs.dev/)** – Fast formatter and linter for JavaScript and TypeScript
- **[Vitest](https://vitest.dev/)** – Fast unit test framework powered by Vite
- **[Content Collections](https://content-collections.dev/)** – Type-safe, file-based content management
- **[Fumadocs](https://fumadocs.vercel.app/)** – Documentation framework built for Next.js

### Features

- 🔐 **Authentication & Authorization** - Role-based access control with user and organization management
- 📊 **Admin Dashboard** - Complete admin interface with user management, analytics, and settings
- 💳 **Payment Processing** - Stripe integration with subscriptions, one-time payments, and billing
- 🌐 **Internationalization** - Multi-language support with automatic locale detection
- 📧 **Email System** - Transactional emails, newsletters, and beautiful templates
- 🛡️ **Security** - Rate limiting, CORS protection, input validation, and security headers
- 📈 **Analytics & Monitoring** - User analytics, error tracking, and performance monitoring
- 🤖 **AI-Ready** - Prepared for AI integrations with OpenAI, Anthropic, and more
- 📱 **Responsive Design** - Mobile-first design that works on all devices
- ⚡ **Performance** - Optimized builds, caching, and Core Web Vitals optimization

## Project Structure

```
turbobase/
├── apps/                          # Applications
│   ├── web/                       # Marketing website (Next.js)
│   ├── app/                       # Main SaaS application (Next.js)
│   ├── api/                       # API routes & serverless functions
│   └── docs/                      # Documentation site (Fumadocs)
├── packages/                      # Shared packages
│   ├── base/                      # UI components & design system (shadcn/ui)
│   ├── auth/                      # Authentication logic (Better Auth)
│   ├── db/                        # Database schema, client & utilities (Prisma)
│   ├── email/                     # Email templates (React Email)
│   ├── cms/                       # Content management (Content Collections)
│   ├── analytics/                 # Analytics integration (PostHog)
│   ├── payments/                  # Payment processing (Stripe)
│   ├── storage/                   # File storage utilities
│   ├── security/                  # Security middleware & rate limiting
│   ├── logging/                   # Error tracking & logging (Sentry)
│   ├── i18n/                      # Internationalization
│   ├── seo/                       # SEO utilities & metadata
│   ├── feature-flags/             # Feature flag management
│   ├── ai/                        # AI/LLM integrations
│   └── testing/                   # Testing utilities & configurations
├── tooling/                       # Development tooling
│   ├── typescript-config/         # Shared TypeScript configurations
│   └── next-config/               # Shared Next.js configurations
└── scripts/                       # CLI tool & deployment scripts
```

## Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in the Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy your apps

Or use the Vercel CLI:

```bash
npx vercel
```

### Docker

```bash
# Build the application
docker build -t turbobase .

# Run the container
docker run -p 3000:3000 turbobase
```

### Manual Deployment

```bash
# Build all applications
pnpm build

# Start production server
pnpm start
```

## Roadmap

- [ ] **Enhanced AI Integration** - More AI providers and pre-built AI components
- [ ] **Advanced Analytics** - Custom analytics dashboard and reporting
- [ ] **Mobile App Template** - React Native or Expo template
- [ ] **E-commerce Features** - Product catalog, inventory management, and orders
- [ ] **Advanced Workflows** - Automation and workflow management
- [ ] **Multi-tenancy** - Advanced organization and workspace management
- [ ] **CRM Integration** - Customer relationship management features
- [ ] **API Documentation** - Auto-generated API docs with examples

## Author

Created by [@droidsize](https://twitter.com/droidsize) in 2025, released under the MIT license.

Want to support this project? Give it a ⭐ on GitHub!

## Credits

This project was inspired by and builds upon the excellent work of:

- **[Vercel next-forge](https://github.com/vercel/next-forge)** - The original inspiration for this template
- **[Midday v1](https://github.com/midday/v1)** - Another excellent turborepo template, inspiration for the project structure
- **[shadcn](https://ui.shadcn.com/)** - For the amazing UI components and design system

Special thanks to the entire open-source community for creating the amazing tools that make this template possible.

---

<p align="center">
  <strong>Built with ❤️ by Droidsize and the open-source community</strong>
</p>

<p align="center">
  <a href="https://github.com/droidsize/turbobase/issues">Report Bug</a> ·
  <a href="https://github.com/droidsize/turbobase/issues">Request Feature</a> ·
  <a href="https://github.com/droidsize/turbobase/discussions">Discussions</a>
</p>
