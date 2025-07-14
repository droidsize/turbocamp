import type { ReactNode } from 'react';

interface SettingsLayoutProps {
  children: ReactNode;
  params: Promise<{ orgId: string }>;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return <>{children}</>;
}