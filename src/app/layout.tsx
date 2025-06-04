import './globals.css';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

export const metadata = {
  title: 'Resume Builder',
  description: 'Create resumes and export to PDF',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
