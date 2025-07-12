# 🔐 Authentication Setup Guide

This guide will help you set up the complete authentication system for Turbocamp across all applications.

## 🏗️ Architecture Overview

Turbocamp uses a **centralized authentication architecture** with BetterAuth:

- **API App** (`localhost:3002`) - Primary auth server handling all authentication
- **Dashboard App** (`localhost:3001`) - Main application with full auth pages
- **Web App** (`localhost:3000`) - Marketing site with auth modal + redirects
- **Cross-domain cookies** - Seamless auth across all domains

## 📋 Required Environment Variables

### 1. Database Configuration

```bash
# Required for all apps
DATABASE_URL="postgresql://username:password@localhost:5432/turbocamp?schema=public"
```

**Setup Options:**
- **Local Development:** Install PostgreSQL locally
- **Cloud Database:** Use [Neon](https://neon.tech) (recommended) or [Supabase](https://supabase.com)

### 2. BetterAuth Configuration

```bash
# Required for authentication to work
BETTER_AUTH_SECRET="your-32-character-secret-key-here"
```

**Generate a secure secret:**
```bash
openssl rand -base64 32
```

### 3. Application URLs

**Development URLs:**
```bash
# API App (Primary auth server)
BETTER_AUTH_URL="http://localhost:3002"
AUTH_API_URL="http://localhost:3002"
NEXT_PUBLIC_AUTH_API_URL="http://localhost:3002"

# Application URLs
NEXT_PUBLIC_WEB_URL="http://localhost:3000"
NEXT_PUBLIC_DASHBOARD_URL="http://localhost:3001"
```

**Production URLs (Update for your domains):**
```bash
# API App
BETTER_AUTH_URL="https://api.turbocamp.dev"
AUTH_API_URL="https://api.turbocamp.dev"
NEXT_PUBLIC_AUTH_API_URL="https://api.turbocamp.dev"

# Application URLs
NEXT_PUBLIC_WEB_URL="https://turbocamp.dev"
NEXT_PUBLIC_DASHBOARD_URL="https://dashboard.turbocamp.dev"

# Optional: Additional trusted origins (comma-separated)
ADDITIONAL_TRUSTED_ORIGINS="https://staging.turbocamp.dev"
```

## 🚀 Quick Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Set Up Database

```bash
# Copy database environment
cp packages/db/.env.example packages/db/.env

# Edit packages/db/.env and add your DATABASE_URL
# Then run migrations
pnpm migrate
```

### 3. Configure Each Application

**Copy environment files:**
```bash
# API App (Primary auth server)
cp .env.example apps/api/.env.local

# Dashboard App  
cp .env.example apps/dashboard/.env.local

# Web App
cp .env.example apps/web/.env.local
```

**Edit each `.env.local` file and add:**

**`apps/api/.env.local`:**
```bash
DATABASE_URL="your-database-url"
BETTER_AUTH_SECRET="your-32-character-secret"
BETTER_AUTH_URL="http://localhost:3002"
```

**`apps/dashboard/.env.local`:**
```bash
AUTH_API_URL="http://localhost:3002"
NEXT_PUBLIC_AUTH_API_URL="http://localhost:3002"
NEXT_PUBLIC_DASHBOARD_URL="http://localhost:3001"
NEXT_PUBLIC_WEB_URL="http://localhost:3000"
BETTER_AUTH_SECRET="same-secret-as-api"
```

**`apps/web/.env.local`:**
```bash
AUTH_API_URL="http://localhost:3002"
NEXT_PUBLIC_AUTH_API_URL="http://localhost:3002"
NEXT_PUBLIC_WEB_URL="http://localhost:3000"
NEXT_PUBLIC_DASHBOARD_URL="http://localhost:3001"
```

### 4. Start Development

```bash
pnpm dev
```

**Your applications will be running on:**
- 🌐 **Web App**: http://localhost:3000 (Marketing site)
- 📊 **Dashboard**: http://localhost:3001 (Main application)
- 🔌 **API**: http://localhost:3002 (Auth server)

## 🔄 Authentication Flow

### Dual Auth Experience

**Option 1: Quick Signup (Modal)**
1. User clicks "Get Started" on web app
2. Modal opens with signup/signin tabs
3. User completes authentication
4. Modal closes and redirects to dashboard

**Option 2: Full Page Auth (Redirect)**
1. User clicks "Sign In" on web app
2. Redirects to dashboard login page
3. User completes authentication
4. Redirects to dashboard

### Cross-Domain Session Management

- **Primary Auth Server**: API app handles all authentication
- **Cross-domain Cookies**: Sessions work across all subdomains
- **Trusted Origins**: CORS configured for secure cross-domain requests
- **Automatic Redirects**: Seamless experience across applications

## 🔧 Advanced Configuration

### Email Integration (Optional)

```bash
# Resend for transactional emails
RESEND_API_KEY="re_xxxxxxxxxxxxxxxx"
RESEND_FROM="noreply@yourdomain.com"
```

### Rate Limiting (Recommended)

```bash
# Upstash Redis for rate limiting
UPSTASH_REDIS_REST_URL="https://xxxxxxxx.upstash.io"
UPSTASH_REDIS_REST_TOKEN="xxxxxxxxxxxxxxxx"
```

### Analytics (Optional)

```bash
# PostHog for user analytics
NEXT_PUBLIC_POSTHOG_KEY="your-posthog-key"
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"
```

### Monitoring (Recommended)

```bash
# Sentry for error tracking
NEXT_PUBLIC_SENTRY_DSN="https://xxxxxxxxxxxxxxxx@sentry.io/xxxxxxxx"
```

## 🌐 Production Deployment

### Domain Configuration

For production, update all URLs to use your actual domains:

```bash
# Example production configuration
BETTER_AUTH_URL="https://api.turbocamp.dev"
NEXT_PUBLIC_WEB_URL="https://turbocamp.dev"
NEXT_PUBLIC_DASHBOARD_URL="https://dashboard.turbocamp.dev"
```

### Cross-Domain Cookie Setup

The system is configured to automatically handle cross-domain cookies:

- **Development**: Uses `localhost` as cookie domain
- **Production**: Uses `.turbocamp.dev` for subdomain sharing
- **HTTPS Required**: Secure cookies in production
- **CORS Configured**: Trusted origins for all your domains

### DNS Configuration

Set up your DNS records:
```
A    turbocamp.dev              → Your web server IP
A    dashboard.turbocamp.dev    → Your dashboard server IP  
A    api.turbocamp.dev         → Your API server IP
```

## 🧪 Testing the Setup

### 1. Test Basic Authentication

1. Visit http://localhost:3000
2. Click "Get Started" - modal should open
3. Create an account
4. Should redirect to http://localhost:3001 (dashboard)

### 2. Test Cross-Domain Auth

1. Visit http://localhost:3001/sign-in directly
2. Sign in with your account
3. Visit http://localhost:3000
4. Should recognize you're already signed in

### 3. Test Sign Out

1. Sign out from dashboard
2. Visit web app - should not be signed in
3. Cross-domain session clearing working correctly

## 🚨 Troubleshooting

### Common Issues

**Authentication not working:**
- ✅ Check `BETTER_AUTH_SECRET` is the same across all apps
- ✅ Verify `AUTH_API_URL` points to your API app
- ✅ Ensure database is running and connected

**Cross-domain issues:**
- ✅ Check `trustedOrigins` in auth configuration
- ✅ Verify CORS headers are properly set
- ✅ Ensure cookies domain is configured correctly

**Modal not appearing:**
- ✅ Check if `AuthModal` is properly imported
- ✅ Verify `BaseProvider` includes `Toaster` component
- ✅ Check for JavaScript errors in console

### Debug Mode

Enable debug logging:
```bash
NODE_ENV="development"
DEBUG="better-auth:*"
```

## 🔐 Security Considerations

### Required for Production

1. **HTTPS Only**: All auth endpoints must use HTTPS
2. **Secure Secrets**: Use strong, unique secrets
3. **Rate Limiting**: Configure to prevent brute force attacks
4. **CORS Policy**: Strict trusted origins configuration
5. **Cookie Security**: Secure, HttpOnly, SameSite configured

### Recommended

- Use environment-specific secrets
- Enable error monitoring with Sentry
- Set up proper logging and alerting
- Regular security audits
- Keep dependencies updated

## 📱 Mobile App Integration

The centralized API is ready for mobile app integration:

### React Native / Expo

```typescript
// Mobile app can directly call API endpoints
const authResponse = await fetch('https://api.turbocamp.dev/api/auth/sign-in', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});
```

### REST API Endpoints

All auth operations available via REST:
- `POST /api/auth/sign-in` - Email/password login
- `POST /api/auth/sign-up` - Create account
- `POST /api/auth/sign-out` - Sign out
- `GET /api/auth/session` - Get current session
- `POST /api/auth/reset-password` - Password reset

## 🎯 Next Steps

Once authentication is working:

1. **Customize UI**: Update auth modal and pages with your branding
2. **Add OAuth**: Configure Google, GitHub, etc. in BetterAuth
3. **Email Features**: Set up welcome emails and notifications
4. **User Profiles**: Add user profile management
5. **Organizations**: Configure team/organization features
6. **Mobile Apps**: Integrate with React Native or other mobile frameworks

---

**Need help?** Check the [BetterAuth documentation](https://www.better-auth.com/docs) or open an issue in the repository. 