// CFA Level II · Corporate Issuers: study notes, item sets and flashcards.
window.NOTES = window.NOTES || {};
window.QB_SETS = window.QB_SETS || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l2ci = `
<p class="syl">CFA Level II · Corporate Issuers · 5–10% of the exam · Learning modules: Analysis of Dividends and Share Repurchases · Environmental, Social, and Governance (ESG) Considerations in Investment Analysis · Cost of Capital: Advanced Topics · Corporate Restructuring</p>

<h3>1. Dividends and share repurchases</h3>
<ul>
  <li><b>Forms</b>: regular, extra (special), liquidating cash dividends; <b>stock dividends</b> and <b>stock splits</b> (no change in shareholder wealth or company value; more shares, lower price per share). A <b>reverse split</b> reduces the share count.</li>
  <li><b>Theories</b>: <b>MM irrelevance</b> (no taxes or costs: investors create "homemade dividends"); <b>bird-in-the-hand</b> (dividends are less risky than future gains, so higher payout lowers the cost of equity); <b>tax argument</b> (if dividends are taxed more heavily than gains, lower payout is better).</li>
  <li><b>Signaling</b>: initiations and increases are usually positive signals; cuts are negative (managers are reluctant to cut). <b>Agency</b>: dividends reduce free cash flow that managers could waste (shareholder–manager conflict); bondholders restrict dividends with covenants (shareholder–bondholder conflict). <b>Clienteles</b> prefer different payout levels.</li>
  <li><b>Payout policies</b>: <b>stable</b> dividend policy (smooth increases toward a target payout), <b>constant payout ratio</b>, <b>residual</b> dividend (pay what's left after funding positive-NPV projects at the target capital structure).</li>
</ul>
<div class="formula">Target payout adjustment: expected dividend = D0 + (expected EPS × target payout − D0) × adjustment factor (adjustment factor = 1/number of years to reach the target)</div>
<div class="formula">Double taxation: effective tax on distributed earnings = CT + (1 − CT) × TD</div>
<p>Other tax systems: <b>imputation</b> (shareholders get a credit for corporate tax; effective rate = shareholder's rate) and <b>split-rate</b> (distributed earnings taxed at a lower corporate rate).</p>
<h4>Share repurchases</h4>
<ul>
  <li>Methods: <b>open market</b> (most flexible), <b>fixed-price tender offer</b> (fast, at a premium), <b>Dutch auction</b> (company sets a price range; the lowest price that buys the target quantity), <b>direct negotiation</b> (e.g. with a large holder; risk of greenmail).</li>
  <li>Why: signal undervaluation, flexibility vs dividends, offset dilution from options, change capital structure, tax advantages.</li>
  <li><b>EPS effect</b>: a debt-financed buyback raises EPS if the <b>after-tax cost of debt &lt; earnings yield (E/P)</b>.</li>
  <li><b>BVPS effect</b>: BVPS falls if the repurchase price is <b>above</b> BVPS (P/B &gt; 1), rises if below.</li>
  <li>With equal tax treatment and no information effects, a cash dividend and a buyback of the same amount leave shareholders' wealth equal.</li>
</ul>
<div class="ex"><b>Example:</b> NI 400m, 200m shares at $40 (EPS 2.00, E/P 5%). Borrow $500m at 6% pre-tax (4.5% after 25% tax) to buy 12.5m shares. New NI = 400 − 22.5 = 377.5; new EPS = 377.5/187.5 = $2.013 (up, as 4.5% &lt; 5%). Book equity 3,000 → 2,500; BVPS 15.00 → 13.33.</div>
<p><b>Dividend safety</b>: payout ratio, dividend coverage (NI/dividends), <b>FCFE coverage = FCFE / (dividends + buybacks)</b>. A ratio below 1 means distributions exceed FCFE and aren't sustainable without borrowing or using cash.</p>

<h3>2. ESG considerations</h3>
<ul>
  <li><b>Ownership structures</b>: <b>dispersed</b> (many small owners; main conflict is <b>principal–agent</b>, shareholders vs managers) vs <b>concentrated</b> (controlling holder; main conflict is <b>principal–principal</b>, controlling vs minority shareholders). Also horizontal/vertical (pyramid) ownership, <b>dual-class</b> shares (control without proportional economic ownership), affiliated shareholders, state ownership.</li>
  <li><b>Boards</b>: one-tier vs two-tier (supervisory and management boards); <b>independence</b>; CEO duality (CEO is also chair); <b>staggered</b> boards (harder to replace); committees: audit, nomination, remuneration. <b>Cumulative voting</b> lets minority shareholders concentrate votes to elect directors; straight voting favours controlling holders.</li>
  <li><b>Management incentives</b>: pay linked to performance, clawbacks, say-on-pay votes.</li>
  <li><b>Identifying material ESG factors</b>: use industry materiality frameworks (e.g. SASB-style maps), company disclosures, controversies, ratings (recognize differences between providers).</li>
  <li><b>Integrating ESG into valuation</b>: adjust forecast <b>revenues, costs, capex, provisions</b> (e.g. carbon pricing, remediation), or adjust the <b>discount rate</b> or <b>terminal multiple</b> where the risk can't be modelled in cash flows. In credit analysis, ESG risks can affect default probability and recovery.</li>
  <li><b>Green bonds</b>: proceeds earmarked for environmental projects; analyze use of proceeds, reporting and verification; watch for <b>greenwashing</b>. A "greenium" (lower yield) may exist.</li>
</ul>

<h3>3. Cost of capital: advanced topics</h3>
<ul>
  <li><b>Top-down factors</b>: country (risk, inflation, currency), market (liquidity, size), industry (cyclicality, operating leverage), company (financial leverage, size, governance).</li>
  <li><b>WACC</b> = w_d r_d (1 − t) + w_p r_p + w_e r_e, using <b>target market-value</b> weights.</li>
  <li><b>Cost of debt</b>: YTM on traded debt; for unrated or untraded debt, use a <b>synthetic rating</b> (from coverage ratios) and the matching spread.</li>
</ul>
<h4>Equity risk premium (ERP)</h4>
<ul>
  <li><b>Historical</b>: arithmetic mean (higher; better for single-period estimates) vs geometric mean (lower; better for multi-period); <b>survivorship bias</b> overstates it; choice of risk-free proxy (short vs long rates) matters.</li>
  <li><b>Forward-looking</b>: <b>Gordon growth</b> ERP = D1/P0 + g − r_f; <b>macroeconomic (supply-side)</b> ERP = [(1 + expected inflation)(1 + real EPS growth)(1 + expected change in P/E) − 1 + expected income yield] − r_f; <b>surveys</b>.</li>
</ul>
<h4>Required return on equity</h4>
<ul>
  <li><b>CAPM</b>: r_e = r_f + β × ERP. <b>Adjusted (Blume) beta</b> = 2/3 × raw beta + 1/3 × 1.0 (beta reverts to 1).</li>
  <li><b>Pure-play beta</b>: unlever a comparable's beta and relever at the subject's capital structure: β_A = β_E / [1 + (1 − t) D/E]; β_E = β_A × [1 + (1 − t) D/E].</li>
  <li><b>Multifactor</b>: Fama–French (market, size, value), Carhart (adds momentum), macroeconomic models.</li>
  <li><b>Build-up</b> (private or thinly traded companies): r_e = r_f + ERP + size premium + specific-company risk premium (± industry premium).</li>
  <li><b>Bond yield plus risk premium</b>: company's long-term bond yield + about 3–5%.</li>
  <li><b>Country risk premium</b>: CRP = sovereign yield spread × (σ of the country's equity / σ of its sovereign bonds); r_e = r_f + β (ERP + CRP).</li>
</ul>
<div class="ex"><b>Example:</b> Comparable β_E 1.30 at D/E 0.60; subject D/E 0.30; t = 25%. β_A = 1.30/1.45 = 0.897; relevered β = 0.897 × 1.225 = 1.098. With r_f 3.5%, ERP 5.0% and CRP = 3.0% × (30%/20%) = 4.5%: r_e = 3.5% + 1.098 × 9.5% = 13.9%.</div>

<h3>4. Corporate restructuring</h3>
<table>
  <tr><th>Type</th><th>Examples</th></tr>
  <tr><td><b>Investment actions</b></td><td>Equity investment (minority stake), joint venture, acquisition</td></tr>
  <tr><td><b>Divestment actions</b></td><td><b>Sale</b> (divestiture, raises cash); <b>spin-off</b> (shares of the unit distributed to existing shareholders; no cash raised); equity carve-out (partial IPO of a unit)</td></tr>
  <tr><td><b>Restructuring actions</b></td><td>Cost restructuring (outsourcing, offshoring); <b>balance sheet restructuring</b> (sale-leaseback, dividends and buybacks, leverage changes); reorganization (e.g. bankruptcy)</td></tr>
</table>
<ul>
  <li><b>Motivations</b>: economies of scale and scope, access to capabilities or markets, cost reduction, refocusing, unlocking value (conglomerate discount), tax, or forced by distress.</li>
  <li><b>Valuation</b>: <b>comparable company analysis</b> (trading multiples, then add a takeover premium for control), <b>comparable transaction analysis</b> (deal multiples already include the premium), <b>premiums paid analysis</b>, DCF, LBO analysis.</li>
  <li><b>Takeover premium</b> = (deal price − unaffected share price) / unaffected share price.</li>
  <li><b>EPS accretion/dilution</b>: an all-stock deal is accretive if the acquirer's P/E &gt; the P/E paid for the target; a cash deal funded with debt is accretive if the after-tax cost of debt &lt; the target's earnings yield at the offer price.</li>
  <li>Evaluate the pro forma combined company (leverage, credit rating, WACC) and, after closing, whether synergies were achieved.</li>
</ul>
<div class="how"><b>How it's tested:</b> calculations of EPS and BVPS after buybacks, target payout adjustments, FCFE coverage, effective tax rates on dividends, relevered betas, CRP-adjusted cost of equity, Gordon-growth ERP and takeover premiums; plus classification of governance structures and restructuring types.</div>
<div class="key"><b>Carry forward to Level III</b>: the ERP and cost of capital feed <b>capital market expectations</b>; ESG integration and stewardship return in Level III's ESG and portfolio management content.</div>
<div class="trap"><b>Traps:</b> a buyback raises EPS only if the after-tax cost of funds is below the earnings yield. Spin-offs raise no cash. Comparable transaction multiples already include a control premium, so don't add it again.</div>
`;

