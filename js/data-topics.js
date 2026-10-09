// Topics, and how they map to the sections of each exam.
// cire / rse = the element of CIRO's 2026 proficiency exams (null = not a focus of that exam).
// cfa1 / cfa2 = the CFA Program topic area for Level I / Level II (each CFA topic belongs to one level).
window.TOPICS = [
  { id: "reg",        name: "Regulatory Framework",               icon: "🏛️", cire: "E1", rse: "R9" },
  { id: "onboard",    name: "Client Onboarding & AML",            icon: "🪪", cire: "E2", rse: "R1" },
  { id: "kyc",        name: "KYC & Suitability",                  icon: "🎯", cire: "E3", rse: "R1" },
  { id: "complaints", name: "Complaints & Client Reporting",      icon: "📨", cire: "E4", rse: "R9" },
  { id: "econ",       name: "Economics",                          icon: "📈", cire: "E5", rse: "R4" },
  { id: "fin",        name: "Company Analysis & Statements",      icon: "🧾", cire: "E5", rse: "R4" },
  { id: "trade",      name: "Orders, Accounts & Margin",          icon: "🔁", cire: "E6", rse: "R8" },
  { id: "umir",       name: "Market Integrity (UMIR)",            icon: "🛡️", cire: "E6", rse: "R8" },
  { id: "fixed",      name: "Fixed Income",                       icon: "💵", cire: "E7", rse: "R2" },
  { id: "equity",     name: "Equity Securities",                  icon: "📊", cire: "E7", rse: "R3" },
  { id: "funds",      name: "Mutual Funds & Managed Products",    icon: "🏦", cire: "E7", rse: "R5" },
  { id: "deriv",      name: "Derivatives",                        icon: "🔀", cire: "E8", rse: "R5" },
  { id: "port",       name: "Portfolio Construction",             icon: "🧺", cire: null, rse: "R6" },
  { id: "recs",       name: "Investment Recommendations",         icon: "💡", cire: "E3", rse: "R7" },
  { id: "tax",        name: "Taxation & Registered Plans",        icon: "🧮", cire: "E7", rse: "R7" },
  { id: "ethics",     name: "Conflicts of Interest & Ethics",     icon: "⚖️", cire: "E9", rse: "R1" },

  // CFA Program Level I, in the curriculum's topic order
  { id: "l1qm",  name: "Quantitative Methods",               icon: "🧮", cfa1: "QM" },
  { id: "l1eco", name: "Economics",                          icon: "🌐", cfa1: "ECO" },
  { id: "l1ci",  name: "Corporate Issuers",                  icon: "🏢", cfa1: "CI" },
  { id: "l1fsa", name: "Financial Statement Analysis",       icon: "🧾", cfa1: "FSA" },
  { id: "l1eq",  name: "Equity Investments",                 icon: "📈", cfa1: "EQ" },
  { id: "l1fi",  name: "Fixed Income",                       icon: "💵", cfa1: "FI" },
  { id: "l1der", name: "Derivatives",                        icon: "🔀", cfa1: "DER" },
  { id: "l1alt", name: "Alternative Investments",            icon: "🏗️", cfa1: "ALT" },
  { id: "l1pm",  name: "Portfolio Management",               icon: "🧺", cfa1: "PM" },
  { id: "l1eth", name: "Ethical and Professional Standards", icon: "⚖️", cfa1: "ETH" },

  // CFA Program Level II
  { id: "l2qm",  name: "Quantitative Methods",               icon: "🧮", cfa2: "QM" },
  { id: "l2eco", name: "Economics",                          icon: "🌐", cfa2: "ECO" },
  { id: "l2fsa", name: "Financial Statement Analysis",       icon: "🧾", cfa2: "FSA" },
  { id: "l2ci",  name: "Corporate Issuers",                  icon: "🏢", cfa2: "CI" },
  { id: "l2eq",  name: "Equity Valuation",                   icon: "📈", cfa2: "EQ" },
  { id: "l2fi",  name: "Fixed Income",                       icon: "💵", cfa2: "FI" },
  { id: "l2der", name: "Derivatives",                        icon: "🔀", cfa2: "DER" },
  { id: "l2alt", name: "Alternative Investments",            icon: "🏗️", cfa2: "ALT" },
  { id: "l2pm",  name: "Portfolio Management",               icon: "🧺", cfa2: "PM" },
  { id: "l2eth", name: "Ethical and Professional Standards", icon: "⚖️", cfa2: "ETH" }
];

