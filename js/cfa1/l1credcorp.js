// CFA Level I · Fixed Income · Learning module 16: Credit Analysis for Corporate Issuers.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1credcorp = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 16 of 19 · Credit Analysis for Corporate Issuers</p>
<p>This lesson applies credit analysis to companies: the qualitative factors, the key profitability, coverage, leverage and cash flow ratios, the ranking of claims in bankruptcy and how it affects recovery and ratings (notching), structural subordination, and what's different about analyzing high-yield issuers.</p>

<h3>1. Qualitative factors</h3>
<ul>
  <li><b>Business model and industry</b>: how stable and predictable the company's cash flows are, its industry structure (Porter's forces) and its competitive position (market share, cost position, pricing power).</li>
  <li><b>Management and governance</b>: strategy, track record, financial policy (appetite for debt, buybacks, acquisitions), accounting quality.</li>
  <li><b>ESG factors</b>: environmental liabilities, regulation, social issues and governance that could affect cash flows.</li>
</ul>

<h3>2. Key ratios <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Type</th><th>Ratio</th><th>Better credit if…</th></tr>
  <tr><td>Profitability</td><td>EBIT margin, EBITDA margin</td><td>Higher and stable</td></tr>
  <tr><td>Coverage</td><td>EBIT / interest, EBITDA / interest</td><td>Higher</td></tr>
  <tr><td>Leverage</td><td>Debt / EBITDA, net debt / EBITDA, debt / capital</td><td>Lower</td></tr>
  <tr><td>Cash flow to debt</td><td>FFO / debt, retained cash flow (RCF) / net debt, FCF / debt</td><td>Higher</td></tr>
</table>
<ul>
  <li><b>Funds from operations (FFO)</b> = net income from continuing operations + depreciation and amortization + deferred taxes + other non-cash items (roughly cash flow from operations before working capital changes).</li>
  <li><b>Free cash flow (FCF)</b> before dividends = CFO − capital expenditure; after dividends = CFO − capex − dividends. <b>Retained cash flow (RCF)</b> = FFO − dividends.</li>
  <li>Analysts often adjust debt to include leases, unfunded pension obligations and other debt-like items.</li>
</ul>
<div class="ex"><b>Example:</b> EBITDA $400m, EBIT $300m, interest $60m, debt $1,400m, cash $200m, book equity $1,000m, FFO $320m, CFO $350m, capex $150m, dividends $50m.<br>EBIT / interest = <b>5.0×</b>; EBITDA / interest = 6.7×.<br>Debt / EBITDA = <b>3.5×</b>; net debt / EBITDA = 1,200 / 400 = <b>3.0×</b>.<br>Debt / capital = 1,400 / 2,400 = <b>58.3%</b>; FFO / debt = 320 / 1,400 = <b>22.9%</b>.<br>FCF before dividends = 350 − 150 = <b>$200m</b>; after dividends = $150m. RCF / net debt = (320 − 50) / 1,200 = 22.5%.</div>

<h3>3. Seniority, recovery and notching <span class="hot">Highly tested</span></h3>
<p>Priority of claims in bankruptcy (highest first):</p>
<ol>
  <li><b>First lien / senior secured</b> debt</li>
  <li>Second lien secured debt</li>
  <li><b>Senior unsecured</b> debt</li>
  <li>Senior subordinated debt</li>
  <li>Subordinated debt</li>
  <li>Junior subordinated debt</li>
  <li>Preferred shares, then common shares</li>
</ol>
<ul>
  <li>Claims of the same class rank <b>pari passu</b> (equally).</li>
  <li>In theory the <b>absolute priority rule</b> says each class is paid in full before the next gets anything; in practice, negotiated settlements often give junior creditors (and even shareholders) something before senior creditors are fully paid.</li>
  <li>Higher-ranking debt has higher recovery rates, so lower loss severity.</li>
  <li><b>Notching</b>: the <b>issuer rating</b> usually applies to senior unsecured debt; agencies rate secured debt above it and subordinated debt below it. Notching is wider for <b>lower-rated (high-yield)</b> issuers, because the chance of default is higher, so recovery matters more.</li>
</ul>
<h4>Structural subordination</h4>
<p>When a company has a holding company and operating subsidiaries, the subsidiaries' cash flows go first to the subsidiaries' own creditors. Debt issued by the <b>holding company</b> is paid only from what's left (dividends up to the parent), so it's effectively subordinated to subsidiary debt even if it's called "senior".</p>

<h3>4. High-yield issuers</h3>
<ul>
  <li><b>Liquidity</b>: cash, available credit lines, and upcoming maturities are crucial, because high-yield issuers may lose market access in stress.</li>
  <li><b>Financial projections</b> with stress scenarios (recession, higher rates) to test whether the company can keep paying.</li>
  <li><b>Debt structure</b>: layers of secured and unsecured debt, leverage at each level, and the share of secured debt (which reduces recovery for unsecured lenders).</li>
  <li><b>Corporate structure</b> (structural subordination) and <b>covenants</b> (more important for high yield): change-of-control puts, restricted payments, limits on liens and additional debt.</li>
  <li>High-yield bonds behave more like equity: analysts often use equity-like methods (e.g. enterprise value relative to debt).</li>
</ul>

