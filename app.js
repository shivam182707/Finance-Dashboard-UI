/* =============================================
   FINFLOW — APPLICATION LOGIC
   ============================================= */

// ─── Mock Data ────────────────────────────────
const SEED_TRANSACTIONS = [
  { id:1, date:'2025-10-03', desc:'Monthly Salary',      category:'Salary',        type:'income',  amount:95000 },
  { id:2, date:'2025-10-05', desc:'Apartment Rent',      category:'Housing',       type:'expense', amount:22000 },
  { id:3, date:'2025-10-07', desc:'Grocery Shopping',    category:'Food',          type:'expense', amount:3800 },
  { id:4, date:'2025-10-09', desc:'Netflix Subscription',category:'Entertainment', type:'expense', amount:649 },
  { id:5, date:'2025-10-12', desc:'Freelance Project',   category:'Freelance',     type:'income',  amount:18000 },
  { id:6, date:'2025-10-14', desc:'Metro Pass',          category:'Transport',     type:'expense', amount:500 },
  { id:7, date:'2025-10-16', desc:'Doctor Visit',        category:'Healthcare',    type:'expense', amount:1200 },
  { id:8, date:'2025-10-20', desc:'Online Course',       category:'Education',     type:'expense', amount:2999 },
  { id:9, date:'2025-10-22', desc:'Dinner Out',          category:'Food',          type:'expense', amount:1800 },
  { id:10,date:'2025-10-25', desc:'Electricity Bill',    category:'Utilities',     type:'expense', amount:1400 },
  { id:11,date:'2025-10-28', desc:'Amazon Shopping',     category:'Shopping',      type:'expense', amount:4200 },
  { id:12,date:'2025-11-01', desc:'Monthly Salary',      category:'Salary',        type:'income',  amount:95000 },
  { id:13,date:'2025-11-02', desc:'Apartment Rent',      category:'Housing',       type:'expense', amount:22000 },
  { id:14,date:'2025-11-05', desc:'Mutual Fund Invest',  category:'Investment',    type:'income',  amount:10000 },
  { id:15,date:'2025-11-07', desc:'Swiggy Orders',       category:'Food',          type:'expense', amount:2600 },
  { id:16,date:'2025-11-10', desc:'Gym Membership',      category:'Healthcare',    type:'expense', amount:2000 },
  { id:17,date:'2025-11-15', desc:'Freelance Design',    category:'Freelance',     type:'income',  amount:12000 },
  { id:18,date:'2025-11-18', desc:'Uber Rides',          category:'Transport',     type:'expense', amount:1100 },
  { id:19,date:'2025-11-21', desc:'Amazon Prime',        category:'Entertainment', type:'expense', amount:1499 },
  { id:20,date:'2025-11-25', desc:'Mobile Bill',         category:'Utilities',     type:'expense', amount:699 },
  { id:21,date:'2025-11-28', desc:'Zara Shopping',       category:'Shopping',      type:'expense', amount:5800 },
  { id:22,date:'2025-12-01', desc:'Monthly Salary',      category:'Salary',        type:'income',  amount:95000 },
  { id:23,date:'2025-12-02', desc:'Apartment Rent',      category:'Housing',       type:'expense', amount:22000 },
  { id:24,date:'2025-12-05', desc:'Dividend Income',     category:'Investment',    type:'income',  amount:6500 },
  { id:25,date:'2025-12-08', desc:'Christmas Gifts',     category:'Shopping',      type:'expense', amount:8000 },
  { id:26,date:'2025-12-12', desc:'Restaurant Dinner',   category:'Food',          type:'expense', amount:3200 },
  { id:27,date:'2025-12-15', desc:'Freelance App Dev',   category:'Freelance',     type:'income',  amount:25000 },
  { id:28,date:'2025-12-18', desc:'Flight Ticket',       category:'Transport',     type:'expense', amount:7500 },
  { id:29,date:'2025-12-22', desc:'New Laptop',          category:'Shopping',      type:'expense', amount:65000 },
  { id:30,date:'2025-12-28', desc:'Internet Bill',       category:'Utilities',     type:'expense', amount:999 },
  { id:31,date:'2026-01-01', desc:'Monthly Salary',      category:'Salary',        type:'income',  amount:95000 },
  { id:32,date:'2026-01-03', desc:'Apartment Rent',      category:'Housing',       type:'expense', amount:22000 },
  { id:33,date:'2026-01-06', desc:'SIP Investment',      category:'Investment',    type:'income',  amount:5000 },
  { id:34,date:'2026-01-08', desc:'Grocery Store',       category:'Food',          type:'expense', amount:4100 },
  { id:35,date:'2026-01-12', desc:'Movie Tickets',       category:'Entertainment', type:'expense', amount:900 },
  { id:36,date:'2026-01-15', desc:'Freelance Writing',   category:'Freelance',     type:'income',  amount:8000 },
  { id:37,date:'2026-01-18', desc:'Bus Pass',            category:'Transport',     type:'expense', amount:400 },
  { id:38,date:'2026-01-20', desc:'Pharmacy',            category:'Healthcare',    type:'expense', amount:850 },
  { id:39,date:'2026-01-22', desc:'Spotify Premium',     category:'Entertainment', type:'expense', amount:119 },
  { id:40,date:'2026-01-28', desc:'New Shoes',           category:'Shopping',      type:'expense', amount:3500 },
  { id:41,date:'2026-02-01', desc:'Monthly Salary',      category:'Salary',        type:'income',  amount:95000 },
  { id:42,date:'2026-02-02', desc:'Apartment Rent',      category:'Housing',       type:'expense', amount:22000 },
  { id:43,date:'2026-02-05', desc:'Freelance UI Work',   category:'Freelance',     type:'income',  amount:20000 },
  { id:44,date:'2026-02-08', desc:'Valentines Dinner',   category:'Food',          type:'expense', amount:4500 },
  { id:45,date:'2026-02-12', desc:'Petrol',              category:'Transport',     type:'expense', amount:2200 },
  { id:46,date:'2026-02-15', desc:'Insurance Premium',   category:'Healthcare',    type:'expense', amount:5000 },
  { id:47,date:'2026-02-20', desc:'YouTube Premium',     category:'Entertainment', type:'expense', amount:189 },
  { id:48,date:'2026-02-22', desc:'Stock Dividend',      category:'Investment',    type:'income',  amount:3800 },
  { id:49,date:'2026-02-26', desc:'Electricity Bill',    category:'Utilities',     type:'expense', amount:1600 },
  { id:50,date:'2026-03-01', desc:'Monthly Salary',      category:'Salary',        type:'income',  amount:95000 },
  { id:51,date:'2026-03-02', desc:'Apartment Rent',      category:'Housing',       type:'expense', amount:22000 },
  { id:52,date:'2026-03-05', desc:'Freelance Project',   category:'Freelance',     type:'income',  amount:15000 },
  { id:53,date:'2026-03-08', desc:'Book Purchase',       category:'Education',     type:'expense', amount:1200 },
  { id:54,date:'2026-03-12', desc:'Coffee Shops',        category:'Food',          type:'expense', amount:1800 },
  { id:55,date:'2026-03-15', desc:'Mutual Fund',         category:'Investment',    type:'income',  amount:8000 },
  { id:56,date:'2026-03-18', desc:'Uber Pool',           category:'Transport',     type:'expense', amount:750 },
  { id:57,date:'2026-03-22', desc:'Clothing',            category:'Shopping',      type:'expense', amount:4200 },
  { id:58,date:'2026-03-25', desc:'Water Bill',          category:'Utilities',     type:'expense', amount:450 },
  { id:59,date:'2026-03-28', desc:'Doctor Checkup',      category:'Healthcare',    type:'expense', amount:800 },
  { id:60,date:'2026-04-01', desc:'Monthly Salary',      category:'Salary',        type:'income',  amount:95000 },
  { id:61,date:'2026-04-02', desc:'Apartment Rent',      category:'Housing',       type:'expense', amount:22000 },
  { id:62,date:'2026-04-04', desc:'Freelance Design',    category:'Freelance',     type:'income',  amount:14000 },
  { id:63,date:'2026-04-05', desc:'Grocery Shopping',    category:'Food',          type:'expense', amount:3200 },
];

