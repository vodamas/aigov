const state = {
  models: [
    {
      id: "AI-PR-311",
      name: "Auto Pricing Elasticity v3",
      purpose: "Optimize premium pricing",
      line: "Pricing",
      owner: "Sarah Kim",
      validator: "Marcus Lee",
      risk: "EU High-Risk",
      status: "Validation",
      deployment: "GCP · Vertex AI",
      regs: ["OSFI E-23", "NY DFS", "EU AI Act"],
      fairness: "Pass",
      monitoring: "Active",
      drift: "Elevated",
      attributes: "Age, postal code",
      lastReview: "Jan 12, 2026"
    },
    {
      id: "AI-UW-204",
      name: "SME Underwriting Score",
      purpose: "Underwriting triage",
      line: "Underwriting",
      owner: "Amina Patel",
      validator: "Grace Lin",
      risk: "High",
      status: "Approved",
      deployment: "GCP · GKE",
      regs: ["OSFI E-23", "NY DFS"],
      fairness: "Pass",
      monitoring: "Active",
      drift: "Stable",
      attributes: "Industry code, region",
      lastReview: "Jan 05, 2026"
    },
    {
      id: "AI-CL-118",
      name: "Claims Severity Predictor",
      purpose: "Claims escalation",
      line: "Claims",
      owner: "Javier Ortiz",
      validator: "Elena Park",
      risk: "Medium",
      status: "Monitoring",
      deployment: "GCP · Cloud Run",
      regs: ["OSFI E-23", "Colorado 10-1-1"],
      fairness: "Watch",
      monitoring: "Active",
      drift: "Elevated",
      attributes: "Claimant age",
      lastReview: "Jan 20, 2026"
    },
    {
      id: "AI-FR-067",
      name: "Fraud Network Graph",
      purpose: "Fraud detection",
      line: "Fraud",
      owner: "Dana Brook",
      validator: "Nikhil Rao",
      risk: "High",
      status: "Validation",
      deployment: "Vendor · Models.io",
      regs: ["OSFI E-23", "NY DFS", "EU AI Act"],
      fairness: "Review",
      monitoring: "Planned",
      drift: "Unknown",
      attributes: "Geography, payment history",
      lastReview: "Dec 18, 2025"
    },
    {
      id: "AI-MK-022",
      name: "Retention Propensity",
      purpose: "Targeted retention",
      line: "Marketing",
      owner: "Kim Warner",
      validator: "Omar Ali",
      risk: "Low",
      status: "Approved",
      deployment: "GCP · BigQuery ML",
      regs: ["Colorado 10-1-1"],
      fairness: "Pass",
      monitoring: "Active",
      drift: "Stable",
      attributes: "Zip code",
      lastReview: "Jan 10, 2026"
    }
  ],
  incidents: [
    { model: "Auto Pricing Elasticity v3", issue: "Bias drift exceeded threshold", date: "Jan 24, 2026" },
    { model: "Claims Severity Predictor", issue: "PSI 0.32 - data drift", date: "Jan 18, 2026" },
    { model: "Fraud Network Graph", issue: "Missing vendor validation pack", date: "Jan 10, 2026" }
  ]
};

const views = document.querySelectorAll(".view");
const navItems = document.querySelectorAll(".nav-item[data-view]");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}

function switchView(viewId) {
  views.forEach((view) => view.classList.toggle("active", view.id === viewId));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
}

navItems.forEach((item) => {
  item.addEventListener("click", () => switchView(item.dataset.view));
});

document.querySelectorAll("[data-toast]").forEach((btn) => {
  btn.addEventListener("click", () => showToast(btn.dataset.toast));
});

const totalEl = document.getElementById("stat-total");
const highEl = document.getElementById("stat-high");
const approvalsEl = document.getElementById("stat-approvals");
const incidentEl = document.getElementById("stat-incidents");

function renderStats() {
  totalEl.textContent = state.models.length;
  highEl.textContent = state.models.filter((m) => m.risk.includes("High")).length;
  approvalsEl.textContent = state.models.filter((m) => m.status === "Validation").length;
  incidentEl.textContent = state.incidents.length;
}

