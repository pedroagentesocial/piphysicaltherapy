import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { deliverLead } from '../lib/leads';

/** A US phone must contain at least 10 digits. */
const hasUsPhoneDigits = (v: string) => v.replace(/\D/g, '').length >= 10;

export const server = {
  lead: defineAction({
    accept: 'form',
    // Intentionally minimal: NO detailed medical history in a public form.
    input: z.object({
      name: z.string().trim().min(2),
      phone: z.string().trim().refine(hasUsPhoneDigits, 'invalid_phone'),
      email: z.string().trim().email(),
      // The clinic's two pillars + a catch-all.
      service: z.enum(['rehab', 'accident', 'other']),
      preferredLang: z.enum(['en', 'es']),
      message: z.string().trim().max(1000).optional(),
      // Locale of the submitting page.
      locale: z.enum(['en', 'es']).default('en'),
      // Honeypot — real users leave it empty.
      company: z.string().max(0).optional(),
    }),
    handler: async (input) => {
      if (input.company) return { ok: true as const };

      try {
        await deliverLead({
          name: input.name,
          phone: input.phone,
          email: input.email,
          service: input.service,
          preferredLang: input.preferredLang,
          message: input.message,
          locale: input.locale,
        });
      } catch (err) {
        console.error('[lead] delivery failed:', err);
        throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'Lead delivery failed' });
      }
      return { ok: true as const };
    },
  }),
};