const CATEGORY_COLORS = {
  'Salary':        '#6366f1',
  'Freelance':     '#8b5cf6',
  'Investment':    '#0ea5e9',
  'Food':          '#f59e0b',
  'Housing':       '#ef4444',
  'Transport':     '#06b6d4',
  'Entertainment': '#ec4899',
  'Healthcare':    '#10b981',
  'Shopping':      '#f97316',
  'Utilities':     '#84cc16',
  'Education':     '#a78bfa',
  'Other':         '#94a3b8',
};

const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// ─── State ────────────────────────────────────
const STORAGE_KEY = 'finflow_txns';
let state = {
  transactions: loadFromStorage(),
  role: 'viewer',         // 'viewer' | 'admin'
  filters: { search:'', type:'all', category:'all', month:'all' },
  sort: 'date-desc',
  darkMode: true,
  editingId: null,
  nextId: null,
};
state.nextId = state.transactions.reduce((m,t) => Math.max(m, t.id), 0) + 1;

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : SEED_TRANSACTIONS.map(t => ({...t}));
  } catch { return SEED_TRANSACTIONS.map(t => ({...t})); }
}
function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.transactions));
}

// ─── Charts ───────────────────────────────────
let trendChart, categoryChart, monthlyChart;

function buildChartDefaults(dark) {
  Chart.defaults.color = dark ? '#8b90a4' : '#4b5563';
  Chart.defaults.borderColor = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
}

