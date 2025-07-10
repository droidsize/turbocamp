<a href="https://github.com/droidsize/turbobase">
  <img alt="Turbobase - Open-source SaaS Starter" src="public/og-image.png">
  <h1 align="center">Turbobase</h1>
</a>

<p align="center">
  🚀 Open-source SaaS starter that gets you to production fast without breaking the bank!
</p>

<p align="center">
  <a href="https://x.com/droidsize">
    <img src="https://img.shields.io/x/follow/droidsize?style=flat&label=droidsize&logo=twitter&color=0bf&logoColor=fff" alt="Droidsize Twitter follower count" />
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

**Stop spending months building the same SaaS foundations.** Turbobase is a production-ready starter that ships with everything you need to launch your SaaS - authentication, payments, database, email, analytics, and more.

Built for **indie hackers** and **startups** who want to focus on their unique features, not infrastructure. Get from idea to paying customers in days, not months.

### 🎯 What You Get

- **🏗️ Complete SaaS Foundation** - Auth, payments, database, email, analytics all working together
- **💰 Cost-Optimized** - Open-source first approach keeps your expenses low while scaling
- **🚀 Multi-Platform Ready** - Centralized API works with web, mobile, desktop, or any client
- **🔐 Production Security** - Rate limiting, input validation, security headers built-in
- **📊 Business Intelligence** - User analytics, error tracking, and performance monitoring
- **🌍 Global Ready** - Multi-language support and optimized for worldwide audiences

### 🎪 Why Choose Turbobase?

**Freedom Over Vendor Lock-in**: Own your data and infrastructure from day one. Start with open-source tools, upgrade to premium services only when your revenue justifies it.

**Developer Experience**: TypeScript everywhere, comprehensive testing, hot reloading, and tools that just work together.

**Business Focus**: Skip the months of setup and integration. Start building features that make you money.

## Installation

Clone & create this repo locally with the following command:

```bash
npx turbobase@latest init my-saas-project
```

Or, deploy with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdroidsize%2Fturbobase)

### Quick Start

Get up and running in under 5 minutes! We'll set up your **Marketing Site**, **Dashboard**, and **API** - the three core components that power your application.

> **🚀 Architecture Highlight**: Our centralized API structure makes this template incredibly flexible - you can easily add mobile apps (React Native/Expo), desktop apps (Electron), or any other client that needs to connect to your backend.

#### 1. Install Dependencies

```bash
pnpm install
```

#### 2. Database Setup (Prisma + Neon)

We use **Prisma** as our type-safe ORM with **Neon** for PostgreSQL hosting. Set up your database first since everything else depends on it.

```bash
# Copy database environment
cp packages/db/.env.example packages/db/.env
```

