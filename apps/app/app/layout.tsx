import { env } from '@/env';
import './styles.css';
import { DesignSystemProvider } from '@packages/design-system';
import { fonts } from '@packages/design-system/lib/fonts';
import { Toolbar } from '@packages/feature-flags/components/toolbar';
import type { ReactNode } from 'react';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body>
      <DesignSystemProvider
        privacyUrl={new URL(
          '/legal/privacy',
          env.NEXT_PUBLIC_WEB_URL
        ).toString()}
        termsUrl={new URL('/legal/terms', env.NEXT_PUBLIC_WEB_URL).toString()}
        helpUrl={env.NEXT_PUBLIC_DOCS_URL}
      >
        {children}
      </DesignSystemProvider>
      <Toolbar />
    </body>
  </html>
);

export default RootLayout;
