import type { Metadata } from 'next';
import Image from 'next/image';
import { LockKeyhole } from 'lucide-react';

import { PasswordLoginForm } from '@/components/password-login-form';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Вход — РК iPhone 18',
  description: 'Закрытая страница рекламной кампании iPhone 18.',
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  const configured = Boolean(process.env.PASSWORD);

  return (
    <main className="login-page">
      <section className="login-panel" aria-labelledby="login-title">
        <Image
          className="login-brand-logo"
          src="/logo-05ru.svg"
          alt="05.ru"
          width={108}
          height={36}
          priority
        />
        <div className="login-icon"><LockKeyhole /></div>
        <p className="section-kicker">Закрытая страница</p>
        <h1 id="login-title">Рекламная кампания iPhone 18</h1>
        <p className="login-lead">Введите пароль, чтобы открыть план кампании для команды.</p>
        <PasswordLoginForm configured={configured} />
      </section>
    </main>
  );
}
