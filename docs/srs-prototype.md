# SRS — Factory ERP Prototype (Complete)
**Project:** Factory ERP (Modular SaaS)
**Document Type:** Prototype-Scope Software Requirements Specification
**Version:** 0.2 (All 18 Modules Documented)
**Prepared by:** Kepler (Internal Planning Doc)

---

## 1. Purpose of This Document

This SRS defines the scope, folder structure, screens, and functionality of the **prototype** covering all 18 planned modules. Modules are tagged as either **[PROTOTYPE]** (built and demoed) or **[FULL PRODUCT]** (acknowledged in UI, built post client approval). The prototype uses mock/static data with no real backend.

---

## 2. Module Scope Tags

| Tag | Meaning |
|---|---|
| ✅ PROTOTYPE | Fully built and functional in prototype using mockdata |
| ⚠️ PARTIAL | UI shell present, core feature shown, some parts placeholder |
| 🔲 FULL PRODUCT | Acknowledged in sidebar/UI as "Coming Soon", built post-approval |

---

## 3. All 18 Modules — Scope Decision

| # | Module | Scope | Reason |
|---|---|---|---|
| 1 | User & Role Management | ✅ PROTOTYPE | Every demo needs auth and RBAC |
| 2 | Inventory Management | ✅ PROTOTYPE | Most universal factory pain point |
| 3 | Production / Manufacturing | ✅ PROTOTYPE | Kanban is the visual showstopper |
| 4 | Purchase Management | ⚠️ PARTIAL | Supplier list + PO table shown, no real logic |
| 5 | Sales & Billing / POS | ⚠️ PARTIAL | POS screen shown, no real payment processing |
| 6 | Customer Management | ⚠️ PARTIAL | Customer list + profile shown, udhaar static |
| 7 | Order & Delivery Management | ⚠️ PARTIAL | Status tracker shown, no real dispatch logic |
| 8 | Accounting & Finance | 🔲 FULL PRODUCT | Too complex, scares non-finance owners in demo |
| 9 | Reports & Analytics | ✅ PROTOTYPE | Charts and summaries using mockdata |
| 10 | Multi-Branch Management | 🔲 FULL PRODUCT | Premature for first client demos |
| 11 | Notifications & Alerts | ⚠️ PARTIAL | Bell icon, low stock badges, hardcoded alerts |
| 12 | Settings & Customization | ✅ PROTOTYPE | Static but present, makes product feel real |
| 13 | Integrations | 🔲 FULL PRODUCT | UI buttons shown, labelled "Coming Soon" |
| 14 | Security & Backup | 🔲 FULL PRODUCT | Backend concern, not demoable in prototype |
| 15 | Employee / HR Management | ⚠️ PARTIAL | Employee list, profile, attendance shown |
| 16 | Invoice & Document Management | ⚠️ PARTIAL | Invoice history shown, download is placeholder |
| 17 | Returns & Refund Management | ⚠️ PARTIAL | Returns screen present, logic is static |
| 18 | Pricing & Discount Management | ⚠️ PARTIAL | Pricing rules table shown, no real calculation |

---

## 4. Demo User Accounts

Three hardcoded accounts in `auth.js` to showcase RBAC live during pitch:

| Role | Email | Password | Access |
|---|---|---|---|
| Admin | admin@factory.demo | admin123 | Full access — all 18 modules visible |
| Manager | manager@factory.demo | manager123 | Inventory, Production, Purchase, Reports |
| Staff | staff@factory.demo | staff123 | Production task view, Attendance only |

---

## 5. Folder Structures

