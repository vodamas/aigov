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
  ],
  agents: [
    {
      id: "AG-0001",
      name: "Pricing Supervisor Agent",
      parent: "Sarah Kim (Human)",
      authority: "Read/write pricing + quote systems",
      scope: "Max transaction $250k",
      delegation: "Static: Pricing policy v4 · Dynamic: Margin guardrails",
      models: ["AI-PR-311"],
      hierarchy: "Supervisor",
      oauth: "pricing.write scope",
      keys: "ed25519:AG-0001",
      lastDelegation: "Jan 26, 2026"
    },
    {
      id: "AG-0002",
      name: "Claims Triage Agent",
      parent: "Elena Park (Human)",
      authority: "Read claims + approve escalation",
      scope: "Max claim $50k",
      delegation: "Static: Claims SOP 7.2 · Dynamic: Severity > 0.7",
      models: ["AI-CL-118"],
      hierarchy: "Sequential",
      oauth: "claims.read approve.escalation",
      keys: "ed25519:AG-0002",
      lastDelegation: "Jan 22, 2026"
    },
    {
      id: "AG-0003",
      name: "Fraud Swarm Orchestrator",
      parent: "Dana Brook (Human)",
      authority: "Read fraud signals + block payouts",
      scope: "Max payout hold $20k",
      delegation: "Static: Fraud playbook 3.1 · Dynamic: Network score > 0.8",
      models: ["AI-FR-067"],
      hierarchy: "Swarm",
      oauth: "fraud.read payouts.hold",
      keys: "ed25519:AG-0003",
      lastDelegation: "Jan 27, 2026"
    },
    {
      id: "AG-0004",
      name: "Retention Outreach Agent",
      parent: "Kim Warner (Human)",
      authority: "Read CRM + trigger offers",
      scope: "Max incentive $250",
      delegation: "Static: Marketing policy 5.4 · Dynamic: Churn risk > 0.6",
      models: ["AI-MK-022"],
      hierarchy: "Single",
      oauth: "crm.read offers.write",
      keys: "ed25519:AG-0004",
      lastDelegation: "Jan 21, 2026"
    }
  ],
  useCases: [
    {
      id: "UC-PR-12",
      name: "Dynamic premium adjustments",
      domain: "Pricing",
      criticality: "High",
      sensitivity: "PII + financial",
      reversibility: "Medium",
      externalAccess: "Quote engine + policy admin",
      autonomy: "Semi-autonomous",
      score: 0.72,
      decision: "Approved with constraints",
      constraints: "Max 3% price change; human override required",
      agents: ["AG-0001"],
      models: ["AI-PR-311"],
      systems: ["Quote engine", "Policy admin"],
      lastReview: "Jan 25, 2026"
    },
    {
      id: "UC-CL-08",
      name: "Claims severity triage",
      domain: "Claims",
      criticality: "Medium",
      sensitivity: "PHI + PII",
      reversibility: "High",
      externalAccess: "Claims core system",
      autonomy: "Human-in-the-loop",
      score: 0.54,
      decision: "Approved",
      constraints: "Manual approval for payouts > $25k",
      agents: ["AG-0002"],
      models: ["AI-CL-118"],
      systems: ["Claims core"],
      lastReview: "Jan 19, 2026"
    },
    {
      id: "UC-FR-05",
      name: "Fraud hold + investigation",
      domain: "Fraud",
      criticality: "High",
      sensitivity: "Financial + behavioral",
      reversibility: "Low",
      externalAccess: "Payments + SIU case mgmt",
      autonomy: "Autonomous",
      score: 0.83,
      decision: "Rejected",
      constraints: "Requires human review before holds",
      agents: ["AG-0003"],
      models: ["AI-FR-067"],
      systems: ["Payments", "Case mgmt"],
      lastReview: "Jan 27, 2026"
    },
    {
      id: "UC-MK-03",
      name: "Retention outreach nudges",
      domain: "Marketing",
      criticality: "Low",
      sensitivity: "PII",
      reversibility: "High",
      externalAccess: "CRM + email",
      autonomy: "Low",
      score: 0.31,
      decision: "Approved",
      constraints: "Weekly batch; opt-out enforced",
      agents: ["AG-0004"],
      models: ["AI-MK-022"],
      systems: ["CRM", "Email"],
      lastReview: "Jan 18, 2026"
    }
  ],
  oversight: [
    {
      item: "Pricing exception waiver",
      reviewer: "Risk Committee",
      decision: "Approved",
      timeSpentSec: 92,
      contentViewed: 6,
      edits: 1,
      override: true,
      date: "Jan 24, 2026"
    },
    {
      item: "Fraud hold automation",
      reviewer: "Dana Brook",
      decision: "Rejected",
      timeSpentSec: 180,
      contentViewed: 9,
      edits: 2,
      override: false,
      date: "Jan 27, 2026"
    },
    {
      item: "Claims triage escalation",
      reviewer: "Elena Park",
      decision: "Approved",
      timeSpentSec: 4,
      contentViewed: 1,
      edits: 0,
      override: false,
      date: "Jan 20, 2026"
    },
    {
      item: "Marketing copy review",
      reviewer: "Compliance",
      decision: "Approved",
      timeSpentSec: 14,
      contentViewed: 3,
      edits: 0,
      override: false,
      date: "Jan 15, 2026"
    }
  ],
  agentLogs: [
    {
      id: "LOG-8421",
      agent: "Pricing Supervisor Agent",
      plan: ["Pull quote context", "Run pricing model", "Apply policy caps", "Draft adjustment"],
      tools: [
        { name: "quote.fetch", params: "policy_id=Q-1182" },
        { name: "pricing.score", params: "model=AI-PR-311" },
        { name: "policy.check", params: "pricing-policy-v4" }
      ],
      deviation: "Cap applied: 3% max change",
      approval: "Risk Committee",
      incident: "None",
      timestamp: "Jan 26, 2026 14:12"
    },
    {
      id: "LOG-8477",
      agent: "Fraud Swarm Orchestrator",
      plan: ["Ingest signals", "Score network risk", "Open SIU case", "Hold payout"],
      tools: [
        { name: "fraud.graph", params: "model=AI-FR-067" },
        { name: "case.open", params: "severity=high" },
        { name: "payout.hold", params: "amount=$18k" }
      ],
      deviation: "Hold blocked: human approval required",
      approval: "Dana Brook",
      incident: "FR-INC-12",
      timestamp: "Jan 27, 2026 09:34"
    },
    {
      id: "LOG-8520",
      agent: "Claims Triage Agent",
      plan: ["Summarize claim", "Classify severity", "Recommend escalation"],
      tools: [
        { name: "claims.read", params: "claim_id=CL-8821" },
        { name: "severity.score", params: "model=AI-CL-118" }
      ],
      deviation: "No deviation",
      approval: "Elena Park",
      incident: "None",
      timestamp: "Jan 22, 2026 11:03"
    }
  ],
  knowledgeSources: [
    {
      id: "SRC-1001",
      name: "Pricing policy v4",
      type: "Policy document",
      version: "4.2",
      effective: "Jan 02, 2026",
      status: "Active",
      citations: "Mandatory",
      owner: "Pricing Governance",
      lastChange: "Jan 16, 2026",
      drift: "Stable"
    },
    {
      id: "SRC-1007",
      name: "Claims SOP 7.2",
      type: "Procedure",
      version: "7.2",
      effective: "Dec 15, 2025",
      status: "Active",
      citations: "Mandatory",
      owner: "Claims Ops",
      lastChange: "Jan 05, 2026",
      drift: "Stable"
    },
    {
      id: "SRC-1012",
      name: "Fraud playbook 3.1",
      type: "Playbook",
      version: "3.1",
      effective: "Nov 18, 2025",
      status: "Deprecated",
      citations: "Blocked",
      owner: "Fraud Office",
      lastChange: "Jan 10, 2026",
      drift: "Changed"
    }
  ],
  knowledgeApprovals: [
    "New reinsurance treaty FAQ · Pending legal review",
    "External credit risk API · Vendor assessment due",
    "Updated claims escalation SOP · Change board review"
  ],
  knowledgeAlerts: [
    "SRC-1012 deprecated but referenced 4 times · Jan 27, 2026",
    "Pricing policy v4 updated; re-validate agent prompts · Jan 16, 2026",
    "Claims SOP 7.2 last reviewed > 90 days · Jan 11, 2026"
  ],
  incidentReplays: [
    {
      id: "INC-221",
      summary: "Pricing drift created unfair uplift",
      rootCause: "Model error",
      severity: "High",
      agent: "AG-0001",
      model: "AI-PR-311",
      date: "Jan 24, 2026",
      timeline: [
        "Data shift detected (PSI 0.32)",
        "Agent applied pricing uplift",
        "Human override delayed 12 minutes",
        "Customer complaint logged"
      ]
    },
    {
      id: "INC-227",
      summary: "Fraud hold attempted without approval",
      rootCause: "Permission breach",
      severity: "Medium",
      agent: "AG-0003",
      model: "AI-FR-067",
      date: "Jan 27, 2026",
      timeline: [
        "Swarm orchestrator triggered payout hold",
        "Policy gate blocked action",
        "Incident logged and escalated"
      ]
    }
  ],
  training: [
    {
      user: "Sarah Kim",
      role: "Overseer",
      module: "Agent oversight for pricing",
      completed: "Jan 06, 2026",
      expires: "Jul 06, 2026",
      status: "Active"
    },
    {
      user: "Elena Park",
      role: "Overseer",
      module: "Claims HITL review",
      completed: "Dec 20, 2025",
      expires: "Jun 20, 2026",
      status: "Active"
    },
    {
      user: "Dana Brook",
      role: "Integrator",
      module: "Fraud agent deployment",
      completed: "Oct 10, 2025",
      expires: "Jan 10, 2026",
      status: "Expired"
    },
    {
      user: "Kim Warner",
      role: "Interactor",
      module: "Marketing agent usage",
      completed: "Jan 11, 2026",
      expires: "Jul 11, 2026",
      status: "Active"
    }
  ],
  connections: {
    gcpConnected: false,
    lastSync: null,
    sources: ["Local uploads"]
  },
  liveMetrics: {
    explainabilityStability: 0.91,
    fairnessDelta: 0.04,
    calibrationDrift: 0.03,
    performanceDecay: 0.05
  },
  liveChecks: [
    {
      model: "Auto Pricing Elasticity v3",
      check: "Explainability stability",
      value: 0.91,
      status: "Stable",
      updated: "Jan 30, 2026 09:05"
    },
    {
      model: "Claims Severity Predictor",
      check: "Fairness delta",
      value: 0.04,
      status: "Stable",
      updated: "Jan 30, 2026 09:05"
    },
    {
      model: "Fraud Network Graph",
      check: "Calibration drift",
      value: 0.08,
      status: "Watch",
      updated: "Jan 30, 2026 09:05"
    }
  ],
  reportSummary: [
    { label: "Avg model uptime", value: "99.3%", note: "Last 30 days" },
    { label: "Mean AUC", value: "0.89", note: "Portfolio weighted" },
    { label: "Open alerts", value: "6", note: "Drift + bias" },
    { label: "Resolved incidents", value: "14", note: "Quarter to date" }
  ],
  performanceTrends: [
    { model: "Auto Pricing Elasticity v3", metric: "AUC", values: [0.92, 0.91, 0.9, 0.88] },
    { model: "SME Underwriting Score", metric: "AUC", values: [0.87, 0.88, 0.89, 0.88] },
    { model: "Claims Severity Predictor", metric: "RMSE", values: [0.32, 0.34, 0.36, 0.38] },
    { model: "Retention Propensity", metric: "Lift", values: [1.8, 1.75, 1.72, 1.7] }
  ],
  stabilityStats: [
    { label: "PSI alerts (30d)", value: "3", trend: "Up" },
    { label: "Bias drift flags", value: "2", trend: "Flat" },
    { label: "Explainability variance", value: "0.07", trend: "Down" },
    { label: "Approval overrides", value: "18%", trend: "Up" }
  ],
  opsKpis: [
    { label: "Avg time-to-detect", value: "18m", note: "Monitoring alerts" },
    { label: "Avg time-to-resolve", value: "2.4d", note: "Incidents" },
    { label: "Policy breaches", value: "1", note: "Last 30 days" },
    { label: "Human reviews", value: "142", note: "Monthly" }
  ],
  evidence: [
    { title: "Validation notebook · SME Underwriting Score", type: "Notebook", owner: "Marcus Lee" },
    { title: "Board approval memo · Retention Propensity", type: "Decision Memo", owner: "Risk Committee" },
    { title: "Vendor due diligence pack · Fraud Network Graph", type: "Due Diligence", owner: "TPRM Office" }
  ],
  exceptions: [
    "Bias remediation waiver · Auto Pricing Elasticity v3 · Expires Feb 15, 2026",
    "Monitoring SLA extension · Fraud Network Graph · Expires Mar 02, 2026"
  ]
};

