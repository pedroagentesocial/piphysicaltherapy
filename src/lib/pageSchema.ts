import type { UIDict } from '../i18n/ui';
import type { Lang } from '../i18n/config';
import { localeTags } from '../i18n/config';
import { absHrefFor, hrefFor, type RouteKey } from '../i18n/routes';
import { faqSchema, serviceSchema, breadcrumbSchema } from './schema';
import { business } from '../data/business';

/** Single source of truth for the legal-doc "last updated" date (ISO). */
export const LEGAL_UPDATED = '2026-06-09';

type Crumb = { key: RouteKey; label: string };

/** Absolute-URL BreadcrumbList; always starts at the localized home. */
function crumbs(t: UIDict, site: URL, lang: Lang, trail: Crumb[]) {
  const items = [{ name: t.nav.home, url: absHrefFor(site, 'home', lang) }, ...trail.map((c) => ({ name: c.label, url: absHrefFor(site, c.key, lang) }))];
  return breadcrumbSchema(items);
}

export function servicePtSchema(t: UIDict, site: URL, lang: Lang) {
  return [
    serviceSchema(t.servicePT.title, t.seo.servicesPT.description, absHrefFor(site, 'servicesPT', lang)),
    faqSchema(t.servicePT.faq),
    crumbs(t, site, lang, [{ key: 'servicesPT', label: t.nav.rehab }]),
  ];
}

export function serviceAccidentSchema(t: UIDict, site: URL, lang: Lang) {
  return [
    serviceSchema(t.serviceAccident.title, t.seo.servicesAccident.description, absHrefFor(site, 'servicesAccident', lang)),
    faqSchema(t.serviceAccident.faq),
    crumbs(t, site, lang, [{ key: 'servicesAccident', label: t.nav.accident }]),
  ];
}

export function conditionsHubSchema(t: UIDict, site: URL, lang: Lang) {
  return [crumbs(t, site, lang, [{ key: 'conditions', label: t.nav.conditions }])];
}

export function conditionSchema(
  t: UIDict,
  site: URL,
  lang: Lang,
  route: RouteKey,
  name: string,
  description: string,
) {
  return [
    serviceSchema(name, description, absHrefFor(site, route, lang)),
    crumbs(t, site, lang, [
      { key: 'conditions', label: t.nav.conditions },
      { key: route, label: name },
    ]),
  ];
}

export function aboutSchema(t: UIDict, site: URL, lang: Lang) {
  const url = absHrefFor(site, 'team', lang);
  const about = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: t.about.title,
    description: t.seo.team.description,
    url,
    inLanguage: localeTags[lang],
    isPartOf: { '@type': 'WebSite', name: business.name, url: business.url },
    about: { '@type': 'PhysicalTherapy', name: business.name, '@id': `${business.url}/#clinic` },
  };
  return [about, crumbs(t, site, lang, [{ key: 'team', label: t.nav.team }])];
}

export function legalSchema(t: UIDict, site: URL, lang: Lang, doc: 'privacy' | 'terms') {
  const isPrivacy = doc === 'privacy';
  const key: RouteKey = isPrivacy ? 'privacy' : 'terms';
  const name = isPrivacy ? t.footer.privacy : t.footer.terms;
  const description = isPrivacy ? t.seo.privacy.description : t.seo.terms.description;
  const page = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: absHrefFor(site, key, lang),
    inLanguage: localeTags[lang],
    dateModified: LEGAL_UPDATED,
    isPartOf: { '@type': 'WebSite', name: business.name, url: business.url },
    publisher: { '@type': 'PhysicalTherapy', name: business.name, '@id': `${business.url}/#clinic` },
  };
  return [page, crumbs(t, site, lang, [{ key, label: name }])];
}

export function firstVisitSchema(t: UIDict, site: URL, lang: Lang) {
  return [
    faqSchema(t.firstVisit.faq),
    crumbs(t, site, lang, [{ key: 'firstVisit', label: t.nav.firstVisit }]),
  ];
}

export function storiesSchema(t: UIDict, site: URL, lang: Lang) {
  return [crumbs(t, site, lang, [{ key: 'stories', label: t.nav.stories }])];
}

export function comingSoonSchema(t: UIDict, site: URL, lang: Lang) {
  return [crumbs(t, site, lang, [{ key: 'comingSoon', label: t.common.comingSoon }])];
}

export function contactSchema(t: UIDict, site: URL, lang: Lang) {
  return [crumbs(t, site, lang, [{ key: 'contact', label: t.nav.contact }])];
}

/** Re-export so pages can build localized hrefs without another import. */
export { hrefFor };
