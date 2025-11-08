import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'SunoSavvy · Suno Downloader',
  description:
    'SunoSavvy mirrors your Suno library, restores true 48 kHz WAV masters, and ships provenance bundles so you keep what you create.',
  openGraph: {
    title: 'SunoSavvy · Suno Downloader',
    description:
      'Archive every Suno stem with Apple-inspired polish, built-in WAV mastering, and provenance you can trust.',
    url: 'https://sunoaio.gumroad.com/l/downloader'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${spaceGrotesk.className}`}>
        {children}
      </body>
    </html>
  );
}
