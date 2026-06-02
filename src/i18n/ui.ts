import { en } from './locales/en';
import { es } from './locales/es';
import type { Lang } from './config';

/** Dictionaries keyed by language. `en` is the source-of-truth shape. */
export const ui: Record<Lang, typeof en> = { en, es };

export type UIDict = typeof en;
