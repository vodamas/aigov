const SCENARIO_SIMULATOR_DATA = [
  {
    id: "rate-shock",
    title: "The Rate Shock Response",
    subtitle: "Interest rate model governance under stress",
    context:
      "Your institution's interest rate risk model has produced unexpected results following a sudden 150bp rate move. The ALM committee is requesting immediate guidance, the board risk committee wants answers within 48 hours, and your model risk team must determine whether the model performed as designed or whether governance controls failed.",
    steps: [
      {
        id: "rs-s1",
        title: "Initial Triage",
        narrative:
          "The overnight rate move triggered alerts across three model outputs. Your model risk officer flags that the interest rate model's projections diverged significantly from realized values. The ALM team wants to use the existing outputs for an emergency board presentation tomorrow.",
        question: "How do you handle the initial triage of the model output divergence?",
        choices: [
          {
            id: "rs-s1-c1",
            label: "Convene model risk committee, freeze outputs pending review, notify ALM of hold",
            quality: "strong",
            points: 25,
            consequence:
              "The freeze prevents potentially flawed outputs from reaching decision-makers. The ALM team is frustrated by the delay but respects the governance protocol. Your model risk committee convenes within 4 hours with a structured review agenda.",
            examinerNote:
              "Examiners expect to see evidence of a defined escalation protocol that prioritizes model integrity over speed. Freezing outputs pending review demonstrates that governance controls function under stress — exactly what SR 11-7 and FHFA expect.",
            evidenceNeeded: [
              "Escalation notification log with timestamps",
              "Model output freeze authorization record",
              "Committee convening notice and agenda"
            ]
          },
          {
            id: "rs-s1-c2",
            label: "Allow ALM to use outputs with a verbal disclaimer about potential issues",
            quality: "partial",
            points: 5,
            consequence:
              "ALM proceeds with the outputs. The board presentation goes forward, but two days later your validation team confirms the outputs were materially misstated. The board now questions why flawed data reached them.",
            examinerNote:
              "Verbal disclaimers are not evidence. Examiners will note the absence of a documented escalation decision. Under FHFA guidance, material model outputs used for board-level decisions require documented reliability assessments.",
            evidenceNeeded: [
              "No formal escalation record exists",
              "Verbal disclaimer is not traceable",
              "Board presentation used unvalidated outputs"
            ]
          },
          {
            id: "rs-s1-c3",
            label: "Defer to ALM's judgment since they own the business decision",
            quality: "weak",
            points: -10,
            consequence:
              "ALM uses the outputs without any model risk review. The board makes capital allocation decisions based on flawed projections. When the error surfaces weeks later, remediation costs are significant and examiner confidence is damaged.",
            examinerNote:
              "This represents a governance failure. SR 11-7 is clear that model risk management must maintain independent authority over model output reliability. Deferring to the first line on model validity questions undermines the three-lines-of-defense structure.",
            evidenceNeeded: [
              "No escalation or review evidence",
              "No independence of model risk function demonstrated",
              "Decision trail shows governance bypass"
            ]
          }
        ]
      },
      {
        id: "rs-s2",
        title: "Model Output Review",
        narrative:
          "Your model risk team has completed an initial diagnostic. The model's assumptions about rate correlation were calibrated to a low-volatility regime. The sudden rate move exceeded the model's tested stress boundaries. You have three options for how to assess and communicate the model's performance.",
        question: "How do you structure the model output review and communicate findings?",
        choices: [
          {
            id: "rs-s2-c1",
            label: "Run backtesting against realized outcomes, document assumption gaps, and issue a formal findings memo",
            quality: "strong",
            points: 25,
            consequence:
              "The backtesting reveals that the model's correlation assumptions were appropriate for the prior regime but did not account for tail scenarios. Your findings memo clearly documents the gap, quantifies the output deviation, and recommends recalibration with expanded stress boundaries.",
            examinerNote:
              "This is textbook SR 11-7 outcomes analysis. Examiners want to see that model performance is evaluated against realized outcomes, that gaps are documented with specificity, and that findings lead to actionable recommendations — not just observations.",
            evidenceNeeded: [
              "Backtesting results with realized vs. predicted comparison",
              "Assumption gap analysis with regime context",
              "Formal findings memo with severity classification"
            ]
          },
          {
            id: "rs-s2-c2",
            label: "Review model documentation and confirm it was running as designed, then report no issues found",
            quality: "partial",
            points: 5,
            consequence:
              "Your report confirms the model ran as designed. Technically accurate, but it misses the deeper question: were the design assumptions adequate for the observed market conditions? The ALM team accepts the report, but the same vulnerability remains unaddressed.",
            examinerNote:
              "Running as designed is necessary but not sufficient. FHFA expects validation to assess whether model assumptions remain appropriate given current conditions — not just whether the code executed correctly. This response lacks outcomes analysis depth.",
            evidenceNeeded: [
              "Model execution confirmation only",
              "No outcomes analysis against realized data",
              "No assumption adequacy assessment"
            ]
          },
          {
            id: "rs-s2-c3",
            label: "Ask the model developer to self-review and report back",
            quality: "weak",
            points: -10,
            consequence:
              "The developer confirms their own model is fine. This creates an obvious conflict of interest that examiners will identify immediately. No independent challenge has occurred, and the assumption vulnerability persists.",
            examinerNote:
              "Self-review by model developers is explicitly counter to SR 11-7's effective challenge requirements. Independent validation must be performed by parties with no development stake. This finding would likely result in a Matter Requiring Attention.",
            evidenceNeeded: [
              "Developer self-review only — no independent challenge",
              "Conflict of interest in validation process",
              "No effective challenge evidence"
            ]
          }
        ]
      },
      {
        id: "rs-s3",
        title: "Override Decision Authority",
        narrative:
          "Based on the review findings, the recalibrated model produces outputs that differ materially from the original projections. The CFO wants to use the original outputs for a regulatory filing due tomorrow, arguing the recalibrated model hasn't been fully validated yet. Your model risk officer must decide how to handle this override request.",
        question: "How do you handle the CFO's request to override the model risk recommendation?",
        choices: [
          {
            id: "rs-s3-c1",
            label: "Document the override request formally, require CFO sign-off with risk acceptance, escalate to board risk committee",
            quality: "strong",
            points: 25,
            consequence:
              "The CFO signs the risk acceptance. The filing goes forward with the original outputs, but the override is fully documented with rationale, risk quantification, and board notification. When examiners review this event, they see a governance framework that worked as designed.",
            examinerNote:
              "Model output overrides are acceptable when they follow a documented protocol with appropriate authority levels, risk acceptance signatures, and board visibility. FHFA expects override governance to be pre-defined — not improvised in the moment.",
            evidenceNeeded: [
              "Formal override request with business rationale",
              "CFO risk acceptance signature and date",
              "Board risk committee notification record",
              "Risk quantification of using original vs. recalibrated outputs"
            ]
          },
          {
            id: "rs-s3-c2",
            label: "Allow the override verbally and plan to document it after the filing deadline",
            quality: "partial",
            points: 0,
            consequence:
              "The filing goes forward. Documentation happens three days later, but key details about the decision rationale are already fuzzy. The override record exists but lacks contemporaneous evidence of the risk assessment that informed the decision.",
            examinerNote:
              "After-the-fact documentation of override decisions undermines their evidentiary value. Examiners assess whether governance controls operate in real time — not whether institutions can reconstruct narratives after the fact.",
            evidenceNeeded: [
              "Override documentation created after the decision",
              "Rationale reconstructed from memory",
              "No contemporaneous risk assessment"
            ]
          },
          {
            id: "rs-s3-c3",
            label: "Comply with the CFO's request without documentation since it's a time-sensitive business decision",
            quality: "weak",
            points: -15,
            consequence:
              "The filing uses original outputs with no record of the model risk concern or override. When examiners discover the divergence between original and recalibrated outputs months later, there is no evidence that model risk management was involved in the decision.",
            examinerNote:
              "Undocumented overrides are among the most serious governance findings. They suggest that model risk management lacks the authority or willingness to enforce controls under pressure — precisely the conditions where governance matters most.",
            evidenceNeeded: [
              "No override record exists",
              "No risk acceptance documentation",
              "No evidence of model risk involvement in the decision"
            ]
          }
        ]
      },
      {
        id: "rs-s4",
        title: "Post-Event Documentation",
        narrative:
          "The immediate crisis has passed. The recalibrated model is undergoing full validation, and the board has been briefed. Now you need to document the entire event for governance records, examiner readiness, and process improvement. Your team has one week to produce the post-event package.",
        question: "How do you approach the post-event documentation and process improvement?",
        choices: [
          {
            id: "rs-s4-c1",
            label: "Produce a comprehensive event report with timeline, decisions, evidence gaps, and remediation plan with deadlines",
            quality: "strong",
            points: 25,
            consequence:
              "Your event report becomes a reference document for the institution. It includes a minute-by-minute decision timeline, links to all evidence artifacts, identifies two process gaps, and sets 30/60/90-day remediation milestones. The board risk committee endorses the remediation plan.",
            examinerNote:
              "This demonstrates mature governance. Examiners value post-event reviews that go beyond what happened to address why it happened and what will change. The remediation plan with specific milestones shows the institution learns from governance stress events.",
            evidenceNeeded: [
              "Comprehensive event timeline with decision points",
              "Linked evidence artifacts for each decision",
              "Gap analysis with root cause identification",
              "Remediation plan with milestones and accountable owners"
            ]
          },
          {
            id: "rs-s4-c2",
            label: "Write a summary memo describing what happened and file it in the model governance repository",
            quality: "partial",
            points: 10,
            consequence:
              "The memo captures the key facts but lacks the analytical depth that would drive process improvement. It describes events without linking to specific evidence artifacts or identifying systemic gaps. The repository has the document, but it's a narrative rather than an actionable governance record.",
            examinerNote:
              "Summary memos are better than nothing but fall short of examiner expectations for material model events. FHFA and SR 11-7 expect event documentation to include traceable evidence, root cause analysis, and forward-looking remediation — not just a retrospective narrative.",
            evidenceNeeded: [
              "Summary memo without evidence linkage",
              "Narrative description without root cause analysis",
              "No remediation plan or milestones"
            ]
          },
          {
            id: "rs-s4-c3",
            label: "Move on to the next priority — the event is resolved and the model is being recalibrated",
            quality: "weak",
            points: -15,
            consequence:
              "No post-event documentation is produced. When examiners request the event file six months later, your team scrambles to reconstruct the timeline from emails and meeting notes. Key decision rationale is lost, and the institution cannot demonstrate that it learned from the event.",
            examinerNote:
              "Failure to document material model events is a significant governance deficiency. Examiners will question whether the institution's governance framework includes post-event review requirements — and if it does, why they weren't followed.",
            evidenceNeeded: [
              "No event documentation exists",
              "No lessons learned or process improvement",
              "Governance gap in post-event review requirements"
            ]
          }
        ]
      }
    ],
    bestPracticePathIds: ["rs-s1-c1", "rs-s2-c1", "rs-s3-c1", "rs-s4-c1"],
    evidenceMap: [
      {
        category: "Escalation and Triage",
        items: [
          "Escalation notification log with timestamps",
          "Model output freeze authorization",
          "Committee convening records"
        ],
        sasCapability: "SAS Model Risk Management: escalation workflow tracking and notification audit trail"
      },
      {
        category: "Validation and Outcomes Analysis",
        items: [
          "Backtesting results against realized outcomes",
          "Assumption gap analysis",
          "Formal findings memo with severity"
        ],
        sasCapability: "SAS Model Risk Management + SAS Model Manager: validation artifact linkage and findings tracking"
      },
      {
        category: "Override Governance",
        items: [
          "Override request with business rationale",
          "Risk acceptance signature",
          "Board notification record"
        ],
        sasCapability: "SAS Model Risk Management: override workflow with approval chain and risk acceptance documentation"
      },
      {
        category: "Post-Event Documentation",
        items: [
          "Event timeline with decision links",
          "Root cause and gap analysis",
          "Remediation plan with milestones"
        ],
        sasCapability: "SAS Model Risk Management: issue management and remediation tracking with milestone governance"
      }
    ]
  },
  {
    id: "ai-vendor",
    title: "The Third-Party AI Vendor",
    subtitle: "Governing an externally developed AI model",
    context:
      "Your institution is evaluating a third-party AI vendor's credit decisioning model for use in consumer lending. The vendor claims the model outperforms your internal scorecard by 18% on approval rates with equivalent default rates. The vendor offers limited model documentation, citing proprietary IP. Your model risk team must establish governance controls before any production deployment.",
    steps: [
      {
        id: "av-s1",
        title: "Initial Due Diligence",
        narrative:
          "The business line is eager to move forward with the vendor's model. They've already signed a pilot agreement. Your model risk team receives the vendor's documentation package: a 12-page model overview, performance statistics on the vendor's test data, and a statement that the model uses 'advanced machine learning techniques.' No feature list, no training data description, no methodology details.",
        question: "How do you approach the initial due diligence on the vendor model?",
        choices: [
          {
            id: "av-s1-c1",
            label: "Require full model documentation including methodology, features, training data profile, and performance validation on your data before proceeding",
            quality: "strong",
            points: 25,
            consequence:
              "The vendor pushes back initially but agrees to provide enhanced documentation within 30 days. Your team receives a detailed methodology paper, feature importance rankings, training data demographics, and agrees to a validation exercise using your institution's data. The business line accepts the delay.",
            examinerNote:
              "Third-party model governance requires the same evidentiary standards as internal models. SR 11-7 and FHFA do not provide exceptions for vendor IP claims. Institutions must be able to demonstrate conceptual soundness and performance adequacy regardless of model origin.",
            evidenceNeeded: [
              "Vendor documentation completeness assessment",
              "Methodology review and conceptual soundness evaluation",
              "Independent validation plan using institution data",
              "Feature and training data profile documentation"
            ]
          },
          {
            id: "av-s1-c2",
            label: "Accept the vendor documentation as provided and supplement with your own testing during the pilot",
            quality: "partial",
            points: 5,
            consequence:
              "Your team proceeds with limited understanding of the model's inner workings. Pilot testing reveals reasonable performance, but you cannot assess whether the model's methodology is appropriate for your population or whether its assumptions hold for your lending context.",
            examinerNote:
              "Supplemental testing without conceptual soundness review is insufficient. Examiners expect institutions to understand what a model does and why before testing whether it works. Performance alone does not satisfy SR 11-7 validation requirements.",
            evidenceNeeded: [
              "Vendor documentation accepted without completeness review",
              "No independent conceptual soundness assessment",
              "Pilot testing without methodology understanding"
            ]
          },
          {
            id: "av-s1-c3",
            label: "Trust the vendor's track record — they serve 50 other institutions and have never had a regulatory issue",
            quality: "weak",
            points: -10,
            consequence:
              "Your institution has no independent assessment of the model. When examiners ask about the model's methodology, feature selection, and performance on your specific population, your team cannot answer. The examiner cites both a documentation deficiency and a governance process failure.",
            examinerNote:
              "Vendor reputation is not a substitute for independent validation. Each institution is responsible for its own model risk governance regardless of how many other institutions use the same vendor. This is a fundamental SR 11-7 principle.",
            evidenceNeeded: [
              "No independent model assessment",
              "Reliance on vendor reputation without evidence",
              "No documentation of governance decision rationale"
            ]
          }
        ]
      },
      {
        id: "av-s2",
        title: "Fairness and Bias Assessment",
        narrative:
          "The vendor's enhanced documentation reveals the model uses alternative data sources including utility payment history and rental payment data. Your fair lending officer flags that these features may have disparate impact across protected classes. The vendor states they've 'tested for bias' but provides only a one-page summary showing overall approval rates by race category.",
        question: "How do you assess the model's fairness and potential for disparate impact?",
        choices: [
          {
            id: "av-s2-c1",
            label: "Conduct independent fairness testing on your data with multiple metrics, segment analysis, and feature-level impact assessment",
            quality: "strong",
            points: 25,
            consequence:
              "Your testing reveals that while overall approval rates are within acceptable ranges, the model produces statistically significant disparate impact for two subgroups in specific product segments. You document the findings, quantify the impact, and develop mitigation options before any production decision.",
            examinerNote:
              "Independent fairness testing with granular analysis is exactly what Colorado 10-1-1 and NIST AI RMF expect. Overall rates can mask segment-level disparities. Examiners want to see that institutions test at the level where harm occurs — not just at aggregate levels.",
            evidenceNeeded: [
              "Independent fairness test results with multiple metrics",
              "Segment-level disparate impact analysis",
              "Feature contribution to group outcome differences",
              "Mitigation options analysis and recommendation"
            ]
          },
          {
            id: "av-s2-c2",
            label: "Review the vendor's bias testing summary and request they run additional tests on your data",
            quality: "partial",
            points: 5,
            consequence:
              "The vendor runs additional tests and reports that all metrics are within their internal thresholds. However, you lack visibility into their testing methodology, threshold choices, and segment definitions. Your reliance on the vendor's assessment creates a governance dependency that examiners will question.",
            examinerNote:
              "Delegating fairness assessment to the model vendor creates both a conflict of interest and a capability gap. The vendor has incentive to produce favorable results. Institutions must retain the ability to independently assess fairness — even for vendor models.",
            evidenceNeeded: [
              "Vendor-provided bias testing with limited methodology transparency",
              "No independent fairness assessment by institution",
              "Governance dependency on vendor for fairness conclusions"
            ]
          },
          {
            id: "av-s2-c3",
            label: "Accept the vendor's bias testing summary — they are the model experts and fairness testing is their responsibility",
            quality: "weak",
            points: -15,
            consequence:
              "Your institution deploys the model with no independent fairness assessment. A consumer complaint triggers a regulatory review that finds disparate impact in a specific product segment. Your institution cannot demonstrate that it performed any independent fairness evaluation before deployment.",
            examinerNote:
              "Fairness accountability cannot be outsourced to vendors. Colorado 10-1-1 requires the deploying institution to govern and test for unfair discrimination. Accepting a vendor's self-assessment without independent verification is a significant governance deficiency.",
            evidenceNeeded: [
              "No independent fairness testing performed",
              "Vendor self-assessment accepted without challenge",
              "No fair lending governance documentation for vendor model"
            ]
          }
        ]
      },
      {
        id: "av-s3",
        title: "Explainability Requirements",
        narrative:
          "The model is a gradient-boosted ensemble that the vendor describes as 'high-performing but complex.' When asked about explainability, the vendor offers SHAP-based feature importance at the model level but states that individual-level explanations are 'not part of the standard package' and would require additional licensing fees. Your compliance team notes that adverse action notice requirements demand individual-level reason codes.",
        question: "How do you address the explainability gap for adverse action compliance?",
        choices: [
          {
            id: "av-s3-c1",
            label: "Require individual-level explanations as a contractual condition, validate explanation quality, and build adverse action mapping",
            quality: "strong",
            points: 25,
            consequence:
              "The vendor agrees to provide individual SHAP values as part of the production API. Your team validates that the explanations are consistent, meaningful, and map correctly to adverse action reason codes. The additional cost is justified by the compliance requirement and documented in the vendor governance file.",
            examinerNote:
              "Individual-level explainability is a regulatory requirement for credit decisions, not an optional feature. Examiners expect institutions to contractually require the explanatory outputs needed for compliance — and to validate that those outputs are accurate and meaningful.",
            evidenceNeeded: [
              "Contractual requirement for individual explanations",
              "Explanation quality validation results",
              "Adverse action reason code mapping documentation",
              "Explanation consistency testing across population segments"
            ]
          },
          {
            id: "av-s3-c2",
            label: "Use the model-level feature importance to create a static reason code mapping table",
            quality: "partial",
            points: 0,
            consequence:
              "Your static mapping provides reason codes that are directionally correct but don't reflect individual applicant circumstances. A compliance review finds that 15% of adverse action notices cite reasons that don't correspond to the actual drivers of the individual's denial.",
            examinerNote:
              "Static reason code mappings from aggregate feature importance are a known compliance risk. Regulators expect reason codes to reflect the specific factors that affected each individual decision. Aggregate proxies do not meet this standard.",
            evidenceNeeded: [
              "Static mapping based on aggregate feature importance",
              "No individual-level explanation validation",
              "Adverse action accuracy not tested at individual level"
            ]
          },
          {
            id: "av-s3-c3",
            label: "Proceed without individual explanations — the model's overall performance justifies its use",
            quality: "weak",
            points: -15,
            consequence:
              "Your institution cannot produce compliant adverse action notices. A regulatory examination identifies this as a violation of fair lending requirements. The model must be pulled from production pending remediation, causing significant business disruption and reputational damage.",
            examinerNote:
              "Deploying a credit decisioning model without adequate explainability for adverse action compliance is a clear regulatory violation. Model performance does not override compliance requirements. This finding would likely result in enforcement action.",
            evidenceNeeded: [
              "No explainability solution implemented",
              "Adverse action compliance gap not addressed",
              "No governance assessment of regulatory requirement"
            ]
          }
        ]
      },
      {
        id: "av-s4",
        title: "Ongoing Monitoring Plan",
        narrative:
          "The model has passed validation and fairness review with conditions. Before production deployment, you need to establish an ongoing monitoring plan. The vendor offers a 'monitoring dashboard' that shows aggregate model performance metrics updated monthly. Your model risk team must decide what monitoring framework to implement.",
        question: "How do you structure the ongoing monitoring plan for the vendor model?",
        choices: [
          {
            id: "av-s4-c1",
            label: "Build an independent monitoring framework with drift detection, fairness monitoring, performance tracking, and defined escalation triggers",
            quality: "strong",
            points: 25,
            consequence:
              "Your monitoring framework detects a data drift event at month 4 that the vendor's dashboard misses entirely. Your escalation protocol triggers a performance review that identifies a 3% degradation in a specific segment. Early detection allows remediation before the impact becomes material.",
            examinerNote:
              "Independent monitoring is essential for vendor models. Relying solely on vendor-provided monitoring creates a single point of failure and a governance dependency. FHFA and SR 11-7 expect institutions to maintain independent monitoring capability for all production models.",
            evidenceNeeded: [
              "Independent monitoring framework documentation",
              "Drift detection configuration and thresholds",
              "Fairness monitoring plan with segment-level tracking",
              "Escalation trigger definitions and response protocols"
            ]
          },
          {
            id: "av-s4-c2",
            label: "Use the vendor's monitoring dashboard supplemented with quarterly performance reviews by your team",
            quality: "partial",
            points: 5,
            consequence:
              "The vendor dashboard provides useful aggregate metrics but lacks the granularity to detect segment-level issues. Your quarterly reviews catch a fairness drift at month 9 — five months after it began. The delayed detection means the impact has already affected a significant number of decisions.",
            examinerNote:
              "Quarterly review cadence for a high-materiality vendor model is likely insufficient. Examiners expect monitoring frequency to match model risk materiality. For credit decisioning models with fairness implications, monthly or continuous monitoring is the expected standard.",
            evidenceNeeded: [
              "Vendor dashboard as primary monitoring source",
              "Quarterly supplemental review schedule",
              "No real-time or monthly independent monitoring",
              "Delayed detection documentation"
            ]
          },
          {
            id: "av-s4-c3",
            label: "Rely on the vendor's monitoring dashboard — they have more experience monitoring their own model",
            quality: "weak",
            points: -10,
            consequence:
              "The vendor's dashboard shows 'green' status for 11 months. When your annual review team examines the underlying data, they find significant performance degradation and fairness drift that the vendor's aggregate metrics obscured. The model has been producing suboptimal and potentially discriminatory outcomes for nearly a year.",
            examinerNote:
              "Complete reliance on vendor monitoring for a production credit model is a governance failure. The institution bears regulatory responsibility for model outcomes regardless of vendor monitoring. Examiners will cite this as both a monitoring and an oversight deficiency.",
            evidenceNeeded: [
              "No independent monitoring capability",
              "Complete reliance on vendor-provided metrics",
              "No escalation triggers under institution control"
            ]
          }
        ]
      }
    ],
    bestPracticePathIds: ["av-s1-c1", "av-s2-c1", "av-s3-c1", "av-s4-c1"],
    evidenceMap: [
      {
        category: "Vendor Due Diligence",
        items: [
          "Documentation completeness assessment",
          "Methodology review and conceptual soundness",
          "Independent validation on institution data"
        ],
        sasCapability: "SAS Model Risk Management: vendor model registration, documentation tracking, and validation workflow"
      },
      {
        category: "Fairness and Bias Governance",
        items: [
          "Independent fairness test results",
          "Segment-level disparate impact analysis",
          "Mitigation options and decisions"
        ],
        sasCapability: "SAS Viya: fairness and bias testing pipelines with protected-group analysis and evidence retention"
      },
      {
        category: "Explainability and Compliance",
        items: [
          "Individual explanation validation results",
          "Adverse action reason code mapping",
          "Explanation consistency testing"
        ],
        sasCapability: "SAS Viya: SHAP-based explainability with individual-level outputs and compliance mapping"
      },
      {
        category: "Ongoing Monitoring",
        items: [
          "Independent monitoring framework",
          "Drift detection and escalation triggers",
          "Fairness monitoring with segment tracking"
        ],
        sasCapability: "SAS Model Manager + SAS Viya: continuous monitoring, alert routing, and performance tracking"
      }
    ]
  },
  {
    id: "exam-finding",
    title: "The Exam Finding",
    subtitle: "Responding to a regulatory examination finding",
    context:
      "Your institution has received a Matter Requiring Attention (MRA) from examiners citing 'insufficient model governance documentation and evidence for three high-materiality models.' The finding specifically notes gaps in validation evidence, monitoring documentation, and lineage traceability. You have 90 days to respond with a remediation plan and evidence of progress.",
    steps: [
      {
        id: "ef-s1",
        title: "Root Cause Analysis",
        narrative:
          "The MRA covers three models: a credit scoring model, an ALM interest rate model, and a fraud detection model. Each has different documentation gaps. Your governance team must determine whether these are isolated documentation failures or symptoms of a systemic governance weakness before developing the remediation approach.",
        question: "How do you approach the root cause analysis of the examination finding?",
        choices: [
          {
            id: "ef-s1-c1",
            label: "Conduct a systematic review across all model governance processes to identify common root causes and systemic gaps",
            quality: "strong",
            points: 25,
            consequence:
              "Your systematic review reveals that the three cited models share common root causes: no standardized evidence template, inconsistent validation scheduling, and fragmented ownership of monitoring outputs. You also identify four additional models with similar gaps — catching them before the next exam cycle.",
            examinerNote:
              "Examiners value root cause analysis that goes beyond the specific finding to assess systemic conditions. Identifying additional at-risk models proactively demonstrates governance maturity and reduces the likelihood of repeat findings in subsequent examination cycles.",
            evidenceNeeded: [
              "Systematic governance process review methodology",
              "Root cause analysis with common factor identification",
              "Cross-model gap assessment results",
              "Proactive identification of additional at-risk models"
            ]
          },
          {
            id: "ef-s1-c2",
            label: "Analyze each of the three cited models individually to understand their specific documentation gaps",
            quality: "partial",
            points: 10,
            consequence:
              "Your model-by-model analysis correctly identifies the documentation gaps for each cited model. However, you miss the systemic pattern. Your remediation plan addresses the three models but doesn't prevent similar gaps from occurring in other models. The next exam cycle identifies two additional models with the same issues.",
            examinerNote:
              "Model-specific analysis is necessary but not sufficient when multiple models share similar findings. Examiners expect institutions to assess whether findings indicate systemic governance weaknesses — not just isolated documentation gaps.",
            evidenceNeeded: [
              "Individual model gap analysis for three cited models",
              "No systemic assessment across model inventory",
              "Remediation scoped to cited models only"
            ]
          },
          {
            id: "ef-s1-c3",
            label: "Focus immediately on producing the missing documentation for the three cited models to meet the 90-day deadline",
            quality: "weak",
            points: -10,
            consequence:
              "Your team produces documentation quickly but without understanding why the gaps existed. The new documentation meets minimum requirements but doesn't address the underlying process failures. Examiners note in their follow-up review that the institution 'addressed symptoms without diagnosing the underlying governance condition.'",
            examinerNote:
              "Producing documentation without root cause analysis is a band-aid approach. Examiners specifically look for evidence that institutions understand why governance failures occurred — not just that they can produce paperwork when pressured. This response pattern often leads to repeat MRAs.",
            evidenceNeeded: [
              "Documentation produced under deadline pressure",
              "No root cause analysis",
              "No process improvement plan"
            ]
          }
        ]
      },
      {
        id: "ef-s2",
        title: "Evidence Reconstruction",
        narrative:
          "Your root cause analysis is complete. Now you need to reconstruct the missing evidence for the three cited models while building the documentation infrastructure to prevent recurrence. The validation team has partial records in emails and shared drives, but nothing is linked to the model governance repository.",
        question: "How do you approach evidence reconstruction and infrastructure remediation?",
        choices: [
          {
            id: "ef-s2-c1",
            label: "Reconstruct evidence with clear provenance markers, build a centralized evidence repository, and establish linkage protocols",
            quality: "strong",
            points: 25,
            consequence:
              "Your team reconstructs evidence with explicit provenance markers indicating what was created contemporaneously vs. what was assembled retroactively. The centralized repository links validation artifacts, monitoring outputs, and approval records to each model. New linkage protocols ensure evidence is captured at the point of creation going forward.",
            examinerNote:
              "Transparency about evidence provenance is critical. Examiners can distinguish contemporaneous evidence from retroactive assembly — institutions that are transparent about this distinction earn credibility. Building infrastructure for ongoing evidence capture demonstrates commitment to sustainable governance.",
            evidenceNeeded: [
              "Reconstructed evidence with provenance classification",
              "Centralized evidence repository with model linkage",
              "Evidence capture protocols for ongoing governance",
              "Provenance transparency documentation"
            ]
          },
          {
            id: "ef-s2-c2",
            label: "Gather existing evidence from emails and shared drives, organize it into model folders, and fill gaps with new documentation",
            quality: "partial",
            points: 5,
            consequence:
              "Your evidence package is reasonably complete but organized in file folders rather than a governed repository. Evidence linkage to specific model records is manual, and there's no automated protocol for capturing new evidence. The approach works for the 90-day response but doesn't scale.",
            examinerNote:
              "File-based evidence organization meets minimum requirements but is fragile and hard to maintain. Examiners prefer to see evidence management systems that provide traceable linkage, version control, and automated capture — not manual folder structures that degrade over time.",
            evidenceNeeded: [
              "Evidence gathered from disparate sources",
              "Manual organization in folder structure",
              "Gap-filling documentation without provenance distinction",
              "No systematic evidence capture protocol"
            ]
          },
          {
            id: "ef-s2-c3",
            label: "Create new documentation packages for each model that present the current state as if governance was always in place",
            quality: "weak",
            points: -15,
            consequence:
              "Your documentation packages look comprehensive on the surface but contain retroactive documentation presented as if it were contemporaneous. When examiners request metadata and timestamps, the fabrication becomes apparent. This transforms a documentation deficiency into a credibility issue.",
            examinerNote:
              "Presenting retroactive documentation as contemporaneous evidence is a serious integrity concern. Examiners are trained to verify evidence provenance. This approach can escalate a documentation MRA into a conduct finding that damages the institution's supervisory relationship.",
            evidenceNeeded: [
              "Retroactive documentation without provenance markers",
              "Evidence integrity concerns",
              "Examiner credibility risk"
            ]
          }
        ]
      },
      {
        id: "ef-s3",
        title: "Process Remediation",
        narrative:
          "With evidence reconstruction underway, you need to fix the processes that led to the gaps. Your governance team has identified three root causes: no standardized validation templates, no automated monitoring evidence capture, and unclear ownership of evidence packaging. You need to decide on the remediation approach.",
        question: "How do you structure the process remediation to prevent recurrence?",
        choices: [
          {
            id: "ef-s3-c1",
            label: "Implement standardized templates, automated evidence capture workflows, and clear RACI with accountability checkpoints",
            quality: "strong",
            points: 25,
            consequence:
              "Your remediation plan addresses all three root causes with specific solutions: validation templates with mandatory fields, automated monitoring evidence capture linked to model records, and a RACI matrix with quarterly accountability reviews. The 30/60/90-day milestones show measurable progress at each checkpoint.",
            examinerNote:
              "Process remediation that addresses identified root causes with specific, measurable solutions demonstrates governance maturity. Examiners look for evidence that remediation plans are actionable — not aspirational — with defined milestones and accountable owners.",
            evidenceNeeded: [
              "Standardized validation templates with mandatory fields",
              "Automated evidence capture workflow documentation",
              "RACI matrix with accountability checkpoint schedule",
              "30/60/90-day milestone plan with measurable outcomes"
            ]
          },
          {
            id: "ef-s3-c2",
            label: "Update governance policies to require better documentation and communicate the new expectations to model owners",
            quality: "partial",
            points: 5,
            consequence:
              "Your updated policies are well-written but rely on model owners to change their behavior without providing new tools or accountability mechanisms. Compliance improves modestly in the first quarter but degrades as initial attention fades. The root causes persist under the new policy language.",
            examinerNote:
              "Policy updates without operational changes are a common remediation weakness. Examiners evaluate whether remediation changes actual practice — not just written policy. Process changes need tooling, training, and accountability to be effective.",
            evidenceNeeded: [
              "Updated governance policy documents",
              "Communication records to model owners",
              "No operational process changes implemented",
              "No accountability or enforcement mechanism"
            ]
          },
          {
            id: "ef-s3-c3",
            label: "Assign a temporary documentation task force to manually ensure evidence is captured for each model going forward",
            quality: "weak",
            points: -5,
            consequence:
              "The task force works diligently for 60 days, then members return to their primary roles. Evidence capture reverts to its prior fragmented state within two quarters. The next examination finds that while the specific cited models are now documented, the systemic process gaps remain.",
            examinerNote:
              "Temporary task forces for permanent governance requirements signal that the institution hasn't invested in sustainable solutions. Examiners expect remediation to produce lasting process changes — not temporary staffing responses that dissolve when attention shifts.",
            evidenceNeeded: [
              "Temporary task force charter and activity logs",
              "No permanent process changes implemented",
              "Remediation sustainability risk documented"
            ]
          }
        ]
      },
      {
        id: "ef-s4",
        title: "Governance Framework Update",
        narrative:
          "Your 90-day remediation plan is taking shape. The final step is to update your institution's overall governance framework to incorporate the lessons learned and ensure the remediation is embedded in permanent governance operations. The board risk committee has asked for a framework update recommendation.",
        question: "How do you update the governance framework to embed the remediation permanently?",
        choices: [
          {
            id: "ef-s4-c1",
            label: "Propose a comprehensive framework update with enhanced evidence standards, automated controls, annual effectiveness testing, and board reporting",
            quality: "strong",
            points: 25,
            consequence:
              "Your framework update integrates remediation into the permanent governance structure. Enhanced evidence standards are codified in policy, automated controls are implemented in the model risk management system, annual effectiveness testing is scheduled, and the board receives quarterly governance health reports. Examiners note this as a model response to an MRA.",
            examinerNote:
              "Turning an MRA into a governance framework improvement demonstrates institutional learning. Examiners specifically look for evidence that examination findings drive permanent governance enhancements — not just remediation of the specific finding. This response pattern builds supervisory confidence.",
            evidenceNeeded: [
              "Updated governance framework document",
              "Enhanced evidence standards codified in policy",
              "Automated control implementation documentation",
              "Annual effectiveness testing plan",
              "Board reporting template and schedule"
            ]
          },
          {
            id: "ef-s4-c2",
            label: "Add the remediation items to the existing framework as appendices and schedule an annual review",
            quality: "partial",
            points: 5,
            consequence:
              "The remediation items are documented as framework appendices, which technically updates the governance framework. However, the appendix approach means the remediation requirements are treated as additions rather than core governance practices. Over time, the appendices receive less attention than the main framework.",
            examinerNote:
              "Appendix-based framework updates suggest the institution views remediation as additive rather than foundational. Examiners prefer to see remediation integrated into the core governance framework — not bolted on as supplementary material.",
            evidenceNeeded: [
              "Framework appendices with remediation items",
              "Annual review schedule",
              "No integration into core governance processes",
              "Remediation treated as supplementary"
            ]
          },
          {
            id: "ef-s4-c3",
            label: "Keep the current framework and rely on the remediation plan to address the specific gaps",
            quality: "weak",
            points: -10,
            consequence:
              "The remediation plan addresses the immediate finding, but the governance framework that produced the gaps remains unchanged. Examiners note in their follow-up assessment that the institution 'remediated the finding without addressing the framework conditions that produced it.' The MRA is downgraded but not closed.",
            examinerNote:
              "Remediation without framework improvement is a partial response at best. Examiners assess whether institutions learn from findings and improve their governance infrastructure — not just whether they fix the specific items cited. Keeping the same framework that produced the failures is a risk acceptance decision that should be explicitly documented.",
            evidenceNeeded: [
              "Remediation plan without framework update",
              "Governance framework unchanged",
              "No institutional learning documentation"
            ]
          }
        ]
      }
    ],
    bestPracticePathIds: ["ef-s1-c1", "ef-s2-c1", "ef-s3-c1", "ef-s4-c1"],
    evidenceMap: [
      {
        category: "Root Cause Analysis",
        items: [
          "Systematic governance process review",
          "Common root cause identification",
          "Cross-model gap assessment"
        ],
        sasCapability: "SAS Model Risk Management: model inventory analysis, gap identification, and issue categorization"
      },
      {
        category: "Evidence Management",
        items: [
          "Centralized evidence repository",
          "Provenance-classified evidence artifacts",
          "Evidence capture protocols"
        ],
        sasCapability: "SAS Model Risk Management + SAS Information Governance: linked evidence repository with metadata and lineage"
      },
      {
        category: "Process Remediation",
        items: [
          "Standardized validation templates",
          "Automated evidence capture workflows",
          "RACI matrix with accountability checkpoints"
        ],
        sasCapability: "SAS Model Risk Management: configurable workflow templates, automated capture, and role-based accountability"
      },
      {
        category: "Framework Governance",
        items: [
          "Updated governance framework",
          "Annual effectiveness testing plan",
          "Board governance health reporting"
        ],
        sasCapability: "SAS Model Risk Management: governance reporting, policy compliance tracking, and board-level dashboards"
      }
    ]
  }
];