function getMonthlyData() {
  const months = {};
  state.transactions.forEach(t => {
    const d = new Date(t.date);
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    if (!months[key]) months[key] = { income:0, expense:0, label: MONTH_NAMES[d.getMonth()]+' '+d.getFullYear().toString().slice(2) };
    if (t.type === 'income') months[key].income += t.amount;
    else months[key].expense += t.amount;
  });
  const sorted = Object.entries(months).sort(([a],[b]) => a.localeCompare(b));
  const last6 = sorted.slice(-6);
  return {
    labels: last6.map(([,v]) => v.label),
    incomes: last6.map(([,v]) => v.income),
    expenses: last6.map(([,v]) => v.expense),
  };
}

function getCategoryData() {
  const cats = {};
  state.transactions.filter(t => t.type === 'expense').forEach(t => {
    cats[t.category] = (cats[t.category] || 0) + t.amount;
  });
  const sorted = Object.entries(cats).sort(([,a],[,b]) => b - a).slice(0, 8);
  return {
    labels: sorted.map(([k]) => k),
    values: sorted.map(([,v]) => v),
    colors: sorted.map(([k]) => CATEGORY_COLORS[k] || '#94a3b8'),
  };
}

function initCharts() {
  buildChartDefaults(state.darkMode);
  const gridColor = state.darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
  const md = getMonthlyData();
  const cd = getCategoryData();

  // Trend Chart
  const trendCtx = document.getElementById('trendChart').getContext('2d');
  if (trendChart) trendChart.destroy();
  trendChart = new Chart(trendCtx, {
    type: 'bar',
    data: {
      labels: md.labels,
      datasets: [
        {
          label: 'Income',
          data: md.incomes,
          backgroundColor: 'rgba(16,185,129,0.8)',
          borderRadius: 6,
          borderSkipped: false,
        },
        {
          label: 'Expense',
          data: md.expenses,
          backgroundColor: 'rgba(244,63,94,0.8)',
          borderRadius: 6,
          borderSkipped: false,
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: {
        backgroundColor: state.darkMode ? '#1a1d2e' : '#fff',
        borderColor: state.darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        titleColor: state.darkMode ? '#e8eaf0' : '#111',
        bodyColor: state.darkMode ? '#8b90a4' : '#555',
        callbacks: { label: ctx => ` ₹${ctx.parsed.y.toLocaleString('en-IN')}` }
      }},
      scales: {
        x: { grid: { color: gridColor }, ticks: { font: { size: 12 } } },
        y: { grid: { color: gridColor }, ticks: { callback: v => '₹'+formatK(v), font: { size: 11 } } }
      }
    }
  });

  // Category Donut
  const catCtx = document.getElementById('categoryChart').getContext('2d');
  if (categoryChart) categoryChart.destroy();
  categoryChart = new Chart(catCtx, {
    type: 'doughnut',
    data: {
      labels: cd.labels,
      datasets: [{ data: cd.values, backgroundColor: cd.colors, borderWidth: 2,
        borderColor: state.darkMode ? '#141626' : '#fff',
        hoverOffset: 8 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      cutout: '68%',
      plugins: {
        legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } },
        tooltip: {
          backgroundColor: state.darkMode ? '#1a1d2e' : '#fff',
          borderColor: state.darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
          borderWidth: 1,
          titleColor: state.darkMode ? '#e8eaf0' : '#111',
          bodyColor: state.darkMode ? '#8b90a4' : '#555',
          callbacks: { label: ctx => ` ₹${ctx.parsed.toLocaleString('en-IN')} (${((ctx.parsed/cd.values.reduce((a,b)=>a+b,0))*100).toFixed(1)}%)` }
        }
      }
    }
  });

  // Monthly comparison (insights)
  const monCtx = document.getElementById('monthlyChart').getContext('2d');
  if (monthlyChart) monthlyChart.destroy();
  monthlyChart = new Chart(monCtx, {
    type: 'line',
    data: {
      labels: md.labels,
      datasets: [
        {
          label: 'Income', data: md.incomes,
          borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)',
          tension: 0.4, fill: true, pointRadius: 4, pointBackgroundColor: '#10b981',
        },
        {
          label: 'Expense', data: md.expenses,
          borderColor: '#f43f5e', backgroundColor: 'rgba(244,63,94,0.08)',
          tension: 0.4, fill: true, pointRadius: 4, pointBackgroundColor: '#f43f5e',
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { usePointStyle: true, pointStyle: 'circle', padding: 16 } }, tooltip: {
        backgroundColor: state.darkMode ? '#1a1d2e' : '#fff',
        borderColor: state.darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        borderWidth: 1, titleColor: state.darkMode ? '#e8eaf0' : '#111',
        bodyColor: state.darkMode ? '#8b90a4' : '#555',
        callbacks: { label: ctx => ` ₹${ctx.parsed.y.toLocaleString('en-IN')}` }
      }},
      scales: {
        x: { grid: { color: gridColor } },
        y: { grid: { color: gridColor }, ticks: { callback: v => '₹'+formatK(v) } }
      }
    }
  });
}