### 5.1 Prototype Folder Structure (Vanilla JS)
This layout is used for the static demonstration prototype.
```
factory-erp-prototype/
│
├── index.html                  # Main entry point (session routing)
│
├── assets/
│   ├── css/
│   │   ├── main.css            # Base layouts & global variables
│   │   ├── sidebar.css         # Nav sidebar styling
│   │   └── components.css      # Table, card, modal, badge elements
│   └── js/
│       ├── auth.js             # RBAC logic and demo login
│       ├── router.js           # Navigation component injection
│       ├── state.js            # Global in-memory state
│       ├── mockdata.js         # Mock database structures
│       └── utils.js            # Currency & date formatting helpers
│
├── components/                 # Reusable HTML snippets
│   ├── sidebar.html
│   ├── topbar.html
│   ├── modal.html
│   └── toast.html
│
├── pages/                      # Screen layouts
│   ├── login.html
│   ├── dashboard.html
│   ├── returns.html
│   │
│   ├── inventory/
│   │   ├── index.html
│   │   ├── add-product.html
│   │   └── categories.html
│   ├── production/
│   │   ├── kanban.html
│   │   ├── index.html
│   │   ├── bom.html
│   │   └── wastage.html
│   ├── purchase/
│   │   ├── index.html
│   │   ├── add-supplier.html
│   │   └── grn.html
│   ├── sales/
│   │   ├── quotations.html
│   │   └── invoices.html
│   ├── customers/
│   │   ├── index.html
│   │   └── profile.html
│   ├── orders/
│   │   └── index.html
│   ├── employees/
│   │   ├── index.html
│   │   ├── add-employee.html
│   │   └── attendance.html
│   ├── pricing/
│   │   └── index.html
│   ├── reports/
│   │   └── index.html
│   └── settings/
│       └── index.html
│
└── docs/
    ├── srs-prototype.md        # [THIS FILE]
    └── srs_pivoted_scope.md    # Pivoted B2B design doc
```

### 5.2 Production Folder Structure (React + Vite + TypeScript)
This layout will be implemented for the final scalable multi-tenant SaaS application.
```
factory-erp-react/
│
├── package.json                # Project dependencies and build scripts
├── vite.config.js              # Vite configuration (aliases, development proxy)
├── index.html                  # Single Page Application HTML shell
│
├── src/
│   ├── main.jsx                # Application mounting point
│   ├── App.jsx                 # Routing core & theme context wrappers
│   │
│   ├── assets/                 # Static image assets and icons
│   │
│   ├── components/             # Reusable UI component library
│   │   ├── common/             # Atomic inputs, custom modals, status badges
│   │   ├── layout/             # Structural wrappers (Sidebar, Topbar)
│   │   └── charts/             # Canvas chart wrappers (Chart.js / Recharts)
│   │
│   ├── context/                # Global React contexts
│   │   ├── AuthContext.jsx     # Tenant token retention, login status, RBAC
│   │   └── ThemeContext.jsx    # Style mode preferences (Light/Dark/Glass)
│   │
│   ├── hooks/                  # Custom reusable React hooks
│   │   ├── useAuth.js          # Guarding hooks for roles & permissions
│   │   ├── useFetch.js         # API communication handlers
│   │   └── useDebounce.js      # Search input timers
│   │
│   ├── routes/                 # Navigation wrappers
│   │   ├── AppRoutes.jsx       # Public/Private routing list
│   │   └── ProtectedRoute.jsx  # High Order Component for permission checks
│   │
│   ├── services/               # REST API service layers (axios client)
│   │   ├── api.js              # Axios configuration & interceptors
│   │   ├── inventoryService.js # Stock adjustment, catalog endpoints
│   │   ├── productionService.js# Kanban tracking, wastage alerts
│   │   └── salesService.js     # B2B quotations, invoice credit rollups
│   │
│   ├── pages/                  # Modular dashboard pages
│   │   ├── Dashboard.jsx       # Real-time dashboard with active KPI counts
│   │   ├── Login.jsx           # Portal login (Admin / Manager / Staff roles)
│   │   ├── Returns.jsx         # Sales & purchase return registry
│   │   │
│   │   ├── inventory/
│   │   │   ├── InventoryList.jsx
│   │   │   ├── ProductForm.jsx # Add/Edit product details
│   │   │   └── Categories.jsx
│   │   │
│   │   ├── production/
│   │   │   ├── ProductionKanban.jsx # Drag-and-drop production pipeline
│   │   │   ├── WorkOrdersList.jsx
│   │   │   ├── BillOfMaterials.jsx  # Dynamic material feasibility checks
│   │   │   └── WastageLog.jsx
│   │   │
│   │   ├── purchase/
│   │   │   ├── PurchaseDashboard.jsx # Supplier metrics & PO histories
│   │   │   └── GoodsReceivedNote.jsx # Delivery updates
│   │   │
│   │   ├── sales/
│   │   │   ├── QuotationsGenerator.jsx # B2B quote manager with BOM checks
│   │   │   └── InvoicesAgingTracker.jsx # Credit accounts tracking
│   │   │
│   │   ├── customers/
│   │   │   ├── CustomersList.jsx
│   │   │   └── CustomerProfile.jsx # Customer ledgers & Udhaar balances
│   │   │
│   │   ├── employees/
│   │   │   ├── EmployeesList.jsx
│   │   │   └── AttendanceTracker.jsx
│   │   │
│   │   ├── pricing/
│   │   │   └── PricingManager.jsx  # Products base prices & bulk tiers
│   │   │
│   │   └── settings/
│   │       └── SettingsPage.jsx    # Tenant details, tax schedules
│   │
│   ├── styles/                 # CSS Design token systems
│   │   ├── index.css           # Global resets and custom CSS properties
│   │   └── animations.css      # Micro-interactions for buttons & slides
│   │
│   └── utils/                  # Utility JS helpers
│       ├── currency.js         # Indian numbering system (en-IN Lakhs formatter)
│       └── date.js             # Date conversion strings
```