const tooltipCopy = {
  "Disparate impact":
    "Ratio of favorable outcomes across groups. Values closer to 1 indicate parity.",
  "Equalized odds":
    "Difference in error rates across groups. Lower values indicate more parity.",
  "Calibration by group":
    "Gap between predicted and observed outcomes across groups.",
  "Calibration gap":
    "Difference between predicted and observed rates across groups.",
  "Explainability stability":
    "How consistent feature attributions remain over time.",
  "Fairness delta":
    "Change in fairness metric versus baseline; smaller is better.",
  "Calibration drift":
    "Shift in probability calibration over time.",
  "Performance decay":
    "Drop in model performance versus baseline over time.",
  "Population stability (PSI)":
    "Population Stability Index measures distribution shift. Higher PSI means more drift.",
  "Population shift (PSI)":
    "Population Stability Index compares production vs training distributions.",
  "Bias drift delta":
    "Change in bias metric over time; higher indicates growing disparity.",
  "Data drift PSI":
    "PSI between production and training data."
};

function escapeAttr(value) {
  return String(value).replace(/"/g, "&quot;");
}

function withTooltip(label) {
  const tip = tooltipCopy[label];
  if (!tip) return label;
  return `<span class="term">${label}<span class="info" tabindex="0" data-tooltip="${escapeAttr(
    tip
  )}">i</span></span>`;
}

const views = document.querySelectorAll(".view");
const navItems = document.querySelectorAll(".nav-item[data-view]");
const toast = document.getElementById("toast");
const docModal = document.getElementById("doc-modal");
const docTitle = document.getElementById("doc-title");
const docBody = document.getElementById("doc-body");
const docClose = document.getElementById("doc-close");

const highlight = {
  ids: [],
  reason: ""
};

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}

