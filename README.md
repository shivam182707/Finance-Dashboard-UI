# FinFlow — Finance Dashboard

A premium, interactive finance dashboard built with **Vanilla HTML, CSS & JavaScript** — zero build tools, zero dependencies (except Chart.js via CDN).

---

## 🚀 Getting Started

### Option 1 — Open directly (quickest)
```bash
open finance-dashboard/index.html
```
Or just double-click `index.html` in Finder. It runs entirely in the browser with no server needed.

### Option 2 — Local server (recommended to avoid any CORS quirks)
```bash
cd finance-dashboard
python3 -m http.server 8080
# then open http://localhost:8080
```

---

## 📁 Project Structure
```
finance-dashboard/
├── index.html   # App shell + all markup
├── style.css    # Design system + all component styles
├── app.js       # All logic, state management, chart init
└── README.md
```

---

## ✨ Features

### 1. Dashboard Overview
- **4 Summary Cards** — Total Balance, Income, Expenses, Savings Rate
- **Bar Chart** — Income vs Expense over the last 6 months
- **Donut Chart** — Spending breakdown by category

### 2. Transactions Section
- Full transaction list with **Date, Description, Category, Type, Amount**
- **Search** by description or category
- **Filter** by Type, Category, and Month
- **Sort** by date (newest/oldest) or amount (highest/lowest)
- **Export to CSV** (filtered view)

### 3. Role-Based UI (RBAC Simulation)
| Feature | Viewer | Admin |
|---------|--------|-------|
| View all data | ✅ | ✅ |
| Add transactions | ❌ | ✅ |
| Edit transactions | ❌ | ✅ |
| Delete transactions | ❌ | ✅ |

Switch roles via the **sidebar dropdown** — UI updates instantly.

### 4. Insights Section
- **Highest Spending Category** — top expense bucket
- **Average Monthly Expense** — across all recorded months
- **Best Savings Month** — month with highest income − expense
- **Income vs Expense Ratio** — financial health indicator
- **Line Chart** — monthly income vs expense trend
- **Progress Bars** — per-category spending breakdown with percentages

### 5. State Management
- All state lives in a single `state` object (role, transactions, filters, sort, theme)
- Transactions **persist in `localStorage`** — data survives page refreshes
- Seeded with **63 realistic transactions** across 7 months if localStorage is empty

### 6. UI / UX
- **Dark mode by default**, with a toggle for light mode
- Fully **responsive** — works on desktop, tablet, and mobile
- Smooth **page transition animations** on section switch
- **Toast notifications** for all actions (add, edit, delete, export)
- Collapsible sidebar (hamburger menu on mobile)
- Graceful **empty state** when no transactions match filters
- Accessible — proper labels, `aria-label`, semantic HTML

---

## 🛠 Tech Choices

| Concern | Approach |
|---------|----------|
| Framework | Vanilla JS (no framework needed for this scope) |
| Styling | Custom CSS with CSS variables (design tokens) |
| Charts | [Chart.js 4](https://www.chartjs.org/) via CDN |
| Fonts | Inter (Google Fonts) |
| State | Module-level `state` object + localStorage |
| RBAC | Frontend role simulation via dropdown |

---

## 📊 Mock Data
63 pre-seeded transactions spanning **Oct 2025 – Apr 2026** across 12 categories:  
Salary · Freelance · Investment · Food · Housing · Transport · Entertainment · Healthcare · Shopping · Utilities · Education · Other

---

## 💡 Design Decisions
- **Single-file architecture** makes it trivially shareable and auditable
- **CSS custom properties** for the entire color system ensures consistent theming and one-line dark/light switching
- **Chart.js** was chosen over custom SVG charts for time savings while still being highly configurable
- **localStorage persistence** means the Admin can add/edit/delete and the data survives a refresh — simulating real use

---

*Built for the FinFlow Frontend Assignment — April 2026*
