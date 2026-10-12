# RASTER CSS 🇨🇭
> **The International Typographic Design System for Humans & AI Agents.**
> Distinct, authoritative Swiss typography. Zero generic AI slop.

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](#license)
[![Style: Swiss Modernism](https://img.shields.io/badge/Style-Swiss%20Modernism-E62E00.svg)](#design-philosophy)
[![AI Compatibility](https://img.shields.io/badge/AI%20Friendly-LLMS.txt%20%7C%20AI.md-0044FF.svg)](AI.md)

---

## Why Raster CSS?

Most AI-generated web interfaces (from ChatGPT, v0, Bolt, Lovable, Cursor) converge on the same visual clichés:
- Dark navy/slate glowing gradient wallpaper (`#0B0F19` with purple mesh)
- Over-rounded jelly cards (`rounded-2xl` to `rounded-3xl` / 16px–24px)
- Glowing neon drop-shadows and translucent glassmorphism blurs
- Redundant outline icons in rounded pastel boxes in every stat corner
- Low-data-ink rainbow donut charts

**Raster CSS breaks this cycle.** It is built strictly on **Swiss Design (International Typographic Style)** and Josef Müller-Brockmann's modular grid discipline:
- 📐 **Rigid Architectural Grids:** 12-column modular rhythm with razor-sharp 1px hairlines.
- 🔠 **Monolithic Typographic Hierarchy:** Huge tabular display numerals contrasted against tracked-out uppercase micro-labels (`11px`, `letter-spacing: 0.08em`).
- ⬛ **Disciplined Geometry:** 0px sharp corners or 2px micro-chamfers. Zero mushy jelly pills.
- 🔴 **High-Signal Color Restraint:** Stark paper canvas and deep architectural carbon, accented with precision Swiss Vermillion (`#E62E00` / `#FF3B14`).
- 🤖 **Engineered for AI Coding Agents:** Pre-baked [`AI.md`](AI.md) and [`llms.txt`](llms.txt) codex files so an AI agent pointed at this repository immediately knows exactly how to build world-class, distinctive UI.

---

## 📸 The Rebuild: Generic AI Slop vs. Swiss Precision

We directly redesigned the common AI budgeting app (*"What The Cost"*) using Raster CSS:

| Generic AI Dashboard Cliché | Raster CSS (Swiss Modernism) |
| :--- | :--- |
| Muddy glowing purple/cyan shadows | Crisp 1px architectural hairline dividers |
| 16px–24px rounded corners | 0px sharp architectural borders |
| Tiny icon inside rounded box in corner | Monolithic tabular numerals (`$41,111.79`) with tracked micro-labels |
| Unreadable 3-color circular donut rings | High-density segmented proportional meters & ledger tables |
| Indistinguishable medium-weight fonts | Severe contrast between display headers and uppercase tags |

---

## 🚀 Quick Start

### 1. Zero Build (Plain HTML)
Download or link `dist/raster.css`:
```html
<link rel="stylesheet" href="https://your-domain.com/dist/raster.css">
<!-- or local path -->
<link rel="stylesheet" href="./dist/raster.css">
```

### 2. Modern Frameworks (React, Vue, Svelte, Angular, Astro)
```bash
npm install raster-css
```

In your main entry file (`main.tsx`, `index.js`, or `App.vue`):
```ts
import 'raster-css/dist/raster.css';
```

---

## 🤖 Pointing an AI Agent to this Repository

When you use Claude, ChatGPT, Cursor, Copilot, or Antigravity to build projects, you can direct the AI to this repository:

> *"Build a customer analytics dashboard using the **Raster CSS** design system. Read `AI.md` and `llms.txt` in https://github.com/your-username/raster-css and follow the strict Swiss International Typographic Style rules: 0px corners, 1px hairlines, tabular display figures, micro-labels, and Swiss Vermillion accents. Do NOT use rounded pills or glowing shadows."*

### System Prompt Snippet (for Cursor `.cursorrules` or Claude Projects)
Copy the pre-made prompt from [`AGENT_PROMPT.md`](AGENT_PROMPT.md):
```markdown
You are a frontend engineer and UI designer adhering strictly to the **RASTER CSS (Swiss International Typographic Style)** design system.

CRITICAL DESIGN RULES:
1. DO NOT use generic AI aesthetic tropes: NO neon gradients, NO purple/indigo glowing drop-shadows, NO glassmorphism blurs, and NO 9999px pills or mushy 16px-24px rounded corners.
2. Geometry: All containers, cards, and buttons use 0px sharp corners or 2px micro-chamfers.
3. Hierarchy: Contrast massive tabular display numbers against crisp, tracked-out uppercase micro-labels.
4. Structure: Use 1px architectural hairline borders (1px solid var(--raster-border)) and a 12-column grid or asymmetric 8:4 splits.
5. Accent: Use Swiss Vermillion (#E62E00 / #FF3B14) only as a high-signal indicator for primary actions or active states.
6. Indices: Use architectural index markers (e.g., [ 01 ], [ 02 ], // SECTION NAME).
```

---

## 🧩 Component Blueprints

### Metric KPI Block
```html
<div class="raster-card">
  <div class="raster-stat">
    <div class="raster-stat-label">
      <span>ANNUAL COST // FY25</span>
      <span class="raster-mono">[ 01 ]</span>
    </div>
    <div class="raster-stat-value">$41,111.79</div>
    <div class="raster-stat-sub">
      <span class="raster-delta raster-delta-positive">+12.4%</span>
      <span>vs baseline</span>
    </div>
  </div>
</div>
```

### Segmented Allocation Meter
```html
<div class="raster-meter">
  <div class="raster-meter-header">
    <span class="raster-label">BUDGET ALLOCATION (50 / 30 / 20)</span>
    <span class="raster-mono">92% TOTAL</span>
  </div>
  <div class="raster-segmented-bar">
    <div style="width: 62%; background-color: var(--raster-fg-primary);"></div>
    <div style="width: 14%; background-color: var(--raster-accent);"></div>
    <div style="width: 24%; background-color: var(--raster-signal-emerald);"></div>
  </div>
</div>
```

### Architectural Section Header
```html
<div class="raster-section-header">
  <span class="raster-index">[ 02 ]</span>
  <h2 class="raster-h2">Category Spending</h2>
  <div class="raster-rule"></div>
  <span class="raster-meta">9 Active Categories</span>
</div>
```

---

## 🌓 Dark Mode & Light Mode

Raster CSS comes with native Light and Dark modes. Unlike AI defaults that turn everything into purple/indigo mush, Raster's dark mode is **deep architectural carbon (`#0C0C0C`)** with crisp high-contrast hairline borders.

Switch themes simply by setting the `data-theme` attribute on the `<html>` or container element:

```html
<!-- Light Mode (Paper Editorial) -->
<html data-theme="light">

<!-- Dark Mode (Architectural Carbon) -->
<html data-theme="dark">
```

---

## 📁 Repository Structure

```
├── AI.md                         # The definitive AI Agent Codex (Dos, Don'ts, Blueprints)
├── llms.txt                      # Web standard LLM scraping index
├── AGENT_PROMPT.md               # Quick copy-paste system prompt for Cursor/Claude
├── dist/
│   └── raster.css                # Production single-file bundle
├── src/
│   ├── css/
│   │   ├── tokens.css            # CSS variables for colors, typography, hairlines
│   │   ├── reset.css             # Architectural modern reset
│   │   ├── typography.css        # Display scales, micro-labels, tabular nums
│   │   ├── grid.css              # 12-column Müller-Brockmann grid & splits
│   │   ├── components.css        # Cards, stats, buttons, meters, ledgers
│   │   └── utilities.css         # Minimal spacing and alignment helpers
│   └── components/               # Framework implementations
│       ├── react/RasterComponents.tsx
│       ├── vue/RasterComponents.vue
│       └── svelte/RasterComponents.svelte
└── docs/                         # Interactive documentation & live demo showcase
    ├── index.html                # Live showcase & dashboard transformation demo
    └── app.js                    # Live theme toggle & codex export
```

---

## 📄 License
MIT © Raster UI Core Team. Designed for humans and AI agents.