function switchView(viewId) {
  views.forEach((view) => view.classList.toggle("active", view.id === viewId));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
}

function openDoc(title, body) {
  docTitle.textContent = title;
  docBody.innerHTML = body;
  docModal.classList.remove("hidden");
}

function closeDoc() {
  docModal.classList.add("hidden");
}

docClose.addEventListener("click", closeDoc);
docModal.addEventListener("click", (e) => {
  if (e.target === docModal) closeDoc();
});

navItems.forEach((item) => {
  item.addEventListener("click", () => switchView(item.dataset.view));
});

document.querySelectorAll("[data-toast]").forEach((btn) => {
  btn.addEventListener("click", () => handleQuickAction(btn.dataset.toast));
});

const totalEl = document.getElementById("stat-total");
const highEl = document.getElementById("stat-high");
const approvalsEl = document.getElementById("stat-approvals");
const incidentEl = document.getElementById("stat-incidents");
const agentEl = document.getElementById("stat-agents");
const usecaseEl = document.getElementById("stat-usecases");

function renderStats() {
  totalEl.textContent = state.models.length;
  highEl.textContent = state.models.filter((m) => m.risk.includes("High")).length;
  approvalsEl.textContent = state.models.filter((m) => m.status === "Validation").length;
  incidentEl.textContent = state.incidents.length;
  agentEl.textContent = state.agents.length;
  usecaseEl.textContent = state.useCases.filter((u) => u.decision !== "Approved").length;
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
    {
      title: "2 models missing EU AI Act post-market monitoring evidence",
      regulation: "EU AI Act · Article 61",
      detail:
        "<p><strong>Why it breaks:</strong> post-market monitoring is mandatory for high-risk AI. Two models lack evidence of ongoing monitoring reports.</p><p><strong>Impact:</strong> Non-compliance with post-market monitoring obligations.</p><p><strong>Models:</strong> Auto Pricing Elasticity v3, Fraud Network Graph</p>"
    },
    {
      title: "Vendor model AI-FR-067 lacks bias remediation record",
      regulation: "Colorado 10-1-1 · Testing & remediation",
      detail:
        "<p><strong>Why it breaks:</strong> fairness testing requires documented remediation actions for adverse impact. Vendor pack is missing corrective action evidence.</p><p><strong>Impact:</strong> Risk of algorithmic discrimination.</p><p><strong>Model:</strong> Fraud Network Graph</p>"
    },
    {
      title: "One high-risk model pending board-level sign-off",
      regulation: "NY DFS Letter 7 · Board oversight",
      detail:
        "<p><strong>Why it breaks:</strong> board oversight requires documented approval for material AI models. One model is still pending.</p><p><strong>Impact:</strong> Governance control gap.</p><p><strong>Model:</strong> Auto Pricing Elasticity v3</p>"
    }
  ];
  const list = document.getElementById("gap-list");
  list.innerHTML = gaps
    .map(
      (gap, idx) =>
        `<li class="clickable" data-gap="${idx}"><strong>${gap.title}</strong><br><span class="muted">${gap.regulation}</span></li>`
    )
    .join("");
  list.querySelectorAll("[data-gap]").forEach((item) => {
    item.addEventListener("click", () => {
      const gap = gaps[item.dataset.gap];
      openDoc(
        `Coverage gap · ${gap.regulation}`,
        `<p><span class="highlight">${gap.title}</span></p>${gap.detail}`
      );
    });
  });
}

function tableHeader(cols) {
  return `<div class="table-row header cols-${cols.length}">${cols
    .map((c) => `<div>${c}</div>`)
    .join("")}</div>`;
}

function tableRow(cells, extraClass = "") {
  const className = `table-row cols-${cells.length} ${extraClass}`.trim();
  return `<div class="${className}">${cells.map((c) => `<div>${c}</div>`).join("")}</div>`;
}

function statusTag(label, tone) {
  return `<span class="tag ${tone}">${label}</span>`;
}

