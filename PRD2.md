# PRD2 — Digital Storytelling Website: The Founder's Journey

## 1. Vision & Purpose

A narrative-driven digital storytelling website that teaches four core entrepreneurship concepts by following a fictional founder, **Alex Chen**, through the journey of building her startup, **Lumio** — an AI-powered research assistant for graduate students.

Each page is a "chapter" combining immersive storytelling with structured educational content. Readers learn by living through Alex's decisions, mistakes, and breakthroughs.

**Primary audience**: Aspiring founders, entrepreneurship students, bootcamp participants, early-stage builders.

**Key differentiator from a simulation**: No scoring or gamification. Pure narrative learning — story scenes, concept cards, frameworks, and reflective exercises woven into a single flowing experience.

---

## 2. Narrative Overview

### Protagonist: Alex Chen
- 26-year-old PhD dropout turned founder
- Background: Cognitive science, frustration with manual research workflows
- Personality: Curious, methodical, often overthinks — relatable to analytical founders
- Voice: First-person journal entries, honest about doubts and learnings

### Startup: Lumio
- AI-powered research assistant that summarizes papers, extracts citations, and builds knowledge graphs for researchers
- B2B SaaS, targeting graduate students and research teams

### Story Arc (4 Chapters)
```
Ch.1: The Problem Hunch      → Problem & Market Validation
Ch.2: Getting Out of the Building → Customer Discovery
Ch.3: The Business Blueprint  → Business Model Basics
Ch.4: Launch Day              → Go-to-Market Strategy
```

---

## 3. User Flow

```
index.html (Story Hub / Landing)
  └── chapter-1.html  — Problem & Market Validation
        └── chapter-2.html  — Customer Discovery
              └── chapter-3.html  — Business Model Basics
                    └── chapter-4.html  — Go-to-Market Strategy
                          └── epilogue section on chapter-4.html (Alex's results)
```

Navigation: persistent top nav + "Continue Reading →" CTAs at chapter bottom.

---

## 4. Page Specifications

### index.html — Story Hub
**Sections**:
1. **Hero**: Full-viewport cinematic intro — headline "Every great startup begins with a story." Subheadline about learning through narrative. CTA: "Begin Alex's Journey →"
2. **Meet Alex**: Character card with illustration placeholder, bio blurb, Lumio description
3. **The 4 Chapters**: Horizontal chapter cards with number, title, teaser line, concept tags
4. **Learning Outcomes**: What readers will understand after completing all chapters
5. **Footer**: Brief attribution

### chapter-1.html — Problem & Market Validation
**Story Beat**: Alex is frustrated with her own research workflow. She has a hunch there's a product here — but is it a real problem or just her quirk?

**Sections**:
1. **Chapter Hero**: Full-width banner, chapter number + title, story teaser quote from Alex's journal
2. **Story Scene 1** — "The Hunch": Narrative prose (300 words) — Alex's frustration in the library, scribbling in her notebook
3. **Concept Block**: Problem Validation — definition, why it matters
4. **Story Scene 2** — "Googling Competitors at 2am": Alex discovers existing tools are clunky. Narrative into competitive analysis
5. **Framework Card**: TAM / SAM / SOM — visual nested circles diagram (pure CSS), Lumio example sizes
6. **Story Scene 3** — "The Smoke Test": Alex builds a landing page over a weekend. What happens?
7. **Concept Block**: Smoke Test / Fake Door Test
8. **Framework Card**: Validation Signals checklist — the 6 signals from the source material
9. **Founder's Exercise**: "Write your own problem hypothesis" — structured template fill-in (HTML form, local only)
10. **Key Takeaways**: 3 bullet callout box
11. **Chapter Nav**: ← Back to Hub | Continue to Chapter 2 →

### chapter-2.html — Customer Discovery
**Story Beat**: Alex has signals — but are they real? She forces herself to talk to 20 strangers. It's uncomfortable. She learns more in 3 interviews than 3 months of desk research.

**Sections**:
1. **Chapter Hero**: Banner, journal quote about fear of talking to people
2. **Story Scene 1** — "Cold DMs": Alex messages 30 PhD students on Twitter. 4 respond. She panics, then prepares.
3. **Concept Block**: Interview Quality — 3 rules, good vs. bad question examples
4. **Story Scene 2** — "Interview #7": Narrative of a breakthrough interview moment
5. **Framework Card**: Problem Interview Structure — 5-step timeline (pure CSS timeline)
6. **Story Scene 3** — "Patterns Emerge": Alex affinity-maps 15 interviews on her kitchen table
7. **Concept Block**: Early Adopter Criteria — 5 criteria with icons
8. **Framework Card**: JTBD Switch Moment — 3 questions in a styled Q&A format
9. **Founder's Exercise**: "Define your early adopter" — checklist with 6 criteria
10. **Key Takeaways**: 3 bullet callout box
11. **Chapter Nav**: ← Chapter 1 | Continue to Chapter 3 →

