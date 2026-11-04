// RASTER CSS — Refined Neo-Swiss Interactive Demo & Storefront Engine

const BASE_INCOME_ANNUAL = 54000.00;
const UNIT_PRICE_EUR = 95;

let selectedSize = 'M';
let selectedColor = 'Black';
let selectedQty = 1;
let cartTotalItems = 0;

let currentHorizon = 'yr'; // 'day' | 'wk' | 'mo' | 'yr'
let currentFilter = 'ALL'; // 'ALL' | 'Essential' | 'Discretionary'
let whatIfActive = false;

const ledgerItems = [
  { name: 'Housing & Rent', type: 'Essential', annual: 19800.00 },
  { name: 'Food & Groceries', type: 'Essential', annual: 6778.59 },
  { name: 'Dining Out & Cafes', type: 'Discretionary', annual: 5919.60 },
  { name: 'Health & Medical', type: 'Essential', annual: 3540.00 },
  { name: 'Utilities & Fiber', type: 'Essential', annual: 3225.72 },
  { name: 'Culture, Books & Media', type: 'Discretionary', annual: 1847.88 }
];

const HORIZON_DIVISORS = {
  yr: { divisor: 1, label: 'Annual cost', colHeader: 'Annual amount', suffix: 'baseline income' },
  mo: { divisor: 12, label: 'Monthly cost', colHeader: 'Monthly amount', suffix: 'monthly income' },
  wk: { divisor: 52, label: 'Weekly cost', colHeader: 'Weekly amount', suffix: 'weekly income' },
  day: { divisor: 365, label: 'Daily cost', colHeader: 'Daily amount', suffix: 'daily income' }
};

function formatUSD(val) {
  return '$' + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeText = document.getElementById('theme-text');
  const gridToggle = document.getElementById('grid-toggle');
  const gridText = document.getElementById('grid-text');
  const gridOverlay = document.getElementById('grid-inspector');
  const floatingBar = document.getElementById('floating-cart-bar');
  const primaryTrigger = document.getElementById('primary-cart-trigger');
  const html = document.documentElement;

  // Initialize theme
  const savedTheme = localStorage.getItem('raster-theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('raster-theme', newTheme);
      updateThemeButton(newTheme);
    });
  }

  function updateThemeButton(theme) {
    if (!themeText) return;
    themeText.textContent = theme === 'dark' ? 'Theme: Dark' : 'Theme: Light';
  }

  // Initialize 12-column Swiss Grid Inspector Overlay
  if (gridToggle && gridOverlay) {
    gridToggle.addEventListener('click', () => {
      const isVisible = gridOverlay.classList.toggle('is-visible');
      if (gridText) {
        gridText.textContent = isVisible ? 'Grid: On' : 'Grid: Off';
      }
      gridToggle.classList.toggle('is-active', isVisible);
    });
  }

  // Scroll listener for the Floating Top-Center Bar (Matches 00:05 in reference video)
  if (floatingBar && primaryTrigger) {
    window.addEventListener('scroll', () => {
      const rect = primaryTrigger.getBoundingClientRect();
      const shouldShow = rect.bottom < 48;
      floatingBar.classList.toggle('is-visible', shouldShow);
    }, { passive: true });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      mobileToggle.textContent = isOpen ? 'Close' : 'Menu';
    });
  }

  renderFinanceDashboard();
});

function closeMobileNav() {
  const mobileNav = document.getElementById('mobile-nav');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  if (mobileNav && mobileNav.classList.contains('is-open')) {
    mobileNav.classList.remove('is-open');
    if (mobileToggle) mobileToggle.textContent = 'Menu';
  }
}