function renderHighRiskTable() {
  const container = document.getElementById("high-risk-table");
  const rows = state.models
    .filter((m) => m.risk.includes("High"))
    .map((m) =>
      tableRow(
        [
          m.name,
          m.line,
          m.owner,
          m.status,
          m.drift,
          `<button class="ghost" data-select="${m.id}">Open</button>`
        ],
        ""
      )
    );
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
  const rows = models.map((m) =>
    tableRow(
      [
        `<strong>${m.name}</strong><br><span class="muted">${m.id}</span>`,
        m.line,
        m.owner,
        m.risk,
        m.status,
        `<button class="ghost" data-select="${m.id}">View</button>`
      ],
      highlight.ids.includes(m.id) ? "row-highlight" : ""
    )
  );
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
  document.getElementById("lineage-body").innerHTML = `
    <div><strong>Lineage:</strong> Data → Feature store → Model → Deployment</div>
    <div><strong>Training code hash:</strong> ${model.id}-c1a92</div>
    <div><strong>Dataset fingerprint:</strong> ${model.id}-ds-${model.line.slice(0, 2).toUpperCase()}</div>
    <div><strong>Completeness:</strong> 97% · <strong>Accuracy:</strong> 96% · <strong>Privacy:</strong> PII masked</div>
    <div><strong>Data sources:</strong> Policy admin, claims, external enrichment</div>
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

  document.getElementById("exceptions").innerHTML = state.exceptions
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.getElementById("evidence").innerHTML = state.evidence
    .map((item, idx) => `<li class="clickable" data-evidence="${idx}">${item.title}</li>`)
    .join("");
  document.querySelectorAll("[data-evidence]").forEach((item) => {
    item.addEventListener("click", () => openEvidence(item.dataset.evidence));
  });
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
        <span>${withTooltip(metric.label)}</span>
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
    .map((row) => tableRow(row))
    .join("");
  biasTable.innerHTML =
    tableHeader([
      "Model",
      "Protected class",
      "Status",
      withTooltip("Disparate impact"),
      "Last run"
    ]) + rows;
}

function renderMonitoring() {
  const monitorGrid = document.getElementById("monitor-grid");
  monitorGrid.innerHTML = state.models
    .map(
      (m) => `
      <div class="monitor-card">
        <strong>${m.name}</strong>
        <p class="card-meta">${m.monitoring} · Drift ${m.drift}</p>
        <p class="card-meta">${withTooltip("Data drift PSI")} ${m.drift === "Elevated" ? "0.32" : "0.08"}</p>
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
  const controls = [
    { name: "Model inventory", values: ["Full", "Full", "Full", "Full"] },
    { name: "Fairness testing", values: ["Partial", "Full", "Partial", "Full"] },
    { name: "Board oversight", values: ["Partial", "Partial", "Full", "Partial"] },
    { name: "Monitoring & drift", values: ["Full", "Full", "Full", "Full"] },
    { name: "Technical documentation", values: ["Full", "Partial", "Full", "Full"] }
  ];
  const regs = ["OSFI E-23", "Colorado 10-1-1", "NY DFS", "EU AI Act"];
  const rows = controls
    .map((control, rIdx) => {
      const cells = [control.name].concat(
        control.values.map((value, cIdx) => {
          if (value === "Partial") {
            return `<button class="ghost small" data-partial="${rIdx}-${cIdx}">${value}</button>`;
          }
          return value;
        })
      );
      return tableRow(cells);
    })
    .join("");
  matrix.innerHTML =
    tableHeader(["Control", "OSFI E-23", "Colorado 10-1-1", "NY DFS", "EU AI Act"]) + rows;

  const nonCompliance = {
    "1-0": {
      title: "Fairness testing gap · OSFI E-23",
      models: [
        { id: "AI-FR-067", reason: "Vendor fairness remediation missing" },
        { id: "AI-CL-118", reason: "Post-deployment bias re-test pending" }
      ]
    },
    "1-2": {
      title: "Fairness testing gap · NY DFS",
      models: [{ id: "AI-PR-311", reason: "Explainability pack incomplete for fairness review" }]
    },
    "2-0": {
      title: "Board oversight gap · OSFI E-23",
      models: [{ id: "AI-PR-311", reason: "Board sign-off pending" }]
    },
    "2-1": {
      title: "Board oversight gap · Colorado 10-1-1",
      models: [{ id: "AI-CL-118", reason: "Board briefing scheduled" }]
    },
    "2-3": {
      title: "Board oversight gap · EU AI Act",
      models: [{ id: "AI-FR-067", reason: "Human oversight evidence incomplete" }]
    },
    "4-1": {
      title: "Technical documentation gap · Colorado 10-1-1",
      models: [{ id: "AI-MK-022", reason: "Feature documentation missing sensitive attribute note" }]
    }
  };

  matrix.querySelectorAll("[data-partial]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const info = nonCompliance[btn.dataset.partial];
      if (!info) return;
      highlight.ids = info.models.map((m) => m.id);
      highlight.reason = info.title;
      switchView("inventory");
      renderInventory(state.models);
      openDoc(
        info.title,
        `<p>Models not compliant and why:</p><ul>${info.models
          .map((m) => `<li><strong>${m.id}</strong> — ${m.reason}</li>`)
          .join("")}</ul>`
      );
    });
  });

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
      ${tableRow(
        row.map((cell, idx) =>
          idx === 4
            ? `<button class="ghost small" data-report="${cell}">${cell}</button>`
            : cell
        )
      )}
    `
    )
    .join("");
  auditTable.innerHTML =
    tableHeader(["Model", "Event", "Owner", "Date", "Evidence"]) + rows;

  auditTable.querySelectorAll("[data-report]").forEach((btn) => {
    btn.addEventListener("click", () => openReport(btn.dataset.report));
  });
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

function renderAgents() {
  const agentTable = document.getElementById("agent-table");
  const rows = state.agents.map((agent) =>
    tableRow(
      [
        `<strong>${agent.name}</strong><br><span class="muted">${agent.id}</span>`,
        agent.parent,
        agent.authority,
        agent.delegation,
        agent.models.join(", "),
        `<button class="ghost" data-agent="${agent.id}">Details</button>`
      ],
      ""
    )
  );
  agentTable.innerHTML =
    tableHeader(["Agent", "Parent entity", "Authority scope", "Delegation rules", "Linked models", "Action"]) +
    rows.join("");

  const timeline = document.getElementById("delegation-timeline");
  timeline.innerHTML = state.agents
    .map(
      (agent) =>
        `<li><strong>${agent.name}</strong> delegated by ${agent.parent} · ${agent.lastDelegation} · ${agent.hierarchy}</li>`
    )
    .join("");

  const hotspots = document.getElementById("authority-hotspots");
  hotspots.innerHTML = state.agents
    .filter((agent) => agent.authority.toLowerCase().includes("write") || agent.scope.includes("$"))
    .map((agent) => `<li>${agent.name} · ${agent.scope} · ${agent.oauth}</li>`)
    .join("");

  agentTable.querySelectorAll("[data-agent]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const agent = state.agents.find((a) => a.id === btn.dataset.agent);
      if (!agent) return;
      openDoc(
        `Agent registry · ${agent.name}`,
        `
          <p><strong>Agent ID:</strong> ${agent.id}</p>
          <p><strong>Parent entity:</strong> ${agent.parent}</p>
          <p><strong>Authority:</strong> ${agent.authority}</p>
          <p><strong>Scope:</strong> ${agent.scope}</p>
          <p><strong>Delegation rules:</strong> ${agent.delegation}</p>
          <p><strong>Hierarchy:</strong> ${agent.hierarchy}</p>
          <p><strong>OAuth scopes:</strong> ${agent.oauth}</p>
          <p><strong>Identity key:</strong> ${agent.keys}</p>
          <p><strong>Linked models:</strong> ${agent.models.join(", ")}</p>
        `
      );
    });
  });
}

function renderUseCases() {
  const usecaseTable = document.getElementById("usecase-table");
  const rows = state.useCases.map((useCase) => {
    const decisionTone =
      useCase.decision === "Approved"
        ? "good"
        : useCase.decision.toLowerCase().includes("constraints")
          ? "warn"
          : "bad";
    return tableRow(
      [
        `<strong>${useCase.name}</strong><br><span class="muted">${useCase.id}</span>`,
        useCase.domain,
        useCase.score.toFixed(2),
        useCase.autonomy,
        statusTag(useCase.decision, decisionTone),
        `<button class="ghost" data-usecase="${useCase.id}">Review</button>`
      ],
      ""
    );
  });
  usecaseTable.innerHTML =
    tableHeader(["Use case", "Domain", "Residual risk", "Autonomy", "Decision", "Action"]) + rows.join("");

  const links = document.getElementById("usecase-links");
  links.innerHTML =
    tableHeader(["Use case", "Agents", "Models", "Systems"]) +
    state.useCases
      .map((useCase) => tableRow([useCase.id, useCase.agents.join(", "), useCase.models.join(", "), useCase.systems.join(", ")]))
      .join("");

  usecaseTable.querySelectorAll("[data-usecase]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const useCase = state.useCases.find((u) => u.id === btn.dataset.usecase);
      if (!useCase) return;
      openDoc(
        `Use-case assessment · ${useCase.name}`,
        `
          <p><strong>Domain criticality:</strong> ${useCase.criticality}</p>
          <p><strong>Data sensitivity:</strong> ${useCase.sensitivity}</p>
          <p><strong>Action reversibility:</strong> ${useCase.reversibility}</p>
          <p><strong>External system access:</strong> ${useCase.externalAccess}</p>
          <p><strong>Level of autonomy:</strong> ${useCase.autonomy}</p>
          <p><strong>Residual risk score:</strong> ${useCase.score.toFixed(2)}</p>
          <p><strong>Decision:</strong> ${useCase.decision}</p>
          <p><strong>Constraints:</strong> ${useCase.constraints}</p>
          <p><strong>Linked agents:</strong> ${useCase.agents.join(", ")}</p>
          <p><strong>Linked models:</strong> ${useCase.models.join(", ")}</p>
          <p><strong>Linked systems:</strong> ${useCase.systems.join(", ")}</p>
          <p><strong>Last review:</strong> ${useCase.lastReview}</p>
        `
      );
    });
  });
}

function renderOversight() {
  const total = state.oversight.length || 1;
  const avgTime = Math.round(
    state.oversight.reduce((sum, item) => sum + item.timeSpentSec, 0) / total
  );
  const fastApprovals = state.oversight.filter((item) => item.timeSpentSec < 5).length;
  const overrides = state.oversight.filter((item) => item.override).length;
  const approved = state.oversight.filter((item) => item.decision === "Approved").length;

  document.getElementById("oversight-metrics").innerHTML = [
    { label: "Avg review time", value: `${avgTime}s`, note: "Target ≥ 30s" },
    { label: "Fast approvals", value: `${fastApprovals}`, note: "Potential rubber-stamp" },
    { label: "Override frequency", value: `${Math.round((overrides / total) * 100)}%`, note: "Human edits" },
    { label: "Approval ratio", value: `${Math.round((approved / total) * 100)}%`, note: "Approved vs rejected" }
  ]
    .map(
      (metric) => `
      <div class="card">
        <p class="card-label">${metric.label}</p>
        <h2>${metric.value}</h2>
        <p class="card-meta">${metric.note}</p>
      </div>
    `
    )
    .join("");

  const oversightTable = document.getElementById("oversight-table");
  const rows = state.oversight.map((item) => {
    const isFast = item.timeSpentSec < 5;
    const decisionTone = item.decision === "Approved" ? "good" : "bad";
    return tableRow(
      [
        item.item,
        item.reviewer,
        statusTag(item.decision, decisionTone),
        `${item.timeSpentSec}s`,
        `${item.contentViewed} items`,
        `${item.edits} edits`
      ],
      isFast ? "row-highlight" : ""
    );
  });
  oversightTable.innerHTML =
    tableHeader(["Item", "Reviewer", "Decision", "Time spent", "Content viewed", "Edits"]) + rows.join("");
}

function renderAgentLogs() {
  const logTable = document.getElementById("agent-log-table");
  const rows = state.agentLogs.map((log) =>
    tableRow(
      [
        log.id,
        log.agent,
        `${log.plan.length} steps`,
        `${log.tools.length} tool calls`,
        log.deviation,
        `<button class="ghost" data-log="${log.id}">Open</button>`
      ],
      ""
    )
  );
  logTable.innerHTML =
    tableHeader(["Log ID", "Agent", "Plan", "Tools", "Deviation", "Action"]) + rows.join("");

  const timeline = document.getElementById("log-timeline");
  timeline.innerHTML = state.agentLogs
    .map(
      (log) =>
        `<li><strong>${log.agent}</strong> · ${log.timestamp} · Approval: ${log.approval} · Incident: ${log.incident}</li>`
    )
    .join("");

  logTable.querySelectorAll("[data-log]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const log = state.agentLogs.find((item) => item.id === btn.dataset.log);
      if (!log) return;
      openDoc(
        `Agent log · ${log.id}`,
        `
          <p><strong>Agent:</strong> ${log.agent}</p>
          <p><strong>Plan:</strong></p>
          <ul>${log.plan.map((step) => `<li>${step}</li>`).join("")}</ul>
          <p><strong>Tool calls:</strong></p>
          <ul>${log.tools.map((tool) => `<li>${tool.name} · ${tool.params}</li>`).join("")}</ul>
          <p><strong>Deviation:</strong> ${log.deviation}</p>
          <p><strong>Approval:</strong> ${log.approval}</p>
          <p><strong>Incident link:</strong> ${log.incident}</p>
          <p><strong>Timestamp:</strong> ${log.timestamp}</p>
        `
      );
    });
  });
}

function renderKnowledge() {
  const knowledgeTable = document.getElementById("knowledge-table");
  const rows = state.knowledgeSources.map((source) => {
    const statusTone = source.status === "Active" ? "good" : "bad";
    return tableRow(
      [
        `<strong>${source.name}</strong><br><span class="muted">${source.id}</span>`,
        source.type,
        source.version,
        statusTag(source.status, statusTone),
        source.citations,
        `<button class="ghost" data-source="${source.id}">Details</button>`
      ],
      ""
    );
  });
  knowledgeTable.innerHTML =
    tableHeader(["Source", "Type", "Version", "Status", "Citations", "Action"]) + rows.join("");

  document.getElementById("knowledge-approvals").innerHTML = state.knowledgeApprovals
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.getElementById("knowledge-alerts").innerHTML = state.knowledgeAlerts
    .map((item) => `<li>${item}</li>`)
    .join("");

  knowledgeTable.querySelectorAll("[data-source]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const source = state.knowledgeSources.find((item) => item.id === btn.dataset.source);
      if (!source) return;
      openDoc(
        `Knowledge source · ${source.name}`,
        `
          <p><strong>Source ID:</strong> ${source.id}</p>
          <p><strong>Type:</strong> ${source.type}</p>
          <p><strong>Version:</strong> ${source.version}</p>
          <p><strong>Effective date:</strong> ${source.effective}</p>
          <p><strong>Status:</strong> ${source.status}</p>
          <p><strong>Citation enforcement:</strong> ${source.citations}</p>
          <p><strong>Owner:</strong> ${source.owner}</p>
          <p><strong>Last change:</strong> ${source.lastChange}</p>
          <p><strong>Drift status:</strong> ${source.drift}</p>
        `
      );
    });
  });
}

function renderReplay() {
  const replayTable = document.getElementById("replay-table");
  const rows = state.incidentReplays.map((incident) => {
    const severityTone = incident.severity === "High" ? "bad" : "warn";
    return tableRow(
      [
        incident.id,
        incident.summary,
        incident.rootCause,
        statusTag(incident.severity, severityTone),
        incident.date,
        `<button class="ghost" data-replay="${incident.id}">Replay</button>`
      ],
      ""
    );
  });
  replayTable.innerHTML =
    tableHeader(["Incident", "Summary", "Root cause", "Severity", "Date", "Action"]) + rows.join("");

  replayTable.querySelectorAll("[data-replay]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const incident = state.incidentReplays.find((item) => item.id === btn.dataset.replay);
      if (!incident) return;
      openDoc(
        `Incident replay · ${incident.id}`,
        `
          <p><strong>Summary:</strong> ${incident.summary}</p>
          <p><strong>Root cause classification:</strong> ${incident.rootCause}</p>
          <p><strong>Agent:</strong> ${incident.agent}</p>
          <p><strong>Model:</strong> ${incident.model}</p>
          <p><strong>Timeline reconstruction:</strong></p>
          <ul>${incident.timeline.map((step) => `<li>${step}</li>`).join("")}</ul>
        `
      );
    });
  });
}

function renderTraining() {
  const trainingTable = document.getElementById("training-table");
  const rows = state.training.map((record) => {
    const statusTone = record.status === "Active" ? "good" : "bad";
    return tableRow(
      [
        record.user,
        record.role,
        record.module,
        record.completed,
        record.expires,
        statusTag(record.status, statusTone)
      ],
      record.status === "Expired" ? "row-highlight" : ""
    );
  });
  trainingTable.innerHTML =
    tableHeader(["User", "Role", "Training module", "Completed", "Expires", "Status"]) + rows.join("");

  const roleCounts = state.training.reduce(
    (acc, item) => {
      acc[item.role] = (acc[item.role] || 0) + 1;
      if (item.status === "Expired") acc.expired += 1;
      return acc;
    },
    { Interactor: 0, Integrator: 0, Overseer: 0, expired: 0 }
  );

  document.getElementById("training-coverage").innerHTML = [
    { title: "Interactors", value: roleCounts.Interactor, note: "Active oversight required" },
    { title: "Integrators", value: roleCounts.Integrator, note: "Deployment & tooling" },
    { title: "Overseers", value: roleCounts.Overseer, note: "HITL accountability" },
    { title: "Expired access", value: roleCounts.expired, note: "Block until retrained" }
  ]
    .map(
      (item) => `
      <div class="coverage-card">
        <strong>${item.title}</strong>
        <p class="card-meta">${item.value}</p>
        <p class="card-meta">${item.note}</p>
      </div>
    `
    )
    .join("");
}

function renderConnections() {
  const statusEl = document.getElementById("gcp-status");
  const syncEl = document.getElementById("gcp-last-sync");
  if (statusEl) {
    statusEl.textContent = state.connections.gcpConnected ? "Connected" : "Not connected";
  }
  if (syncEl) {
    syncEl.textContent = state.connections.lastSync || "—";
  }

  renderLiveMetrics();
  renderLiveChecks();
}

function renderLiveMetrics() {
  const container = document.getElementById("live-metrics");
  if (!container) return;
  const metrics = [
    {
      label: "Explainability stability",
      value: state.liveMetrics.explainabilityStability.toFixed(2),
      note: "Target ≥ 0.85"
    },
    {
      label: "Fairness delta",
      value: state.liveMetrics.fairnessDelta.toFixed(2),
      note: "Target ≤ 0.08"
    },
    {
      label: "Calibration drift",
      value: state.liveMetrics.calibrationDrift.toFixed(2),
      note: "Target ≤ 0.07"
    },
    {
      label: "Performance decay",
      value: state.liveMetrics.performanceDecay.toFixed(2),
      note: "Target ≤ 0.06"
    }
  ];
  container.innerHTML = metrics
    .map(
      (metric) => `
      <div class="card">
        <p class="card-label">${withTooltip(metric.label)}</p>
        <h2>${metric.value}</h2>
        <p class="card-meta">${metric.note}</p>
      </div>
    `
    )
    .join("");
}

function renderLiveChecks() {
  const table = document.getElementById("live-checks-table");
  if (!table) return;
  const rows = state.liveChecks.map((check) => {
    const tone = check.status === "Stable" ? "good" : check.status === "Watch" ? "warn" : "bad";
    return tableRow(
      [
        check.model,
        withTooltip(check.check),
        check.value.toFixed(2),
        statusTag(check.status, tone),
        check.updated
      ],
      ""
    );
  });
  table.innerHTML =
    tableHeader(["Model", "Check", "Value", "Status", "Updated"]) + rows.join("");
}

function renderReports() {
  const summary = document.getElementById("report-summary");
  if (summary) {
    summary.innerHTML = state.reportSummary
      .map(
        (item) => `
        <div class="report-card">
          <p class="card-label">${item.label}</p>
          <h2>${item.value}</h2>
          <p class="card-meta">${item.note}</p>
        </div>
      `
      )
      .join("");
  }

  const trends = document.getElementById("performance-trends");
  if (trends) {
    trends.innerHTML = state.performanceTrends
      .map((trend) => {
        const bars = trend.values
          .map((value) => `<span style="height:${Math.min(100, value * 100)}%"></span>`)
          .join("");
        return `
          <div class="report-row">
            <div>
              <strong>${trend.model}</strong>
              <p class="card-meta">${trend.metric} · 90-day trend</p>
            </div>
            <div class="mini-chart">${bars}</div>
          </div>
        `;
      })
      .join("");
  }

  const stability = document.getElementById("stability-stats");
  if (stability) {
    stability.innerHTML = state.stabilityStats
      .map(
        (item) => {
          let label = item.label;
          if (item.label.includes("PSI")) {
            label = `<span class="term">${item.label}<span class="info" tabindex="0" data-tooltip="${escapeAttr(
              tooltipCopy["Population stability (PSI)"]
            )}">i</span></span>`;
          } else if (item.label.includes("Bias drift")) {
            label = `<span class="term">${item.label}<span class="info" tabindex="0" data-tooltip="${escapeAttr(
              tooltipCopy["Bias drift delta"]
            )}">i</span></span>`;
          }
          return `
        <div class="report-row">
          <div>
            <strong>${label}</strong>
            <p class="card-meta">Trend: ${item.trend}</p>
          </div>
          <div class="report-value">${item.value}</div>
        </div>
      `;
        }
      )
      .join("");
  }

  const ops = document.getElementById("ops-kpis");
  if (ops) {
    ops.innerHTML = state.opsKpis
      .map(
        (item) => `
        <div class="report-card">
          <p class="card-label">${item.label}</p>
          <h2>${item.value}</h2>
          <p class="card-meta">${item.note}</p>
        </div>
      `
      )
      .join("");
  }
}

