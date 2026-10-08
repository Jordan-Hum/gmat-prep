// CFA Level I · Corporate Issuers: study notes, practice questions and flashcards.
window.NOTES = window.NOTES || {};
window.QB_HARD = window.QB_HARD || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1ci = `
<p class="syl">CFA Level I · Corporate Issuers · 6–9% of the exam · Learning modules: Organizational Forms, Corporate Issuer Features, and Ownership · Investors and Other Stakeholders · Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits · Working Capital and Liquidity · Capital Investments and Capital Allocation · Capital Structure · Business Models</p>

<h3>1. Organizational forms and ownership</h3>
<table>
  <tr><th>Form</th><th>Legal identity</th><th>Owner liability</th><th>Owner–operator</th><th>Taxation</th></tr>
  <tr><td>Sole proprietorship</td><td>None separate</td><td>Unlimited</td><td>Same person</td><td>Personal (pass-through)</td></tr>
  <tr><td>General partnership</td><td>None separate</td><td>Unlimited, shared</td><td>Partners operate</td><td>Pass-through</td></tr>
  <tr><td>Limited partnership</td><td>None separate</td><td><b>GP unlimited</b>; LPs limited to investment</td><td>GP manages; LPs passive</td><td>Pass-through</td></tr>
  <tr><td><b>Corporation</b> (limited company)</td><td>Separate legal entity</td><td>Limited</td><td>Board and managers act for shareholders</td><td>Corporate tax, then tax on dividends (<b>double taxation</b> in many countries)</td></tr>
</table>
<p>Corporations can raise large amounts of capital and have perpetual life. <b>Public</b> companies list shares on an exchange (more disclosure and regulation, liquid shares); <b>private</b> companies don't. Companies move between them via IPOs, direct listings, SPAC mergers, or going-private buyouts.</p>
<h4>Debt vs equity</h4>
<table>
  <tr><th></th><th>Debtholders</th><th>Equity holders</th></tr>
  <tr><td>Claim</td><td>Fixed (interest + principal), <b>priority</b></td><td><b>Residual</b> (what's left after all claims)</td></tr>
  <tr><td>Upside</td><td>Capped</td><td>Unlimited</td></tr>
  <tr><td>Risk</td><td>Lower</td><td>Higher; first to absorb losses</td></tr>
  <tr><td>Control</td><td>Covenants only</td><td>Voting rights</td></tr>
</table>
<p>Options view: equity is a <b>call option on the firm's assets</b> with a strike equal to the face value of debt; debtholders are effectively short a put. So shareholders gain from <b>more risk</b>, debtholders lose.</p>

<h3>2. Investors and other stakeholders</h3>
<ul>
  <li><b>Stakeholders</b>: shareholders, creditors, board of directors, managers, employees, customers, suppliers, governments and regulators.</li>
  <li><b>Shareholder theory</b>: the company's main goal is to maximize shareholder value. <b>Stakeholder theory</b>: balance the interests of all stakeholders.</li>
  <li><b>ESG considerations</b>: environmental (emissions, pollution, resource use), social (human capital, health and safety, product safety, data privacy, communities), governance (board structure, pay, shareholder rights). Material ESG risks affect cash flows and the cost of capital.</li>
</ul>

<h3>3. Corporate governance</h3>
<h4>Conflicts (principal–agent problems)</h4>
<ul>
  <li><b>Shareholders vs managers</b>: insufficient effort, empire building, entrenchment, excessive perks, too little or too much risk-taking.</li>
  <li><b>Controlling vs minority shareholders</b>: related-party transactions, dual-class shares that give voting control without economic ownership, tunneling.</li>
  <li><b>Shareholders vs creditors</b>: risky projects, extra debt, or large dividends/buybacks that transfer wealth from creditors.</li>
  <li>Others: managers/board vs employees, customers, suppliers, governments.</li>
</ul>
<h4>Mechanisms</h4>
<ul>
  <li><b>Shareholders</b>: annual general meetings, <b>proxy voting</b>, <b>cumulative voting</b> (shareholders can concentrate votes on few candidates, helping minorities get board seats), say-on-pay, shareholder activism, derivative lawsuits, the market for corporate control (takeovers).</li>
  <li><b>Board</b>: independent directors and committees: <b>audit</b> (financial reporting, internal controls, external auditor), <b>governance</b>, <b>remuneration/compensation</b>, <b>nomination</b>, risk, investment. Staggered (classified) boards make hostile takeovers harder.</li>
  <li><b>Creditors</b>: <b>covenants</b> in the indenture, collateral, creditor committees in bankruptcy.</li>
  <li><b>Others</b>: employment laws and contracts, customer/supplier contracts, regulation.</li>
</ul>
<p><b>Risks of poor governance</b>: weak control systems, poor decisions, legal/regulatory/reputational risk, default risk. <b>Benefits of good governance</b>: operational efficiency, better control, better decisions, lower cost of capital, higher valuations.</p>

<h3>4. Working capital and liquidity</h3>
<div class="formula">Cash conversion cycle = DSO + DIO − DPO (days sales outstanding + days inventory on hand − days payables)</div>
<ul>
  <li>A <b>shorter</b> CCC needs less financing. Increasing DPO by stretching payables can damage supplier relations.</li>
  <li><b>Working capital approaches</b>: <b>conservative</b> (finance permanent and some temporary current assets with long-term funds: higher cost, lower liquidity risk), <b>aggressive</b> (fund some permanent current assets with short-term debt: cheaper, more rollover risk), moderate (match maturities).</li>
  <li><b>Primary sources of liquidity</b>: cash and marketable securities, short-term funds (trade credit, bank lines), cash flow management. <b>Secondary sources</b>: negotiating debt contracts, liquidating assets, filing for bankruptcy protection; these change the company's operations or finances.</li>
  <li><b>Drags</b> on liquidity (delay inflows: uncollected receivables, obsolete inventory, tight credit) and <b>pulls</b> (accelerate outflows: early payments to suppliers, reduced credit lines).</li>
</ul>
<div class="formula">Cost of trade credit (not taking the discount) = (1 + discount ÷ (1 − discount))^(365 ÷ days beyond the discount period) − 1</div>
<div class="ex"><b>Example:</b> Terms 2/10 net 40. Paying on day 40 instead of 10 costs (1 + 0.02/0.98)^(365/30) − 1 = 27.9% a year, so taking the discount is cheaper than borrowing at less than 27.9%.</div>

<h3>5. Capital investments and capital allocation</h3>
<p>Project types: <b>going concern</b> (maintenance, replacement), <b>regulatory/compliance</b>, <b>expansion</b>, and other (e.g. high-risk new ventures). Process: idea generation → investment analysis → planning and prioritizing → monitoring and <b>post-investment review</b>.</p>
<div class="formula">NPV = Σ CFt ÷ (1 + r)^t − initial outlay · IRR: the rate at which NPV = 0</div>
<ul>
  <li>Accept if NPV &gt; 0 (or IRR &gt; cost of capital) for independent projects.</li>
  <li>For <b>mutually exclusive</b> projects with conflicting rankings (differences in scale or timing of cash flows), choose the <b>higher NPV</b>. IRR implicitly assumes reinvestment at the IRR; NPV assumes reinvestment at the cost of capital, which is more realistic.</li>
  <li><b>ROIC</b> = after-tax operating profit ÷ average invested capital. If ROIC &gt; cost of capital, the company creates value; if lower, it destroys value.</li>
  <li><b>Pitfalls</b>: inertia (last year's budget plus a bit), source-of-capital bias, failing to consider alternatives, pet projects, focusing on <b>EPS or accounting returns</b> instead of NPV, using the wrong discount rate, internal forecasting errors, overlooking the cost of capital.</li>
</ul>
<h4>Real options</h4>
<table>
  <tr><th>Option</th><th>Example</th></tr>
  <tr><td>Timing</td><td>Delay an investment until uncertainty resolves</td></tr>
  <tr><td>Sizing: <b>abandonment</b></td><td>Exit if results are poor</td></tr>
  <tr><td>Sizing: <b>growth (expansion)</b></td><td>Expand a pilot plant if demand is strong</td></tr>
  <tr><td>Flexibility</td><td>Price-setting or production-flexibility (switch inputs/outputs)</td></tr>
  <tr><td>Fundamental</td><td>Payoffs depend on an underlying price (e.g. a mine's value on commodity prices)</td></tr>
</table>
<div class="formula">Project NPV with options = NPV without options − cost of options + value of options</div>

<h3>6. Capital structure</h3>
<div class="formula">WACC = wd × rd × (1 − t) + wp × rp + we × re (use target, market-value weights)</div>
<h4>Modigliani–Miller</h4>
<table>
  <tr><th></th><th>No taxes</th><th>With corporate taxes</th></tr>
  <tr><td>Proposition I (value)</td><td>V_L = V_U: capital structure is irrelevant</td><td>V_L = V_U + t × D: value rises with debt (tax shield)</td></tr>
  <tr><td>Proposition II (cost of equity)</td><td>re = r0 + (r0 − rd)(D/E): re rises; WACC constant</td><td>re = r0 + (r0 − rd)(1 − t)(D/E): WACC falls as debt rises</td></tr>
</table>
<div class="ex"><b>Example:</b> r0 = 10%, rd = 6%, D/E = 0.5, t = 25%: re = 10% + 4% × 0.75 × 0.5 = 11.5%. Without taxes it would be 12%.</div>
<ul>
  <li><b>Static trade-off theory</b>: add debt until the marginal tax benefit equals the marginal expected cost of <b>financial distress</b> (direct bankruptcy costs and indirect costs such as lost customers). This gives an optimal, value-maximizing capital structure.</li>
  <li><b>Pecking order theory</b> (asymmetric information): managers prefer <b>internal funds → debt → new equity</b>. Issuing equity signals that managers think the shares are <b>overvalued</b>; debt signals confidence.</li>
  <li><b>Agency costs</b>: debt disciplines managers (less free cash flow to waste) but brings shareholder–creditor conflicts.</li>
  <li><b>Life cycle</b>: start-ups (negative, volatile cash flows, few tangible assets) rely on <b>equity</b>; growth firms add some debt; mature firms with stable cash flows and collateral use more debt.</li>
  <li><b>Factors</b>: business risk (revenue volatility, <b>operating leverage</b> from fixed costs), tangible assets, cash flow stability, ratings targets, market conditions. Managers may deviate from target weights temporarily due to market prices, opportunistic issuance or transaction costs.</li>
</ul>
<div class="formula">Background: DOL = %ΔEBIT ÷ %ΔSales · DFL = %ΔNet income ÷ %ΔEBIT · DTL = DOL × DFL</div>

<h3>7. Business models</h3>
<ul>
  <li><b>Elements</b>: customers and markets, <b>value proposition</b>, channels, pricing, value chain/key assets, and how the company earns profits.</li>
  <li><b>Pricing approaches</b>: value-based, cost-plus, price discrimination, dynamic pricing, <b>freemium</b> (basic free, premium paid), <b>razors-and-blades</b> (cheap base product, profitable consumables), bundling, subscription, licensing, franchising, auctions.</li>
  <li><b>Network effects</b>: a product becomes more valuable as more users join (platforms, marketplaces); can create winner-take-most markets. Crowdsourcing uses users to create value.</li>
  <li>Financial implications: scalability, unit economics, break-even, and how the model affects margins, capital intensity and risk.</li>
</ul>
<div class="how"><b>How it's tested:</b> identify governance conflicts and the right mechanism; CCC and trade-credit cost; NPV/IRR choices; MM propositions; trade-off vs pecking order; real options; business-model terms.</div>
<div class="key"><b>Carry forward to Level III</b>: governance and ESG analysis appear in institutional and private markets work; WACC, capital structure and real options support private equity and corporate-issuer analysis.</div>
<div class="trap"><b>Trap:</b> under MM with no taxes the cost of equity <b>rises</b> with leverage; it's the <b>WACC</b> that stays constant.</div>
`;