### chapter-3.html — Business Model Basics
**Story Beat**: Alex has validation. Now she needs to answer: how does this make money? She discovers the Lean Canvas and fills it out on a coffee-stained napkin.

**Sections**:
1. **Chapter Hero**: Banner, journal quote about "the business part"
2. **Story Scene 1** — "The Napkin Canvas": Alex tries to fill out a Lean Canvas. She gets stuck on Revenue Streams.
3. **Concept Block**: Traditional Business Canvas vs. Lean Canvas — comparison table
4. **Framework Card**: Lean Canvas — full 9-block visual layout (pure CSS grid, no image)
5. **Story Scene 2** — "Choosing a Revenue Model": Alex debates SaaS subscription vs. usage-based
6. **Concept Block**: Revenue Model Types — table of 6 models
7. **Framework Card**: Unit Economics — LTV formula, CAC payback, the 3:1 ratio rule with Lumio's numbers
8. **Story Scene 3** — "First Pivot Signal": Alex's churn rate is too high. She almost gives up.
9. **Concept Block**: Pivot vs. Persevere signals
10. **Founder's Exercise**: "Sketch your Lean Canvas" — guided 9-field form
11. **Key Takeaways**: 3 bullet callout box
12. **Chapter Nav**: ← Chapter 2 | Continue to Chapter 4 →

### chapter-4.html — Go-to-Market Strategy
**Story Beat**: The product works. Beta users love it. Now how does Alex tell the world? She picks her GTM motion, writes her first positioning statement, and launches on Product Hunt.

**Sections**:
1. **Chapter Hero**: Banner, journal quote about "the scary part — telling people"
2. **Story Scene 1** — "Picking a Lane": Alex decides between PLG and community-led
3. **Concept Block**: GTM Motion Types — 4 cards (PLG, SLG, MLG, CLG) with best-for criteria
4. **Story Scene 2** — "Who Is Lumio For?": Alex writes her ICP. Realizes "all researchers" is too broad.
5. **Framework Card**: ICP Template — structured table with Lumio's filled example
6. **Story Scene 3** — "The Positioning Statement": Alex writes, rewrites, and finally nails it
7. **Concept Block**: 5-component positioning framework — context, alternatives, differentiators, value, target
8. **Framework Card**: Positioning statement template — filled with Lumio's example
9. **Story Scene 4** — "Launch Week": Product Hunt, Hacker News, the community Slack. What actually drove signups?
10. **Concept Block**: Channel Strategy — evaluation matrix
11. **Founder's Exercise**: "Write your positioning statement" — structured template fill-in form
12. **Epilogue**: Alex's results, 3 months later. Lumio has 400 paying users. Key lessons learned.
13. **Key Takeaways**: 3 bullet callout box
14. **Chapter Nav**: ← Chapter 3 | ↑ Back to Story Hub

---

## 5. Design System

### Color Palette
```css
--color-bg: #FAFAF8           /* warm off-white parchment */
--color-surface: #FFFFFF      /* white cards */
--color-surface-2: #F3F0EB    /* slightly warm grey for alternating sections */
--color-border: #E2DDD6       /* warm border */
--color-primary: #2D6A4F      /* forest green — growth, learning */
--color-primary-light: #52B788 /* lighter green */
--color-accent: #E76F51       /* warm coral — highlight, emphasis */
--color-accent-2: #F4A261     /* amber — secondary accent */
--color-text: #1A1A1A         /* near-black body text */
--color-text-muted: #6B6560   /* warm muted */
--color-story-bg: #1C1C1E     /* dark panels for story scenes */
--color-story-text: #E8E3D9   /* warm cream text on dark */
--chapter-1: #2D6A4F          /* green */
--chapter-2: #2979B5          /* blue */
--chapter-3: #7B4FA6          /* purple */
--chapter-4: #C84B31          /* red-orange */
```

### Typography
- **Display/Story headings**: `'Playfair Display'` — serif, editorial feel
- **Body text**: `'Inter'` — clean, readable
- **Chapter numbers**: `'JetBrains Mono'` — technical, distinctive
- All via Google Fonts CDN

### Section Types & Visual Language