let liveInterval = null;

function startLiveSimulation() {
  if (liveInterval) return;
  liveInterval = setInterval(() => {
    state.liveMetrics.explainabilityStability = Math.max(
      0.82,
      Math.min(0.95, state.liveMetrics.explainabilityStability + (Math.random() - 0.5) * 0.03)
    );
    state.liveMetrics.fairnessDelta = Math.max(
      0.02,
      Math.min(0.12, state.liveMetrics.fairnessDelta + (Math.random() - 0.5) * 0.02)
    );
    state.liveMetrics.calibrationDrift = Math.max(
      0.02,
      Math.min(0.1, state.liveMetrics.calibrationDrift + (Math.random() - 0.5) * 0.02)
    );
    state.liveMetrics.performanceDecay = Math.max(
      0.02,
      Math.min(0.09, state.liveMetrics.performanceDecay + (Math.random() - 0.5) * 0.02)
    );

    const now = new Date();
    const stamp = now.toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
    state.liveChecks = state.liveChecks.map((check) => {
      const jitter = (Math.random() - 0.5) * 0.06;
      const nextValue = Math.max(0.01, Math.min(0.2, check.value + jitter));
      const status = nextValue > 0.09 ? "Alert" : nextValue > 0.07 ? "Watch" : "Stable";
      return {
        ...check,
        value: nextValue,
        status,
        updated: stamp
      };
    });

    renderLiveMetrics();
    renderLiveChecks();
  }, 5000);
}

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const btnNewModel = document.getElementById("btn-new-model");
const form = document.getElementById("model-form");
const uploadForm = document.getElementById("upload-form");
const gcpConnectBtn = document.getElementById("btn-gcp-connect");

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

