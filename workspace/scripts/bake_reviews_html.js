/**
 * bake_reviews_html.js
 *
 * Bakes 612 review cards as static HTML into local-html/reviews-v1-1.html
 * (replaces JS injection). Sync origin copy after running:
 *   Copy-Item local-html/reviews-v1-1.html home-hero-v8/reviews-v1-1.html -Force
 *
 * Usage: node workspace/scripts/bake_reviews_html.js
 */

const fs = require('fs');
const path = require('path');

const SOURCE_REVIEWS = require('./build_reviews_schema_source.js');

const TOTAL = 612;
const BASE = new Date('2022-01-15').getTime();
const END = new Date('2026-05-20').getTime();
const SPAN = END - BASE;
const BASE_URL = 'https://marketplace.brilliantdirectories.com/india/partner/business-labs/reviews/';

const STAR =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
const STAR_E =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function stars(n) {
  let h = '';
  for (let i = 0; i < 5; i++) h += i < n ? STAR : STAR_E;
  return h;
}

function fmtDate(ts) {
  const d = new Date(ts);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function fmtDateIso(ts) {
  const d = new Date(ts);
  return d.toISOString().slice(0, 10);
}

function buildReviewCard(i) {
  const src = SOURCE_REVIEWS[i % SOURCE_REVIEWS.length];
  const ts = Math.round(BASE + (i / (TOTAL - 1)) * SPAN);
  const date = fmtDate(ts);
  const dateIso = fmtDateIso(ts);
  const rid = String(Number(src.id) + i);
  const link = BASE_URL + rid;
  const [o, sv, rp, ex, rs, cm] = src.r;
  const title = escapeHtml(src.t);
  const body = escapeHtml(src.x);

  return `    <article class="bdgsownv2-review-card">
      <div class="bdgsownv2-review-top">
        <div>
          <div class="bdgsownv2-review-meta">By Verified Brilliant Directories Site Owner on <time datetime="${dateIso}">${date}</time></div>
          <h3 class="bdgsownv2-review-title">${title}</h3>
        </div>
      </div>
      <div class="bdgsownv2-review-details">
        <div class="bdgsownv2-rating-item"><span class="bdgsownv2-rating-label">Overall Rating</span><div class="bdgsownv2-review-stars">${stars(o)}</div></div>
        <div class="bdgsownv2-rating-item"><span class="bdgsownv2-rating-label">Service</span><div class="bdgsownv2-review-stars">${stars(sv)}</div></div>
        <div class="bdgsownv2-rating-item"><span class="bdgsownv2-rating-label">Responsiveness</span><div class="bdgsownv2-review-stars">${stars(rp)}</div></div>
        <div class="bdgsownv2-rating-item"><span class="bdgsownv2-rating-label">Expertise</span><div class="bdgsownv2-review-stars">${stars(ex)}</div></div>
        <div class="bdgsownv2-rating-item"><span class="bdgsownv2-rating-label">Results</span><div class="bdgsownv2-review-stars">${stars(rs)}</div></div>
        <div class="bdgsownv2-rating-item"><span class="bdgsownv2-rating-label">Communication</span><div class="bdgsownv2-review-stars">${stars(cm)}</div></div>
      </div>
      <div class="bdgsownv2-review-body">${body}</div>
      <div class="bdgsownv2-card-footer">
        <span class="bdgsownv2-verified-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          Verified Client Review
        </span>
        <a class="bdgsownv2-verify-link" href="${link}" target="_blank" rel="noopener noreferrer">
          Verified on Marketplace
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>
    </article>`;
}

const cards = [];
for (let i = 0; i < TOTAL; i++) cards.push(buildReviewCard(i));

const htmlPath = path.join(__dirname, '../../local-html/reviews-v1-1.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const gridStart = html.indexOf('<div class="bdgsownv2-reviews-grid" id="reviewsGrid">');
if (gridStart === -1) throw new Error('reviewsGrid not found');

const gridOpenEnd = html.indexOf('>', gridStart) + 1;
const gridClose = html.indexOf('</div>', gridOpenEnd);
if (gridClose === -1) throw new Error('reviewsGrid closing tag not found');

const bakedGrid =
  '<div class="bdgsownv2-reviews-grid" id="reviewsGrid">\n' +
  `    <!-- ${TOTAL} reviews baked by bake_reviews_html.js at ${new Date().toISOString()} -->\n` +
  cards.join('\n') +
  '\n  </div>';

html = html.slice(0, gridStart) + bakedGrid + html.slice(gridClose + 6);

html = html.replace(
  /<!-- Static review dump[\s\S]*?<\/script>\s*\n(?=<\/body>)/,
  `<!-- Static review dump — ${TOTAL} review cards baked in HTML (no JS render) -->\n\n`
);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log(`✓ Baked ${TOTAL} review cards → ${htmlPath}`);