// ─── Formatters ───────────────────────────────
function fmt(n) { return '₹' + n.toLocaleString('en-IN'); }
function formatK(n) { return n >= 100000 ? (n/100000).toFixed(1)+'L' : n >= 1000 ? (n/1000).toFixed(0)+'K' : n; }
function fmtDate(s) {
  const d = new Date(s);
  return d.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
}
function emojiFor(cat) {
  const map = { Salary:'💼', Freelance:'💻', Investment:'📈', Food:'🍱', Housing:'🏠',
    Transport:'🚗', Entertainment:'🎬', Healthcare:'🏥', Shopping:'🛍️', Utilities:'⚡', Education:'📚', Other:'📦' };
  return map[cat] || '📦';
}

// ─── Summary Cards ────────────────────────────
function updateSummaryCards() {
  const income  = state.transactions.filter(t => t.type==='income').reduce((s,t) => s+t.amount, 0);
  const expense = state.transactions.filter(t => t.type==='expense').reduce((s,t) => s+t.amount, 0);
  const balance = income - expense;
  const savRate = income > 0 ? Math.round(((income-expense)/income)*100) : 0;

  document.getElementById('totalBalance').textContent = fmt(balance);
  document.getElementById('totalIncome').textContent  = fmt(income);
  document.getElementById('totalExpense').textContent = fmt(expense);
  document.getElementById('savingsRate').textContent  = savRate + '%';

  const bel = document.getElementById('balanceChange');
  bel.textContent = balance >= 0 ? '↑ Positive balance' : '↓ Negative balance';
  bel.className = 'card-change ' + (balance >= 0 ? 'positive' : 'negative');

  document.getElementById('incomeChange').textContent  = income > 0 ? `${state.transactions.filter(t=>t.type==='income').length} transactions` : 'No income yet';
  document.getElementById('expenseChange').textContent = `${state.transactions.filter(t=>t.type==='expense').length} expense entries`;
  document.getElementById('savingsChange').textContent = savRate >= 30 ? '✓ Excellent' : savRate >= 15 ? '• Good' : '⚠ Improve';
  document.getElementById('savingsChange').className   = 'card-change ' + (savRate >= 30 ? 'positive' : savRate >= 15 ? 'neutral' : 'negative');
}