---

## 6. Shared Files — Detailed Functionality

### `index.html` — Entry Point
- No visible UI
- On load: checks localStorage for active session via `auth.js → checkAuth()`
- Session found → redirect to `pages/dashboard.html`
- No session → redirect to `pages/login.html`

---

### `assets/js/auth.js` — Authentication Logic
- Hardcoded demo accounts array with name, email, password, role
- `loginUser(email, password)` — validates credentials, stores user object in localStorage, redirects to dashboard
- `logoutUser()` — clears localStorage session, redirects to login
- `getCurrentUser()` — returns current user object from localStorage
- `checkAuth()` — called on every page load. Redirects to login if no session found
- `hasPermission(module)` — checks if current role has access to a given module. Returns true/false

---

### `assets/js/state.js` — Global State
- Single global `AppState` object shared across all pages
- Holds: `currentUser`, `currentPage`, `activeFilters`, `tempFormData`
- `setState(key, value)` — updates state and triggers any listeners
- `getState(key)` — reads a value from state
- Used by router, sidebar, and all pages to stay in sync

---

### `assets/js/router.js` — Page & Component Loader
- Loads `sidebar.html` and `topbar.html` into every page on DOM ready
- Sets active nav link based on current URL path
- Reads role from `state.js` and hides/shows sidebar links accordingly:
  - Admin → all links visible
  - Manager → no Users, no Settings
  - Staff → only Production and Attendance
- Sets page title in topbar dynamically per page

---

### `assets/js/mockdata.js` — Fake Database
Full arrays of demo data for every module:
- `products[]` — 20 sample products with SKU, category, stock, reorder level
- `categories[]` — 6 categories with subcategories each
- `workOrders[]` — 15 work orders across all Kanban stages
- `bomEntries[]` — BOM definitions for 5 products
- `wastageLog[]` — 10 wastage entries with reasons and departments
- `suppliers[]` — 8 supplier records with contact and history
- `purchaseOrders[]` — 10 POs in various statuses
- `customers[]` — 12 customer profiles with udhaar balances
- `orders[]` — 10 delivery orders across all stages
- `employees[]` — 10 employee records with roles and departments
- `attendanceLog[]` — 30 days of attendance records
- `invoices[]` — 15 invoice records
- `pricingRules[]` — 8 pricing and discount rules
- `activityFeed[]` — 20 recent activity entries for dashboard
- `notifications[]` — 5 hardcoded alerts

---

### `assets/js/utils.js` — Shared Helpers
- `formatCurrency(amount)` → returns `₹1,20,000` formatted string
- `formatDate(dateStr)` → returns `23 Apr 2026` formatted string
- `showToast(message, type)` → triggers toast component (success / warning / error)
- `openModal(title, bodyHTML)` → injects content into modal component and shows it
- `closeModal()` → hides modal
- `generateSKU(productName)` → auto-generates SKU like `MDF-0032`
- `debounce(fn, delay)` → used for live search inputs to avoid firing on every keystroke

---

### `assets/css/main.css` — Global Styles
- CSS custom properties (variables): `--primary`, `--accent`, `--bg`, `--text`, `--border`, `--danger`, `--success`, `--warning`
- Base reset and typography
- Layout grid: sidebar (fixed 240px) + main content area (fluid)
- Responsive breakpoints for tablet and mobile

---

