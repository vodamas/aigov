const glossaryEntries = [
  {
    term: "Model risk",
    category: "governance",
    definition:
      "Risk of adverse outcomes from incorrect model design, implementation defects, misuse, or ineffective governance.",
    relevance: "FHFA AB 2013-07, SR 11-7, OSFI E-23"
  },
  {
    term: "Conceptual soundness",
    category: "validation",
    definition:
      "Assessment that model theory, assumptions, variables, and methodology are appropriate for intended use.",
    relevance: "SR 11-7"
  },
  {
    term: "Outcomes analysis",
    category: "validation",
    definition:
      "Evaluation of model output quality against expected behavior and realized outcomes in production.",
    relevance: "SR 11-7, FHFA AB 2013-07"
  },
  {
    term: "Independent validation",
    category: "validation",
    definition:
      "Effective challenge performed by a function independent from model development and first-line ownership.",
    relevance: "FHFA AB 2013-07, SR 11-7, OSFI E-23"
  },
  {
    term: "Backtesting",
    category: "validation",
    definition:
      "Comparison of prior model predictions to actual realized outcomes to assess performance stability.",
    relevance: "SR 11-7, OSFI E-23"
  },
  {
    term: "Sensitivity analysis",
    category: "validation",
    definition:
      "Testing how outputs change when inputs or assumptions are varied across plausible ranges.",
    relevance: "SR 11-7"
  },
  {
    term: "Population Stability Index (PSI)",
    category: "monitoring",
    definition:
      "Metric for detecting shifts between baseline and current input distributions in production populations.",
    relevance: "Common monitoring practice under SR 11-7 / FHFA governance expectations"
  },
  {
    term: "Data drift",
    category: "monitoring",
    definition:
      "Change in the input data profile over time that can degrade model performance or fairness.",
    relevance: "NIST AI RMF (Measure), SR 11-7 ongoing monitoring"
  },
  {
    term: "Concept drift",
    category: "monitoring",
    definition:
      "Change in the relationship between inputs and target outcomes, reducing model validity over time.",
    relevance: "NIST AI RMF (Measure/Manage)"
  },
  {
    term: "Calibration test",
    category: "monitoring",
    definition:
      "Assessment that predicted probabilities align with observed event rates across score bands.",
    relevance: "Validation/monitoring discipline under SR 11-7"
  },
  {
    term: "KS statistic",
    category: "monitoring",
    definition:
      "Separation metric often used in scorecard monitoring to track discriminatory power over time.",
    relevance: "Model performance monitoring practice"
  },
  {
    term: "Fairness and bias testing",
    category: "fairness",
    definition:
      "Assessment of potentially discriminatory outcomes across protected or sensitive groups.",
    relevance: "Colorado 10-1-1, NIST AI RMF (Map/Measure)"
  },
  {
    term: "Disparate impact ratio",
    category: "fairness",
    definition:
      "Compares favorable outcome rates between groups to detect potential adverse impact.",
    relevance: "Fairness screening in regulated decision contexts"
  },
  {
    term: "Equal opportunity difference",
    category: "fairness",
    definition:
      "Difference in true positive rates across groups; used to evaluate opportunity parity.",
    relevance: "NIST AI RMF (Measure)"
  },
  {
    term: "Explainability",
    category: "fairness",
    definition:
      "Ability to communicate factors influencing model outputs and resulting decisions.",
    relevance: "NIST AI RMF (Govern/Map), supervisory transparency expectations"
  },
  {
    term: "AI guardrails",
    category: "controls",
    definition:
      "Policy and runtime constraints that bound model/agent behavior, permitted actions, and escalation triggers.",
    relevance: "NIST AI RMF (Govern/Manage), enterprise control frameworks"
  },
  {
    term: "Human-in-the-loop checkpoint",
    category: "controls",
    definition:
      "Mandatory human review gate at defined material decisions before or after model recommendations.",
    relevance: "NIST AI RMF (Manage), FHFA control expectations"
  },
  {
    term: "Escalation threshold",
    category: "controls",
    definition:
      "Predefined trigger level for risk events requiring workflow escalation or operational intervention.",
    relevance: "NIST AI RMF (Manage), SR 11-7 monitoring governance"
  },
  {
    term: "Model inventory",
    category: "evidence",
    definition:
      "Systematic registry of models, owners, use cases, risk tiers, and governance status.",
    relevance: "FHFA AB 2013-07, OSFI E-23"
  },
  {
    term: "Lineage traceability",
    category: "evidence",
    definition:
      "Ability to trace data and transformation pathways from source assets through model decisions.",
    relevance: "FHFA AB 2013-07, NIST AI RMF (Govern), OSFI E-23"
  },
  {
    term: "Reproducibility",
    category: "evidence",
    definition:
      "Capability to recreate prior model results and decisions using retained data, code, and configurations.",
    relevance: "SR 11-7, FHFA AB 2013-07"
  },
  {
    term: "Evidence pack",
    category: "evidence",
    definition:
      "Structured package of inventory, validation, monitoring, approval, and lineage artifacts for review.",
    relevance: "Examiner and audit readiness practice"
  },
  {
    term: "Effective challenge",
    category: "governance",
    definition:
      "Critical, independent review that identifies model limitations, assumptions, and material weaknesses before and after deployment.",
    relevance: "OCC Comptroller's Handbook, SR 11-7"
  },
  {
    term: "Three lines of defense",
    category: "governance",
    definition:
      "Operating model separating first-line ownership, second-line independent risk challenge, and third-line internal audit assurance.",
    relevance: "OCC Comptroller's Handbook examiner model"
  },
  {
    term: "Override and exceptions register",
    category: "evidence",
    definition:
      "Logged record of overridden model outputs and policy exceptions with who/when/why, approvals, and remediation follow-up.",
    relevance: "OCC governance expectations on overrides, limits, and exception controls"
  },
  {
    term: "Knowledge limits",
    category: "controls",
    definition:
      "Boundaries defining when an AI system is in-scope to operate and when confidence is insufficient, requiring fallback or escalation.",
    relevance: "NISTIR 8312 principle 4"
  },
  {
    term: "Explanation accuracy",
    category: "controls",
    definition:
      "Requirement that explanations faithfully reflect the true model process, not simplified but misleading proxies.",
    relevance: "NISTIR 8312 principle 3"
  },
  {
    term: "Meaningful explanation",
    category: "controls",
    definition:
      "Explanations must be understandable to the intended audience (developer, validator, examiner, or board).",
    relevance: "NISTIR 8312 principle 2"
  },
  {
    term: "Process verification",
    category: "validation",
    definition:
      "Validation activity confirming the model is implemented, configured, and operating according to approved design and control expectations.",
    relevance: "OCC Comptroller's Handbook"
  },
  {
    term: "Benchmarking",
    category: "validation",
    definition:
      "Comparison against alternative models or methods to test whether output differences are understood and within reasonable ranges.",
    relevance: "OCC Comptroller's Handbook"
  },
  {
    term: "Board oversight evidence",
    category: "evidence",
    definition:
      "Minutes and board materials showing directors were informed, challenged issues, made decisions, and tracked remediation.",
    relevance: "OCC Comptroller's Handbook board and management oversight"
  }
];

const explainabilityChecks = {
  explanation: {
    title: "Explanation",
    checkQuestion: "Can reviewers see reasons or evidence for outputs and process decisions?",
    examinerLookFor: "Reason codes, rationale trace, and linked decision evidence.",
    artifacts: [
      "Reason-code artifact or rationale report",
      "Decision trace linking output to model/process step",
      "Documented consumer-specific explanation format"
    ],
    sas: "SAS Model Risk Management: attach explanation artifacts to model records and review workflows."
  },
  meaningful: {
    title: "Meaningful",
    checkQuestion: "Is the explanation understandable to its intended user group?",
    examinerLookFor: "Audience-specific explanation standards for developers, validators, business users, and examiners.",
    artifacts: [
      "Audience-mapped explanation template",
      "Validation notes confirming explanation usability",
      "Board-ready summary with non-technical rationale"
    ],
    sas: "SAS Viya + SAS Model Risk Management: generate audience-specific explanation outputs and retain acceptance evidence."
  },
  accuracy: {
    title: "Explanation Accuracy",
    checkQuestion: "Does the explanation faithfully reflect actual model behavior?",
    examinerLookFor: "Testing that explanation logic is consistent with real model process and outcomes.",
    artifacts: [
      "Explanation fidelity test results",
      "Challenge memo for mismatches between explanation and observed behavior",
      "Issue log and remediation for explanation defects"
    ],
    sas: "SAS Viya: run repeatable explainability tests; SAS Model Risk Management: track findings, remediation, and closure evidence."
  },
  knowledgeLimits: {
    title: "Knowledge Limits",
    checkQuestion: "Are confidence boundaries defined and enforced with fallback behavior?",
    examinerLookFor: "Out-of-scope detection, low-confidence handling, and escalation paths.",
    artifacts: [
      "Confidence-threshold and out-of-scope policy",
      "Low-confidence decision log with escalation outcomes",
      "Human-fallback trigger and response evidence"
    ],
    sas: "SAS Model Manager + SAS Model Risk Management: enforce threshold triggers, log low-confidence events, and route escalations."
  }
};

const conceptNodes = [
  {
    id: "models",
    label: "Models",
    x: 110,
    y: 146,
    note: "Model records include purpose, assumptions, ownership, risk tier, and lifecycle state.",
    sas: "SAS Model Risk Management + SAS Model Manager",
    criticality: 96,
    checklist: [
      "Assign primary and backup owner with role-based accountability",
      "Track model purpose, assumptions, and version changes",
      "Require validation status before use in material decisions"
    ]
  },
  {
    id: "data",
    label: "Data Assets",
    x: 250,
    y: 70,
    note: "Input data should be cataloged with lineage, quality controls, and stewardship metadata.",
    sas: "SAS Information Governance",
    criticality: 88,
    checklist: [
      "Catalog key data assets and feature pipelines with lineage",
      "Define data quality thresholds and exception handling",
      "Document steward ownership and control attestations"
    ]
  },
  {
    id: "owners",
    label: "Owners",
    x: 392,
    y: 146,
    note: "Named accountable roles align approvals, issue management, and escalation responsibilities.",
    sas: "SAS Model Risk Management",
    criticality: 91,
    checklist: [
      "Define owner, validator, approver, and escalation paths",
      "Monitor role changes and enforce reassignment controls",
      "Maintain RACI alignment for each model and use case"
    ]
  },
  {
    id: "controls",
    label: "Controls",
    x: 250,
    y: 228,
    note: "Controls include validation, approvals, monitoring thresholds, and review cadence.",
    sas: "SAS Model Manager + SAS Model Risk Management",
    criticality: 94,
    checklist: [
      "Implement approvals, override governance, and monitoring triggers",
      "Test control effectiveness under stress scenarios",
      "Link control failures to issue and remediation workflows"
    ]
  },
  {
    id: "evidence",
    label: "Evidence",
    x: 536,
    y: 146,
    note: "Evidence packs link validation reports, approvals, issues, monitoring outcomes, and lineage.",
    sas: "SAS Model Risk Management + SAS Information Governance",
    criticality: 98,
    checklist: [
      "Assemble evidence packs by regulation and review cycle",
      "Keep lineage, approvals, and validation artifacts traceable",
      "Enable rapid export for examiner and audit requests"
    ]
  }
];

const conceptLinks = [
  { id: "models-data", source: "models", target: "data", criticality: 82 },
  { id: "models-owners", source: "models", target: "owners", criticality: 90 },
  { id: "models-controls", source: "models", target: "controls", criticality: 93 },
  { id: "controls-evidence", source: "controls", target: "evidence", criticality: 97 },
  { id: "owners-evidence", source: "owners", target: "evidence", criticality: 95 },
  { id: "data-controls", source: "data", target: "controls", criticality: 89 }
];

const regulationLinkage = [
  { name: "FHFA", inventory: "Yes", validation: "Yes", monitoring: "Yes", evidence: "Yes" },
  { name: "SR 11-7", inventory: "Yes", validation: "Yes", monitoring: "Yes", evidence: "Yes" },
  { name: "OSFI E-23", inventory: "Yes", validation: "Yes", monitoring: "Yes", evidence: "Yes" },
  { name: "Colorado 10-1-1", inventory: "Partial", validation: "Yes", monitoring: "Yes", evidence: "Yes" },
  { name: "NIST AI RMF 1.0", inventory: "Yes", validation: "Yes", monitoring: "Yes", evidence: "Yes" },
  { name: "NY DFS", inventory: "Partial", validation: "Partial", monitoring: "Yes", evidence: "Yes" }
];

const regulationLinkageColumns = [
  { key: "inventory", label: "Inventory & ownership" },
  { key: "validation", label: "Validation & testing" },
  { key: "monitoring", label: "Monitoring & drift" },
  { key: "evidence", label: "Traceability & evidence" }
];

const linkageSasCoverageByDimension = {
  inventory: [
    {
      solution: "SAS Model Risk Management",
      functionalities: [
        "Central model inventory with lifecycle status and risk tiering",
        "Named owner and backup owner assignments with role-based governance workflow"
      ]
    },
    {
      solution: "SAS Information Governance",
      functionalities: [
        "Metadata cataloging for model-related assets",
        "Stewardship and ownership traceability across data and model artifacts"
      ]
    }
  ],
  validation: [
    {
      solution: "SAS Model Risk Management",
      functionalities: [
        "Validation artifact management with effective-challenge records",
        "Issue tracking and remediation closure tied to validation findings"
      ]
    },
    {
      solution: "SAS Viya",
      functionalities: [
        "Fairness and explainability test workflows for validation evidence",
        "Repeatable analytical testing pipelines for sensitivity and outcomes checks"
      ]
    }
  ],
  monitoring: [
    {
      solution: "SAS Model Manager",
      functionalities: [
        "Performance and drift monitoring with threshold alerts",
        "Operational monitoring plans and control-limit governance"
      ]
    },
    {
      solution: "SAS Viya",
      functionalities: [
        "Bias/fairness monitoring and runtime analytics for model behavior",
        "Operational dashboards for monitoring and escalation decisions"
      ]
    }
  ],
  evidence: [
    {
      solution: "SAS Model Risk Management",
      functionalities: [
        "Examiner-ready evidence bundles linking approvals, validation, and monitoring records",
        "Issue lifecycle audit trail with timestamps and accountable owners"
      ]
    },
    {
      solution: "SAS Information Governance",
      functionalities: [
        "Data-to-model lineage views for traceability",
        "Lineage-backed export of metadata and evidence references"
      ]
    }
  ]
};

const linkageRegulationNotes = {
  FHFA: "FHFA reviews usually prioritize inventory completeness, accountable ownership, and evidentiary traceability.",
  "SR 11-7": "SR 11-7 reviews focus strongly on conceptual soundness, monitoring quality, and outcomes analysis.",
  "OSFI E-23": "OSFI E-23 emphasizes governance accountability, effective challenge, and control operating evidence.",
  "Colorado 10-1-1": "Colorado 10-1-1 places extra scrutiny on unfair discrimination controls and repeatable fairness testing.",
  "NIST AI RMF 1.0": "NIST AI RMF emphasizes a Govern-Map-Measure-Manage cycle with measurable risk controls.",
  "NY DFS": "NY DFS reviews frequently stress operational control rigor, traceability, and issue management evidence."
};

const linkageControlExpectations = {
  inventory:
    "Maintain a complete inventory with accountable owner, materiality tier, approved use, and validation status.",
  validation:
    "Evidence independent challenge, conceptual soundness, outcomes analysis, and remediation closure.",
  monitoring:
    "Operate threshold-based monitoring tied to escalation, override governance, and corrective action.",
  evidence:
    "Produce traceable, review-ready packages linking decisions, controls, approvals, and lineage."
};

const linkageExaminerQuestions = {
  inventory: [
    "Who is accountable for this model today, and when was ownership last attested?",
    "Can you show which in-production models are pending validation or operating under exception?"
  ],
  validation: [
    "Where is evidence of effective challenge and what issues were raised?",
    "How were validation findings remediated and who approved closure?"
  ],
  monitoring: [
    "What thresholds trigger escalation, and what happens when confidence is low?",
    "How are overrides logged, reviewed, and reported to governance committees?"
  ],
  evidence: [
    "Can you produce lineage, approvals, and monitoring outcomes within review timelines?",
    "How do you prove board and management were informed of material model issues?"
  ]
};

const regulationEmphasis = {
  FHFA: {
    note: "Strong emphasis on governance accountability, model lifecycle discipline, and evidence traceability.",
    domains: [
      { label: "Inventory & ownership", score: 90 },
      { label: "Independent validation", score: 85 },
      { label: "Monitoring controls", score: 84 },
      { label: "Audit traceability", score: 92 },
      { label: "Fairness testing", score: 62 }
    ]
  },
  "SR 11-7": {
    note: "Foundational model risk framework focused on conceptual soundness, ongoing monitoring, and outcomes analysis.",
    domains: [
      { label: "Inventory & ownership", score: 82 },
      { label: "Independent validation", score: 94 },
      { label: "Monitoring controls", score: 91 },
      { label: "Audit traceability", score: 88 },
      { label: "Fairness testing", score: 58 }
    ]
  },
  "OSFI E-23": {
    note: "Emphasizes enterprise-level governance, clear accountability, effective challenge, and prudent operational controls.",
    domains: [
      { label: "Inventory & ownership", score: 87 },
      { label: "Independent validation", score: 89 },
      { label: "Monitoring controls", score: 90 },
      { label: "Audit traceability", score: 86 },
      { label: "Fairness testing", score: 65 }
    ]
  },
  "Colorado 10-1-1": {
    note: "Emphasizes governance and testing to prevent unfair discrimination in AI-enabled insurance decisions.",
    domains: [
      { label: "Inventory & ownership", score: 72 },
      { label: "Independent validation", score: 86 },
      { label: "Monitoring controls", score: 81 },
      { label: "Audit traceability", score: 83 },
      { label: "Fairness testing", score: 95 }
    ]
  },
  "NIST AI RMF 1.0": {
    note: "Cross-sector framework organized around Govern, Map, Measure, and Manage functions.",
    domains: [
      { label: "Inventory & ownership", score: 86 },
      { label: "Independent validation", score: 84 },
      { label: "Monitoring controls", score: 88 },
      { label: "Audit traceability", score: 82 },
      { label: "Fairness testing", score: 86 }
    ]
  },
  "NY DFS": {
    note: "Highlights controls over governance, risk management, cybersecurity, and robust documentation practices.",
    domains: [
      { label: "Inventory & ownership", score: 74 },
      { label: "Independent validation", score: 76 },
      { label: "Monitoring controls", score: 86 },
      { label: "Audit traceability", score: 89 },
      { label: "Fairness testing", score: 61 }
    ]
  }
};

const ownershipAdjustments = {
  federated: {
    "Inventory & ownership": -8,
    "Independent validation": -5,
    "Monitoring controls": 2,
    "Audit traceability": -10,
    "Fairness testing": 6
  },
  centralized: {
    "Inventory & ownership": 8,
    "Independent validation": 10,
    "Monitoring controls": 7,
    "Audit traceability": 11,
    "Fairness testing": -4
  },
  hybrid: {
    "Inventory & ownership": 4,
    "Independent validation": 6,
    "Monitoring controls": 8,
    "Audit traceability": 6,
    "Fairness testing": 5
  }
};

const spectrumSteps = [
  {
    title: "Static model",
    risks: ["Assumption drift", "Incomplete documentation"],
    controls: ["Documented purpose and constraints", "Periodic validation"],
    evidence: ["Model inventory record", "Validation memo"],
    confidenceBoundaries: [
      "Define acceptable model-use envelope (portfolio, decision type, and frequency)",
      "Set confidence expectation for usage and trigger manual review if out-of-envelope",
      "Document fallback path when assumptions are no longer valid"
    ],
    overrideGovernance: [
      "Allow overrides only by approved authority levels",
      "Capture who changed output, why, and risk rationale",
      "Review override frequency as a governance performance indicator"
    ],
    evidenceArtifacts: ["Model assumptions register", "Override/exception register", "Periodic confidence-attestation memo"],
    requiredControls: [
      "Document model purpose, assumptions, input boundaries, and approved use cases",
      "Assign accountable owner and independent validator before production use",
      "Set periodic review schedule for performance and conceptual validity"
    ],
    sasFunctionalities: [
      "SAS Model Risk Management: register model, owner, tier, validation status, and governance artifacts",
      "SAS Model Manager: maintain version baseline and approval checkpoint records",
      "SAS Information Governance: connect model record to source data metadata and stewardship"
    ]
  },
  {
    title: "ML pipeline",
    risks: ["Pipeline breakage", "Data dependency changes"],
    controls: ["Change control gates", "Input lineage and data quality thresholds"],
    evidence: ["Pipeline approval log", "Lineage snapshots"],
    confidenceBoundaries: [
      "Define input quality and schema confidence thresholds before scoring",
      "Trigger fallback to prior approved version when confidence checks fail",
      "Flag out-of-distribution patterns for human review"
    ],
    overrideGovernance: [
      "Log emergency pipeline bypasses with approvals and expiry dates",
      "Require post-incident review for each override or policy exception",
      "Track override trend by model owner and business line"
    ],
    evidenceArtifacts: ["Low-confidence run logs", "Schema breach escalation trail", "Exception approval history"],
    requiredControls: [
      "Enforce change-control approvals for feature, code, and dependency updates",
      "Apply data quality thresholds and schema checks before scoring runs",
      "Track upstream/downstream lineage to isolate pipeline failure root causes"
    ],
    sasFunctionalities: [
      "SAS Model Manager: workflow-driven promotion and rollback across pipeline versions",
      "SAS Information Governance: lineage capture from data assets to transformed model inputs",
      "SAS Model Risk Management: attach change evidence and issue remediation to model record"
    ]
  },
  {
    title: "Orchestrated decision flow",
    risks: ["Policy inconsistency", "Control bypass between components"],
    controls: ["Execution boundaries", "Escalation triggers", "Human override points"],
    evidence: ["Workflow approval artifacts", "Decision trace records"],
    confidenceBoundaries: [
      "Set cross-model confidence thresholds for composite decisions",
      "Require escalation when confidence drops below policy levels",
      "Define out-of-scope orchestration patterns that must stop automatically"
    ],
    overrideGovernance: [
      "Require dual approval for material output overrides",
      "Log overrides with impacted downstream decisions",
      "Run periodic challenge review of override rationale quality"
    ],
    evidenceArtifacts: ["Low-confidence escalation log", "Override trail with approvals", "Cross-model decision trace pack"],
    requiredControls: [
      "Define policy-bound decision authority across all orchestrated model components",
      "Implement escalation triggers when decision paths exceed tolerance thresholds",
      "Embed human override gates for material credit, pricing, or collateral decisions"
    ],
    sasFunctionalities: [
      "SAS Model Manager: enforce model flow governance across deployment stages",
      "SAS Model Risk Management: capture workflow exceptions, approvals, and control failures",
      "SAS Information Governance: maintain decision traceability across linked models and data assets"
    ]
  },
  {
    title: "Semi-autonomous agent",
    risks: ["Scope creep", "Insufficient supervisory checkpoints"],
    controls: ["Policy-bounded authority", "Mandatory human-in-the-loop checkpoints", "Runtime monitoring"],
    evidence: ["Delegation and escalation logs", "Monitoring alerts and response history"],
    confidenceBoundaries: [
      "Hard-stop execution when confidence or policy conformance is below threshold",
      "Use out-of-scope detection for novel conditions and route to human reviewer",
      "Retain low-confidence outcomes for periodic governance challenge"
    ],
    overrideGovernance: [
      "Require pre-approved emergency override protocol for agent decisions",
      "Track all manual reversals, including owner, validator, and resolution",
      "Escalate repeated overrides to governance committee review"
    ],
    evidenceArtifacts: ["Confidence boundary policy", "Low-confidence decision log", "Escalation and override committee minutes"],
    requiredControls: [
      "Limit action scope with explicit policy constraints and delegated authority boundaries",
      "Require supervisory checkpoints for high-materiality or irreversible actions",
      "Run continuous monitoring for policy breaches, drift, and anomalous behavior patterns"
    ],
    sasFunctionalities: [
      "SAS Model Risk Management: track delegated ownership, control exceptions, and remediation workflows",
      "SAS Model Manager + Viya runtime monitoring: alert on drift, threshold breaches, and operational anomalies",
      "SAS Viya fairness/explainability: monitor group outcome impacts and explanation consistency over time"
    ]
  }
];

