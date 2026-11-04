# RASTER CSS 🇨🇭
> **The Refined Neo-Swiss Editorial Design System for Humans & AI Agents.**
> Whisper-quiet monochrome, calm sentence-case Grotesque typography, 1px hairline specification rows, and zero generic AI slop.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-111111.svg)](https://arron21.github.io/raster-css/)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](#license)
[![Style: Neo-Swiss Editorial](https://img.shields.io/badge/Style-Neo--Swiss%20Editorial-767676.svg)](#design-philosophy)
[![AI Compatibility](https://img.shields.io/badge/AI%20Friendly-LLMS.txt%20%7C%20AI.md-111111.svg)](AI.md)

### 🌐 [View Live Interactive Demo & Showcase → https://arron21.github.io/raster-css/](https://arron21.github.io/raster-css/)

---

## Why Raster CSS?

Most AI-generated web interfaces (from ChatGPT, v0, Bolt, Lovable, Cursor) converge on the same visual clichés:
- Dark navy/slate glowing gradient wallpaper (`#0B0F19` with purple mesh)
- Over-rounded jelly cards (`rounded-2xl` to `rounded-3xl` / 16px–24px)
- Glowing neon drop-shadows and translucent glassmorphism blurs
- Redundant outline icons in rounded pastel boxes in every stat corner

**Raster CSS breaks this cycle.** Inspired by contemporary Swiss editorial minimalism (*Motus*, *Dieter Rams*, *Vitsoe*, *International Typographic Style*):
- ⬜ **Whisper-Quiet Monochrome Palette:** Pure gallery white (`#FFFFFF`), soft studio gray media/card wells (`#F4F4F4`), and deep architectural ink (`#111111`) in Light Mode; matte obsidian (`#0A0A0A`) and dark studio wells (`#151515`) in Dark Mode.
- 🔠 **Calm Sentence-Case Grotesque Typography:** Regular-weight (`400`) display headings with tight `-0.03em` tracking paired with `11px` muted sentence-case specification keys (`#767676`)—never shouty all-caps brutalism.
- 📏 **Hairline Key-Value Specification Rows (`.raster-spec-row`):** Full-width `1px solid` horizontal hairlines separating structured key-value rows (`Size`, `Color`, `Description`, `Fit & care`, `Velocity`).
- 📐 **Sticky 4:8 Asymmetric Splits & Tight 8px Mosaics:** Pin specifications and controls in a 4-column sticky left pane (`.raster-split-sticky`) while an 8-column media/content mosaic (`.raster-mosaic`) scrolls beside it.
- 📱 **Mobile-First & Touch Ergonomics:** 16px mobile inputs (prevents iOS Safari auto-zoom), responsive grid tiers, and collapsible navigation.
- 🤖 **Engineered for AI Coding Agents:** Pre-baked [`AI.md`](AI.md) and [`llms.txt`](llms.txt) codex files with strict instructions to never output self-referential "Raster CSS" branding in your project's HTML.

---

## 🚀 Quick Start

### 1. Zero Build (Plain HTML)
```html
<link rel="stylesheet" href="https://arron21.github.io/raster-css/raster.css">
```

### 2. Modern Frameworks (React, Vue, Svelte, Angular, Astro)
```ts
import 'raster-css/dist/raster.css';
```

---

## 🤖 Pointing an AI Agent to this Repository

When you use Claude, ChatGPT, Cursor, Copilot, or Antigravity to build projects, give it this instruction:

> *"Use the UI/UX framework from https://github.com/arron21/raster-css (read `AI.md` and `llms.txt`). Follow its Refined Neo-Swiss Editorial design system: pure white/obsidian canvas, `#F4F4F4`/`#151515` studio gray wells, 0px corners, whisper-thin 1px hairline specification rows (`.raster-spec-row`), sticky 4:8 split layouts (`.raster-split-sticky`), and calm sentence-case Grotesque typography (`font-weight: 400`). Never mention 'Raster CSS' in the visible HTML."*

---

## 🧩 Core Architectural Patterns

### 1. Hairline Key-Value Specification List (`.raster-spec-list`)
```html
<div class="raster-spec-list">
  <div class="raster-spec-row">
    <span class="raster-spec-key">Description</span>
    <div class="raster-spec-val">
      A clean, versatile layout designed for movement and everyday clarity.
    </div>
  </div>
  <div class="raster-spec-row">
    <span class="raster-spec-key">Fit &amp; care</span>
    <div class="raster-spec-val">
      <div>Regular athletic fit</div>
      <div class="raster-spec-line">Model is 186 cm wearing size M</div>
    </div>
  </div>
</div>
```

### 2. Borderless Studio Surface Card (`.raster-surface-card`)
```html
<div class="raster-grid-4">
  <a href="#" class="raster-surface-card">
    <div class="raster-media-well">
      <span class="raster-surface-badge">New</span>
      <img src="..." alt="..." />
    </div>
    <div class="raster-surface-card-meta">
      <span class="raster-surface-card-title">AeroDry Training Shorts</span>
      <span class="raster-surface-card-price">110€</span>
    </div>
  </a>
</div>
```

---

## 🌓 Light & Dark Mode
Switch between gallery white (`light`) and matte obsidian (`dark`) via the `data-theme` attribute:
```html
<html data-theme="light">
<html data-theme="dark">
```

---

## 📄 License
MIT © Raster UI Core Team.