### `assets/css/components.css` — UI Components
- `.btn`, `.btn-primary`, `.btn-danger`, `.btn-ghost` — button variants
- `.card` — white rounded container with shadow
- `.badge`, `.badge-success`, `.badge-warning`, `.badge-danger` — status pills
- `.table-base` — clean table styles with hover rows
- `.form-group`, `.form-input`, `.form-select` — form element styles
- `.modal-overlay`, `.modal-box` — modal styles
- `.toast` — slide-in notification styles

---

## 7. Page-by-Page Breakdown

---

### `pages/login.html` ✅ PROTOTYPE
**Purpose:** First impression. Must look professional and clean.

**Elements:**
- Centered card layout with company logo placeholder
- Email and password inputs
- Login button → calls `auth.js → loginUser()`
- Demo hint text: *"Try: admin@factory.demo / admin123"*
- Error message area below form (hidden until failed login)

**Behavior:**
- Successful login → store session, redirect to dashboard
- Failed login → show inline error: *"Invalid email or password"*
- Already logged in (session exists) → skip login, go directly to dashboard

---

### `pages/dashboard.html` ✅ PROTOTYPE
**Purpose:** Owner's control room. High-level snapshot of the entire operation at a glance.

**KPI Cards (top row, 4 cards):**
- Total Products in Stock (links to inventory)
- Active Work Orders (links to production)
- Low Stock Alerts — count of products below reorder level (links to inventory filtered)
- Employees Present Today (links to attendance)

**Charts (middle section):**
- Bar chart: Production output by day this week (Mon–Sun) using Chart.js
- Donut chart: Inventory health — In Stock / Low Stock / Out of Stock breakdown

**Recent Activity Feed (bottom left):**
- Last 8 entries from `mockdata.activityFeed[]`
- Each entry: role badge, action text, timestamp
- e.g. *"Manager — Added 50 units of MDF Board — 2 hrs ago"*

**Pending Alerts Panel (bottom right):**
- Low stock items list (top 3)
- Overdue work orders (top 3)
- Udhaar reminders — customers with pending balance (top 2)

**Quick Actions:**
- `+ Add Product` → `inventory/add-product.html`
- `+ New Work Order` → `production/index.html`
- `+ New Sale` → `sales/pos.html`

---

### `pages/inventory/index.html` ✅ PROTOTYPE
**Purpose:** Complete view of all products with live filtering and stock status.

**Elements:**
- Live search bar (filters table as user types using `utils.js → debounce()`)
- Filter dropdowns: Category, Stock Status (All / In Stock / Low / Out of Stock)
- Product table: SKU | Name | Category | Unit | Stock | Reorder Level | Status | Actions
- Status badges: green In Stock, yellow Low Stock, red Out of Stock
- Low stock rows highlighted with light yellow background
- `+ Add Product` button (top right)
- Pagination — 10 rows per page

**Behavior:**
- Clicking product name → opens `add-product.html` in edit mode with pre-filled data
- Delete → confirmation modal → removes from `mockdata.products[]`
- Staff role → Actions column hidden, view only
- Manager/Admin → full edit and delete access

---

### `pages/inventory/add-product.html` ✅ PROTOTYPE
**Purpose:** Create new or edit existing product.

**Fields:**
- Product Name (required)
- SKU (auto-generated via `utils.js → generateSKU()`, editable)
- Category (dropdown from `mockdata.categories[]`)
- Subcategory (dynamic — updates based on category selected)
- Unit (dropdown: kg, pcs, liters, meters, box, carton)
- Current Stock (number, required)
- Reorder Level (number — low stock alert triggers below this value)
- Description (textarea, optional)

**Behavior:**
- Save → push to `mockdata.products[]`, success toast, redirect to inventory list
- Edit mode → pre-fills all fields from selected product
- Validation: required fields show inline red error if empty on submit
- Cancel → return to inventory list without saving

---

### `pages/inventory/categories.html` ✅ PROTOTYPE
**Purpose:** Manage the category taxonomy used across inventory and reports.

**Layout:** Two-column — Categories list (left), Subcategories of selected (right)

**Behavior:**
- Click category on left → subcategories load dynamically on right
- Add new category via inline input
- Add subcategory under selected parent
- Delete category → blocked if products are assigned, shows warning modal
- Source data for Category dropdown in `add-product.html`

---