// ─── Insights ─────────────────────────────────
function updateInsights() {
  const expenses = state.transactions.filter(t => t.type === 'expense');
  const incomes  = state.transactions.filter(t => t.type === 'income');

  // Top category
  const cats = {};
  expenses.forEach(t => { cats[t.category] = (cats[t.category]||0)+t.amount; });
  const topCat = Object.entries(cats).sort(([,a],[,b]) => b-a)[0];
  if (topCat) {
    document.getElementById('topCategoryVal').textContent = topCat[0];
    document.getElementById('topCategorySub').textContent = fmt(topCat[1]) + ' spent';
  }

  // Avg monthly expense
  const byMonth = {};
  expenses.forEach(t => {
    const k = t.date.slice(0,7);
    byMonth[k] = (byMonth[k]||0) + t.amount;
  });
  const months = Object.values(byMonth);
  const avg = months.length ? Math.round(months.reduce((a,b)=>a+b,0)/months.length) : 0;
  document.getElementById('avgExpenseVal').textContent = fmt(avg);
  document.getElementById('avgExpenseSub').textContent = `Over ${months.length} month(s)`;

  // Best savings month
  const monthMap = {};
  state.transactions.forEach(t => {
    const k = t.date.slice(0,7);
    if (!monthMap[k]) monthMap[k] = { income:0, expense:0 };
    monthMap[k][t.type] += t.amount;
  });
  const savMonths = Object.entries(monthMap).map(([k,v]) => ({ k, s: v.income-v.expense })).sort((a,b) => b.s-a.s);
  if (savMonths.length) {
    const best = savMonths[0];
    const [y,m] = best.k.split('-');
    document.getElementById('bestMonthVal').textContent = MONTH_NAMES[+m-1]+' '+y;
    document.getElementById('bestMonthSub').textContent = 'Saved ' + fmt(best.s);
  }

  // Ratio
  const totalInc = incomes.reduce((s,t) => s+t.amount, 0);
  const totalExp = expenses.reduce((s,t) => s+t.amount, 0);
  const ratio = totalExp > 0 ? (totalInc/totalExp).toFixed(2) : '∞';
  document.getElementById('ratioVal').textContent = ratio + 'x';
  document.getElementById('ratioSub').textContent = ratio >= 1.5 ? 'Great financial health' : ratio >= 1 ? 'Breaking even' : 'Spending more than earning';

  // Breakdown list
  const total = Object.values(cats).reduce((a,b)=>a+b,0);
  const sorted = Object.entries(cats).sort(([,a],[,b]) => b-a).slice(0,6);
  const list = document.getElementById('breakdownList');
  list.innerHTML = sorted.map(([k,v]) => {
    const pct = total > 0 ? Math.round((v/total)*100) : 0;
    const color = CATEGORY_COLORS[k] || '#94a3b8';
    return `
      <div class="breakdown-item">
        <div class="breakdown-meta">
          <span class="breakdown-name">${emojiFor(k)} ${k}</span>
          <div style="display:flex;gap:10px;align-items:center">
            <span class="breakdown-pct">${pct}%</span>
            <span class="breakdown-amt">${fmt(v)}</span>
          </div>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${pct}%;background:${color}"></div>
        </div>
      </div>`;
  }).join('');
}