const spectrumImpactProfiles = [
  {
    financialLabel: "Estimated annual loss exposure",
    financialValue: 24,
    complianceLabel: "Regulatory control pressure",
    complianceValue: 22,
    indicators: [
      { label: "Operational loss impact", score: 28 },
      { label: "Compliance findings likelihood", score: 24 },
      { label: "Remediation cost pressure", score: 21 }
    ]
  },
  {
    financialLabel: "Estimated annual loss exposure",
    financialValue: 41,
    complianceLabel: "Regulatory control pressure",
    complianceValue: 38,
    indicators: [
      { label: "Operational loss impact", score: 43 },
      { label: "Compliance findings likelihood", score: 40 },
      { label: "Remediation cost pressure", score: 35 }
    ]
  },
  {
    financialLabel: "Estimated annual loss exposure",
    financialValue: 63,
    complianceLabel: "Regulatory control pressure",
    complianceValue: 66,
    indicators: [
      { label: "Operational loss impact", score: 62 },
      { label: "Compliance findings likelihood", score: 68 },
      { label: "Remediation cost pressure", score: 65 }
    ]
  },
  {
    financialLabel: "Estimated annual loss exposure",
    financialValue: 84,
    complianceLabel: "Regulatory control pressure",
    complianceValue: 88,
    indicators: [
      { label: "Operational loss impact", score: 86 },
      { label: "Compliance findings likelihood", score: 90 },
      { label: "Remediation cost pressure", score: 83 }
    ]
  }
];

const lifecycleStages = [
  {
    name: "Design & Build",
    expectations: ["Defined purpose", "Documented assumptions", "Input data lineage"],
    regulations: ["SR 11-7", "FHFA", "OSFI E-23", "NIST AI RMF 1.0 (Govern/Map)"],
    sas: [
      "Model metadata captured in SAS Model Manager",
      "Lineage and metadata captured in SAS Information Governance"
    ],
    timeToEvidence: {
      your: "2-4 business days if artifacts are centrally maintained.",
      examiner: "24-48 hours for design rationale, assumptions, and lineage evidence."
    },
    commonFindings: [
      {
        title: "Design assumptions not linked to current use case",
        detail: "Teams reuse model assumptions in higher-impact contexts without a governance re-baseline."
      },
      {
        title: "Lineage incomplete at model handoff",
        detail: "Source-to-feature lineage is partially documented, making downstream control attestations weaker."
      }
    ]
  },
  {
    name: "Validation & Testing",
    expectations: ["Independent validation", "Backtesting", "Sensitivity analysis", "Fairness/bias testing where applicable"],
    regulations: ["SR 11-7", "Colorado 10-1-1", "OSFI E-23", "NIST AI RMF 1.0 (Measure)"],
    sas: [
      "Validation artifacts linked in SAS Model Risk Management",
      "Bias/fairness and explainability testing workflows in SAS Viya"
    ],
    timeToEvidence: {
      your: "3-6 business days when test evidence is distributed across teams.",
      examiner: "48-72 hours for challenge logs, test methods, and closure evidence."
    },
    commonFindings: [
      {
        title: "Effective challenge is documented but shallow",
        detail: "Validation reports exist, but challenge depth and remediation closure are not sufficiently evidenced."
      },
      {
        title: "Fairness tests are ad hoc",
        detail: "Fairness and explainability checks are run manually and are not repeatable across review cycles."
      }
    ]
  },
  {
    name: "Approval & Deployment",
    expectations: ["Role-based approvals", "Controlled promotion"],
    regulations: ["FHFA", "OSFI E-23", "NY DFS", "NIST AI RMF 1.0 (Govern/Manage)"],
    sas: ["Approval workflows in SAS Model Manager", "Version promotion tracking and governance checkpoints"],
    timeToEvidence: {
      your: "1-3 business days with centralized release and approval logs.",
      examiner: "Same-day to 24 hours for approvals, overrides, and promotion evidence."
    },
    commonFindings: [
      {
        title: "Emergency promotions bypass standard controls",
        detail: "Fast-track deployments lack complete approval evidence or compensating control documentation."
      },
      {
        title: "Decision rights are ambiguous",
        detail: "First line, model risk, and approver accountabilities are not clearly segmented by materiality tier."
      }
    ]
  },
  {
    name: "Monitoring",
    expectations: ["Performance drift detection", "Bias monitoring where applicable", "Threshold-based triggers"],
    regulations: ["SR 11-7", "Colorado 10-1-1", "FHFA", "NIST AI RMF 1.0 (Measure/Manage)"],
    sas: ["Monitoring plans", "Alerts and threshold policies in SAS Model Manager and Viya runtime workflows"],
    timeToEvidence: {
      your: "Daily to weekly, depending on monitoring automation depth.",
      examiner: "24-48 hours for threshold breaches, escalation actions, and remediation proof."
    },
    commonFindings: [
      {
        title: "Threshold alerts not tied to formal action",
        detail: "Drift or fairness alerts exist, but escalation and remediation ownership is weak or undocumented."
      },
      {
        title: "Outcomes analysis cadence is inconsistent",
        detail: "Monitoring reports are produced, but not at a frequency aligned to model risk tier."
      }
    ]
  },
  {
    name: "Audit & Review",
    expectations: ["Reproducibility", "Traceability", "Historical decisions", "Evidence retention"],
    regulations: ["FHFA", "SR 11-7", "OSFI E-23", "NY DFS", "NIST AI RMF 1.0 (Govern/Manage)"],
    sas: ["Immutable audit trails in SAS Model Risk Management", "Lineage diagrams and export from SAS Information Governance"],
    timeToEvidence: {
      your: "3-7 business days without pre-built evidence bundles.",
      examiner: "24-72 hours for targeted evidence requests during active reviews."
    },
    commonFindings: [
      {
        title: "Evidence exists but cannot be assembled quickly",
        detail: "Artifacts are present across repositories but not linked into review-ready evidence packs."
      },
      {
        title: "Traceability chain is broken",
        detail: "Decision output cannot be fully traced back to model version, data lineage, and control approvals."
      }
    ]
  }
];

const peerModels = {
  federated: {
    title: "Federated ownership",
    pros: ["Domain expertise close to model decisions", "Faster local response to model changes"],
    tradeoffs: ["Control consistency can vary by line of business", "Higher coordination overhead"],
    implications: ["Strong central standards required", "Clear escalation path to model risk leadership"]
  },
  centralized: {
    title: "Centralized model risk",
    pros: ["Consistent controls and evidence standards", "Clear independent challenge function"],
    tradeoffs: ["Can create bottlenecks for model delivery", "Distance from business context"],
    implications: ["Robust intake process needed", "Role clarity for first-line teams"]
  },
  hybrid: {
    title: "Hybrid governance",
    pros: ["Balances central control and domain accountability", "Scales across diverse portfolios"],
    tradeoffs: ["Requires explicit decision rights", "Needs disciplined operating model"],
    implications: ["Shared governance forums", "Common evidence templates and policy checkpoints"]
  }
};

const ownershipGovernanceProfiles = {
  federated: {
    challengeStrength: 61,
    challengeNote:
      "Effective challenge can weaken if validators report too close to development teams without formal escalation controls.",
    lod: [
      "Line 1 (Business/Developers): high autonomy for model build and operational monitoring.",
      "Line 2 (MRM/Validation): must enforce independent challenge through documented escalation.",
      "Line 3 (Internal Audit): periodic assurance focused on policy adherence and evidence quality."
    ],
    escalationWorkflow: [
      "Validation raises material disagreement with development assumptions.",
      "Escalate to governance committee with documented dissent.",
      "Decision recorded with rationale, owner accountability, and follow-up dates."
    ]
  },
  centralized: {
    challengeStrength: 89,
    challengeNote:
      "Independent challenge is strongest when validation and risk authority are structurally separate from development delivery pressure.",
    lod: [
      "Line 1 (Business/Developers): execute according to central standards and intake controls.",
      "Line 2 (MRM/Validation): centralized independent challenge with authority to restrict model use.",
      "Line 3 (Internal Audit): tests governance and validation rigor, then reports findings to board committees."
    ],
    escalationWorkflow: [
      "Validation identifies material deficiency and blocks promotion.",
      "Issue escalated to model risk committee and senior management.",
      "Use resumes only after remediation evidence passes independent review."
    ]
  },
  hybrid: {
    challengeStrength: 78,
    challengeNote:
      "Hybrid models perform well when decision rights are explicit and dispute resolution is time-bound and documented.",
    lod: [
      "Line 1 (Business/Developers): domain teams execute with shared governance playbooks.",
      "Line 2 (MRM/Validation): independent challenge plus enterprise standards and cross-team consistency checks.",
      "Line 3 (Internal Audit): verifies evidence quality and whether hybrid decision rights are followed."
    ],
    escalationWorkflow: [
      "Validation challenge recorded in shared workflow with assigned owner.",
      "Disagreement reviewed by cross-functional committee (with recusal where conflicts exist).",
      "Resolution, compensating controls, and revalidation timeline are documented."
    ]
  }
};

const painPointGuidance = {
  inventory: {
    title: "Fragmented inventory",
    action: "Establish a single model inventory with clear ownership, materiality tier, and lifecycle state.",
    regs: ["FHFA", "SR 11-7", "OSFI E-23", "NIST AI RMF 1.0"],
    sas: "SAS Model Risk Management",
    sasHow: [
      "Implement centralized model registry with owner, validator, use-case, and tier fields",
      "Use configurable workflows to enforce inventory completeness before deployment approvals"
    ]
  },
  validation: {
    title: "Inconsistent validation evidence",
    action: "Standardize validation templates and link challenge outcomes directly to model records.",
    regs: ["SR 11-7", "OSFI E-23", "FHFA", "NIST AI RMF 1.0"],
    sas: "SAS Model Risk Management + SAS Model Manager",
    sasHow: [
      "Create reusable validation templates and attach them directly to versioned model objects",
      "Track findings, severity, and closure status through issue workflow functionality"
    ]
  },
  monitoring: {
    title: "Weak policy-linked monitoring",
    action: "Define monitoring thresholds tied to explicit escalation and remediation workflows.",
    regs: ["SR 11-7", "FHFA", "Colorado 10-1-1", "NIST AI RMF 1.0"],
    sas: "SAS Model Manager + SAS Viya",
    sasHow: [
      "Configure threshold-based monitoring jobs for drift, performance, and stability metrics",
      "Trigger alert routing to model owners and risk teams with evidence-linked remediation tasks"
    ]
  },
  fairness: {
    title: "Manual fairness and bias testing",
    action: "Implement repeatable fairness and explainability testing as part of model validation and monitoring.",
    regs: ["Colorado 10-1-1", "OSFI E-23", "NY DFS", "NIST AI RMF 1.0"],
    sas: "SAS Viya (fairness/bias and explainability workflows)",
    sasHow: [
      "Run fairness metric pipelines by protected-group proxy and business segment",
      "Generate explainability outputs and store them as evidence artifacts in governance workflow"
    ]
  },
  audit: {
    title: "Manual audit evidence assembly",
    action: "Create an evidence packaging process aligned to review cycles and regulatory scope.",
    regs: ["FHFA", "SR 11-7", "NY DFS", "NIST AI RMF 1.0"],
    sas: "SAS Model Risk Management + SAS Information Governance",
    sasHow: [
      "Build evidence bundles from linked approvals, validation reports, monitoring logs, and issue history",
      "Export lineage-backed audit packages with traceable artifact references"
    ]
  },
  lineage: {
    title: "Incomplete lineage",
    action: "Capture data-to-model-to-decision lineage for traceability and reproducibility.",
    regs: ["FHFA", "OSFI E-23", "SR 11-7", "NIST AI RMF 1.0"],
    sas: "SAS Information Governance",
    sasHow: [
      "Map source data assets to model features and downstream decision outputs",
      "Expose searchable lineage views for risk, audit, and validation teams"
    ]
  },
  board: {
    title: "Weak board oversight evidence",
    action: "Standardize board reporting packs and committee-minute prompts to evidence informed challenge and accountable decisions.",
    regs: ["FHFA", "SR 11-7", "OSFI E-23", "NIST AI RMF 1.0"],
    sas: "SAS Model Risk Management + SAS Information Governance",
    sasHow: [
      "Generate board-level dashboards showing aggregate model risk, top exceptions, overrides, and remediation status",
      "Link board materials to underlying validation, monitoring, and issue artifacts for traceable oversight evidence"
    ]
  }
};

const regulationPainWeights = {
  FHFA: { inventory: 92, validation: 86, monitoring: 72, fairness: 54, audit: 88, lineage: 84, board: 93 },
  "SR 11-7": { inventory: 78, validation: 95, monitoring: 93, fairness: 52, audit: 84, lineage: 73, board: 82 },
  "OSFI E-23": { inventory: 85, validation: 89, monitoring: 87, fairness: 63, audit: 82, lineage: 86, board: 88 },
  "Colorado 10-1-1": { inventory: 70, validation: 82, monitoring: 80, fairness: 97, audit: 76, lineage: 68, board: 62 },
  "NIST AI RMF 1.0": { inventory: 83, validation: 84, monitoring: 88, fairness: 89, audit: 79, lineage: 81, board: 74 },
  "NY DFS": { inventory: 69, validation: 74, monitoring: 86, fairness: 58, audit: 90, lineage: 77, board: 84 }
};

const examSequenceByRegulation = {
  FHFA: [
    "Confirm board-approved model governance framework, inventory scope, and accountable owners.",
    "Verify independent validation evidence and materiality-based review coverage.",
    "Review ongoing monitoring thresholds, issue tracking, and remediation governance.",
    "Confirm traceability from model assumptions to decisions and control approvals.",
    "Verify board/committee minutes show informed oversight, challenge, and tracked follow-up actions.",
    "Package examiner-ready evidence set with approvals, findings, and lineage artifacts."
  ],
  "SR 11-7": [
    "Review conceptual soundness documentation and development assumptions.",
    "Evaluate effective challenge and independent validation depth.",
    "Assess outcomes analysis and performance monitoring effectiveness.",
    "Check governance response for model limitations and compensating controls.",
    "Confirm governance reporting reaches senior management and board with actionable issue tracking.",
    "Confirm evidence retention supports reproducibility and supervisory review."
  ],
  "OSFI E-23": [
    "Confirm enterprise governance and model risk policy accountability.",
    "Review validation discipline, challenge quality, and control effectiveness.",
    "Assess monitoring and risk escalation processes for operational model use.",
    "Verify traceability of controls, ownership, and evidence across lifecycle stages.",
    "Prepare review package aligned to prudent model risk management expectations."
  ],
  "Colorado 10-1-1": [
    "Identify AI use cases with potential consumer decision impact.",
    "Review governance controls addressing unfair discrimination risk.",
    "Evaluate fairness and bias testing coverage, methodology, and repeatability.",
    "Assess monitoring triggers and corrective action workflows.",
    "Compile decision, testing, and remediation evidence for regulatory review."
  ],
  "NIST AI RMF 1.0": [
    "Govern: establish accountability, policy controls, and oversight structure.",
    "Map: document intended use, context, stakeholders, and potential impacts.",
    "Measure: evaluate validity, robustness, fairness, and monitoring indicators.",
    "Manage: execute treatment plans, escalation triggers, and control responses.",
    "Retain evidence artifacts supporting continuous risk management."
  ],
  "NY DFS": [
    "Confirm governance controls and risk management accountability for model operations.",
    "Assess third-party and operational risk controls tied to model-enabled processes.",
    "Evaluate monitoring, incident handling, and issue escalation records.",
    "Validate audit trail completeness and decision traceability.",
    "Deliver a supervisory evidence pack with control ownership and remediation history."
  ]
};

const capabilityRows = [
  {
    need: "Model inventory and ownership",
    capability: "SAS Model Risk Management",
    detail: "Central inventory for model records, ownership, materiality, and governance status.",
    executionValue: 86,
    examReadiness: 93,
    defensibility: 95
  },
  {
    need: "Model lifecycle controls",
    capability: "SAS Model Manager",
    detail: "Registration, versioning, approval gates, and controlled promotion.",
    executionValue: 88,
    examReadiness: 90,
    defensibility: 92
  },
  {
    need: "Metadata, lineage, and traceability",
    capability: "SAS Information Governance",
    detail: "Cataloged assets with lineage relationships and stewardship metadata.",
    executionValue: 82,
    examReadiness: 91,
    defensibility: 94
  },
  {
    need: "Validation evidence and issue tracking",
    capability: "SAS Model Risk Management",
    detail: "Link validation outcomes, findings, issues, and remediation plans to model records.",
    executionValue: 84,
    examReadiness: 89,
    defensibility: 90
  },
  {
    need: "Fairness, bias, and explainability testing",
    capability: "SAS Viya",
    detail: "Repeatable fairness/bias and explainability analysis workflows embedded in model oversight.",
    executionValue: 80,
    examReadiness: 85,
    defensibility: 86
  },
  {
    need: "Synthetic data testing controls",
    capability: "SAS Data Maker",
    detail: "Governed synthetic data generation for testing, stress scenarios, and privacy-preserving experimentation.",
    executionValue: 76,
    examReadiness: 79,
    defensibility: 78
  },
  {
    need: "Monitoring and drift management",
    capability: "SAS Model Manager + SAS Viya",
    detail: "Performance monitoring, threshold alerts, and operational response workflows.",
    executionValue: 89,
    examReadiness: 94,
    defensibility: 96
  }
];

const capabilityDimensionByNeed = {
  "Model inventory and ownership": "Inventory & ownership",
  "Model lifecycle controls": "Independent validation",
  "Metadata, lineage, and traceability": "Audit traceability",
  "Validation evidence and issue tracking": "Independent validation",
  "Fairness, bias, and explainability testing": "Fairness testing",
  "Synthetic data testing controls": "Fairness testing",
  "Monitoring and drift management": "Monitoring controls"
};

const capabilityNeedByPain = {
  inventory: ["Model inventory and ownership"],
  validation: ["Validation evidence and issue tracking", "Model lifecycle controls"],
  monitoring: ["Monitoring and drift management"],
  fairness: ["Fairness, bias, and explainability testing", "Synthetic data testing controls"],
  audit: ["Metadata, lineage, and traceability", "Validation evidence and issue tracking"],
  lineage: ["Metadata, lineage, and traceability", "Model inventory and ownership"],
  board: ["Validation evidence and issue tracking", "Metadata, lineage, and traceability"]
};

const foundationRegulationLens = {
  your: [
    { name: "FHFA", text: "Documented model inventory, governance accountability, and audit-ready evidence." },
    { name: "SR 11-7", text: "Conceptual soundness, ongoing monitoring, and outcomes analysis." },
    { name: "OSFI E-23", text: "Model risk controls, lifecycle governance, and effective challenge." },
    { name: "Colorado 10-1-1", text: "Governance and testing to prevent unfair discrimination in AI-enabled decisions." },
    { name: "NIST AI RMF 1.0", text: "Govern, Map, Measure, and Manage functions across the AI lifecycle." },
    { name: "NY DFS", text: "Traceability, operational controls, and supervisory-quality documentation." }
  ],
  examiner: [
    {
      name: "FHFA",
      text: "First look: complete inventory scope, accountable owners, and fast retrieval of lifecycle evidence."
    },
    {
      name: "SR 11-7",
      text: "First look: monitoring effectiveness, outcomes analysis quality, and proof of independent challenge."
    },
    {
      name: "OSFI E-23",
      text: "First look: enterprise accountability model, effective challenge records, and control operating evidence."
    },
    {
      name: "Colorado 10-1-1",
      text: "First look: unfair discrimination controls, fairness test design, and remediation closure traceability."
    },
    {
      name: "NIST AI RMF 1.0",
      text: "First look: governance ownership, measurable risk indicators, and clear risk treatment evidence."
    },
    {
      name: "NY DFS",
      text: "First look: governance accountability, issue escalation records, and auditable control history."
    }
  ]
};