### `pages/production/kanban.html` ✅ PROTOTYPE
**Purpose:** Visual showstopper. Real-time view of all work orders across production stages. This is the screen that closes deals in a demo.

**Columns (hardcoded for prototype, configurable per client in full product):**
Pending → Raw Material Issued → Cutting → Assembly → QC Check → Packed → Completed

**Each Card displays:**
- Work Order number (e.g. WO-017)
- Product name and quantity
- Assigned department
- Due date — red text if overdue

**Behavior:**
- Cards are draggable across columns via vanilla JS drag-and-drop API
- Drop into new column → updates status in `mockdata.workOrders[]`
- Column headers show live count (e.g. *"Assembly (4)"*)
- Click card → detail modal: full work order info, materials used, assigned staff
- Staff role → can only drag cards in their own department's column
- Manager/Admin → can drag anywhere

---

### `pages/production/index.html` ✅ PROTOTYPE
**Purpose:** List/table view of all work orders for managers who prefer structured list over visual Kanban.

**Columns:** WO Number | Product | Qty | Status | Assigned To | Start Date | Due Date | Actions

**Behavior:**
- Filter by status: All / Pending / In Progress / Completed
- `+ New Work Order` button → opens modal form: select product, qty, assign department, set due date
- Creating a new WO → adds to both this list and Kanban board via shared `mockdata.workOrders[]`
- Delete WO → confirmation modal

---

### `pages/production/bom.html` ✅ PROTOTYPE
**Purpose:** Define what raw materials are consumed to produce one unit of a finished product.

**Layout:** Product selector (left) → BOM table for selected product (right)

**BOM Table columns:** Material Name | Qty Per Unit | Unit | Available Stock | Sufficient?

**Behavior:**
- Add/edit/remove material rows per product
- `Calculate Required Stock` button → user enters target production qty → system checks `mockdata.products[]` stock levels → highlights insufficient materials in red
- Sufficient materials → green check, insufficient → red warning with shortfall amount

---

### `pages/production/wastage.html` ✅ PROTOTYPE
**Purpose:** Quick entry form for logging rejected or damaged materials. Feeds into the money-lost report which is one of the strongest selling points.

**Fields:**
- Product / Material (dropdown from mockdata)
- Quantity Wasted (number)
- Production Stage (dropdown of Kanban stages)
- Reason (dropdown: Damaged, Wrong Dimensions, Operator Error, Machine Fault, Other)
- Notes (optional)
- Date (auto-filled today, editable)

**Behavior:**
- Submit → push to `mockdata.wastageLog[]`, success toast
- Running total banner at top: *"Total wastage this month: 34 units — Est. ₹12,400 lost"*
- Recent wastage log table below form (last 10 entries)

---

### `pages/purchase/index.html` ⚠️ PARTIAL
**Purpose:** Overview of all suppliers and purchase orders. Shows the owner that procurement is tracked.

**Two tabs:**

**Suppliers Tab:**
- Table: Supplier Name | Contact | Category | Total Orders | Last Order Date | Actions
- `+ Add Supplier` button → `add-supplier.html`

**Purchase Orders Tab:**
- Table: PO Number | Supplier | Items | Total Value | Status (Pending/Received/Cancelled) | Date
- Status badges color coded
- `+ New PO` button → static modal form (no real logic in prototype)

**Behavior:**
- Data from `mockdata.suppliers[]` and `mockdata.purchaseOrders[]`
- Filter POs by status
- Clicking PO row → detail modal with item list

---

### `pages/purchase/add-supplier.html` ⚠️ PARTIAL
**Purpose:** Add or edit a supplier profile.

**Fields:**
- Supplier Name, Contact Person, Phone, Email
- Address
- Product Categories Supplied (multi-select tags)
- GST Number (optional)
- Notes

**Behavior:**
- Save → push to `mockdata.suppliers[]`, success toast
- Edit mode → pre-fills from selected supplier

---

### `pages/purchase/grn.html` ⚠️ PARTIAL
**Purpose:** Goods Received Note — log what actually arrived from a supplier against a PO.

**Fields:**
- Select Purchase Order (dropdown of pending POs)
- For each item in PO: Ordered Qty (pre-filled) | Received Qty (editable) | Condition (Good/Damaged)
- Received Date (auto-filled)
- Notes

