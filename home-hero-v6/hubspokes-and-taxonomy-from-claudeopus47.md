# BD Growth Suite — Hub-Spokes & Taxonomy

**Document type:** Locked architectural decisions for BDGS website
**Prepared by:** Claude Opus 4.7 (Anthropic) in collaboration with Yakin Shah
**Source conversation:** BDGS website rebuild, Sprint planning, page list lock
**Status:** Final reference for building all pages

---

## 1. Brand & Visual Foundation (Locked)

| Item | Value |
|---|---|
| Primary color | `#E74D56` (coral-red) |
| Secondary color | `#95256E` (deep purple) |
| Dark base | `#1A1A2E` |
| Web font | DM Sans (replaces Glacial Indifference + Roboto for production web) |
| CSS class prefix | `bdgsownv2-` |
| Framework | Bootstrap 3 + custom CSS |
| Logo URL | `https://ik.imagekit.io/h1pfsvzlsf/bdgrowthsuite/images/logo.png` |
| Favicon URL | `https://ik.imagekit.io/h1pfsvzlsf/bdgrowthsuite/images/favicon.png` |

## 2. Brand Voice & Positioning

- **Identity:** AI-Assisted + Brilliant Directories Expert. Not a pure dev agency. Not a pure SaaS. The intersection.
- **Tagline anchor:** "The only directory team that gets you from 0→1→10→100…$1M"
- **Naming preference:** Use "Brilliant Directories" or "Directory" / "Directory site" in copy. Avoid "BD" abbreviation in customer-facing copy (acceptable in internal docs and meta tags).
- **Voice:** Founder-led, anti-fluff, concrete, oppositional ("not a ticket queue", "not a slideshow"), startup-savvy.
- **Mantra:** *"If something doesn't work for you — that's our responsibility to fix. Adding value is our job. The final call is always yours."*

## 3. Trust & Proof Anchors

- 🏅 Gold Certified Brilliant Directories Partner
- 🤖 Claude / Anthropic Service Partner
- 🌍 500+ Directory Sites · 7+ Countries
- 169+ Verified Reviews (Brilliant Directories marketplace)
- 10+ Years in Directory Ecosystem
- 20+ In-House Developers
- BD CEO endorsement across 3 official webinars

---

## 4. Header Navigation Structure

### Top Utility Strip (above main nav)

```
[LEFT]  🏅 Gold-Certified Brilliant Directories Partner · Trusted by 500+ directories
[RIGHT] About · Contact · Login
```

Thin strip (~32-36px), light gray background, smaller font (12-13px). Contains brand credibility on left + utility links on right.

### Main Navigation

```
[LOGO]   Services▾   Grow with AI▾   Solutions▾   Tools▾   Themes   Blog   [🟢 Zoom Clinics]   [Get Started →]
```

- **Logo:** Clickable to home. No `/home` link in nav.
- **Get Started:** Opens a modal-based intake form (global). Not a separate page.

### Dropdown Contents

**Services ▾**

| Item | Slug | Description |
|---|---|---|
| Setup & Launch | `/setup` | Concierge directory launch (3 tiers inside) |
| Dedicated Developers | `/hire-developer` | Long-term BD developers (3 tiers inside) |
| Custom Projects | `/customization` | One-shot scoped development work |
| Solutions (Done-For-You) | `/solutions` | Pre-defined services we implement |
| Maintenance Plans | `/maintenance` | Ongoing support & optimization |
| Consultation | `/consultation` | Paid hourly with Yakin's team |
| Founder's Track | `/founders-track` | Apply-only premium partnership |

**Grow with AI ▾**

| Item | Slug | Description |
|---|---|---|
| AI Development | `/ai-development` | One-shot AI build projects (chatbots, agents, custom AI) |
| AI for Your Directory | `/ai-for-your-site` | AI embedded into your live site |
| AI Dev Fleet | `/ai-dev-fleet` | Multi-agent AI team product |
| Directory Automation | `/bd-automation` | Follow-ups, lead gen, content AI, member engagement |
| SEO & Growth | `/seo-growth` | Strategy + audits + content + technical SEO |
| Founder's Track | `/founders-track` | Cross-listed; AI-rich plan |

Highlight strip inside dropdown: *"🤖 Claude / Anthropic Service Partner — The only directory team building with AI"*

**Solutions ▾** (8 category hubs)

| Item | Slug |
|---|---|
| SEO & Schema | `/solutions/seo` |
| Lead Generation & Conversion | `/solutions/lead-gen` |
| Member Profile Enhancement | `/solutions/member-profiles` |
| Search & Discovery | `/solutions/search` |
| Page Design & Development | `/solutions/page-design` |
| Content & Engagement | `/solutions/content` |
| Integrations | `/solutions/integrations` |
| Member Management & Automation | `/solutions/member-management` |
| All Solutions (61+) | `/solutions` |

