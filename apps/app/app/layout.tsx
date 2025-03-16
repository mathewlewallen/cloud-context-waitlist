import './styles.css';
import { UIProvider } from '@cc/ui';
import { fonts } from '@cc/ui/lib/fonts';
import { Toolbar } from '@cc/feature-flags/components/toolbar';
import type { ReactNode } from 'react';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body>
      <UIProvider>{children}</UIProvider>
      <Toolbar />
    </body>
  </html>
);

export default RootLayout;