window.QB_HARD.l1ci = [
  ["Which organizational form gives owners limited liability and is taxed as a separate legal entity?",
    ["A corporation", "A general partnership", "A sole proprietorship"],
    "A corporation is a separate legal entity with its own tax liability; owners' losses are limited to their investment. Partnerships and proprietorships are pass-through entities.", "r"],
  ["In a limited partnership, the general partner:",
    ["Manages the business and has unlimited liability", "Has liability limited to the capital it invested", "Isn't allowed to take part in managing the business"],
    "The GP runs the partnership and bears unlimited liability; limited partners are passive investors with liability limited to their investment.", "r"],
  ["Which organizational form avoids the 'double taxation' of business profits found in many jurisdictions?",
    ["A partnership", "A listed corporation", "A private corporation"],
    "Partnership income passes through to the partners and is taxed once. Corporate profits are taxed at the company level and again when distributed as dividends.", "r"],
  ["Compared with a company's debtholders, its equity holders have:",
    ["A residual claim with unlimited upside", "A fixed claim with priority in liquidation", "Lower risk and voting control"],
    "Equity holders are paid only after all other claims but keep all remaining value; debtholders have a fixed, prior claim with capped upside.", "r"],
  ["Viewed through an options framework, a company's shareholders effectively hold:",
    ["A call on the firm's assets, struck at the face value of debt", "A put on the firm's assets, struck at the face value of debt", "A risk-free bond combined with a short call on the assets"],
    "If assets exceed the debt at maturity, shareholders keep the excess; otherwise they walk away. That's a call option, which is why shareholders benefit from more risk.", "r"],
  ["Which action by management is most likely to benefit shareholders at the expense of creditors?",
    ["Undertaking much riskier projects funded with debt", "Issuing new equity in order to repay outstanding debt", "Increasing the company's cash reserves"],
    "Riskier projects raise the value of the equity 'call option' while increasing default risk borne by creditors.", "r"],
  ["A controlling shareholder holding super-voting shares pushes through a purchase of assets from a company she privately owns, at an inflated price. This is a conflict between:",
    ["Controlling and minority shareholders", "Shareholders and creditors", "Managers and the board of directors"],
    "Related-party transactions that benefit a controlling owner at the expense of other shareholders are a classic controlling–minority conflict.", "r"],
  ["Which board committee is primarily responsible for overseeing financial reporting, internal controls and the external auditor?",
    ["The audit committee", "The remuneration committee", "The nomination committee"],
    "The audit committee oversees the integrity of financial statements, internal control and the external audit. Remuneration sets executive pay; nomination selects directors.", "r"],
  ["Cumulative voting in board elections:",
    ["Helps minority shareholders win board representation", "Limits each share to one vote per director seat", "Prevents dual-class share structures"],
    "Shareholders can cast all their votes (shares × seats) for one or a few candidates, giving minority holders a better chance of electing a director.", "r"],
  ["Which governance mechanism primarily protects a company's creditors?",
    ["Covenants in the bond indenture", "Say-on-pay votes", "Proxy access for shareholders"],
    "Covenants restrict actions (extra debt, asset sales, dividends) and require certain conditions (ratio levels) to protect lenders.", "r"],
  ["A staggered (classified) board, where only a fraction of directors is elected each year, most likely:",
    ["Makes a hostile takeover more difficult", "Strengthens shareholders' power to replace the board", "Ensures every director stands for election annually"],
    "A bidder can't replace a majority of the board in one election, so staggered boards act as a takeover defence and can entrench management.", "r"],
  ["A company has days sales outstanding of 40, days inventory on hand of 55 and days payables of 35. Its cash conversion cycle is closest to:",
    ["60 days", "130 days", "50 days"],
    "CCC = DSO + DIO − DPO = 40 + 55 − 35 = 60 days.", "c"],
  ["A supplier offers terms of 2/10 net 40. The annualized cost of forgoing the discount and paying on day 40 is closest to:",
    ["27.9%", "24.8%", "2.0%"],
    "(1 + 0.02/0.98)^(365/30) − 1 = 1.0204^12.17 − 1 = 27.9%. 24.8% is the simple (non-compounded) rate.", "c"],
  ["Which of the following is a secondary source of liquidity?",
    ["Renegotiating existing debt contracts", "Cash flow generated by operations", "Unused committed bank lines of credit"],
    "Secondary sources (renegotiating debt, selling assets, bankruptcy protection) change the firm's operations or finances. Operating cash flow and bank lines are primary sources.", "r"],
  ["A company funds some of its permanent current assets with short-term borrowing. Its working capital financing approach is best described as:",
    ["Aggressive", "Conservative", "Moderate"],
    "Using short-term debt for permanent needs lowers cost but raises refinancing (rollover) risk: an aggressive approach.", "r"],
  ["A project costs 1,000 and generates cash flows of 400, 500 and 300 at the end of years 1–3. At a 10% cost of capital, its NPV is closest to:",
    ["2.25", "200.00", "−48.47"],
    "PV = 400/1.1 + 500/1.1² + 300/1.1³ = 363.64 + 413.22 + 225.39 = 1,002.25. NPV = 2.25. (200 ignores discounting.)", "c"],
  ["For two mutually exclusive projects whose NPV and IRR rankings conflict, the company should choose the project with the:",
    ["Higher NPV", "Higher IRR", "Shorter payback period"],
    "NPV measures the value added at the cost of capital and assumes realistic reinvestment; IRR rankings can be distorted by scale and timing differences.", "r"],
  ["Compared with NPV, the IRR method implicitly assumes that interim cash flows are reinvested at:",
    ["The IRR", "The cost of capital", "The risk-free rate"],
    "IRR assumes reinvestment at the IRR itself; NPV assumes reinvestment at the cost of capital.", "r"],
  ["A company's return on invested capital is 8% and its cost of capital is 10%. The company is most likely:",
    ["Destroying value as it invests", "Creating value for its shareholders", "Earning a positive economic profit"],
    "Value is created only when ROIC exceeds the cost of capital. Here each dollar invested earns less than investors require.", "c"],
  ["A division manager sets each year's capital budget equal to last year's plus 5%, without new analysis. This capital allocation pitfall is:",
    ["Inertia", "Source-of-capital bias", "A pet project"],
    "Inertia is relying on the prior year's allocation rather than evaluating opportunities afresh.", "r"],
  ["A company builds a small plant with the right to add capacity later if demand proves strong. This right is best described as a:",
    ["Growth (expansion) option", "Abandonment (exit) option", "Timing option"],
    "The right to expand if conditions are favourable is a growth option, a type of sizing option.", "r"],
  ["A project has an NPV of −$5 million before considering an option to expand later, which is valued at $8 million. The company should:",
    ["Accept it, because NPV including the option is +$3 million", "Reject it, because its base-case NPV is negative", "Accept it only if the option will certainly be exercised"],
    "Project NPV = NPV without options + value of options = −5 + 8 = +$3 million, so the project adds value.", "c"],
  ["Under the Modigliani–Miller propositions without taxes, increasing a company's financial leverage:",
    ["Raises the cost of equity; WACC is unchanged", "Lowers WACC and raises firm value", "Leaves the cost of equity unchanged as debt rises"],
    "Cheaper debt is exactly offset by a higher cost of equity (MM II), so WACC and firm value are unchanged (MM I).", "r"],
  ["A company's unlevered cost of capital is 10%, its cost of debt is 6%, its debt-to-equity ratio is 0.5 and its tax rate is 25%. Under MM with taxes, its cost of equity is closest to:",
    ["11.5%", "12.0%", "10.0%"],
    "re = r0 + (r0 − rd)(1 − t)(D/E) = 10% + 4% × 0.75 × 0.5 = 11.5%. Without taxes it would be 12.0%.", "c"],
  ["An unlevered company is worth $100 million. It issues $40 million of debt to buy back shares, with a 25% tax rate. Under MM with corporate taxes, the levered company is worth:",
    ["$110 million", "$100 million", "$140 million"],
    "V_L = V_U + tD = 100 + 0.25 × 40 = $110 million. The tax shield on interest adds value.", "c"],
  ["According to the static trade-off theory, a company's optimal capital structure is where:",
    ["The marginal tax shield equals the marginal distress cost", "The company is financed entirely with debt", "The cost of equity equals the after-tax cost of debt financing"],
    "Debt adds value through the tax shield until the expected costs of financial distress rise enough to offset it.", "r"],
  ["Pecking order theory predicts that managers prefer to finance new investment with:",
    ["Internal funds first, then debt, then new equity", "New equity first, then debt, then internal funds", "Debt first, then internal funds, then new equity"],
    "Because of asymmetric information, managers favour sources that reveal the least about the company: retained earnings, then debt, with equity as a last resort.", "r"],
  ["Under asymmetric information, an announcement that a company will issue new shares is most likely interpreted as:",
    ["A negative signal that the shares are overvalued", "A positive signal that strong future cash flows are coming", "A neutral event that carries no information"],
    "Managers know more than investors and tend to issue equity when they think it's overpriced, so share prices often fall on equity issue announcements.", "r"],
  ["A start-up with negative, volatile cash flows and few tangible assets is most likely to be financed with:",
    ["Equity", "Secured bank loans", "Long-term public bonds"],
    "Without stable cash flows or collateral, a start-up can't support much debt, so it relies on equity (often venture capital).", "r"],
  ["A company's target weights are 30% debt and 70% equity. Its pre-tax cost of debt is 6%, its cost of equity is 11% and its tax rate is 25%. Its WACC is closest to:",
    ["9.05%", "9.50%", "8.50%"],
    "WACC = 0.30 × 6% × (1 − 0.25) + 0.70 × 11% = 1.35% + 7.70% = 9.05%. 9.50% forgets the tax deduction on interest.", "c"],
  ["A company sells printers at close to cost and earns most of its profit from replacement ink cartridges. This pricing approach is:",
    ["Razors-and-blades", "Freemium", "Value-based pricing"],
    "Razors-and-blades pricing sells the base product cheaply and profits from repeat purchases of consumables.", "r"],
  ["A platform business whose value to each user increases as more users join benefits from:",
    ["Network effects", "Economies of scope", "Operating leverage"],
    "Network effects make a product more valuable with each additional user, often leading to winner-take-most markets.", "r"],
  ["Unlike stakeholder theory, shareholder theory holds that a company's primary goal is to:",
    ["Maximize the value of its shares", "Balance the interests of all stakeholders", "Maximize the welfare of its employees"],
    "Shareholder theory focuses on maximizing shareholder value; stakeholder theory considers shareholders, creditors, employees, customers, suppliers and society.", "r"],
  ["Which of the following is a social (S) factor in ESG analysis?",
    ["Employee health and safety practices", "The company's greenhouse gas emissions", "Board independence"],
    "Social factors cover human capital, health and safety, product safety and community relations. Emissions are environmental; board independence is governance.", "r"],
  ["A company with a high proportion of fixed costs in its cost structure most likely has:",
    ["High operating leverage, so EBIT is very sensitive to sales", "Low business risk, because its costs are largely predictable", "Low operating leverage and stable operating income"],
    "Fixed costs magnify the effect of sales changes on operating income (DOL = %ΔEBIT ÷ %ΔSales), increasing business risk.", "r"]
];

