import '../styles/global.scss';

import { Metadata } from 'next';

import MainLayout from '@/components/MainLayout/MainLayout';
import { ReduxProvider } from '@/store/provider';

export const metadata: Metadata = {
  title: '78dima - Front-end developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <MainLayout>{children}</MainLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
