import { TURNSTILE_SECRET_KEY } from 'astro:env/server';

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/** True when the captcha is configured and therefore enforced. */
export const turnstileEnabled = Boolean(TURNSTILE_SECRET_KEY);

/**
 * Verify a Turnstile token with Cloudflare.
 *
 * Returns `true` when the captcha is NOT configured, so local development and
 * previews without the secret keep working. Once TURNSTILE_SECRET_KEY exists
 * — which is the case in production — a missing or invalid token fails.
 *
 * Note the hostname check is Cloudflare's: a token minted for another site's
 * widget is rejected here, which is why each domain needs its own widget (or
 * needs to be added to an existing one).
 */
export async function verifyTurnstile(token: string | undefined, remoteIp?: string): Promise<boolean> {
  if (!TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;

  const body = new FormData();
  body.append('secret', TURNSTILE_SECRET_KEY);
  body.append('response', token);
  if (remoteIp) body.append('remoteip', remoteIp);

  try {
    const res = await fetch(VERIFY_URL, { method: 'POST', body });
    const data = (await res.json()) as { success: boolean; 'error-codes'?: string[] };
    if (!data.success) console.warn('[turnstile] rejected:', data['error-codes']);
    return data.success;
  } catch (err) {
    // Cloudflare unreachable. Fail closed: better a retry than an open door.
    console.error('[turnstile] verification unavailable:', err);
    return false;
  }
}