**Tools ▾**

| Item | Slug |
|---|---|
| All Tools & Themes | `/tools` |
| BrilliantChat | `/tools/brilliantchat` |
| Future SaaS tools | TBD |

**Themes** — direct link to `/themes`
**Blog** — direct link to `/blog`
**Zoom Clinics** — pill button (green pulse), direct link to `/zoom-clinics`

---

## 5. Three-Tier Service Pattern

Two service pages use the same 3-tier offering pattern for consistency and predictability:

### Setup & Launch (`/setup`)

| Tier | Tag | Price | Audience |
|---|---|---|---|
| Zoom Clinics | FREE | Free · drop in | Budget-tight, learning, small questions |
| Express Setup | POPULAR | $900 · one-time | Fast technical launch, no strategy |
| Founder Concierge | APPLY ONLY | $3,500 · by application | For million-dollar directory founders. $900 floor (refundable if Yakin can't add value in 30 min) |

### Dedicated Developers (`/hire-developer`)

| Tier | Tag | Price | Audience |
|---|---|---|---|
| Zoom Clinics | FREE | Free · drop in | Quick questions, learning, small fixes |
| Dedicated BD Developer | POPULAR | $X,XXX · /month *(pricing TBD)* | Active growth, ongoing BD-native development |
| AI Dev Fleet | APPLY ONLY | $X,XXX · /month *(pricing TBD)* | Aggressive scaling with multi-agent AI team |

---

## 6. Page List — Complete Sitemap

### Tier 1 — Core Pages (Build First)

**Top-level**
| Slug | Purpose |
|---|---|
| `/` | Homepage (V6 current locked structure) |
| `/about` | Who we are, founder story, team, mission |
| `/contact` | Contact channels, location, form |
| `/login` | Client portal entry |

**Service Hub + Offering Pages**
| Slug | Purpose |
|---|---|
| `/services` | Services hub — all services in one place |
| `/setup` | Setup & Launch (3 tiers: Zoom Clinics, Express, Founder Concierge) |
| `/hire-developer` | Dedicated Developers (3 tiers: Zoom Clinics, BD Dev, AI Dev Fleet) |
| `/customization` | One-shot Custom Projects intake |
| `/maintenance` | Maintenance Plans |
| `/consultation` | Paid consultation with Yakin's team |
| `/founders-track` | Apply-only premium partnership |

**Solutions (8 category hubs + 61 product pages)**
| Slug | Purpose |
|---|---|
| `/solutions` | Solutions hub — overview + category links |
| `/solutions/seo` | SEO & Schema solutions hub |
| `/solutions/lead-gen` | Lead Generation & Conversion solutions hub |
| `/solutions/member-profiles` | Member Profile Enhancement solutions hub |
| `/solutions/search` | Search & Discovery solutions hub |
| `/solutions/page-design` | Page Design & Development solutions hub |
| `/solutions/content` | Content & Engagement solutions hub |
| `/solutions/integrations` | Integrations solutions hub |
| `/solutions/member-management` | Member Management & Automation hub |
| `/solutions/[slug]` × 61 | Individual solution detail pages |

**Grow with AI**
| Slug | Purpose |
|---|---|
| `/grow-with-ai` | AI hub — overview of all AI offerings |
| `/ai-development` | One-shot AI build projects (lead gen for AI custom work) |
| `/ai-for-your-site` | AI embedded in your directory (chatbots, agents, smart search) |
| `/ai-dev-fleet` | Multi-agent AI team product |
| `/bd-automation` | Directory automation suite |
| `/seo-growth` | SEO services hub |

**Tools & Themes (Productized)**
| Slug | Purpose |
|---|---|
| `/tools` | Productized software/widgets hub |
| `/tools/brilliantchat` | BrilliantChat product page |
| `/themes` | All 6 themes |
| `/themes/[slug]` × 6 | Individual theme detail pages |

**Free Help**
| Slug | Purpose |
|---|---|
| `/zoom-clinics` | Free Zoom Clinics — schedule, signup, scope |

**Content & Proof**
| Slug | Purpose |
|---|---|
| `/blog` | Blog index |
| `/blog/[slug]` × ~30-50 | Individual blog posts |
| `/blabs-review` | 169+ verified client reviews |
| `/case-studies` | Detailed client wins with metrics |
| `/webinars` | BD CEO webinars + our webinars |

**Partner Program**
| Slug | Purpose |
|---|---|
| `/partners` | Partner Program hub — 3 tiers overview |
| `/partners/referral` | Referral Partner application |
| `/partners/white-label` | White-Label Partner application |
| `/partners/directory-operator` | Directory Operator Partner application (for BD site owners monetizing their member base) |

**Legal**
| Slug | Purpose |
|---|---|
| `/terms` | Terms of service |
| `/privacy` | Privacy policy |
| `/license/sdcl-v1` | Single Domain-Locked Commercial License |

### Tier 2 — Later (Supporting Pages)

| Slug | Purpose |
|---|---|
| `/help` | Help center |
| `/community` | BD owner community/Slack/forum (if launched) |
| `/yakin-shah` | Optional dedicated founder page (or `/about#story` anchor) |
| `/docs/*` | Markdown docs for LLM crawling (per LLM strategy) |
| `/sitemap.xml` | SEO sitemap |
| `/llms.txt` | Already live — LLM indexing |
| `/llms-full.txt` | Already live — LLM indexing |

### Dropped Pages

| Slug | Reason |
|---|---|
| `/welcome` | Homepage now does this job. Email links direct to homepage with UTM tracking. |
| `/api-docs` | Not an API-first company |
| `/changelog` | Not consumed by directory owners |
| `/press` | Empty press page hurts more than helps |
| `/affiliate` | Replaced by `/partners` program structure |
| `/careers` | Hiring lives on businesslabs.org |
| Visual sitemap | Only `/sitemap.xml` needed for SEO |

---

## 7. Homepage Section Order (Final Lock)

10 sections in this exact order:

| # | Section | Purpose |
|---|---|---|
| 1 | Hero | "0→$1M" hook + AI badges + 3 trust badges |
| 2 | CEO Endorsement | BD CEO's 3-webinar endorsement |
| 3 | Pain Points (6 Cards) | "Sound familiar? We've heard it all." |
| 4 | Client Proof | 16 logos + 11 review screenshots + "169+ reviews" link |
| 5 | Stats Strip | 500+ / 169+ / 10+ / 20+ |
| 6 | Services (Razorpay-Style Stacking) | 6 cards: Setup, Dedicated Devs, AI Dev, Solutions, Tools & Themes, Founder's Track |
| 7 | Path Chooser | "Where are you on your journey?" 3 paths |
| 8 | Team Philosophy | Co-founder-grade team + selection process + mantra |
| 9 | "Made $1M Themselves" | BusinessLabs founder credibility |
| 10 | Final CTA | Book a Call / WhatsApp / Zoom Clinic |
| 11 | FAQ | 10 common questions (SEO + decision support) |
| 12 | Footer | 4 columns + trust badges |

---

## 8. Footer Structure

**Column 1 — Services**
- Setup & Launch
- Dedicated Developers
- Custom Projects
- Solutions (Done-For-You)
- Maintenance Plans
- Consultation
- Founder's Track (Apply)
- Free Zoom Clinics 🟢

**Column 2 — Grow with AI**
- AI Development
- AI for Your Directory
- AI Dev Fleet
- Directory Automation
- SEO & Growth

**Column 3 — Resources**
- All Tools & Themes
- Solutions (61+ done-for-you)
- Directory Themes (6)
- Blog
- Case Studies
- Client Reviews (169+)
- CEO Webinars
- About Us

**Column 4 — Get Started**
- WhatsApp Chat
- Book a Consultation
- Contact Us
- Login
- Partner Program

**Bottom bar:**
- © 2026 BD Growth Suite by BusinessLabs · Terms · Privacy
- Badges: 🏅 Gold Certified · 🤖 Claude / Anthropic Partner · 🌍 500+ Sites · 7+ Countries

---

## 9. Lead Intake Structure

| Layer | Where | Purpose |
|---|---|---|
| Global modal | Header "Get Started" button | General inquiry — visitor not sure which service yet |
| Page-specific inline forms | Each service page (`/setup`, `/hire-developer`, `/customization`, `/ai-development`, etc.) | Higher conversion — fields tailored to that service |
| Apply-only forms | `/founders-track`, `/partners/*` | Gated application with qualification fields |
| Free signup | `/zoom-clinics` | Low-friction registration for free help |

---

## 10. Partner Program — 3 Tiers

| Tier | Slug | Audience |
|---|---|---|
| **Referral Partner** | `/partners/referral` | Any individual (clients, friends, influencers). Commission on first project + ongoing % on dedicated dev MRR. |
| **White-Label Partner** | `/partners/white-label` | Digital agencies, marketing agencies serving directory businesses. Their brand front, our delivery back. |
| **Directory Operator Partner** | `/partners/directory-operator` | BD site owners monetizing their member base. They sell digital services to their listed businesses; we deliver end-to-end. Revenue share. |

---

## 11. SEO & Discovery Pattern (Hub-Spoke)

The site uses a **hub-and-spoke architecture** for SEO and navigation:

- **Hub pages** (e.g., `/solutions/seo`) contain minimal intro copy and link to individual spoke pages
- **Spoke pages** (e.g., `/solutions/schema-for-homepage`) are full SEO-optimized detail pages
- Each hub cross-links to related hubs (e.g., `/solutions/seo` links to `/solutions/page-design`)
- Visitor never hits a dead end

This pattern applies to:
- `/solutions/*` (8 hubs → 61 spokes)
- `/grow-with-ai` (hub → 5 sub-pages)
- `/themes` (hub → 6 theme pages)
- `/partners` (hub → 3 tier pages)

---

## 12. LLM Visibility Strategy (Existing)

Already live:
- `/llms.txt` — LLM index
- `/llms-full.txt` — comprehensive single-file content

Strategy: Every page should be:
1. SEO-optimized for human search (Google)
2. Crawlable and authoritative for LLM training (CommonCrawl)
3. Useful as RAG context (live retrieval by Claude/ChatGPT/Cursor)

Existing 24 blog posts + 61 solutions + planned content all serve dual purpose: human conversion + LLM positioning.

---

## 13. Build Priority (Sprint Order)

### Sprint 1 — Soft Launch Essentials
1. `/` (homepage — V6 ready) ✓
2. `/setup`
3. `/hire-developer`
4. `/about`
5. `/contact`
6. `/zoom-clinics`
7. `/terms`, `/privacy`

### Sprint 2 — Depth
8. `/grow-with-ai`
9. `/solutions` + 8 category hubs
10. `/tools` + `/themes`
11. `/founders-track`
12. `/consultation`
13. `/customization`
14. `/ai-development`
15. `/blog` index + blog template

### Sprint 3 — Proof & Trust
16. `/case-studies`
17. `/blabs-review`
18. `/webinars`
19. `/maintenance`

### Sprint 4 — Sub-pages
20. All 61 `/solutions/[slug]` detail pages
21. All 6 `/themes/[slug]` pages
22. Blog posts (24 existing + new SEO posts)

### Sprint 5 — Partner Program
23. `/partners` hub
24. `/partners/referral`, `/partners/white-label`, `/partners/directory-operator`

### Sprint 6 — Optional / Later
25. `/help`, `/community`, `/docs/*`, `/sitemap.xml`, `/yakin-shah`

---

## 14. Items Parked for Later Discussion

These decisions are noted and will be revisited:

1. **Whether Custom Projects gets its own card in the Services Stacking section on homepage** — currently only listed in Services dropdown
2. **Inline project intake form fields and structure for `/customization` page**
3. **Final pricing for Dedicated BD Developer and AI Dev Fleet tiers** (currently `$X,XXX/mo` placeholders)
4. **Stacking cards CSS technical issue** — to be solved with Yakin's developer when in-person
5. **Final structure for `/grow-with-ai` hub page** — how the 4 modes of AI (build for you / build by you / automate / SEO) lay out visually

---

## 15. Key Naming Conventions (Locked)

- "Directory" / "Directory site" / "Brilliant Directories" — preferred over "BD" in customer copy
- "Solutions" — done-for-you services where humans implement
- "Tools" — productized software/widgets the client installs or subscribes to
- "Themes" — productized design assets
- "Founder's Track" — premium apply-only partnership (was "Growth Plan")
- "Founder Concierge" — premium Setup tier
- "Zoom Clinics" — free live developer help (not renamed; recognized brand language)
- "Express Setup" — middle Setup tier
- "AI Dev Fleet" — multi-agent AI team product
- "BDGS" — internal/short reference; full "BD Growth Suite" in customer copy

---

## 16. Open URLs Already Live (Reference)

- Production site: https://bdgrowthsuite.com
- Live LLM index: https://bdgrowthsuite.com/llms.txt
- Live LLM full: https://bdgrowthsuite.com/llms-full.txt
- 169+ reviews: https://bdgrowthsuite.com/blabs-review
- License: https://bdgrowthsuite.com/license/sdcl-v1
- Tools catalog: https://bdgrowthsuite.com/tools
- Themes catalog: https://bdgrowthsuite.com/themes
- Blog: https://bdgrowthsuite.com/blog

---

**End of document.**

*This document represents the final locked architectural decisions. Any deviation should be flagged and discussed before implementation. Parked items in section 14 are explicitly tracked for future discussion.*