if (uploadForm) {
  uploadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("model-file");
    const lineInput = document.getElementById("upload-line");
    const deployInput = document.getElementById("upload-deploy");
    const fileName = fileInput && fileInput.files[0] ? fileInput.files[0].name : "Uploaded model";
    const line = lineInput ? lineInput.value : "Pricing";
    const deployment = deployInput && deployInput.value ? deployInput.value : "GCP · Vertex AI";
    const model = {
      id: `AI-UP-${Math.floor(Math.random() * 900 + 100)}`,
      name: `${fileName.replace(/\.[^/.]+$/, "")} (demo)`,
      purpose: "Uploaded model artifact",
      line,
      owner: "Upload user",
      validator: "Assigned",
      risk: line === "Pricing" ? "EU High-Risk" : "Medium",
      status: "Monitoring",
      deployment,
      regs: ["OSFI E-23", "NY DFS"],
      fairness: "Pending",
      monitoring: "Active",
      drift: "Stable",
      attributes: "N/A",
      lastReview: "Jan 30, 2026"
    };
    state.models.unshift(model);
    state.liveChecks.unshift({
      model: model.name,
      check: "Explainability stability",
      value: 0.9,
      status: "Stable",
      updated: "Jan 30, 2026 09:10"
    });
    renderAll();
    selectModel(model.id);
    showToast("Upload simulated; model registered with live checks");
    uploadForm.reset();
  });
}

