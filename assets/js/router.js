/**
 * router.js — Component Loader & Navigation State
 * Factory ERP Prototype
 * Claude A — Foundation Layer
 *
 * Auto-runs on DOMContentLoaded of every page.
 * Injects sidebar + topbar, applies RBAC, highlights active link.
 */

// ─── Page Title Map ───────────────────────────────────────────────────────────
// Maps URL path fragments to { title, breadcrumb }

const PAGE_META = {
  'dashboard':          { title: 'Dashboard',              breadcrumb: 'Home' },
  'inventory/index':    { title: 'Inventory',              breadcrumb: 'Inventory' },
  'inventory/add':      { title: 'Add Product',            breadcrumb: 'Inventory > Add Product' },
  'inventory/categori': { title: 'Categories',             breadcrumb: 'Inventory > Categories' },
  'production/kanban':  { title: 'Production Kanban',      breadcrumb: 'Production > Kanban Board' },
  'production/index':   { title: 'Work Orders',            breadcrumb: 'Production > Work Orders' },
  'production/bom':     { title: 'Bill of Materials',      breadcrumb: 'Production > BOM' },
  'production/wastage': { title: 'Wastage Log',            breadcrumb: 'Production > Wastage' },
  'purchase/index':     { title: 'Purchase Orders',        breadcrumb: 'Purchase' },
  'purchase/add-suppl': { title: 'Add Supplier',           breadcrumb: 'Purchase > Add Supplier' },
  'purchase/grn':       { title: 'Goods Receipt Note',     breadcrumb: 'Purchase > GRN' },
  'sales/quotations':   { title: 'Sales Quotations',       breadcrumb: 'Sales > Quotations' },
  'sales/invoices':     { title: 'Invoices',               breadcrumb: 'Sales > Invoices' },
  'sales/returns':      { title: 'Returns',                breadcrumb: 'Sales > Returns' },
  'customers/index':    { title: 'Customers',              breadcrumb: 'Customers' },
  'customers/profile':  { title: 'Customer Profile',       breadcrumb: 'Customers > Profile' },
  'orders/index':       { title: 'Orders & Delivery',      breadcrumb: 'Orders' },
  'employees/index':    { title: 'Employees',              breadcrumb: 'Employees' },
  'employees/add-empl': { title: 'Add Employee',           breadcrumb: 'Employees > Add' },
  'employees/attendan': { title: 'Attendance',             breadcrumb: 'Employees > Attendance' },
  'pricing/index':      { title: 'Pricing & Discounts',    breadcrumb: 'Pricing' },
  'reports/index':      { title: 'Reports & Analytics',    breadcrumb: 'Reports' },
  'settings/index':     { title: 'Settings',               breadcrumb: 'Settings' },
};

// ─── Component Loader ─────────────────────────────────────────────────────────

/**
 * Fetch and inject sidebar.html + topbar.html into the current page.
 * Called automatically on DOMContentLoaded.
 */
async function loadComponents() {
  const path = window.location.pathname;

  // Always use absolute paths — dev server serves from project root
  const SIDEBAR_URL = '/components/sidebar.html';
  const TOPBAR_URL  = '/components/topbar.html';

  // Inject sidebar
  const sidebarContainer = document.getElementById('sidebar-container');
  if (sidebarContainer) {
    try {
      const res  = await fetch(SIDEBAR_URL);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const html = await res.text();
      sidebarContainer.innerHTML = html;
      _initSidebar();
    } catch (e) {
      console.error('[router] Failed to load sidebar.html:', e);
    }
  }

  // Inject topbar
  const topbarContainer = document.getElementById('topbar-container');
  if (topbarContainer) {
    try {
      const res  = await fetch(TOPBAR_URL);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const html = await res.text();
      topbarContainer.innerHTML = html;
      _initTopbar();
    } catch (e) {
      console.error('[router] Failed to load topbar.html:', e);
    }
  }

  // Set active page state
  setActivePage(path);
}

