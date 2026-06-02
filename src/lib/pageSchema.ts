import type { UIDict } from '../i18n/ui';
import type { Lang } from '../i18n/config';
import { absHrefFor, hrefFor, type RouteKey } from '../i18n/routes';
import { faqSchema, serviceSchema, breadcrumbSchema, personSchema } from './schema';
import { team } from '../data/content';

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

export function teamSchema(t: UIDict, site: URL, lang: Lang) {
  const url = absHrefFor(site, 'team', lang);
  const people = team.map((m) =>
    personSchema(m, t.team.members[m.id as keyof typeof t.team.members].role, url),
  );
  return [...people, crumbs(t, site, lang, [{ key: 'team', label: t.nav.team }])];
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

export function contactSchema(t: UIDict, site: URL, lang: Lang) {
  return [crumbs(t, site, lang, [{ key: 'contact', label: t.nav.contact }])];
}

/** Re-export so pages can build localized hrefs without another import. */
export { hrefFor };
