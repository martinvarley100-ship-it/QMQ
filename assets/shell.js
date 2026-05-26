/* =================================================================
   AimIQ Quote Me Quick demo, shared shell JS
   Renders the left rail and provides demo utilities.
   ================================================================= */

const PERSONAS = {
  jenna: {
    name: "Martin Varley",
    role: "Brightline Promo",
    initials: "MV",
    side: "seller"
  },
  erica: {
    name: "Erica Hahn",
    role: "BruMate Wholesale",
    initials: "EH",
    side: "supplier"
  },
  jen: {
    name: "Jen Walker",
    role: "Garyline Drinkware",
    initials: "JW",
    side: "supplier"
  },
  dave: {
    name: "Dave Anderson",
    role: "BruMate VP Sales",
    initials: "DA",
    side: "supplier"
  }
};

const SELLER_NAV = [
  { section: "" },
  { label: "New Chat", icon: "plus", href: "#" },
  { label: "Resume Chat", icon: "chat", href: "#" },
  { section: "IQ TOOLS" },
  { label: "Search For Products", icon: "search", href: "#" },
  { label: "Lookup Inventory", icon: "clipboard", href: "#" },
  { label: "Find a Logo", icon: "image", href: "#" },
  { label: "Product Mock Up", icon: "palette", href: "#" },
  { label: "Quote Me Quick", icon: "qmq", href: "../seller/01-qmq-dashboard.html", id: "qmq", isNew: true },
  { label: "VIP Suppliers", icon: "diamond", href: "#" },
  { label: "Content Creator", icon: "zap", href: "#" },
  { label: "Promote", icon: "sparkles", href: "#" },
  { section: "MANAGEMENT" },
  { label: "View Library", icon: "chart", href: "#" },
  { label: "Contact Us", icon: "mail", href: "#" }
];

const SUPPLIER_NAV = [
  { section: "" },
  { label: "Dashboard", icon: "chart", href: "../supplier/04-supplier-dashboard.html", id: "dashboard" },
  { label: "Pending Quotes", icon: "inbox", href: "../supplier/01-inbox.html", id: "inbox" },
  { section: "INTELLIGENCE" },
  { label: "Win / Loss Feed", icon: "trending", href: "../supplier/05-win-loss-detail.html", id: "winloss" },
  { label: "RFM Heatmap", icon: "grid", href: "../supplier/06-rfm-heatmap.html", id: "rfm" },
  { label: "Tactical Surface", icon: "target", href: "../supplier/07-tactical.html", id: "tactical" },
  { label: "Loyalty Tax Model", icon: "model", href: "../supplier/08-loyalty-tax.html", id: "loyalty" },
  { section: "TEAM" },
  { label: "Rep Performance", icon: "users", href: "../supplier/09-rep-performance.html", id: "reps" },
  { label: "Integrations", icon: "plug", href: "#" }
];

const ICONS = {
  plus: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  chat: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  clipboard: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>',
  image: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  palette: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125 0-.943.746-1.688 1.688-1.688h1.997c3.104 0 5.642-2.515 5.642-5.812C22.1 6.286 17.55 2 12 2z"/></svg>',
  qmq: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  diamond: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3L8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>',
  zap: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  sparkles: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"/><path d="M19 17L19.7 19.3L22 20L19.7 20.7L19 23L18.3 20.7L16 20L18.3 19.3L19 17Z"/></svg>',
  chart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  inbox: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
  trending: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  grid: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  target: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  model: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  users: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  plug: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>'
};

