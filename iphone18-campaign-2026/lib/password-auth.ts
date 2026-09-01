export const ACCESS_COOKIE_NAME = 'iphone18_campaign_access';
export const ACCESS_COOKIE_MAX_AGE = 60 * 60 * 24 * 90;

const TOKEN_CONTEXT = '05ru:iphone18-campaign-2026:v1';

async function createSignature(password: string, expiresAt: number) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(`${TOKEN_CONTEXT}:${expiresAt}`));

  return Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

export async function createAccessToken(password: string, expiresAt: number) {
  const signature = await createSignature(password, expiresAt);
  return `${expiresAt}.${signature}`;
}

export function constantTimeEqual(left: string, right: string) {
  if (left.length !== right.length) return false;

  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }

  return difference === 0;
}

export async function isAccessTokenValid(token: string | undefined, password: string | undefined) {
  if (!token || !password) return false;
  const [expiresAtRaw] = token.split('.', 1);
  const expiresAt = Number(expiresAtRaw);
  const latestAllowedExpiry = Date.now() + ACCESS_COOKIE_MAX_AGE * 1000 + 60_000;

  if (!Number.isSafeInteger(expiresAt) || expiresAt <= Date.now() || expiresAt > latestAllowedExpiry) {
    return false;
  }

  const expectedToken = await createAccessToken(password, expiresAt);
  return constantTimeEqual(token, expectedToken);
}
