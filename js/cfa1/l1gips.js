// CFA Level I · Ethical and Professional Standards · Introduction to the Global Investment Performance Standards (GIPS).
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1gips = `
<p class="syl">CFA Level I · Ethical and Professional Standards (15–20%) · Lesson 5 of 5 · Introduction to the Global Investment Performance Standards (GIPS)</p>
<p>The GIPS standards are voluntary, global ethical standards for calculating and presenting investment performance, so that prospective clients can compare firms fairly. This lesson covers why they exist, who can claim compliance, composites, what a compliant presentation contains, verification, and the rule that compliance must be complete.</p>

<h3>1. Why GIPS exist</h3>
<ul>
  <li>Without common rules, firms could make performance look better than it is: showing only their best accounts ("cherry-picking" or representative accounts), leaving out closed accounts (<b>survivorship bias</b>), choosing flattering time periods, or using inconsistent calculation methods.</li>
  <li>GIPS are based on <b>fair representation</b> and <b>full disclosure</b>, letting investors compare firms globally on a consistent basis. They're <b>voluntary</b>, not legally required (although many clients expect compliance).</li>
  <li>Complying with GIPS is the recommended way to meet Standard III(D) Performance Presentation.</li>
</ul>

<h3>2. Who can claim compliance <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Investment management firms</b> (and, under the 2020 edition, <b>asset owners</b> such as pension funds and endowments) can claim compliance.</li>
  <li>Compliance is claimed on a <b>firm-wide</b> basis: the firm is the distinct business entity that is held out to clients.</li>
  <li><b>Individuals, software vendors and consultants</b> (who don't manage assets) <b>can't</b> claim compliance; they can only use or support it.</li>
</ul>

<h3>3. Composites <span class="hot">Highly tested</span></h3>
<ul>
  <li>A <b>composite</b> is an aggregation of one or more portfolios managed according to a similar <b>mandate, objective or strategy</b> (e.g. "US large-cap value equity").</li>
  <li><b>All actual, fee-paying, discretionary</b> portfolios must be included in at least one composite. (Non-fee-paying discretionary portfolios may be included; non-discretionary portfolios aren't, because the manager can't fully implement its strategy.)</li>
  <li>Composites must be defined using criteria set in advance; portfolios can't be moved between composites to improve results (only when a documented change in mandate or strategy occurs). Terminated portfolios stay in the composite's history.</li>
  <li>Firms must also report performance for <b>pooled funds</b> to prospective investors.</li>
</ul>

<h3>4. What a compliant presentation includes</h3>
<ul>
  <li>At least <b>5 years</b> of performance (or since inception if shorter), building up to <b>10 years</b>.</li>
  <li>Annual returns (usually <b>time-weighted</b>; money-weighted returns are allowed where the firm controls external cash flows, e.g. private equity), benchmark returns, the number of portfolios, composite and firm assets, a measure of dispersion, and a three-year annualized standard deviation.</li>
  <li>Required disclosures and the GIPS <b>compliance statement</b> in the prescribed wording.</li>
</ul>

<h3>5. Verification <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Verification</b> is performed by an <b>independent third party</b>. It's <b>optional but recommended</b>.</li>
  <li>It's done on a <b>firm-wide</b> basis and tests whether the firm's policies and procedures for composite construction and for calculating and presenting performance comply with GIPS and are designed and implemented properly.</li>
  <li>Verification doesn't confirm the accuracy of a specific composite's performance; that's a separate, optional <b>performance examination</b>.</li>
</ul>

<h3>6. No partial compliance <span class="hot">Highly tested</span></h3>
<ul>
  <li>A firm must comply with <b>all</b> applicable requirements. It can't claim partial compliance or say it complies "except for" something, or claim to be "in accordance with" GIPS without full compliance.</li>
  <li>Where local laws conflict with GIPS, firms follow the law and disclose the conflict.</li>
  <li>GIPS contain <b>requirements</b> (must follow) and <b>recommendations</b> (best practice, encouraged).</li>
</ul>

<div class="how"><b>How it's tested:</b> who can claim compliance, firm-wide application, composite rules (fee-paying discretionary portfolios, no cherry-picking or switching), the 5-to-10-year history, verification (optional, third-party, firm-wide), and the ban on partial or "except for" compliance claims.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Explain why the GIPS standards were created and what problems they address.</li>
  <li>Identify who can claim compliance and that compliance is firm-wide.</li>
  <li>Describe composites and which portfolios must be included.</li>
  <li>Describe verification and the requirement for full compliance.</li>
</ul></div>
`;