function renderRiskBars() {
  const container = document.getElementById("risk-bars");
  const tiers = ["Low", "Medium", "High", "EU High-Risk"];
  const counts = tiers.map((tier) => state.models.filter((m) => m.risk === tier).length);
  const max = Math.max(...counts, 1);
  container.innerHTML = tiers
    .map(
      (tier, idx) => `
      <div class="bar">
        <span>${tier}</span>
        <div class="bar-track">
          <div class="bar-fill" style="width:${(counts[idx] / max) * 100}%"></div>
        </div>
      </div>
    `
    )
    .join("");
}

function renderGapList() {
  const gaps = [
    "2 models missing EU AI Act post-market monitoring evidence",
    "Vendor model AI-FR-067 lacks bias remediation record",
    "One high-risk model pending board-level sign-off"
  ];
  const list = document.getElementById("gap-list");
  list.innerHTML = gaps.map((gap) => `<li>${gap}</li>`).join("");
}

function tableHeader(cols) {
  return `<div class="table-row header">${cols.map((c) => `<div>${c}</div>`).join("")}</div>`;
}

function renderHighRiskTable() {
  const container = document.getElementById("high-risk-table");
  const rows = state.models.filter((m) => m.risk.includes("High")).map((m) => `
      <div class="table-row">
        <div>${m.name}</div>
        <div>${m.line}</div>
        <div>${m.owner}</div>
        <div>${m.status}</div>
        <div>${m.drift}</div>
        <div><button class="ghost" data-select="${m.id}">Open</button></div>
      </div>
    `);
  container.innerHTML = tableHeader(["Model", "Line", "Owner", "Status", "Drift", "Action"]) + rows.join("");
  container.querySelectorAll("[data-select]").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchView("inventory");
      selectModel(btn.dataset.select);
    });
  });
}

const inventoryTable = document.getElementById("inventory-table");
const detailBody = document.getElementById("detail-body");
const detailStatus = document.getElementById("detail-status");

function renderInventory(models) {
  const rows = models.map((m) => `
    <div class="table-row">
      <div><strong>${m.name}</strong><br><span class="muted">${m.id}</span></div>
      <div>${m.line}</div>
      <div>${m.owner}</div>
      <div>${m.risk}</div>
      <div>${m.status}</div>
      <div><button class="ghost" data-select="${m.id}">View</button></div>
    </div>
  `);
  inventoryTable.innerHTML =
    tableHeader(["Model", "Line", "Owner", "Risk", "Status", "Action"]) + rows.join("");
  inventoryTable.querySelectorAll("[data-select]").forEach((btn) =>
    btn.addEventListener("click", () => selectModel(btn.dataset.select))
  );
}

function selectModel(modelId) {
  const model = state.models.find((m) => m.id === modelId) || state.models[0];
  detailStatus.textContent = model.status;
  detailBody.innerHTML = `
    <div><strong>Purpose:</strong> ${model.purpose}</div>
    <div><strong>Owner:</strong> ${model.owner}</div>
    <div><strong>Validator:</strong> ${model.validator}</div>
    <div><strong>Deployment:</strong> ${model.deployment}</div>
    <div><strong>Risk tier:</strong> ${model.risk}</div>
    <div><strong>Regulations:</strong> ${model.regs.join(", ")}</div>
    <div><strong>Fairness status:</strong> ${model.fairness}</div>
    <div><strong>Monitoring:</strong> ${model.monitoring} · Drift ${model.drift}</div>
    <div><strong>Sensitive attributes:</strong> ${model.attributes}</div>
    <div><strong>Last review:</strong> ${model.lastReview}</div>
  `;
}

const searchInput = document.getElementById("search");
const riskFilter = document.getElementById("risk-filter");

function applyInventoryFilter() {
  const query = searchInput.value.toLowerCase();
  const risk = riskFilter.value;
  const filtered = state.models.filter((m) => {
    const matchesQuery =
      m.name.toLowerCase().includes(query) ||
      m.owner.toLowerCase().includes(query) ||
      m.purpose.toLowerCase().includes(query);
    const matchesRisk = !risk || m.risk === risk;
    return matchesQuery && matchesRisk;
  });
  renderInventory(filtered);
}