window.QB_SETS.l2ci = [
  {
    title: "Pembrook Foods: payout decisions",
    case: `<p>Pembrook Foods has 200 million shares outstanding at $40 per share, net income of $400 million and book equity of $3,000 million. Its tax rate is 25%.</p>
<p>The board is considering borrowing $500 million at a pre-tax rate of 6% to repurchase shares at the current price.</p>
<p>Pembrook follows a stable dividend policy. Its last annual dividend was $0.80 per share. It targets a payout ratio of 45% and closes 40% of the gap between its target and actual dividend each year. Next year's EPS is expected to be $2.20.</p>
<p><b>Exhibit 1. Distributions and FCFE, current year ($ millions)</b></p>
<table><tr><th>Item</th><th>Amount</th></tr><tr><td>FCFE</td><td>450</td></tr><tr><td>Dividends</td><td>160</td></tr><tr><td>Planned share repurchases</td><td>500</td></tr></table>`,
    qs: [
      ["If the debt-financed repurchase goes ahead, Pembrook's EPS will be closest to:",
        ["$2.01", "$2.00", "$1.89"],
        "Shares bought = 500/40 = 12.5m. After-tax interest = 500 × 6% × 0.75 = 22.5m. EPS = (400 − 22.5)/(200 − 12.5) = 377.5/187.5 = $2.01. EPS rises because 4.5% < the 5% earnings yield.", "c"],
      ["After the repurchase, Pembrook's book value per share will be closest to:",
        ["$13.33", "$15.00", "$16.00"],
        "BVPS before = 3,000/200 = $15. After = (3,000 − 500)/187.5 = $13.33. It falls because the price paid ($40) exceeds BVPS.", "c"],
      ["Using the target payout adjustment model, next year's expected dividend is closest to:",
        ["$0.88", "$0.99", "$0.80"],
        "Target dividend = 0.45 × 2.20 = 0.99. Expected = 0.80 + 0.40 × (0.99 − 0.80) = 0.80 + 0.076 = $0.876.", "c"],
      ["Pembrook's FCFE coverage ratio indicates that its planned distributions are:",
        ["Not sustainable from FCFE (coverage 0.68)", "Sustainable, since coverage is 2.8", "Sustainable, since coverage exceeds 1"],
        "FCFE coverage = FCFE/(dividends + buybacks) = 450/(160 + 500) = 0.68. Below 1, the company is distributing more than its FCFE, using cash or debt.", "c"]
    ]
  },
  {
    title: "Marisol Energía: cost of equity",
    case: `<p>Analyst Javier Ruiz estimates the cost of equity for Marisol Energía, a private utility in an emerging market. He uses a listed comparable from a developed market.</p>
<p><b>Exhibit 1. Inputs</b></p>
<table><tr><th>Input</th><th>Value</th></tr><tr><td>Comparable's equity beta (raw)</td><td>1.30</td></tr><tr><td>Comparable's debt-to-equity ratio</td><td>0.60</td></tr><tr><td>Marisol's target debt-to-equity ratio</td><td>0.30</td></tr><tr><td>Tax rate (both companies)</td><td>25%</td></tr><tr><td>Risk-free rate</td><td>3.5%</td></tr><tr><td>Equity risk premium (developed market)</td><td>5.0%</td></tr><tr><td>Sovereign yield spread of Marisol's country</td><td>3.0%</td></tr><tr><td>Annualized σ of the country's equity index</td><td>30%</td></tr><tr><td>Annualized σ of its sovereign bonds</td><td>20%</td></tr></table>
<p>Ruiz's colleague, Elena Mora, cross-checks the ERP with a Gordon growth estimate for the developed market: the index dividend yield is 2.0% and long-term earnings growth is expected to be 5.5%.</p>`,
    qs: [
      ["Marisol's relevered equity beta is closest to:",
        ["1.10", "0.90", "1.30"],
        "β_A = 1.30/[1 + 0.75 × 0.60] = 0.897. Relevered: 0.897 × [1 + 0.75 × 0.30] = 0.897 × 1.225 = 1.10.", "c"],
      ["Including a country risk premium, Marisol's cost of equity is closest to:",
        ["13.9%", "9.0%", "11.5%"],
        "CRP = 3.0% × (30%/20%) = 4.5%. r_e = 3.5% + 1.098 × (5.0% + 4.5%) = 3.5% + 10.4% = 13.9%. Ignoring the CRP gives 9.0%.", "c"],
      ["Mora's Gordon growth estimate of the equity risk premium is closest to:",
        ["4.0%", "7.5%", "5.5%"],
        "ERP = dividend yield + growth − risk-free rate = 2.0% + 5.5% − 3.5% = 4.0%.", "c"],
      ["If Ruiz had used the Blume adjustment on the comparable's raw beta before unlevering, the adjusted beta would be:",
        ["1.20", "1.30", "0.87"],
        "Adjusted beta = 2/3 × 1.30 + 1/3 × 1.0 = 0.867 + 0.333 = 1.20. Raw betas tend to revert toward 1.", "c"]
    ]
  },
  {
    title: "Lindqvist Group: governance and ESG",
    case: `<p>ESG analyst Hana Sato is reviewing Lindqvist Group, a listed shipping company.</p>
<ul><li>The founding family owns Class B shares with 10 votes each. The family holds 15% of the equity but 64% of the votes. Class A shares, held by public investors, carry one vote each.</li><li>The board has nine directors, three of whom are independent. The CEO, a family member, also chairs the board. Directors are elected by straight voting.</li><li>Lindqvist expects carbon pricing on shipping fuel to raise operating costs by about 2% of revenue from 2028.</li><li>Lindqvist has issued a green bond whose proceeds will fund a fleet of lower-emission vessels.</li></ul>`,
    qs: [
      ["The main governance conflict created by Lindqvist's share structure is best described as:",
        ["Principal–principal", "Principal–agent", "Shareholder–bondholder"],
        "A controlling holder with votes far exceeding its economic stake creates conflicts between controlling and minority shareholders (principal–principal).", "s"],
      ["Which change would most help minority shareholders elect a director?",
        ["Adopting cumulative voting", "Adding a staggered board", "Combining the CEO and chair roles"],
        "Cumulative voting lets shareholders concentrate all their votes on one candidate, improving minority representation. Staggered boards and CEO duality weaken shareholder influence.", "s"],
      ["The most direct way for Sato to reflect the carbon-pricing risk in a DCF valuation is to:",
        ["Raise forecast operating costs from 2028", "Add 2% to the discount rate from today", "Exclude the company from the analysis"],
        "When an ESG risk can be quantified, it's best modelled in the cash flows (here higher operating costs); adjusting the discount rate is a blunter tool for risks that can't be modelled.", "s"],
      ["In analyzing the green bond, Sato's main concern should be:",
        ["How the proceeds are used and reported", "Whether the coupon is fixed or floating", "Whether the bond is in a stock index"],
        "Green bonds are defined by use of proceeds; analysts check that proceeds go to eligible projects with credible reporting and verification, to guard against greenwashing.", "s"]
    ]
  },
  {
    title: "Halvard Partners: acquiring Tessaro",
    case: `<p>Halvard Partners is evaluating an acquisition of Tessaro Ltd. Tessaro's share price before rumours of a deal was $32. It has 30 million shares outstanding, EBITDA of $150 million, net debt of $300 million and EPS of $2.80.</p>
<p><b>Exhibit 1. Valuation multiples</b></p>
<table><tr><th>Source</th><th>EV/EBITDA</th></tr><tr><td>Median of recent acquisitions of similar companies</td><td>9.0×</td></tr><tr><td>Median of listed peers (trading)</td><td>7.5×</td></tr></table>
<p>Halvard is considering an offer of $40 per Tessaro share, paid entirely in Halvard shares. Halvard's P/E is 20×.</p>
<p>Halvard's strategy team also proposes distributing the shares of its slow-growing logistics division to Halvard shareholders as a separate listed company.</p>`,
    qs: [
      ["Using comparable transaction analysis, Tessaro's equity value per share is closest to:",
        ["$35.00", "$45.00", "$27.50"],
        "EV = 9.0 × 150 = 1,350; equity = 1,350 − 300 = 1,050; per share = 1,050/30 = $35.00.", "c"],
      ["The takeover premium implied by the $40 offer is closest to:",
        ["25%", "14%", "20%"],
        "Premium = (40 − 32)/32 = 25%.", "c"],
      ["The all-stock offer will most likely be:",
        ["Accretive to Halvard's EPS", "Dilutive to Halvard's EPS", "Neutral to Halvard's EPS"],
        "The P/E paid for Tessaro is 40/2.80 = 14.3×, below Halvard's 20×. When the acquirer's P/E exceeds the target's purchase P/E, an all-stock deal is accretive.", "c"],
      ["The proposed treatment of the logistics division is best described as:",
        ["A spin-off, which raises no cash", "A divestiture, which raises cash", "An equity carve-out through an IPO"],
        "Distributing a division's shares to existing shareholders is a spin-off; no cash is raised. A sale (divestiture) or carve-out IPO would raise cash.", "r"]
    ]
  }
];

