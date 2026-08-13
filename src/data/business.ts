/**
 * Single source of truth for NAP (name, address, phone) and other business
 * facts. Used by the footer, the contact block AND the JSON-LD so structured
 * data and on-page content can never drift apart.
 *
 * ⚠️ NOTE: address / phone / geo below are PLACEHOLDERS using the reserved 801
 * "555" exchange. Replace with the clinic's real verified NAP before launch —
 * it must match the Google Business Profile EXACTLY for local SEO.
 */
export const business = {
  // "PI" = Personal Injury (the clinic's accident-rehab focus). Keep the name
  // byte-for-byte identical everywhere (NAP consistency).
  name: 'PI Physical Therapy',
  url: 'https://www.piphysicaltherapy.com',

  phone: '+1-801-555-0123', // tel: link format
  phoneDisplay: '(801) 555-0123', // US display format, 801 area code
  email: 'info@piphysicaltherapy.com',

  // PROVISIONAL availability flags. While false, the UI routes "call" CTAs to the
  // contact form, hides the phone, and shows the location as "coming soon" — never
  // publishing placeholder NAP. Flip to true once the real phone/address are set.
  hasPhone: false,
  hasLocation: false,

  address: {
    street: '123 Example Ave, Suite 100',
    city: 'Salt Lake City',
    region: 'UT',
    regionName: 'Utah',
    postalCode: '84101',
    country: 'US',
  },

  // Salt Lake City coordinates (placeholder — set to the real clinic location).
  geo: { latitude: 40.7608, longitude: -111.891 },

  /**
   * Service area, widest first: the whole STATE, then the counties we draw most
   * patients from, then the nearby cities. Footer copy and the JSON-LD
   * `areaServed` both read from here so the claim is identical in both.
   * County names stay in English everywhere (proper nouns); the locale supplies
   * the grammar around the list ("… counties" / "los condados de …").
   */
  areaServed: {
    state: 'Utah',
    stateCode: 'UT',
    counties: ['Salt Lake', 'Utah', 'Davis', 'Weber', 'Cache', 'Washington'],
    cities: [
      'Salt Lake City',
      'West Valley City',
      'Sandy',
      'Murray',
      'West Jordan',
      'Taylorsville',
    ],
  },

  // schema.org MedicalSpecialty enum value. NOTE: the canonical member is
  // "Physiotherapy" (there is no "Physical Therapy" member). The business @type
  // itself is "PhysicalTherapy" — see components/JsonLd.astro.
  medicalSpecialty: ['Physiotherapy'],

  // Opening hours (24h, used for openingHoursSpecification). ⚠️ Confirm real hours.
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { days: ['Saturday'], opens: '09:00', closes: '13:00' },
  ],

  priceRange: '$$',

  /**
   * Las CINCO redes de la marca, siempre en este orden y siempre visibles.
   * Un perfil sin url se muestra pero no enlaza: nunca publicamos un enlace
   * muerto ni apuntamos a un handle que otro podría ocupar. Al poner la url,
   * enlaza y entra solo al sameAs del JSON-LD.
   */
  socials: [
    { key: 'facebook', label: 'Facebook', url: '' },
    { key: 'instagram', label: 'Instagram', url: '' },
    { key: 'tiktok', label: 'TikTok', url: '' },
    { key: 'youtube', label: 'YouTube', url: '' },
    { key: 'linkedin', label: 'LinkedIn', url: '' },
  ],
};

/** Solo los perfiles que existen: lo único que el sameAs puede afirmar. */
export const socialSameAs: string[] = business.socials.filter((s) => s.url).map((s) => s.url);

export type Business = typeof business;

/** Insurers accepted — ⚠️ PLACEHOLDER real Utah names. Confirm the clinic's actual list. */
export const insurers: string[] = [
  'SelectHealth',
  'Regence BlueCross BlueShield',
  'DMBA',
  'EMI Health',
  'Molina Healthcare',
  'University of Utah Health Plans',
  'Medicaid',
  'Medicare',
];