const foundationRegulationNotes = {
  your: "Cross-framework reference for policy-to-control mapping and governance design.",
  examiner:
    "Examiner view prioritizes what reviewers typically ask for first: accountable ownership, monitoring proof, and traceable evidence."
};

const examinerScrutinyOrder = ["evidence", "owners", "controls", "models", "data"];

const agenticLensByStep = [
  {
    examinerRiskRating: 24,
    evidenceBurden: 28,
    examinerQuestions: [
      "How is intended use bounded and documented for this model?",
      "What validation artifacts prove conceptual soundness and baseline performance?"
    ],
    practitionerQuestions: [
      "Are assumptions and constraints explicit and approved?",
      "Is periodic validation scheduled and owned?"
    ]
  },
  {
    examinerRiskRating: 43,
    evidenceBurden: 46,
    examinerQuestions: [
      "How are pipeline changes controlled and independently reviewed?",
      "Where is lineage evidence for feature dependencies and upstream schema shifts?"
    ],
    practitionerQuestions: [
      "Do change controls cover data, feature, and orchestration changes?",
      "Can teams quickly isolate root cause when pipeline behavior shifts?"
    ]
  },
  {
    examinerRiskRating: 67,
    evidenceBurden: 72,
    examinerQuestions: [
      "Which policy boundaries and human overrides govern cross-model decisions?",
      "How are threshold breaches escalated and evidenced for review?"
    ],
    practitionerQuestions: [
      "Are escalation thresholds linked to named owners and runbooks?",
      "Can decision traces be reconstructed by component and version?"
    ]
  },
  {
    examinerRiskRating: 89,
    evidenceBurden: 93,
    examinerQuestions: [
      "What controls prevent delegated actions from exceeding approved authority?",
      "Can you produce alert-to-remediation closure evidence for agent behavior exceptions?"
    ],
    practitionerQuestions: [
      "Are high-materiality actions gated with human approval checkpoints?",
      "Are runtime monitoring and fairness diagnostics tied to control action?"
    ]
  }
];

const lifecycleExaminerPriorityOrder = [
  "Monitoring",
  "Validation & Testing",
  "Design & Build",
  "Approval & Deployment",
  "Audit & Review"
];

const painPointViewContent = {
  your: {
    title: "Pain-point diagnostic",
    copy: "Identify current governance friction points to receive targeted guidance.",
    guidanceTitle: "Guided compliance pathway",
    guidanceCopy: "Focused actions based on selected pain points and regulatory lens.",
    sequenceTitle: "Examiner-ready evidence sequence (interactive)",
    optionLabels: {
      inventory: "Inventory is fragmented across teams or tools",
      validation: "Validation evidence is inconsistent or delayed",
      monitoring: "Monitoring and drift alerts are not tied to policy actions",
      fairness: "Fairness and bias testing is manual or non-repeatable",
      audit: "Audit requests require manual evidence compilation",
      lineage: "Data-to-model-to-decision lineage is incomplete",
      board: "Board and committee oversight evidence is hard to prove quickly"
    }
  },
  examiner: {
    title: "Examiner red-flag diagnostic",
    copy: "Flag supervisory red flags and see where combinations can escalate to formal findings.",
    guidanceTitle: "Examiner response pathway",
    guidanceCopy: "Prioritized actions framed by supervisory review logic and evidentiary defensibility.",
    sequenceTitle: "Examiner sequence (priority ordered)",
    optionLabels: {
      inventory: "Red flag: inventory scope and ownership accountability are fragmented",
      validation: "Red flag: independent validation evidence is inconsistent or delayed",
      monitoring: "Red flag: monitoring alerts are not linked to mandatory remediation actions",
      fairness: "Red flag: fairness and bias tests are manual, non-repeatable, or weakly governed",
      audit: "Red flag: examiner requests require manual evidence assembly across silos",
      lineage: "Red flag: lineage gaps break traceability from data to model to decision",
      board: "Red flag: board minutes and oversight packs do not evidence informed challenge and follow-up"
    }
  }
};

const mriaTriggerRules = [
  {
    id: "mria-ownership-evidence",
    pains: ["inventory", "lineage", "audit"],
    title: "Ownership + traceability + evidence breakdown",
    detail:
      "When ownership, lineage, and evidence packaging fail together, exam teams often escalate rapidly due to unresolved accountability.",
    signal: "High likelihood of formal supervisory escalation if unresolved across review cycles."
  },
  {
    id: "mria-monitoring-validation",
    pains: ["monitoring", "validation"],
    title: "Monitoring-control weakness with weak challenge evidence",
    detail:
      "Monitoring gaps combined with limited validation challenge create elevated risk of adverse findings on control effectiveness.",
    signal: "Moderate-to-high escalation risk, especially for higher-tier models."
  },
  {
    id: "mria-fairness-control",
    pains: ["fairness", "monitoring", "audit"],
    title: "Fairness oversight weakness with incomplete closure records",
    detail:
      "If fairness signals are weak and closure evidence is incomplete, regulators may question governance sufficiency and remediation rigor.",
    signal: "High escalation risk for customer-impacting AI use cases."
  },
  {
    id: "mria-board-oversight",
    pains: ["board", "audit", "inventory"],
    title: "Board oversight evidence gap with fragmented accountability",
    detail:
      "If board/committee oversight is weakly documented while inventory and audit evidence are fragmented, supervisory scrutiny typically escalates.",
    signal: "High escalation risk when institutions cannot prove informed challenge and tracked follow-up."
  }
];

const blueprintSteps = [
  {
    key: "inventory",
    label: "Inventory",
    detail:
      "Capture model purpose, owners, risk tier, assumptions, and business use to establish governance accountability.",
    sas: "SAS Model Risk Management"
  },
  {
    key: "validation",
    label: "Validation",
    detail:
      "Attach challenge artifacts, outcomes analysis, and testing evidence directly to model records for examiner traceability.",
    sas: "SAS Model Risk Management + SAS Model Manager"
  },
  {
    key: "approval",
    label: "Approval",
    detail:
      "Apply role-based approvals, controlled promotion, and policy checks before operational use.",
    sas: "SAS Model Manager"
  },
  {
    key: "monitoring",
    label: "Monitoring",
    detail:
      "Track drift, performance changes, and policy breaches with defined escalation pathways.",
    sas: "SAS Model Manager + SAS Viya"
  },
  {
    key: "fairness",
    label: "Fairness",
    detail:
      "Run fairness/bias and explainability analysis for impacted use cases and retain outcomes as evidence.",
    sas: "SAS Viya"
  },
  {
    key: "audit",
    label: "Audit pack",
    detail:
      "Package inventory, validation, monitoring, and lineage records into review-ready evidence sets.",
    sas: "SAS Model Risk Management + SAS Information Governance"
  }
];

const implementationTracks = {
  "control-design":
    "Start with policy-to-control mapping and explicit RACI definitions across first line, validation, and audit stakeholders.",
  "platform-setup":
    "Prioritize model inventory, approval workflow, and lineage integration as foundational platform capabilities.",
  "validation-modernization":
    "Standardize validation templates and integrate fairness, explainability, and monitoring outputs into one workflow.",
  "exam-readiness":
    "Run a time-boxed evidence readiness sprint focused on traceability gaps, documentation quality, and control testing."
};

const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sectionEls = Array.from(document.querySelectorAll("section[data-section]"));
const progressBar = document.getElementById("progress-bar");
const toast = document.getElementById("toast");
let currentOwnershipKey = "federated";
const VIEW_MODE_STORAGE_KEY = "fhlb-view-mode-v1";
const ROLE_STORAGE_KEY = "fhlb-role-v1";
const EXAMINER_ONBOARDING_STORAGE_KEY = "fhlb-examiner-onboarding-v1";
const SECTION_COMPLETION_STORAGE_KEY = "fhlb-section-completion-v1";
let currentViewMode = "your";
let currentRole = "mrm";
const GOVERNANCE_PROFILE_STORAGE_KEY = "fhlb-governance-profile-v1";
const completedSections = new Set(safeJsonParse(safeSessionGet(SECTION_COMPLETION_STORAGE_KEY) || "[]") || []);
const ROLE_LABELS = {
  mrm: "Model Risk Manager",
  developer: "Developer",
  validator: "Validator"
};
const rolePainPriorityBoost = {
  mrm: { inventory: 8, board: 12, audit: 8, lineage: 5 },
  developer: { monitoring: 9, fairness: 8, lineage: 7, validation: 4 },
  validator: { validation: 12, monitoring: 8, fairness: 6, audit: 5 }
};
const roleAgenticFocusByStep = {
  mrm: [
    {
      focus: ["Confirm scope and model-use boundaries in policy.", "Validate owner assignment and approval authority."],
      artifacts: ["Policy mapping note", "Tier assignment + owner attestation"]
    },
    {
      focus: ["Enforce change-control governance for feature/pipeline drift.", "Confirm escalation thresholds are approved and tested."],
      artifacts: ["Change governance log", "Escalation trigger test record"]
    },
    {
      focus: ["Require override governance with committee visibility.", "Ensure cross-model decision tracing is review-ready."],
      artifacts: ["Override register extract", "Cross-model decision trace bundle"]
    },
    {
      focus: ["Set delegated authority boundaries and hard-stop criteria.", "Require board/committee visibility for repeated exceptions."],
      artifacts: ["Delegation policy", "Exception trend summary for governance committee"]
    }
  ],
  developer: [
    {
      focus: ["Document assumptions, data dependencies, and known limitations.", "Build structured logging for reproducibility."],
      artifacts: ["Developer model card", "Run metadata and reproducibility notes"]
    },
    {
      focus: ["Implement schema checks and fallback behaviors in code.", "Instrument low-confidence and out-of-scope events."],
      artifacts: ["Pipeline validation tests", "Low-confidence event logs"]
    },
    {
      focus: ["Add explicit human gate APIs for material decisions.", "Capture end-to-end trace IDs across orchestration."],
      artifacts: ["Approval hook implementation evidence", "Trace ID lineage sample"]
    },
    {
      focus: ["Implement policy-bounded action constraints in runtime.", "Expose override telemetry for validator/MRM review."],
      artifacts: ["Constraint test suite", "Override telemetry dashboard extract"]
    }
  ],
  validator: [
    {
      focus: ["Challenge assumption validity and boundary completeness.", "Test explanation fidelity against actual behavior."],
      artifacts: ["Challenge memo", "Explanation fidelity test output"]
    },
    {
      focus: ["Validate change controls and rollback effectiveness.", "Test drift triggers and escalation response quality."],
      artifacts: ["Independent change review note", "Alert-to-action evidence sample"]
    },
    {
      focus: ["Assess override rationale quality and independence.", "Verify traceability across multi-model decision chains."],
      artifacts: ["Override challenge report", "Decision chain reconstruction evidence"]
    },
    {
      focus: ["Stress-test knowledge limits and fallback execution.", "Test defensibility under low-confidence/high-impact scenarios."],
      artifacts: ["Knowledge-limits test report", "Escalation scenario validation notes"]
    }
  ]
};
const roleLifecycleFocus = {
  mrm: {
    "Design & Build": ["Set tiering criteria and acceptance standards.", "Confirm accountable owner + backup owner for each model."],
    "Validation & Testing": ["Define challenge depth by tier.", "Track open findings and closure SLAs."],
    "Approval & Deployment": ["Enforce separation-of-duties in approvals.", "Require risk acceptance for unresolved limitations."],
    Monitoring: ["Review alert quality and escalation performance.", "Report threshold breaches to committee cadence."],
    "Audit & Review": ["Run evidence-readiness drills against likely exam requests.", "Close traceability gaps before review cycles."]
  },
  developer: {
    "Design & Build": ["Capture methodology decisions and rejected alternatives.", "Embed lineage and metadata hooks from day one."],
    "Validation & Testing": ["Provide test harnesses and reproducible runs.", "Supply explanation, fairness, and sensitivity outputs."],
    "Approval & Deployment": ["Package release notes with control impacts.", "Document rollback path and operational guardrails."],
    Monitoring: ["Own initial triage playbooks for threshold breaches.", "Log remediation details in structured formats."],
    "Audit & Review": ["Prepare fast retrieval paths for code/data/model lineage.", "Keep developer handoff artifacts current."]
  },
  validator: {
    "Design & Build": ["Challenge conceptual soundness and limitations.", "Verify classification and materiality decisions."],
    "Validation & Testing": ["Execute independent benchmark/backtest/fairness challenge.", "Document dissent, not just outcomes."],
    "Approval & Deployment": ["Validate unresolved issues are risk-accepted with controls.", "Confirm approval evidence integrity."],
    Monitoring: ["Assess whether monitoring tests remain fit-for-purpose.", "Escalate repeated unresolved alerts as control weakness."],
    "Audit & Review": ["Package effective-challenge evidence by tier.", "Verify reproducibility and traceability claims independently."]
  }
};
const roleDiscussionPrompts = {
  mrm: [
    "Which governance decision rights are still ambiguous across first line, validation, and MRM?",
    "Where is your largest exposure to board oversight evidence gaps today?",
    "Which Tier 1 models still lack defensible challenge and monitoring evidence?",
    "What should be escalated to committee monthly vs. quarterly?",
    "Which control can be automated first for highest defensibility gain?"
  ],
  developer: [
    "Which artifacts can your team generate automatically at build and release time?",
    "Where do handoffs to validators break today: assumptions, data lineage, or test reproducibility?",
    "Which runtime guardrails are missing for higher-autonomy workflows?",
    "What logging changes would cut evidence assembly time the most?",
    "How can you make model updates safer without slowing release cadence?"
  ],
  validator: [
    "Where does effective challenge currently lack depth or documented dissent?",
    "Which validation tests should be mandatory by model tier and autonomy level?",
    "Which monitoring signals most often fail to trigger defensible action?",
    "How should validation approach differ for vendor, ML, and agentic use cases?",
    "What evidence package lets you defend findings under examiner scrutiny quickly?"
  ]
};
const roleGuidanceSummary = {
  mrm: {
    title: "MRM execution priorities",
    actions: [
      "Set tier-specific evidence minimums and closure SLAs.",
      "Anchor oversight reporting in owner accountability and override trends."
    ]
  },
  developer: {
    title: "Developer execution priorities",
    actions: [
      "Build validation-ready artifacts into delivery pipelines.",
      "Treat monitoring/escalation hooks as core product requirements."
    ]
  },
  validator: {
    title: "Validator execution priorities",
    actions: [
      "Document effective challenge and dissent resolution explicitly.",
      "Prioritize independent tests that target material limitations."
    ]
  }
};
const MATURITY_DIMENSIONS = [
  { key: "policyClarity", label: "Policy Clarity", peer: 64 },
  { key: "operationalExecution", label: "Operational Execution", peer: 59 },
  { key: "evidenceReadiness", label: "Evidence Readiness", peer: 56 },
  { key: "stakeholderAlignment", label: "Stakeholder Alignment", peer: 61 }
];
const MATURITY_SAS_ROI_MAP = {
  policyClarity: {
    sas: "SAS Model Risk Management policy workflows and governed model inventory",
    roi: "Typical ROI framing: 20-35% reduction in policy interpretation and intake cycle time"
  },
  operationalExecution: {
    sas: "SAS Model Manager approval automation + Viya monitoring triggers",
    roi: "Typical ROI framing: 25-40% reduction in manual control execution effort"
  },
  evidenceReadiness: {
    sas: "SAS Model Risk Management evidence bundles + SAS Information Governance lineage export",
    roi: "Typical ROI framing: 30-50% faster examiner/audit evidence package preparation"
  },
  stakeholderAlignment: {
    sas: "Role-based governance dashboards, ownership routing, and issue workflow in SAS Model Risk Management",
    roi: "Typical ROI framing: 15-30% reduction in decision latency across governance committees"
  }
};
let maturityRadarChart = null;
let governanceProfileInitialized = false;
let governanceProfileState = {
  regulationsSelected: {},
  activeRegulation: "FHFA",
  painPointCounts: {},
  activePainPoints: [],
  lifecycleSeconds: {},
  lifecycleVisits: {},
  activeLifecycleStage: null,
  lifecycleStartedAt: null,
  ownershipVisits: {
    federated: 0,
    centralized: 0,
    hybrid: 0
  },
  explainabilitySelections: {},
  useCaseSelections: {},
  glossarySearches: [],
  glossaryClicks: {},
  sliderInteractions: 0,
  visitedSections: {},
  maturityScores: {
    policyClarity: 58,
    operationalExecution: 54,
    evidenceReadiness: 52,
    stakeholderAlignment: 57
  },
  lastUpdated: Date.now()
};

function clampScore(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function getScoreBand(score) {
  if (score >= 90) return "excellent";
  if (score >= 60) return "good";
  if (score >= 30) return "watch";
  return "critical";
}

function getScoreBandClass(score) {
  return `score-${getScoreBand(score)}`;
}

function getBadgeClass(score) {
  return `band-${getScoreBand(score)}`;
}

function getRiskSeverityClass(score) {
  if (score >= 80) return "risk-severity-high";
  if (score >= 60) return "risk-severity-elevated";
  if (score >= 30) return "risk-severity-moderate";
  return "risk-severity-low";
}

function getRiskBadgeClass(score) {
  if (score >= 80) return "band-critical";
  if (score >= 60) return "band-watch";
  if (score >= 30) return "band-good";
  return "band-excellent";
}

function average(values) {
  if (!values.length) return 0;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function safeJsonParse(value) {
  try {
    return JSON.parse(value);
  } catch (_error) {
    return null;
  }
}

function safeSessionGet(key) {
  try {
    return window.sessionStorage.getItem(key);
  } catch (_error) {
    return null;
  }
}

function safeSessionSet(key, value) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch (_error) {
    // Ignore storage failures and continue with in-memory mode state.
  }
}

function safeDecodeProfile(payload) {
  try {
    const decoded = decodeURIComponent(escape(window.atob(payload)));
    return JSON.parse(decoded);
  } catch (_error) {
    return null;
  }
}

function safeEncodeProfile(value) {
  try {
    return window.btoa(unescape(encodeURIComponent(JSON.stringify(value))));
  } catch (_error) {
    return "";
  }
}

function initGovernanceProfileState() {
  const params = new URLSearchParams(window.location.search);
  const shared = params.get("profile");
  const fromUrl = shared ? safeDecodeProfile(shared) : null;
  const fromSession = safeJsonParse(safeSessionGet(GOVERNANCE_PROFILE_STORAGE_KEY) || "");
  const source = fromUrl || fromSession;
  if (!source) return;

  governanceProfileState = {
    ...governanceProfileState,
    ...source,
    regulationsSelected: { ...governanceProfileState.regulationsSelected, ...(source.regulationsSelected || {}) },
    painPointCounts: { ...governanceProfileState.painPointCounts, ...(source.painPointCounts || {}) },
    lifecycleSeconds: { ...governanceProfileState.lifecycleSeconds, ...(source.lifecycleSeconds || {}) },
    lifecycleVisits: { ...governanceProfileState.lifecycleVisits, ...(source.lifecycleVisits || {}) },
    ownershipVisits: { ...governanceProfileState.ownershipVisits, ...(source.ownershipVisits || {}) },
    explainabilitySelections: { ...governanceProfileState.explainabilitySelections, ...(source.explainabilitySelections || {}) },
    useCaseSelections: { ...governanceProfileState.useCaseSelections, ...(source.useCaseSelections || {}) },
    glossaryClicks: { ...governanceProfileState.glossaryClicks, ...(source.glossaryClicks || {}) },
    maturityScores: { ...governanceProfileState.maturityScores, ...(source.maturityScores || {}) }
  };
}

function persistGovernanceProfileState() {
  governanceProfileState.lastUpdated = Date.now();
  safeSessionSet(GOVERNANCE_PROFILE_STORAGE_KEY, JSON.stringify(governanceProfileState));
}

function getLifecycleElapsedSeconds() {
  const seconds = { ...governanceProfileState.lifecycleSeconds };
  if (governanceProfileState.activeLifecycleStage && governanceProfileState.lifecycleStartedAt) {
    const delta = (Date.now() - governanceProfileState.lifecycleStartedAt) / 1000;
    seconds[governanceProfileState.activeLifecycleStage] =
      (seconds[governanceProfileState.activeLifecycleStage] || 0) + delta;
  }
  return seconds;
}

function finalizeLifecycleTimer() {
  if (!governanceProfileState.activeLifecycleStage || !governanceProfileState.lifecycleStartedAt) return;
  const delta = (Date.now() - governanceProfileState.lifecycleStartedAt) / 1000;
  const key = governanceProfileState.activeLifecycleStage;
  governanceProfileState.lifecycleSeconds[key] = (governanceProfileState.lifecycleSeconds[key] || 0) + delta;
  governanceProfileState.lifecycleStartedAt = Date.now();
}

function startLifecycleTimer(stageName) {
  finalizeLifecycleTimer();
  governanceProfileState.activeLifecycleStage = stageName;
  governanceProfileState.lifecycleStartedAt = Date.now();
  governanceProfileState.lifecycleVisits[stageName] = (governanceProfileState.lifecycleVisits[stageName] || 0) + 1;
  persistGovernanceProfileState();
}

function trackRegulationSelection(regulation) {
  if (!regulation) return;
  governanceProfileState.regulationsSelected[regulation] = (governanceProfileState.regulationsSelected[regulation] || 0) + 1;
  governanceProfileState.activeRegulation = regulation;
  renderGovernanceProfile();
}

function trackOwnershipSelection(ownershipKey) {
  governanceProfileState.ownershipVisits[ownershipKey] = (governanceProfileState.ownershipVisits[ownershipKey] || 0) + 1;
  renderGovernanceProfile();
}

function trackSliderInteraction() {
  governanceProfileState.sliderInteractions += 1;
  renderGovernanceProfile();
}

function trackPainSelections(selected) {
  governanceProfileState.activePainPoints = selected;
  selected.forEach((pain) => {
    governanceProfileState.painPointCounts[pain] = (governanceProfileState.painPointCounts[pain] || 0) + 1;
  });
  renderGovernanceProfile();
}

function trackGlossarySearch(term) {
  const value = (term || "").trim().toLowerCase();
  if (value.length < 3) return;
  if (!governanceProfileState.glossarySearches.includes(value)) {
    governanceProfileState.glossarySearches = [...governanceProfileState.glossarySearches.slice(-19), value];
    renderGovernanceProfile();
  }
}

function trackGlossaryClick(term) {
  governanceProfileState.glossaryClicks[term] = (governanceProfileState.glossaryClicks[term] || 0) + 1;
  renderGovernanceProfile();
}

function trackExplainabilitySelection(checkKey) {
  if (!checkKey) return;
  governanceProfileState.explainabilitySelections[checkKey] =
    (governanceProfileState.explainabilitySelections[checkKey] || 0) + 1;
  renderGovernanceProfile();
}

function trackUseCaseSelection(useCaseKey) {
  if (!useCaseKey) return;
  governanceProfileState.useCaseSelections[useCaseKey] = (governanceProfileState.useCaseSelections[useCaseKey] || 0) + 1;
  renderAiUseInventory();
  renderGovernanceProfile();
}

function getMostExploredOwnership() {
  return Object.entries(governanceProfileState.ownershipVisits).sort((a, b) => b[1] - a[1])[0]?.[0] || "federated";
}

function getTopSelectedRegulations(limit = 3) {
  return Object.entries(governanceProfileState.regulationsSelected)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([key]) => key);
}