const GOVERNANCE_FAILURE_SCENARIOS = [
  {
    id: "fm-001",
    linkId: "models-owners",
    title: "Model -> Owners accountability break",
    whatBreaks:
      "Model change approvals and exception decisions become delayed or unowned, increasing operational and supervisory risk.",
    example:
      "Advance pricing model ownership was not reassigned after a quantitative lead departed, leaving rate-change overrides unmanaged for two cycles.",
    examinerQuestion:
      "Show current accountable owner, backup approver, and evidence that role transition controls executed at the point of departure.",
    sasPrevention:
      "SAS Model Risk Management ownership tracking, role-based workflow routing, and automated escalation for unresolved ownership assignments.",
    cascade: ["owners-evidence", "controls-evidence"],
    stressTags: ["staff-turnover", "regulatory-exam"]
  },
  {
    id: "fm-002",
    linkId: "models-data",
    title: "Model -> Data alignment break",
    whatBreaks:
      "Input assumptions and production data definitions diverge, producing unstable outputs and weakened reproducibility.",
    example:
      "Collateral concentration features changed in source systems, but model assumptions remained tied to prior field definitions.",
    examinerQuestion:
      "How do you verify model input definitions remain aligned to current source data structures and governance standards?",
    sasPrevention:
      "SAS Information Governance lineage with metadata drift monitoring and change alerts linked to model records.",
    cascade: ["data-controls", "controls-evidence"],
    stressTags: ["rate-shock", "member-default-surge"]
  },
  {
    id: "fm-003",
    linkId: "data-controls",
    title: "Data -> Controls break",
    whatBreaks:
      "Monitoring thresholds and validation checks run on stale or incomplete data controls, reducing control effectiveness.",
    example:
      "Member delinquency feed latency increased during default surge; monitoring thresholds continued using prior-day snapshots.",
    examinerQuestion:
      "Which controls detect source-feed timeliness degradation and how does that alter model decision eligibility?",
    sasPrevention:
      "SAS Model Manager monitoring policies plus SAS Information Governance quality flags feeding governance exception workflows.",
    cascade: ["models-controls", "controls-evidence"],
    stressTags: ["member-default-surge"]
  },
  {
    id: "fm-004",
    linkId: "models-controls",
    title: "Model -> Controls break",
    whatBreaks:
      "Material model changes can bypass approval gates or run without updated control thresholds and documented risk acceptance.",
    example:
      "A revised prepayment model was promoted under emergency timing without full approval evidence or updated drift thresholds.",
    examinerQuestion:
      "Show the approval and promotion trail proving no model version entered production without required governance controls.",
    sasPrevention:
      "SAS Model Manager version governance with approval gates and promotion history linked to SAS Model Risk Management issues.",
    cascade: ["controls-evidence"],
    stressTags: ["rate-shock", "regulatory-exam"]
  },
  {
    id: "fm-005",
    linkId: "controls-evidence",
    title: "Controls -> Evidence break",
    whatBreaks:
      "Control execution occurs, but evidence artifacts are missing or not attributable to specific decisions and review periods.",
    example:
      "Quarterly monitoring tests were completed, but logs lacked decision IDs and could not support examiner trace requests.",
    examinerQuestion:
      "Can you produce complete control execution evidence mapped to model decisions for the exact review period requested?",
    sasPrevention:
      "SAS Model Risk Management evidence bundles with automated artifact attachment and period-based retrieval.",
    cascade: ["owners-evidence"],
    stressTags: ["regulatory-exam"]
  },
  {
    id: "fm-006",
    linkId: "owners-evidence",
    title: "Owners -> Evidence break",
    whatBreaks:
      "Evidence completeness declines because accountable roles are unclear for collecting, attesting, and approving artifacts.",
    example:
      "Validation artifacts existed in team repositories but no designated owner assembled an examiner-ready package on schedule.",
    examinerQuestion:
      "Who is accountable for evidence pack completeness and where is attestation tracked for each model tier?",
    sasPrevention:
      "SAS Model Risk Management role-based attestations and evidence ownership dashboards.",
    cascade: ["controls-evidence"],
    stressTags: ["staff-turnover", "regulatory-exam"]
  },
  {
    id: "fm-007",
    linkId: "models-owners",
    title: "Use-case expansion without ownership reset",
    whatBreaks:
      "Model is reused in higher-impact decisions without updating governance ownership and oversight obligations.",
    example:
      "Liquidity stress model began informing contingency funding actions, but governance owner remained unchanged from exploratory phase.",
    examinerQuestion:
      "Show governance reassessment triggered by expanded use-case criticality and resulting ownership/control updates.",
    sasPrevention:
      "SAS Model Risk Management use-case governance triggers with mandatory ownership and tier reassessment workflows.",
    cascade: ["models-controls", "controls-evidence"],
    stressTags: ["rate-shock"]
  },
  {
    id: "fm-008",
    linkId: "models-data",
    title: "Synthetic data assumptions not documented",
    whatBreaks:
      "Testing confidence becomes overstated when synthetic training/testing datasets are not tied to documented assumptions.",
    example:
      "Synthetic portfolio stress data was used for validation, but design assumptions and representativeness evidence were absent.",
    examinerQuestion:
      "How do you evidence synthetic data design assumptions and their suitability for validation conclusions?",
    sasPrevention:
      "SAS Data Maker governance metadata linked to validation evidence records in SAS Model Risk Management.",
    cascade: ["controls-evidence"],
    stressTags: ["regulatory-exam"]
  },
  {
    id: "fm-009",
    linkId: "data-controls",
    title: "Lineage blind spot during infrastructure migration",
    whatBreaks:
      "Control teams lose visibility into upstream changes when lineage paths are not refreshed after platform migration.",
    example:
      "Treasury analytics pipeline migrated environments and upstream source mappings changed without lineage refresh.",
    examinerQuestion:
      "Demonstrate current end-to-end lineage and where migration-related control validations were captured.",
    sasPrevention:
      "SAS Information Governance automated lineage refresh and change-impact analysis routed to control owners.",
    cascade: ["models-controls", "controls-evidence"],
    stressTags: ["regulatory-exam", "member-default-surge"]
  },
  {
    id: "fm-010",
    linkId: "controls-evidence",
    title: "Threshold breaches without evidentiary closure",
    whatBreaks:
      "Alerts are generated but closure rationale and remediation evidence are not linked, creating unresolved supervisory exposure.",
    example:
      "Bias drift alert was acknowledged but closure documentation lacked remediation test evidence for two consecutive months.",
    examinerQuestion:
      "Show alert-to-remediation closure records, including evidence that corrective actions restored control effectiveness.",
    sasPrevention:
      "SAS Model Manager alert workflows tied to SAS Model Risk Management issue lifecycle and evidence closure checkpoints.",
    cascade: ["owners-evidence"],
    stressTags: ["regulatory-exam", "staff-turnover"]
  }
];