function renderRail(side, activeId) {
  const persona = side === "seller" ? PERSONAS.jenna :
                  side === "supplier-erica" ? PERSONAS.erica :
                  side === "supplier-jen" ? PERSONAS.jen :
                  side === "supplier-dave" ? PERSONAS.dave : PERSONAS.jenna;
  const nav = (side === "seller") ? SELLER_NAV : SUPPLIER_NAV;
  const brandLabel = (side === "seller") ? "aim" : "aim";
  const sideTag = (side === "seller") ? "" : '<div style="font-size:10px;color:var(--rail-muted);text-transform:uppercase;letter-spacing:1px;font-weight:600;margin-left:8px;padding:2px 8px;background:var(--rail-hover);border-radius:4px">Supplier</div>';

  // Detect if we are at the site root (index.html) vs a subfolder page.
  // From a subfolder like /QMQ/seller/, "../seller/x.html" works fine.
  // From the root /QMQ/, "../seller/x.html" goes one level too high. Strip the ../ in that case.
  const atRoot = !window.location.pathname.match(/\/(seller|supplier)\//);
  const fixHref = (h) => {
    if (!h || h === "#") return h;
    return atRoot ? h.replace(/^\.\.\//, "") : h;
  };

  const items = nav.map(item => {
    if (item.section !== undefined) {
      return item.section ? `<div class="rail-section-label">${item.section}</div>` : '<div style="height:4px"></div>';
    }
    const active = (activeId && item.id === activeId) ? "active" : "";
    const icon = ICONS[item.icon] || ICONS.search;
    return `<a class="rail-item ${active}" href="${fixHref(item.href)}"><span class="rail-icon">${icon}</span>${item.label}</a>`;
  }).join("");

  return `
    <div class="rail">
      <div class="rail-brand">
        <div style="display:flex;align-items:center">
          <div class="logo">aim<span class="mark">,</span></div>
          ${sideTag}
        </div>
        <button class="rail-collapse" title="Collapse">⊟</button>
      </div>
      ${items}
      <div class="rail-user">
        <div class="avatar">${persona.initials}</div>
        <div class="name">${persona.name}<div style="font-size:11px;color:var(--rail-muted);font-weight:400">${persona.role}</div></div>
        <div style="color:var(--rail-muted)">⋯</div>
      </div>
    </div>
  `;
}

function showToast(msg, kind = "success") {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.innerHTML = `<span class="toast-icon">✓</span>${msg}`;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 2400);
}

function openModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  let scrim = document.querySelector(".scrim");
  if (!scrim) {
    scrim = document.createElement("div");
    scrim.className = "scrim";
    document.body.appendChild(scrim);
    scrim.addEventListener("click", closeAll);
  }
  scrim.classList.add("show");
  m.classList.add("show");
}
function closeAll() {
  document.querySelectorAll(".modal.show, .drawer.show").forEach(m => m.classList.remove("show"));
  const s = document.querySelector(".scrim");
  if (s) s.classList.remove("show");
}

function renderDemoToggle(currentSide, currentRef) {
  // currentRef is the matching counterpart page across sides for the same brief
  const sellerLink = currentRef.sellerHref || "../seller/01-qmq-dashboard.html";
  const supplierLink = currentRef.supplierHref || "../supplier/01-inbox.html";
  const html = `
    <div class="demo-toggle">
      <span class="demo-label">Demo: view as</span>
      <a href="${sellerLink}" class="${currentSide === 'seller' ? 'active' : ''}">Jenna (Seller)</a>
      <a href="${supplierLink}" class="${currentSide === 'supplier' ? 'active' : ''}">Erica (Supplier)</a>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", html);
}

// Auto-init: any page that wants the shell can include this and call init
document.addEventListener("DOMContentLoaded", () => {
  const railHost = document.getElementById("rail-host");
  if (railHost) {
    const side = railHost.dataset.side || "seller";
    const activeId = railHost.dataset.active || "qmq";
    railHost.outerHTML = renderRail(side, activeId);
  }
  // wire Continue/Submit/Convert buttons that have a data-next attribute
  document.querySelectorAll("[data-next]").forEach(b => {
    b.addEventListener("click", (e) => {
      e.preventDefault();
      const url = b.dataset.next;
      if (b.dataset.toast) {
        showToast(b.dataset.toast);
        setTimeout(() => { window.location.href = url; }, 600);
      } else {
        window.location.href = url;
      }
    });
  });
  // wire toast-only buttons (e.g. Save Draft, Cancel)
  document.querySelectorAll("[data-toast-only]").forEach(b => {
    b.addEventListener("click", (e) => {
      e.preventDefault();
      showToast(b.dataset.toastOnly);
    });
  });
  // wire modal triggers
  document.querySelectorAll("[data-open-modal]").forEach(b => {
    b.addEventListener("click", () => openModal(b.dataset.openModal));
  });
  document.querySelectorAll("[data-close]").forEach(b => {
    b.addEventListener("click", closeAll);
  });
});