function deriveMaturityScores() {
  const selectedPain = new Set(governanceProfileState.activePainPoints || []);
  const regulationsCount = Object.keys(governanceProfileState.regulationsSelected).length;
  const lifecycleSeconds = getLifecycleElapsedSeconds();
  const lifecycleCoverage = Object.values(lifecycleSeconds).filter((seconds) => seconds >= 15).length;
  const ownershipCoverage = Object.values(governanceProfileState.ownershipVisits).filter((count) => count > 0).length;
  const explainabilityCoverage = Object.keys(governanceProfileState.explainabilitySelections || {}).length;
  const useCaseCoverage = Object.keys(governanceProfileState.useCaseSelections || {}).length;
  const glossaryDepth =
    governanceProfileState.glossarySearches.length + Object.keys(governanceProfileState.glossaryClicks).length;
  const sliderDepth = Math.min(governanceProfileState.sliderInteractions, 8);

  const policy =
    50 +
    regulationsCount * 5 +
    explainabilityCoverage * 4 +
    Math.min(glossaryDepth, 8) -
    (selectedPain.has("inventory") ? 11 : 0) -
    (selectedPain.has("lineage") ? 8 : 0) -
    (selectedPain.has("validation") ? 6 : 0) -
    (selectedPain.has("board") ? 8 : 0);

  const operational =
    48 +
    sliderDepth * 4 +
    lifecycleCoverage * 4 +
    useCaseCoverage * 2 +
    ownershipCoverage * 2 -
    (selectedPain.has("monitoring") ? 10 : 0) -
    (selectedPain.has("fairness") ? 7 : 0);

  const evidence =
    47 +
    lifecycleCoverage * 5 +
    regulationsCount * 3 -
    explainabilityCoverage * 2 +
    (selectedPain.has("audit") ? 12 : 0) -
    (selectedPain.has("lineage") ? 9 : 0) -
    (selectedPain.has("validation") ? 7 : 0) -
    (selectedPain.has("board") ? 10 : 0);

  const stakeholder =
    52 +
    ownershipCoverage * 8 +
    useCaseCoverage * 2 +
    regulationsCount * 2 -
    (selectedPain.has("inventory") ? 9 : 0) -
    (selectedPain.has("audit") ? 6 : 0) -
    (selectedPain.has("board") ? 11 : 0);

  return {
    policyClarity: clampScore(policy),
    operationalExecution: clampScore(operational),
    evidenceReadiness: clampScore(evidence),
    stakeholderAlignment: clampScore(stakeholder)
  };
}

function getDimensionActions(key, score) {
  const pains = new Set(governanceProfileState.activePainPoints || []);
  const actions = {
    policyClarity: [
      "Codify model standard templates for purpose, assumptions, and owner accountability.",
      "Align policy controls to FHFA/SR 11-7 artifacts and review cadence."
    ],
    operationalExecution: [
      "Automate approval checkpoints and threshold-based control triggers in lifecycle workflows.",
      "Introduce runbook-linked drift/fairness alerts with named escalation owners."
    ],
    evidenceReadiness: [
      "Package validation, monitoring, and lineage artifacts into reusable evidence bundles.",
      "Reduce manual audit prep by standardizing evidence export pathways."
    ],
    stakeholderAlignment: [
      "Define RACI by ownership model for first line, validation, risk, and audit.",
      "Use governance dashboards to track open issues by accountable owner."
    ]
  };

  if (pains.has("fairness") && key === "operationalExecution") {
    actions.operationalExecution.unshift("Embed repeatable fairness/bias test runs into validation and monitoring cycles.");
  }
  if (pains.has("audit") && key === "evidenceReadiness") {
    actions.evidenceReadiness.unshift("Create examiner-ready packs mapped to regulation-specific review questions.");
  }
  if (pains.has("board") && key === "stakeholderAlignment") {
    actions.stakeholderAlignment.unshift("Standardize board pack and committee-minute prompts for defensible oversight evidence.");
  }
  if (pains.has("board") && key === "evidenceReadiness") {
    actions.evidenceReadiness.unshift("Link board materials directly to underlying validation and monitoring artifacts.");
  }
  if (score < 50) {
    return actions[key].slice(0, 2);
  }
  return actions[key].slice(0, 2);
}

function buildGovernanceGapMappings(scores) {
  return MATURITY_DIMENSIONS.map((dimension) => {
    const score = scores[dimension.key];
    const gap = Math.max(0, dimension.peer - score);
    return {
      ...dimension,
      score,
      gap,
      ...MATURITY_SAS_ROI_MAP[dimension.key]
    };
  }).sort((a, b) => b.gap - a.gap);
}

function renderMaturityRadar(scores) {
  if (typeof window.Chart === "undefined") return;
  const canvas = document.getElementById("maturity-radar");
  if (!canvas) return;
  const labels = MATURITY_DIMENSIONS.map((dimension) => dimension.label);
  const peerValues = MATURITY_DIMENSIONS.map((dimension) => dimension.peer);
  const profileValues = MATURITY_DIMENSIONS.map((dimension) => scores[dimension.key]);

  if (maturityRadarChart) {
    maturityRadarChart.data.labels = labels;
    maturityRadarChart.data.datasets[0].data = profileValues;
    maturityRadarChart.data.datasets[1].data = peerValues;
    maturityRadarChart.update();
    return;
  }

  maturityRadarChart = new window.Chart(canvas.getContext("2d"), {
    type: "radar",
    data: {
      labels,
      datasets: [
        {
          label: "Your profile",
          data: profileValues,
          borderColor: "#0c4a7f",
          backgroundColor: "rgba(12, 74, 127, 0.18)",
          pointBackgroundColor: "#0c4a7f",
          borderWidth: 2
        },
        {
          label: "Typical FHLB peer",
          data: peerValues,
          borderColor: "#8c9eb0",
          backgroundColor: "rgba(140, 158, 176, 0.12)",
          pointBackgroundColor: "#8c9eb0",
          borderDash: [5, 5],
          borderWidth: 2
        }
      ]
    },
    options: {
      animation: {
        duration: 450
      },
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 10
          }
        }
      },
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20,
            backdropColor: "transparent"
          }
        }
      }
    }
  });
}

function renderGovernanceProfile() {
  const scores = deriveMaturityScores();
  governanceProfileState.maturityScores = scores;
  persistGovernanceProfileState();
  if (!governanceProfileInitialized) return;

  renderMaturityRadar(scores);

  const dimensionsEl = document.getElementById("maturity-dimensions");
  dimensionsEl.innerHTML = MATURITY_DIMENSIONS.map((dimension) => {
    const score = scores[dimension.key];
    const delta = score - dimension.peer;
    const actions = getDimensionActions(dimension.key, score);
    return `
      <div class="maturity-row">
        <div class="maturity-head">
          <strong>${dimension.label}</strong>
          <span class="band-badge ${getBadgeClass(score)}">${score}</span>
        </div>
        <div class="metric-bar"><span class="${getScoreBandClass(score)}" style="width:${score}%"></span></div>
        <p class="peer-meta">Typical FHLB peer: ${dimension.peer} (${delta >= 0 ? "+" : ""}${delta})</p>
        <ul class="maturity-actions">${actions.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    `;
  }).join("");
  animateBarsIn(dimensionsEl);

  const interactionsEl = document.getElementById("profile-interactions");
  const topRegs = getTopSelectedRegulations(2);
  const topOwnership = getMostExploredOwnership();
  const topExplainability = Object.entries(governanceProfileState.explainabilitySelections || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([key]) => explainabilityChecks[key]?.title || key);
  const topUseCases = Object.entries(governanceProfileState.useCaseSelections || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([key]) => fhlbUseCaseData[key]?.title || key);
  const glossaryRecent = governanceProfileState.glossarySearches.slice(-3);
  const lifecycleEntries = Object.entries(getLifecycleElapsedSeconds())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([stage, seconds]) => `${stage} (${Math.round(seconds)}s)`);
  interactionsEl.innerHTML = [
    `<li>Regulations explored most: ${topRegs.length ? topRegs.join(", ") : "Not enough interaction yet"}</li>`,
    `<li>Pain points flagged: ${governanceProfileState.activePainPoints.length ? governanceProfileState.activePainPoints.join(", ") : "None selected"}</li>`,
    `<li>Lifecycle focus: ${lifecycleEntries.length ? lifecycleEntries.join(", ") : "Not enough interaction yet"}</li>`,
    `<li>Most explored operating model: ${peerModels[topOwnership]?.title || "Federated ownership"}</li>`,
    `<li>Explainability tests explored: ${topExplainability.length ? topExplainability.join(", ") : "Not enough interaction yet"}</li>`,
    `<li>Top FHLB use cases discussed: ${topUseCases.length ? topUseCases.join(", ") : "No use cases selected yet"}</li>`,
    `<li>Glossary terms searched: ${
      glossaryRecent.length ? glossaryRecent.join(", ") : "No search terms captured yet"
    }</li>`
  ].join("");

  const actionEl = document.getElementById("profile-actions");
  const prioritized = buildGovernanceGapMappings(scores).slice(0, 2);
  actionEl.innerHTML = prioritized
    .map(
      (item) => `<li><strong>${item.label}:</strong> ${getDimensionActions(item.key, item.score)[0]} <span class="peer-meta">${item.sas}</span></li>`
    )
    .join("");
}

let toastTimer = null;

function showToast(message, durationMs = 2200) {
  toast.textContent = message;
  toast.classList.add("show");
  if (toastTimer) {
    window.clearTimeout(toastTimer);
  }
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), durationMs);
}

function pulseProgressBar() {
  // Progress bar hidden in meeting mode
}

function showSectionCheckAnimation(sectionEl) {
  if (!sectionEl) return;
  const anchor = sectionEl.querySelector(".section-heading") || sectionEl.querySelector(".hero-card") || sectionEl;
  const parent = anchor;
  if (!parent) return;
  if (window.getComputedStyle(parent).position === "static") {
    parent.style.position = "relative";
  }
  const check = document.createElement("div");
  check.className = "section-complete-check";
  check.textContent = "✓";
  parent.appendChild(check);
  window.setTimeout(() => check.remove(), 620);
}

function getSectionLabel(sectionId) {
  const section = document.getElementById(sectionId);
  const heading = section?.querySelector("h2");
  return heading ? heading.textContent.trim() : "Section";
}

function markSectionComplete(sectionId) {
  if (!sectionId || completedSections.has(sectionId)) return;
  completedSections.add(sectionId);
  safeSessionSet(SECTION_COMPLETION_STORAGE_KEY, JSON.stringify(Array.from(completedSections)));
  const section = document.getElementById(sectionId);
  showSectionCheckAnimation(section);
  pulseProgressBar();
  showToast(`Section complete: ${getSectionLabel(sectionId)}`, 2000);
}

function fadeSwap(element, updateFn) {
  element.classList.add("fade-swap");
  setTimeout(() => {
    updateFn();
    animateBarsIn(element);
    element.classList.remove("fade-swap");
  }, 180);
}

function animateBarsIn(container) {
  if (!container) return;
  container.querySelectorAll(".poll-bar span, .metric-bar span").forEach((bar) => {
    bar.classList.remove("bar-animate");
    void bar.offsetWidth;
    bar.classList.add("bar-animate");
  });
}

function renderSkeletonLines(count = 4) {
  return `<div class="skeleton-block">${Array.from({ length: count })
    .map((_, index) => `<span class="skeleton-line${index % 2 ? " short" : ""}"></span>`)
    .join("")}</div>`;
}

function showSkeleton(target, lineCount = 4) {
  if (!target) return;
  target.innerHTML = renderSkeletonLines(lineCount);
}

function updateProgress() {
  if (!progressBar) return;
  const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
  progressBar.style.width = `${Math.round(progress * 100)}%`;
}

function setActiveNav(sectionId) {
  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("active", active);
    if (active) {
      const nav = link.closest(".section-nav");
      if (nav && nav.scrollWidth > nav.clientWidth) {
        link.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
      }
    }
  });
}

function initObservers() {
  if (typeof window.IntersectionObserver !== "function") {
    sectionEls.forEach((section) => section.classList.add("show"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "-10% 0px -10% 0px", threshold: 0 }
  );

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
          governanceProfileState.visitedSections[entry.target.id] =
            (governanceProfileState.visitedSections[entry.target.id] || 0) + 1;
          renderGovernanceProfile();
        }
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: 0.2 }
  );

  sectionEls.forEach((section) => {
    revealObserver.observe(section);
    navObserver.observe(section);
  });
}

function initStartButton() {
  document.getElementById("btn-start").addEventListener("click", () => {
    const next = document.getElementById("gray-space") || document.getElementById("foundations");
    if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
    markSectionComplete("orientation");
  });
}

function isExaminerView() {
  return currentViewMode === "examiner";
}

function getCurrentRoleLabel() {
  return ROLE_LABELS[currentRole] || ROLE_LABELS.mrm;
}

function initRoleState() {
  const stored = safeSessionGet(ROLE_STORAGE_KEY);
  currentRole = stored && ROLE_LABELS[stored] ? stored : "mrm";
}

function initViewModeState() {
  const stored = safeSessionGet(VIEW_MODE_STORAGE_KEY);
  currentViewMode = stored === "examiner" ? "examiner" : "your";
  document.body.classList.toggle("examiner-view", isExaminerView());
}

function renderRoleAgenticFocus(index) {
  const heading = document.getElementById("role-agentic-heading");
  const target = document.getElementById("role-agentic-focus");
  if (!heading || !target) return;
  const roleData = roleAgenticFocusByStep[currentRole] || roleAgenticFocusByStep.mrm;
  const item = roleData[index] || roleData[0];
  heading.textContent = `${getCurrentRoleLabel()} focus`;
  target.innerHTML = `
    <p><strong>Priority controls:</strong></p>
    <ul class="checklist">${item.focus.map((entry) => `<li>${entry}</li>`).join("")}</ul>
    <p><strong>Evidence to produce:</strong></p>
    <ul class="checklist">${item.artifacts.map((entry) => `<li>${entry}</li>`).join("")}</ul>
  `;
}

