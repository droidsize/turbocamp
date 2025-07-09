import './styles.css';
import { BaseProvider } from '@packages/base';
import { fonts } from '@packages/base/lib/fonts';
import { Toolbar } from '@packages/feature-flags/components/toolbar';
import type { ReactNode } from 'react';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body>
      <BaseProvider>{children}</BaseProvider>
      <Toolbar />
    </body>
  </html>
);

export default RootLayout;
