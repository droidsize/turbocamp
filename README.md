# 🚀 turbobase

**A modern, open-source Turborepo template for Next.js applications**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-8%2B-blue.svg)](https://pnpm.io/)

## Overview

**turbobase** is a production-ready monorepo template inspired by [next-forge](https://github.com/vercel/next-forge), designed to leverage the rich open-source ecosystem instead of relying on proprietary SaaS platforms. Built with [Turborepo](https://turbo.build/) and [Next.js](https://nextjs.org/), it provides a solid foundation for building scalable web applications.

### 🎯 Philosophy

Our goal is to **maximize the use of open-source tools** and minimize vendor lock-in, giving you:

- 🔓 **Freedom**: No dependency on external SaaS platforms to get started
- 🛠️ **Control**: Full control over your data and infrastructure  
- 💰 **Cost-effective**: Leverage free, open-source alternatives
- 🚀 **Production-ready**: Battle-tested tools and patterns
- 📈 **Scalable**: Easy migration to premium services when needed

## ✨ Features

- **🏗️ Monorepo Structure**: Organized with Turborepo for optimal DX
- **🔐 Authentication**: [Better Auth](https://www.better-auth.com/) - open-source auth solution
- **🎨 UI Components**: [shadcn/ui](https://ui.shadcn.com/) with Tailwind CSS
- **📄 Content Management**: File-based CMS with [content-collections](https://content-collections.dev/)
- **🌐 Internationalization**: Built-in i18n support
- **💳 Payments**: [Stripe](https://stripe.com/) integration ready
- **📧 Email**: [React Email](https://react.email/) templates
- **📊 Analytics**: [PostHog](https://posthog.com/) integration
- **🗃️ Database**: [Prisma](https://prisma.io/) ORM with PostgreSQL
- **🧪 Testing**: [Vitest](https://vitest.dev/) test framework
- **📚 Documentation**: [Fumadocs](https://fumadocs.vercel.app/) for beautiful docs

## 📁 Project Structure

```
turbobase/
├── apps/                          # Applications
│   ├── web/                       # Marketing website (Next.js)
│   ├── app/                       # Main application (Next.js)
│   ├── api/                       # API routes & services
│   └── docs/                      # Documentation site
├── packages/                      # Shared packages
│   ├── base/                      # UI components & design system
│   ├── auth/                      # Authentication logic
│   ├── db/                        # Database utilities, client & Prisma schema
│   ├── email/                     # Email templates
│   ├── cms/                       # Content management
│   ├── analytics/                 # Analytics integration
│   ├── payments/                  # Payment processing
│   ├── storage/                   # File storage utilities
│   ├── security/                  # Security middleware & rate limiting
│   ├── logging/                   # Logging & observability
│   ├── i18n/                      # Internationalization
│   ├── seo/                       # SEO utilities
│   ├── feature-flags/             # Feature flag management
│   ├── ai/                        # AI/LLM integrations
│   └── testing/                   # Testing utilities
├── tooling/                       # Development tooling
│   ├── typescript-config/         # Shared TypeScript configs
│   └── next-config/               # Shared Next.js configs
└── scripts/                       # Build & deployment scripts
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **pnpm** 8+ ([Install](https://pnpm.io/installation))
- **PostgreSQL** database (local or hosted)

### 1. Get the Template

```bash
# Use the CLI tool (recommended)
npx turbobase@latest init

# Or use this template on GitHub
git clone https://github.com/droidsize/turbobase.git my-app
cd my-app
```

### 2. Install Dependencies

```bash
# Install all dependencies for the monorepo
pnpm install
```

### 3. Environment Setup

Create environment files for each app:

```bash
# Database Environment
cp packages/db/.env.example packages/db/.env.local

# API Environment
cp apps/api/.env.example apps/api/.env.local

# Main App Environment  
cp apps/app/.env.example apps/app/.env.local

# Web Environment
cp apps/web/.env.example apps/web/.env.local
```

### 4. Configure Your Database

Update `packages/db/.env.local` with your database connection:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/turbobase?schema=public"
```

### 5. Database Setup

```bash
# Generate Prisma client and push schema
pnpm migrate
```

### 6. Start Development

```bash
# Start all apps in development mode
pnpm dev
```

Your applications will be available at:
- **Main App**: http://localhost:3000
- **Marketing Site**: http://localhost:3001  
- **API**: http://localhost:3002
- **Documentation**: http://localhost:3004

## 🔧 Development Commands

```bash
# Development
pnpm dev                    # Start all apps
pnpm dev:email             # Preview email templates
pnpm dev:studio            # Open Prisma Studio

# Building
pnpm build                 # Build all apps
pnpm test                  # Run tests

# Database
pnpm migrate              # Run migrations
pnpm db:studio            # Open database studio

# Code Quality
pnpm lint                 # Lint all packages
pnpm format               # Format code
```

## 🔧 Configuration

### Authentication Setup

1. Configure Better Auth in `packages/auth/server.ts`
2. Set up your auth providers (Google, GitHub, etc.)
3. Update environment variables in your apps

### Database Configuration

1. Update `packages/db/prisma/schema.prisma` with your models
2. Run `pnpm migrate` to apply changes
3. Use the `@packages/db` package throughout your apps

### Email Templates

1. Create templates in `packages/email/templates/`
2. Preview with `pnpm dev:email`
3. Configure your email provider (Resend, SendGrid, etc.)

## 🌍 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build and run
docker build -t turbobase .
docker run -p 3000:3000 turbobase
```

### Self-Hosted

1. Build the project: `pnpm build`
2. Configure your reverse proxy (nginx, caddy)
3. Set up environment variables
4. Start with PM2 or similar process manager

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📖 Documentation

- [Getting Started Guide](docs/getting-started.md)
- [Architecture Overview](docs/architecture.md)
- [Deployment Guide](docs/deployment.md)
- [API Reference](docs/api.md)

## 🛡️ Security

- Built-in rate limiting and security headers
- CSRF protection with Better Auth
- Input validation with Zod
- Environment variable validation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [next-forge](https://github.com/vercel/next-forge) by Vercel
- Built with amazing open-source tools from the community
- Special thanks to all contributors

---

**Built with ❤️ using open-source tools**
