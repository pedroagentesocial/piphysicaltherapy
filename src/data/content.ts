/**
 * Language-neutral structure that ties pages together. Copy lives in the
 * dictionaries (i18n/locales) keyed by these same ids; facts/relationships
 * (which route, which pillar, which image) live here so the two never drift.
 */
import type { RouteKey } from '../i18n/routes';
import type { ImageKey } from './images';

export type Pillar = 'rehab' | 'accident';
export type Accent = 'field' | 'ember';

/** The two SEO pillars → their service page + brand accent + hero image. */
export interface PillarDef {
  id: Pillar;
  route: RouteKey;
  accent: Accent;
  image: ImageKey;
}

export const pillars: PillarDef[] = [
  { id: 'rehab', route: 'servicesPT', accent: 'field', image: 'rehab' },
  { id: 'accident', route: 'servicesAccident', accent: 'ember', image: 'accident' },
];

/** Conditions treated → route, which pillar(s) it belongs to, accent. */
export interface ConditionDef {
  id: string;
  route: RouteKey;
  /** Which pillar leads the framing of this condition. */
  pillar: Pillar;
}

export const conditions: ConditionDef[] = [
  { id: 'back', route: 'condBack', pillar: 'rehab' },
  { id: 'neck', route: 'condNeck', pillar: 'rehab' },
  { id: 'shoulder', route: 'condShoulder', pillar: 'rehab' },
  { id: 'knee', route: 'condKnee', pillar: 'rehab' },
  { id: 'postsurgical', route: 'condPostSurgical', pillar: 'rehab' },
  { id: 'sports', route: 'condSports', pillar: 'rehab' },
  { id: 'whiplash', route: 'condWhiplash', pillar: 'accident' },
];

export type ConditionId = (typeof conditions)[number]['id'];

/**
 * Service offerings shown in the nav "Services" dropdown and the home Services
 * section. The two pillars are full pages; the specialized programs deep-link
 * into anchored sections of the physical-therapy page.
 */
export type ServiceId = 'pt' | 'accident' | 'sports' | 'vestibular' | 'work';

export interface ServiceDef {
  id: ServiceId;
  route: RouteKey;
  /** Optional anchor on the destination page (specialized programs). */
  hash?: string;
  accent: Accent;
  /** Background photo for the home Services card. */
  image: ImageKey;
  /** Pillars get a featured treatment in the UI. */
  featured?: boolean;
}

export const services: ServiceDef[] = [
  { id: 'pt', route: 'servicesPT', accent: 'field', image: 'process', featured: true },
  { id: 'accident', route: 'servicesAccident', accent: 'ember', image: 'accident', featured: true },
  { id: 'sports', route: 'servicesPT', hash: 'sports-rehab', accent: 'field', image: 'rehab' },
  { id: 'vestibular', route: 'servicesPT', hash: 'vestibular-balance', accent: 'field', image: 'team' },
  { id: 'work', route: 'servicesPT', hash: 'work-injury', accent: 'ember', image: 'clinic' },
];