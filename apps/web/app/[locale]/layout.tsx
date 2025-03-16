import './styles.css';
import { Toolbar as CMSToolbar } from '@cc/cms/components/toolbar';
import { UIProvider } from '@cc/ui';
import { fonts } from '@cc/ui/lib/fonts';
import { cn } from '@cc/ui/lib/utils';
import { Toolbar } from '@cc/feature-flags/components/toolbar';
import { getDictionary } from '@cc/internationalization';
import type { ReactNode } from 'react';
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
        <UIProvider>
          <Header dictionary={dictionary} />
          {children}
          <Footer />
        </UIProvider>
        <Toolbar />
        <CMSToolbar />
      </body>
    </html>
  );
};

export default RootLayout;
