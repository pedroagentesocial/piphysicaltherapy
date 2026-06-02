import { defaultLang, type Lang } from './config';

/**
 * Translated-slug route map. Each logical page has a slug PER LOCALE so the
 * Spanish URLs carry Spanish keywords (better es-US SEO) while hreflang,
 * canonical and the language switcher still resolve to the correct counterpart
 * (never a crude /es/<english-slug>/ 404).
 *
 * `tail` = path after the locale prefix, no leading/trailing slash. Home is ''.
 * Add a page here AND create its two files under src/pages/{en,es}/.
 */
export const routes = {
  home: { en: '', es: '' },

  servicesPT: { en: 'services/physical-therapy', es: 'servicios/terapia-fisica' },
  servicesAccident: { en: 'services/auto-accident-rehab', es: 'servicios/rehabilitacion-accidentes' },

  conditions: { en: 'conditions', es: 'condiciones' },
  condBack: { en: 'conditions/back-pain', es: 'condiciones/dolor-de-espalda' },
  condNeck: { en: 'conditions/neck-pain', es: 'condiciones/dolor-de-cuello' },
  condShoulder: { en: 'conditions/shoulder', es: 'condiciones/hombro' },
  condKnee: { en: 'conditions/knee', es: 'condiciones/rodilla' },
  condPostSurgical: { en: 'conditions/post-surgical-rehab', es: 'condiciones/rehabilitacion-post-quirurgica' },
  condSports: { en: 'conditions/sports-injuries', es: 'condiciones/lesiones-deportivas' },
  condWhiplash: { en: 'conditions/whiplash', es: 'condiciones/latigazo-cervical' },

  team: { en: 'team', es: 'equipo' },
  firstVisit: { en: 'your-first-visit', es: 'tu-primera-visita' },
  stories: { en: 'patient-stories', es: 'historias-de-pacientes' },
  contact: { en: 'contact', es: 'contacto' },

  privacy: { en: 'privacy', es: 'privacidad' },
  terms: { en: 'terms', es: 'terminos' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** Slug tail for a page in a locale (e.g. routes.servicesPT.es). */
export function tailFor(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

/** Localized internal href, always trailing slash: hrefFor('team','es') → '/es/equipo/'. */
export function hrefFor(key: RouteKey, lang: Lang): string {
  const tail = routes[key][lang];
  return tail ? `/${lang}/${tail}/` : `/${lang}/`;
}

/** Absolute URL for a page in a locale (canonical / hreflang). */
export function absHrefFor(site: URL, key: RouteKey, lang: Lang): string {
  return new URL(hrefFor(key, lang), site).href;
}

/**
 * Reverse lookup: which route key does this pathname belong to? Used by the
 * language switcher (rendered globally, it can't receive the page's key as a
 * prop). Matches the locale-stripped tail against every locale's slug.
 */
export function routeKeyFromPath(pathname: string): RouteKey {
  const seg = pathname.split('/').filter(Boolean);
  const tail = (seg.length && (seg[0] === 'en' || seg[0] === 'es') ? seg.slice(1) : seg).join('/');
  const keys = Object.keys(routes) as RouteKey[];
  const hit = keys.find((k) => routes[k].en === tail || routes[k].es === tail);
  return hit ?? 'home';
}

export interface AlternateLink {
  hreflang: string;
  href: string;
}

/** hreflang alternates (en-US, es-US, x-default→default) for a known page. */
export function alternatesFor(site: URL, key: RouteKey): AlternateLink[] {
  return [
    { hreflang: 'en-US', href: absHrefFor(site, key, 'en') },
    { hreflang: 'es-US', href: absHrefFor(site, key, 'es') },
    { hreflang: 'x-default', href: absHrefFor(site, key, defaultLang) },
  ];
}