window.GLOSSARY.push(
  ["Equity as a call option", "Shareholders hold a call on the firm's assets struck at the face value of debt; debtholders are short a put. So shareholders gain from more risk.", "l1ci"],
  ["Principal–agent conflicts", "Shareholders vs managers; controlling vs minority shareholders; shareholders vs creditors.", "l1ci"],
  ["Cumulative voting", "Shareholders can concentrate their total votes (shares × seats) on a few candidates, helping minorities elect directors.", "l1ci"],
  ["Cash conversion cycle", "DSO + DIO − DPO. A shorter cycle requires less working capital financing.", "l1ci"],
  ["Cost of trade credit", "(1 + d ÷ (1 − d))^(365 ÷ days beyond discount period) − 1. e.g. 2/10 net 30 ≈ 44.6%.", "l1ci"],
  ["Primary vs secondary liquidity", "Primary: cash, short-term funds, cash management. Secondary: renegotiating debt, liquidating assets, bankruptcy protection.", "l1ci"],
  ["NPV vs IRR", "Choose higher NPV for mutually exclusive projects. IRR assumes reinvestment at the IRR; NPV at the cost of capital.", "l1ci"],
  ["Real options", "Timing, sizing (abandonment, growth), flexibility (price-setting, production) and fundamental options. Project NPV = base NPV − option cost + option value.", "l1ci"],
  ["WACC", "wd rd(1 − t) + wp rp + we re, using target market-value weights.", "l1ci"],
  ["MM Proposition II", "No taxes: re = r0 + (r0 − rd)(D/E). With taxes: re = r0 + (r0 − rd)(1 − t)(D/E).", "l1ci"],
  ["MM with taxes", "V_L = V_U + tD: the interest tax shield adds value, so WACC falls as leverage rises.", "l1ci"],
  ["Static trade-off theory", "Optimal capital structure where the marginal tax benefit of debt = marginal expected cost of financial distress.", "l1ci"],
  ["Pecking order theory", "Asymmetric information: internal funds → debt → equity. Equity issues signal overvaluation.", "l1ci"],
  ["Network effects", "A product's value rises as more users join; typical of platforms and marketplaces.", "l1ci"]
);
