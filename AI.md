# RASTER CSS — AI AGENT CODEX & DESIGN INSTRUCTIONS
> **Machine-Readable Design Directive for AI Coding Assistants (Claude, GPT, Gemini, Cursor, Copilot)**
> Version: 2.0.0 | Aesthetic: Refined Neo-Swiss Editorial (Quiet Modernism / Motus / Dieter Rams)

When instructed to design or implement user interfaces using this framework, you **MUST** strictly adhere to the rules, tokens, and component patterns outlined below.

---

## 1. THE ANTI-AI MANIFESTO (WHAT TO NEVER DO)

Generic AI-generated interfaces look homogeneous because models default to a predictable cluster of loud web design clichés.

### ⛔ STRICTLY FORBIDDEN PATTERNS:
1. **NO Neon & Glowing Gradients:**
   - ❌ Never use glowing indigo/purple/cyan drop-shadows (`box-shadow: 0 0 20px rgba(99, 102, 241, 0.4)`).
   - ❌ Never use dark slate-blue radial gradient backgrounds.
2. **NO Rounded Jelly / Pill Overdose:**
   - ❌ Never use `border-radius: 9999px` (pills) or `rounded-2xl` / `rounded-3xl` (16px–24px) corners.
   - ✅ All surfaces, buttons, wells, and inputs have **0px sharp architectural corners**.
3. **NO Heavy Brutalist Borders or Loud Shouty Caps:**
   - ❌ Do NOT use thick `2px`–`4px` black borders, offset brutalist drop shadows, or shouty bold uppercase headers everywhere.
   - ✅ Use **whisper-thin 1px hairlines** (`1px solid var(--raster-border)`) and **calm, sentence-case Grotesque typography** (`font-weight: 400` and `500`).
4. **NO Floating Icon Clutter:**
   - ❌ Do NOT place icons inside rounded pastel boxes in the corners of metric cards.
5. **NO Self-Referential Branding in Generated Project HTML:**
   - ❌ **NEVER** output `"Raster CSS"`, `"Raster"`, or `"Built with Raster"` anywhere in the visible HTML, UI text, page headers, footers, watermarks, or titles of the target project.
   - ✅ The classes (`raster-spec-row`, `raster-surface-card`, `raster-card`, etc.) are strictly internal stylesheet hooks. The visible UI must strictly belong to the user's application brand.

---

## 2. THE REFINED NEO-SWISS CANON (WHAT TO ALWAYS DO)

1. **Whisper-Quiet Monochrome Palette:**
   - **Light Mode:** Pure gallery white canvas (`#FFFFFF`), soft studio gray media/card wells (`#F4F4F4`), deep architectural ink (`#111111`), and muted sentence-case labels (`#767676`).
   - **Dark Mode:** Matte obsidian canvas (`#0A0A0A`), soft dark studio wells (`#151515`), crisp white ink (`#F5F5F5`), and subtle `1px` dark hairlines (`#222222`).
2. **Calm Sentence-Case Grotesque Typography:**
   - Headings (`h1`, `h2`, `.raster-display-xl`) use `font-weight: 400` (regular) with tight negative tracking (`-0.03em`) and natural sentence case (e.g., `"Essential T-Shirt"`, `"You may like"`, `"Budget allocation"`).
   - Body and specification values use crisp `12px`–`13px` (`0.75rem`–`0.8125rem`) regular weight.
   - Specification keys (`"Size"`, `"Color"`, `"Description"`, `"Fit & care"`, `"Category"`) use `11px` (`0.6875rem`) muted sentence-case text (`var(--raster-fg-muted)`).
3. **Key-Value Hairline Specification Rows (`.raster-spec-row`):**
   - Separate structured metadata, controls, and descriptions with full-width `1px solid var(--raster-border)` top hairlines, placing the muted key in a fixed left column (`110px`) and the value/options on the right.
4. **Sticky 4:8 Asymmetric Split & Tight 8px Mosaics:**
   - Pair a sticky 4-column specification pane on the left (`.raster-split-sticky` + `.raster-sticky-pane`) with an 8-column scrolling content/media mosaic on the right (`.raster-mosaic` with `8px` gaps).
5. **Borderless Studio Surface Cards (`.raster-surface-card`):**
   - Instead of wrapping grid items in heavy bordered boxes, place visual content inside soft `#F4F4F4` studio wells (`.raster-media-well`) with a clean horizontal baseline row underneath (`Title` on the left, tabular `Price / Value` on the right).

---

## 3. DESIGN TOKENS QUICK REFERENCE

| Category | CSS Variable | Light Value | Dark Value | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Canvas** | `--raster-canvas` | `#FFFFFF` | `#0A0A0A` | Pure gallery background |
| **Surface Well** | `--raster-surface` | `#F4F4F4` | `#151515` | Studio gray card / media well |
| **Primary Ink** | `--raster-fg-primary` | `#111111` | `#F5F5F5` | Headings, values, solid CTA fill |
| **Muted Key** | `--raster-fg-muted` | `#767676` | `#787878` | Sentence-case spec labels (`11px`) |
| **Hairline** | `--raster-border` | `#E6E6E6` | `#222222` | Whisper-thin `1px` horizontal divider |
| **Corner Radius** | `--raster-radius` | `0px` | `0px` | Sharp architectural geometry |

---

## 4. COPY-PASTE COMPONENT BLUEPRINTS