if (gcpConnectBtn) {
  gcpConnectBtn.addEventListener("click", () => {
    state.connections.gcpConnected = true;
    state.connections.lastSync = "Jan 30, 2026 09:12";
    const already = state.models.some((m) => m.id === "AI-GCP-901");
    if (!already) {
      state.models.unshift(
        {
          id: "AI-GCP-901",
          name: "GCP Vertex Fraud Detector",
          purpose: "Real-time fraud scoring",
          line: "Fraud",
          owner: "Vendor",
          validator: "Assigned",
          risk: "High",
          status: "Monitoring",
          deployment: "GCP · Vertex AI",
          regs: ["OSFI E-23", "NY DFS"],
          fairness: "Watch",
          monitoring: "Active",
          drift: "Stable",
          attributes: "Region, device",
          lastReview: "Jan 30, 2026"
        },
        {
          id: "AI-GCP-902",
          name: "GCP Claims Severity Auto",
          purpose: "Claims severity scoring",
          line: "Claims",
          owner: "Claims Ops",
          validator: "Assigned",
          risk: "High",
          status: "Monitoring",
          deployment: "GCP · Vertex AI",
          regs: ["OSFI E-23"],
          fairness: "Pending",
          monitoring: "Active",
          drift: "Stable",
          attributes: "Claimant age",
          lastReview: "Jan 30, 2026"
        }
      );
      state.liveChecks.unshift(
        {
          model: "GCP Vertex Fraud Detector",
          check: "Calibration drift",
          value: 0.06,
          status: "Watch",
          updated: "Jan 30, 2026 09:12"
        },
        {
          model: "GCP Claims Severity Auto",
          check: "Fairness delta",
          value: 0.05,
          status: "Stable",
          updated: "Jan 30, 2026 09:12"
        }
      );
    }
    renderAll();
    showToast("GCP connected (demo). Models synchronized.");
  });
}

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
  renderAgents();
  renderUseCases();
  renderOversight();
  renderAgentLogs();
  renderKnowledge();
  renderReplay();
  renderTraining();
  renderConnections();
  renderReports();
  renderWorkflow();
  renderFairness();
  renderMonitoring();
  renderRegulatory();
  renderAudit();
  renderBoard();
  renderDeepDiveSelectors();
  startLiveSimulation();
}

// Deep dive controls
const fairnessModel = document.getElementById("fairness-model");
const fairnessCode = document.getElementById("fairness-code");
const fairnessOutput = document.getElementById("fairness-output");
const weightSlider = document.getElementById("weight-slider");
const thresholdSlider = document.getElementById("threshold-slider");
const sliderWeight = document.getElementById("slider-weight");
const sliderThreshold = document.getElementById("slider-threshold");

const monitorModel = document.getElementById("monitor-model");
const monitorCode = document.getElementById("monitor-code");
const monitorOutput = document.getElementById("monitor-output");
const psiSlider = document.getElementById("psi-slider");
const perfSlider = document.getElementById("perf-slider");
const psiValue = document.getElementById("psi-value");
const perfValue = document.getElementById("perf-value");

const fairnessPipelines = {
  Pricing: `# pricing_model.py\npipeline = (\n  data\n  .clean()\n  .encode_sensitive(attrs=[\"age\", \"postal_code\"], strategy=\"reweight\")\n  .train(xgb_model)\n)\nmetrics = fairness.test(pipeline, protected=[\"age\"])\n`,
  Underwriting: `# underwriting_model.py\nfeatures = build_features(claims, policy)\nmodel = train_logit(features)\nmetrics = fairness.test(model, protected=[\"industry\", \"region\"])`,
  Claims: `# claims_model.py\nmodel = train_gbm(claims_data)\nmetrics = fairness.test(model, protected=[\"age\"])`,
  Fraud: `# fraud_model.py\nmodel = graph_scorer(transactions)\nmetrics = fairness.test(model, protected=[\"geography\"])`,
  Marketing: `# marketing_model.py\nmodel = train_propensity(data)\nmetrics = fairness.test(model, protected=[\"zip_code\"])`
};

const monitoringPipelines = {
  Pricing: `# monitoring.py\npsi = drift.psi(prod_data, train_data)\nperformance = monitor.auc(prod_scores)\nbias = monitor.bias_shift(prod_data, protected=[\"age\"])`,
  Underwriting: `# monitoring.py\npsi = drift.psi(prod_data, train_data)\nperformance = monitor.accuracy(prod_scores)\n`,
  Claims: `# monitoring.py\npsi = drift.psi(prod_data, train_data)\nperformance = monitor.rmse(prod_scores)\n`,
  Fraud: `# monitoring.py\npsi = drift.psi(prod_data, train_data)\nperformance = monitor.precision(prod_scores)\n`,
  Marketing: `# monitoring.py\npsi = drift.psi(prod_data, train_data)\nperformance = monitor.lift(prod_scores)\n`
};

