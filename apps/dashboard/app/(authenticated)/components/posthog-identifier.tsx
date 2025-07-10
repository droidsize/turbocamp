'use client';

import { useAnalytics } from '@packages/analytics/posthog/client';
import { useSession } from '@packages/auth/client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export const PostHogIdentifier = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const identified = useRef(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const analytics = useAnalytics();

  useEffect(() => {
    // Track pageviews
    if (pathname && analytics) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = `${url}?${searchParams.toString()}`;
      }
      analytics.capture('$pageview', {
        $current_url: url,
      });
    }
  }, [pathname, searchParams, analytics]);

  useEffect(() => {
    if (!user || identified.current) {
      return;
    }

    analytics.identify(user.id, {
      email: user.email,
      firstName: user.name?.split(' ')[0],
      lastName: user.name?.split(' ').slice(1).join(' '),
      createdAt: user.createdAt,
      avatar: user.image,
      // phoneNumber: user.phoneNumber, // Add if available in your schema
    });

    identified.current = true;
  }, [user, analytics]);

  return null;
};
