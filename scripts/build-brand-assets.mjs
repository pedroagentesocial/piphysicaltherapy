/**
 * Derives every brand asset in /public from the master logo (public/logo.png).
 *
 * The master arrives as a flat PNG on the cream artboard of the brand sheet
 * (public/identidad.png). Everything the site actually ships — the lockups, the
 * OG card, the touch icon — is cut from it here, so there is exactly one file
 * to replace when the logo changes:
 *
 *   logo.png (master, cream artboard)
 *     ├── logo-lockup.png        transparent, full colour  → header / footer on paper
 *     ├── logo-lockup-white.png  transparent, solid white  → header over the dark hero
 *     ├── og-default.png         1200×630 social card
 *     └── apple-touch-icon.png   180×180 mark on white
 *
 * The two vectors (favicon.svg, logo-mark.svg) are hand-drawn from the same
 * mark and live in /public directly — they are geometry, not a crop.
 *
 * Run with: npm run brand
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SRC = 'public/logo.png';
const OUT = 'public';

/** The artboard colour behind the master logo (sampled from its corner). */
const BG = [241, 238, 225];
/** Alpha below this is artboard noise/JPEG ringing, not ink. */
const NOISE = 0.05;

/**
 * Keys the cream artboard out of the master.
 *
 * For dark ink over a known light background, `p = a·c + (1-a)·b` is solved by
 * taking the channel that lost the most light as the coverage, then dividing
 * the colour back out (un-premultiply). Anti-aliased edges survive, and the
 * result composites correctly over ANY background — not just cream.
 */
async function keyed() {
  const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H, channels: C } = info;
  const out = Buffer.alloc(W * H * 4);
  const box = { x0: W, y0: H, x1: 0, y1: 0 };

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * C;
      const p = [data[i], data[i + 1], data[i + 2]];

      let a = 0;
      for (let k = 0; k < 3; k++) a = Math.max(a, (BG[k] - p[k]) / BG[k]);
      a = Math.min(1, Math.max(0, (a - NOISE) / (1 - NOISE)));

      const o = (y * W + x) * 4;
      if (a > 0) {
        for (let k = 0; k < 3; k++) {
          out[o + k] = Math.min(255, Math.max(0, Math.round((p[k] - (1 - a) * BG[k]) / a)));
        }
        if (a > 0.08) {
          if (x < box.x0) box.x0 = x;
          if (x > box.x1) box.x1 = x;
          if (y < box.y0) box.y0 = y;
          if (y > box.y1) box.y1 = y;
        }
      }
      out[o + 3] = Math.round(a * 255);
    }
  }
  return { out, W, H, box };
}

/** The mark, hand-drawn over the master (see scripts/README note in the commit). */
const MARK = {
  w: 111,
  h: 143,
  body: (stroke, dot) => `
  <g fill="none" stroke="${stroke}" stroke-width="10.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M40.5 5.5H73.3C94 5.5 106.1 25 106.1 45c0 22.3-19.4 39.5-33.1 39.5H61.3c-8.8 0-16 7.2-16 16V137.3"/>
    <path d="M81 54.5c-4 4.5-7 8.5-11 8.5H25.5C14.7 63 5.7 71.7 5.7 83.8 5.7 94.6 14.4 102 26 102h.5"/>
  </g>
  <circle cx="58" cy="37.5" r="12.5" fill="${dot}"/>`,
};

async function run() {
  await mkdir(OUT, { recursive: true });
  const { out, W, H, box } = await keyed();
  const raw = { raw: { width: W, height: H, channels: 4 } };
  const crop = { left: box.x0, top: box.y0, width: box.x1 - box.x0 + 1, height: box.y1 - box.y0 + 1 };
  console.log(`master ${W}×${H} → ink ${crop.width}×${crop.height} at ${crop.left},${crop.top}`);

  // ---- Lockups (2× the largest on-page size, so phones stay crisp) ----
  const lockupW = crop.width * 2;
  const lockup = await sharp(out, raw).extract(crop).resize({ width: lockupW, kernel: 'lanczos3' }).png({ compressionLevel: 9 }).toBuffer();
  await sharp(lockup).toFile(`${OUT}/logo-lockup.png`);

  // White version: same coverage, ink replaced by paper white.
  await sharp(lockup)
    .ensureAlpha()
    .composite([{ input: { create: { width: lockupW, height: Math.round((crop.height / crop.width) * lockupW), channels: 3, background: '#ffffff' } }, blend: 'in' }])
    .png({ compressionLevel: 9 })
    .toFile(`${OUT}/logo-lockup-white.png`);

  // ---- Social card ----
  const OGW = 1200, OGH = 630, BAR = 14;
  const cardLogoW = 760;
  const cardLogo = await sharp(out, raw).extract(crop).resize({ width: cardLogoW, kernel: 'lanczos3' }).png().toBuffer();
  const cardLogoH = Math.round((crop.height / crop.width) * cardLogoW);
  const card = `<svg xmlns="http://www.w3.org/2000/svg" width="${OGW}" height="${OGH}">
    <defs>
      <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.6" fill="#0F2D4D" opacity="0.055"/>
      </pattern>
    </defs>
    <rect width="${OGW}" height="${OGH}" fill="#FDFDFE"/>
    <rect width="${OGW}" height="${OGH - BAR}" fill="url(#dots)"/>
    <rect y="${OGH - BAR}" width="${OGW}" height="${BAR}" fill="#00968F"/>
  </svg>`;
  await sharp(Buffer.from(card))
    .composite([{ input: cardLogo, left: Math.round((OGW - cardLogoW) / 2), top: Math.round((OGH - BAR - cardLogoH) / 2) }])
    .png({ compressionLevel: 9 })
    .toFile(`${OUT}/og-default.png`);

  // ---- Touch icon: the mark on white, drawn from the vector so it stays sharp ----
  const ICON = 180, PAD = 34;
  const inner = ICON - PAD * 2;
  const markPng = await sharp(
    Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MARK.w} ${MARK.h}">${MARK.body('#00968F', '#1A2F50')}</svg>`),
    { density: 600 },
  )
    .resize({ height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const markMeta = await sharp(markPng).metadata();
  await sharp(
    Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${ICON}" height="${ICON}"><rect width="${ICON}" height="${ICON}" rx="38" fill="#FFFFFF"/></svg>`),
  )
    .composite([{ input: markPng, left: Math.round((ICON - markMeta.width) / 2), top: PAD }])
    .png({ compressionLevel: 9 })
    .toFile(`${OUT}/apple-touch-icon.png`);

  console.log('brand assets written to /public');
}

run();
