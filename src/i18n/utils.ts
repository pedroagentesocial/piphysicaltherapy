import { ui } from './ui';
import { languages, defaultLang, localeTags, type Lang } from './config';

/** Active language from the URL (e.g. /es/contact/ → 'es'). */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}

/** Dictionary for a language. */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/** Build a localized internal href: localize('services') → '/es/services/'. */
export function useTranslatedPath(lang: Lang) {
  return (path = ''): string => {
    const clean = path.replace(/^\/+|\/+$/g, '');
    return clean ? `/${lang}/${clean}/` : `/${lang}/`;
  };
}

/** The route "tail" with the locale stripped: /es/services/ → 'services'. */
export function routeTail(pathname: string): string {
  const seg = pathname.split('/').filter(Boolean);
  const rest = seg.length > 0 && seg[0] in languages ? seg.slice(1) : seg;
  return rest.join('/');
}

/** Equivalent path in another locale (used by the language selector). */
export function getLocalizedPathname(pathname: string, targetLang: Lang): string {
  const tail = routeTail(pathname);
  return tail ? `/${targetLang}/${tail}/` : `/${targetLang}/`;
}

/** Absolute URL for a locale + route tail (always trailing slash). */
export function localizedHref(site: URL, lang: Lang, tail: string): string {
  const path = tail ? `/${lang}/${tail}/` : `/${lang}/`;
  return new URL(path, site).href;
}

export interface AlternateLink {
  hreflang: string;
  href: string;
}

/**
 * hreflang alternates for the current page: one per locale (en-US, es-US)
 * plus x-default → the default locale. Used in <head>.
 */
export function getAlternates(url: URL, site: URL): AlternateLink[] {
  const tail = routeTail(url.pathname);
  const links: AlternateLink[] = (Object.keys(languages) as Lang[]).map((lang) => ({
    hreflang: localeTags[lang],
    href: localizedHref(site, lang, tail),
  }));
  links.push({ hreflang: 'x-default', href: localizedHref(site, defaultLang, tail) });
  return links;
}

/** Canonical URL for the current page (current locale, trailing slash). */
export function getCanonical(url: URL, site: URL, lang: Lang): string {
  return localizedHref(site, lang, routeTail(url.pathname));
}
