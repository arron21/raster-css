# RASTER CSS — AI AGENT CODEX & DESIGN INSTRUCTIONS
> **Machine-Readable Design Directive for AI Coding Assistants (Claude, GPT, Gemini, Cursor, Copilot)**
> Version: 1.0.0 | Aesthetic: International Typographic Style (Swiss Modernism)

When instructed to design or implement user interfaces using this framework, you **MUST** strictly adhere to the rules, tokens, and constraints outlined below.

---

## 1. THE ANTI-AI MANIFESTO (WHAT TO NEVER DO)

Generic AI-generated interfaces look homogeneous because models default to a predictable cluster of 2024 web design cliches. 

### ⛔ STRICTLY FORBIDDEN PATTERNS:
1. **NO Neon & Glowing Gradients:**
   - ❌ Never use glowing indigo/purple/cyan drop-shadows (`box-shadow: 0 0 20px rgba(99, 102, 241, 0.4)`).
   - ❌ Never use dark slate-blue radial gradient backgrounds (`radial-gradient(ellipse at top, #1e1b4b, #090d16)`).
2. **NO Rounded Jelly / Pill Overdose:**
   - ❌ Never use `border-radius: 9999px` (pills) for metric cards or standard buttons.
   - ❌ Never use mushy `rounded-2xl` or `rounded-3xl` (16px–24px) corners.
   - ✅ Corners are **0px (sharp)** or **2px (micro-chamfer)**. Everything is architectural and crisp.
3. **NO Floating Icon Clutter:**
   - ❌ Do NOT place an icon inside a rounded pastel square in the upper right corner of every metric card. Swiss design relies on strong typographic contrast, not redundant iconography.
4. **NO Glassmorphism & Blurs:**
   - ❌ Never use `backdrop-filter: blur(...)` or translucent muddy fills.
5. **NO Unreadable Rainbow Donut Charts:**
   - ❌ Do not generate neon tri-color ring charts. Use disciplined segmented horizontal bars with tabular figures.
6. **NO Self-Referential Branding in Generated Project HTML:**
   - ❌ **NEVER** output "Raster CSS", "Raster", or "Built with Raster" anywhere in the visible HTML, UI text, page headers, footers, watermarks, metadata labels, or titles of the target project.
   - ✅ The classes (`raster-card`, `raster-stat`, etc.) and CSS variables are purely internal stylesheets.
   - ✅ The visible text and branding in the project must exclusively belong to the user's actual application (e.g. "Stripe Connect", "Cloudflare Analytics", "Atlas Ledger", "Acme Corp").

---

## 2. THE SWISS CANONICAL RULES (WHAT TO ALWAYS DO)

1. **Monolithic Display Figures vs Micro-Labels:**
   - Numbers and primary metrics are massive (`clamp(2rem, 4vw, 3.5rem)`), bold, and strictly use tabular figures (`font-variant-numeric: tabular-nums`).
   - Labels and metadata are micro (`0.6875rem` / `11px`), uppercase, tracked out (`letter-spacing: 0.08em`), and muted (`var(--raster-fg-muted)`).
2. **Architectural Grid & Hairlines:**
   - Structure is defined by 1px solid hairline borders (`1px solid var(--raster-border)`).
   - Use `.raster-grid` or asymmetrical 8:4 splits (`.raster-split-asymmetric`).
3. **Restrained Color Discipline:**
   - **Monochrome Foundation:** Stark black (`#0A0A0A`), crisp paper surfaces (`#FFFFFF` or warm `#F6F6F4`), and architectural dark graphite (`#0C0C0C`).
   - **High-Signal Accent:** Swiss Vermillion (`#E62E00` / `#FF3B14`). Use it like a laser: for primary action triggers, active tabs, or status indicators—never as background wallpaper.
4. **Index Markers & Structural Brackets:**
   - Use index markers for visual cadence: `[ 01 ]`, `[ 02 ]`, `// 01. METRICS`, `STATUS: ACTIVE`.