**Behavior:**
- On submit → prototype shows success toast and marks PO as Received in mockdata
- In full product: this would automatically update inventory stock levels
- Discrepancy (ordered vs received) highlighted in yellow

---

### `pages/sales/pos.html` ⚠️ PARTIAL
**Purpose:** One-screen fast billing interface. Designed for speed — minimum clicks from product search to invoice.

**Layout:** Split screen — Product search/add (left) | Cart & billing (right)

**Left Panel:**
- Search bar: type 2–3 letters to filter products live
- Product grid cards: Name, Price, Stock
- Click product → adds to cart

**Right Panel (Cart):**
- Line items: Product | Qty (editable) | Unit Price | Discount | Line Total
- Remove item button per line
- Subtotal, Discount, GST (18% default), Grand Total
- Payment mode selector: Cash / UPI / Card (UI only, no real gateway)
- `Generate Invoice` button → shows invoice modal with print/download placeholder
- `Send on WhatsApp` button → placeholder, labelled "Coming Soon"

**Behavior:**
- All product data from `mockdata.products[]`
- Cart state held in `state.js → tempFormData`
- Invoice modal shows formatted bill with business details from settings

---

### `pages/sales/invoices.html` ⚠️ PARTIAL
**Purpose:** Full history of all generated invoices.

**Columns:** Invoice No | Customer | Date | Amount | Payment Mode | Status (Paid/Pending) | Actions

**Behavior:**
- Filter by date range and status
- Click invoice row → detail modal with full line items
- Download button → placeholder toast: *"PDF export available in full version"*
- Data from `mockdata.invoices[]`

---

### `pages/sales/returns.html` ⚠️ PARTIAL
**Purpose:** Log sales returns (customer returns product) and purchase returns (returning to supplier).

**Two tabs: Sales Returns | Purchase Returns**

**Sales Returns Fields:**
- Select Invoice (dropdown)
- Product (auto-filled from invoice)
- Return Qty, Reason (Defective / Wrong Item / Customer Changed Mind)
- Refund Mode (Cash / UPI / Credit Note)

**Purchase Returns Fields:**
- Select Supplier, Product, Qty, Reason, Date

**Behavior:**
- Submit → adds to respective returns array in mockdata, success toast
- Returns log table below form showing recent entries
- In full product: would adjust inventory and financials automatically

---

### `pages/customers/index.html` ⚠️ PARTIAL
**Purpose:** Directory of all customers with quick view of balance and activity.

**Columns:** Name | Phone | Total Purchases | Outstanding Udhaar | Last Purchase | Actions

**Behavior:**
- Live search by name or phone
- Udhaar balance shown in red if > 0
- `+ Add Customer` button → inline modal form (Name, Phone, Address, Credit Limit)
- Click customer name → `profile.html`
- Data from `mockdata.customers[]`

---

### `pages/customers/profile.html` ⚠️ PARTIAL
**Purpose:** Individual customer detail page. Shows full history and outstanding balance.

**Sections:**
- Customer info card: Name, Phone, Address, Credit Limit
- Purchase History table: Date | Invoice No | Amount | Payment Mode | Status
- Udhaar Ledger: Running balance of credit given and payments received
- `Record Payment` button → modal to log a payment against outstanding udhaar

**Behavior:**
- All data from `mockdata.customers[]` filtered by customer ID
- Udhaar balance auto-calculated from ledger entries
- Payment recording → updates balance in mockdata

---

### `pages/orders/index.html` ⚠️ PARTIAL
**Purpose:** Track all outgoing orders from placement to delivery. Gives supervisor live status without walking the floor.

**Order Status Pipeline (visual progress bar per order):**
Order Placed → Packed → Dispatched → Out for Delivery → Delivered

**Columns:** Order ID | Customer | Items | Assigned Staff | Status | Est. Delivery | Actions

**Behavior:**
- Filter by status
- Click order → detail modal: full item list, customer info, delivery address, assigned staff
- `Update Status` button → dropdown to move order to next stage
- Overdue orders (past est. delivery, not delivered) highlighted in red
- Data from `mockdata.orders[]`

---

### `pages/employees/index.html` ⚠️ PARTIAL
**Purpose:** Employee directory with role and department overview.

**Columns:** Name | Employee ID | Role | Department | Shift | Salary | Status | Actions

