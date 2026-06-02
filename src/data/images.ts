/**
 * Verified Unsplash stock (HTTP 200 confirmed, canonical delivery params).
 * ⚠️ PLACEHOLDER imagery: replace with real clinic/team photos before launch
 * (better trust + local SEO). When you swap a photo, update its alt text too.
 *
 * Each entry is a bare Unsplash photo id; <Img> builds the responsive srcset.
 * Alt text is bilingual and intentionally theme-level (true for the photo's
 * category) so a placeholder swap never leaves a misleading description.
 */
export interface SiteImage {
  id: string;
  alt: { en: string; es: string };
}

export const images = {
  heroHome: {
    id: '1540205895360-4ad4cffb3aa8',
    alt: {
      en: 'A person working through a guided strengthening movement during recovery.',
      es: 'Una persona realizando un movimiento de fortalecimiento guiado durante su recuperación.',
    },
  },
  rehab: {
    id: '1649751361457-01d3a696c7e6',
    alt: {
      en: 'A physical therapist guiding an athlete through sports rehabilitation.',
      es: 'Un fisioterapeuta guiando a un atleta en su rehabilitación deportiva.',
    },
  },
  accident: {
    id: '1764314484083-cbd0de7e512c',
    alt: {
      en: 'A clinician assessing a patient recovering from an injury.',
      es: 'Un clínico evaluando a un paciente que se recupera de una lesión.',
    },
  },
  clinic: {
    id: '1630226040750-d934f017f0e4',
    alt: {
      en: 'A bright, modern physical therapy clinic treatment space.',
      es: 'Un espacio de tratamiento de terapia física luminoso y moderno.',
    },
  },
  team: {
    id: '1758654860100-32cd2e83e74a',
    alt: {
      en: 'A physical therapist working hands-on with a patient.',
      es: 'Un fisioterapeuta trabajando de forma directa con un paciente.',
    },
  },
  process: {
    id: '1770012905139-713758ded6ec',
    alt: {
      en: 'A therapist and patient reviewing a recovery plan together.',
      es: 'Un terapeuta y un paciente revisando juntos un plan de recuperación.',
    },
  },
} as const satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
