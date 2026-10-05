import type { ReactNode } from 'react';
import { Providers } from './providers';

export const metadata = {
  title: 'atlas-nextjs-app-quickstart',
  description: 'An Atlas-powered Next.js App Router quickstart.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