**Behavior:**
- Filter by department and status (Active/Inactive)
- `+ Add Employee` button → `add-employee.html`
- Click name → opens edit form pre-filled
- Deactivate employee → confirmation modal, marks as Inactive in mockdata

---

### `pages/employees/add-employee.html` ⚠️ PARTIAL
**Purpose:** Add or edit employee profile.

**Fields:**
- Full Name, Employee ID (auto-generated), Phone
- Role (dropdown: Floor Worker, Supervisor, Manager, Driver, Admin)
- Department (Production, QC, Dispatch, Inventory, HR)
- Shift (Morning / Evening / Night)
- Basic Salary (number)
- Join Date
- Notes

**Behavior:**
- Save → push to `mockdata.employees[]`, success toast
- Edit mode → pre-fills all fields

---

### `pages/employees/attendance.html` ⚠️ PARTIAL
**Purpose:** Daily attendance marking and leave tracking.

**Two tabs: Mark Attendance | Leave Requests**

**Mark Attendance Tab:**
- Date selector (defaults to today)
- Employee list with Present / Absent / Half Day / Leave toggle per row
- Bulk `Mark All Present` button
- Submit → saves to `mockdata.attendanceLog[]`

**Leave Requests Tab:**
- Table of pending leave requests: Employee | From | To | Reason | Status
- Approve / Reject buttons per row
- In prototype: status updates in mockdata only

---

### `pages/pricing/index.html` ⚠️ PARTIAL
**Purpose:** Manage product-wise pricing, bulk pricing tiers, and discount rules.

**Three tabs: Product Pricing | Bulk Rules | Discount Offers**

**Product Pricing Tab:**
- Table: Product | Base Price | Selling Price | Margin %
- Inline edit for prices

**Bulk Rules Tab:**
- Table: Product | Min Qty | Price Per Unit
- e.g. "MDF Board — above 100 units — ₹180/unit instead of ₹210"
- Add/edit/delete rules

**Discount Offers Tab:**
- Table: Offer Name | Type (Flat/%) | Value | Applies To | Valid Until | Active Toggle
- `+ Add Offer` button → modal form

**Behavior:**
- All data from `mockdata.pricingRules[]`
- Active discounts auto-apply in POS screen cart calculations

---

### `pages/reports/index.html` ✅ PROTOTYPE
**Purpose:** Boss-level summary. Designed for someone who checks once a day, not an analyst. Everything visual, nothing complex.

**Date Filter (top):** Today / This Week / This Month / Custom Range — all charts update accordingly

**Section 1 — Inventory Report:**
- Total SKUs, Low Stock count, Out of Stock count
- Bar chart: Top 10 products by stock value
- Table: Products needing reorder with current vs reorder level

**Section 2 — Production Report:**
- Work orders completed in period
- Bar chart: Output by day
- Stage bottleneck indicator — which stage has most WOs stuck
- Wastage summary: total units, estimated ₹ value lost, breakdown by department

**Section 3 — Sales Report:**
- Total revenue in period
- Line chart: Daily sales trend
- Top 5 products sold (by qty and by value)
- Payment mode breakdown donut chart (Cash / UPI / Card)

**Section 4 — Employee Report:**
- Attendance rate % for the period
- Leaves taken count
- Overtime hours (static mockdata)

**Export Row (bottom):**
- `Export PDF` and `Export Excel` buttons → both show tooltip: *"Available in full version"*

---

### `pages/settings/index.html` ✅ PROTOTYPE
**Purpose:** Makes the platform feel configurable and real. Mostly static in prototype.

**Sections:**

**Business Details:**
- Business Name, Address, Phone, Email
- Logo upload (preview renders in topbar and invoices)
- GST Number

**Invoice Settings:**
- Invoice prefix (e.g. INV-), starting number
- Footer note text (e.g. *"Thank you for your business"*)
- Preview button → shows sample invoice with current settings

**Notification Preferences:**
- Checkboxes: Low Stock Alert, Daily Summary, Order Updates, Payment Reminders
- Delivery method: Email / WhatsApp (WhatsApp labelled "Coming Soon")

**System:**
- Currency: INR (others show "Coming Soon" badge)
- Language: English (others show "Coming Soon" badge)
- `Clear Demo Data` button → resets all mockdata arrays to original state (useful during pitches)

