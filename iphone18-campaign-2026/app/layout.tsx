import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin', 'cyrillic'], display: 'swap' });

export const metadata: Metadata = {
  title: 'iPhone 18 — рекламная кампания 05.ru',
  description: 'Стратегия, сроки, KPI, каналы и план-факт рекламной кампании iPhone 18 в 05.ru.',
  keywords: ['05.ru', 'iPhone 18', 'рекламная кампания', 'CRM', 'РСЯ', 'план-факт'],
  openGraph: {
    title: 'iPhone 18 — рекламная кампания 05.ru',
    description: 'Цели, roadmap, CRM-план, форматы и центр метрик кампании 02.09–01.11.2026.',
    type: 'website',
    locale: 'ru_RU',
    siteName: '05.ru Campaign Control',
  },
  twitter: {
    card: 'summary',
    title: 'iPhone 18 — рекламная кампания 05.ru',
    description: 'Цели, roadmap, CRM-план, форматы и план-факт кампании.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={inter.variable}>{children}</body></html>;
}