searchInput.addEventListener("input", applyInventoryFilter);
riskFilter.addEventListener("change", applyInventoryFilter);

function renderWorkflow() {
  const columns = [
    { title: "Development", items: ["Auto Pricing Elasticity v3", "Fraud Network Graph"] },
    { title: "Validation", items: ["SME Underwriting Score", "Claims Severity Predictor"] },
    { title: "MRM Review", items: ["Auto Pricing Elasticity v3"] },
    { title: "Business Approval", items: ["Retention Propensity"] }
  ];
  const board = document.getElementById("workflow-board");
  board.innerHTML = columns
    .map(
      (col) => `
      <div class="workflow-column">
        <h4>${col.title}</h4>
        ${col.items.map((item) => `<div class="workflow-card">${item}</div>`).join("")}
      </div>
    `
    )
    .join("");

  document.getElementById("exceptions").innerHTML = [
    "Bias remediation waiver · Auto Pricing Elasticity v3 · Expires Feb 15, 2026",
    "Monitoring SLA extension · Fraud Network Graph · Expires Mar 02, 2026"
  ]
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.getElementById("evidence").innerHTML = [
    "Validation notebook · SME Underwriting Score",
    "Board approval memo · Retention Propensity",
    "Vendor due diligence pack · Fraud Network Graph"
  ]
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderFairness() {
  document.getElementById("fairness-metrics").innerHTML = [
    { label: "Disparate impact", value: "0.92", note: "Threshold ≥ 0.8" },
    { label: "Equalized odds", value: "0.07", note: "Max delta 0.1" },
    { label: "Calibration by group", value: "0.03", note: "Gap < 0.05" }
  ]
    .map(
      (metric) => `
      <div class="metric">
        <span>${metric.label}</span>
        <strong>${metric.value}</strong>
        <span>${metric.note}</span>
      </div>
    `
    )
    .join("");

  document.getElementById("remediations").innerHTML = [
    "Reweighted training data for Zip Code proxy · Jan 20, 2026",
    "Added monotonic constraints for age band · Jan 12, 2026",
    "Scheduled fairness re-test post drift event · Jan 28, 2026"
  ]
    .map((item) => `<li>${item}</li>`)
    .join("");

  const biasTable = document.getElementById("bias-table");
  const rows = [
    ["Auto Pricing Elasticity v3", "Age", "Pass", "0.92", "Jan 24, 2026"],
    ["Claims Severity Predictor", "Gender", "Watch", "0.81", "Jan 18, 2026"],
    ["Fraud Network Graph", "Region", "Review", "0.77", "Jan 10, 2026"]
  ]
    .map(
      (row) => `
      <div class="table-row">
        ${row.map((cell) => `<div>${cell}</div>`).join("")}
      </div>
    `
    )
    .join("");
  biasTable.innerHTML =
    tableHeader(["Model", "Protected class", "Status", "Disparate impact", "Last run"]) + rows;
}

function renderMonitoring() {
  const monitorGrid = document.getElementById("monitor-grid");
  monitorGrid.innerHTML = state.models
    .map(
      (m) => `
      <div class="monitor-card">
        <strong>${m.name}</strong>
        <p class="card-meta">${m.monitoring} · Drift ${m.drift}</p>
        <p class="card-meta">Data drift PSI ${m.drift === "Elevated" ? "0.32" : "0.08"}</p>
      </div>
    `
    )
    .join("");

  document.getElementById("alert-timeline").innerHTML = state.incidents
    .map((incident) => `<li><strong>${incident.model}</strong> · ${incident.issue} · ${incident.date}</li>`)
    .join("");
}

function renderRegulatory() {
  const matrix = document.getElementById("reg-matrix");
  const rows = [
    ["Model inventory", "Full", "Full", "Full", "Full"],
    ["Fairness testing", "Partial", "Full", "Partial", "Full"],
    ["Board oversight", "Partial", "Partial", "Full", "Partial"],
    ["Monitoring & drift", "Full", "Full", "Full", "Full"],
    ["Technical documentation", "Full", "Partial", "Full", "Full"]
  ]
    .map(
      (row) => `
      <div class="table-row">
        ${row.map((cell) => `<div>${cell}</div>`).join("")}
      </div>
    `
    )
    .join("");
  matrix.innerHTML =
    tableHeader(["Control", "OSFI E-23", "Colorado 10-1-1", "NY DFS", "EU AI Act"]) + rows;

  document.getElementById("coverage-cards").innerHTML = [
    { title: "OSFI E-23", value: "92%", note: "2 gaps" },
    { title: "Colorado 10-1-1", value: "88%", note: "Bias remediation pending" },
    { title: "NY DFS", value: "95%", note: "Board reporting cadence" },
    { title: "EU AI Act", value: "90%", note: "Post-market monitoring" }
  ]
    .map(
      (item) => `
      <div class="coverage-card">
        <strong>${item.title}</strong>
        <p class="card-meta">Coverage ${item.value}</p>
        <p class="card-meta">${item.note}</p>
      </div>
    `
    )
    .join("");
}

function renderAudit() {
  const auditTable = document.getElementById("audit-table");
  const rows = [
    ["AI-PR-311", "Validation approved", "Marcus Lee", "Jan 12, 2026", "Notebook + results"],
    ["AI-UW-204", "MRM approval", "Risk Committee", "Jan 08, 2026", "Decision memo"],
    ["AI-CL-118", "Bias test run", "Elena Park", "Jan 18, 2026", "Fairness report"],
    ["AI-FR-067", "Vendor review", "TPRM Office", "Dec 18, 2025", "Due diligence pack"]
  ]
    .map(
      (row) => `
      <div class="table-row">
        ${row.map((cell) => `<div>${cell}</div>`).join("")}
      </div>
    `
    )
    .join("");
  auditTable.innerHTML =
    tableHeader(["Model", "Event", "Owner", "Date", "Evidence"]) + rows;
}

function renderBoard() {
  document.getElementById("board-grid").innerHTML = [
    { title: "AI exposure", value: "$4.2B", note: "Premiums influenced" },
    { title: "High-risk models", value: "3", note: "EU + materiality" },
    { title: "Open remediation", value: "5", note: "Bias + drift" },
    { title: "Vendor models", value: "2", note: "In scope" }
  ]
    .map(
      (item) => `
      <div class="board-card">
        <span class="card-label">${item.title}</span>
        <h3>${item.value}</h3>
        <p class="card-meta">${item.note}</p>
      </div>
    `
    )
    .join("");

  document.getElementById("board-incidents").innerHTML = [
    "Pricing model drift triggered escalation · Jan 24, 2026",
    "Vendor fraud model validation overdue · Jan 10, 2026",
    "Claims model fairness re-test scheduled · Jan 28, 2026"
  ]
    .map((item) => `<li>${item}</li>`)
    .join("");
}

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const btnNewModel = document.getElementById("btn-new-model");
const form = document.getElementById("model-form");

function openModal() {
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

btnNewModel.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const model = {
    id: `AI-${Math.floor(Math.random() * 900 + 100)}`,
    name: data.get("name"),
    purpose: data.get("purpose"),
    owner: data.get("owner"),
    validator: "Assigned",
    line: data.get("line"),
    risk: data.get("line") === "Pricing" ? "EU High-Risk" : "Medium",
    status: "Development",
    deployment: data.get("deployment"),
    regs: ["OSFI E-23", "NY DFS"],
    fairness: "Pending",
    monitoring: "Planned",
    drift: "Unknown",
    attributes: data.get("attributes") || "N/A",
    lastReview: "Jan 29, 2026"
  };
  state.models.unshift(model);
  renderAll();
  selectModel(model.id);
  closeModal();
  showToast("Model registered and queued for validation");
  form.reset();
});

document.getElementById("btn-export").addEventListener("click", () => {
  showToast("Regulatory report queued for export");
});

function renderAll() {
  renderStats();
  renderRiskBars();
  renderGapList();
  renderHighRiskTable();
  renderInventory(state.models);
  selectModel(state.models[0].id);
  renderWorkflow();
  renderFairness();
  renderMonitoring();
  renderRegulatory();
  renderAudit();
  renderBoard();
}

renderAll();