const GOVERNANCE_STRESS_SCENARIOS = [
  {
    id: "rate-shock",
    label: "Rate shock",
    atRiskLinks: ["models-data", "models-controls", "data-controls"],
    cascadeLinks: ["models-controls", "controls-evidence"],
    cascadeNarrative:
      "Rapid rate regime change increases data/model misalignment risk; if controls lag, evidence quality deteriorates quickly."
  },
  {
    id: "member-default-surge",
    label: "Member default surge",
    atRiskLinks: ["data-controls", "models-data", "controls-evidence"],
    cascadeLinks: ["data-controls", "models-controls", "controls-evidence"],
    cascadeNarrative:
      "Default-volume spikes pressure data timeliness and monitoring thresholds, which can propagate into control and evidence gaps."
  },
  {
    id: "regulatory-exam",
    label: "Regulatory exam",
    atRiskLinks: ["owners-evidence", "controls-evidence", "models-owners"],
    cascadeLinks: ["owners-evidence", "controls-evidence"],
    cascadeNarrative:
      "Exam pressure exposes ownership ambiguity and incomplete evidence linkage, often cascading into audit findings."
  },
  {
    id: "staff-turnover",
    label: "Staff turnover",
    atRiskLinks: ["models-owners", "owners-evidence", "models-controls"],
    cascadeLinks: ["models-owners", "owners-evidence", "controls-evidence"],
    cascadeNarrative:
      "Unplanned departures can orphan accountability and slow evidence assembly unless ownership controls are automated."
  }
];