// Element weightings, as published for each exam (question counts scaled to the exam length).
window.EXAMS = {
  cire: {
    name: "CIRE",
    full: "Canadian Investment Regulatory Exam",
    questions: 110, minutes: 120,
    blurb: "The entry exam. It replaced the Canadian Securities Course (CSC) exam on January 1, 2026.",
    body: "CIRO", pair: "rse", pairTitle: "After the CIRE: the RSE",
    format: "mostly short, direct questions, with some client scenarios and a few calculations",
    bankNote: "All are <b>exam-style</b> questions, written in the format of CIRO's official CIRE practice exam: mostly short, direct questions with four parallel answers, plus client scenarios and calculations.",
    source: "Exam details (length, time, pass mark) are based on CIRO's published syllabi as of 2026. Confirm them in the exam booking confirmation or on ciro.ca, since CIRO can update them.",
    searchHint: "'margin', 'RRSP', 'CIPF'",
    elements: [
      { id: "E1", name: "Regulatory framework", n: 11 },
      { id: "E2", name: "Prospective client relationships", n: 11 },
      { id: "E3", name: "KYC & suitability", n: 17 },
      { id: "E4", name: "Complaint handling", n: 6 },
      { id: "E5", name: "Market & company analysis", n: 9 },
      { id: "E6", name: "Market integrity & trade execution", n: 13 },
      { id: "E7", name: "Securities & managed products", n: 21 },
      { id: "E8", name: "Derivatives fundamentals", n: 6 },
      { id: "E9", name: "Conflicts of interest & ethics", n: 16 }
    ]
  },
  rse: {
    name: "RSE",
    full: "Retail Securities Exam",
    questions: 120, minutes: 180,
    blurb: "For advisors (Dealing Representatives) serving retail clients at investment dealers.",
    body: "CIRO", pair: "cire", pairTitle: "The CIRE",
    pairNote: "Switch to <b>CIRE</b> at the top to go back to CIRE-only material.",
    format: "mostly client scenarios",
    bankNote: "All are <b>exam-style</b> questions, written in the format of CIRO's practice exams: short, direct questions with four parallel answers, plus client scenarios and calculations. Portfolio construction has notes but no questions yet.",
    source: "Exam details (length, time, pass mark) are based on CIRO's published syllabi as of 2026. Confirm them in the exam booking confirmation or on ciro.ca, since CIRO can update them.",
    searchHint: "'margin', 'RRSP', 'CIPF'",
    elements: [
      { id: "R1", name: "KYC & suitability", n: 27 },
      { id: "R2", name: "Fixed income", n: 10 },
      { id: "R3", name: "Equities", n: 12 },
      { id: "R4", name: "Securities analysis", n: 14 },
      { id: "R5", name: "Managed products & other investments", n: 16 },
      { id: "R6", name: "Portfolio construction", n: 13 },
      { id: "R7", name: "Investment recommendations", n: 14 },
      { id: "R8", name: "Execution & market integrity", n: 7 },
      { id: "R9", name: "Monitoring, reporting & client relationships", n: 7 }
    ]
  },
  cfa1: {
    name: "CFA L1",
    full: "CFA Program Level I",
    questions: 180, minutes: 270,
    blurb: "A recap of the Level I curriculum: tools, concepts and the Code and Standards that Levels II and III build on.",
    body: "CFA Institute", pair: "cfa2", pairTitle: "CFA Level II",
    pairNote: "Switch to <b>CFA L2</b> at the top for Level II: valuation in depth, with item-set (vignette) questions like the real exam.",
    format: "180 standalone questions with three options (A, B, C), in two 2 h 15 min sessions",
    bankNote: "Written in the Level I format: standalone questions with three options, a mix of concepts, calculations and short scenarios (\"most likely\", \"least appropriate\"). Answer explanations show the working.",
    source: "Topic weights and exam format follow CFA Institute's published Level I outline for the 2025–2026 curriculum. CFA Institute updates the curriculum each year, so check the current Learning Outcome Statements on cfainstitute.org. Questions and notes are original study material, not CFA Institute content.",
    target: 0.7, targetNote: "CFA Institute doesn't publish the minimum passing score; 70% is a common benchmark",
    mocks: [[180, "Full Level I exam (4 h 30 min)"], [90, "One session (2 h 15 min)"], [30, "Quick 30"]],
    searchHint: "'duration', 'WACC', 'GIPS'",
    elements: [
      { id: "QM",  name: "Quantitative Methods",               n: 13, w: "6–9%" },
      { id: "ECO", name: "Economics",                          n: 13, w: "6–9%" },
      { id: "CI",  name: "Corporate Issuers",                  n: 13, w: "6–9%" },
      { id: "FSA", name: "Financial Statement Analysis",       n: 22, w: "11–14%" },
      { id: "EQ",  name: "Equity Investments",                 n: 22, w: "11–14%" },
      { id: "FI",  name: "Fixed Income",                       n: 22, w: "11–14%" },
      { id: "DER", name: "Derivatives",                        n: 11, w: "5–8%" },
      { id: "ALT", name: "Alternative Investments",            n: 15, w: "7–10%" },
      { id: "PM",  name: "Portfolio Management",               n: 18, w: "8–12%" },
      { id: "ETH", name: "Ethical and Professional Standards", n: 31, w: "15–20%" }
    ]
  },
  cfa2: {
    name: "CFA L2",
    full: "CFA Program Level II",
    questions: 88, minutes: 264,
    blurb: "A recap of the Level II curriculum: asset valuation and analysis, tested through case-based item sets.",
    body: "CFA Institute", pair: "cfa1", pairTitle: "CFA Level I",
    pairNote: "Switch to <b>CFA L1</b> at the top to recap the Level I foundations: formulas, definitions and the Code and Standards.",
    format: "22 item sets (a vignette followed by four questions with three options each), in two 2 h 12 min sessions",
    bankNote: "Written as Level II item sets: each vignette (with its exhibits) is followed by four questions with three options, and the vignette stays on screen while you answer. Mocks and practice always use whole sets.",
    source: "Topic weights and exam format follow CFA Institute's published Level II outline for the 2025–2026 curriculum. CFA Institute updates the curriculum each year, so check the current Learning Outcome Statements on cfainstitute.org. Vignettes, questions and notes are original study material, not CFA Institute content.",
    target: 0.7, targetNote: "CFA Institute doesn't publish the minimum passing score; 70% is a common benchmark",
    sets: true,
    mocks: [[88, "Full Level II exam (22 item sets)"], [44, "One session (11 item sets)"], [24, "Quick 6 item sets"]],
    searchHint: "'residual income', 'OAS', 'VaR'",
    elements: [
      { id: "QM",  name: "Quantitative Methods",               n: 8,  w: "5–10%" },
      { id: "ECO", name: "Economics",                          n: 4,  w: "5–10%" },
      { id: "FSA", name: "Financial Statement Analysis",       n: 12, w: "10–15%" },
      { id: "CI",  name: "Corporate Issuers",                  n: 8,  w: "5–10%" },
      { id: "EQ",  name: "Equity Valuation",                   n: 12, w: "10–15%" },
      { id: "FI",  name: "Fixed Income",                       n: 12, w: "10–15%" },
      { id: "DER", name: "Derivatives",                        n: 4,  w: "5–10%" },
      { id: "ALT", name: "Alternative Investments",            n: 4,  w: "5–10%" },
      { id: "PM",  name: "Portfolio Management",               n: 12, w: "10–15%" },
      { id: "ETH", name: "Ethical and Professional Standards", n: 12, w: "10–15%" }
    ]
  }
};