// ─── Sidebar Initialisation ───────────────────────────────────────────────────

function _initSidebar() {
  const user = getCurrentUser();
  if (!user) return;

  // Populate user info in sidebar footer
  const nameEl   = document.getElementById('user-name');
  const roleEl   = document.getElementById('user-role');
  const avatarEl = document.getElementById('user-avatar');

  if (nameEl)   nameEl.textContent   = user.name;
  if (roleEl)   roleEl.textContent   = user.role.charAt(0).toUpperCase() + user.role.slice(1);
  if (avatarEl) avatarEl.textContent = user.name.charAt(0).toUpperCase();

  // RBAC — hide/show nav links
  const navLinks = document.querySelectorAll('.nav-link[data-permission]');
  navLinks.forEach(link => {
    const perm = link.getAttribute('data-permission');
    if (perm === 'all') return;
    if (!hasPermission(perm)) link.style.display = 'none';
  });

  // Logout button
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logoutUser);
  }
}

// ─── Topbar Initialisation ────────────────────────────────────────────────────

function _initTopbar() {
  const user = getCurrentUser();
  if (!user) return;

  // Populate user avatar
  const avatarSmall = document.querySelector('.user-avatar-small');
  if (avatarSmall) avatarSmall.textContent = user.name.charAt(0).toUpperCase();

  // Notification bell toggle
  const bell     = document.getElementById('notification-bell');
  const dropdown = document.getElementById('notification-dropdown');

  if (bell && dropdown) {
    bell.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = dropdown.style.display !== 'none';
      dropdown.style.display = isVisible ? 'none' : 'block';
    });

    // Populate notifications from MockData
    _populateNotifications(dropdown);

    // Close on outside click
    document.addEventListener('click', () => {
      if (dropdown) dropdown.style.display = 'none';
    });
  }
}

function _populateNotifications(container) {
  if (!container || typeof MockData === 'undefined') return;

  const notifications = MockData.notifications || [];
  const unread        = notifications.filter(n => !n.read).length;

  // Update badge count
  const badge = document.querySelector('.notification-count');
  if (badge) badge.textContent = unread > 0 ? unread : '';

  // Build dropdown HTML
  const items = notifications.map(n => `
    <div class="notification-item ${n.read ? '' : 'notification-unread'}">
      <div class="notification-title">${n.title}</div>
      <div class="notification-msg">${n.message}</div>
      <div class="notification-time">${n.timestamp}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="notification-header">
      <span>Notifications</span>
      <span class="badge badge-danger">${unread} new</span>
    </div>
    <div class="notification-list">${items || '<p style="padding:12px;color:var(--text-muted)">No notifications</p>'}</div>
  `;
}

// ─── Active Page ──────────────────────────────────────────────────────────────

/**
 * Highlight the current page link in the sidebar and set topbar title.
 * @param {string} path - window.location.pathname
 */
function setActivePage(path) {
  // Determine page key from path
  const segments  = path.split('/').filter(Boolean);
  const pageKey   = segments.slice(-2).join('/').replace('.html', '');

  // Find matching meta (first 13 chars of key for matching)
  const metaKey = Object.keys(PAGE_META).find(k => pageKey.includes(k.substring(0, 8)));
  const meta    = PAGE_META[metaKey] || { title: 'Factory ERP', breadcrumb: 'Home' };

  // Set page title and breadcrumb
  const titleEl = document.getElementById('page-title');
  const crumbEl = document.getElementById('breadcrumb');
  if (titleEl) titleEl.textContent = meta.title;
  if (crumbEl) crumbEl.textContent = meta.breadcrumb;

  // Highlight sidebar nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href') || '';
    if (href && path.includes(href.replace('../', '/').replace('.html', ''))) {
      link.classList.add('active');
    }
  });

  // Update AppState
  setState('currentPage', pageKey);
}

// ─── Auto-init on DOM Ready ───────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', loadComponents);