### A. Sticky 4:8 Split Layout with Hairline Spec Rows & Action Bar
```html
<div class="raster-split-sticky">
  <!-- Left Column: Sticky Specification Pane (4 cols) -->
  <div class="raster-sticky-pane">
    <div>
      <div class="raster-breadcrumb mb-2">
        <a href="#">Shop</a> <span>/</span> <a href="#">Men</a> <span>/</span> <span class="is-current">T-Shirts</span>
      </div>
      <h1 class="raster-display-xl mb-6">Essential T-Shirt</h1>

      <div class="raster-spec-list">
        <div class="raster-spec-row">
          <span class="raster-spec-key">Size</span>
          <div class="raster-option-picker">
            <button class="raster-option-item">XS</button>
            <button class="raster-option-item">S</button>
            <button class="raster-option-item is-active">M</button>
            <button class="raster-option-item">L</button>
            <button class="raster-option-item">XL</button>
          </div>
        </div>

        <div class="raster-spec-row-split">
          <div class="raster-flex raster-items-center gap-6">
            <span class="raster-spec-key" style="width: 94px;">Color</span>
            <div class="raster-swatch-group">
              <button class="raster-swatch is-active" style="background: #111;"></button>
              <button class="raster-swatch" style="background: #555;"></button>
              <button class="raster-swatch" style="background: #e5e5e5;"></button>
            </div>
          </div>
          <div class="raster-price">95€</div>
        </div>
      </div>

      <div class="raster-action-row mt-2">
        <div class="raster-stepper">
          <button type="button">-</button>
          <span>1</span>
          <button type="button">+</button>
        </div>
        <button class="raster-btn raster-btn-primary w-full">Add to cart</button>
      </div>
    </div>

    <!-- Bottom-Anchored Description & Fit Specs -->
    <div class="raster-spec-list">
      <div class="raster-spec-row">
        <span class="raster-spec-key">Description</span>
        <div class="raster-spec-val">
          A clean, versatile t-shirt designed for movement and everyday wear.
        </div>
      </div>
      <div class="raster-spec-row">
        <span class="raster-spec-key">Fit &amp; care</span>
        <div class="raster-spec-val">
          <div>Regular athletic fit</div>
          <div class="raster-spec-line">Model is 186 cm wearing size M</div>
          <div class="raster-spec-line">Machine wash cold, hang dry</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Right Column: Scrolling 8px-Gap Media/Surface Mosaic (8 cols) -->
  <div class="raster-mosaic">
    <div class="raster-media-well mosaic-half" style="aspect-ratio: 4/5;"></div>
    <div class="raster-media-well mosaic-half" style="aspect-ratio: 4/5;"></div>
    <div class="raster-media-well mosaic-full" style="aspect-ratio: 16/10;"></div>
  </div>
</div>
```

### B. 4-Column Borderless Surface Card Grid ("You may like")
```html
<div class="raster-section-header">
  <h2 class="raster-h2">You may like</h2>
</div>

<div class="raster-grid-4">
  <a href="#" class="raster-surface-card">
    <div class="raster-media-well">
      <span class="raster-surface-badge">New</span>
      <!-- Image or visual specimen -->
    </div>
    <div class="raster-surface-card-meta">
      <span class="raster-surface-card-title">AeroDry Training Shorts</span>
      <span class="raster-surface-card-price">110€</span>
    </div>
  </a>
</div>
```

### C. Quiet Hairline Metric Block (For Dashboards & Ledgers)
```html
<div class="raster-card">
  <div class="raster-stat">
    <div class="raster-stat-label">
      <span>Annual cost</span>
      <span>FY26</span>
    </div>
    <div class="raster-stat-value">$41,111.79</div>
    <div class="raster-stat-sub">
      <span class="raster-delta">+12.4%</span>
      <span>of $54,000.00 baseline</span>
    </div>
  </div>
</div>
```

### D. 3-Zone Architectural Footer with Inline Underline Input
```html
<footer class="raster-footer">
  <div class="raster-container">
    <div class="raster-footer-grid">
      <div class="raster-brand">Brand</div>
      <div class="raster-footer-nav">
        <div class="raster-footer-col">
          <span class="raster-label">Explore</span>
          <ul class="raster-footer-links">
            <li><a href="#">Philosophy</a></li>
            <li><a href="#">System</a></li>
          </ul>
        </div>
      </div>
      <div class="raster-footer-col">
        <span class="raster-label">Newsletter</span>
        <p class="raster-small">Enjoy 10% off your first order.</p>
        <div class="raster-input-inline mt-2">
          <input type="email" placeholder="Enter your email..." />
          <button type="button">Submit</button>
        </div>
      </div>
    </div>
  </div>
</footer>
```

---

## 5. AI AGENT PRE-FLIGHT CHECKLIST
Before outputting code using Raster CSS, verify:
- [ ] Is the palette whisper-quiet monochrome (`#FFFFFF` / `#F4F4F4` / `#111111` in light mode, `#0A0A0A` / `#151515` in dark mode)?
- [ ] Are headings calm sentence-case (`font-weight: 400`, tight `-0.03em` tracking) rather than shouty bold all-caps?
- [ ] Are borders whisper-thin `1px solid var(--raster-border)` hairlines with `0px` corner radius?
- [ ] Are specification details organized using `.raster-spec-row` hairline key-value rows?
- [ ] Is the interface mobile-friendly (using `.raster-table-container`, 16px mobile inputs, responsive grids)?
- [ ] Have you verified that NO visible text, headers, or footers mention "Raster CSS"?