Edit `packages/db/.env` and add your database URL:
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/turbobase?schema=public"
# Or use Neon: postgresql://username:password@your-neon-url/turbobase?schema=public
```

Run migrations to set up your database:
```bash
pnpm migrate
```

#### 3. API Setup (Better Auth + Centralized Endpoints)

Your API handles authentication, database operations, and serves all clients. It's the heart of your application.

```bash
# Copy API environment
cp apps/api/.env.example apps/api/.env.local
```

Edit `apps/api/.env.local` and add your auth secret:
```bash
BETTER_AUTH_SECRET="your-32-character-secret-key-here"
BETTER_AUTH_URL="http://localhost:3002"
# Add your database URL here too
DATABASE_URL="your-database-url-from-step-2"
```

#### 4. Dashboard Setup (Main Application)

Your dashboard is where authenticated users manage their accounts and access core features.

```bash
# Copy dashboard environment  
cp apps/dashboard/.env.example apps/dashboard/.env.local
```

Edit `apps/dashboard/.env.local`:
```bash
NEXT_PUBLIC_DASHBOARD_URL="http://localhost:3001"
NEXT_PUBLIC_WEB_URL="http://localhost:3000"
BETTER_AUTH_URL="http://localhost:3001"
BETTER_AUTH_SECRET="same-secret-from-api"
AUTH_API_URL="http://localhost:3002"
```

#### 5. Web Setup (Marketing Site)

Your marketing site showcases your product and converts visitors into users.

```bash
# Copy web environment
cp apps/web/.env.example apps/web/.env.local
```

Edit `apps/web/.env.local`:
```bash
NEXT_PUBLIC_WEB_URL="http://localhost:3000"
NEXT_PUBLIC_DASHBOARD_URL="http://localhost:3001"
NEXT_PUBLIC_API_URL="http://localhost:3002"
AUTH_API_URL="http://localhost:3002"
```

#### 6. Launch Your Applications

```bash
pnpm dev
```

🎉 **You're live!** Your applications are now running:
- **Marketing Site**: http://localhost:3000 - Your public-facing website
- **Dashboard**: http://localhost:3001 - Your main application for authenticated users  
- **API**: http://localhost:3002 - Your centralized backend serving all clients
- **Email Preview**: http://localhost:3003 - Preview your email templates
- **Database Studio**: http://localhost:5555 - Visual database management

#### 7. Content Management (Optional)

We use **Content Collections** for type-safe, file-based content management. Perfect for blogs, documentation, and marketing pages.

```bash
# Copy CMS environment (optional)
cp packages/cms/.env.example packages/cms/.env.local
```

Your content lives in `apps/web/content/` and `apps/docs/content/` - edit `.mdx` files and see changes instantly!

#### 8. Documentation Site (Optional)

Want to add documentation? We've got you covered with **Fumadocs**.

```bash
# Copy i18n environment for multi-language support
cp packages/i18n/.env.example packages/i18n/.env.local
```

Your docs will be available at: http://localhost:3004

> **💡 Pro Tip**: Use `pnpm` for best compatibility with monorepos. You can also use `bun` or `npm`, but pnpm is recommended for optimal performance.

## Tech Stack + Features

**Every tool chosen for maximum developer productivity and minimal vendor lock-in.** Here's what powers your SaaS and why:

### 🏗️ Core Framework
- **[Next.js 15](https://nextjs.org/)** – The React framework that scales with you. Server Components, App Router, and edge-ready.
- **[Turborepo](https://turbo.build/)** – Monorepo done right. Caching, parallel builds, and shared packages that just work.
- **[TypeScript](https://www.typescriptlang.org/)** – Your safety net. Catch bugs at compile time, not in production.

### 🔐 Authentication & Data
- **[Better Auth](https://www.better-auth.com/)** – Open-source auth that doesn't break the bank. Type-safe, secure, and yours to control.
- **[Prisma](https://prisma.io/)** – Database queries that feel like magic. Type-safe, auto-completing, and migration-ready.

### 🎨 UI & Design  
- **[Tailwind CSS](https://tailwindcss.com/)** – Style without the mess. Utility-first CSS that speeds up development.
- **[shadcn/ui](https://ui.shadcn.com/)** – Copy, paste, customize. Beautiful components built on Radix UI primitives.
- **[Lucide Icons](https://lucide.dev/)** – Crisp icons that look great at any size.

### 💰 Business Tools
- **[Stripe](https://stripe.com/)** – Global payments, subscriptions, and billing. Handle money like a pro.
- **[Resend](https://resend.com/)** – Email delivery built for developers. Transactional emails that actually arrive.
- **[PostHog](https://posthog.com/)** – Product analytics you can self-host. Understand your users without the privacy concerns.

### 🛠️ Developer Experience
- **[Vitest](https://vitest.dev/)** – Testing that's actually fast. Write tests that run in milliseconds.
- **[Biome](https://biomejs.dev/)** – Formatting and linting without the complexity. One tool, fast performance.
- **[Content Collections](https://content-collections.dev/)** – Markdown content with TypeScript safety. Perfect for blogs and docs.

### 🚀 What You Get Out of the Box

- **🔐 Complete Auth System** - Sign up, sign in, password reset, email verification, role-based access
- **💳 Payment Infrastructure** - Stripe integration with subscriptions, one-time payments, and billing portals
- **📊 Analytics Dashboard** - User behavior tracking, conversion funnels, and business metrics
- **📧 Email Templates** - Welcome emails, password resets, and marketing campaigns ready to go
- **🌐 Multi-language Support** - Reach global markets with built-in internationalization
- **🛡️ Production Security** - Rate limiting, input validation, CORS protection, and security headers
- **📱 Responsive Design** - Looks perfect on mobile, tablet, and desktop
- **⚡ Performance Optimized** - Fast loading, optimized images, and excellent Core Web Vitals

## Project Structure

**Organized for growth.** Our monorepo structure separates concerns while sharing code efficiently:

```
turbobase/
├── apps/                          # Your Applications
│   ├── web/                       # 🌐 Marketing website - Convert visitors to customers
│   ├── dashboard/                 # 📊 Main SaaS application - Where users live
│   ├── api/                       # 🔌 Centralized API - Powers all your clients
│   └── docs/                      # 📖 Documentation site - Help your users succeed
├── packages/                      # 📦 Shared Business Logic
│   ├── base/                      # 🎨 UI components & design system
│   ├── auth/                      # 🔐 Authentication & authorization
│   ├── db/                        # 🗄️ Database schema & queries
│   ├── email/                     # 📧 Email templates & sending
│   ├── payments/                  # 💳 Stripe integration & billing
│   ├── analytics/                 # 📈 User tracking & insights
│   ├── security/                  # 🛡️ Rate limiting & protection
│   ├── logging/                   # 🔍 Error tracking & monitoring
│   └── ai/                        # 🤖 AI/LLM integrations
└── tooling/                       # 🛠️ Development tools & configs
    ├── typescript-config/         # Shared TypeScript settings
    └── next-config/               # Shared Next.js configurations
