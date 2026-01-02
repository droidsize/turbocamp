<a href="https://github.com/droidsize/turbocamp">
  <img alt="Turbocamp - Open-source SaaS Starter" src="public/og-image.png">
  <h1 align="center">Turbocamp</h1>
</a>

<p align="center">
  ⛺ Open-source SaaS starter that gets you to production fast without breaking the bank!
</p>

<p align="center">
  <a href="https://twitter.com/droidsize">
    <img src="https://img.shields.io/twitter/follow/droidsize?style=flat&label=droidsize&logo=twitter&color=0bf&logoColor=fff" alt="Droidsize Twitter follower count" />
  </a>
  <a href="https://github.com/droidsize/turbocamp">
    <img src="https://img.shields.io/github/stars/droidsize/turbocamp?style=flat&logo=github&color=0bf&logoColor=fff" alt="GitHub stars" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#quick-start"><strong>Quick Start</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#project-structure"><strong>Project Structure</strong></a> ·
  <a href="#deployment"><strong>Deployment</strong></a> ·
  <a href="#roadmap"><strong>Roadmap</strong></a> ·
  <a href="#author"><strong>Author</strong></a> ·
  <a href="#credits"><strong>Credits</strong></a>
</p>
<br/>

## Introduction

**Stop spending months building the same SaaS foundations.** Turbocamp is a production-ready starter that ships with everything you need to launch your SaaS - authentication, payments, database, email, analytics, ai, logging, and more.

Built for **indie hackers** and **startups** who want to focus on their product, not infrastructure. Get from idea to paying customers in days, not months.

### 🎯 What You Get

- **🏗️ Complete SaaS Foundation** - Auth, organizations, payments, database, email, analytics, ai, logging all working together
- **💰 Cost-Optimized** - Open-source first approach keeps your expenses low while scaling
- **🚀 Multi-Platform Ready** - Centralized API works with web, mobile, desktop, or any client
- **🔐 Production Security** - Rate limiting, input validation, security headers built-in
- **📊 Track your vitals** - User analytics, error tracking, and performance monitoring
- **🌍 Global Ready** - Multi-language support and optimized for worldwide audiences
- **📖 Documentation Platform** - Beautiful docs site with Fumadocs for user guides and API references

### 🎪 Why Choose Turbocamp?

**Freedom Over Vendor Lock-in**: Own your data and infrastructure from day one. Start with open-source tools, upgrade to premium services only when your revenue justifies it.

**Developer Experience**: TypeScript everywhere, comprehensive testing, hot reloading, and tools that just work together.

**Business Focus**: Skip the months of setup and integration. Start building features that make you money.

## Installation

Clone & create this repo locally with the following command:

```bash
npx Turbocamp@latest init my-saas-project
```

Or, deploy with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdroidsize%2FTurbocamp)

### Quick Start

Get up and running in under 5 minutes! We'll set up your **Marketing Site**, **Dashboard**, and **API** - the three core components that power your application.

> **🚀 Architecture Note**: Our centralized API structure makes this template incredibly flexible - you can easily add mobile apps (React Native/Expo), desktop apps (Electron), or any other client that needs to connect to your backend.

