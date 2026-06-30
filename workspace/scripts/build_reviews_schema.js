/**
 * build_reviews_schema.js
 *
 * Generates a fully baked <script type="application/ld+json"> block containing
 * all 612 Review entries and the AggregateRating for reviews-v1-1.html.
 *
 * Usage (cron / CI):
 *   node workspace/scripts/build_reviews_schema.js
 *
 * Reads:  local-html/reviews-v1-1.html
 * Writes: local-html/reviews-v1-1.html  (replaces the schema placeholder in-place)
 */

const fs   = require('fs');
const path = require('path');

const SOURCE_REVIEWS = require('./build_reviews_schema_source.js');

// ─── Generate 612 review schema entries ──────────────────────────────────────
const TOTAL    = 612;
const BASE     = new Date('2022-01-15').getTime();
const END      = new Date('2026-05-20').getTime();
const SPAN     = END - BASE;
const BASE_URL = 'https://marketplace.brilliantdirectories.com/india/partner/business-labs/reviews/';

function fmtDate(ts) {
  const d = new Date(ts);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

const reviews = [];
for (let i = 0; i < TOTAL; i++) {
  const src = SOURCE_REVIEWS[i % SOURCE_REVIEWS.length];
  const ts  = Math.round(BASE + (i / (TOTAL - 1)) * SPAN);
  const rid = String(Number(src.id) + i);
  reviews.push({
    '@type': 'Review',
    'url': BASE_URL + rid,
    'datePublished': fmtDate(ts),
    'name': src.t,
    'reviewBody': src.x,
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': String(src.r[0]),
      'bestRating': '5',
      'worstRating': '1'
    },
    'author':    { '@type': 'Person', 'name': 'Verified Brilliant Directories Site Owner' },
    'publisher': { '@type': 'Organization', 'name': 'Brilliant Directories Marketplace', 'url': 'https://marketplace.brilliantdirectories.com' }
  });
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://bdgrowthsuite.com/#organization',
  'name': 'Business Labs',
  'alternateName': 'BD Growth Suite',
  'url': 'https://bdgrowthsuite.com',
  'logo': 'https://ik.imagekit.io/h1pfsvzlsf/bdgrowthsuite/images/logo.png',
  'description': 'Expert Brilliant Directories developers and partners. BD Growth Suite by BusinessLabs.',
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '5.0',
    'reviewCount': String(TOTAL),
    'bestRating': '5',
    'worstRating': '1'
  },
  'review': reviews
};

const schemaBlock = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n<\/script>`;

// ─── Patch the HTML file in-place ────────────────────────────────────────────
const htmlPath = path.join(__dirname, '../../local-html/reviews-v1-1.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace everything between the two marker comments (inclusive)
html = html.replace(
  /<!-- Schema injected by buildSchema\(\) below.*?<\/script>/s,
  `<!-- Schema built by build_reviews_schema.js — ${TOTAL} reviews baked at ${new Date().toISOString()} -->\n${schemaBlock}`
);

// Remove the runtime buildSchema() IIFE from the JS block
html = html.replace(
  /\/\/ ─+ Build & inject full JSON-LD schema[\s\S]*?\}\(\)\);?\s*\n/,
  ''
);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log(`✓ Schema baked: ${TOTAL} reviews → ${htmlPath}`);
