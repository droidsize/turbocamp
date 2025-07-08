import { env } from '@/env';
import { auth } from '@packages/auth/server';
import { SidebarProvider } from '@packages/design-system/components/ui/sidebar';
import { showBetaFeature } from '@packages/feature-flags';
import { NotificationsProvider } from '@packages/notifications/components/provider';
import { secure } from '@packages/security';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';
import { PostHogIdentifier } from './components/posthog-identifier';
import { GlobalSidebar } from './components/sidebar';

type AppLayoutProperties = {
  readonly children: ReactNode;
};

const AppLayout = async ({ children }: AppLayoutProperties) => {
  if (env.ARCJET_KEY) {
    await secure(['CATEGORY:PREVIEW']);
  }

  // Use Better Auth to get session
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const betaFeature = await showBetaFeature();

  if (!session?.user) {
    return redirect('/sign-in');
  }

  return (
    <NotificationsProvider userId={session.user.id}>
      <SidebarProvider>
        <GlobalSidebar>
          {betaFeature && (
            <div className="m-4 rounded-full bg-blue-500 p-1.5 text-center text-sm text-white">
              Beta feature now available
            </div>
          )}
          {children}
        </GlobalSidebar>
        <PostHogIdentifier />
      </SidebarProvider>
    </NotificationsProvider>
  );
};

export default AppLayout;
