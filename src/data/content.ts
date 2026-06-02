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

/** Treating therapists — ⚠️ PLACEHOLDER names/credentials. Replace with the real
 *  licensed team before launch (Person JSON-LD + E-E-A-T depend on it). */
export interface TeamMember {
  id: string;
  name: string;
  credentials: string;
  image: ImageKey;
}

export const team: TeamMember[] = [
  { id: 'lead', name: 'Dr. [Full Name]', credentials: 'PT, DPT', image: 'team' },
  { id: 'ortho', name: 'Dr. [Full Name]', credentials: 'PT, DPT, OCS', image: 'process' },
  { id: 'sports', name: 'Dr. [Full Name]', credentials: 'PT, DPT, SCS', image: 'rehab' },
];
