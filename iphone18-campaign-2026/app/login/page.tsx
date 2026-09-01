import type { Metadata } from 'next';
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
        <div className="login-brand"><span className="brand-mark">05</span><strong>05.ru</strong></div>
        <div className="login-icon"><LockKeyhole /></div>
        <p className="section-kicker">Закрытая страница</p>
        <h1 id="login-title">Рекламная кампания iPhone 18</h1>
        <p className="login-lead">Введите пароль, чтобы открыть план кампании для команды.</p>
        <PasswordLoginForm configured={configured} />
      </section>
    </main>
  );
}
