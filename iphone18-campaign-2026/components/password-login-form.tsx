'use client';

import { type SubmitEvent, useState } from 'react';
import { ArrowRight, LoaderCircle } from 'lucide-react';

export function PasswordLoginForm({ configured }: { configured: boolean }) {
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!configured || pending) return;

    const form = new FormData(event.currentTarget);
    const passwordValue = form.get('password');
    const password = typeof passwordValue === 'string' ? passwordValue : '';

    setPending(true);
    setError('');

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const result = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok || !result.ok) {
        setError(result.error ?? 'Не удалось войти. Попробуйте ещё раз.');
        return;
      }

      const requestedPath = new URLSearchParams(window.location.search).get('next');
      const destination = requestedPath?.startsWith('/') && !requestedPath.startsWith('//')
        ? requestedPath
        : '/promo/iphone2026';
      window.location.assign(destination);
    } catch {
      setError('Не удалось войти. Проверьте соединение и попробуйте ещё раз.');
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="campaign-password">Пароль</label>
      <input
        autoComplete="current-password"
        disabled={!configured || pending}
        id="campaign-password"
        name="password"
        placeholder="Введите пароль"
        required
        type="password"
      />
      <button disabled={!configured || pending} type="submit">
        {pending ? <LoaderCircle className="login-spinner" /> : <ArrowRight />}
        {pending ? 'Проверяем…' : 'Открыть страницу'}
      </button>
      <p aria-live="polite" className={error ? 'login-message error' : 'login-message'}>
        {error || (configured ? 'Авторизация сохранится на этом устройстве на 3 месяца.' : 'Добавьте PASSWORD в переменные окружения и повторно разверните сайт.')}
      </p>
    </form>
  );
}