function renderDeepDiveSelectors() {
  const options = state.models.map((m) => `<option value="${m.id}">${m.name}</option>`).join("");
  fairnessModel.innerHTML = options;
  monitorModel.innerHTML = options;
  updateFairnessCode();
  updateMonitoringCode();
  runFairness();
  runMonitoring();
}

function updateFairnessCode() {
  const model = state.models.find((m) => m.id === fairnessModel.value) || state.models[0];
  fairnessCode.textContent = fairnessPipelines[model.line] || fairnessPipelines.Pricing;
}

function updateMonitoringCode() {
  const model = state.models.find((m) => m.id === monitorModel.value) || state.models[0];
  monitorCode.textContent = monitoringPipelines[model.line] || monitoringPipelines.Pricing;
}

function runFairness() {
  const weight = parseFloat(weightSlider.value);
  const threshold = parseFloat(thresholdSlider.value);
  const disparate = Math.max(0.7, Math.min(0.98, 0.85 + (weight - 0.5) * 0.2 - (threshold - 0.6) * 0.1));
  const odds = Math.max(0.02, Math.min(0.12, 0.08 - (weight - 0.5) * 0.05));
  const calibration = Math.max(0.01, Math.min(0.08, 0.04 + (threshold - 0.6) * 0.05));
  fairnessOutput.innerHTML = `
    <div class="metric">
      <span>${withTooltip("Disparate impact")}</span>
      <strong>${disparate.toFixed(2)}</strong>
      <span>Target ≥ 0.80</span>
    </div>
    <div class="metric">
      <span>${withTooltip("Equalized odds")}</span>
      <strong>${odds.toFixed(2)}</strong>
      <span>Target ≤ 0.10</span>
    </div>
    <div class="metric">
      <span>${withTooltip("Calibration gap")}</span>
      <strong>${calibration.toFixed(2)}</strong>
      <span>Target ≤ 0.05</span>
    </div>
  `;
}

function runMonitoring() {
  const psi = parseFloat(psiSlider.value);
  const perf = parseFloat(perfSlider.value);
  const biasShift = Math.max(0.01, Math.min(0.2, 0.05 + (psi - 0.2) * 0.3));
  monitorOutput.innerHTML = `
    <div class="metric">
      <span>${withTooltip("Population stability (PSI)")}</span>
      <strong>${psi.toFixed(2)}</strong>
      <span>${psi > 0.25 ? "Alert threshold exceeded" : "Within tolerance"}</span>
    </div>
    <div class="metric">
      <span>${withTooltip("Performance decay")}</span>
      <strong>${perf.toFixed(2)}</strong>
      <span>${perf > 0.06 ? "Retrain recommended" : "Stable"}</span>
    </div>
    <div class="metric">
      <span>${withTooltip("Bias drift delta")}</span>
      <strong>${biasShift.toFixed(2)}</strong>
      <span>${biasShift > 0.08 ? "Bias review required" : "Stable"}</span>
    </div>
  `;
}

fairnessModel.addEventListener("change", () => {
  updateFairnessCode();
  runFairness();
});
monitorModel.addEventListener("change", () => {
  updateMonitoringCode();
  runMonitoring();
});

weightSlider.addEventListener("input", () => {
  sliderWeight.textContent = weightSlider.value;
  runFairness();
});
thresholdSlider.addEventListener("input", () => {
  sliderThreshold.textContent = thresholdSlider.value;
  runFairness();
});
psiSlider.addEventListener("input", () => {
  psiValue.textContent = psiSlider.value;
  runMonitoring();
});
perfSlider.addEventListener("input", () => {
  perfValue.textContent = perfSlider.value;
  runMonitoring();
});

document.getElementById("run-fairness").addEventListener("click", () => {
  showToast("Fairness tests re-run and logged");
  state.incidents.unshift({
    model: fairnessModel.options[fairnessModel.selectedIndex].text,
    issue: "Fairness re-test completed",
    date: "Jan 29, 2026"
  });
  renderMonitoring();
});

document.getElementById("run-monitoring").addEventListener("click", () => {
  showToast("Monitoring checks re-run and logged");
  state.incidents.unshift({
    model: monitorModel.options[monitorModel.selectedIndex].text,
    issue: "Monitoring check refreshed",
    date: "Jan 29, 2026"
  });
  renderMonitoring();
});

function openEvidence(index) {
  const item = state.evidence[index];
  if (!item) return;
  openDoc(
    item.title,
    `<p><strong>Owner:</strong> ${item.owner}</p>
     <p><strong>Artifact type:</strong> ${item.type}</p>
     <div class="code-block">Summary:\n- Scope: Model risk validation\n- Dataset fingerprints recorded\n- Findings: No material exceptions\n- Sign-off: Approved</div>`
  );
}

function openReport(reportName) {
  const content = {
    "Notebook + results": "<p>Notebook summary with reproducibility checks, fairness metrics, and challenger run.</p>",
    "Decision memo": "<p>Board memo covering risk tier, approvals, and monitoring commitments.</p>",
    "Fairness report": "<p>Fairness report with disparate impact, equalized odds, and calibration by group.</p>",
    "Due diligence pack": "<p>Vendor AI review checklist with evidence of controls and testing.</p>"
  };
  openDoc(reportName, `<p>${content[reportName] || "Report preview"}</p>`);
}

function handleQuickAction(message) {
  if (message.includes("Lineage")) {
    state.evidence.unshift({
      title: "Lineage snapshot · Auto Pricing Elasticity v3",
      type: "Lineage Snapshot",
      owner: "ModelOps"
    });
    showToast("Lineage snapshot captured and attached");
    renderWorkflow();
    return;
  }
  if (message.includes("Fairness")) {
    state.evidence.unshift({
      title: "Fairness test run · Claims Severity Predictor",
      type: "Fairness Report",
      owner: "Bias Office"
    });
    showToast("Fairness tests run; report added to evidence");
    renderWorkflow();
    return;
  }
  if (message.includes("Monitoring")) {
    state.exceptions.unshift("Monitoring policy updated · Auto Pricing Elasticity v3 · Expires Apr 01, 2026");
    showToast("Monitoring policy updated; workflow refreshed");
    renderWorkflow();
  }
}

document.querySelectorAll(".card.clickable").forEach((card) => {
  card.addEventListener("click", () => {
    const target = card.dataset.drill;
    highlight.ids = [];
    highlight.reason = "";
    if (target === "inventory") {
      switchView("inventory");
      renderInventory(state.models);
      return;
    }
    if (target === "high-risk") {
      switchView("inventory");
      document.getElementById("risk-filter").value = "";
      searchInput.value = "";
      highlight.ids = state.models.filter((m) => m.risk.includes("High")).map((m) => m.id);
      renderInventory(state.models);
      return;
    }
    if (target === "approvals") {
      switchView("workflows");
      return;
    }
    if (target === "incidents") {
      switchView("monitoring");
      return;
    }
    if (target === "agents") {
      switchView("agents");
      return;
    }
    if (target === "use-cases") {
      switchView("use-cases");
      return;
    }
  });
});

renderAll();
