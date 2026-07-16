/**
 * mockdata.js — Complete Fake Database
 * Factory ERP Prototype
 * Claude A — Foundation Layer
 *
 * All data stored as raw numbers (no formatting).
 * Use formatCurrency() and formatDate() from utils.js for display.
 * Indian business names, +91 phone numbers, realistic INR pricing.
 */

const MockData = {

  // ─── Products (20 items) ──────────────────────────────────────────────────

  products: [
    { id: 1,  sku: 'MDF-2401', name: 'MDF Board 8mm',         category: 'Raw Material', subcategory: 'Wood',    unit: 'sheet',  stock: 45,  reorderLevel: 20, price: 850,   description: 'Medium density fibreboard, 8x4 ft, 8mm thick' },
    { id: 2,  sku: 'PLY-1201', name: 'Plywood 12mm',          category: 'Raw Material', subcategory: 'Wood',    unit: 'sheet',  stock: 18,  reorderLevel: 25, price: 1200,  description: 'Commercial grade plywood, 8x4 ft, 12mm' },
    { id: 3,  sku: 'STL-0601', name: 'Steel Tube 25mm',       category: 'Raw Material', subcategory: 'Metal',   unit: 'meter',  stock: 120, reorderLevel: 40, price: 210,   description: 'Square steel tube, 25x25mm, 2mm thick' },
    { id: 4,  sku: 'FAB-0501', name: 'Foam Padding 50mm',     category: 'Raw Material', subcategory: 'Fabric',  unit: 'kg',     stock: 8,   reorderLevel: 15, price: 380,   description: 'High-density polyurethane foam' },
    { id: 5,  sku: 'FAB-1001', name: 'Upholstery Fabric',     category: 'Raw Material', subcategory: 'Fabric',  unit: 'meter',  stock: 65,  reorderLevel: 30, price: 240,   description: 'Heavy duty polyester blend, 60 inch width' },
    { id: 6,  sku: 'HRD-0301', name: 'Drawer Slides 18"',     category: 'Hardware',     subcategory: 'Slides',  unit: 'pair',   stock: 200, reorderLevel: 50, price: 185,   description: 'Full extension soft-close drawer slides' },
    { id: 7,  sku: 'HRD-0201', name: 'Cabinet Hinges',        category: 'Hardware',     subcategory: 'Hinges',  unit: 'piece',  stock: 500, reorderLevel: 100, price: 35,   description: 'Concealed cup hinges, 35mm' },
    { id: 8,  sku: 'HRD-0101', name: 'Wood Screws 2.5"',      category: 'Hardware',     subcategory: 'Fasteners', unit: 'box', stock: 30,  reorderLevel: 10, price: 320,   description: 'Self-tapping wood screws, box of 200' },
    { id: 9,  sku: 'FIN-0701', name: 'PU Lacquer 1L',         category: 'Finish',       subcategory: 'Lacquer', unit: 'liter',  stock: 22,  reorderLevel: 10, price: 680,   description: 'Polyurethane lacquer, clear gloss finish' },
    { id: 10, sku: 'FIN-0802', name: 'Wood Primer 5L',        category: 'Finish',       subcategory: 'Primer',  unit: 'can',    stock: 14,  reorderLevel: 8,  price: 920,   description: 'White wood primer, 5 litre can' },
    { id: 11, sku: 'FG-1501',  name: 'Office Chair',          category: 'Finished Good', subcategory: 'Seating', unit: 'piece', stock: 12,  reorderLevel: 5,  price: 4800,  description: 'Ergonomic office chair with mesh back' },
    { id: 12, sku: 'FG-1502',  name: 'Executive Table 6ft',   category: 'Finished Good', subcategory: 'Tables',  unit: 'piece', stock: 4,   reorderLevel: 3,  price: 18500, description: '6ft executive desk, MDF top, steel legs' },
    { id: 13, sku: 'FG-1503',  name: 'Wardrobe 3-Door',       category: 'Finished Good', subcategory: 'Storage', unit: 'piece', stock: 6,   reorderLevel: 2,  price: 22000, description: '3-door wardrobe with mirror, MDF carcass' },
    { id: 14, sku: 'FG-1504',  name: 'Bookshelf 5-Tier',      category: 'Finished Good', subcategory: 'Storage', unit: 'piece', stock: 9,   reorderLevel: 4,  price: 7200,  description: '5-tier open bookshelf, natural finish' },
    { id: 15, sku: 'FG-1505',  name: 'Dining Table 4-Seater', category: 'Finished Good', subcategory: 'Tables',  unit: 'piece', stock: 3,   reorderLevel: 2,  price: 14500, description: 'Solid wood dining table, seats 4' },
    { id: 16, sku: 'PKG-0201', name: 'Bubble Wrap Roll',      category: 'Packaging',    subcategory: 'Wrapping', unit: 'roll',  stock: 18,  reorderLevel: 6,  price: 850,   description: '1m x 100m bubble wrap roll' },
    { id: 17, sku: 'PKG-0101', name: 'Corrugated Box L',      category: 'Packaging',    subcategory: 'Boxes',   unit: 'piece',  stock: 75,  reorderLevel: 30, price: 65,    description: 'Large corrugated carton, 24x18x18 inches' },
    { id: 18, sku: 'STL-1201', name: 'MS Sheet 2mm',          category: 'Raw Material', subcategory: 'Metal',   unit: 'sheet',  stock: 0,   reorderLevel: 10, price: 2400,  description: 'Mild steel sheet, 8x4 ft, 2mm gauge' },
    { id: 19, sku: 'FAB-0301', name: 'Velvet Fabric',         category: 'Raw Material', subcategory: 'Fabric',  unit: 'meter',  stock: 7,   reorderLevel: 20, price: 450,   description: 'Premium velvet upholstery fabric, 54" wide' },
    { id: 20, sku: 'HRD-0501', name: 'Gas Lift Cylinder',     category: 'Hardware',     subcategory: 'Chair Parts', unit: 'piece', stock: 35, reorderLevel: 15, price: 420, description: 'Pneumatic gas lift for office chairs, class 3' }
  ],

  // ─── Categories (6 items) ─────────────────────────────────────────────────

  categories: [
    { id: 1, name: 'Raw Material',   subcategories: ['Wood', 'Metal', 'Plastic', 'Fabric', 'Rubber'] },
    { id: 2, name: 'Hardware',       subcategories: ['Hinges', 'Slides', 'Fasteners', 'Locks', 'Chair Parts'] },
    { id: 3, name: 'Finish',         subcategories: ['Lacquer', 'Primer', 'Paint', 'Varnish', 'Stain'] },
    { id: 4, name: 'Finished Good',  subcategories: ['Seating', 'Tables', 'Storage', 'Beds', 'Outdoor'] },
    { id: 5, name: 'Packaging',      subcategories: ['Boxes', 'Wrapping', 'Tape', 'Labels', 'Strapping'] },
    { id: 6, name: 'Tools & Consumables', subcategories: ['Abrasives', 'Blades', 'Drill Bits', 'Clamps', 'Safety'] }
  ],

  // ─── Work Orders (15 items) ───────────────────────────────────────────────

  workOrders: [
    { id: 1,  woNumber: 'WO-001', productId: 11, productName: 'Office Chair',          quantity: 20, status: 'completed',    assignedDept: 'Production Floor A', startDate: '2024-01-08', dueDate: '2024-01-15', createdBy: 'Manager User' },
    { id: 2,  woNumber: 'WO-002', productId: 12, productName: 'Executive Table 6ft',   quantity: 5,  status: 'packed',       assignedDept: 'Production Floor B', startDate: '2024-01-10', dueDate: '2024-01-20', createdBy: 'Manager User' },
    { id: 3,  woNumber: 'WO-003', productId: 13, productName: 'Wardrobe 3-Door',        quantity: 8,  status: 'qc',           assignedDept: 'Production Floor A', startDate: '2024-01-12', dueDate: '2024-01-22', createdBy: 'Admin User' },
    { id: 4,  woNumber: 'WO-004', productId: 14, productName: 'Bookshelf 5-Tier',       quantity: 15, status: 'assembly',     assignedDept: 'Production Floor C', startDate: '2024-01-13', dueDate: '2024-01-21', createdBy: 'Manager User' },
    { id: 5,  woNumber: 'WO-005', productId: 15, productName: 'Dining Table 4-Seater',  quantity: 4,  status: 'cutting',      assignedDept: 'Production Floor B', startDate: '2024-01-14', dueDate: '2024-01-23', createdBy: 'Admin User' },
    { id: 6,  woNumber: 'WO-006', productId: 11, productName: 'Office Chair',           quantity: 30, status: 'raw-issued',   assignedDept: 'Production Floor A', startDate: '2024-01-15', dueDate: '2024-01-25', createdBy: 'Manager User' },
    { id: 7,  woNumber: 'WO-007', productId: 12, productName: 'Executive Table 6ft',    quantity: 3,  status: 'pending',      assignedDept: 'Production Floor B', startDate: '2024-01-16', dueDate: '2024-01-26', createdBy: 'Admin User' },
    { id: 8,  woNumber: 'WO-008', productId: 13, productName: 'Wardrobe 3-Door',         quantity: 6,  status: 'pending',      assignedDept: 'Production Floor A', startDate: '2024-01-16', dueDate: '2024-01-28', createdBy: 'Manager User' },
    { id: 9,  woNumber: 'WO-009', productId: 14, productName: 'Bookshelf 5-Tier',        quantity: 10, status: 'cutting',      assignedDept: 'Production Floor C', startDate: '2024-01-15', dueDate: '2024-01-24', createdBy: 'Manager User' },
    { id: 10, woNumber: 'WO-010', productId: 15, productName: 'Dining Table 4-Seater',   quantity: 6,  status: 'qc',           assignedDept: 'Production Floor B', startDate: '2024-01-11', dueDate: '2024-01-19', createdBy: 'Admin User' },
    { id: 11, woNumber: 'WO-011', productId: 11, productName: 'Office Chair',            quantity: 25, status: 'completed',    assignedDept: 'Production Floor A', startDate: '2024-01-05', dueDate: '2024-01-12', createdBy: 'Manager User' },
    { id: 12, woNumber: 'WO-012', productId: 12, productName: 'Executive Table 6ft',     quantity: 4,  status: 'assembly',     assignedDept: 'Production Floor B', startDate: '2024-01-14', dueDate: '2024-01-22', createdBy: 'Admin User' },
    { id: 13, woNumber: 'WO-013', productId: 13, productName: 'Wardrobe 3-Door',          quantity: 5,  status: 'packed',       assignedDept: 'Production Floor A', startDate: '2024-01-12', dueDate: '2024-01-20', createdBy: 'Manager User' },
    { id: 14, woNumber: 'WO-014', productId: 14, productName: 'Bookshelf 5-Tier',         quantity: 12, status: 'raw-issued',   assignedDept: 'Production Floor C', startDate: '2024-01-15', dueDate: '2024-01-25', createdBy: 'Admin User' },
    { id: 15, woNumber: 'WO-015', productId: 15, productName: 'Dining Table 4-Seater',    quantity: 8,  status: 'completed',    assignedDept: 'Production Floor B', startDate: '2024-01-08', dueDate: '2024-01-16', createdBy: 'Manager User' }
  ],

  // ─── BOM Entries (5 items) ────────────────────────────────────────────────

  bomEntries: [
    {
      id: 1, productId: 11, productName: 'Office Chair',
      materials: [
        { materialId: 3,  materialName: 'Steel Tube 25mm',   qtyPerUnit: 4,   unit: 'meter' },
        { materialId: 4,  materialName: 'Foam Padding 50mm', qtyPerUnit: 0.8, unit: 'kg'    },
        { materialId: 5,  materialName: 'Upholstery Fabric', qtyPerUnit: 1.5, unit: 'meter' },
        { materialId: 20, materialName: 'Gas Lift Cylinder', qtyPerUnit: 1,   unit: 'piece' },
        { materialId: 7,  materialName: 'Cabinet Hinges',    qtyPerUnit: 2,   unit: 'piece' }
      ]
    },
    {
      id: 2, productId: 12, productName: 'Executive Table 6ft',
      materials: [
        { materialId: 1,  materialName: 'MDF Board 8mm',   qtyPerUnit: 3,   unit: 'sheet' },
        { materialId: 3,  materialName: 'Steel Tube 25mm', qtyPerUnit: 6,   unit: 'meter' },
        { materialId: 9,  materialName: 'PU Lacquer 1L',   qtyPerUnit: 0.5, unit: 'liter' },
        { materialId: 10, materialName: 'Wood Primer 5L',  qtyPerUnit: 0.2, unit: 'can'   },
        { materialId: 8,  materialName: 'Wood Screws 2.5"', qtyPerUnit: 0.5, unit: 'box'  }
      ]
    },
    {
      id: 3, productId: 13, productName: 'Wardrobe 3-Door',
      materials: [
        { materialId: 2,  materialName: 'Plywood 12mm',     qtyPerUnit: 8,   unit: 'sheet' },
        { materialId: 1,  materialName: 'MDF Board 8mm',    qtyPerUnit: 4,   unit: 'sheet' },
        { materialId: 6,  materialName: 'Drawer Slides 18"', qtyPerUnit: 4,  unit: 'pair'  },
        { materialId: 7,  materialName: 'Cabinet Hinges',   qtyPerUnit: 12,  unit: 'piece' },
        { materialId: 9,  materialName: 'PU Lacquer 1L',    qtyPerUnit: 1,   unit: 'liter' }
      ]
    },
    {
      id: 4, productId: 14, productName: 'Bookshelf 5-Tier',
      materials: [
        { materialId: 2,  materialName: 'Plywood 12mm',    qtyPerUnit: 3,   unit: 'sheet' },
        { materialId: 8,  materialName: 'Wood Screws 2.5"', qtyPerUnit: 0.3, unit: 'box'  },
        { materialId: 10, materialName: 'Wood Primer 5L',  qtyPerUnit: 0.1, unit: 'can'   },
        { materialId: 9,  materialName: 'PU Lacquer 1L',   qtyPerUnit: 0.3, unit: 'liter' }
      ]
    },
    {
      id: 5, productId: 15, productName: 'Dining Table 4-Seater',
      materials: [
        { materialId: 2,  materialName: 'Plywood 12mm',    qtyPerUnit: 4,   unit: 'sheet' },
        { materialId: 3,  materialName: 'Steel Tube 25mm', qtyPerUnit: 8,   unit: 'meter' },
        { materialId: 9,  materialName: 'PU Lacquer 1L',   qtyPerUnit: 0.8, unit: 'liter' },
        { materialId: 8,  materialName: 'Wood Screws 2.5"', qtyPerUnit: 0.5, unit: 'box'  }
      ]
    }
  ],

  // ─── Wastage Log (10 items) ───────────────────────────────────────────────

  wastageLog: [
    { id: 1,  productId: 2,  productName: 'Plywood 12mm',    quantity: 5,   unit: 'sheet',  stage: 'cutting',  reason: 'Wrong Dimensions',      department: 'Production Floor B', estimatedLoss: 6000,  date: '2024-01-18', notes: 'Operator set wrong fence measurement' },
    { id: 2,  productId: 1,  productName: 'MDF Board 8mm',   quantity: 3,   unit: 'sheet',  stage: 'cutting',  reason: 'Blade Breakage',         department: 'Production Floor A', estimatedLoss: 2550,  date: '2024-01-17', notes: 'Blade shattered mid-cut' },
    { id: 3,  productId: 4,  productName: 'Foam Padding 50mm', quantity: 4, unit: 'kg',     stage: 'assembly', reason: 'Defective Material',     department: 'Production Floor A', estimatedLoss: 1520,  date: '2024-01-16', notes: 'Batch had lumps, rejected by QC' },
    { id: 4,  productId: 9,  productName: 'PU Lacquer 1L',   quantity: 2,   unit: 'liter',  stage: 'finishing',reason: 'Spillage',               department: 'Finishing Section',  estimatedLoss: 1360,  date: '2024-01-15', notes: 'Container knocked during shift change' },
    { id: 5,  productId: 5,  productName: 'Upholstery Fabric', quantity: 6, unit: 'meter',  stage: 'cutting',  reason: 'Wrong Dimensions',      department: 'Production Floor C', estimatedLoss: 1440,  date: '2024-01-14', notes: 'Pattern misalignment' },
    { id: 6,  productId: 3,  productName: 'Steel Tube 25mm', quantity: 8,   unit: 'meter',  stage: 'cutting',  reason: 'Machine Malfunction',    department: 'Production Floor B', estimatedLoss: 1680,  date: '2024-01-13', notes: 'Band saw alignment was off' },
    { id: 7,  productId: 2,  productName: 'Plywood 12mm',    quantity: 2,   unit: 'sheet',  stage: 'assembly', reason: 'Worker Damage',          department: 'Production Floor A', estimatedLoss: 2400,  date: '2024-01-12', notes: 'Dropped during assembly' },
    { id: 8,  productId: 10, productName: 'Wood Primer 5L',  quantity: 1,   unit: 'can',    stage: 'finishing',reason: 'Quality Rejection',      department: 'Finishing Section',  estimatedLoss: 920,   date: '2024-01-11', notes: 'Batch was expired' },
    { id: 9,  productId: 1,  productName: 'MDF Board 8mm',   quantity: 4,   unit: 'sheet',  stage: 'qc',       reason: 'Moisture Damage',        department: 'QC Section',         estimatedLoss: 3400,  date: '2024-01-10', notes: 'Stored near window, got damp' },
    { id: 10, productId: 5,  productName: 'Upholstery Fabric', quantity: 3, unit: 'meter',  stage: 'assembly', reason: 'Defective Material',     department: 'Production Floor C', estimatedLoss: 720,   date: '2024-01-09', notes: 'Fabric had hidden tears' }
  ],

  // ─── Suppliers (8 items) ──────────────────────────────────────────────────

  suppliers: [
    { id: 1, name: 'ABC Timber Supplies',     contactPerson: 'Rajesh Kumar',    phone: '+91 98765 43210', email: 'rajesh@abctimber.com',      address: 'Industrial Area Phase 2, Bangalore', categories: ['Raw Material'], gst: '29ABCDE1234F1Z5', totalOrders: 24, lastOrderDate: '2024-01-10' },
    { id: 2, name: 'Shree Steel Traders',     contactPerson: 'Vikram Patel',    phone: '+91 97654 32109', email: 'vikram@shreesteel.com',      address: 'GIDC Vatva, Ahmedabad',              categories: ['Raw Material'], gst: '24FGHIJ5678K2Y6', totalOrders: 18, lastOrderDate: '2024-01-08' },
    { id: 3, name: 'National Hardware Hub',   contactPerson: 'Sunita Desai',    phone: '+91 96543 21098', email: 'sunita@nathardware.com',     address: 'Lamington Road, Mumbai',             categories: ['Hardware'],     gst: '27KLMNO9012L3X7', totalOrders: 32, lastOrderDate: '2024-01-12' },
    { id: 4, name: 'Deccan Foam Industries',  contactPerson: 'Mohan Reddy',     phone: '+91 95432 10987', email: 'mohan@deccanfoam.in',        address: 'Nacharam Industrial Estate, Hyderabad', categories: ['Raw Material'], gst: '36PQRST3456M4W8', totalOrders: 11, lastOrderDate: '2024-01-05' },
    { id: 5, name: 'Bharat Fabric Mart',      contactPerson: 'Priya Sharma',    phone: '+91 94321 09876', email: 'priya@bharatfabric.com',     address: 'Surat Textile Market, Surat',        categories: ['Raw Material'], gst: '24UVWXY7890N5V9', totalOrders: 15, lastOrderDate: '2024-01-09' },
    { id: 6, name: 'Colour Coat Paints',      contactPerson: 'Arvind Joshi',    phone: '+91 93210 98765', email: 'arvind@colourcoat.com',      address: 'MIDC Ambad, Nashik',                 categories: ['Finish'],       gst: '27ABCXY1234O6U0', totalOrders: 9,  lastOrderDate: '2024-01-07' },
    { id: 7, name: 'SafePack Solutions',      contactPerson: 'Deepa Nair',      phone: '+91 92109 87654', email: 'deepa@safepack.co.in',       address: 'Peenya Industrial Area, Bangalore',  categories: ['Packaging'],    gst: '29DEFGH5678P7T1', totalOrders: 21, lastOrderDate: '2024-01-11' },
    { id: 8, name: 'Mehta Ply & Boards',      contactPerson: 'Hardik Mehta',    phone: '+91 91098 76543', email: 'hardik@mehtaply.com',        address: 'Perambur Industrial Area, Chennai',  categories: ['Raw Material'], gst: '33IJKLM9012Q8S2', totalOrders: 27, lastOrderDate: '2024-01-13' }
  ],

  // ─── Purchase Orders (10 items) ───────────────────────────────────────────

  purchaseOrders: [
    { id: 1,  poNumber: 'PO-2024-001', supplierId: 1, supplierName: 'ABC Timber Supplies',   items: [{ productId: 1, productName: 'MDF Board 8mm',       quantity: 100, unitPrice: 820,  total: 82000  }], totalValue: 82000,  status: 'received',  orderDate: '2024-01-05', expectedDelivery: '2024-01-12' },
    { id: 2,  poNumber: 'PO-2024-002', supplierId: 2, supplierName: 'Shree Steel Traders',   items: [{ productId: 3, productName: 'Steel Tube 25mm',      quantity: 200, unitPrice: 195,  total: 39000  }], totalValue: 39000,  status: 'received',  orderDate: '2024-01-06', expectedDelivery: '2024-01-13' },
    { id: 3,  poNumber: 'PO-2024-003', supplierId: 3, supplierName: 'National Hardware Hub', items: [{ productId: 6, productName: 'Drawer Slides 18"',    quantity: 300, unitPrice: 170,  total: 51000  },  { productId: 7, productName: 'Cabinet Hinges', quantity: 1000, unitPrice: 30, total: 30000 }], totalValue: 81000,  status: 'received',  orderDate: '2024-01-07', expectedDelivery: '2024-01-14' },
    { id: 4,  poNumber: 'PO-2024-004', supplierId: 4, supplierName: 'Deccan Foam Industries',items: [{ productId: 4, productName: 'Foam Padding 50mm',    quantity: 50,  unitPrice: 360,  total: 18000  }], totalValue: 18000,  status: 'pending',   orderDate: '2024-01-14', expectedDelivery: '2024-01-21' },
    { id: 5,  poNumber: 'PO-2024-005', supplierId: 5, supplierName: 'Bharat Fabric Mart',    items: [{ productId: 5, productName: 'Upholstery Fabric',    quantity: 200, unitPrice: 225,  total: 45000  },  { productId: 19, productName: 'Velvet Fabric', quantity: 80, unitPrice: 430, total: 34400 }], totalValue: 79400,  status: 'pending',   orderDate: '2024-01-15', expectedDelivery: '2024-01-22' },
    { id: 6,  poNumber: 'PO-2024-006', supplierId: 8, supplierName: 'Mehta Ply & Boards',    items: [{ productId: 2, productName: 'Plywood 12mm',         quantity: 80,  unitPrice: 1150, total: 92000  }], totalValue: 92000,  status: 'received',  orderDate: '2024-01-08', expectedDelivery: '2024-01-15' },
    { id: 7,  poNumber: 'PO-2024-007', supplierId: 6, supplierName: 'Colour Coat Paints',    items: [{ productId: 9, productName: 'PU Lacquer 1L',        quantity: 40,  unitPrice: 650,  total: 26000  },  { productId: 10, productName: 'Wood Primer 5L', quantity: 20, unitPrice: 880, total: 17600 }], totalValue: 43600,  status: 'cancelled', orderDate: '2024-01-04', expectedDelivery: '2024-01-11' },
    { id: 8,  poNumber: 'PO-2024-008', supplierId: 7, supplierName: 'SafePack Solutions',    items: [{ productId: 16, productName: 'Bubble Wrap Roll',    quantity: 30,  unitPrice: 810,  total: 24300  },  { productId: 17, productName: 'Corrugated Box L', quantity: 500, unitPrice: 60, total: 30000 }], totalValue: 54300,  status: 'received',  orderDate: '2024-01-09', expectedDelivery: '2024-01-16' },
    { id: 9,  poNumber: 'PO-2024-009', supplierId: 2, supplierName: 'Shree Steel Traders',   items: [{ productId: 18, productName: 'MS Sheet 2mm',        quantity: 25,  unitPrice: 2300, total: 57500  }], totalValue: 57500,  status: 'pending',   orderDate: '2024-01-16', expectedDelivery: '2024-01-23' },
    { id: 10, poNumber: 'PO-2024-010', supplierId: 3, supplierName: 'National Hardware Hub', items: [{ productId: 20, productName: 'Gas Lift Cylinder',   quantity: 100, unitPrice: 400,  total: 40000  },  { productId: 8, productName: 'Wood Screws 2.5"', quantity: 50, unitPrice: 300, total: 15000 }], totalValue: 55000,  status: 'pending',   orderDate: '2024-01-16', expectedDelivery: '2024-01-24' }
  ],

  // ─── Customers (12 items) ─────────────────────────────────────────────────

  customers: [
    { id: 1,  name: 'Sharma Furniture Works',  phone: '+91 98001 11111', email: 'orders@sharmafurniture.com',  address: 'MG Road, Bangalore',              totalPurchases: 245000, udhaarBalance: 12000,  creditLimit: 50000, lastPurchase: '2024-01-15' },
    { id: 2,  name: 'Gupta Home Interiors',    phone: '+91 98002 22222', email: 'gupta.interiors@gmail.com',   address: 'Karol Bagh, New Delhi',           totalPurchases: 182000, udhaarBalance: 28500,  creditLimit: 40000, lastPurchase: '2024-01-14' },
    { id: 3,  name: 'Patel Office Solutions',  phone: '+91 98003 33333', email: 'purchase@pateloffice.com',    address: 'CG Road, Ahmedabad',              totalPurchases: 390000, udhaarBalance: 0,      creditLimit: 75000, lastPurchase: '2024-01-16' },
    { id: 4,  name: 'Reddy Contract Furnishers', phone: '+91 98004 44444', email: 'reddy.furnishers@yahoo.com', address: 'Banjara Hills, Hyderabad',       totalPurchases: 128000, udhaarBalance: 18000,  creditLimit: 30000, lastPurchase: '2024-01-12' },
    { id: 5,  name: 'Mehta Trading Co.',       phone: '+91 98005 55555', email: 'mehtatrading@hotmail.com',    address: 'Ring Road, Surat',                totalPurchases: 76000,  udhaarBalance: 5500,   creditLimit: 20000, lastPurchase: '2024-01-10' },
    { id: 6,  name: 'Nair Decor Studio',       phone: '+91 98006 66666', email: 'info@nairdecor.in',           address: 'Ernakulam, Kochi',                totalPurchases: 220000, udhaarBalance: 0,      creditLimit: 60000, lastPurchase: '2024-01-15' },
    { id: 7,  name: 'Joshi Bros Wholesale',    phone: '+91 98007 77777', email: 'joshibros@gmail.com',         address: 'APMC Market, Pune',               totalPurchases: 445000, udhaarBalance: 35000,  creditLimit: 80000, lastPurchase: '2024-01-13' },
    { id: 8,  name: 'Singh Builders & Dev.',   phone: '+91 98008 88888', email: 'purchase@singhbuilders.com',  address: 'Sector 63, Noida',                totalPurchases: 310000, udhaarBalance: 0,      creditLimit: 100000, lastPurchase: '2024-01-11' },
    { id: 9,  name: 'Bose Home Centre',        phone: '+91 98009 99999', email: 'bose.homecentre@gmail.com',   address: 'Salt Lake, Kolkata',              totalPurchases: 94000,  udhaarBalance: 8000,   creditLimit: 25000, lastPurchase: '2024-01-08' },
    { id: 10, name: 'Iyer & Sons Furniture',   phone: '+91 98010 10101', email: 'contact@iyerfurniture.com',   address: 'T Nagar, Chennai',                totalPurchases: 168000, udhaarBalance: 0,      creditLimit: 45000, lastPurchase: '2024-01-14' },
    { id: 11, name: 'Kulkarni Designs',        phone: '+91 98011 11222', email: 'kulkarni.designs@gmail.com',  address: 'FC Road, Pune',                   totalPurchases: 52000,  udhaarBalance: 3200,   creditLimit: 15000, lastPurchase: '2024-01-07' },
    { id: 12, name: 'Modern Living Exports',   phone: '+91 98012 22333', email: 'export@modernliving.co.in',   address: 'EPIP Zone, Bangalore',            totalPurchases: 620000, udhaarBalance: 0,      creditLimit: 150000, lastPurchase: '2024-01-16' }
  ],

  // ─── Orders (10 items) ────────────────────────────────────────────────────

  orders: [
    { id: 1,  orderId: 'ORD-001', customerId: 1,  customerName: 'Sharma Furniture Works',    phone: '+91 98001 11111', items: [{ productId: 11, productName: 'Office Chair',          qty: 10, price: 4800  }], status: 'Delivered',        assignedTo: 'Ramesh Kumar',  orderDate: '2024-01-08', estDelivery: '2024-01-12', address: 'MG Road, Bangalore' },
    { id: 2,  orderId: 'ORD-002', customerId: 3,  customerName: 'Patel Office Solutions',    phone: '+91 98003 33333', items: [{ productId: 12, productName: 'Executive Table 6ft', qty: 3,  price: 18500 }, { productId: 11, productName: 'Office Chair', qty: 6, price: 4800 }], status: 'Dispatched',       assignedTo: 'Suresh Patil',  orderDate: '2024-01-12', estDelivery: '2024-01-18', address: 'CG Road, Ahmedabad' },
    { id: 3,  orderId: 'ORD-003', customerId: 7,  customerName: 'Joshi Bros Wholesale',      phone: '+91 98007 77777', items: [{ productId: 14, productName: 'Bookshelf 5-Tier',    qty: 8,  price: 7200  }], status: 'Out for Delivery', assignedTo: 'Ajay Singh',    orderDate: '2024-01-13', estDelivery: '2024-01-17', address: 'APMC Market, Pune' },
    { id: 4,  orderId: 'ORD-004', customerId: 6,  customerName: 'Nair Decor Studio',         phone: '+91 98006 66666', items: [{ productId: 13, productName: 'Wardrobe 3-Door',      qty: 2,  price: 22000 }], status: 'Packed',           assignedTo: null,            orderDate: '2024-01-14', estDelivery: '2024-01-20', address: 'Ernakulam, Kochi' },
    { id: 5,  orderId: 'ORD-005', customerId: 2,  customerName: 'Gupta Home Interiors',      phone: '+91 98002 22222', items: [{ productId: 15, productName: 'Dining Table 4-Seater', qty: 1, price: 14500 }, { productId: 11, productName: 'Office Chair', qty: 4, price: 4800 }], status: 'Placed',           assignedTo: null,            orderDate: '2024-01-15', estDelivery: '2024-01-22', address: 'Karol Bagh, New Delhi' },
    { id: 6,  orderId: 'ORD-006', customerId: 8,  customerName: 'Singh Builders & Dev.',     phone: '+91 98008 88888', items: [{ productId: 12, productName: 'Executive Table 6ft', qty: 5,  price: 18500 }, { productId: 11, productName: 'Office Chair', qty: 20, price: 4800 }], status: 'Delivered',        assignedTo: 'Ramesh Kumar',  orderDate: '2024-01-05', estDelivery: '2024-01-10', address: 'Sector 63, Noida' },
    { id: 7,  orderId: 'ORD-007', customerId: 12, customerName: 'Modern Living Exports',     phone: '+91 98012 22333', items: [{ productId: 13, productName: 'Wardrobe 3-Door',      qty: 5,  price: 22000 }, { productId: 14, productName: 'Bookshelf 5-Tier', qty: 10, price: 7200 }], status: 'Dispatched',       assignedTo: 'Mohan Das',     orderDate: '2024-01-13', estDelivery: '2024-01-19', address: 'EPIP Zone, Bangalore' },
    { id: 8,  orderId: 'ORD-008', customerId: 4,  customerName: 'Reddy Contract Furnishers', phone: '+91 98004 44444', items: [{ productId: 11, productName: 'Office Chair',          qty: 15, price: 4800  }], status: 'Placed',           assignedTo: null,            orderDate: '2024-01-10', estDelivery: '2024-01-16', address: 'Banjara Hills, Hyderabad' },
    { id: 9,  orderId: 'ORD-009', customerId: 10, customerName: 'Iyer & Sons Furniture',     phone: '+91 98010 10101', items: [{ productId: 15, productName: 'Dining Table 4-Seater', qty: 3, price: 14500 }], status: 'Packed',           assignedTo: 'Suresh Patil',  orderDate: '2024-01-14', estDelivery: '2024-01-21', address: 'T Nagar, Chennai' },
    { id: 10, orderId: 'ORD-010', customerId: 9,  customerName: 'Bose Home Centre',          phone: '+91 98009 99999', items: [{ productId: 14, productName: 'Bookshelf 5-Tier',    qty: 5,  price: 7200  }, { productId: 11, productName: 'Office Chair', qty: 3, price: 4800 }], status: 'Out for Delivery', assignedTo: 'Ajay Singh',    orderDate: '2024-01-15', estDelivery: '2024-01-18', address: 'Salt Lake, Kolkata' }
  ],

  // ─── Employees (10 items) ─────────────────────────────────────────────────

  employees: [
    { id: 1,  empId: 'EMP-001', name: 'Suresh Patil',      phone: '+91 96001 11111', role: 'Floor Worker',  department: 'Production',  shift: 'Morning', salary: 18000, joinDate: '2022-03-15', status: 'Active'   },
    { id: 2,  empId: 'EMP-002', name: 'Ramesh Kumar',      phone: '+91 96002 22222', role: 'Driver',        department: 'Dispatch',    shift: 'Morning', salary: 20000, joinDate: '2021-07-10', status: 'Active'   },
    { id: 3,  empId: 'EMP-003', name: 'Pradeep Nair',      phone: '+91 96003 33333', role: 'Supervisor',    department: 'Production',  shift: 'Morning', salary: 28000, joinDate: '2020-11-01', status: 'Active'   },
    { id: 4,  empId: 'EMP-004', name: 'Kavita Sharma',     phone: '+91 96004 44444', role: 'QC Inspector',  department: 'QC',          shift: 'Morning', salary: 22000, joinDate: '2022-06-20', status: 'Active'   },
    { id: 5,  empId: 'EMP-005', name: 'Mohan Das',         phone: '+91 96005 55555', role: 'Driver',        department: 'Dispatch',    shift: 'Evening', salary: 20000, joinDate: '2023-01-15', status: 'Active'   },
    { id: 6,  empId: 'EMP-006', name: 'Ajay Singh',        phone: '+91 96006 66666', role: 'Floor Worker',  department: 'Production',  shift: 'Evening', salary: 17500, joinDate: '2023-04-01', status: 'Active'   },
    { id: 7,  empId: 'EMP-007', name: 'Deepika Reddy',     phone: '+91 96007 77777', role: 'Store Manager', department: 'Inventory',   shift: 'Morning', salary: 32000, joinDate: '2021-09-12', status: 'Active'   },
    { id: 8,  empId: 'EMP-008', name: 'Vivek Joshi',       phone: '+91 96008 88888', role: 'Floor Worker',  department: 'Production',  shift: 'Night',   salary: 19000, joinDate: '2023-08-05', status: 'Active'   },
    { id: 9,  empId: 'EMP-009', name: 'Pooja Iyer',        phone: '+91 96009 99999', role: 'Accountant',    department: 'HR',          shift: 'Morning', salary: 30000, joinDate: '2022-01-03', status: 'Active'   },
    { id: 10, empId: 'EMP-010', name: 'Balakrishna Rao',   phone: '+91 96010 10101', role: 'Floor Worker',  department: 'Production',  shift: 'Night',   salary: 17500, joinDate: '2020-05-22', status: 'Inactive' }
  ],

  // ─── Attendance Log (30 records) ──────────────────────────────────────────

  attendanceLog: [
    { id: 1,  employeeId: 1, employeeName: 'Suresh Patil',    date: '2024-01-18', status: 'present',  checkIn: '08:45', checkOut: '17:30' },
    { id: 2,  employeeId: 2, employeeName: 'Ramesh Kumar',    date: '2024-01-18', status: 'present',  checkIn: '08:30', checkOut: '17:45' },
    { id: 3,  employeeId: 3, employeeName: 'Pradeep Nair',    date: '2024-01-18', status: 'present',  checkIn: '08:00', checkOut: '17:00' },
    { id: 4,  employeeId: 4, employeeName: 'Kavita Sharma',   date: '2024-01-18', status: 'absent',   checkIn: '',      checkOut: ''      },
    { id: 5,  employeeId: 5, employeeName: 'Mohan Das',       date: '2024-01-18', status: 'present',  checkIn: '14:00', checkOut: '22:00' },
    { id: 6,  employeeId: 6, employeeName: 'Ajay Singh',      date: '2024-01-18', status: 'present',  checkIn: '14:15', checkOut: '22:30' },
    { id: 7,  employeeId: 7, employeeName: 'Deepika Reddy',   date: '2024-01-18', status: 'present',  checkIn: '09:00', checkOut: '18:00' },
    { id: 8,  employeeId: 8, employeeName: 'Vivek Joshi',     date: '2024-01-18', status: 'half-day', checkIn: '22:00', checkOut: '02:00' },
    { id: 9,  employeeId: 9, employeeName: 'Pooja Iyer',      date: '2024-01-18', status: 'present',  checkIn: '09:15', checkOut: '18:15' },
    { id: 10, employeeId: 10, employeeName: 'Balakrishna Rao', date: '2024-01-18', status: 'leave',   checkIn: '',      checkOut: ''      },
    { id: 11, employeeId: 1, employeeName: 'Suresh Patil',    date: '2024-01-17', status: 'present',  checkIn: '08:50', checkOut: '17:30' },
    { id: 12, employeeId: 2, employeeName: 'Ramesh Kumar',    date: '2024-01-17', status: 'present',  checkIn: '08:40', checkOut: '18:00' },
    { id: 13, employeeId: 3, employeeName: 'Pradeep Nair',    date: '2024-01-17', status: 'present',  checkIn: '08:05', checkOut: '17:10' },
    { id: 14, employeeId: 4, employeeName: 'Kavita Sharma',   date: '2024-01-17', status: 'present',  checkIn: '08:55', checkOut: '17:25' },
    { id: 15, employeeId: 5, employeeName: 'Mohan Das',       date: '2024-01-17', status: 'absent',   checkIn: '',      checkOut: ''      },
    { id: 16, employeeId: 6, employeeName: 'Ajay Singh',      date: '2024-01-17', status: 'present',  checkIn: '14:05', checkOut: '22:15' },
    { id: 17, employeeId: 7, employeeName: 'Deepika Reddy',   date: '2024-01-17', status: 'present',  checkIn: '09:00', checkOut: '18:00' },
    { id: 18, employeeId: 8, employeeName: 'Vivek Joshi',     date: '2024-01-17', status: 'present',  checkIn: '22:10', checkOut: '06:00' },
    { id: 19, employeeId: 9, employeeName: 'Pooja Iyer',      date: '2024-01-17', status: 'present',  checkIn: '09:20', checkOut: '18:00' },
    { id: 20, employeeId: 10, employeeName: 'Balakrishna Rao', date: '2024-01-17', status: 'absent',  checkIn: '',      checkOut: ''      },
    { id: 21, employeeId: 1, employeeName: 'Suresh Patil',    date: '2024-01-16', status: 'present',  checkIn: '08:45', checkOut: '17:30' },
    { id: 22, employeeId: 2, employeeName: 'Ramesh Kumar',    date: '2024-01-16', status: 'present',  checkIn: '08:35', checkOut: '17:50' },
    { id: 23, employeeId: 3, employeeName: 'Pradeep Nair',    date: '2024-01-16', status: 'half-day', checkIn: '08:00', checkOut: '13:00' },
    { id: 24, employeeId: 4, employeeName: 'Kavita Sharma',   date: '2024-01-16', status: 'present',  checkIn: '09:00', checkOut: '17:30' },
    { id: 25, employeeId: 5, employeeName: 'Mohan Das',       date: '2024-01-16', status: 'present',  checkIn: '14:00', checkOut: '22:00' },
    { id: 26, employeeId: 6, employeeName: 'Ajay Singh',      date: '2024-01-16', status: 'leave',    checkIn: '',      checkOut: ''      },
    { id: 27, employeeId: 7, employeeName: 'Deepika Reddy',   date: '2024-01-16', status: 'present',  checkIn: '09:05', checkOut: '18:00' },
    { id: 28, employeeId: 8, employeeName: 'Vivek Joshi',     date: '2024-01-16', status: 'present',  checkIn: '22:00', checkOut: '06:15' },
    { id: 29, employeeId: 9, employeeName: 'Pooja Iyer',      date: '2024-01-16', status: 'present',  checkIn: '09:10', checkOut: '18:10' },
    { id: 30, employeeId: 10, employeeName: 'Balakrishna Rao', date: '2024-01-16', status: 'absent',  checkIn: '',      checkOut: ''      }
  ],

  // ─── Invoices (15 items) ──────────────────────────────────────────────────

  invoices: [
    { id: 1,  invoiceNumber: 'INV-2024-001', customerId: 1,  customerName: 'Sharma Furniture Works',  items: [{ productId: 11, productName: 'Office Chair',          quantity: 10, price: 4800,  discount: 0,    total: 48000  }], subtotal: 48000,  discount: 0,    gst: 8640,  grandTotal: 56640,  paymentMode: 'UPI',         status: 'paid',    date: '2024-01-08' },
    { id: 2,  invoiceNumber: 'INV-2024-002', customerId: 3,  customerName: 'Patel Office Solutions',  items: [{ productId: 12, productName: 'Executive Table 6ft',   quantity: 3,  price: 18500, discount: 0,    total: 55500  }, { productId: 11, productName: 'Office Chair', quantity: 6, price: 4800, discount: 0, total: 28800 }], subtotal: 84300,  discount: 2000, gst: 14814, grandTotal: 97114,  paymentMode: 'Bank Transfer', status: 'paid', date: '2024-01-12' },
    { id: 3,  invoiceNumber: 'INV-2024-003', customerId: 7,  customerName: 'Joshi Bros Wholesale',    items: [{ productId: 14, productName: 'Bookshelf 5-Tier',       quantity: 8,  price: 7200,  discount: 2880, total: 54720  }], subtotal: 57600,  discount: 2880, gst: 9806,  grandTotal: 67526,  paymentMode: 'Cheque',      status: 'paid',    date: '2024-01-13' },
    { id: 4,  invoiceNumber: 'INV-2024-004', customerId: 8,  customerName: 'Singh Builders & Dev.',   items: [{ productId: 12, productName: 'Executive Table 6ft',   quantity: 5,  price: 18500, discount: 0,    total: 92500  }, { productId: 11, productName: 'Office Chair', quantity: 20, price: 4800, discount: 0, total: 96000 }], subtotal: 188500, discount: 5000, gst: 33030, grandTotal: 216530, paymentMode: 'Bank Transfer', status: 'paid', date: '2024-01-05' },
    { id: 5,  invoiceNumber: 'INV-2024-005', customerId: 6,  customerName: 'Nair Decor Studio',       items: [{ productId: 13, productName: 'Wardrobe 3-Door',         quantity: 2,  price: 22000, discount: 0,    total: 44000  }], subtotal: 44000,  discount: 0,    gst: 7920,  grandTotal: 51920,  paymentMode: 'UPI',         status: 'pending', date: '2024-01-14' },
    { id: 6,  invoiceNumber: 'INV-2024-006', customerId: 12, customerName: 'Modern Living Exports',   items: [{ productId: 13, productName: 'Wardrobe 3-Door',         quantity: 5,  price: 22000, discount: 0,    total: 110000 }, { productId: 14, productName: 'Bookshelf 5-Tier', quantity: 10, price: 7200, discount: 0, total: 72000 }], subtotal: 182000, discount: 10000, gst: 30960, grandTotal: 202960, paymentMode: 'Bank Transfer', status: 'paid', date: '2024-01-13' },
    { id: 7,  invoiceNumber: 'INV-2024-007', customerId: 2,  customerName: 'Gupta Home Interiors',    items: [{ productId: 15, productName: 'Dining Table 4-Seater',   quantity: 1,  price: 14500, discount: 0,    total: 14500  }, { productId: 11, productName: 'Office Chair', quantity: 4, price: 4800, discount: 0, total: 19200 }], subtotal: 33700,  discount: 0,    gst: 6066,  grandTotal: 39766,  paymentMode: 'Cash',        status: 'pending', date: '2024-01-15' },
    { id: 8,  invoiceNumber: 'INV-2024-008', customerId: 10, customerName: 'Iyer & Sons Furniture',   items: [{ productId: 15, productName: 'Dining Table 4-Seater',   quantity: 3,  price: 14500, discount: 0,    total: 43500  }], subtotal: 43500,  discount: 0,    gst: 7830,  grandTotal: 51330,  paymentMode: 'UPI',         status: 'paid',    date: '2024-01-14' },
    { id: 9,  invoiceNumber: 'INV-2024-009', customerId: 9,  customerName: 'Bose Home Centre',        items: [{ productId: 14, productName: 'Bookshelf 5-Tier',       quantity: 5,  price: 7200,  discount: 0,    total: 36000  }, { productId: 11, productName: 'Office Chair', quantity: 3, price: 4800, discount: 0, total: 14400 }], subtotal: 50400,  discount: 0,    gst: 9072,  grandTotal: 59472,  paymentMode: 'Cash',        status: 'pending', date: '2024-01-15' },
    { id: 10, invoiceNumber: 'INV-2024-010', customerId: 4,  customerName: 'Reddy Contract Furnishers', items: [{ productId: 11, productName: 'Office Chair',        quantity: 15, price: 4800,  discount: 3600, total: 68400  }], subtotal: 72000,  discount: 3600, gst: 12312, grandTotal: 80712,  paymentMode: 'Bank Transfer', status: 'pending', date: '2024-01-10' },
    { id: 11, invoiceNumber: 'INV-2024-011', customerId: 5,  customerName: 'Mehta Trading Co.',       items: [{ productId: 14, productName: 'Bookshelf 5-Tier',       quantity: 3,  price: 7200,  discount: 0,    total: 21600  }], subtotal: 21600,  discount: 0,    gst: 3888,  grandTotal: 25488,  paymentMode: 'Cash',        status: 'paid',    date: '2024-01-09' },
    { id: 12, invoiceNumber: 'INV-2024-012', customerId: 11, customerName: 'Kulkarni Designs',        items: [{ productId: 11, productName: 'Office Chair',          quantity: 4,  price: 4800,  discount: 0,    total: 19200  }], subtotal: 19200,  discount: 0,    gst: 3456,  grandTotal: 22656,  paymentMode: 'UPI',         status: 'paid',    date: '2024-01-07' },
    { id: 13, invoiceNumber: 'INV-2024-013', customerId: 1,  customerName: 'Sharma Furniture Works',  items: [{ productId: 13, productName: 'Wardrobe 3-Door',         quantity: 1,  price: 22000, discount: 0,    total: 22000  }], subtotal: 22000,  discount: 0,    gst: 3960,  grandTotal: 25960,  paymentMode: 'UPI',         status: 'paid',    date: '2024-01-15' },
    { id: 14, invoiceNumber: 'INV-2024-014', customerId: 3,  customerName: 'Patel Office Solutions',  items: [{ productId: 12, productName: 'Executive Table 6ft',   quantity: 2,  price: 18500, discount: 0,    total: 37000  }], subtotal: 37000,  discount: 1000, gst: 6480,  grandTotal: 42480,  paymentMode: 'Bank Transfer', status: 'paid', date: '2024-01-16' },
    { id: 15, invoiceNumber: 'INV-2024-015', customerId: 8,  customerName: 'Singh Builders & Dev.',   items: [{ productId: 14, productName: 'Bookshelf 5-Tier',       quantity: 12, price: 7200,  discount: 8640, total: 77760  }], subtotal: 86400,  discount: 8640, gst: 14011, grandTotal: 91771,  paymentMode: 'Cheque',      status: 'paid',    date: '2024-01-11' }
  ],

  // ─── Pricing Rules (8 items) ──────────────────────────────────────────────

  pricingRules: [
    { id: 1, productId: 11, productName: 'Office Chair',        minQty: 10,  pricePerUnit: 4500, type: 'bulk',     name: 'Bulk Chair Discount' },
    { id: 2, productId: 12, productName: 'Executive Table 6ft', minQty: 3,   pricePerUnit: 17500, type: 'bulk',   name: 'Bulk Table Discount' },
    { id: 3, productId: 14, productName: 'Bookshelf 5-Tier',    minQty: 5,   pricePerUnit: 6800, type: 'bulk',     name: 'Bulk Shelf Discount' },
    { id: 4, name: 'Seasonal Sale',        type: 'discount', discountType: 'percentage', value: 10,    appliesTo: 'all',                      validUntil: '2024-01-31', active: true  },
    { id: 5, name: 'New Customer Offer',   type: 'discount', discountType: 'flat',       value: 500,   appliesTo: 'all',                      validUntil: '2024-12-31', active: true  },
    { id: 6, name: 'Furniture Bundle',     type: 'discount', discountType: 'percentage', value: 15,    appliesTo: 'category', category: 'Finished Good', validUntil: '2024-02-28', active: false },
    { id: 7, productId: 13, productName: 'Wardrobe 3-Door',     minQty: 2,   pricePerUnit: 20500, type: 'bulk',   name: 'Bulk Wardrobe Discount' },
    { id: 8, name: 'Clearance Stock',      type: 'discount', discountType: 'percentage', value: 20,    appliesTo: 'category', category: 'Raw Material',  validUntil: '2024-01-25', active: true  }
  ],

  // ─── Activity Feed (20 items) ─────────────────────────────────────────────

  activityFeed: [
    { id: 1,  user: 'Manager User',  role: 'manager', action: 'Added 50 units of MDF Board 8mm to inventory',              timestamp: '1 hour ago',   icon: 'box'      },
    { id: 2,  user: 'Staff User',    role: 'staff',   action: 'Marked WO-003 as QC stage',                                 timestamp: '2 hours ago',  icon: 'factory'  },
    { id: 3,  user: 'Admin User',    role: 'admin',   action: 'Created new Work Order WO-008 for Wardrobe 3-Door',         timestamp: '3 hours ago',  icon: 'clipboard'},
    { id: 4,  user: 'Manager User',  role: 'manager', action: 'Placed Purchase Order PO-2024-009 with Shree Steel Traders', timestamp: '4 hours ago', icon: 'cart'     },
    { id: 5,  user: 'Staff User',    role: 'staff',   action: 'Moved WO-004 from Cutting to Assembly stage',               timestamp: '5 hours ago',  icon: 'factory'  },
    { id: 6,  user: 'Manager User',  role: 'manager', action: 'Added new customer: Modern Living Exports',                  timestamp: '6 hours ago', icon: 'user'     },
    { id: 7,  user: 'Admin User',    role: 'admin',   action: 'Updated pricing rule: Seasonal Sale extended to Jan 31',    timestamp: '8 hours ago',  icon: 'tag'      },
    { id: 8,  user: 'Manager User',  role: 'manager', action: 'Dispatched Order ORD-007 to Modern Living Exports',         timestamp: '9 hours ago',  icon: 'truck'    },
    { id: 9,  user: 'Staff User',    role: 'staff',   action: 'Logged wastage: 5 sheets Plywood 12mm — Wrong Dimensions',  timestamp: '10 hours ago', icon: 'warning'  },
    { id: 10, user: 'Manager User',  role: 'manager', action: 'Raised invoice INV-2024-014 for Patel Office Solutions',    timestamp: '11 hours ago', icon: 'invoice'  },
    { id: 11, user: 'Admin User',    role: 'admin',   action: 'Added new employee: Deepika Reddy — Store Manager',         timestamp: '1 day ago',    icon: 'user'     },
    { id: 12, user: 'Manager User',  role: 'manager', action: 'Marked attendance for 18 Jan — 8 present, 1 absent',        timestamp: '1 day ago',    icon: 'calendar' },
    { id: 13, user: 'Staff User',    role: 'staff',   action: 'Completed Work Order WO-001 — 20 Office Chairs',            timestamp: '2 days ago',   icon: 'check'    },
    { id: 14, user: 'Manager User',  role: 'manager', action: 'Received PO-2024-006 from Mehta Ply & Boards — 80 sheets',  timestamp: '2 days ago',   icon: 'box'      },
    { id: 15, user: 'Admin User',    role: 'admin',   action: 'Added bulk pricing rule for Office Chair (min 10 units)',    timestamp: '2 days ago',   icon: 'tag'      },
    { id: 16, user: 'Staff User',    role: 'staff',   action: 'Issued raw materials for WO-006 — Steel Tube + Foam',       timestamp: '3 days ago',   icon: 'box'      },
    { id: 17, user: 'Manager User',  role: 'manager', action: 'Delivered Order ORD-006 to Singh Builders & Dev.',          timestamp: '3 days ago',   icon: 'truck'    },
    { id: 18, user: 'Admin User',    role: 'admin',   action: 'Cancelled PO-2024-007 (Colour Coat Paints) — supplier delay', timestamp: '4 days ago', icon: 'cancel'   },
    { id: 19, user: 'Manager User',  role: 'manager', action: 'Updated reorder level for Foam Padding — now 15 units',     timestamp: '5 days ago',   icon: 'settings' },
    { id: 20, user: 'Staff User',    role: 'staff',   action: 'Packed Work Order WO-013 — 5 Wardrobe 3-Door ready',        timestamp: '5 days ago',   icon: 'box'      }
  ],

  // ─── Notifications (5 items) ──────────────────────────────────────────────

  notifications: [
    { id: 1, type: 'warning', title: 'Low Stock Alert',      message: '4 products are below reorder level — Plywood, Foam, Velvet Fabric, MS Sheet', timestamp: '1 hour ago',   read: false },
    { id: 2, type: 'danger',  title: 'Out of Stock',         message: 'MS Sheet 2mm is completely out of stock. PO raised.',                          timestamp: '2 hours ago',  read: false },
    { id: 3, type: 'info',    title: 'Work Order Completed', message: 'WO-015 (Dining Table 4-Seater × 8) has been marked complete by Staff User',    timestamp: '3 hours ago',  read: false },
    { id: 4, type: 'danger',  title: 'Overdue Delivery',     message: 'Order ORD-008 for Reddy Contract Furnishers is past estimated delivery date',   timestamp: '5 hours ago',  read: true  },
    { id: 5, type: 'info',    title: 'New PO Received',      message: 'Purchase Order PO-2024-006 from Mehta Ply & Boards has been received',         timestamp: '1 day ago',    read: true  }
  ]

}; 

