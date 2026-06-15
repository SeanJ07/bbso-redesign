# BBSO Website Redesign

A modern redesign concept for the [Big Bear Solar Observatory](https://www.bbso.njit.edu) website, built as a portfolio case study.

## The Problem

The current BBSO website uses table-based layouts, nested iframes, zero responsive design, and no semantic HTML. Tour information is buried three clicks deep. On mobile, the site is nearly unusable.

## The Solution

**Same information, better experience.** This redesign preserves every piece of existing content while modernizing the layout, navigation, and visual design to match the standard set by NASA, JPL, and NOAA.

### Key Improvements

- **Responsive layout** — Works on mobile, tablet, and desktop
- **Accessible navigation** — Skip links, ARIA labels, semantic HTML, keyboard navigation
- **Tour information front-and-center** — One click from the homepage, not three
- **Dark space-themed design** — Reflects the observatory's identity with warm solar accents
- **Clean information architecture** — 7 sections condensed into 4 clear pages
- **No iframes, no tables** — Modern CSS Grid and Flexbox throughout

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `index.html` | Hero, tours CTA, research preview, news, webcam |
| Tours | `tours.html` | Dates, booking info, accessibility, virtual tours |
| About | `about.html` | History, key facts, people, partners, contact |
| Research | `research.html` | Research areas, GST instrumentation, publications, data access |

## Tech Stack

- **HTML5** — Semantic markup, ARIA labels, skip links
- **CSS3** — Custom properties, Grid, Flexbox, responsive breakpoints
- **Vanilla JavaScript** — Mobile nav toggle only
- **No frameworks, no build step, no dependencies**

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0e1a` | Deep space navy |
| Surface | `#111827` | Cards and sections |
| Accent | `#f59e0b` | Solar amber |
| Gold | `#d4a06a` | Secondary accent |
| Text | `#f0f0f0` | Body copy |
| Muted | `#9ca3af` | Secondary text |
| Font | Inter | Headings and body |

## Running Locally

Just open `index.html` in a browser. No server, no build, no install needed.

```bash
# Or serve locally:
python3 -m http.server 8000
```

## Deployment

Deployed via GitHub Pages from the `main` branch.

## Before / After

### Before
- Table-based layout
- Nested iframes for content
- Zero mobile responsiveness
- 7-item navigation with 9-item dropdown
- Tours buried under About > BBSO Public Tours
- No skip links, no ARIA labels
- Fixed-width, broken on mobile

### After
- CSS Grid and Flexbox layout
- Semantic HTML throughout
- Full mobile/tablet/desktop responsiveness
- 5-item flat navigation with mobile hamburger
- Tours accessible from homepage and nav
- Skip links, ARIA labels, keyboard navigation
- Dark theme with solar amber accents
- Hero section with live solar imagery

## Credits

- Solar imagery: [NASA/SDO](https://sdo.gsfc.nasa.gov/) (public domain)
- Original content: [Big Bear Solar Observatory / NJIT](https://www.bbso.njit.edu)
- Redesign: Sean Jenkins — [seanj07.github.io](https://seanj07.github.io)

## License

This is a portfolio project. The redesign concept and code are by Sean Jenkins. All original BBSO content belongs to NJIT. Solar imagery is public domain via NASA/SDO.