// ─── Transactions Table ───────────────────────
function getFilteredSorted() {
  const { search, type, category, month } = state.filters;
  let txns = state.transactions.filter(t => {
    if (type !== 'all' && t.type !== type) return false;
    if (category !== 'all' && t.category !== category) return false;
    if (month !== 'all' && !t.date.startsWith(month)) return false;
    if (search) {
      const q = search.toLowerCase();
      if (!t.desc.toLowerCase().includes(q) && !t.category.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  txns.sort((a,b) => {
    switch(state.sort) {
      case 'date-asc':    return new Date(a.date)-new Date(b.date);
      case 'date-desc':   return new Date(b.date)-new Date(a.date);
      case 'amount-asc':  return a.amount-b.amount;
      case 'amount-desc': return b.amount-a.amount;
      default: return 0;
    }
  });
  return txns;
}

function renderTransactions() {
  const txns = getFilteredSorted();
  const tbody = document.getElementById('txnTableBody');
  const empty = document.getElementById('txnEmpty');
  const isAdmin = state.role === 'admin';
  document.getElementById('actionsHeader').style.display = isAdmin ? '' : 'none';

  if (!txns.length) { tbody.innerHTML=''; empty.style.display='flex'; return; }
  empty.style.display = 'none';

  tbody.innerHTML = txns.map(t => `
    <tr>
      <td><span class="txn-date">${fmtDate(t.date)}</span></td>
      <td><span class="txn-desc">${t.desc}</span></td>
      <td><span class="category-badge">${emojiFor(t.category)} ${t.category}</span></td>
      <td><span class="type-badge ${t.type}">${t.type}</span></td>
      <td><span class="txn-amount ${t.type}">${t.type==='income'?'+':'-'}${fmt(t.amount)}</span></td>
      ${isAdmin ? `
      <td>
        <div class="action-btns">
          <button class="btn-icon" onclick="openEdit(${t.id})" title="Edit">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Edit
          </button>
          <button class="btn-icon del" onclick="deleteTxn(${t.id})" title="Delete">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
            Del
          </button>
        </div>
      </td>` : ''}
    </tr>`).join('');
}

// ─── Filter Dropdowns Population ─────────────
function populateFilterDropdowns() {
  const cats = [...new Set(state.transactions.map(t => t.category))].sort();
  const catSel = document.getElementById('filterCategory');
  catSel.innerHTML = '<option value="all">All Categories</option>' +
    cats.map(c => `<option value="${c}">${emojiFor(c)} ${c}</option>`).join('');

  const months = [...new Set(state.transactions.map(t => t.date.slice(0,7)))].sort().reverse();
  const monSel = document.getElementById('filterMonth');
  monSel.innerHTML = '<option value="all">All Months</option>' +
    months.map(m => {
      const [y,mo] = m.split('-');
      return `<option value="${m}">${MONTH_NAMES[+mo-1]} ${y}</option>`;
    }).join('');
}

// ─── Role Management ─────────────────────────
function applyRole(role) {
  state.role = role;
  const badge = document.getElementById('roleBadge');
  const panel = document.getElementById('adminPanel');
  if (role === 'admin') {
    badge.textContent = '🛡 Admin';
    badge.style.background = 'rgba(244,63,94,0.15)';
    badge.style.borderColor = 'rgba(244,63,94,0.3)';
    badge.style.color = '#f43f5e';
    panel.style.display = 'block';
  } else {
    badge.textContent = '👁 Viewer';
    badge.style.background = '';
    badge.style.borderColor = '';
    badge.style.color = '';
    panel.style.display = 'none';
  }
  renderTransactions();
}

// ─── Modal ────────────────────────────────────
function openModal(title = 'Add Transaction') {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalOverlay').style.display = 'flex';
  document.getElementById('txnDate').value = new Date().toISOString().slice(0,10);
}
function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
  document.getElementById('txnForm').reset();
  state.editingId = null;
}
function openEdit(id) {
  const t = state.transactions.find(x => x.id === id);
  if (!t) return;
  state.editingId = id;
  openModal('Edit Transaction');
  document.getElementById('txnId').value = id;
  document.getElementById('txnDesc').value = t.desc;
  document.getElementById('txnAmount').value = t.amount;
  document.getElementById('txnType').value = t.type;
  document.getElementById('txnCategory').value = t.category;
  document.getElementById('txnDate').value = t.date;
}
function deleteTxn(id) {
  if (!confirm('Delete this transaction?')) return;
  state.transactions = state.transactions.filter(t => t.id !== id);
  saveToStorage();
  populateFilterDropdowns();
  renderTransactions();
  updateSummaryCards();
  initCharts();
  updateInsights();
  showToast('Transaction deleted', 'success');
}

// ─── Form Submit ──────────────────────────────
document.getElementById('txnForm').addEventListener('submit', e => {
  e.preventDefault();
  const t = {
    id: state.editingId || state.nextId++,
    desc: document.getElementById('txnDesc').value.trim(),
    amount: +document.getElementById('txnAmount').value,
    type: document.getElementById('txnType').value,
    category: document.getElementById('txnCategory').value,
    date: document.getElementById('txnDate').value,
  };
  if (state.editingId) {
    const idx = state.transactions.findIndex(x => x.id === state.editingId);
    state.transactions[idx] = t;
    showToast('Transaction updated!', 'success');
  } else {
    state.transactions.unshift(t);
    showToast('Transaction added!', 'success');
  }
  saveToStorage();
  closeModal();
  populateFilterDropdowns();
  renderTransactions();
  updateSummaryCards();
  initCharts();
  updateInsights();
});

// ─── Toast ────────────────────────────────────
function showToast(msg, type='success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast ${type} show`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ─── Export CSV ───────────────────────────────
function exportCSV() {
  const rows = [['Date','Description','Category','Type','Amount']];
  getFilteredSorted().forEach(t => rows.push([t.date, t.desc, t.category, t.type, t.amount]));
  const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type:'text/csv' }));
  a.download = 'finflow_transactions.csv';
  a.click();
  showToast('Exported as CSV!', 'success');
}

// ─── Navigation ───────────────────────────────
function switchSection(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('section-'+section).classList.add('active');
  document.getElementById('nav-'+section).classList.add('active');
  const titles = { dashboard:'Dashboard', transactions:'Transactions', insights:'Insights' };
  document.getElementById('topbarTitle').textContent = titles[section] || section;
  if (section === 'insights') { updateInsights(); setTimeout(() => initCharts(), 50); }
  // Close sidebar on mobile
  if (window.innerWidth <= 768) document.getElementById('sidebar').classList.remove('open');
}

// ─── Theme ────────────────────────────────────
function applyTheme(dark) {
  state.darkMode = dark;
  document.body.classList.toggle('light', !dark);
  initCharts();
}

// ─── Event Listeners ──────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Nav clicks
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      switchSection(item.dataset.section);
    });
  });

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      document.getElementById('sidebar').classList.toggle('open');
    } else {
      document.getElementById('sidebar').classList.toggle('collapsed');
      document.querySelector('.layout').classList.toggle('full');
    }
  });

  // Role select
  document.getElementById('roleSelect').addEventListener('change', e => {
    applyRole(e.target.value);
    showToast(`Switched to ${e.target.value} mode`, 'success');
  });

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('change', e => applyTheme(e.target.checked));

  // Filters
  document.getElementById('searchInput').addEventListener('input', e => {
    state.filters.search = e.target.value; renderTransactions();
  });
  document.getElementById('filterType').addEventListener('change', e => {
    state.filters.type = e.target.value; renderTransactions();
  });
  document.getElementById('filterCategory').addEventListener('change', e => {
    state.filters.category = e.target.value; renderTransactions();
  });
  document.getElementById('filterMonth').addEventListener('change', e => {
    state.filters.month = e.target.value; renderTransactions();
  });
  document.getElementById('sortBy').addEventListener('change', e => {
    state.sort = e.target.value; renderTransactions();
  });
  document.getElementById('clearFilters').addEventListener('click', () => {
    state.filters = { search:'', type:'all', category:'all', month:'all' };
    state.sort = 'date-desc';
    document.getElementById('searchInput').value = '';
    document.getElementById('filterType').value = 'all';
    document.getElementById('filterCategory').value = 'all';
    document.getElementById('filterMonth').value = 'all';
    document.getElementById('sortBy').value = 'date-desc';
    renderTransactions();
  });

  // Add button
  document.getElementById('addTxnBtn').addEventListener('click', () => openModal('Add Transaction'));
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalCancel').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });

  // Export
  document.getElementById('exportBtn').addEventListener('click', exportCSV);

  // Close sidebar overlay on mobile tap outside
  document.querySelector('.main-content').addEventListener('click', () => {
    if (window.innerWidth <= 768) document.getElementById('sidebar').classList.remove('open');
  });

  // Init
  populateFilterDropdowns();
  renderTransactions();
  updateSummaryCards();
  initCharts();
  updateInsights();
  applyRole('viewer');
});
