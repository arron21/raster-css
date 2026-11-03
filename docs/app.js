// RASTER CSS — Interactive Showcase & Live Demo Engine

const BASE_INCOME_ANNUAL = 54000.00;

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
  yr: { divisor: 1, label: 'ANNUAL COST', colHeader: 'Annual Amount', suffix: 'baseline income' },
  mo: { divisor: 12, label: 'MONTHLY COST', colHeader: 'Monthly Amount', suffix: 'monthly income' },
  wk: { divisor: 52, label: 'WEEKLY COST', colHeader: 'Weekly Amount', suffix: 'weekly income' },
  day: { divisor: 365, label: 'DAILY COST', colHeader: 'Daily Amount', suffix: 'daily income' }
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
    themeText.textContent = theme === 'dark' ? 'THEME: DARK' : 'THEME: LIGHT';
  }

  // Initialize 12-column Swiss Grid Inspector Overlay
  if (gridToggle && gridOverlay) {
    gridToggle.addEventListener('click', () => {
      const isVisible = gridOverlay.classList.toggle('is-visible');
      if (gridText) {
        gridText.textContent = isVisible ? 'GRID: ON' : 'GRID: OFF';
      }
      gridToggle.classList.toggle('raster-btn-accent', isVisible);
      gridToggle.classList.toggle('raster-btn-ghost', !isVisible);
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      mobileToggle.textContent = isOpen ? 'CLOSE' : 'MENU';
    });
  }

  // Render initial Financial Ledger state
  renderFinanceDashboard();
});

function closeMobileNav() {
  const mobileNav = document.getElementById('mobile-nav');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  if (mobileNav && mobileNav.classList.contains('is-open')) {
    mobileNav.classList.remove('is-open');
    if (mobileToggle) mobileToggle.textContent = 'MENU';
  }
}

// Switch between the 3 Live Application Demos
function switchDemoApp(appKey, btnEl) {
  const apps = ['finance', 'telemetry', 'editorial'];
  apps.forEach(k => {
    const el = document.getElementById(`demo-app-${k}`);
    if (el) el.style.display = k === appKey ? 'block' : 'none';
  });

  const buttons = document.querySelectorAll('.demo-tab-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
}

// Financial Dashboard Interactive Engine
function setBudgetHorizon(horizon, btnEl) {
  currentHorizon = horizon;
  const group = document.getElementById('horizon-group');
  if (group) {
    group.querySelectorAll('.raster-btn').forEach(b => b.classList.remove('is-active'));
  }
  if (btnEl) btnEl.classList.add('is-active');
  renderFinanceDashboard();
}

function filterLedger(filterType, btnEl) {
  currentFilter = filterType;
  if (btnEl && btnEl.parentElement) {
    btnEl.parentElement.querySelectorAll('.raster-btn').forEach(b => b.classList.remove('is-active'));
    btnEl.classList.add('is-active');
  }
  renderFinanceDashboard();
}

function toggleWhatIfSimulation() {
  whatIfActive = !whatIfActive;
  const btnLabel = document.getElementById('whatif-btn-label');
  const statusTag = document.getElementById('simulation-status-tag');
  if (btnLabel) {
    btnLabel.textContent = whatIfActive ? 'RESET BASELINE' : 'SIMULATE -10% RENT';
  }
  if (statusTag) {
    statusTag.textContent = whatIfActive ? 'SIMULATION: -10% HOUSING' : 'BASELINE MODE';
    statusTag.style.color = whatIfActive ? 'var(--raster-accent)' : '';
  }
  renderFinanceDashboard();
  showToast(whatIfActive ? 'WHAT-IF SIMULATION ACTIVE (-10% RENT)' : 'RESTORED BASELINE LEDGER');
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
    showToast('ENTER VALID CATEGORY & AMOUNT');
    return;
  }

  ledgerItems.push({ name, type, annual: amount });
  nameInput.value = '';
  amountInput.value = '1200';
  toggleAddEntryRow();
  renderFinanceDashboard();
  showToast(`ADDED: ${name.toUpperCase()}`);
}

