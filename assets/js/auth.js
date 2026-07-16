
/**
 * auth.js — Authentication & Role-Based Access Control
 * Factory ERP Prototype
 * Claude A — Foundation Layer
 */

// ─── Demo Accounts ────────────────────────────────────────────────────────────

const DemoAccounts = [
  { id: 1, name: 'Admin User',   email: 'admin@factory.demo',   password: 'admin123',   role: 'admin'   },
  { id: 2, name: 'Manager User', email: 'manager@factory.demo', password: 'manager123', role: 'manager' },
  { id: 3, name: 'Staff User',   email: 'staff@factory.demo',   password: 'staff123',   role: 'staff'   }
];

// ─── Role → Module Permission Map ─────────────────────────────────────────────

const RolePermissions = {
  admin:   ['all'],
  manager: ['inventory', 'production', 'purchase', 'sales', 'customers', 'orders', 'reports', 'employees', 'pricing'],
  staff:   ['production', 'attendance']
};

// ─── localStorage Key ──────────────────────────────────────────────────────────

const SESSION_KEY = 'factory-erp-session';

// ─── Core Auth Functions ───────────────────────────────────────────────────────

/**
 * Validate credentials and store session.
 * @param {string} email
 * @param {string} password
 * @returns {{ success: boolean, user?: object, message?: string }}
 */
function loginUser(email, password) {
  const trimmedEmail    = (email    || '').trim().toLowerCase();
  const trimmedPassword = (password || '').trim();

  const account = DemoAccounts.find(
    a => a.email === trimmedEmail && a.password === trimmedPassword
  );

  if (!account) {
    return { success: false, message: 'Invalid email or password. Please try again.' };
  }

  const sessionUser = {
    id:    account.id,
    name:  account.name,
    email: account.email,
    role:  account.role
  };

  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
  } catch (e) {
    console.error('[auth] Could not write session to localStorage:', e);
  }

  return { success: true, user: sessionUser };
}

/**
 * Clear session and redirect to login page.
 */
function logoutUser() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (e) {
    console.error('[auth] Could not clear session:', e);
  }
  window.location.href = '/pages/login.html';
}

/**
 * Read current user from localStorage.
 * @returns {{ id, name, email, role } | null}
 */
function getCurrentUser() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('[auth] Corrupt session data, clearing.', e);
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

/**
 * Called on every protected page load. Redirects to login if no session.
 * @returns {{ id, name, email, role } | null}
 */
function checkAuth() {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = '/pages/login.html';
    return null;
  }
  return user;
}

/**
 * Check if the current user has access to a given module.
 * @param {string} module - e.g. 'inventory', 'production', 'attendance'
 * @returns {boolean}
 */
function hasPermission(module) {
  const user = getCurrentUser();
  if (!user) return false;

  const permissions = RolePermissions[user.role] || [];

  // Admin has access to everything
  if (permissions.includes('all')) return true;

  return permissions.includes(module);
}

