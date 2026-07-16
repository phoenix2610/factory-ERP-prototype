# SRS — B2B Pivoted Scope & Folder Layout

**Project:** Factory ERP (Modular SaaS)  
**Document Type:** Business Pivot & Architecture Specification  
**Target Market:** Indian MSMEs (Ahmedabad Industrial Clusters: GIDC Vatva, Narol, Odhav)

---

## 1. The Core Pivot: Why B2B Invoicing Over B2C POS

The original prototype included a Point-of-Sale (POS) interface. Based on direct user-need analysis of MSME manufacturing units, **a consumer-facing POS is a mismatch**. 

### The B2B Wholesale Reality:
1. **No Walk-ins:** Factories do not process retail checkout queues. They sell in bulk to distributors, retail brands, or other manufacturers.
2. **Quotation Cycle:** Sales begin with a **Request for Quote (RFQ)**. Factory owners manually compute raw material costs (using the BOM) and markup before sending a quotation. This step was missing from the POS flow.
3. **Credit (Udhaar) is King:** Transactions are rarely settled in cash at dispatch. Buyers pay via bank transfer or cheque 30, 60, or 90 days after delivery. The ERP must track **Outstanding Receivables (Aging Ledgers)**, not point-of-sale cash registers.

---

## 2. Updated Project Directory Structure

Below is the proposed folder structure optimized for a B2B factory workflow. The POS module is removed, and a dedicated `sales` submodule handles **Quotations, Invoices, and Returns**.

```
factory-erp-prototype/
│
├── index.html                  # Main entry point (session routing)
│
├── assets/                     # Core assets
│   ├── css/
│   │   ├── main.css            # Layout and base variables
│   │   ├── sidebar.css         # Collapsible sidebar styling
│   │   └── components.css      # Table, badge, card, and modal design
│   └── js/
│       ├── auth.js             # RBAC and session checks
│       ├── mockdata.js         # Central mock database (Invoices, Products, BOM)
│       ├── router.js           # Navigation link injection and RBAC hiding
│       ├── state.js            # In-memory global state
│       └── utils.js            # Currency & date formatting, modals, toasts
│
├── components/                 # Reusable UI shells
│   ├── sidebar.html            # Sidebar navigation (B2B links)
│   ├── topbar.html             # Topbar (page title, notifications, user)
│   ├── modal.html              # Modal window backdrop and box
│   └── toast.html              # Success/Warning popup stacker
│
├── pages/
│   ├── dashboard.html          # Owner control room (KPIs, Wastage, Udhaar alerts)
│   ├── login.html              # Auth portal (admin/manager/staff credentials)
│   ├── returns.html            # [MERGED] Sales and Purchase returns manager
│   │
│   ├── inventory/              # Raw Materials & Finished Goods inventory
│   │   ├── index.html          # Inventory list with low-stock alerts
│   │   ├── add-product.html    # Product creation (with SKU auto-generator)
│   │   └── categories.html     # Category & subcategory taxonomy
│   │
│   ├── production/             # Production floor management
│   │   ├── kanban.html         # Visual work-order tracking (Pending -> Completed)
│   │   ├── index.html          # Work order list view
│   │   ├── bom.html            # Bill of Materials (BOM) & feasibility check
│   │   └── wastage.html        # Material waste logger (Muda categories)
│   │
│   ├── purchase/               # Supplier procurement flow
│   │   ├── index.html          # Suppliers directory & Purchase Order ledger
│   │   ├── add-supplier.html   # Supplier onboarding details (GST/Categories)
│   │   └── grn.html            # Goods Received Note (updates raw material stock)
│   │
│   ├── sales/                  # Wholesale client transactions
│   │   ├── quotations.html     # [NEW] RFQ / Quotation generator (BOM margin-checked)
│   │   └── invoices.html       # [NEW] Invoices ledger & Udhaar credit aging tracker
│   │
│   ├── customers/              # Wholesalers & Distributors directory
│   │   ├── index.html          # Customer list with outstanding credit indicators
│   │   └── profile.html        # Customer profile, ledger statement, record payment
│   │
│   ├── orders/                 # Shipment tracking
│   │   └── index.html          # Dispatch status pipeline (Placed -> Delivered)
│   │
│   ├── employees/              # Factory floor staff database
│   │   ├── index.html          # Active/Inactive employee records
│   │   ├── add-employee.html   # Onboarding (salary, department, shift)
│   │   └── attendance.html     # QR/manual attendance log and leave requests
│   │
│   ├── pricing/                # Dynamic costing and customer special pricing
│   │   └── index.html          # Margin calculation & bulk discounting rules
│   │
│   ├── reports/                # Factory performance reports
│   │   └── index.html          # Revenue, production wastage, & staff reports
│   │
│   └── settings/               # Factory profile customization
│       └── index.html          # Business name, GST details, notification configs
│
└── docs/
    ├── srs-prototype.md        # Original legacy specifications
    └── srs_pivoted_scope.md    # [THIS FILE] New B2B specifications
```

---

## 3. Specification of the Pivoted B2B Modules

### A. Sales Quotation Generator (`pages/sales/quotations.html`)
*   **Purpose:** Allows the owner or sales manager to quickly create a quotation/proforma invoice for a B2B inquiry.
*   **Dynamic Margin Check:** When items are added, the system fetches their current **BOM Cost** + **Overhead Markup** and compares it against the proposed quote price.
    *   *Green Alert:* Profit margins are healthy ($\ge 25\%$).
    *   *Red Alert:* Quotation price falls below raw material BOM cost. It blocks the quotation or triggers an admin override.
*   **Export Flow:** Formats quotes into standard proforma templates with GST breakdowns ready to export or share via WhatsApp Business.

### B. Invoices Ledger & Credit Aging Tracker (`pages/sales/invoices.html`)
*   **Purpose:** Replaces the POS checkout logs with a comprehensive invoice management board.
*   **Udhaar Tracking:** Tracks invoice statuses (`Paid`, `Partially Paid`, `Unpaid`).
*   **Aging Receivable Report:** Categorizes outstanding balances by age:
    *   `0–30 days` (Healthy credit)
    *   `31–60 days` (Needs follow-up)
    *   `60+ days` (Overdue - blocks new orders for the customer)
*   **WhatsApp Reminders:** Interface buttons to send pre-templated outstanding payment reminders to client numbers.