function renderFinanceDashboard() {
  const cfg = HORIZON_DIVISORS[currentHorizon] || HORIZON_DIVISORS.yr;
  const divisor = cfg.divisor;

  // Compute adjusted items
  const computedItems = ledgerItems.map(item => {
    let annual = item.annual;
    if (whatIfActive && item.name.toLowerCase().includes('housing')) {
      annual = annual * 0.9; // -10% housing simulation
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

  // Update KPI Cards
  const setTxt = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setTxt('stat-cost-title', cfg.label);
  setTxt('stat-cost-val', formatUSD(totalAnnualCost / divisor));
  setTxt('stat-income-sub', `of ${formatUSD(BASE_INCOME_ANNUAL / divisor)} ${cfg.suffix}`);

  setTxt('stat-needs-val', formatUSD(needsAnnual / divisor));
  setTxt('stat-needs-pct', `${needsPct}% OF INC`);

  setTxt('stat-wants-val', formatUSD(wantsAnnual / divisor));
  setTxt('stat-wants-pct', `${wantsPct}% OF INC`);

  setTxt('stat-savings-val', formatUSD(savingsAnnual / divisor));
  setTxt('stat-savings-pct', `${savingsPct}% SAVED`);

  // Update 50/30/20 Bar
  setTxt('bar-label-needs', `■ NEEDS: ${needsPct}%`);
  setTxt('bar-label-wants', `■ WANTS: ${wantsPct}%`);
  setTxt('bar-label-savings', `■ SAVINGS: ${savingsPct}%`);

  const segNeeds = document.getElementById('bar-seg-needs');
  const segWants = document.getElementById('bar-seg-wants');
  const segSavings = document.getElementById('bar-seg-savings');
  if (segNeeds) segNeeds.style.width = `${needsPct}%`;
  if (segWants) segWants.style.width = `${wantsPct}%`;
  if (segSavings) segSavings.style.width = `${savingsPct}%`;

  // Update Surplus Right Panel
  setTxt('surplus-big-rate', `${exactSurplusPct}%`);
  setTxt('surplus-sub-caption', `${formatUSD(savingsAnnual / divisor)} retained per ${currentHorizon.toUpperCase()} period`);
  setTxt('metric-burn-rate', `${formatUSD(totalAnnualCost / 12)} / mo`);
  setTxt('metric-daily-rate', `${formatUSD(totalAnnualCost / 365)} / day`);

  // Update Table Header & Rows
  setTxt('table-amount-col-header', cfg.colHeader);

  const filtered = computedItems.filter(i => currentFilter === 'ALL' || i.type === currentFilter);
  setTxt('ledger-count-badge', `[ ${filtered.length} ITEMS ]`);

  const tbody = document.getElementById('finance-ledger-tbody');
  if (tbody) {
    tbody.innerHTML = filtered.map(item => {
      const sharePct = Math.min(100, Math.round((item.effectiveAnnual / totalAnnualCost) * 100));
      const isEssential = item.type === 'Essential';
      const tagClass = isEssential ? 'raster-tag-solid' : 'raster-tag-accent';
      const fillClass = isEssential ? '' : 'raster-meter-fill-accent';

      return `
        <tr>
          <td style="font-weight: 600;">${item.name}</td>
          <td><span class="raster-tag ${tagClass}">${item.type}</span></td>
          <td>
            <div class="raster-flex raster-items-center gap-2">
              <div class="raster-meter-track" style="height: 4px; width: 72px;">
                <div class="raster-meter-fill ${fillClass}" style="width: ${sharePct}%;"></div>
              </div>
              <span class="raster-mono text-muted" style="font-size: 11px;">${sharePct}%</span>
            </div>
          </td>
          <td class="cell-num" style="font-weight: 600;">${formatUSD(item.periodAmount)}</td>
        </tr>
      `;
    }).join('');
  }
}

// Framework Code Snippet Tab Switcher
function switchTab(framework) {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase().includes(framework));
  });

  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.style.display = content.id === `tab-${framework}` ? 'block' : 'none';
  });
}

// Toast Notification Helper
function showToast(message = 'COPIED TO CLIPBOARD') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.style.display = 'block';
  clearTimeout(window.__rasterToastTimer);
  window.__rasterToastTimer = setTimeout(() => {
    toast.style.display = 'none';
  }, 2400);
}

// Copy CSS Token Swatch
function copyToken(tokenName) {
  const cssVar = `var(${tokenName})`;
  navigator.clipboard.writeText(cssVar).then(() => {
    showToast(`COPIED: ${cssVar}`);
  });
}

// Copy One-Line GitHub Repo Prompt
function copyAgentRepoPrompt() {
  const el = document.getElementById('repo-prompt-snippet');
  const text = el ? el.innerText : 'Use the UI/UX framework from https://github.com/arron21/raster-css (read AI.md and llms.txt).';
  navigator.clipboard.writeText(text).then(() => {
    showToast('GITHUB REPO PROMPT COPIED');
  });
}

// Copy System Prompt
function copyPromptText() {
  const snippet = document.getElementById('prompt-snippet').innerText;
  navigator.clipboard.writeText(snippet).then(() => {
    showToast('SYSTEM PROMPT COPIED');
  });
}

// Copy Full AI.md Codex (Works both on GitHub Pages /docs root and locally)
function copyAiCodex() {
  fetch('./AI.md')
    .then(res => {
      if (!res.ok) throw new Error('Fallback to ../AI.md');
      return res.text();
    })
    .catch(() => fetch('../AI.md').then(r => r.text()))
    .then(text => {
      navigator.clipboard.writeText(text).then(() => {
        showToast('FULL AI.MD CODEX COPIED');
      });
    })
    .catch(() => {
      copyPromptText();
    });
}
