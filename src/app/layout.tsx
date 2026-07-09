import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HashRedirect } from '@/components/HashRedirect';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Howard Yen',
    template: '%s | Howard Yen',
  },
  description: 'PhD student at Princeton University. Research in NLP, long-context language models, and reasoning.',
  icons: { icon: '/yen.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <HashRedirect />
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
