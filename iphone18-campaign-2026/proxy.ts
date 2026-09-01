import { NextRequest, NextResponse } from 'next/server';

import { ACCESS_COOKIE_NAME, isAccessTokenValid } from './lib/password-auth';

export async function proxy(request: NextRequest) {
  const password = process.env.PASSWORD;
  const token = request.cookies.get(ACCESS_COOKIE_NAME)?.value;

  if (await isAccessTokenValid(token, password)) {
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'private, no-store');
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('next', `${request.nextUrl.pathname}${request.nextUrl.search}`);
  if (!password) loginUrl.searchParams.set('setup', 'required');

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/((?!login|api/auth|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
