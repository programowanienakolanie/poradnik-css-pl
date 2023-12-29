import type { Metadata } from 'next';
import { Inter, Nunito_Sans } from 'next/font/google';
import './globals.css';
import { EB_Garamond } from 'next/font/google';
const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Poradnik CSS',
  description: 'Poradnik CSS po Polsku',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
