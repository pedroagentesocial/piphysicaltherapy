// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { routes, routeKeyFromPath } from './src/i18n/routes';

const SITE = 'https://www.piphysicaltherapy.com';

// Correct hreflang alternates for the sitemap. The built-in `i18n` option swaps
// only the locale prefix, which is wrong for our TRANSLATED slugs
// (/en/services/physical-therapy ↔ /es/servicios/terapia-fisica). So we map each
// URL back to its route key and emit the real per-locale URLs.
function localizedLinks(pathname) {
  const key = routeKeyFromPath(pathname);
  const tail = routes[key];
  const en = `${SITE}/en/${tail.en ? tail.en + '/' : ''}`;
  const es = `${SITE}/es/${tail.es ? tail.es + '/' : ''}`;
  return [
    { lang: 'en-US', url: en },
    { lang: 'es-US', url: es },
    { lang: 'x-default', url: en },
  ];
}

// https://astro.build/config
export default defineConfig({
  // Canonical production origin. Drives canonical URLs, hreflang and sitemap.
  site: 'https://www.piphysicaltherapy.com',
  // One URL shape everywhere (trailing slash) so canonical/hreflang/sitemap agree.
  trailingSlash: 'always',

  // Native Astro i18n. English is the default (US clinic); BOTH locales are
  // URL-prefixed (/en/ and /es/). Spanish is US Spanish (es-US), Latin American
  // / Mexican-leaning — never es-ES. See src/i18n/config.ts.
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  // Bare root → default locale.
  redirects: {
    '/': '/en/',
  },

  integrations: [
    // Sitemap with CORRECT hreflang alternates for translated slugs. We skip the
    // bare root redirect and inject per-locale links from the route map.
    sitemap({
      filter: (page) => page !== `${SITE}/`,
      serialize(item) {
        const { pathname } = new URL(item.url);
        item.links = localizedLinks(pathname);
        return item;
      },
    }),
  ],

  // Typed, optional env for lead delivery (Resend + webhook). Graceful without them.
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      LEAD_EMAIL_FROM: envField.string({ context: 'server', access: 'secret', optional: true }),
      LEAD_EMAIL_TO: envField.string({ context: 'server', access: 'secret', optional: true }),
      LEAD_WEBHOOK_URL: envField.string({ context: 'server', access: 'secret', optional: true }),

      // Cloudflare Turnstile. Ambas opcionales para que el proyecto siga
      // arrancando sin configurar: sin secret el captcha no se exige (util en
      // local), con secret pasa a ser obligatorio. Ver src/actions/index.ts.
      TURNSTILE_SECRET_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      PUBLIC_TURNSTILE_SITE_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
    },
  },

  // Pages prerender (static → in the sitemap). The Actions endpoint runs as a
  // Vercel serverless function.
  adapter: vercel(),

  // Astro's CSRF guard (`checkOrigin`, on by default) compares the Origin
  // header against the request URL. Behind Vercel that comparison fails here,
  // so EVERY POST to the Actions endpoint was answered with 403 "Cross-site
  // POST form submissions are forbidden" before any validation ran. The lead
  // form was silently unusable: visitors only saw the generic error.
  //
  // Safe to disable for THIS form. CSRF protects actions performed on behalf
  // of an authenticated user; this form is public, with no login and no
  // session, so forging a submission gains an attacker nothing they could not
  // do by POSTing directly. Real abuse protection is Turnstile (verified
  // server-side), the honeypot and the Zod validation.
  security: { checkOrigin: false },

  vite: {
    plugins: [tailwindcss()],
  },
});
