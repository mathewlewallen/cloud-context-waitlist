import { Toolbar } from '@cc/cms/components/toolbar';
import type { ReactNode } from 'react';

type LegalLayoutProps = {
  children: ReactNode;
};

const LegalLayout = ({ children }: LegalLayoutProps) => (
  <>
    {children}
    <Toolbar />
  </>
);

export default LegalLayout;