// Switch / Scroll to Showcase Section
function switchShowcaseMode(mode, btnEl) {
  if (btnEl && btnEl.parentElement) {
    btnEl.parentElement.querySelectorAll('.view-pill').forEach(b => b.classList.remove('is-active'));
    btnEl.classList.add('is-active');
  }

  const targetMap = {
    storefront: 'storefront-view',
    finance: 'finance-section',
    system: 'system-section'
  };

  const targetId = targetMap[mode];
  const targetEl = document.getElementById(targetId);
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Storefront Product Controls (Size, Color, Quantity, Add to Cart)
function selectSize(size, btnEl) {
  selectedSize = size;
  const picker = document.getElementById('size-picker');
  if (picker) {
    picker.querySelectorAll('.raster-option-item').forEach(b => b.classList.remove('is-active'));
  }
  if (btnEl) btnEl.classList.add('is-active');

  const floatSize = document.getElementById('floating-size');
  if (floatSize) floatSize.textContent = size;
}

function selectColor(colorName, hexValue, btnEl) {
  selectedColor = colorName;
  const picker = document.getElementById('color-picker');
  if (picker) {
    picker.querySelectorAll('.raster-swatch').forEach(b => b.classList.remove('is-active'));
  }
  if (btnEl) btnEl.classList.add('is-active');

  const floatColor = document.getElementById('floating-color');
  if (floatColor) floatColor.textContent = colorName;
}

function adjustQty(delta) {
  selectedQty = Math.max(1, Math.min(20, selectedQty + delta));
  const qtyEl = document.getElementById('qty-value');
  const priceEl = document.getElementById('product-price-display');
  const floatPrice = document.getElementById('floating-price');

  const totalEur = `${selectedQty * UNIT_PRICE_EUR}€`;
  if (qtyEl) qtyEl.textContent = String(selectedQty);
  if (priceEl) priceEl.textContent = totalEur;
  if (floatPrice) floatPrice.textContent = totalEur;
}

function triggerAddToCart(customItemName) {
  const addedCount = customItemName ? 1 : selectedQty;
  cartTotalItems += addedCount;
  const cartEl = document.getElementById('cart-count');
  if (cartEl) cartEl.textContent = String(cartTotalItems);

  const label = customItemName
    ? `Added ${customItemName} to cart`
    : `Added ${selectedQty} × Essential T-Shirt (${selectedSize}, ${selectedColor})`;
  showToast(label);
}

// Financial Dashboard Interactive Engine
function setBudgetHorizon(horizon, btnEl) {
  currentHorizon = horizon;
  const group = document.getElementById('horizon-group');
  if (group) {
    group.querySelectorAll('.raster-option-item').forEach(b => b.classList.remove('is-active'));
  }
  if (btnEl) btnEl.classList.add('is-active');
  renderFinanceDashboard();
}

function filterLedger(filterType, btnEl) {
  currentFilter = filterType;
  if (btnEl && btnEl.parentElement) {
    btnEl.parentElement.querySelectorAll('.raster-option-item').forEach(b => b.classList.remove('is-active'));
    btnEl.classList.add('is-active');
  }
  renderFinanceDashboard();
}

function toggleWhatIfSimulation() {
  whatIfActive = !whatIfActive;
  const btnLabel = document.getElementById('whatif-btn-label');
  if (btnLabel) {
    btnLabel.textContent = whatIfActive ? 'Reset baseline' : 'Simulate -10% rent';
  }
  renderFinanceDashboard();
  showToast(whatIfActive ? 'Simulation active: -10% housing cost' : 'Restored baseline ledger');
}

function toggleAddEntryRow() {
  const drawer = document.getElementById('add-allocation-drawer');
  if (!drawer) return;
  drawer.style.display = drawer.style.display === 'none' ? 'block' : 'none';
}

function addNewAllocation() {
  const nameInput = document.getElementById('new-cat-name');
  const typeSelect = document.getElementById('new-cat-type');
  const amountInput = document.getElementById('new-cat-amount');

  const name = (nameInput.value || '').trim();
  const type = typeSelect.value || 'Essential';
  const amount = parseFloat(amountInput.value);

  if (!name || isNaN(amount) || amount <= 0) {
    showToast('Enter valid category and amount');
    return;
  }

  ledgerItems.push({ name, type, annual: amount });
  nameInput.value = '';
  amountInput.value = '1200';
  toggleAddEntryRow();
  renderFinanceDashboard();
  showToast(`Added allocation: ${name}`);
}

function renderFinanceDashboard() {
  const cfg = HORIZON_DIVISORS[currentHorizon] || HORIZON_DIVISORS.yr;
  const divisor = cfg.divisor;

  const computedItems = ledgerItems.map(item => {
    let annual = item.annual;
    if (whatIfActive && item.name.toLowerCase().includes('housing')) {
      annual = annual * 0.9;
    }
    return { ...item, effectiveAnnual: annual, periodAmount: annual / divisor };
  });

  const totalAnnualCost = computedItems.reduce((acc, i) => acc + i.effectiveAnnual, 0);
  const needsAnnual = computedItems.filter(i => i.type === 'Essential').reduce((acc, i) => acc + i.effectiveAnnual, 0);
  const wantsAnnual = computedItems.filter(i => i.type === 'Discretionary').reduce((acc, i) => acc + i.effectiveAnnual, 0);
  const savingsAnnual = Math.max(0, BASE_INCOME_ANNUAL - totalAnnualCost);

  const needsPct = Math.round((needsAnnual / BASE_INCOME_ANNUAL) * 100);
  const wantsPct = Math.round((wantsAnnual / BASE_INCOME_ANNUAL) * 100);
  const savingsPct = Math.max(0, 100 - needsPct - wantsPct);
  const exactSurplusPct = ((savingsAnnual / BASE_INCOME_ANNUAL) * 100).toFixed(1);

  const setTxt = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setTxt('stat-cost-title', cfg.label);
  setTxt('stat-cost-val', formatUSD(totalAnnualCost / divisor));
  setTxt('stat-cost-card', formatUSD(totalAnnualCost / divisor));
  setTxt('stat-income-sub', `Allocated from ${formatUSD(BASE_INCOME_ANNUAL / divisor)} ${cfg.suffix}.`);

  setTxt('stat-needs-val', formatUSD(needsAnnual / divisor));
  setTxt('stat-needs-pct', `${needsPct}% of inc`);

  setTxt('stat-wants-val', formatUSD(wantsAnnual / divisor));
  setTxt('stat-wants-pct', `${wantsPct}% of inc`);

  setTxt('stat-savings-val', formatUSD(savingsAnnual / divisor));
  setTxt('stat-savings-pct', `${savingsPct}% saved`);

  setTxt('bar-label-needs', `Needs ${needsPct}%`);
  setTxt('bar-label-wants', `Wants ${wantsPct}%`);
  setTxt('bar-label-savings', `Saved ${savingsPct}%`);

  const segNeeds = document.getElementById('bar-seg-needs');
  const segWants = document.getElementById('bar-seg-wants');
  const segSavings = document.getElementById('bar-seg-savings');
  if (segNeeds) segNeeds.style.width = `${needsPct}%`;
  if (segWants) segWants.style.width = `${wantsPct}%`;
  if (segSavings) segSavings.style.width = `${savingsPct}%`;

  setTxt('surplus-big-rate', `${exactSurplusPct}%`);
  setTxt('metric-burn-rate', `${formatUSD(totalAnnualCost / 12)} / mo`);
  setTxt('metric-daily-rate', `${formatUSD(totalAnnualCost / 365)} / day`);

  setTxt('table-amount-col-header', cfg.colHeader);

  const filtered = computedItems.filter(i => currentFilter === 'ALL' || i.type === currentFilter);
  setTxt('ledger-count-badge', `${filtered.length} categories`);

  const tbody = document.getElementById('finance-ledger-tbody');
  if (tbody) {
    tbody.innerHTML = filtered.map(item => {
      const sharePct = Math.min(100, Math.round((item.effectiveAnnual / totalAnnualCost) * 100));
      const isEssential = item.type === 'Essential';
      const fillClass = isEssential ? '' : 'raster-meter-fill-accent';

      return `
        <tr>
          <td>${item.name}</td>
          <td style="color: var(--raster-fg-muted);">${item.type}</td>
          <td>
            <div class="raster-flex raster-items-center gap-3">
              <div class="raster-meter-track" style="width: 80px;">
                <div class="raster-meter-fill ${fillClass}" style="width: ${sharePct}%;"></div>
              </div>
              <span class="raster-tabular" style="color: var(--raster-fg-muted); font-size: 11px;">${sharePct}%</span>
            </div>
          </td>
          <td class="cell-num">${formatUSD(item.periodAmount)}</td>
        </tr>
      `;
    }).join('');
  }
}

// Toast Notification Helper
function showToast(message = 'Copied to clipboard') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.style.display = 'block';
  clearTimeout(window.__rasterToastTimer);
  window.__rasterToastTimer = setTimeout(() => {
    toast.style.display = 'none';
  }, 2400);
}

// Copy One-Line GitHub Repo Prompt
function copyAgentRepoPrompt() {
  const el = document.getElementById('repo-prompt-snippet');
  const text = el ? el.innerText : 'Use the UI/UX framework from https://github.com/arron21/raster-css (read AI.md and llms.txt).';
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied GitHub repo prompt');
  });
}

// Copy Full AI.md Codex
function copyAiCodex() {
  fetch('./AI.md')
    .then(res => {
      if (!res.ok) throw new Error('Fallback to ../AI.md');
      return res.text();
    })
    .catch(() => fetch('../AI.md').then(r => r.text()))
    .then(text => {
      navigator.clipboard.writeText(text).then(() => {
        showToast('Copied full AI.md codex');
      });
    })
    .catch(() => {
      const snippet = document.getElementById('prompt-snippet');
      if (snippet) {
        navigator.clipboard.writeText(snippet.innerText).then(() => {
          showToast('Copied system prompt');
        });
      }
    });
}
