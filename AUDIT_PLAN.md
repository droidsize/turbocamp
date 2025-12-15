# Turbocamp Dependency & Code Audit Plan
## December 2025

This audit compares turbocamp with the latest [next-forge v5.3.2](https://github.com/vercel/next-forge) (acquired by Vercel) and identifies all outdated dependencies, dangling references, and missing features.

---

## Executive Summary

| Category | Issues Found |
|----------|-------------|
| **Critical Dependency Updates** | 15+ major versions behind |
| **Dangling References** | 5 broken paths |
| **Version Inconsistencies** | 8 packages with mismatched versions |
| **Missing Packages** | 3 packages from next-forge not ported |
| **Missing Apps** | 3 apps from next-forge not ported |

---

## 1. CRITICAL: Outdated Dependencies

### Core Framework (BREAKING CHANGES LIKELY)

| Package | Current | Latest | Severity |
|---------|---------|--------|----------|
| `next` | 15.3.2 | **16.0.10** | MAJOR |
| `react` / `react-dom` | 19.1.0 | 19.2.1 | MINOR |
| `typescript` | 5.8.3 | 5.9.3 | MINOR |

### Database & ORM (BREAKING CHANGES)

| Package | Current | Latest | Severity |
|---------|---------|--------|----------|
| `prisma` | 6.4.1 | **7.1.0** | MAJOR |
| `@prisma/client` | 6.4.1 | **7.1.0** | MAJOR |
| `@prisma/adapter-neon` | 6.4.1 | **7.1.0** | MAJOR |

### Build Tooling (BREAKING CHANGES)

| Package | Current | Latest | Severity |
|---------|---------|--------|----------|
| `@biomejs/biome` | 1.9.4 | **2.3.8** | MAJOR |
| `turbo` | 2.5.3 | 2.6.3 | MINOR |
| `@turbo/gen` | 2.5.3 | 2.6.3 | MINOR |
| `vitest` | 3.1.4 | **4.0.15** | MAJOR |
| `ultracite` | 4.2.5 | **6.4.0** | MAJOR |

### Schema Validation (BREAKING CHANGES)

| Package | Current | Latest | Severity |
|---------|---------|--------|----------|
| `zod` | 3.25.28 | **4.1.13** | MAJOR |

### AI & SDK (BREAKING CHANGES)

| Package | Current | Latest | Severity |
|---------|---------|--------|----------|
| `ai` | 4.3.16 | **5.0.107** | MAJOR |
| `@ai-sdk/openai` | 1.3.22 | **2.0.77** | MAJOR |

### Observability & Monitoring (BREAKING CHANGES)

| Package | Current | Latest | Severity |
|---------|---------|--------|----------|
| `@sentry/nextjs` | 9.22.0 | **10.29.0** | MAJOR |
| `posthog-js` | 1.246.0 | 1.302.2 | MINOR |
| `posthog-node` | 4.17.2 | **5.17.2** | MAJOR |

### Payments (BREAKING CHANGES)

| Package | Current | Latest | Severity |
|---------|---------|--------|----------|
| `stripe` | 18.1.1 | **20.0.0** | MAJOR |
| `resend` | 4.5.1 | **6.5.2** | MAJOR |
| `@react-email/components` | 0.0.41 | **1.0.1** | MAJOR |

### UI Components

| Package | Current | Latest | Severity |
|---------|---------|--------|----------|
| `react-day-picker` | 8.10.1 | **9.11.3** | MAJOR |
| `lucide-react` | 0.511.0 | 0.556.0 | MINOR |
| `geist` | 1.4.2 | 1.5.1 | MINOR |
| `sonner` | 1.7.0-2.0.3 | 2.0.7 | VARIES |

### Next.js Ecosystem

| Package | Current | Latest | Severity |
|---------|---------|--------|----------|
| `@next/third-parties` | 15.3.2 | 16.0.7 | MINOR |
| `@next/bundle-analyzer` | 15.3.2 | 16.x | MINOR |
| `fumadocs-core` | 15.4.0-15.6.2 | newer | MINOR |
| `fumadocs-mdx` | 11.6.10 | newer | MINOR |
| `fumadocs-ui` | 15.6.2 | newer | MINOR |

### Other Updates

| Package | Current | Latest | Severity |
|---------|---------|--------|----------|
| `@types/node` | 22.15.21 | 24.10.1/25.0.2 | MINOR |
| `@vercel/analytics` | 1.5.0 | 1.6.1 | MINOR |
| `@upstash/ratelimit` | 2.0.5 | 2.0.7 | PATCH |
| `@upstash/redis` | 1.34.9 | 1.35.7 | PATCH |
| `pnpm` | 10.11.0 | 10.24.0 | MINOR |
| `commander` | 14.0.0 | 14.0.2 | PATCH |
| `tsup` | 8.5.0 | 8.5.1 | PATCH |

---

## 2. CRITICAL: Dangling/Broken References

### 2.1 `packages/design-system` References (DOES NOT EXIST)

The package was renamed to `packages/base` but several files still reference the old name:

| File | Line | Issue |
|------|------|-------|
| `biome.json` | 9-11 | Ignores `packages/design-system/**` (should be `packages/base/**`) |
| `.vscode/settings.json` | 27 | References `packages/design-system/styles/globals.css` |
| `package.json` | 20 | Script `bump-ui` uses `-c packages/design-system` |

### 2.2 `apps/email` Reference (DOES NOT EXIST)

| File | Line | Issue |
|------|------|-------|
| `biome.json` | 13 | Ignores `apps/email/.react-email/**` but `apps/email` doesn't exist |

### 2.3 Feature Flags Peer Dependency (WRONG VERSION)

| File | Line | Issue |
|------|------|-------|
| `packages/feature-flags/package.json` | 20 | `peerDependencies.next: "15.1.7"` should be `">=15.3.2"` or `"^15.0.0"` |

---

## 3. Version Inconsistencies Within Turbocamp

### 3.1 Next.js Versions

| Package | Version |
|---------|---------|
| apps/api | 15.3.2 |
| apps/dashboard | 15.3.2 |
| apps/web | 15.3.2 |
| apps/docs | **15.3.4** (inconsistent) |
| packages/auth | 15.3.2 |
| packages/i18n (dev) | 15.3.2 |
| packages/cms (dev) | 15.3.2 |
| packages/seo (dev) | 15.3.2 |

### 3.2 @types/node Versions

| Package | Version |
|---------|---------|
| Most packages | 22.15.21 |
| apps/docs | **24.0.7** (inconsistent) |
| root | 22.15.21 |

### 3.3 sonner Versions

| Package | Version |
|---------|---------|
| apps/web | **1.7.0** (old) |
| apps/dashboard | 2.0.3 |
| packages/base | 2.0.3 |

### 3.4 react-hook-form Versions

| Package | Version |
|---------|---------|
| apps/web | **7.54.2** (old) |
| apps/dashboard | 7.56.4 |
| packages/base | 7.56.4 |

### 3.5 @hookform/resolvers Versions (BREAKING)

| Package | Version |
|---------|---------|
| apps/web | **3.9.1** (MAJOR version behind - breaking changes!) |
| apps/dashboard | 5.0.1 |
| packages/base | 5.0.1 |

---

## 4. Missing Features from next-forge

### 4.1 Missing Packages

| Package | Description | Priority |
|---------|-------------|----------|
| `@repo/webhooks` | Webhook handling with Svix | MEDIUM |
| `@repo/notifications` | Push notifications with Knock | LOW |
| `@repo/collaboration` | Collaboration features | LOW |

### 4.2 Missing Apps

| App | Description | Priority |
|-----|-------------|----------|
| `apps/email` | Email template preview app | MEDIUM |
| `apps/storybook` | Component documentation | LOW |
| `apps/studio` | Studio application | LOW |

---

## 5. Fix Implementation Plan

### Phase 1: Fix Dangling References (Quick Wins)

```bash
# 1. Fix biome.json - update paths
# 2. Fix .vscode/settings.json - update tailwind config path
# 3. Fix package.json bump-ui script
# 4. Fix feature-flags peer dependency
```

### Phase 2: Sync Package Versions (Within Turbocamp)

```bash
# 1. Align all Next.js versions to same version
# 2. Align all @types/node versions
# 3. Align all sonner versions
# 4. Align all react-hook-form versions
# 5. Fix @hookform/resolvers to v5.x everywhere
```

### Phase 3: Major Dependency Updates (Careful Testing Required)

**Order matters due to dependencies:**

1. **TypeScript 5.9.3** - Update first (safe)
2. **Biome 2.x** - May require config changes
3. **Turbo 2.6.x** - Usually safe
4. **Vitest 4.x** - May require test changes
5. **Zod 4.x** - Breaking changes in schema API
6. **Prisma 7.x** - Database migrations may be needed
7. **Next.js 16.x** - After all other updates
8. **React 19.2.x** - After Next.js update
9. **Sentry 10.x** - After Next.js update
10. **AI SDK 5.x** - Breaking API changes
11. **Stripe 20.x** - Breaking API changes
12. **PostHog 5.x** - After other updates

### Phase 4: UI Component Updates

1. **react-day-picker 9.x** - Breaking API changes
2. **@react-email/components 1.x** - Major rewrite
3. **resend 6.x** - API changes
4. **lucide-react** - Usually safe

---

## 6. Recommended package.json Updates

### Root package.json

```json
{
  "packageManager": "pnpm@10.24.0",
  "devDependencies": {
    "@biomejs/biome": "2.3.8",
    "@turbo/gen": "^2.6.3",
    "@types/node": "^24.10.1",
    "tsup": "^8.5.1",
    "turbo": "^2.6.3",
    "typescript": "^5.9.3",
    "ultracite": "^6.4.0",
    "vitest": "^4.0.15"
  },
  "dependencies": {
    "commander": "^14.0.2"
  }
}
```

### All packages - Update zod

```json
{
  "dependencies": {
    "zod": "^4.1.13"
  }
}
```

### packages/db

```json
{
  "dependencies": {
    "@prisma/adapter-neon": "7.1.0",
    "@prisma/client": "7.1.0"
  },
  "devDependencies": {
    "prisma": "7.1.0"
  }
}
```

---

## 7. Files to Modify

| File | Changes |
|------|---------|
| `package.json` | Update versions, fix bump-ui script |
| `biome.json` | Fix paths, update schema version |
| `.vscode/settings.json` | Fix tailwind config path |
| `apps/*/package.json` | Update dependencies |
| `packages/*/package.json` | Update dependencies |
| `packages/feature-flags/package.json` | Fix peer dependency |
| `tooling/*/package.json` | Update dependencies |

---

## 8. Testing Checklist

After updates:

- [ ] `pnpm install` completes without errors
- [ ] `pnpm build` succeeds for all apps
- [ ] `pnpm test` passes
- [ ] `pnpm lint` passes
- [ ] `pnpm typecheck` passes (if exists)
- [ ] `pnpm dev` starts all apps correctly
- [ ] Database migrations work (if Prisma updated)
- [ ] Authentication still works
- [ ] Payments still work
- [ ] Email sending still works

---

## 9. Risk Assessment

| Update | Risk | Mitigation |
|--------|------|------------|
| Next.js 15 → 16 | HIGH | Review migration guide, test thoroughly |
| Prisma 6 → 7 | HIGH | Backup database, test migrations |
| Zod 3 → 4 | MEDIUM | Schema API changes, update validators |
| Biome 1 → 2 | MEDIUM | Config format may change |
| AI SDK 4 → 5 | MEDIUM | API changes, update AI components |
| Stripe 18 → 20 | MEDIUM | Payment API changes |
| Sentry 9 → 10 | LOW | Usually backward compatible |
| react-day-picker 8 → 9 | MEDIUM | Component API changes |

---

## 10. Summary

**Total Issues Found: 40+**

- 15+ major version updates needed
- 5 dangling/broken references
- 8 internal version inconsistencies
- 3 missing packages from next-forge
- 3 missing apps from next-forge

**Recommended Approach:**
1. Fix dangling references first (low risk, quick win)
2. Sync internal versions (medium risk)
3. Update dependencies incrementally (high risk, needs testing)
4. Consider adding missing packages later (optional)