```

### 🎯 Architecture Benefits

**Centralized API**: All your business logic lives in one place. Add mobile apps, desktop clients, or third-party integrations without rewriting code.

**Shared Packages**: Write once, use everywhere. Your authentication, database queries, and UI components work across all applications.

**Independent Deployment**: Deploy each app separately. Scale your API independently from your marketing site.

**Developer Velocity**: New team members understand the structure instantly. Everything has its place.

## Deployment

**From localhost to production in minutes.** Choose your deployment strategy:

### 🚀 Vercel (Recommended)

**Why Vercel?** Built by the Next.js team, optimized for our stack, and generous free tier.

1. **Connect your repository** to Vercel
2. **Set environment variables** in the Vercel dashboard
3. **Deploy** - Vercel automatically builds and deploys your apps

```bash
npx vercel
```

### 🐳 Docker (Self-Hosted)

**Full control over your infrastructure.** Perfect for AWS, GCP, or your own servers.

```bash
# Build the application
docker build -t turbobase .

# Run the container
docker run -p 3000:3000 turbobase
```

### 🔧 Manual Deployment

**For custom hosting environments.**

```bash
# Build all applications
pnpm build

# Start production server
pnpm start
```

> **💡 Pro Tip**: Each app can be deployed independently. Deploy your API to a serverless function, your marketing site to a CDN, and your dashboard to a container.

## Roadmap

**Building the future of SaaS development.** Here's what's coming next:

### 🤖 AI-First Features
- [ ] **AI Chat Interface** - Drop-in customer support and user assistance
- [ ] **Smart Analytics** - AI-powered insights and recommendations
- [ ] **Content Generation** - AI-assisted marketing copy and documentation

### 📱 Multi-Platform
- [ ] **Mobile App Template** - React Native starter that connects to your API
- [ ] **Desktop App Boilerplate** - Electron template for desktop applications
- [ ] **Browser Extension** - Chrome/Firefox extension starter

### 🏢 Enterprise Features
- [ ] **Advanced Multi-tenancy** - Team workspaces and organization management
- [ ] **Advanced Workflows** - Automation, triggers, and business process management
- [ ] **Compliance Pack** - GDPR, CCPA, SOC2 compliance tools and documentation

### 🛍️ Industry Templates
- [ ] **E-commerce Starter** - Product catalog, inventory, and order management
- [ ] **SaaS Marketplace** - Multi-vendor platform with payments and reviews
- [ ] **Learning Management** - Course creation, student management, and progress tracking

**Vote on features** you want to see next in our [GitHub Discussions](https://github.com/droidsize/turbobase/discussions)!

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