function renderRoleLifecycleFocus(stageName) {
  const target = document.getElementById("role-lifecycle-focus");
  if (!target || !stageName) return;
  const byRole = roleLifecycleFocus[currentRole] || roleLifecycleFocus.mrm;
  const items = byRole[stageName] || [];
  target.innerHTML = `
    <h4>${getCurrentRoleLabel()} checklist</h4>
    <ul class="checklist">${items.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
}

function renderRoleGuidanceFocus(guidanceItems, pains, regulation) {
  const target = document.getElementById("role-guidance-focus");
  if (!target) return;
  const profile = roleGuidanceSummary[currentRole] || roleGuidanceSummary.mrm;
  const top = guidanceItems[0]?.title || "Governance baseline";
  const selected = pains.length ? pains.join(", ") : "none selected";
  target.innerHTML = `
    <h4>${profile.title}</h4>
    <p><strong>Top focus now:</strong> ${top}</p>
    <p><strong>Regulatory lens:</strong> ${regulation}</p>
    <p><strong>Selected pain points:</strong> ${selected}</p>
    <ul class="checklist">${profile.actions.map((action) => `<li>${action}</li>`).join("")}</ul>
  `;
}

function renderRoleNextSteps() {
  const target = document.getElementById("role-next-steps-focus");
  if (!target) return;
  const roleLabel = getCurrentRoleLabel();
  const summary = roleGuidanceSummary[currentRole] || roleGuidanceSummary.mrm;
  target.innerHTML = `
    <h4>${roleLabel} takeaways</h4>
    <ul class="checklist">${summary.actions.map((action) => `<li>${action}</li>`).join("")}</ul>
  `;

  const promptsWrap = document.getElementById("discussion-prompts");
  const prompts = roleDiscussionPrompts[currentRole] || roleDiscussionPrompts.mrm;
  if (!promptsWrap || !prompts.length) return;
  promptsWrap.querySelectorAll(".prompt-card p").forEach((node, idx) => {
    if (prompts[idx]) {
      node.textContent = `"${prompts[idx]}"`;
    }
  });
}

function refreshRolePerspective() {
  const slider = document.getElementById("risk-spectrum");
  if (slider) {
    renderRoleAgenticFocus(Number(slider.value));
  }
  if (typeof refreshLifecycleView === "function") {
    refreshLifecycleView();
  }
  if (typeof renderGuidancePlan === "function") {
    renderGuidancePlan();
  }
  renderRoleNextSteps();
  renderImplementationGuidanceState();
}

function renderFoundationRegulationLens() {
  const list = document.getElementById("foundation-reg-list");
  const note = document.getElementById("foundation-reg-note");
  const overlay = document.getElementById("foundation-exam-overlay");
  if (!list || !note || !overlay) return;

  const lens = foundationRegulationLens[isExaminerView() ? "examiner" : "your"];
  list.innerHTML = lens.map((item) => `<li><strong>${item.name}:</strong> ${item.text}</li>`).join("");
  note.textContent = foundationRegulationNotes[isExaminerView() ? "examiner" : "your"];
  overlay.hidden = !isExaminerView();
}

function renderPainViewContent() {
  const view = painPointViewContent[isExaminerView() ? "examiner" : "your"];
  const title = document.getElementById("pain-panel-title");
  const copy = document.getElementById("pain-panel-copy");
  const guidanceTitle = document.getElementById("guidance-panel-title");
  const guidanceCopy = document.getElementById("guidance-panel-copy");
  const sequenceTitle = document.getElementById("exam-sequence-title");
  if (title) title.textContent = view.title;
  if (copy) copy.textContent = view.copy;
  if (guidanceTitle) guidanceTitle.textContent = view.guidanceTitle;
  if (guidanceCopy) guidanceCopy.textContent = view.guidanceCopy;
  if (sequenceTitle) sequenceTitle.textContent = view.sequenceTitle;

  document.querySelectorAll(".pain-option").forEach((option) => {
    const key = option.dataset.pain;
    const text = option.querySelector(".pain-text");
    if (text && view.optionLabels[key]) {
      text.textContent = view.optionLabels[key];
    }
  });
}

function renderMriaSignals(pains, regulation) {
  const target = document.getElementById("mria-signals");
  if (!target) return;

  if (!isExaminerView()) {
    target.innerHTML =
      "<p><strong>MRIA signal detector:</strong> Switch to Examiner View to assess escalation combinations.</p>";
    return;
  }

  if (!pains.length) {
    target.innerHTML =
      "<p><strong>MRIA signal detector:</strong> Select one or more red flags to evaluate potential escalation patterns.</p>";
    return;
  }

  const matches = mriaTriggerRules.filter((rule) => rule.pains.every((pain) => pains.includes(pain)));
  if (!matches.length) {
    target.innerHTML = `
      <p><strong>MRIA trigger check:</strong> no immediate combination-level MRIA trigger detected from selected red flags.</p>
      <p><strong>Recommended action:</strong> document closure owners, evidence timing, and control effectiveness by ${regulation} review cycle.</p>
    `;
    return;
  }

  target.innerHTML = matches
    .map(
      (item) => `
      <article class="mria-card">
        <h4>Potential MRIA trigger: ${item.title}</h4>
        <p>${item.detail}</p>
        <p><strong>Escalation signal:</strong> ${item.signal}</p>
      </article>
    `
    )
    .join("");
}

function renderAgenticLens(index) {
  const lens = agenticLensByStep[index] || agenticLensByStep[0];
  const title = document.getElementById("agentic-lens-title");
  const copy = document.getElementById("agentic-lens-copy");
  const risk = document.getElementById("agentic-risk-rating");
  const burden = document.getElementById("agentic-evidence-burden");
  const questionTitle = document.getElementById("agentic-question-title");
  const questionList = document.getElementById("agentic-question-list");
  if (!title || !copy || !risk || !burden || !questionTitle || !questionList) return;

  if (isExaminerView()) {
    title.textContent = "Examiner lens";
    copy.textContent = "This framing reflects how supervisory teams usually prioritize defensibility and evidence sufficiency.";
    questionTitle.textContent = "Example regulator questions";
  } else {
    title.textContent = "Your operating lens";
    copy.textContent = "This framing emphasizes execution design, control coverage, and practical governance readiness.";
    questionTitle.textContent = "Operational challenge questions";
  }

  const riskScore = lens.examinerRiskRating;
  const burdenScore = lens.evidenceBurden;
  risk.innerHTML = `
    <h4>${isExaminerView() ? "Examiner risk rating" : "Supervisory exposure estimate"}</h4>
    <p><span class="band-badge ${getRiskBadgeClass(riskScore)}">${riskScore}</span> ${isExaminerView() ? "risk-weighted supervisory concern" : "relative supervisory pressure"}</p>
    <div class="metric-bar"><span class="${getRiskSeverityClass(riskScore)}" style="width:${riskScore}%"></span></div>
  `;

  burden.innerHTML = `
    <h4>Evidence burden</h4>
    <p><span class="band-badge ${getRiskBadgeClass(burdenScore)}">${burdenScore}</span> documentation load for defensible operation</p>
    <div class="metric-bar"><span class="${getRiskSeverityClass(burdenScore)}" style="width:${burdenScore}%"></span></div>
  `;

  const questions = isExaminerView() ? lens.examinerQuestions : lens.practitionerQuestions;
  questionList.innerHTML = questions.map((item) => `<li>${item}</li>`).join("");
}

let viewFadeTimer = null;
let examinerOnboardingTimer = null;

function closeExaminerOnboarding() {
  const overlay = document.getElementById("examiner-onboarding");
  if (!overlay) return;
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  if (examinerOnboardingTimer) {
    window.clearTimeout(examinerOnboardingTimer);
    examinerOnboardingTimer = null;
  }
}

function maybeShowExaminerOnboarding(fromUser) {
  if (!isExaminerView() || !fromUser) return;
  if (safeSessionGet(EXAMINER_ONBOARDING_STORAGE_KEY) === "seen") return;
  const overlay = document.getElementById("examiner-onboarding");
  if (!overlay) return;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  safeSessionSet(EXAMINER_ONBOARDING_STORAGE_KEY, "seen");
  examinerOnboardingTimer = window.setTimeout(closeExaminerOnboarding, 20000);
}

function applyViewMode(mode, options = {}) {
  const nextMode = mode === "examiner" ? "examiner" : "your";
  const animate = options.animate !== false;
  const fromUser = options.fromUser === true;
  currentViewMode = nextMode;
  safeSessionSet(VIEW_MODE_STORAGE_KEY, currentViewMode);

  if (animate) {
    if (viewFadeTimer) {
      window.clearTimeout(viewFadeTimer);
    }
    document.body.classList.add("mode-fade");
    viewFadeTimer = window.setTimeout(() => document.body.classList.remove("mode-fade"), 300);
  }

  document.body.classList.toggle("examiner-view", isExaminerView());
  document.getElementById("view-tag-your")?.classList.toggle("active", !isExaminerView());
  document.getElementById("view-tag-examiner")?.classList.toggle("active", isExaminerView());
  const toggle = document.getElementById("examiner-view-toggle");
  if (toggle) {
    toggle.setAttribute("aria-pressed", isExaminerView() ? "true" : "false");
    toggle.setAttribute("aria-label", isExaminerView() ? "Switch to your perspective" : "Switch to examiner perspective");
  }

  renderFoundationRegulationLens();
  renderPainViewContent();
  const slider = document.getElementById("risk-spectrum");
  if (slider) {
    renderAgenticLens(Number(slider.value));
    renderSpectrum(Number(slider.value));
  }
  if (typeof refreshLifecycleView === "function") {
    refreshLifecycleView();
  }
  if (typeof renderCapabilityMapView === "function") {
    renderCapabilityMapView();
  }
  if (typeof renderGuidancePlan === "function") {
    renderGuidancePlan();
  }
  renderRoleNextSteps();
  renderImplementationGuidanceState();

  document.dispatchEvent(new window.CustomEvent("viewmodechange", { detail: { mode: currentViewMode } }));
  maybeShowExaminerOnboarding(fromUser);
}

function initViewModeToggle() {
  const toggle = document.getElementById("examiner-view-toggle");
  const close = document.getElementById("examiner-onboarding-close");
  if (close) {
    close.addEventListener("click", closeExaminerOnboarding);
  }
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    applyViewMode(isExaminerView() ? "your" : "examiner", { animate: true, fromUser: true });
  });
  applyViewMode(currentViewMode, { animate: false, fromUser: false });
}

function initGlossary() {
  const listEl = document.getElementById("glossary-list");
  const detailEl = document.getElementById("term-definition");
  const searchEl = document.getElementById("glossary-search");
  const categoryEl = document.getElementById("glossary-category");

  const renderDetail = (entry) => {
    detailEl.innerHTML = `
      <h4>${entry.term}</h4>
      <p>${entry.definition}</p>
      <p><strong>Regulatory relevance:</strong> ${entry.relevance}</p>
    `;
  };

  const renderList = () => {
    const termFilter = searchEl.value.trim().toLowerCase();
    const categoryFilter = categoryEl.value;
    trackGlossarySearch(termFilter);

    const filtered = glossaryEntries.filter((entry) => {
      const byCategory = categoryFilter === "all" || entry.category === categoryFilter;
      const byTerm =
        termFilter.length === 0 ||
        entry.term.toLowerCase().includes(termFilter) ||
        entry.definition.toLowerCase().includes(termFilter);
      return byCategory && byTerm;
    });

    if (!filtered.length) {
      const suggestionPool = glossaryEntries
        .filter((entry) => categoryFilter === "all" || entry.category === categoryFilter)
        .slice(0, 6)
        .map((entry) => entry.term);
      const suggestions = suggestionPool.slice(0, 3);
      listEl.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">i</div>
          <p style="margin:0 0 6px">No matches. Try: <strong>${suggestions.join("</strong>, <strong>")}</strong></p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = filtered
      .map(
        (entry, index) =>
          `<button type="button" class="glossary-item${index === 0 ? " active" : ""}" data-term="${entry.term}">${entry.term}</button>`
      )
      .join("");

    listEl.querySelectorAll(".glossary-item").forEach((button) => {
      button.addEventListener("click", () => {
        listEl.querySelectorAll(".glossary-item").forEach((el) => el.classList.remove("active"));
        button.classList.add("active");
        const entry = filtered.find((item) => item.term === button.dataset.term);
        renderDetail(entry);
        if (entry) trackGlossaryClick(entry.term);
        markSectionComplete("foundations");
      });
    });

    renderDetail(filtered[0]);
  };

  searchEl.addEventListener("input", () => {
    renderList();
    if (searchEl.value.trim().length >= 3) {
      markSectionComplete("foundations");
    }
  });
  categoryEl.addEventListener("change", renderList);
  renderList();
}

function initExplainabilityChecklist() {
  const wrap = document.getElementById("xai-checklist");
  const detail = document.getElementById("xai-check-detail");
  if (!wrap || !detail) return;
  const topSelectedCheck = Object.entries(governanceProfileState.explainabilitySelections || {})
    .sort((a, b) => b[1] - a[1])[0]?.[0] || "explanation";

  const renderDetail = (key) => {
    const item = explainabilityChecks[key];
    if (!item) return;
    detail.innerHTML = `
      <h4>${item.title}</h4>
      <p><strong>Test question:</strong> ${item.checkQuestion}</p>
      <p><strong>Examiner look-for:</strong> ${item.examinerLookFor}</p>
      <p><strong>Evidence artifacts:</strong></p>
      <ul class="checklist">${item.artifacts.map((artifact) => `<li>${artifact}</li>`).join("")}</ul>
      <p><strong>Operationalization:</strong> ${item.sas}</p>
    `;
  };

  wrap.querySelectorAll("[data-xai-check]").forEach((button) => {
    button.addEventListener("click", () => {
      wrap.querySelectorAll("[data-xai-check]").forEach((candidate) => candidate.classList.remove("active"));
      button.classList.add("active");
      const key = button.dataset.xaiCheck;
      renderDetail(key);
      trackExplainabilitySelection(key);
      markSectionComplete("foundations");
    });
  });

  const initialButton = wrap.querySelector(`[data-xai-check="${topSelectedCheck}"]`) || wrap.querySelector("[data-xai-check]");
  if (initialButton) {
    wrap.querySelectorAll("[data-xai-check]").forEach((candidate) => candidate.classList.remove("active"));
    initialButton.classList.add("active");
    renderDetail(initialButton.dataset.xaiCheck);
  }
}

function initConceptMap() {
  const container = document.getElementById("concept-map");
  const detail = document.getElementById("concept-detail");
  if (!container || !detail) {
    return;
  }

  const byId = new Map(conceptNodes.map((node) => [node.id, node]));
  const focusOrder = ["evidence", "owners", "controls", "models", "data"];
  const focusRank = new Map(focusOrder.map((id, index) => [id, index]));
  let examinerMode = isExaminerView();

  if (typeof window.d3 === "undefined") {
    container.innerHTML = "<p style='padding:12px'>Concept map unavailable because D3 failed to load.</p>";
    return;
  }

  const d3 = window.d3;
  const svg = d3.select(container).html("").append("svg").attr("viewBox", "0 0 700 320").attr("role", "img");
  const linkLayer = svg.append("g");
  const nodeLayer = svg.append("g");

  function getNodePosition(nodeId) {
    const node = byId.get(nodeId);
    if (!node) return { x: 0, y: 0 };
    return { x: node.x, y: node.y };
  }

  function renderDetailForNode(node) {
    const checklist = node.checklist.map((item) => `<li>${item}</li>`).join("");
    const focusNote = examinerMode
      ? `<p><strong>Examiner focus:</strong> ${node.id === "evidence" || node.id === "owners" ? "High priority review area." : "Standard review area."}</p>`
      : "";
    detail.innerHTML = `
      <h4>${node.label}</h4>
      <p>${node.note}</p>
      ${focusNote}
      <p><strong>SAS alignment:</strong> ${node.sas}</p>
      <p><strong>Ripple criticality:</strong> ${node.criticality}</p>
      <ul class="checklist">${checklist}</ul>
    `;
  }

  function getNodeFill(node) {
    if (!examinerMode) return "#e4f0fa";
    const rank = focusRank.get(node.id);
    if (rank === undefined) return "#e4f0fa";
    const palette = ["#d7e2ee", "#dde6f0", "#e5ebf3", "#edf1f6", "#f2f5f9"];
    return palette[Math.min(rank, palette.length - 1)];
  }

  function getLinkStroke(link) {
    if (!examinerMode) return "#95b5cc";
    if (link.source === "owners" || link.target === "owners" || link.source === "evidence" || link.target === "evidence") {
      return "#516a82";
    }
    return "#90a8be";
  }

  function renderConceptMap() {
    const linksData = conceptLinks.map((link) => {
      const source = getNodePosition(link.source);
      const target = getNodePosition(link.target);
      return { ...link, sourcePos: source, targetPos: target };
    });

    const links = linkLayer.selectAll("line.concept-link-line").data(linksData, (d) => d.id);
    links
      .join(
        (enter) =>
          enter
            .append("line")
            .attr("class", "concept-link-line")
            .attr("x1", (d) => d.sourcePos.x)
            .attr("y1", (d) => d.sourcePos.y)
            .attr("x2", (d) => d.targetPos.x)
            .attr("y2", (d) => d.targetPos.y),
        (update) => update,
        (exit) => exit.remove()
      )
      .transition()
      .duration(280)
      .attr("x1", (d) => d.sourcePos.x)
      .attr("y1", (d) => d.sourcePos.y)
      .attr("x2", (d) => d.targetPos.x)
      .attr("y2", (d) => d.targetPos.y)
      .attr("stroke", (d) => getLinkStroke(d))
      .style("opacity", 0.9);

    const nodes = nodeLayer.selectAll("g.concept-node").data(conceptNodes, (d) => d.id);
    const nodeEnter = nodes
      .enter()
      .append("g")
      .attr("class", "concept-node")
      .style("cursor", "pointer")
      .on("mouseenter", (_event, d) => renderDetailForNode(d))
      .on("click", (_event, d) => {
        renderDetailForNode(d);
        markSectionComplete("foundations");
      });

    nodeEnter
      .append("circle")
      .attr("r", 36)
      .attr("fill", (d) => getNodeFill(d))
      .attr("stroke", "#5f8aac")
      .attr("stroke-width", 1.5);

    nodeEnter
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", "#1f4562")
      .text((d) => d.label);

    const mergedNodes = nodeEnter.merge(nodes);
    mergedNodes
      .transition()
      .duration(280)
      .attr("transform", (d) => {
        const pos = getNodePosition(d.id);
        return `translate(${pos.x},${pos.y})`;
      });

    mergedNodes
      .select("circle")
      .attr("r", 36)
      .attr("fill", (d) => getNodeFill(d))
      .attr("stroke", (d) => (examinerMode && (d.id === "evidence" || d.id === "owners") ? "#31506c" : "#5f8aac"));

    mergedNodes
      .select("text")
      .text((d) => d.label)
      .attr("font-size", 12);
    nodes.exit().remove();
  }

  document.addEventListener("viewmodechange", (event) => {
    examinerMode = event.detail?.mode === "examiner";
    renderConceptMap();
  });

  window.addEventListener("resize", () => renderConceptMap());
  renderDetailForNode(conceptNodes[0]);
  renderConceptMap();
}

function initRegulationLinkageTable() {
  const tbody = document.querySelector("#regulation-linkage-table tbody");
  const detail = document.getElementById("regulation-linkage-detail");
  if (!tbody || !detail) return;
  const chip = (value) =>
    value === "Yes" ? '<span class="yes-chip">Yes</span>' : '<span class="partial-chip">Partial</span>';

  tbody.innerHTML = regulationLinkage
    .map(
      (row) => `
      <tr>
        <td>${row.name}</td>
        ${regulationLinkageColumns
          .map(
            (column) => `
          <td>
            <button
              type="button"
              class="linkage-cell-btn"
              data-regulation="${row.name}"
              data-dimension="${column.key}"
              data-status="${row[column.key]}"
              aria-label="${row.name} ${column.label}"
            >
              ${chip(row[column.key])}
            </button>
          </td>
        `
          )
          .join("")}
      </tr>`
    )
    .join("");

  const renderDetail = (regulation, dimensionKey, status) => {
    const column = regulationLinkageColumns.find((item) => item.key === dimensionKey);
    const coverage = linkageSasCoverageByDimension[dimensionKey] || [];
    const questions = linkageExaminerQuestions[dimensionKey] || [];
    const statusNote = status === "Partial"
      ? "Coverage is partial and usually needs institution-specific control design and documentation."
      : "Coverage is strong when workflows are fully implemented and governance roles are enforced.";
    detail.innerHTML = `
      <h4>${regulation} -> ${column?.label || dimensionKey}</h4>
      <p><strong>Linkage status:</strong> ${status}. ${statusNote}</p>
      <p><strong>Control expectation:</strong> ${linkageControlExpectations[dimensionKey] || "Control expectation varies by institution context."}</p>
      <p>${linkageRegulationNotes[regulation] || ""}</p>
      <p><strong>What examiners ask:</strong></p>
      <ul class="checklist">${questions.map((question) => `<li>${question}</li>`).join("")}</ul>
      ${coverage
        .map(
          (item) => `
        <p><strong>${item.solution}</strong></p>
        <ul class="checklist">${item.functionalities.map((fn) => `<li>${fn}</li>`).join("")}</ul>
      `
        )
        .join("<hr />")}
    `;
  };

  tbody.querySelectorAll(".linkage-cell-btn").forEach((button) => {
    button.addEventListener("click", () => {
      renderDetail(button.dataset.regulation, button.dataset.dimension, button.dataset.status);
      markSectionComplete("foundations");
    });
  });
}

function renderSpectrum(index) {
  const item = spectrumSteps[index];
  const detailEl = document.getElementById("spectrum-detail");
  const controlsEl = document.getElementById("required-controls-list");
  const confidenceEl = document.getElementById("confidence-boundary-list");
  const overridesEl = document.getElementById("override-governance-list");
  const artifactsEl = document.getElementById("slider-evidence-artifacts-list");
  const sasEl = document.getElementById("spectrum-sas-list");
  const impactBarsEl = document.getElementById("risk-impact-bars");

  fadeSwap(detailEl, () => {
    detailEl.innerHTML = `
      <h4>${item.title}</h4>
      <p><strong>Primary risks:</strong> ${item.risks.join(", ")}</p>
      <p><strong>Required controls:</strong> ${item.controls.join(", ")}</p>
      <p><strong>Evidence expectations:</strong> ${item.evidence.join(", ")}</p>
    `;
  });

  controlsEl.innerHTML = item.requiredControls
    .map((control) => `<li>${control}</li>`)
    .join("");
  if (confidenceEl) {
    confidenceEl.innerHTML = (item.confidenceBoundaries || [])
      .map((control) => `<li>${control}</li>`)
      .join("");
  }
  if (overridesEl) {
    overridesEl.innerHTML = (item.overrideGovernance || [])
      .map((control) => `<li>${control}</li>`)
      .join("");
  }
  if (artifactsEl) {
    artifactsEl.innerHTML = (item.evidenceArtifacts || item.evidence || [])
      .map((artifact) => `<li>${artifact}</li>`)
      .join("");
  }
  sasEl.innerHTML = item.sasFunctionalities
    .map((capability) => `<li>${capability}</li>`)
    .join("");

  renderSpectrumImpacts(index);
  renderAgenticLens(index);
  renderRoleAgenticFocus(index);
  if (impactBarsEl) animateBarsIn(impactBarsEl);
  const rfi = document.getElementById("risk-financial-impact");
  const rci = document.getElementById("risk-compliance-impact");
  if (rfi) animateBarsIn(rfi);
  if (rci) animateBarsIn(rci);
  animateBarsIn(document.getElementById("agentic-risk-rating"));
  animateBarsIn(document.getElementById("agentic-evidence-burden"));
}

function renderSpectrumImpacts(index) {
  const profile = spectrumImpactProfiles[index];
  const financialEl = document.getElementById("risk-financial-impact");
  const complianceEl = document.getElementById("risk-compliance-impact");
  const barsEl = document.getElementById("risk-impact-bars");

  if (financialEl) {
    const financialBand = getRiskBadgeClass(profile.financialValue);
    const financialSeverity = getRiskSeverityClass(profile.financialValue);
    financialEl.innerHTML = `
      <h4>${profile.financialLabel}</h4>
      <p><span class="band-badge ${financialBand}">${profile.financialValue}</span> relative severity score</p>
      <div class="metric-line">
        <div class="metric-bar"><span class="${financialSeverity}" style="width:${profile.financialValue}%"></span></div>
      </div>
    `;
  }

  if (complianceEl) {
    const complianceBand = getRiskBadgeClass(profile.complianceValue);
    const complianceSeverity = getRiskSeverityClass(profile.complianceValue);
    complianceEl.innerHTML = `
      <h4>${profile.complianceLabel}</h4>
      <p><span class="band-badge ${complianceBand}">${profile.complianceValue}</span> supervisory concern score</p>
      <div class="metric-line">
        <div class="metric-bar"><span class="${complianceSeverity}" style="width:${profile.complianceValue}%"></span></div>
      </div>
    `;
  }

  if (barsEl) {
    barsEl.innerHTML = profile.indicators
      .map(
        (indicator) => `
        <div class="poll-row">
          <div class="poll-label"><span>${indicator.label}</span><strong class="band-badge ${getRiskBadgeClass(indicator.score)}">${indicator.score}</strong></div>
          <div class="poll-bar"><span class="${getRiskSeverityClass(indicator.score)}" style="width:${indicator.score}%"></span></div>
        </div>`
      )
      .join("");
  }
}

function initSpectrum() {
  const slider = document.getElementById("risk-spectrum");
  renderSpectrum(Number(slider.value));
  slider.addEventListener("input", () => {
    trackSliderInteraction();
    markSectionComplete("agentic");
    renderSpectrum(Number(slider.value));
  });
}

function getLifecycleOrderedStages() {
  if (!isExaminerView()) {
    return lifecycleStages.slice();
  }
  return lifecycleExaminerPriorityOrder
    .map((name) => lifecycleStages.find((stage) => stage.name === name))
    .filter(Boolean);
}

function renderLifecycle(stageIdx, examinerPriority) {
  const stage = lifecycleStages[stageIdx];
  const detailEl = document.getElementById("stage-detail");
  const headingEl = document.getElementById("stage-title");
  const modeNoteEl = document.getElementById("lifecycle-mode-note");
  if (!stage || !detailEl || !headingEl || !modeNoteEl) return;
  startLifecycleTimer(stage.name);

  const priorityPrefix = isExaminerView() && examinerPriority ? `Priority ${examinerPriority}: ` : "";
  headingEl.textContent = `${priorityPrefix}${stage.name}`;
  modeNoteEl.textContent = isExaminerView()
    ? "Examiner View: stages are ordered by supervisory scrutiny priority."
    : "Your View: stages follow implementation lifecycle sequence.";

  const findingsLabel = isExaminerView() ? "Common findings at this stage" : "Common execution pitfalls";
  const evidenceLabel = stage.timeToEvidence?.[isExaminerView() ? "examiner" : "your"] || "Evidence timing depends on governance operating model.";

  fadeSwap(detailEl, () => {
    detailEl.innerHTML = `
      <h4>Governance expectations</h4>
      <ul>${stage.expectations.map((item) => `<li>${item}</li>`).join("")}</ul>
      <h4>Regulatory linkage</h4>
      <p>${stage.regulations.join(", ")}</p>
      <h4>SAS illustration</h4>
      <ul>${stage.sas.map((item) => `<li>${item}</li>`).join("")}</ul>
      <h4>${findingsLabel}</h4>
      ${(stage.commonFindings || [])
        .map(
          (item) => `
        <details>
          <summary>${item.title}</summary>
          <p>${item.detail}</p>
        </details>
      `
        )
        .join("")}
      <h4>Time to evidence</h4>
      <p>${evidenceLabel}</p>
    `;
  });
  renderRoleLifecycleFocus(stage.name);

  document.querySelectorAll(".stage-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.stageName === stage.name);
  });
}

function renderLifecycleButtons(preferredStageName) {
  const wrap = document.getElementById("lifecycle-buttons");
  const note = document.getElementById("lifecycle-priority-note");
  if (!wrap || !note) return;
  const ordered = getLifecycleOrderedStages();
  wrap.innerHTML = "";

  note.textContent = isExaminerView()
    ? "Examiner priority order: Monitoring -> Validation -> Design -> Approval -> Audit."
    : "Implementation order: Design -> Validation -> Approval -> Monitoring -> Audit.";

  ordered.forEach((stage, displayIndex) => {
    const lifecycleIndex = lifecycleStages.findIndex((candidate) => candidate.name === stage.name);
    const button = document.createElement("button");
    button.className = "stage-btn";
    button.textContent = `${displayIndex + 1}. ${stage.name}`;
    button.type = "button";
    button.dataset.stageName = stage.name;
    button.addEventListener("click", () => {
      renderLifecycle(lifecycleIndex, isExaminerView() ? displayIndex + 1 : null);
      markSectionComplete("lifecycle");
    });
    wrap.appendChild(button);
  });

  const stageName = preferredStageName && ordered.some((stage) => stage.name === preferredStageName)
    ? preferredStageName
    : ordered[0]?.name;
  if (!stageName) return;
  const selectedLifecycleIndex = lifecycleStages.findIndex((stage) => stage.name === stageName);
  const displayPriority = ordered.findIndex((stage) => stage.name === stageName) + 1;
  renderLifecycle(selectedLifecycleIndex, isExaminerView() ? displayPriority : null);
}

function refreshLifecycleView() {
  const activeStage = governanceProfileState.activeLifecycleStage || lifecycleStages[0]?.name;
  renderLifecycleButtons(activeStage);
}

function initLifecycle() {
  renderLifecycleButtons();
}

let peerRenderTimer = null;
let regulationRenderTimer = null;
let showLodOverlay = false;

function renderOwnershipGovernanceOverlay(ownershipKey) {
  const overlay = document.getElementById("lod-overlay");
  const workflow = document.getElementById("challenge-workflow");
  const toggle = document.getElementById("toggle-lod-view");
  const profile = ownershipGovernanceProfiles[ownershipKey];
  if (!overlay || !workflow || !toggle || !profile) return;

  overlay.hidden = !showLodOverlay;
  toggle.textContent = showLodOverlay ? "Hide 3 Lines of Defense Overlay" : "Show 3 Lines of Defense Overlay";

  if (showLodOverlay) {
    fadeSwap(overlay, () => {
      overlay.innerHTML = `
        <h4>3 Lines of Defense (${peerModels[ownershipKey]?.title || ownershipKey})</h4>
        <ul class="checklist">${profile.lod.map((row) => `<li>${row}</li>`).join("")}</ul>
      `;
    });
  }

  fadeSwap(workflow, () => {
    workflow.innerHTML = `
      <h4>Effective challenge strength</h4>
      <p><span class="band-badge ${getBadgeClass(profile.challengeStrength)}">${profile.challengeStrength}</span> supervisory confidence estimate</p>
      <p>${profile.challengeNote}</p>
      <h4>Escalation workflow snippet</h4>
      <ol class="checklist">${profile.escalationWorkflow.map((step) => `<li>${step}</li>`).join("")}</ol>
    `;
  });
}

function initOwnershipOverlayToggle() {
  const toggle = document.getElementById("toggle-lod-view");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    showLodOverlay = !showLodOverlay;
    renderOwnershipGovernanceOverlay(currentOwnershipKey);
    markSectionComplete("peers");
  });
  renderOwnershipGovernanceOverlay(currentOwnershipKey);
}

function renderPeerTab(key, options = {}) {
  const { loading = true, trackSelection = true } = options;
  const item = peerModels[key];
  currentOwnershipKey = key;
  const contentEl = document.getElementById("peer-content");
  if (!item || !contentEl) return;

  if (trackSelection) {
    trackOwnershipSelection(key);
    markSectionComplete("peers");
  }

  if (loading) {
    showSkeleton(contentEl, 4);
    if (peerRenderTimer) {
      window.clearTimeout(peerRenderTimer);
    }
    peerRenderTimer = window.setTimeout(() => {
      renderPeerTab(key, { loading: false, trackSelection: false });
    }, 200);
  } else {
    fadeSwap(contentEl, () => {
      contentEl.innerHTML = `
        <h4>${item.title}</h4>
        <p><strong>Pros:</strong> ${item.pros.join("; ")}</p>
        <p><strong>Tradeoffs:</strong> ${item.tradeoffs.join("; ")}</p>
        <p><strong>Tooling implications:</strong> ${item.implications.join("; ")}</p>
      `;
    });
  }

  renderOwnershipGovernanceOverlay(key);

  const regSelect = document.getElementById("regulation-select");
  if (regSelect) {
    renderRegulatoryBars(regSelect.value, { loading });
  }
}

function initPeerTabs() {
  const tabs = document.querySelectorAll("[data-peer-tab]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((candidate) => candidate.classList.remove("active"));
      tab.classList.add("active");
      renderPeerTab(tab.dataset.peerTab, { loading: true, trackSelection: true });
    });
  });
  renderPeerTab("federated", { loading: false, trackSelection: false });
}

function renderRegulatoryBars(regName, options = {}) {
  const { loading = true } = options;
  const target = document.getElementById("regulatory-bars");
  const note = document.getElementById("regulatory-note");
  const graph = document.getElementById("ownership-reg-graph");
  const item = regulationEmphasis[regName];
  if (!target || !note || !graph || !item) return;

  if (loading) {
    showSkeleton(target, 5);
    showSkeleton(graph, 6);
    note.textContent = "Refreshing framework view...";
    if (regulationRenderTimer) {
      window.clearTimeout(regulationRenderTimer);
    }
    regulationRenderTimer = window.setTimeout(() => {
      renderRegulatoryBars(regName, { loading: false });
    }, 200);
    return;
  }

  fadeSwap(target, () => {
    target.innerHTML = item.domains
      .map(
        (domain) => `
        <div class="poll-row">
          <div class="poll-label"><span>${domain.label}</span><strong class="band-badge ${getBadgeClass(domain.score)}">${domain.score}</strong></div>
          <div class="poll-bar"><span class="${getScoreBandClass(domain.score)}" style="width:${domain.score}%"></span></div>
        </div>`
      )
      .join("");
  });

  const ownershipKeys = ["federated", "centralized", "hybrid"];
  const summary = ownershipKeys.map((ownershipKey) => {
    const scores = item.domains.map((domain) => clampScore(domain.score + ownershipAdjustments[ownershipKey][domain.label]));
    return {
      key: ownershipKey,
      title: peerModels[ownershipKey].title,
      overall: average(scores),
      domains: item.domains.map((domain, idx) => ({ label: domain.label, score: scores[idx] }))
    };
  });

  const selected = summary.find((row) => row.key === currentOwnershipKey) || summary[0];

  fadeSwap(graph, () => {
    graph.innerHTML = `
      <div class="ownership-row">
        <h4>Overall by ownership type</h4>
        <div class="ownership-bars">
          ${summary
            .map(
              (row) => `
            <div class="ownership-label"><span>${row.title}${row.key === currentOwnershipKey ? " (selected)" : ""}</span><strong class="band-badge ${getBadgeClass(
                row.overall
              )}">${row.overall}</strong></div>
            <div class="poll-bar"><span class="${getScoreBandClass(row.overall)}" style="width:${row.overall}%"></span></div>
          `
            )
            .join("")}
        </div>
      </div>
      <div class="ownership-row active">
        <h4>Selected ownership impact details</h4>
        <div class="ownership-bars">
          ${selected.domains
            .map(
              (domain) => `
            <div class="ownership-label"><span>${domain.label}</span><strong class="band-badge ${getBadgeClass(domain.score)}">${domain.score}</strong></div>
            <div class="poll-bar"><span class="${getScoreBandClass(domain.score)}" style="width:${domain.score}%"></span></div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  });

  note.textContent = `${item.note} Graph 1 shows regulation dimensions; Graph 2 shows how ownership choice shifts compliance strength.`;
}

function initRegulatoryWidget() {
  const select = document.getElementById("regulation-select");
  trackRegulationSelection(select.value);
  renderRegulatoryBars(select.value, { loading: false });
  select.addEventListener("change", () => {
    trackRegulationSelection(select.value);
    markSectionComplete("peers");
    renderRegulatoryBars(select.value, { loading: true });
  });
}

function getSelectedPainPoints() {
  return Array.from(document.querySelectorAll("input[name='pain']:checked")).map((el) => el.value);
}

function buildGuidanceItems(pains, regulation) {
  const weights = regulationPainWeights[regulation] || {};
  const roleBoost = rolePainPriorityBoost[currentRole] || {};

  if (!pains.length) {
    return Object.entries(weights)
      .sort((a, b) => (b[1] + (roleBoost[b[0]] || 0)) - (a[1] + (roleBoost[a[0]] || 0)))
      .slice(0, 3)
      .map(([key, score]) => ({
        ...painPointGuidance[key],
        priority: clampScore(score + (roleBoost[key] || 0)),
        recommendation: "Recommended by selected regulatory lens"
      }));
  }

  return pains
    .map((key) => {
      const item = painPointGuidance[key];
      const priority = clampScore((weights[key] ?? 50) + (roleBoost[key] || 0));
      if (item.regs.includes(regulation)) {
        return { ...item, priority };
      }
      return { ...item, priority, regs: [regulation, ...item.regs].slice(0, 4) };
    })
    .sort((a, b) => b.priority - a.priority);
}

function renderPainPointPriorities(regulation) {
  const form = document.getElementById("pain-form");
  const options = Array.from(form.querySelectorAll(".pain-option"));
  const weights = regulationPainWeights[regulation] || {};

  options.sort((a, b) => (weights[b.dataset.pain] ?? 0) - (weights[a.dataset.pain] ?? 0));
  options.forEach((option) => {
    form.appendChild(option);
  });
}

function renderExamSequence(regulation) {
  const sequence = examSequenceByRegulation[regulation] || [];
  const target = document.getElementById("exam-sequence");
  target.innerHTML = sequence.map((item) => `<li>${item}</li>`).join("");
}

function renderBoardEvidenceOutput(guidanceItems, pains, regulation) {
  const target = document.getElementById("board-evidence-output");
  if (!target) return;
  const boardSelected = pains.includes("board");
  if (!boardSelected) {
    target.innerHTML = `
      <p><strong>Board evidence output:</strong> Add the board oversight pain point to generate a board pack and meeting-minutes guidance.</p>
    `;
    return;
  }

  const topGuidance = guidanceItems[0]?.title || "model governance priorities";
  target.innerHTML = `
    <h4>Board reporting pack (${regulation})</h4>
    <ul class="checklist">
      <li>Aggregate model risk dashboard with open issues, top exceptions, and override trends.</li>
      <li>Validation coverage view by tier, including effective challenge and unresolved findings.</li>
      <li>Monitoring threshold breaches, escalation outcomes, and remediation aging.</li>
      <li>Board-approved action log tied to accountable owners and closure dates.</li>
    </ul>
    <h4>Minutes quality prompts</h4>
    <ul class="checklist">
      <li>Were directors informed on material model limitations and current exposure?</li>
      <li>Was challenge documented (what was questioned and how was it resolved)?</li>
      <li>Were decisions and follow-up owners captured with due dates?</li>
      <li>Did discussion reference evidence artifacts, not only summary claims?</li>
    </ul>
    <p><strong>Current priority anchor:</strong> ${topGuidance}</p>
  `;
}

function renderGuidancePlan() {
  const pains = getSelectedPainPoints();
  const regulation = document.getElementById("priority-regulation").value;
  renderPainViewContent();
  trackRegulationSelection(regulation);
  trackPainSelections(pains);
  renderPainPointPriorities(regulation);
  renderExamSequence(regulation);
  renderMriaSignals(pains, regulation);
  const guidance = buildGuidanceItems(pains, regulation);
  const guidanceEl = document.getElementById("guidance-plan");
  const sasMapEl = document.getElementById("sas-functional-map");

  if (!pains.length) {
    guidanceEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">!</div>
        <p><strong>Select challenges your team faces</strong> to generate a tailored governance plan.</p>
      </div>
    `;
    sasMapEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">i</div>
        <p>Select one or more challenges to map precise SAS capabilities and controls.</p>
      </div>
    `;
  } else {
    guidanceEl.innerHTML = guidance
      .map(
        (item) => `
        <h4>${item.title}</h4>
        <p><strong>Guidance:</strong> ${item.action}</p>
        <p><strong>Regulatory linkage:</strong> ${item.regs.slice(0, 3).join(", ")}</p>
        ${item.recommendation ? `<p><strong>Note:</strong> ${item.recommendation}</p>` : ""}`
      )
      .join("<hr />");

    sasMapEl.innerHTML = guidance
      .map(
        (item) => `
        <h4>${item.title}</h4>
        <p><strong>${item.sas}</strong></p>
        <ul class="checklist">${(item.sasHow || []).map((detail) => `<li>${detail}</li>`).join("")}</ul>
      `
      )
      .join("<hr />");
  }

  renderBoardEvidenceOutput(guidance, pains, regulation);
  renderRoleGuidanceFocus(guidance, pains, regulation);
  renderRoadmap(guidance, regulation);
  renderActionSummary(guidance, regulation);
}

function renderRoadmap(guidanceItems, regulation) {
  const mapped = guidanceItems.slice(0, 3);
  const roleLabel = getCurrentRoleLabel();
  document.getElementById("roadmap").innerHTML = `
    <p><strong>Role lane:</strong> ${roleLabel}</p>
    <p><strong>30 days:</strong> baseline inventory, ownership, and regulatory scope (${regulation}).</p>
    <p><strong>60 days:</strong> implement controls for ${mapped.map((item) => item.title.toLowerCase()).join(", ")}.</p>
    <p><strong>90 days:</strong> run evidence-readiness review and validate the regulation-specific examiner sequence.</p>
  `;
}

function renderActionSummary(guidanceItems, regulation) {
  const primary = guidanceItems[0];
  const roleLabel = getCurrentRoleLabel();
  document.getElementById("action-summary").innerHTML = `
    <p><strong>Role perspective:</strong> ${roleLabel}</p>
    <p><strong>Top priority:</strong> ${primary.title}</p>
    <p><strong>Why now:</strong> aligns with ${regulation} expectations and reduces governance execution risk.</p>
    <p><strong>Enablement path:</strong> ${primary.sas}</p>
  `;
}

function initGuidance() {
  const form = document.getElementById("pain-form");
  const regSelect = document.getElementById("priority-regulation");
  form.addEventListener("change", () => {
    renderGuidancePlan();
    markSectionComplete("evidence");
  });
  regSelect.addEventListener("change", () => {
    renderGuidancePlan();
    markSectionComplete("evidence");
  });
  renderGuidancePlan();
}

function downloadText(filename, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function getGuidanceForExport() {
  const pains = getSelectedPainPoints();
  const regulation = document.getElementById("priority-regulation").value;
  const guidance = buildGuidanceItems(pains, regulation);
  return { pains, regulation, guidance };
}

function buildGuidanceExport() {
  const { regulation, guidance } = getGuidanceForExport();
  const sequence = examSequenceByRegulation[regulation] || [];
  const inventoryRows = getAiUseInventoryRows().slice(0, 4);
  const lines = [
    "AI & Model Governance - Guidance Plan",
    `Role perspective: ${getCurrentRoleLabel()}`,
    `Primary lens: ${regulation}`,
    `Exported: ${new Date().toLocaleString()}`,
    ""
  ];

  guidance.forEach((item) => {
    lines.push(`[${item.title}]`);
    lines.push(`Guidance: ${item.action}`);
    lines.push(`Regulations: ${item.regs.join(", ")}`);
    lines.push(`SAS capability: ${item.sas}`);
    (item.sasHow || []).forEach((detail, idx) => lines.push(`SAS function ${idx + 1}: ${detail}`));
    lines.push("");
  });

  lines.push("Examiner sequence:");
  sequence.forEach((step, idx) => lines.push(`${idx + 1}. ${step}`));
  lines.push("");
  lines.push("AI use inventory snapshot (top discussed):");
  inventoryRows.forEach((row) =>
    lines.push(
      `- ${row.title} | ${row.boundaryStatus} | ${row.tier} | Validation: ${row.validationStatus} | Monitoring: ${row.monitoringCadence}`
    )
  );
  return lines.join("\n");
}

let capabilityRowsView = [];

function getCapabilityRegulationContext() {
  const evidenceSelect = document.getElementById("priority-regulation");
  const peerSelect = document.getElementById("regulation-select");
  if (evidenceSelect?.value) return evidenceSelect.value;
  if (peerSelect?.value) return peerSelect.value;
  return governanceProfileState.activeRegulation || "FHFA";
}

function getCapabilityPainContext() {
  return new Set(getSelectedPainPoints());
}

function calculateCapabilityScore(row, regulation, pains) {
  const base = isExaminerView() ? row.examReadiness : row.executionValue;
  const dimension = capabilityDimensionByNeed[row.need];
  const regDomainScore = regulationEmphasis[regulation]?.domains?.find((item) => item.label === dimension)?.score ?? 75;
  const regulationAdjustment = Math.round((regDomainScore - 75) / 4);

  let painPenalty = 0;
  pains.forEach((pain) => {
    const impactedNeeds = capabilityNeedByPain[pain] || [];
    if (impactedNeeds.includes(row.need)) {
      painPenalty += 6;
    }
  });
  painPenalty = Math.min(painPenalty, 18);
  const finalScore = clampScore(base + regulationAdjustment - painPenalty);
  return { finalScore, base, regulationAdjustment, painPenalty, regulation, dimension };
}

function getCapabilityRowsForView() {
  const regulation = getCapabilityRegulationContext();
  const pains = getCapabilityPainContext();
  const withScores = capabilityRows.map((row) => {
    const score = calculateCapabilityScore(row, regulation, pains);
    return {
      ...row,
      viewScore: score.finalScore,
      scoreBreakdown: score
    };
  });
  if (isExaminerView()) {
    return withScores.sort((a, b) => b.defensibility - a.defensibility);
  }
  return withScores;
}

function renderCapabilityMapView() {
  const tbody = document.querySelector("#capability-table tbody");
  const detail = document.getElementById("capability-detail");
  const title = document.getElementById("capability-table-title");
  const scoreHeader = document.getElementById("capability-score-header");
  const priorityNote = document.getElementById("capability-priority-note");
  const scoreMethod = document.getElementById("capability-score-method");
  if (!tbody || !detail) return;
  if (!title || !scoreHeader || !priorityNote || !scoreMethod) return;

  capabilityRowsView = getCapabilityRowsForView();
  title.textContent = isExaminerView() ? "Capability map (defensibility-ranked)" : "Capability map";
  scoreHeader.textContent = isExaminerView() ? "Illustrative exam readiness" : "Illustrative execution fit";
  priorityNote.textContent = isExaminerView()
    ? "Examiner View ranks capabilities by defensibility value under supervisory scrutiny."
    : "Your View emphasizes implementation value across governance execution.";
  scoreMethod.textContent =
    "Score method: base capability coverage +/- regulation alignment adjustment - active pain-point penalty (illustrative only).";

  tbody.innerHTML = capabilityRowsView
    .map(
      (row, index) => `
      <tr data-cap="${index}" class="${isExaminerView() && index < 3 ? "cap-priority" : ""}">
        <td>${row.need}</td>
        <td>${row.capability}</td>
        <td><span class="band-badge ${getBadgeClass(row.viewScore)}">${row.viewScore}</span></td>
      </tr>`
    )
    .join("");

  const setDetail = (row) => {
    const scoreLabel = isExaminerView() ? "Illustrative exam readiness" : "Illustrative execution fit";
    detail.innerHTML = `
      <h4>${row.need}</h4>
      <p><strong>${row.capability}</strong></p>
      <p>${row.detail}</p>
      <p><strong>${scoreLabel}:</strong> <span class="band-badge ${getBadgeClass(row.viewScore)}">${row.viewScore}</span></p>
      <p><strong>How this score was calculated:</strong> base ${row.scoreBreakdown.base}, regulation adjustment ${
      row.scoreBreakdown.regulationAdjustment >= 0 ? "+" : ""
    }${row.scoreBreakdown.regulationAdjustment}, pain-point penalty -${row.scoreBreakdown.painPenalty}.</p>
      <p><strong>Regulatory dimension mapped:</strong> ${row.scoreBreakdown.dimension} (${row.scoreBreakdown.regulation})</p>
    `;
  };

  setDetail(capabilityRowsView[0]);
  tbody.querySelectorAll("tr").forEach((rowEl) => {
    const handler = () => {
      const index = Number(rowEl.dataset.cap);
      setDetail(capabilityRowsView[index]);
    };
    rowEl.addEventListener("mouseenter", handler);
    rowEl.addEventListener("click", () => {
      handler();
      markSectionComplete("capabilities");
    });
  });
}

function initCapabilityMap() {
  renderCapabilityMapView();
}

function initBlueprintControls() {
  const wrap = document.getElementById("blueprint-controls");
  const detail = document.getElementById("capability-detail");

  const setActive = (idx) => {
    wrap.querySelectorAll("button").forEach((button, index) => {
      button.classList.toggle("active", idx === index);
    });
    const step = blueprintSteps[idx];
    fadeSwap(detail, () => {
      detail.innerHTML = `
        <h4>${step.label}</h4>
        <p>${step.detail}</p>
        <p><strong>SAS capability:</strong> ${step.sas}</p>
      `;
    });
  };

  blueprintSteps.forEach((step, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab${index === 0 ? " active" : ""}`;
    button.textContent = step.label;
    button.addEventListener("click", () => {
      setActive(index);
      markSectionComplete("capabilities");
    });
    wrap.appendChild(button);
  });

  setActive(0);
}

