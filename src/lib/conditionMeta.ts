import type { Lang } from '../i18n/config';

/**
 * Per-condition SEO title + description, built from the condition's localized
 * name so each of the 7 condition pages gets unique, location-bearing metadata
 * without duplicating strings in both dictionaries.
 */
export function conditionMeta(lang: Lang, name: string): { title: string; description: string } {
  const lower = name.toLowerCase();
  if (lang === 'es') {
    return {
      title: `${name} en Salt Lake City | PI Physical Therapy`,
      description: `Terapia física para ${lower} en Salt Lake City. Evaluación de causa raíz, atención manual y un plan de recuperación. Sin referido para empezar. Se habla español.`,
    };
  }
  return {
    title: `${name} Treatment in Salt Lake City | PI Physical Therapy`,
    description: `Physical therapy for ${lower} in Salt Lake City. Root-cause evaluation, hands-on care and a recovery plan. No referral needed to start. Se habla español.`,
  };
}