window.QB_HARD.l1gips = [
  ["Who can claim compliance with the GIPS standards?",
    ["Investment management firms", "Individual managers", "Performance software vendors"],
    "GIPS compliance is claimed by firms on a firm-wide basis, not by individuals, products or software.", "r"],
  ["Under GIPS, composites must include:",
    ["All actual, fee-paying, discretionary portfolios", "Only the portfolios the firm chooses to show", "Model and simulated portfolios too"],
    "Including every actual fee-paying discretionary portfolio in at least one composite prevents cherry-picking.", "r"],
  ["GIPS verification is:",
    ["Optional, by an independent third party", "Required before claiming compliance", "Done by the firm's own compliance staff"],
    "Verification is recommended but voluntary, and must be done by an independent verifier.", "r"],
  ["A firm states that it complies with GIPS 'except for' its treatment of certain composites. This statement is:",
    ["Not permitted: compliance must be complete", "Permitted, provided the exceptions are disclosed", "Permitted for firms in their first year"],
    "There's no partial compliance: a firm must meet all applicable requirements before claiming compliance.", "r"],
  ["A main purpose of the GIPS standards is to:",
    ["Make performance comparable across firms", "Guarantee a minimum return for clients", "Replace securities laws on performance"],
    "GIPS promote fair representation and full disclosure so investors can compare firms.", "r"],
  ["A software vendor advertises that its performance system is \"GIPS compliant\". Under GIPS, this claim is:",
    ["Not allowed: only firms can claim it", "Allowed if the software calculates TWR", "Allowed once it has been verified"],
    "Only investment management firms (and asset owners) can claim compliance; software can't.", "r"],
  ["A firm includes only its five best-performing accounts in its large-cap growth composite. This violates GIPS because:",
    ["Every qualifying account must be included", "Composites may hold at most five portfolios", "Large-cap composites must be verified first"],
    "Excluding accounts that fit the composite's strategy is cherry-picking.", "s"],
  ["Which portfolio is a firm not required to include in any composite?",
    ["A non-discretionary portfolio", "A fee-paying discretionary portfolio", "A terminated fee-paying portfolio's history"],
    "Non-discretionary portfolios can't reflect the firm's strategy; terminated portfolios' past results remain in composites.", "r"],
  ["When first claiming GIPS compliance, a firm must present at least:",
    ["Five years of performance or since inception", "Ten years of performance or since inception", "One year of audited performance"],
    "Firms start with at least five years (or since inception) and build to ten.", "r"],
  ["GIPS compliance applies to:",
    ["The firm as a whole", "Selected composites chosen by the firm", "Individual portfolio managers"],
    "Compliance is firm-wide; a firm can't comply for some products only.", "r"],
  ["A firm moves a poorly performing portfolio from its value composite to its core composite, although the portfolio's strategy hasn't changed. Under GIPS this is:",
    ["Not allowed", "Allowed with disclosure", "Allowed once a year"],
    "Portfolios can only switch composites after a documented change in strategy or mandate.", "s"],
  ["GIPS verification tests:",
    ["Firm-wide policies and procedures", "One composite's returns in detail", "The firm's investment skill"],
    "Verification covers firm-wide composite construction and performance policies; a performance examination covers a specific composite.", "r"],
  ["Where a country's law conflicts with a GIPS requirement, a firm should:",
    ["Follow the law and disclose the conflict", "Follow GIPS and ignore the local law", "Withdraw its claim of GIPS compliance"],
    "Firms must comply with the law and disclose how it conflicts with GIPS.", "r"],
];

window.GLOSSARY.push(
  ["GIPS basics","Firm-wide; all actual fee-paying discretionary portfolios in composites; no partial compliance; verification optional and independent.","l1gips"],
  ["Composite", "Aggregation of portfolios with a similar mandate, objective or strategy.", "l1gips"],
  ["GIPS verification", "Optional, independent, firm-wide review of composite and performance policies.", "l1gips"]
);