| Section Type | Visual Style |
|---|---|
| **Story Scene** | Dark background (#1C1C1E), serif quote/prose, decorative quote mark, warm cream text, max-width 700px |
| **Concept Block** | White card, left accent border in chapter color, icon + title + body |
| **Framework Card** | Light surface-2, full-width diagram, labeled sections |
| **Founder's Exercise** | Warm surface-2, pencil icon header, form fields or checklist |
| **Key Takeaways** | Chapter-color tinted card, numbered 1-2-3 list |
| **Chapter Hero** | Full-width, chapter color bg, white text, pattern overlay |

### CSS Class Naming

```
Layout:       .site-header, .nav-logo, .nav-links, .nav-link, .page-hero
Story:        .story-scene, .story-prose, .story-quote, .story-attribution
Concepts:     .concept-block, .concept-icon, .concept-title, .concept-body
Frameworks:   .framework-card, .framework-label, .framework-diagram
              .canvas-grid, .canvas-block, .canvas-block-title
              .tam-diagram, .tam-circle, .tam-label
              .timeline, .timeline-step, .timeline-dot, .timeline-content
              .four-grid, .motion-card, .motion-tag
Exercises:    .exercise-box, .exercise-header, .exercise-form
              .hypothesis-template, .template-field
              .checklist, .checklist-item
Callouts:     .takeaways-box, .takeaway-item
Navigation:   .chapter-nav, .chapter-prev, .chapter-next
Progress:     .reading-progress (top bar showing scroll progress)
Chapters:     .chapter-1-theme, .chapter-2-theme, etc. (applied to body)
Cards:        .card, .card-sm, .chapter-card
Tables:       .concept-table
Utilities:    .container (max-width 1100px, margin auto, padding 0 24px)
              .section (padding 80px 0)
              .section-sm (padding 48px 0)
              .prose (max-width 680px, margin auto)
              .text-center, .text-muted
              .badge, .badge-green, .badge-blue, .badge-purple, .badge-orange
              .grid-2, .grid-3, .grid-4
              .divider
```

---

## 6. File Structure

```
startup-sim/
  PRD2.md                 ← this document
  index.html              ← Story Hub landing page
  chapter-1.html          ← Problem & Market Validation
  chapter-2.html          ← Customer Discovery
  chapter-3.html          ← Business Model Basics
  chapter-4.html          ← Go-to-Market Strategy
  css/
    main.css              ← full design system + all components
    animations.css        ← transitions, reading progress, entrance effects
  js/
    app.js                ← reading progress bar, smooth scroll, nav active state
  assets/                 ← (empty — all visuals are CSS-only)
```

---

## 7. Technical Architecture

- **Pure HTML5 + CSS3 + Vanilla JS** — zero dependencies, opens directly in browser
- Google Fonts via CDN (Playfair Display, Inter, JetBrains Mono)
- No build tools required
- Forms are local-only (no submission, just UX practice)
- Reading progress: JS scroll listener updates a `<div class="reading-progress">` at top of page
- Smooth scroll between sections via CSS `scroll-behavior: smooth`

---

## 8. Content Source Files

| Chapter | Source Material |
|---|---|
| Chapter 1 | `problem-market-validation.md` |
| Chapter 2 | `customer-discovery.md` |
| Chapter 3 | `business-model-basics.md` |
| Chapter 4 | `go-to-market.md` |

Source files are at: `/Users/mac/Documents/Documents-Pro/ContributionRepos/Entrepreneurship Basics/`

---

## 9. Agent Workstream Assignments

| Agent | Files | Notes |
|---|---|---|
| **CSS Agent** | `css/main.css`, `css/animations.css` | Full design system per Section 5 |
| **Index + Ch1 Agent** | `index.html`, `chapter-1.html` | Hub landing + Problem Validation story |
| **Ch2 Agent** | `chapter-2.html` | Customer Discovery story |
| **Ch3 Agent** | `chapter-3.html` | Business Model story |
| **Ch4 + JS Agent** | `chapter-4.html`, `js/app.js` | GTM story + reading progress JS |
| **Lead QA Agent** | Reviews + fixes all 7 files | Cross-links, consistency, polish |

---

## 10. Quality Checklist (Lead QA Agent)

- [ ] All chapter navigation links work (index→ch1→ch2→ch3→ch4→index)
- [ ] Reading progress bar animates on scroll on all chapter pages
- [ ] All CSS classes used in HTML exist in main.css
- [ ] Story scenes render dark with warm text
- [ ] Framework diagrams are readable (CSS-only, no images needed)
- [ ] Lean Canvas grid renders correctly
- [ ] TAM/SAM/SOM nested circles render correctly (pure CSS)
- [ ] Timeline component renders correctly
- [ ] Founder's Exercise forms are styled (non-submitting)
- [ ] Chapter hero banners use correct chapter color
- [ ] Responsive at 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] Google Fonts load from CDN
- [ ] No broken internal links
- [ ] Epilogue section present at end of chapter-4.html
