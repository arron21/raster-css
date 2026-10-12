// RASTER CSS Documentation Scripts

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeText = document.getElementById('theme-text');
  const html = document.documentElement;

  // Initialize theme
  const savedTheme = localStorage.getItem('raster-theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('raster-theme', newTheme);
    updateThemeButton(newTheme);
  });

  function updateThemeButton(theme) {
    if (theme === 'dark') {
      themeText.textContent = 'THEME: DARK';
    } else {
      themeText.textContent = 'THEME: LIGHT';
    }
  }
});

// Tab Switcher
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

// Toast helper
function showToast(message = 'COPIED TO CLIPBOARD') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 2200);
}

// Copy prompt text
function copyPromptText() {
  const snippet = document.getElementById('prompt-snippet').innerText;
  navigator.clipboard.writeText(snippet).then(() => {
    showToast('SYSTEM PROMPT COPIED');
  });
}

// Copy full AI.md codex
function copyAiCodex() {
  fetch('../AI.md')
    .then(res => res.text())
    .then(text => {
      navigator.clipboard.writeText(text).then(() => {
        showToast('FULL AI.MD CODEX COPIED');
      });
    })
    .catch(() => {
      copyPromptText();
    });
}
