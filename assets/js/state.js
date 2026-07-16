/**
 * state.js — Global Application State
 * Factory ERP Prototype
 * Claude A — Foundation Layer
 *
 * No pub-sub. Pages manually re-render after calling setState().
 * State resets on every page load (no persistence beyond session).
 */

// ─── Global State Object ───────────────────────────────────────────────────────

const AppState = {
  currentUser:  null,    // Populated by checkAuth() on each page
  currentPage:  '',      // e.g. 'inventory', 'dashboard', 'production'
  activeFilters: {},     // { [pageKey]: { status: '...', search: '...' } }
  tempFormData:  {},     // Temporary form data when navigating between steps
  cartItems:     []      // POS cart items: [{ productId, name, qty, price, discount }]
};

// ─── State Accessors ───────────────────────────────────────────────────────────

/**
 * Read a value from AppState.
 * @param {string} key - Top-level key of AppState
 * @returns {*}
 */
function getState(key) {
  return AppState[key];
}

/**
 * Write a value to AppState.
 * Pages must manually re-render after calling this — no reactivity.
 * @param {string} key - Top-level key of AppState
 * @param {*} value
 */
function setState(key, value) {
  if (!(key in AppState)) {
    console.warn(`[state] setState: unknown key "${key}". Adding dynamically.`);
  }
  AppState[key] = value;
}

/**
 * Reset all state except currentUser.
 * Called on page transitions or module switches.
 */
function clearState() {
  const user = AppState.currentUser;

  AppState.currentPage   = '';
  AppState.activeFilters = {};
  AppState.tempFormData  = {};
  AppState.cartItems     = [];

  // Preserve user across resets
  AppState.currentUser = user;
}