function buildFullReport() {
  const { pains, regulation, guidance } = getGuidanceForExport();
  const notes = document.getElementById("discussion-notes").value || "No discussion notes captured.";
  const sequence = examSequenceByRegulation[regulation] || [];
  const inventoryRows = getAiUseInventoryRows();

  return [
    "AI & Model Governance in Practice - Full Session Summary",
    "",
    `Role perspective: ${getCurrentRoleLabel()}`,
    "",
    "Boundary statement:",
    "This application is an educational and decision-support experience and is not a system of record.",
    "",
    `Primary regulatory lens: ${regulation}`,
    "Selected pain points:",
    pains.length ? pains.map((item) => `- ${painPointGuidance[item].title}`).join("\n") : "- None selected",
    "",
    "Guidance plan:",
    guidance
      .map(
        (item) =>
          `- ${item.title} (${item.priority ?? 50}): ${item.action} | ${item.sas} | ${(item.sasHow || []).join(" / ")}`
      )
      .join("\n"),
    "",
    "Examiner sequence:",
    sequence.map((item) => `- ${item}`).join("\n"),
    "",
    "AI use inventory:",
    inventoryRows
      .map(
        (row) =>
          `- ${row.title} | Owner: ${row.owner} | ${row.boundaryStatus} | ${row.tier} | Validation: ${row.validationStatus} | Monitoring: ${row.monitoringCadence} | Evidence: ${row.evidenceReadiness}`
      )
      .join("\n"),
    "",
    "Discussion notes:",
    notes
  ].join("\n");
}