<div class="how"><b>How it's tested:</b> calculating and comparing coverage, leverage and cash flow ratios, ranking claims by priority, notching (and why it's wider for high yield), structural subordination, pari passu and the absolute priority rule, and special considerations for high-yield issuers.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe qualitative factors in corporate credit analysis.</li>
  <li>Calculate and interpret profitability, coverage, leverage and cash flow ratios (including FFO and FCF).</li>
  <li>Rank claims by seniority and explain recovery, notching and structural subordination.</li>
  <li>Describe special considerations for high-yield issuers.</li>
</ul></div>
`;

window.QB_HARD.l1credcorp = [
  ["Rating agencies typically rate an issuer's subordinated debt below its issuer rating. This practice is called:",
    ["Notching", "Pari passu ranking", "Credit enhancement"],
    "Notching adjusts issue ratings up or down from the issuer rating to reflect priority of claims and expected recovery.", "r"],
  ["Which of the following ranks highest in the priority of claims in a bankruptcy?",
    ["First lien senior secured debt", "Senior unsecured debentures", "Junior subordinated debt"],
    "Order: first lien/senior secured → second lien → senior unsecured → senior subordinated → subordinated → junior subordinated.", "r"],
  ["Which change would most likely improve a corporate issuer's credit profile?",
    ["A higher EBITDA-to-interest ratio", "A higher debt-to-EBITDA ratio", "A lower FFO-to-debt ratio"],
    "Higher coverage and lower leverage indicate stronger credit. Higher debt/EBITDA and lower FFO/debt are weaker.", "r"],
  ["Bonds issued by a holding company are structurally subordinated because:",
    ["Subsidiaries' creditors are paid from subsidiary cash flows first", "Holding company bonds are always secured by subsidiary assets", "Holding company bonds have shorter maturities than subsidiary debt"],
    "The holding company relies on dividends from subsidiaries, which are paid only after the subsidiaries' own debt is serviced.", "r"],
  ["A company has EBIT of $300 million and interest expense of $60 million. Its EBIT interest coverage is:",
    ["5.0×", "0.2×", "6.7×"],
    "300 / 60 = 5.0×. 6.7× uses EBITDA of $400 million.", "c"],
  ["A company has debt of $1,400 million, cash of $200 million and EBITDA of $400 million. Its net debt to EBITDA is:",
    ["3.0×", "3.5×", "4.0×"],
    "(1,400 − 200) / 400 = 3.0×. 3.5× uses gross debt.", "c"],
  ["A company has debt of $1,400 million and book equity of $1,000 million. Its debt-to-capital ratio is closest to:",
    ["58.3%", "140.0%", "41.7%"],
    "1,400 / (1,400 + 1,000) = 58.3%. 140% is debt/equity.", "c"],
  ["A company has CFO of $350 million, capital expenditure of $150 million and dividends of $50 million. Its free cash flow after dividends is:",
    ["$150 million", "$200 million", "$300 million"],
    "350 − 150 − 50 = $150 million. $200 million is FCF before dividends.", "c"],
  ["Funds from operations (FFO) is best described as:",
    ["Net income plus non-cash charges", "Cash from operations less capex", "EBITDA less interest and taxes paid"],
    "FFO = net income from continuing operations + D&A + deferred taxes + other non-cash items.", "r"],
  ["Which issuer has the strongest credit profile, all else equal?",
    ["FFO/debt 45%; debt/EBITDA 1.5×", "FFO/debt 20%; debt/EBITDA 3.5×", "FFO/debt 10%; debt/EBITDA 6.0×"],
    "Higher cash flow to debt and lower leverage indicate stronger credit.", "r"],
  ["Which claim ranks lowest among the company's debt in bankruptcy?",
    ["Junior subordinated debt", "Senior unsecured debt", "Second lien secured debt"],
    "The order is first lien, second lien, senior unsecured, senior subordinated, subordinated, then junior subordinated.", "r"],
  ["Two bonds of the same issuer and the same class rank equally in bankruptcy. They are said to rank:",
    ["Pari passu", "Subordinated", "Structurally senior"],
    "Pari passu means equal ranking.", "r"],
  ["In practice, the absolute priority rule in bankruptcy:",
    ["Is often not strictly followed", "Is always strictly followed by courts", "Applies only to secured debt"],
    "Negotiated settlements often give junior creditors or shareholders some value before senior creditors are paid in full.", "r"],
  ["Rating agencies typically apply wider notching between issue ratings for:",
    ["High-yield issuers", "AAA-rated issuers", "Investment grade issuers"],
    "When default is more likely, differences in expected recovery matter more, so notching is wider for lower-rated issuers.", "r"],
  ["For a high-yield issuer, which analysis is especially important because it may lose access to markets in stress?",
    ["Liquidity and upcoming maturities", "Dividend growth and payout ratio", "Its recent share price momentum"],
    "Cash, credit lines and the maturity schedule determine whether the issuer can survive without new financing.", "r"],
];

window.GLOSSARY.push(
  ["Priority of claims","First lien → second lien → senior unsecured → senior subordinated → subordinated → junior subordinated.","l1credcorp"],
  ["FFO", "Funds from operations: net income from continuing operations + D&A + deferred taxes + other non-cash items.", "l1credcorp"],
  ["Structural subordination", "Holding company debt is paid after subsidiary creditors from subsidiary cash flows.", "l1credcorp"],
  ["Absolute priority rule", "Each class is paid in full before junior classes; often not strictly followed in practice.", "l1credcorp"]
);
