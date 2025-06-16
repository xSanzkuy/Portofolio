import './globals.css';
import './portfolio.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sandi Kurniawan - Frontend Developer & Designer',
  description: 'Portfolio Sandi Kurniawan - Frontend Developer & Designer dari Yogyakarta. Mahasiswa S1 Sistem Informasi dengan expertise dalam web development dan desain.',
  keywords: 'Frontend Developer, Web Developer, React, Laravel, JavaScript, Portfolio, Next.js',
  authors: [{ name: 'Sandi Kurniawan' }],
  creator: 'Sandi Kurniawan',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://sandikurniawan.dev',
    title: 'Sandi Kurniawan - Frontend Developer & Designer',
    description: 'Mahasiswa S1 Sistem Informasi dengan expertise dalam web development dan desain',
    siteName: 'Sandi Kurniawan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sandi Kurniawan - Frontend Developer & Designer',
    description: 'Mahasiswa S1 Sistem Informasi dengan expertise dalam web development dan desain',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          rel="stylesheet" 
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}