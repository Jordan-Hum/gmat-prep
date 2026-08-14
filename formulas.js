/**
 * GMAT PrepMaster Pro - Formula Vault & Strategy Flashcards
 */

const FORMULA_VAULT = [
  {
    category: 'Quant - Algebra',
    title: 'Difference of Squares & Perfect Squares',
    formula: 'a² - b² = (a + b)(a - b)\n(a + b)² = a² + 2ab + b²\n(a - b)² = a² - 2ab + b²',
    notes: 'Frequently tested in factoring questions. Look for expressions that can be simplified instantly without multiplying out large polynomials.',
    example: '37² - 27² = (37 + 27)(37 - 27) = 64 × 10 = 640.'
  },
  {
    category: 'Quant - Word Problems',
    title: 'Average Speed / Round-Trip Harmonic Mean',
    formula: 'Average Speed = (Total Distance) / (Total Time)\nFor equal distance round trip: V_avg = (2 × v₁ × v₂) / (v₁ + v₂)',
    notes: 'CRITICAL TRAP: Never calculate average speed as the simple arithmetic mean (v₁ + v₂)/2!',
    example: 'Drive out at 40 mph and return at 60 mph: V_avg = (2 × 40 × 60)/(40 + 60) = 4800/100 = 48 mph (not 50 mph).'
  },
  {
    category: 'Quant - Word Problems',
    title: 'Combined Work-Rate Formula',
    formula: '1/T_total = 1/T₁ + 1/T₂ + ... + 1/T_n\nFor two workers: T_total = (T₁ × T₂) / (T₁ + T₂)',
    notes: 'Rates add, not times! Always convert individual times to jobs per hour before adding.',
    example: 'Worker A takes 6 hrs, Worker B takes 12 hrs: T = (6 × 12)/(6 + 12) = 72/18 = 4 hours.'
  },
  {
    category: 'Quant - Combinatorics',
    title: 'Combinations vs Permutations',
    formula: 'Combinations (Order doesn\'t matter): C(n, k) = n! / [k! × (n - k)!]\nPermutations (Order matters): P(n, k) = n! / (n - k)!',
    notes: 'Committees, hands of cards, and groups = Combination. Roles (President, VP), race rankings = Permutation.',
    example: 'Choose 3 people from 8: C(8, 3) = (8 × 7 × 6)/(3 × 2 × 1) = 56.'
  },
  {
    category: 'Quant - Geometry',
    title: 'Right Triangle Inradius (Inscribed Circle)',
    formula: 'Inradius r = (a + b - c) / 2\nwhere a, b are legs and c is hypotenuse.',
    notes: 'Alternatively: Area = r × s, where semiperimeter s = (a + b + c) / 2.',
    example: 'In a 3-4-5 right triangle: r = (3 + 4 - 5)/2 = 2/2 = 1.'
  },
  {
    category: 'Quant - Number Properties',
    title: 'Remainder Modular Arithmetic Rule',
    formula: 'If n ≡ r (mod d), then a·n + b ≡ a·r + b (mod d)',
    notes: 'You can perform addition and multiplication directly on the remainders before taking the final modulo.',
    example: 'If n divided by 7 has remainder 3, then 2n + 5 has remainder (2×3 + 5) = 11 ≡ 4 (mod 7).'
  },
  {
    category: 'Verbal - Critical Reasoning',
    title: 'Assumption Negation Technique',
    formula: '1. Identify the candidate assumption option.\n2. Negate the statement (make it logically opposite).\n3. If the negated statement completely destroys the author\'s conclusion, that choice is the required assumption.',
    notes: 'A valid assumption is a mandatory unstated bridge. If the bridge is broken by negation, the argument collapses.',
    example: 'Assumption: "Rain did not flood the crop." Negation: "Rain DID flood the crop." If flooding explains crop loss, conclusion fails.'
  },
  {
    category: 'Verbal - Sentence Correction',
    title: 'Subjunctive Mood (Bossy Verbs)',
    formula: '[Command / Mandate / Require / Demand / Insist] + THAT + [Subject] + [Base form of verb (infinitive without to)]',
    notes: 'Never use "should", "must", "has to", or inflected verb forms with subjunctive trigger verbs.',
    example: 'Correct: "The committee required that each applicant submit (not submits or should submit) a transcript."'
  },
  {
    category: 'Verbal - Sentence Correction',
    title: 'Modifiers & Participial Clauses',
    formula: '[Introductory Participial Modifier], [Target Noun] + [Verb]...',
    notes: 'The noun directly following the comma MUST be the agent actually performing the action of the introductory participle.',
    example: 'Incorrect: "Having reviewed the data, the report was submitted by John." (The report didn\'t review the data!). Correct: "Having reviewed the data, John submitted the report."'
  },
  {
    category: 'Data Insights - Data Sufficiency',
    title: 'The 12-Second AD / BCE Elimination Matrix',
    formula: '1. Evaluate Statement (1) alone:\n   - If (1) is Sufficient -> Answer is A or D (Eliminate B, C, E).\n   - If (1) is NOT Sufficient -> Answer is B, C, or E (Eliminate A, D).\n2. Evaluate Statement (2) alone:\n   - If tested (1) was SUFFICIENT: If (2) is also Sufficient -> D. If (2) is Not -> A.\n   - If tested (1) was NOT SUFFICIENT: If (2) is Sufficient -> B. If (2) is Not -> C or E.\n3. Combine (1) + (2) only if both individually fail: If sufficient together -> C. If still not -> E.',
    notes: 'Memorize the AD / BCE tree to eliminate 2-3 options within the first 15 seconds on every DS question.',
    example: 'Always evaluate each statement in complete isolation before combining them!'
  }
];

class FormulaVaultManager {
  constructor() {
    this.cards = FORMULA_VAULT;
    this.currentCardIndex = 0;
  }

  getFilteredCards(category = 'All', search = '') {
    let list = this.cards;
    if (category && category !== 'All') {
      list = list.filter(c => c.category.startsWith(category) || c.category === category);
    }
    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.formula.toLowerCase().includes(q) ||
        c.notes.toLowerCase().includes(q)
      );
    }
    return list;
  }
}

window.formulaVaultManager = new FormulaVaultManager();
