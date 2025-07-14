import './styles.css';
import { AuthProvider } from '@packages/auth/provider';
import { BaseProvider } from '@packages/base';
import { fonts } from '@packages/base/lib/fonts';
import { cn } from '@packages/base/lib/utils';
//import { Toolbar as CMSToolbar } from '@packages/cms/components/toolbar';
import { Toolbar } from '@packages/feature-flags/components/toolbar';
import { getDictionary } from '@packages/i18n';
import type { ReactNode } from 'react';
import { Toaster } from 'sonner';
import { Footer } from './components/footer';
import { Header } from './components/header';

type RootLayoutProperties = {
  readonly children: ReactNode;
  readonly params: Promise<{
    locale: string;
  }>;
};

const RootLayout = async ({ children, params }: RootLayoutProperties) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <html
      lang="en"
      className={cn(fonts, 'scroll-smooth')}
      suppressHydrationWarning
    >
      <body>
        <BaseProvider>
          <AuthProvider>
            <Header dictionary={dictionary} />
            {children}
            <Footer />
            <Toaster />
          </AuthProvider>
        </BaseProvider>
        <Toolbar />
        {/*<CMSToolbar />*/}
      </body>
    </html>
  );
};

export default RootLayout;