> **🔒 Type-Safe Environment**: Turbocamp uses [@t3-oss/env-nextjs](https://env.t3.gg/) for type-safe environment variables. All env vars are validated at build time with full TypeScript support!

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
DATABASE_URL="postgresql://username:password@localhost:5432/Turbocamp?schema=public"
# Or use Neon: postgresql://username:password@your-neon-url/turbocamp?schema=public
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

#### 5. Internationalization Setup (Multi-language Support)

Set up i18n for global reach. This is used by your web app for multi-language support.

```bash
# Copy i18n environment for multi-language support
cp packages/i18n/.env.example packages/i18n/.env.local
```

#### 6. Web Setup (Marketing Site)

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

#### 7. Launch Your Applications

```bash
pnpm dev
```

🎉 **You're live!** Your applications are now running:
- **Marketing Site**: http://localhost:3000 - Your public-facing website
- **Dashboard**: http://localhost:3001 - Your main application for authenticated users  
- **API**: http://localhost:3002 - Your centralized backend serving all clients
- **Email Preview**: http://localhost:3003 - Preview your email templates
- **Database Studio**: http://localhost:5555 - Visual database management

#### 8. Content Management (Optional)

We use **Content Collections** for type-safe, file-based content management. Perfect for blogs, documentation, and marketing pages.

```bash
# Copy CMS environment (optional)
cp packages/cms/.env.example packages/cms/.env.local
```

Your content lives in `apps/web/content/` - edit `.mdx` files and see changes instantly!

#### 9. Documentation Site (Optional)

Want to add documentation? We've got you covered with **Fumadocs** - a beautiful, fast documentation framework.

```bash
# Copy docs environment (optional)
cp apps/docs/.env.example apps/docs/.env.local
```

```bash
pnpm dev --filter=docs
```

Your docs will be available at: http://localhost:3004

> **💡 Pro Tip**: Use `pnpm` for best compatibility with monorepos. You can also use `bun` or `npm`, but pnpm is recommended for optimal performance.

## Features

**Everything you need to launch and scale your SaaS.** Here's what's included out of the box:

### 🔐 Authentication & User Management
- **Complete Auth System** - Sign up, sign in, password reset, email verification
- **Role-Based Access Control** - Manage user permissions and organization access
- **Session Management** - Secure, scalable session handling across all devices
- **Social Login Ready** - Easy integration with Google, GitHub, and other providers

### 🏢 Organization Management
- **Multi-Tenant Architecture** - Built-in support for teams and organizations
- **Organization Creation** - Users can create up to 5 organizations
- **Team Management** - Invite members, manage roles (owner, admin, member)
- **Organization Switching** - Seamless context switching between organizations
- **Member Permissions** - Fine-grained access control at organization level
- **Invitation System** - Email-based invitations with expiration
- **Organization Settings** - Profile management, billing per organization

### 💳 Payment & Billing
- **Stripe Integration** - Accept payments, manage subscriptions, and handle billing
- **Multiple Payment Methods** - Credit cards, digital wallets, and bank transfers
- **Billing Portals** - Let customers manage their own subscriptions and invoices
- **Tax Calculation** - Automatic tax handling for global customers

### 📊 Analytics & Insights
- **User Behavior Tracking** - Understand how users interact with your product
- **Conversion Funnels** - Track user journeys from signup to payment
- **Business Metrics** - Revenue, churn, growth, and engagement analytics
- **Custom Events** - Track specific actions important to your business

### 📧 Email System
- **Transactional Emails** - Welcome, password reset, billing notifications
- **Marketing Campaigns** - Newsletters, product updates, and announcements
- **Email Templates** - Beautiful, responsive email designs ready to use
- **Delivery Tracking** - Monitor email opens, clicks, and deliverability

### 🌐 Global Ready
- **Multi-language Support** - Reach international markets with i18n
- **Responsive Design** - Perfect experience on mobile, tablet, and desktop
- **SEO Optimized** - Built-in metadata, JSON-LD, and search engine optimization
- **Performance First** - Fast loading, optimized images, excellent Core Web Vitals

### 🛡️ Production Security
- **Rate Limiting** - Protect against abuse and DDoS attacks
- **Input Validation** - Sanitize and validate all user inputs
- **CORS Protection** - Secure cross-origin requests
- **Security Headers** - Industry-standard security configurations

### 📖 Content & Documentation
- **CMS Integration** - Type-safe, file-based content management
- **Documentation Site** - Beautiful docs with search, navigation, and theming
- **Blog System** - Ready-to-use blog for marketing and announcements
- **Content Collections** - Manage content with TypeScript safety

### 🚩 Developer Tools
- **Feature Flags** - Control rollouts and A/B test features without deployments
- **Error Tracking** - Monitor and debug issues in production
- **Performance Monitoring** - Track application performance and bottlenecks
- **Testing Suite** - Comprehensive testing setup with fast unit tests

## Tech Stack

**Every tool chosen for maximum developer productivity and minimal vendor lock-in.** Here's what powers your SaaS and why:

### 🏗️ Core Framework
- **[Next.js 15.3](https://nextjs.org/)** – The React framework that scales with you. Server Components, App Router, and edge-ready.
- **[React 19.2](https://react.dev/)** – The latest React with Server Components and improved performance.
- **[Turborepo](https://turbo.build/)** – Monorepo done right. Caching, parallel builds, and shared packages that just work.
- **[TypeScript 5.9](https://www.typescriptlang.org/)** – Your safety net. Catch bugs at compile time, not in production.
- **[@t3-oss/env-nextjs](https://env.t3.gg/)** – Type-safe environment variables. Validated at build time with Zod schemas.

### 🔐 Authentication & Data
- **[Better Auth](https://www.better-auth.com/)** – Open-source auth that doesn't break the bank. Type-safe, secure, and yours to control.
- **[Prisma 7](https://prisma.io/)** – Database queries that feel like magic. Type-safe, auto-completing, and migration-ready.
- **[Neon](https://neon.tech/)** – Serverless PostgreSQL with branching, autoscaling, and instant provisioning.

### 🎨 UI & Design
- **[Tailwind CSS v4](https://tailwindcss.com/)** – Style without the mess. Utility-first CSS that speeds up development.
- **[shadcn/ui](https://ui.shadcn.com/)** – Copy, paste, customize. Beautiful components built on Radix UI primitives.
- **[Lucide Icons](https://lucide.dev/)** – Crisp icons that look great at any size.
- **[Geist Font](https://vercel.com/font)** – The beautiful Vercel font family for modern interfaces.

### 💰 Business Tools
- **[Stripe](https://stripe.com/)** – Global payments, subscriptions, and billing. Handle money like a pro.
- **[Resend](https://resend.com/)** – Email delivery built for developers. Transactional emails that actually arrive.
- **[PostHog](https://posthog.com/)** – Product analytics you can self-host. Understand your users without the privacy concerns.

### 🛠️ Developer Experience
- **[Vitest](https://vitest.dev/)** – Testing that's actually fast. Write tests that run in milliseconds.
- **[Biome](https://biomejs.dev/)** – Formatting and linting without the complexity. One tool, fast performance.
- **[Content Collections](https://content-collections.dev/)** – Markdown content with TypeScript safety. Perfect for blogs and docs.
- **[Fumadocs](https://fumadocs.vercel.app/)** – Beautiful documentation framework. Auto-generated navigation, search, and mobile-friendly.

## API Architecture & Authentication Flow

**One API to rule them all.** Our centralized API architecture gives you superpowers - build once, connect everywhere.

### 🏗️ Centralized API Design

**Why centralized?** Your API at `localhost:3002` becomes the single source of truth for all your applications. Whether you're building a web app, mobile app, or desktop client, they all speak to the same backend.

```mermaid
graph TD
    A[Web App<br/>localhost:3000] --> |"API Calls"| D[API Server<br/>localhost:3002]
    B[Dashboard App<br/>localhost:3001] --> |"API Calls"| D
    C[Mobile App<br/>Future] --> |"REST API"| D
    
    D --> E[Better Auth<br/>Authentication]
    D --> F[Prisma ORM<br/>Database]
    D --> G[Stripe<br/>Payments]
    
    E --> H[(PostgreSQL<br/>Database)]
    F --> H
    
    subgraph "Authentication Flow"
        I[Sign Up/Sign In] --> J{Where?}
        J -->|Web App| K[Auth Modal<br/>Quick & Easy]
        J -->|Dashboard| L[Full Auth Pages<br/>Complete Experience]
        K --> M[Redirect to Dashboard]
        L --> N[Stay in Dashboard]
    end
    
    subgraph "Cross-Domain Sessions"
        O[Session Cookie] --> P[.turbocamp.dev]
        P --> Q[Shared across all apps]
        Q --> R[Secure & Seamless]
    end
    
    style D fill:#e1f5fe
    style E fill:#f3e5f5
    style H fill:#e8f5e8
    style K fill:#fff3e0
    style L fill:#fff3e0
```

### 🔐 Dual Authentication Strategy

**Best of both worlds.** We've implemented a smart dual-auth approach that optimizes for different user journeys:

#### 🌐 Web App (Marketing Site)
- **Auth Modal** - Quick signup/signin without leaving the page
- **Perfect for conversions** - Users can sign up instantly from CTA buttons
- **Seamless experience** - Modal opens, user signs up, gets redirected to dashboard
- **Mobile-optimized** - Works beautifully on all screen sizes

#### 📊 Dashboard App (Main Application)
- **Full Auth Pages** - Complete signup/signin experience with proper navigation
- **Enhanced UX** - Welcome messages, forgot password flows, and cross-navigation
- **Professional feel** - Dedicated pages that feel like a complete application
- **Accessibility first** - Proper focus management and screen reader support

### 🔄 Cross-Domain Session Management

**One login, everywhere access.** Our session management works across all your applications:

```typescript
// Your sessions work across all domains
const session = await auth.getSession();
// ✅ Works on web app (localhost:3000)
// ✅ Works on dashboard (localhost:3001)  
// ✅ Works on API (localhost:3002)
// ✅ Works on production (.turbocamp.dev)
```

**Key Features:**
- **Secure cookies** with proper SameSite and Secure flags
- **Cross-subdomain sharing** for seamless multi-app experience
- **Automatic refresh** - sessions extend automatically with activity
- **Proper cleanup** - logout clears sessions across all apps

### 📱 Mobile & API First

**Built for the future.** Your API is RESTful and mobile-ready from day one:

```bash
# Your API endpoints work with any client
curl -X POST http://localhost:3002/api/auth/sign-up/email \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "securepass123"}'
```

**Perfect for:**
- **React Native apps** - Use the same auth endpoints
- **Flutter applications** - REST API integration out of the box
- **Third-party integrations** - Webhook endpoints and API keys ready
- **Desktop applications** - Electron or Tauri apps can connect easily

### 🛡️ Production Security

**Security is not an afterthought.** Every API call is protected:

- **CORS configured** - Proper cross-origin request handling
- **Rate limiting** - Protect against abuse and DDoS attacks
- **Input validation** - Zod schemas validate all inputs
- **Secure headers** - CSRF protection and security headers
- **Environment isolation** - Different configs for dev/staging/production

## Project Structure

**Organized for growth.** Our monorepo structure separates concerns while sharing code efficiently:

```
turbocamp/
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
│   ├── cms/                       # 📝 Content management (Content Collections)
│   ├── analytics/                 # 📈 User tracking & insights
│   ├── payments/                  # 💳 Stripe integration & billing
│   ├── storage/                   # 🗂️ File storage utilities
│   ├── security/                  # 🛡️ Rate limiting & protection
│   ├── logging/                   # 🔍 Error tracking & monitoring
│   ├── i18n/                      # 🌐 Internationalization
│   ├── seo/                       # 🎯 SEO utilities & metadata
│   ├── feature-flags/             # 🚩 Feature flag management
│   ├── ai/                        # 🤖 AI/LLM integrations
│   └── testing/                   # 🧪 Testing utilities & configurations
├── tooling/                       # 🛠️ Development tools & configs
│   ├── typescript-config/         # Shared TypeScript settings
│   └── next-config/               # Shared Next.js configurations
└── scripts/                       # ⚙️ CLI tool & deployment scripts
```

### 🎯 Architecture Benefits

**Centralized API**: All your business logic lives in one place. Add mobile apps, desktop clients, or third-party integrations without rewriting code.

**Shared Packages**: Write once, use everywhere. Your authentication, database queries, and UI components work across all applications.

**Independent Deployment**: Deploy each app separately. Scale your API independently from your marketing site.

**Developer Velocity**: New team members understand the structure instantly. Everything has its place.

**Complete Documentation**: Fumadocs powers your docs site with automatic navigation, full-text search, and beautiful theming.

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
docker build -t turbocamp .

# Run the container
docker run -p 3000:3000 turbocamp
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

**Vote on features** you want to see next in our [GitHub Discussions](https://github.com/droidsize/turbocamp/discussions)!

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
  <a href="https://github.com/droidsize/turbocamp/issues">Report Bug</a> ·
  <a href="https://github.com/droidsize/turbocamp/issues">Request Feature</a> ·
  <a href="https://github.com/droidsize/turbocamp/discussions">Discussions</a>
</p>