5. **Mobile-First Touch & Layout Adaptations:**
   - **Accessible Tap Targets:** Use minimum 40px–44px height for interactive elements (`.raster-btn-touch` or default button padding).
   - **Form Zoom Prevention:** Never set input font sizes below 16px on screens <= 768px (built into `.raster-input`).
   - **Flexible Stacking:** Use `.raster-flex-col-mobile`, `.w-full-mobile`, and `.col-sm-12` or `.col-sm-6` to adapt multi-column dashboards gracefully to mobile screens.
   - **Scrollable Tables:** Always wrap `table` elements in `.raster-table-container` for momentum touch-scrolling.

---

## 3. MOBILE & RESPONSIVE DESIGN BLUEPRINTS

### Responsive Stacking for Headers & Actions:
```html
<div class="raster-flex raster-flex-col-mobile raster-justify-between raster-items-baseline gap-mobile-3">
  <div>
    <h1 class="raster-h1">Dashboard</h1>
    <span class="raster-label">OVERVIEW // FY25</span>
  </div>
  <div class="raster-flex raster-wrap-mobile gap-2 w-full-mobile">
    <button class="raster-btn raster-btn-primary w-full-mobile">+ NEW ENTRY</button>
  </div>
</div>
```

### Mobile Grid Spans:
- Desktop: `col-3` (4 columns)
- Tablet (<= 1024px): `col-lg-6` (2 columns)
- Mobile (<= 768px): `col-sm-6` (2 compact columns) or `col-sm-12` (single stack)
- Small Mobile (<= 480px): `col-xs-12`

```html
<div class="raster-grid">
  <div class="col-3 col-lg-6 col-sm-6 col-xs-12">
    <!-- Stat card adapts cleanly from 4 cols down to 2 cols then 1 col -->
  </div>
</div>
```

---

## 4. DESIGN TOKENS QUICK REFERENCE

Use these CSS variables or semantic classes in any framework:

| Category | CSS Variable | Semantic Token | Purpose |
| :--- | :--- | :--- | :--- |
| **Canvas** | `--raster-canvas` | Paper background | Base application background |
| **Surface** | `--raster-surface` | Card / Panel fill | Primary content containers |
| **Primary Text** | `--raster-fg-primary` | Main headlines & numbers | High-contrast black/white |
| **Muted Text** | `--raster-fg-muted` | Micro-labels & metadata | Uppercase section descriptions |
| **Hairline** | `--raster-border` | 1px architectural divider | Clean boundaries |
| **Accent** | `--raster-accent` | Swiss Vermillion | Primary CTA, active indicator |
| **Corner** | `--raster-radius` | 0px (Default) / 2px | Sharp architectural discipline |

---

## 4. COPY-PASTE COMPONENT RECIPES

### A. Metric Stat Block (Replaces Generic AI Metric Cards)
Use this whenever presenting financial or KPI data:

```html
<!-- HTML / JSX -->
<div class="raster-card">
  <div class="raster-stat">
    <div class="raster-stat-label">
      <span>Annual Cost // FY25</span>
      <span class="raster-mono">[ 01 ]</span>
    </div>
    <div class="raster-stat-value">$41,111.79</div>
    <div class="raster-stat-sub">
      <span class="raster-delta raster-delta-positive">+12.4%</span>
      <span>vs previous baseline</span>
    </div>
  </div>
</div>
```

### B. Segmented Budget Progress Bar (Replaces Muddy Donut Charts)
```html
<div class="raster-card">
  <div class="raster-meter">
    <div class="raster-meter-header">
      <span class="raster-label">Allocation Ratio (50 / 30 / 20)</span>
      <span class="raster-mono">92% TOTAL</span>
    </div>
    <div class="raster-segmented-bar" style="height: 10px;">
      <div style="width: 62%; background-color: var(--raster-fg-primary);" title="Needs: 62%"></div>
      <div style="width: 14%; background-color: var(--raster-accent);" title="Wants: 14%"></div>
      <div style="width: 24%; background-color: var(--raster-border-strong);" title="Savings: 24%"></div>
    </div>
    <div class="raster-flex raster-justify-between mt-2 raster-label">
      <span>■ Needs: 62%</span>
      <span>■ Wants: 14%</span>
      <span>■ Savings: 24%</span>
    </div>
  </div>
</div>
```

