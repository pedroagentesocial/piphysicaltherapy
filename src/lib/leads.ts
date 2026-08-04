import { Resend } from 'resend';
import {
  RESEND_API_KEY,
  LEAD_EMAIL_FROM,
  LEAD_EMAIL_TO,
  LEAD_WEBHOOK_URL,
} from 'astro:env/server';

export interface Lead {
  name: string;
  phone: string;
  email: string;
  service: 'rehab' | 'accident' | 'other';
  preferredLang: 'en' | 'es';
  message?: string;
  /** Locale of the page the form was submitted from. */
  locale: 'en' | 'es';
  /**
   * Exact SMS consent wording shown to the person, in the language they read
   * it. Reaching here means the box was checked: the Action rejects the
   * submission otherwise. This is what backs the consent if it's ever queried.
   */
  smsConsentText?: string;
}

const serviceLabel: Record<Lead['service'], string> = {
  rehab: 'Rehabilitation (orthopedic / post-surgical / sports)',
  accident: 'After an accident (personal injury)',
  other: 'Other',
};

function escapeHtml(v: string): string {
  return v
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

/** Email the lead via Resend. No-op (returns 'skipped') if not configured. */
async function sendEmail(lead: Lead): Promise<'sent' | 'skipped'> {
  if (!RESEND_API_KEY || !LEAD_EMAIL_FROM || !LEAD_EMAIL_TO) {
    console.warn('[lead] Resend not configured (RESEND_API_KEY/FROM/TO) — skipping email.');
    return 'skipped';
  }
  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: LEAD_EMAIL_FROM,
    to: LEAD_EMAIL_TO,
    replyTo: lead.email,
    subject: `New appointment request · ${lead.name} · ${serviceLabel[lead.service]}`,
    html: `
      <h2>New appointment request</h2>
      <ul>
        <li><strong>Name:</strong> ${escapeHtml(lead.name)}</li>
        <li><strong>Phone:</strong> ${escapeHtml(lead.phone)}</li>
        <li><strong>Email:</strong> ${escapeHtml(lead.email)}</li>
        <li><strong>Type:</strong> ${serviceLabel[lead.service]}</li>
        <li><strong>Preferred language:</strong> ${lead.preferredLang === 'es' ? 'Spanish' : 'English'}</li>
        <li><strong>Submitted from:</strong> ${lead.locale.toUpperCase()} page</li>
        <li><strong>SMS consent:</strong> given${lead.smsConsentText ? ` — "${escapeHtml(lead.smsConsentText)}"` : ''}</li>
      </ul>
      ${lead.message ? `<p><strong>Message:</strong><br>${escapeHtml(lead.message)}</p>` : ''}
    `,
  });
  if (error) throw new Error(`Resend error: ${error.message}`);
  return 'sent';
}

/** POST the lead to a webhook (CRM). No-op if not configured. */
async function postWebhook(lead: Lead): Promise<'sent' | 'skipped'> {
  if (!LEAD_WEBHOOK_URL) return 'skipped';
  const res = await fetch(LEAD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      ...lead,
      smsConsent: true,
      smsConsentAt: new Date().toISOString(),
      source: 'piphysicaltherapy',
      submittedAt: new Date().toISOString(),
    }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  return 'sent';
}

/**
 * Deliver a lead via every configured channel (Resend email + optional webhook).
 * Throws only if every channel that actually ran failed, so one flaky channel
 * never silently loses a lead. With nothing configured, logs the lead.
 */
export async function deliverLead(lead: Lead): Promise<void> {
  const results = await Promise.allSettled([sendEmail(lead), postWebhook(lead)]);
  const failures = results.filter((r) => r.status === 'rejected');
  const ran = results.filter(
    (r) => r.status === 'rejected' || (r.status === 'fulfilled' && r.value === 'sent'),
  );
  for (const f of failures) {
    if (f.status === 'rejected') console.error('[lead] delivery channel failed:', f.reason);
  }
  if (ran.length === 0) {
    console.log('[lead] no delivery channel configured, captured:', { ...lead, message: undefined });
    return;
  }
  if (failures.length === ran.length) throw new Error('All configured lead channels failed');
}
