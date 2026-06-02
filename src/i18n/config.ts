/**
 * i18n configuration. English is the default locale (US clinic).
 * Spanish is US Spanish (es-US) — neutral Latin American, Mexican-leaning.
 * NEVER es-ES: no "vosotros", no "coger", no euros, no Spain-only idioms.
 * Keep `locales` in sync with astro.config.mjs.
 */
export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** BCP-47 region tags for hreflang + <html lang>. US variants, NOT es-ES. */
export const localeTags: Record<Lang, string> = {
  en: 'en-US',
  es: 'es-US',
};

/** Open Graph locale codes (underscore form). */
export const ogLocales: Record<Lang, string> = {
  en: 'en_US',
  es: 'es_US',
};
