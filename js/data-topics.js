// Topics, and how they map to the elements of CIRO's 2026 proficiency exams.
// cire / rse = the element each topic falls under for that exam (null = not a focus of that exam).
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
  { id: "ethics",     name: "Conflicts of Interest & Ethics",     icon: "⚖️", cire: "E9", rse: "R1" }
];

// Element weightings, as published for each exam (question counts scaled to the exam length).
window.EXAMS = {
  cire: {
    name: "CIRE",
    full: "Canadian Investment Regulatory Exam",
    questions: 110, minutes: 120,
    blurb: "The entry exam. It replaced the Canadian Securities Course (CSC) exam on January 1, 2026.",
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
  }
};
