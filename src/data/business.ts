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

  // Real Utah cities in Salt Lake County the clinic serves.
  areaServed: {
    county: 'Salt Lake County',
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

  // Social / external profiles (placeholders — add real ones for sameAs).
  sameAs: [] as string[],
};

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