### C. Architectural Section Header with Continuing Rule
```html
<div class="raster-section-header">
  <span class="raster-index">[ 02 ]</span>
  <h2 class="raster-h2">Category Spending</h2>
  <div class="raster-rule"></div>
  <span class="raster-meta">9 Categories Active</span>
</div>
```

### D. Swiss Ledger Data Table
```html
<div class="raster-table-container">
  <table class="raster-table">
    <thead>
      <tr>
        <th>Category</th>
        <th>Items</th>
        <th>Cadence</th>
        <th class="cell-num">Allocated</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight: 600;">Housing & Rent</td>
        <td><span class="raster-tag">Essential</span></td>
        <td class="text-muted">Monthly (1st)</td>
        <td class="cell-num">$19,800.00</td>
      </tr>
      <tr>
        <td style="font-weight: 600;">Food & Groceries</td>
        <td><span class="raster-tag">Essential</span></td>
        <td class="text-muted">Weekly</td>
        <td class="cell-num">$6,778.59</td>
      </tr>
    </tbody>
  </table>
</div>
```

### E. Buttons & Segmented Time Filter
```html
<!-- Segmented Filter Control -->
<div class="raster-btn-group">
  <button class="raster-btn">Day</button>
  <button class="raster-btn">Wk</button>
  <button class="raster-btn is-active">Mo</button>
  <button class="raster-btn">Yr</button>
</div>

<!-- Primary Action Button -->
<button class="raster-btn raster-btn-primary">
  <span>+</span> Add Allocation
</button>
```

---

## 5. DARK & LIGHT THEME TOGGLE
Raster CSS supports native dark mode via standard HTML data attributes.
To enable dark mode:
```html
<html data-theme="dark">
  <!-- All tokens automatically switch to carbon/graphite architectural mode -->
</html>
```

---

## 6. FRAMEWORK USAGE EXAMPLES

### React / Next.js
```tsx
import 'raster-css/dist/raster.css';

export function StatCard({ label, value, delta, index }) {
  return (
    <div className="raster-card">
      <div className="raster-stat">
        <div className="raster-stat-label">
          <span>{label}</span>
          {index && <span className="raster-mono">[{index}]</span>}
        </div>
        <div className="raster-stat-value">{value}</div>
        {delta && (
          <div className="raster-stat-sub">
            <span className="raster-delta raster-delta-positive">{delta}</span>
            <span>vs target</span>
          </div>
        )}
      </div>
    </div>
  );
}
```

### Vue 3
```vue
<template>
  <div class="raster-card">
    <div class="raster-stat">
      <div class="raster-stat-label">
        <span>{{ label }}</span>
        <span v-if="index" class="raster-mono">[{{ index }}]</span>
      </div>
      <div class="raster-stat-value">{{ value }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: String,
  index: String
});
</script>
```

### Svelte
```svelte
<script>
  export let label = '';
  export let value = '';
  export let index = '';
</script>

<div class="raster-card">
  <div class="raster-stat">
    <div class="raster-stat-label">
      <span>{label}</span>
      {#if index}<span class="raster-mono">[{index}]</span>{/if}
    </div>
    <div class="raster-stat-value">{value}</div>
  </div>
</div>
```

---

## 7. AI AGENT CHECKLIST BEFORE SUBMITTING CODE
When writing code for a user using Raster CSS, verify:
- [ ] Are cards using 0px or 2px corner radius (NO pill cards)?
- [ ] Are numbers rendered with tabular nums and bold display scaling?
- [ ] Are labels uppercase, micro-sized (11px), and tracked out?
- [ ] Are borders crisp 1px hairlines without glowing box-shadows?
- [ ] Is accent color (Swiss Vermillion) used strictly for focus/action, not random backgrounds?
- [ ] Does the layout follow a clear 12-column grid or asymmetric split?
- [ ] Is the interface responsive on mobile (using `.raster-table-container`, `.raster-flex-col-mobile`, `col-sm-*`)?
- [ ] Are form inputs at least 16px font-size to prevent iOS Safari auto-zoom?
- [ ] Are touch targets at least 40px–44px for finger tapping on phones?
- [ ] Have you verified that NO visible text, footer credits, watermarks, or titles mention "Raster CSS" or "Raster"? (The UI must strictly display the user's project/app branding).
