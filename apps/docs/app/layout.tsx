import '@/app/global.css';
import { fonts } from '@packages/design-system/lib/fonts';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fonts} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider
          theme={{
            enabled: true,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
