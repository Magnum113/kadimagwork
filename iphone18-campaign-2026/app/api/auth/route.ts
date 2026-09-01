import { NextRequest, NextResponse } from 'next/server';

import {
  ACCESS_COOKIE_MAX_AGE,
  ACCESS_COOKIE_NAME,
  constantTimeEqual,
  createAccessToken,
} from '@/lib/password-auth';

function json(body: { error?: string; ok?: boolean }, status = 200) {
  const response = NextResponse.json(body, { status });
  response.headers.set('Cache-Control', 'no-store');
  return response;
}

export async function POST(request: NextRequest) {
  const configuredPassword = process.env.PASSWORD;
  if (!configuredPassword) return json({ error: 'Доступ ещё не настроен.' }, 503);

  let submittedPassword = '';
  try {
    const body = (await request.json()) as { password?: unknown };
    if (typeof body.password === 'string') submittedPassword = body.password;
  } catch {
    return json({ error: 'Не удалось проверить пароль.' }, 400);
  }

  if (!submittedPassword) {
    await new Promise((resolve) => setTimeout(resolve, 450));
    return json({ error: 'Неверный пароль.' }, 401);
  }

  const expiresAt = Date.now() + ACCESS_COOKIE_MAX_AGE * 1000;
  const [submittedToken, expectedToken] = await Promise.all([
    createAccessToken(submittedPassword, expiresAt),
    createAccessToken(configuredPassword, expiresAt),
  ]);

  if (!constantTimeEqual(submittedToken, expectedToken)) {
    await new Promise((resolve) => setTimeout(resolve, 450));
    return json({ error: 'Неверный пароль.' }, 401);
  }

  const response = json({ ok: true });
  response.cookies.set({
    name: ACCESS_COOKIE_NAME,
    value: expectedToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: ACCESS_COOKIE_MAX_AGE,
    path: '/',
  });

  return response;
}
