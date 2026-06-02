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
    },
  },

  // Pages prerender (static → in the sitemap). The Actions endpoint runs as a
  // Vercel serverless function.
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});