window.GLOSSARY.push(
  ["Target payout adjustment model", "Expected dividend = D0 + (EPS × target payout − D0) × adjustment factor.", "l2ci"],
  ["Buyback EPS effect", "Debt-financed buyback raises EPS if the after-tax cost of debt < earnings yield (E/P).", "l2ci"],
  ["Buyback BVPS effect", "BVPS falls if shares are bought above BVPS, rises if below.", "l2ci"],
  ["FCFE coverage ratio", "FCFE/(dividends + buybacks); below 1 means distributions aren't sustainable from FCFE.", "l2ci"],
  ["Double taxation effective rate", "CT + (1 − CT) × TD on distributed earnings.", "l2ci"],
  ["Dutch auction buyback", "Company sets a price range; buys at the lowest price that fills the target quantity.", "l2ci"],
  ["Principal–principal conflict", "Controlling vs minority shareholders (concentrated ownership, dual-class shares).", "l2ci"],
  ["Cumulative voting", "Shareholders can concentrate votes on one director, helping minority representation.", "l2ci"],
  ["Blume adjusted beta", "2/3 × raw beta + 1/3 × 1.0.", "l2ci"],
  ["Unlevered (asset) beta", "β_E/[1 + (1 − t)D/E]; relever with the subject's D/E.", "l2ci"],
  ["Country risk premium", "Sovereign yield spread × σ_equity/σ_sovereign bond; r_e = r_f + β(ERP + CRP).", "l2ci"],
  ["Gordon growth ERP", "D1/P0 + g − r_f.", "l2ci"],
  ["Build-up method", "r_f + ERP + size premium + company-specific premium; used for private companies.", "l2ci"],
  ["Spin-off", "Distribute a unit's shares to existing shareholders; no cash raised.", "l2ci"],
  ["Takeover premium", "(Deal price − unaffected price)/unaffected price.", "l2ci"]
);