function buildExecutiveSummary() {
  const { pains, regulation, guidance } = getGuidanceForExport();
  const top = guidance[0]?.title || (pains[0] ? painPointGuidance[pains[0]].title : "Inventory governance baseline");
  const topInventory = getAiUseInventoryRows().slice(0, 2).map((item) => item.title);

  return [
    "Executive Summary - AI & Model Governance in Practice",
    "",
    `Role perspective: ${getCurrentRoleLabel()}`,
    "",
    "Key message:",
    "Governance must remain policy-bounded, auditable, and evidence-driven across the model lifecycle.",
    "",
    `Primary regulatory lens: ${regulation}`,
    `Top priority area: ${top}`,
    `AI use inventory focus: ${topInventory.length ? topInventory.join(", ") : "No specific use-case selection yet"}`,
    "",
    "Recommended next action:",
    "Execute a 90-day plan aligned to the selected regulatory sequence and targeted pain-point remediation."
  ].join("\n");
}

function printTextAsPdf(title, content) {
  const escaped = content.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
  const win = window.open("", "_blank", "width=900,height=700");
  if (!win) {
    showToast("Pop-up blocked. Allow pop-ups to export PDF.");
    return;
  }

  win.document.write(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        <style>
          body { font-family: "IBM Plex Sans", sans-serif; margin: 28px; color: #17242f; }
          h1 { font-family: "Source Serif 4", serif; }
          pre { white-space: pre-wrap; font-size: 14px; line-height: 1.5; }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <pre>${escaped}</pre>
      </body>
    </html>
  `);
  win.document.close();
  win.focus();
  win.print();
}

let exportModalInitialized = false;
let exportReadyTimer = null;
let pendingExportCallback = null;

function closeExportFeedbackModal() {
  const modal = document.getElementById("export-feedback-modal");
  const successCheck = document.getElementById("export-success-check");
  if (!modal || !successCheck) return;
  if (exportReadyTimer) {
    window.clearTimeout(exportReadyTimer);
    exportReadyTimer = null;
  }
  pendingExportCallback = null;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  successCheck.classList.remove("show");
}

function initExportFeedbackModal() {
  if (exportModalInitialized) return;
  const closeBtn = document.getElementById("export-feedback-close");
  const downloadBtn = document.getElementById("export-feedback-download");
  const modal = document.getElementById("export-feedback-modal");
  if (!closeBtn || !downloadBtn || !modal) return;

  closeBtn.addEventListener("click", closeExportFeedbackModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal && !pendingExportCallback) {
      closeExportFeedbackModal();
    }
  });
  downloadBtn.addEventListener("click", () => {
    const action = pendingExportCallback;
    pendingExportCallback = null;
    if (typeof action === "function") {
      action();
    }
    closeExportFeedbackModal();
  });
  exportModalInitialized = true;
}

function openExportFeedbackModal(onDownload, sectionId) {
  initExportFeedbackModal();
  const modal = document.getElementById("export-feedback-modal");
  const title = document.getElementById("export-feedback-title");
  const copy = document.getElementById("export-feedback-copy");
  const spinner = document.getElementById("export-spinner");
  const successCheck = document.getElementById("export-success-check");
  const downloadBtn = document.getElementById("export-feedback-download");
  const closeBtn = document.getElementById("export-feedback-close");
  if (!modal || !title || !copy || !spinner || !successCheck || !downloadBtn || !closeBtn) return;

  pendingExportCallback = () => {
    if (typeof onDownload === "function") {
      onDownload();
    }
    if (sectionId) {
      markSectionComplete(sectionId);
    }
  };
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  title.textContent = "Preparing your governance summary...";
  copy.textContent = "We are assembling your export package and formatting it for download.";
  spinner.style.display = "block";
  successCheck.classList.remove("show");
  downloadBtn.hidden = true;
  closeBtn.hidden = true;

  if (exportReadyTimer) {
    window.clearTimeout(exportReadyTimer);
  }
  exportReadyTimer = window.setTimeout(() => {
    spinner.style.display = "none";
    successCheck.classList.add("show");
    title.textContent = "Your export is ready!";
    copy.textContent = "Click Download to open your export.";
    downloadBtn.hidden = false;
    closeBtn.hidden = false;
  }, 700);
}

function initExportActions() {
  document.getElementById("btn-guidance-export").addEventListener("click", () => {
    downloadText("fhlb-guidance-plan.txt", buildGuidanceExport());
    markSectionComplete("evidence");
    showToast("Guidance plan exported.");
  });

  document.getElementById("btn-print-full").addEventListener("click", () => {
    openExportFeedbackModal(() => printTextAsPdf("Full Session Summary", buildFullReport()), "orientation");
  });

  document.getElementById("btn-print-exec").addEventListener("click", () => {
    openExportFeedbackModal(() => printTextAsPdf("Executive Summary", buildExecutiveSummary()), "orientation");
  });

  const inventoryBtn = document.getElementById("btn-export-inventory");
  if (inventoryBtn) {
    inventoryBtn.addEventListener("click", () => {
      downloadText("fhlb-ai-use-inventory.txt", buildAiInventoryExport());
      markSectionComplete("next-steps");
      showToast("AI use inventory exported.");
    });
  }
}

function renderImplementationGuidanceState() {
  const form = document.getElementById("implementation-form");
  const output = document.getElementById("implementation-guidance");
  if (!form || !output) return;
  const value = new FormData(form).get("track");
  const roleActions = (roleGuidanceSummary[currentRole] || roleGuidanceSummary.mrm).actions || [];
  output.innerHTML = `
    <p><strong>Recommended approach:</strong> ${implementationTracks[value]}</p>
    <p><strong>${getCurrentRoleLabel()} emphasis:</strong> ${roleActions[0] || "Define role-specific execution responsibilities."}</p>
  `;
}

function initImplementationGuidance() {
  const form = document.getElementById("implementation-form");
  const notes = document.getElementById("discussion-notes");
  if (!form) return;
  form.addEventListener("change", () => {
    renderImplementationGuidanceState();
    markSectionComplete("next-steps");
  });
  notes?.addEventListener("input", () => {
    if (notes.value.trim().length > 20) {
      markSectionComplete("next-steps");
    }
  });
  renderImplementationGuidanceState();
}

function initFollowupForm() {
  const form = document.getElementById("followup-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    markSectionComplete("next-steps");
    showToast("Follow-up request captured for session discussion.");
  });
}

function applyGovernanceProfileToUI() {
  const regSelectA = document.getElementById("regulation-select");
  const regSelectB = document.getElementById("priority-regulation");
  const regulation = governanceProfileState.activeRegulation;
  if (regulation) {
    if (regSelectA && Array.from(regSelectA.options).some((opt) => opt.value === regulation)) {
      regSelectA.value = regulation;
      renderRegulatoryBars(regSelectA.value, { loading: false });
    }
    if (regSelectB && Array.from(regSelectB.options).some((opt) => opt.value === regulation)) {
      regSelectB.value = regulation;
    }
  }

  const painSet = new Set(governanceProfileState.activePainPoints || []);
  document.querySelectorAll("input[name='pain']").forEach((input) => {
    input.checked = painSet.has(input.value);
  });
  renderGuidancePlan();

  const ownershipKey = getMostExploredOwnership();
  const tab = document.querySelector(`[data-peer-tab="${ownershipKey}"]`);
  if (tab) {
    document.querySelectorAll("[data-peer-tab]").forEach((el) => el.classList.remove("active"));
    tab.classList.add("active");
    renderPeerTab(ownershipKey, { loading: false, trackSelection: false });
  }

  const topUseCaseKey = Object.entries(governanceProfileState.useCaseSelections || {})
    .sort((a, b) => b[1] - a[1])[0]?.[0];
  if (topUseCaseKey) {
    setActiveFhlbUseCase(topUseCaseKey, { track: false });
  }
  renderAiUseInventory();
}

function createProfileShareUrl() {
  finalizeLifecycleTimer();
  const payload = {
    ...governanceProfileState,
    lifecycleSeconds: getLifecycleElapsedSeconds(),
    sharedAt: new Date().toISOString()
  };
  const encoded = safeEncodeProfile(payload);
  const url = new URL(window.location.href);
  url.searchParams.set("profile", encoded);
  return url.toString();
}

function copyToClipboard(text) {
  if (!text) return;
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast("Profile URL copied."));
    return;
  }
  const temp = document.createElement("textarea");
  temp.value = text;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
  showToast("Profile URL copied.");
}

function exportGovernanceProfilePdf() {
  finalizeLifecycleTimer();
  const jspdf = window.jspdf;
  if (!jspdf?.jsPDF) {
    showToast("PDF library unavailable. Please refresh and try again.");
    return;
  }

  const scores = deriveMaturityScores();
  const gaps = buildGovernanceGapMappings(scores);
  const { jsPDF } = jspdf;
  const doc = new jsPDF("p", "pt", "letter");
  doc.setFillColor(12, 74, 127);
  doc.rect(0, 0, 612, 68, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.text("Governance Maturity Profile", 32, 42);
  doc.setFontSize(10);
  doc.text("FHLB AI & Model Governance Interactive Guide | SAS", 32, 58);

  let y = 92;
  doc.setTextColor(23, 36, 47);
  doc.setFontSize(11);
  doc.text(`Generated: ${new Date().toLocaleString()}`, 32, y);
  y += 16;
  doc.text(`Primary regulatory lens: ${governanceProfileState.activeRegulation || "FHFA"}`, 32, y);

  const radarCanvas = document.getElementById("maturity-radar");
  if (radarCanvas) {
    const radarImage = radarCanvas.toDataURL("image/png");
    doc.addImage(radarImage, "PNG", 32, 128, 240, 190);
  }

  doc.setFontSize(12);
  doc.text("Heat map and peer comparison", 300, 128);
  let rowY = 148;
  MATURITY_DIMENSIONS.forEach((dimension) => {
    const score = scores[dimension.key];
    const delta = score - dimension.peer;
    doc.setFontSize(10);
    doc.text(`${dimension.label}: ${score} (peer ${dimension.peer}, ${delta >= 0 ? "+" : ""}${delta})`, 300, rowY);
    rowY += 16;
  });

  rowY += 8;
  doc.setFontSize(12);
  doc.text("Prioritized actions and SAS/ROI mapping", 300, rowY);
  rowY += 18;
  gaps.slice(0, 3).forEach((gapItem, idx) => {
    const actions = getDimensionActions(gapItem.key, gapItem.score).slice(0, 2);
    doc.setFontSize(10);
    doc.text(`${idx + 1}. ${gapItem.label} gap: ${gapItem.gap}`, 300, rowY);
    rowY += 14;
    doc.text(`Action: ${actions[0] || "Refine control design and ownership routing."}`, 312, rowY, { maxWidth: 270 });
    rowY += 26;
    doc.text(`SAS: ${gapItem.sas}`, 312, rowY, { maxWidth: 270 });
    rowY += 20;
    doc.text(`ROI: ${gapItem.roi}`, 312, rowY, { maxWidth: 270 });
    rowY += 24;
  });

  doc.setFontSize(9);
  doc.text("Diagnostic-only profile. Use as workshop planning input, not as compliance certification.", 32, 740);
  doc.save("Governance_Maturity_Profile.pdf");
}

function initGovernanceProfileWidget() {
  const panel = document.getElementById("governance-profile-panel");
  const toggle = document.getElementById("profile-toggle");
  const close = document.getElementById("profile-close");
  const shareInput = document.getElementById("profile-share-url");
  const shareGenerate = document.getElementById("profile-generate-share");
  const shareCopy = document.getElementById("profile-copy-share");
  const exportPdfBtn = document.getElementById("profile-export-pdf");

  if (!panel || !toggle || !close || !shareInput || !shareGenerate || !shareCopy || !exportPdfBtn) return;

  const setOpen = (open) => {
    panel.classList.toggle("open", open);
    panel.setAttribute("aria-hidden", open ? "false" : "true");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  toggle.addEventListener("click", () => setOpen(!panel.classList.contains("open")));
  close.addEventListener("click", () => setOpen(false));

  shareGenerate.addEventListener("click", () => {
    const url = createProfileShareUrl();
    shareInput.value = url;
    showToast("Share URL generated.");
  });
  shareCopy.addEventListener("click", () => {
    if (!shareInput.value) {
      shareInput.value = createProfileShareUrl();
    }
    copyToClipboard(shareInput.value);
  });

  exportPdfBtn.addEventListener("click", () => openExportFeedbackModal(exportGovernanceProfilePdf));
  governanceProfileInitialized = true;
  applyGovernanceProfileToUI();
  renderGovernanceProfile();
}

function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  const firstSection = sectionEls[0];

  const toggleVisibility = () => {
    if (!firstSection) return;
    const rect = firstSection.getBoundingClientRect();
    btn.classList.toggle("visible", rect.bottom < 0);
  };

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();
}

function initMobileHeaderBehavior() {
  const header = document.querySelector(".sticky-header");
  if (!header) return;
  const update = () => {
    const isMobile = window.innerWidth <= 980;
    header.classList.toggle("compact-mobile", isMobile && window.scrollY > 36);
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function initScenarioSimulator() {
  var scenarios = typeof SCENARIO_SIMULATOR_DATA !== "undefined" ? SCENARIO_SIMULATOR_DATA : [];
  if (!scenarios.length) return;

  var STORAGE_KEY = "fhlb-scenario-state";
  var tabsEl = document.getElementById("scenario-tabs");
  var workspaceEl = document.getElementById("scenario-workspace");
  var resultsEl = document.getElementById("scenario-results");
  var titleEl = document.getElementById("scenario-title");
  var subtitleEl = document.getElementById("scenario-subtitle");
  var contextEl = document.getElementById("scenario-context");
  var stepBarEl = document.getElementById("scenario-step-bar");
  var stepTitleEl = document.getElementById("scenario-step-title");
  var stepNarrativeEl = document.getElementById("scenario-step-narrative");
  var stepQuestionEl = document.getElementById("scenario-step-question");
  var choicesEl = document.getElementById("scenario-choices");
  var feedbackEl = document.getElementById("scenario-feedback");
  var consequenceEl = document.getElementById("scenario-consequence");
  var examinerTextEl = document.getElementById("scenario-examiner-text");
  var scoreBadgeEl = document.getElementById("scenario-score-badge");
  var scoreBarEl = document.getElementById("scenario-score-bar");
  var nextBtn = document.getElementById("scenario-next-btn");
  var restartBtn = document.getElementById("scenario-restart-btn");
  var bpCheckbox = document.getElementById("scenario-bp-checkbox");
  var evidenceMapEl = document.getElementById("scenario-evidence-map");
  var decisionSummaryEl = document.getElementById("scenario-decision-summary");
  var exportPdfBtn = document.getElementById("scenario-export-pdf");
  var exportTxtBtn = document.getElementById("scenario-export-txt");

  var state = loadState();
  var currentScenarioIdx = state.currentScenarioIdx || 0;
  var currentStepIdx = 0;

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultState();
    } catch (e) {
      return defaultState();
    }
  }

  function defaultState() {
    return { choicesMade: {}, scores: {}, currentScenarioIdx: 0, completedScenarios: [] };
  }

  function saveState() {
    state.currentScenarioIdx = currentScenarioIdx;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* storage unavailable */ }
  }

  function getScenarioChoices(scenarioId) {
    return state.choicesMade[scenarioId] || {};
  }

  function getScenarioScore(scenarioId) {
    return state.scores[scenarioId] || 0;
  }

  function renderTabs() {
    tabsEl.innerHTML = "";
    scenarios.forEach(function (sc, idx) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tab" + (idx === currentScenarioIdx ? " active" : "");
      btn.textContent = sc.title;
      btn.addEventListener("click", function () {
        currentScenarioIdx = idx;
        activateScenario(idx);
      });
      tabsEl.appendChild(btn);
    });
  }

  function activateScenario(idx) {
    currentScenarioIdx = idx;
    var sc = scenarios[idx];
    var choices = getScenarioChoices(sc.id);

    tabsEl.querySelectorAll(".tab").forEach(function (t, i) {
      t.classList.toggle("active", i === idx);
    });

    titleEl.textContent = sc.title;
    subtitleEl.textContent = sc.subtitle;
    contextEl.innerHTML = "<p>" + sc.context + "</p>";

    workspaceEl.style.display = "";
    resultsEl.style.display = "none";

    var answeredCount = Object.keys(choices).length;
    if (answeredCount >= sc.steps.length) {
      currentStepIdx = sc.steps.length - 1;
      renderStepIndicator(sc, choices);
      renderStep(currentStepIdx, sc, choices);
      renderResults(sc, choices);
    } else {
      currentStepIdx = answeredCount;
      renderStepIndicator(sc, choices);
      renderStep(currentStepIdx, sc, choices);
    }

    updateScoreDisplay(sc.id);
    saveState();
  }

  function renderStepIndicator(sc, choices) {
    stepBarEl.innerHTML = "";
    sc.steps.forEach(function (step, i) {
      if (i > 0) {
        var conn = document.createElement("div");
        conn.className = "scenario-step-connector" + (choices[String(i)] ? " done" : "");
        stepBarEl.appendChild(conn);
      }
      var dot = document.createElement("div");
      dot.className = "scenario-step-dot";
      dot.textContent = String(i + 1);

      var choiceId = choices[String(i)];
      if (choiceId) {
        var choice = findChoice(sc, i, choiceId);
        if (choice) {
          if (choice.quality === "strong") dot.classList.add("completed");
          else if (choice.quality === "partial") dot.classList.add("completed-partial");
          else dot.classList.add("completed-weak");
        }
      } else if (i === currentStepIdx) {
        dot.classList.add("active");
      }

      stepBarEl.appendChild(dot);
    });
  }

  function findChoice(sc, stepIdx, choiceId) {
    var step = sc.steps[stepIdx];
    if (!step) return null;
    for (var c = 0; c < step.choices.length; c++) {
      if (step.choices[c].id === choiceId) return step.choices[c];
    }
    return null;
  }

  function renderStep(stepIdx, sc, choices) {
    var step = sc.steps[stepIdx];
    if (!step) return;

    var stepContent = document.getElementById("scenario-step-content");
    fadeSwap(stepContent, function () {
      stepTitleEl.textContent = "Step " + (stepIdx + 1) + ": " + step.title;
      stepNarrativeEl.textContent = step.narrative;
      stepQuestionEl.textContent = step.question;
    });

    var existingChoiceId = choices[String(stepIdx)];
    renderChoiceButtons(step, sc, stepIdx, existingChoiceId);

    if (existingChoiceId) {
      var chosen = findChoice(sc, stepIdx, existingChoiceId);
      showFeedback(chosen);
      nextBtn.style.display = (stepIdx < sc.steps.length - 1) ? "" : "none";
      restartBtn.style.display = "";
    } else {
      feedbackEl.style.display = "none";
      nextBtn.style.display = "none";
      restartBtn.style.display = "";
    }
  }

  function renderChoiceButtons(step, sc, stepIdx, existingChoiceId) {
    choicesEl.innerHTML = "";
    var bpIds = sc.bestPracticePathIds || [];
    var showBp = bpCheckbox.checked;

    step.choices.forEach(function (choice) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "scenario-choice-btn";

      var label = choice.label;
      if (existingChoiceId) {
        btn.disabled = true;
        if (choice.id === existingChoiceId) {
          btn.classList.add("chosen", "quality-" + choice.quality);
          label += '<span class="scenario-quality-chip quality-' + choice.quality + '">' + choice.quality + ' (' + (choice.points >= 0 ? "+" : "") + choice.points + ')</span>';
        } else {
          btn.classList.add("revealed", "quality-" + choice.quality);
          label += '<span class="scenario-quality-chip quality-' + choice.quality + '">' + choice.quality + '</span>';
        }
      }

      if (showBp && bpIds.indexOf(choice.id) !== -1) {
        btn.classList.add("best-practice-highlight");
        label += '<span class="best-practice-badge">Best practice</span>';
      }

      btn.innerHTML = label;

      if (!existingChoiceId) {
        btn.addEventListener("click", function () {
          handleChoice(choice, step, sc, stepIdx);
        });
      }

      choicesEl.appendChild(btn);
    });
  }

  function handleChoice(choice, step, sc, stepIdx) {
    var choices = getScenarioChoices(sc.id);
    choices[String(stepIdx)] = choice.id;
    if (!state.choicesMade[sc.id]) state.choicesMade[sc.id] = {};
    state.choicesMade[sc.id] = choices;

    var currentScore = getScenarioScore(sc.id);
    var newScore = clampScore(currentScore + choice.points);
    state.scores[sc.id] = newScore;

    if (Object.keys(choices).length >= sc.steps.length) {
      if (state.completedScenarios.indexOf(sc.id) === -1) {
        state.completedScenarios.push(sc.id);
      }
    }

    saveState();

    renderStepIndicator(sc, choices);
    renderChoiceButtons(step, sc, stepIdx, choice.id);
    showFeedback(choice);
    updateScoreDisplay(sc.id);

    if (stepIdx < sc.steps.length - 1) {
      nextBtn.style.display = "";
    } else {
      nextBtn.style.display = "none";
      renderResults(sc, choices);
    }

    restartBtn.style.display = "";
    markSectionComplete("scenarios");
    showToast("Choice recorded: " + choice.quality + " (" + (choice.points >= 0 ? "+" : "") + choice.points + " points)");
  }

  function showFeedback(choice) {
    feedbackEl.style.display = "";
    fadeSwap(consequenceEl, function () {
      consequenceEl.innerHTML = "<h4>Consequence</h4><p>" + choice.consequence + "</p>" +
        "<h4 style='margin-top:10px'>Evidence needed</h4><ul class='checklist'>" +
        choice.evidenceNeeded.map(function (e) { return "<li>" + e + "</li>"; }).join("") + "</ul>";
    });
    examinerTextEl.textContent = choice.examinerNote;
  }

  function updateScoreDisplay(scenarioId) {
    var score = clampScore(getScenarioScore(scenarioId));
    var bandClass = getBadgeClass(score);
    var barClass = getScoreBandClass(score);

    scoreBadgeEl.textContent = String(score);
    scoreBadgeEl.className = "band-badge " + bandClass;
    scoreBarEl.style.width = score + "%";
    scoreBarEl.className = barClass;
  }

  function advanceStep() {
    var sc = scenarios[currentScenarioIdx];
    var choices = getScenarioChoices(sc.id);
    if (currentStepIdx < sc.steps.length - 1) {
      currentStepIdx++;
      renderStepIndicator(sc, choices);
      renderStep(currentStepIdx, sc, choices);
    }
  }

  function renderResults(sc, choices) {
    resultsEl.style.display = "";

    evidenceMapEl.innerHTML = "<h4>Evidence Map</h4>" +
      sc.evidenceMap.map(function (cat) {
        return '<div class="evidence-category-card">' +
          "<h4>" + cat.category + "</h4>" +
          "<ul>" + cat.items.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul>" +
          "<p><strong>SAS capability:</strong> " + cat.sasCapability + "</p>" +
          "</div>";
      }).join("");

    var recapHtml = "";
    sc.steps.forEach(function (step, i) {
      var choiceId = choices[String(i)];
      var choice = findChoice(sc, i, choiceId);
      if (choice) {
        recapHtml += '<div class="decision-recap-item">' +
          '<span class="scenario-step-dot completed' +
          (choice.quality === "partial" ? "-partial" : choice.quality === "weak" ? "-weak" : "") +
          '" style="width:28px;height:28px;font-size:12px">' + (i + 1) + '</span>' +
          '<div><strong>' + step.title + '</strong><br/><span style="color:var(--muted);font-size:13px">' + choice.label + '</span></div>' +
          '<span class="scenario-quality-chip quality-' + choice.quality + '">' + choice.quality + '</span>' +
          '</div>';
      }
    });
    decisionSummaryEl.innerHTML = recapHtml;
  }

  function restartScenario() {
    var sc = scenarios[currentScenarioIdx];
    delete state.choicesMade[sc.id];
    delete state.scores[sc.id];
    var idx = state.completedScenarios.indexOf(sc.id);
    if (idx !== -1) state.completedScenarios.splice(idx, 1);
    saveState();
    currentStepIdx = 0;
    activateScenario(currentScenarioIdx);
    showToast("Scenario restarted.");
  }

  function toggleBestPractice() {
    var sc = scenarios[currentScenarioIdx];
    var choices = getScenarioChoices(sc.id);
    var existingChoiceId = choices[String(currentStepIdx)];
    var step = sc.steps[currentStepIdx];
    if (step) renderChoiceButtons(step, sc, currentStepIdx, existingChoiceId);
  }

  function buildBrief(sc, choices) {
    var lines = [
      "Governance Scenario Decision Brief",
      "Scenario: " + sc.title,
      "Context: " + sc.context,
      "Defensibility score: " + clampScore(getScenarioScore(sc.id)) + " / 100",
      "Exported: " + new Date().toLocaleString(),
      ""
    ];

    sc.steps.forEach(function (step, i) {
      var choiceId = choices[String(i)];
      var choice = findChoice(sc, i, choiceId);
      lines.push("Step " + (i + 1) + ": " + step.title);
      if (choice) {
        lines.push("Decision: " + choice.label);
        lines.push("Quality: " + choice.quality + " (" + (choice.points >= 0 ? "+" : "") + choice.points + " points)");
        lines.push("Consequence: " + choice.consequence);
        lines.push("Examiner note: " + choice.examinerNote);
        lines.push("Evidence needed:");
        choice.evidenceNeeded.forEach(function (e) { lines.push("  - " + e); });
      } else {
        lines.push("Decision: not yet made");
      }
      lines.push("");
    });

    lines.push("Evidence Map:");
    sc.evidenceMap.forEach(function (cat) {
      lines.push("[" + cat.category + "]");
      cat.items.forEach(function (item) { lines.push("  - " + item); });
      lines.push("SAS: " + cat.sasCapability);
      lines.push("");
    });

    return lines.join("\n");
  }

  nextBtn.addEventListener("click", advanceStep);
  restartBtn.addEventListener("click", restartScenario);
  bpCheckbox.addEventListener("change", toggleBestPractice);

  exportPdfBtn.addEventListener("click", function () {
    var sc = scenarios[currentScenarioIdx];
    var choices = getScenarioChoices(sc.id);
    openExportFeedbackModal(function () {
      printTextAsPdf("Governance Decision Brief - " + sc.title, buildBrief(sc, choices));
    }, "scenarios");
  });

  exportTxtBtn.addEventListener("click", function () {
    var sc = scenarios[currentScenarioIdx];
    var choices = getScenarioChoices(sc.id);
    downloadText("governance-brief-" + sc.id + ".txt", buildBrief(sc, choices));
    showToast("Decision brief exported.");
  });

  renderTabs();
  activateScenario(currentScenarioIdx);
}

/* =========================================
   NEW: AGENTIC FHLB EXAMPLES
   ========================================= */
const agenticFhlbExamples = [
  {
    title: "Static model examples at FHLBs",
    examples: [
      "<strong>CECL/ACL loss forecasting:</strong> Established models with fixed methodology, periodic recalibration, and well-defined validation requirements.",
      "<strong>Basic prepayment assumptions:</strong> Actuarial-style models with documented assumptions and annual review cycles."
    ],
    roleLens: {
      mrm: "Ensure tiering and review cadence are policy-defined. Static models still require documented owner accountability and annual attestation.",
      developer: "Maintain versioned methodology documentation and reproducible calibration scripts. Evidence starts at build time.",
      validator: "Challenge whether assumptions remain current. Static does not mean stale — test against recent market conditions."
    }
  },
  {
    title: "ML pipeline examples at FHLBs",
    examples: [
      "<strong>Member credit scoring with ML features:</strong> Automated retraining pipelines that ingest new data and recalibrate scores quarterly.",
      "<strong>Collateral valuation with automated data feeds:</strong> Models that consume updated market data automatically, requiring change-control gates."
    ],
    roleLens: {
      mrm: "Automated retraining introduces change-control risk. Require pre-deployment gates and drift-trigger escalation paths.",
      developer: "Instrument pipelines with schema checks, drift metrics, and fallback logic. Log every retraining run with inputs and outputs.",
      validator: "Validate that change-control gates actually prevent material drift from reaching production. Test rollback paths."
    }
  },
  {
    title: "Orchestrated flow examples at FHLBs",
    examples: [
      "<strong>Advance pricing with multi-model inputs:</strong> Pricing decisions that combine interest rate models, credit risk scores, and collateral valuations into a single pricing workflow.",
      "<strong>ALM/IRR scenario engines:</strong> Multiple models chained together to produce interest rate risk projections under various scenarios."
    ],
    roleLens: {
      mrm: "Govern the chain, not just individual models. Require end-to-end decision tracing and override governance at the workflow level.",
      developer: "Implement trace IDs across orchestrated components. Each model handoff must be logged with inputs, outputs, and confidence.",
      validator: "Test the full decision chain — not each model in isolation. Assess whether errors compound across the workflow."
    }
  },
  {
    title: "Semi-autonomous examples at FHLBs",
    examples: [
      "<strong>Automated collateral monitoring with alerts:</strong> Systems that continuously monitor collateral values and automatically flag breaches — but human approval required for action.",
      "<strong>AI-assisted member communication drafting:</strong> LLM-based tools that draft member correspondence with human review gates before sending."
    ],
    roleLens: {
      mrm: "Set hard-stop criteria and delegated authority boundaries. Board/committee must have visibility into exception trends.",
      developer: "Build policy-bounded action constraints into runtime. Expose override telemetry for MRM and validator review.",
      validator: "Stress-test knowledge limits and fallback execution. Verify that human-in-the-loop gates cannot be bypassed."
    }
  }
];

/* =========================================
   NEW: FHLB USE CASE DATA
   ========================================= */
const fhlbUseCaseData = {
  prepayment: {
    title: "Prepayment Modeling",
    description: "Models that forecast mortgage prepayment behavior for portfolio management and valuation.",
    owner: "Treasury / Risk Analytics",
    boundaryStatus: "Model (in scope)",
    tier: "Tier 2",
    validationStatus: "Independent validation required",
    monitoringCadence: "Quarterly",
    evidenceReadiness: "Moderate",
    governance: [
      "Typically Tier 1 or Tier 2 depending on portfolio materiality",
      "Requires sensitivity analysis across interest rate scenarios",
      "Assumption documentation critical — prepayment drivers change with market conditions",
      "Vendor models common — governance must cover vendor methodology review"
    ],
    examinerFocus: "Examiners check whether assumptions are current and whether the model has been tested against recent rate environments.",
    roleLens: {
      mrm: "Ensure tiering reflects portfolio materiality. Vendor prepayment models still require independent challenge — don't delegate governance to the vendor.",
      developer: "Version all assumption sets and calibration runs. Build automated sensitivity sweeps across rate scenarios into the pipeline.",
      validator: "Test whether prepayment assumptions hold under recent rate regimes. Challenge vendor methodology gaps and document dissent."
    }
  },
  collateral: {
    title: "Collateral Valuation",
    description: "Models and tools used to value collateral pledged by members, including real estate and mortgage portfolios.",
    owner: "Collateral Risk + MRM",
    boundaryStatus: "Model / Vendor model (in scope)",
    tier: "Tier 2",
    validationStatus: "Independent validation + vendor challenge",
    monitoringCadence: "Monthly",
    evidenceReadiness: "Moderate",
    governance: [
      "Often involves vendor APIs with limited transparency",
      "Must validate vendor methodology, not just accept outputs",
      "Data quality monitoring critical — stale valuations create risk",
      "Member-facing impact requires higher governance tier"
    ],
    examinerFocus: "Examiners ask: how do you know the vendor's valuation is appropriate for your specific collateral mix?",
    roleLens: {
      mrm: "Vendor opacity is the key risk. Require contractual access to methodology documentation and define fallback procedures for vendor outages.",
      developer: "Instrument data freshness checks on valuation feeds. Log every vendor call with inputs, outputs, and latency for auditability.",
      validator: "Independently benchmark vendor valuations against observable market data. Challenge whether the vendor's collateral mix assumptions match yours."
    }
  },
  credit: {
    title: "Member Credit Risk",
    description: "Models assessing creditworthiness of member institutions for advance lending and other exposures.",
    owner: "Credit Risk",
    boundaryStatus: "Model (in scope)",
    tier: "Tier 1",
    validationStatus: "Independent validation required",
    monitoringCadence: "Monthly",
    evidenceReadiness: "High",
    governance: [
      "Material impact on advance decisions — typically Tier 1",
      "Requires independent validation with effective challenge",
      "Must document how credit risk ratings translate to exposure limits",
      "If ML-based, fairness and explainability requirements apply"
    ],
    examinerFocus: "Examiners look for clear linkage between credit risk assessment and exposure management decisions.",
    roleLens: {
      mrm: "Tier 1 classification is non-negotiable. Ensure credit-to-exposure linkage is documented and override governance covers off-policy lending decisions.",
      developer: "If ML-based, build explainability outputs into the scoring pipeline. Log feature contributions for every score produced.",
      validator: "Challenge the credit-to-exposure linkage end-to-end. Test whether rating migrations trigger appropriate limit adjustments."
    }
  },
  pricing: {
    title: "Advance Pricing",
    description: "Models determining pricing for advances to member institutions, including spread, term, and optionality components.",
    owner: "Treasury Pricing Committee",
    boundaryStatus: "Model system (in scope)",
    tier: "Tier 1",
    validationStatus: "Independent validation + override governance",
    monitoringCadence: "Monthly",
    evidenceReadiness: "High",
    governance: [
      "Directly member-facing — highest governance tier required",
      "Multiple model components often feed into pricing",
      "Override governance essential for off-market pricing",
      "Full audit trail of pricing decisions expected"
    ],
    examinerFocus: "Examiners want to see that pricing decisions can be traced back to model inputs, assumptions, and any manual overrides.",
    roleLens: {
      mrm: "Member-facing impact demands the highest governance tier. Override governance for off-market pricing must have committee-level visibility and documented rationale.",
      developer: "Implement end-to-end trace IDs across all pricing model components. Every override must be captured with timestamp, authority, and justification.",
      validator: "Validate the full pricing chain — not individual model components. Test that overrides are appropriately governed and don't bypass controls."
    }
  },
  alm: {
    title: "ALM / Interest Rate Risk",
    description: "Asset-liability management models measuring interest rate risk exposure across the balance sheet.",
    owner: "ALM Committee",
    boundaryStatus: "Model (in scope)",
    tier: "Tier 1",
    validationStatus: "Independent validation required",
    monitoringCadence: "Monthly + stress-cycle",
    evidenceReadiness: "High",
    governance: [
      "Always Tier 1 — board-level reporting depends on these models",
      "Stress testing under multiple rate scenarios required",
      "Model limitations must be explicitly communicated to board",
      "Assumption governance (rate paths, behavioral models) critical"
    ],
    examinerFocus: "Examiners focus heavily on assumption documentation, stress scenario adequacy, and whether model limitations are communicated to decision-makers."
  },
  cecl: {
    title: "CECL / ACL",
    description: "Current Expected Credit Loss models for allowance for credit losses under ASC 326.",
    owner: "Finance + Credit Risk",
    boundaryStatus: "Model (in scope)",
    tier: "Tier 1",
    validationStatus: "Independent validation required",
    monitoringCadence: "Quarterly",
    evidenceReadiness: "High",
    governance: [
      "Tier 1 — directly impacts financial reporting and regulatory capital",
      "Must document methodology choice and alternative approaches considered",
      "Qualitative adjustment governance as important as model validation",
      "Vintage, backtesting, and outcomes analysis required"
    ],
    examinerFocus: "Examiners examine both quantitative model performance and the governance around qualitative overlays and management adjustments."
  }
};

function getAiUseInventoryRows() {
  const selectionCounts = governanceProfileState.useCaseSelections || {};
  return Object.entries(fhlbUseCaseData)
    .map(([key, value]) => ({
      key,
      title: value.title,
      owner: value.owner || "Model owner not defined",
      boundaryStatus: value.boundaryStatus || "Undetermined",
      tier: value.tier || "Tier pending",
      validationStatus: value.validationStatus || "Validation status pending",
      monitoringCadence: value.monitoringCadence || "Cadence pending",
      evidenceReadiness: value.evidenceReadiness || "Moderate",
      selectedCount: selectionCounts[key] || 0
    }))
    .sort((a, b) => b.selectedCount - a.selectedCount || a.title.localeCompare(b.title));
}

function renderAiUseInventory() {
  const tbody = document.querySelector("#ai-use-inventory-table tbody");
  if (!tbody) return;
  const rows = getAiUseInventoryRows();
  tbody.innerHTML = rows
    .map(
      (row) => `
      <tr${row.selectedCount > 0 ? ' class="inventory-row-active"' : ""}>
        <td>${row.title}${row.selectedCount > 0 ? ` <span class="band-inline ${getBadgeClass(Math.min(100, 60 + row.selectedCount * 8))}">Discussed ${row.selectedCount}x</span>` : ""}</td>
        <td>${row.owner}</td>
        <td>${row.boundaryStatus}</td>
        <td>${row.tier}</td>
        <td>${row.validationStatus}</td>
        <td>${row.monitoringCadence}</td>
        <td>${row.evidenceReadiness}</td>
      </tr>`
    )
    .join("");
}

function buildAiInventoryExport() {
  const rows = getAiUseInventoryRows();
  const lines = [
    "AI Use Inventory Snapshot",
    `Generated: ${new Date().toLocaleString()}`,
    ""
  ];
  rows.forEach((row) => {
    lines.push(`[${row.title}]`);
    lines.push(`Owner: ${row.owner}`);
    lines.push(`Boundary status: ${row.boundaryStatus}`);
    lines.push(`Tier: ${row.tier}`);
    lines.push(`Validation: ${row.validationStatus}`);
    lines.push(`Monitoring cadence: ${row.monitoringCadence}`);
    lines.push(`Evidence readiness: ${row.evidenceReadiness}`);
    lines.push(`Discussion frequency: ${row.selectedCount}`);
    lines.push("");
  });
  return lines.join("\n");
}

function setActiveFhlbUseCase(useCaseKey, options = {}) {
  const { track = true } = options;
  const detail = document.getElementById("use-case-detail");
  const chips = document.querySelectorAll(".use-case-chip");
  const uc = fhlbUseCaseData[useCaseKey];
  if (!detail || !chips.length || !uc) return;

  chips.forEach((chip) => chip.classList.toggle("active", chip.dataset.uc === useCaseKey));
  if (track) {
    trackUseCaseSelection(useCaseKey);
  }

  detail.innerHTML = `
    <h4>${uc.title}</h4>
    <p>${uc.description}</p>
    <h4 style="margin-top:10px">Governance considerations</h4>
    <ul class="checklist">${uc.governance.map((g) => `<li>${g}</li>`).join("")}</ul>
    <p class="reg-note" style="margin-top:8px"><strong>Examiner focus:</strong> ${uc.examinerFocus}</p>
  `;
}

/* =========================================
   NEW: ROLE SWITCHER
   ========================================= */
function initRoleSwitcher() {
  const buttons = document.querySelectorAll(".role-btn");
  const body = document.body;
  initRoleState();

  const applyRole = (role, options = {}) => {
    const fromUser = options.fromUser === true;
    currentRole = ROLE_LABELS[role] ? role : "mrm";
    safeSessionSet(ROLE_STORAGE_KEY, currentRole);

    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.role === currentRole);
    });

    body.classList.remove("role-mrm", "role-developer", "role-validator");
    body.classList.add(`role-${currentRole}`);
    refreshRolePerspective();

    if (fromUser) {
      showToast(`Role view updated: ${getCurrentRoleLabel()}`, 1700);
      markSectionComplete("orientation");
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => applyRole(btn.dataset.role, { fromUser: true }));
  });

  applyRole(currentRole, { fromUser: false });
}

/* =========================================
   NEW: BOUNDARY TESTS (Gray Space)
   ========================================= */
function initBoundaryTests() {
  const form = document.getElementById("boundary-tests");
  const result = document.getElementById("boundary-result");
  if (!form || !result) return;

  form.addEventListener("change", () => {
    const checked = Array.from(form.querySelectorAll("input:checked")).map((i) => i.value);
    const count = checked.length;

    if (count === 0) {
      result.innerHTML = "<p>Check the boundary tests above to see the governance classification result.</p>";
      return;
    }

    let classification, explanation;
    if (count >= 3 || checked.includes("autonomous")) {
      classification = "Full MRM scope required";
      explanation = "Multiple boundary tests triggered. This tool/system falls clearly within model risk management scope and requires full governance — inventory, validation, monitoring, and evidence.";
    } else if (count === 2 || checked.includes("decisions")) {
      classification = "Likely in MRM scope";
      explanation = "Materially influences decisions or has learned behavior. Most frameworks would classify this as requiring model risk governance, though the depth of governance may be tiered by materiality.";
    } else {
      classification = "Gray zone — governance advisable";
      explanation = "One boundary test triggered. This may not meet the strict SR 11-7 'model' definition, but emerging supervisory expectations suggest governance controls should apply. Document the classification decision.";
    }

    result.innerHTML = `
      <h4>${classification}</h4>
      <p>${explanation}</p>
      <p class="reg-note"><strong>Triggered tests:</strong> ${checked.join(", ")}</p>
      <p class="reg-note">Regardless of classification, document why you determined this tool is or isn't a model. Examiners value the reasoning, not just the conclusion.</p>
    `;
  });
}

/* =========================================
   NEW: FHLB USE CASE HANDLER
   ========================================= */
function initFhlbUseCases() {
  const chips = document.querySelectorAll(".use-case-chip");
  const detail = document.getElementById("use-case-detail");
  if (!chips.length || !detail) {
    renderAiUseInventory();
    return;
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      setActiveFhlbUseCase(chip.dataset.uc, { track: true });
      markSectionComplete("peers");
    });
  });
  renderAiUseInventory();
}

/* =========================================
   NEW: RENDER AGENTIC FHLB EXAMPLES
   ========================================= */
function renderAgenticFhlbExamples(index) {
  const el = document.getElementById("agentic-fhlb-examples");
  if (!el) return;
  const data = agenticFhlbExamples[index];
  if (!data) return;

  const lens = data.roleLens && data.roleLens[currentRole] ? data.roleLens[currentRole] : "";
  const roleLabel = getCurrentRoleLabel();
  const lensHtml = lens
    ? `<p class="reg-note" style="margin-top:10px"><strong>${roleLabel} lens:</strong> ${lens}</p>`
    : "";
  el.innerHTML = `
    <h4>${data.title}</h4>
    <ul class="checklist">${data.examples.map((e) => `<li>${e}</li>`).join("")}</ul>
    ${lensHtml}
  `;
}

/* =========================================
   NEW: SIMPLIFIED CAPABILITY MAP FOR APPENDIX
   ========================================= */
function initCapabilityMapAppendix() {
  const tbody = document.querySelector("#capability-table tbody");
  if (!tbody) return;

  tbody.innerHTML = capabilityRows
    .map(
      (row) => `
      <tr>
        <td>${row.need}</td>
        <td>${row.capability}</td>
      </tr>`
    )
    .join("");
}

/* =========================================
   INITIALIZATION
   ========================================= */
window.addEventListener("scroll", () => {
  if (typeof updateProgress === "function") updateProgress();
}, { passive: true });
window.addEventListener("resize", () => {
  if (typeof updateProgress === "function") updateProgress();
});
window.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    finalizeLifecycleTimer();
    persistGovernanceProfileState();
  }
});
window.addEventListener("beforeunload", () => {
  finalizeLifecycleTimer();
  persistGovernanceProfileState();
});

// Patch renderSpectrum to also render FHLB examples
const originalRenderSpectrum = renderSpectrum;
renderSpectrum = function(index) {
  originalRenderSpectrum(index);
  renderAgenticFhlbExamples(index);
};

initGovernanceProfileState();
initViewModeState();
initRoleSwitcher();
initBoundaryTests();
initObservers();
initStartButton();
initGlossary();
initExplainabilityChecklist();
initConceptMap();
initRegulationLinkageTable();
initSpectrum();
initLifecycle();
initPeerTabs();
initOwnershipOverlayToggle();
initRegulatoryWidget();
initGuidance();
initCapabilityMapAppendix();
initBlueprintControls();
initExportActions();
initImplementationGuidance();
initFhlbUseCases();
initBackToTop();
initMobileHeaderBehavior();
initScenarioSimulator();
initViewModeToggle();
if (typeof updateProgress === "function") updateProgress();
