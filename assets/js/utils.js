/**
 * utils.js — Shared Helper Functions
 * Factory ERP Prototype
 * Claude A — Foundation Layer
 */

// ─── Currency Formatting ───────────────────────────────────────────────────────

/**
 * Format a number as Indian Rupee string with Indian numbering system.
 * @param {number} amount
 * @returns {string} e.g. "₹1,20,000"
 */
function formatCurrency(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) return '₹0';

  const num = Number(amount);
  const abs = Math.abs(num);

  // Indian numbering: first comma at 3 digits from right, then every 2 digits
  const formatted = abs.toLocaleString('en-IN', {
    maximumFractionDigits: 0
  });

  return (num < 0 ? '-₹' : '₹') + formatted;
}

// ─── Date Formatting ──────────────────────────────────────────────────────────

/**
 * Format an ISO date string or Date object to human-readable form.
 * @param {string|Date} dateInput
 * @returns {string} e.g. "23 Apr 2026"
 */
function formatDate(dateInput) {
  if (!dateInput) return '—';

  try {
    const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
    if (isNaN(date.getTime())) return '—';

    return date.toLocaleDateString('en-GB', {
      day:   '2-digit',
      month: 'short',
      year:  'numeric'
    });
  } catch (e) {
    return '—';
  }
}

// ─── Toast Notifications ──────────────────────────────────────────────────────

/**
 * Display a toast notification. Auto-removes after 3 seconds.
 * @param {string} message
 * @param {'success'|'warning'|'error'} type
 */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) {
    console.warn('[utils] #toast-container not found in DOM.');
    return;
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">×</button>
  `;

  container.appendChild(toast);

  // Trigger slide-in animation
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('toast-visible');
    });
  });

  // Auto-remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('toast-visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    // Fallback in case transition doesn't fire
    setTimeout(() => { if (toast.parentElement) toast.remove(); }, 400);
  }, 3000);
}

// ─── Modal ────────────────────────────────────────────────────────────────────

/**
 * Inject content into the modal shell and show it.
 * @param {string} title - Modal title text
 * @param {string} bodyHTML - HTML string for modal body
 * @param {string} [footerHTML] - Optional HTML for modal footer buttons
 */
function openModal(title, bodyHTML, footerHTML = '') {
  const overlay  = document.getElementById('modal-overlay');
  const titleEl  = document.getElementById('modal-title');
  const bodyEl   = document.getElementById('modal-body');
  const footerEl = document.getElementById('modal-footer');

  if (!overlay || !titleEl || !bodyEl) {
    console.warn('[utils] Modal elements not found in DOM.');
    return;
  }

  titleEl.textContent  = title;
  bodyEl.innerHTML     = bodyHTML;
  if (footerEl) footerEl.innerHTML = footerHTML;

  overlay.style.display = 'flex';

  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

/**
 * Hide the modal.
 */
function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';
}

// ─── SKU Generator ────────────────────────────────────────────────────────────

/**
 * Auto-generate a SKU from a product name.
 * @param {string} productName - e.g. "MDF Board"
 * @returns {string} e.g. "MDF-0032"
 */
function generateSKU(productName) {
  if (!productName || typeof productName !== 'string') return 'SKU-0000';

  const prefix = productName
    .trim()
    .replace(/[^a-zA-Z ]/g, '')   // strip non-alpha
    .split(' ')
    .filter(Boolean)
    .map(word => word.substring(0, 3).toUpperCase())
    .slice(0, 2)
    .join('')
    .substring(0, 4)
    .padEnd(3, 'X');               // ensure at least 3 chars

  const suffix = String(Math.floor(Math.random() * 9000) + 1000); // 1000–9999
  return `${prefix}-${suffix}`;
}

// ─── Debounce ─────────────────────────────────────────────────────────────────

/**
 * Standard debounce — delays func execution until after wait ms have passed.
 * @param {Function} func
 * @param {number} delay - milliseconds
 * @returns {Function}
 */
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// ─── Modal ESC & Overlay Close ────────────────────────────────────────────────

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Close modal when clicking overlay backdrop (not the box itself)
document.addEventListener('click', (e) => {
  const overlay = document.getElementById('modal-overlay');
  if (e.target === overlay) closeModal();
});