**Behavior:**
- Save Settings → success toast, does not persist (prototype limitation)
- Logo upload → FileReader preview in topbar only

---

### `components/sidebar.html` — Navigation Sidebar
**Role-aware navigation loaded into every page**

**Admin sees:** Dashboard, Inventory, Production, Purchase, Sales, Customers, Orders, Employees, Pricing, Reports, Settings, Users

**Manager sees:** Dashboard, Inventory, Production, Purchase, Sales, Customers, Orders, Reports

**Staff sees:** Production (task view only), Attendance

**Elements:**
- Company logo + name at top (from settings)
- Nav links with icons, active state highlighted
- "Coming Soon" lock icon on Accounting, Multi-Branch, Integrations links
- User name + role badge at bottom
- Logout button → `auth.js → logoutUser()`

---

### `components/topbar.html` — Top Bar
- Current page title (set dynamically by each page)
- Search bar (static UI, no global search in prototype)
- Notification bell with hardcoded badge count of "3" → clicking shows dropdown of `mockdata.notifications[]`
- User avatar (initials-based) + name + role tag
- Breadcrumb trail below title (e.g. *Production > Kanban Board*)

---

### `components/modal.html` — Reusable Modal
- Overlay + centered box
- Title bar with close (×) button
- Body area — injected dynamically by `utils.js → openModal()`
- Footer area — confirm and cancel buttons (labels set by caller)
- ESC key and overlay click both close modal

---

### `components/toast.html` — Toast Notifications
- Fixed position bottom-right
- Slides in on `utils.js → showToast(message, type)`
- Types: success (green), warning (yellow), error (red)
- Auto-dismisses after 3 seconds
- Multiple toasts stack vertically

---

## 8. Modules Flagged "Coming Soon" in UI

These appear in sidebar with a lock icon and in settings/integrations with a "Coming Soon" badge. Mention them verbally during pitch as roadmap items:

| Module | Where Shown |
|---|---|
| Accounting & Finance (GST, Ledger, P&L) | Sidebar link — locked |
| Multi-Branch Management | Sidebar link — locked |
| WhatsApp API Integration | Settings → Notifications, POS send button |
| Payment Gateway (Razorpay) | POS payment modes |
| Barcode Scanner | Inventory, POS — placeholder icon |
| SMS / Email Alerts | Settings → Notifications |
| PDF / Excel Export | Reports page buttons |
| Security & Backup Settings | Settings → System section |

---

## 9. Known Prototype Limitations

| Limitation | Detail |
|---|---|
| No real backend | All data lives in `mockdata.js` in-memory. Page refresh resets most data. |
| No real authentication | Passwords are hardcoded strings. Not for production. |
| No data persistence | localStorage used for session only. Product and order changes reset on refresh. |
| No real API integrations | WhatsApp, Razorpay, barcode — all UI placeholders labelled "Coming Soon" |
| Export is disabled | PDF/Excel export shown but non-functional with tooltip explanation |
| No real-time sync | No websockets. Data is static unless user action triggers mockdata update. |
| GST calculations are approximate | Tax logic in POS uses flat 18%, not real HSN-based GST |

---

## 10. Post-Prototype Build Roadmap

| Phase | Modules Built | Est. Duration |
|---|---|---|
| Phase 1 — Foundation | Auth system, RBAC, DB schema, multi-tenancy (tenant_id), hosting setup | 2–3 weeks |
| Phase 2 — Core Operations | Inventory, Production/WIP/Kanban, Dashboard, Notifications | 3–4 weeks |
| Phase 3 — Commerce Layer | Purchase Management, Sales & POS, Invoice generation, Customer Management | 3–4 weeks |
| Phase 4 — People | Employee profiles, Attendance, Leave management, basic Payroll | 2–3 weeks |
| Phase 5 — Intelligence | Reports engine, Wastage analytics, AI monitoring, Telegram/WhatsApp alerts | 2–3 weeks |
| Phase 6 — Integrations | Razorpay, WhatsApp Business API, Barcode, GST filing API | Ongoing |
| Phase 7 — Scale | Multi-branch, Advanced RBAC, Audit logs, Data backup, Encryption | Post 5 clients |

Each phase is client-funded. Prototype approval triggers Phase 1 billing.

---

*Document v0.2 — All 18 modules acknowledged. Prototype covers 6 fully, 10 partially, 2 deferred to full product.*
