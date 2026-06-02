import { business } from '../data/business';
import type { TeamMember } from '../data/content';

type Json = Record<string, unknown>;

const CLINIC_REF = { '@type': 'PhysicalTherapy', name: business.name, '@id': `${business.url}/#clinic` };

/** BreadcrumbList for sub-pages. items: [{name, url}] in order. */
export function breadcrumbSchema(items: { name: string; url: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** FAQPage from localized Q&A pairs. */
export function faqSchema(items: { question: string; answer: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  };
}

/** A service / therapy offered, linked back to the clinic. */
export function serviceSchema(name: string, description: string, url: string): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name,
    description,
    url,
    provider: CLINIC_REF,
  };
}

/** Physician/Person schema for the team page (E-E-A-T for medical SEO). */
export function personSchema(member: TeamMember, role: string, url: string): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: role,
    // DPT/OCS/SCS etc. as recognized credentials.
    hasCredential: member.credentials,
    knowsLanguage: ['en-US', 'es-US'],
    worksFor: CLINIC_REF,
    url,
  };
}
