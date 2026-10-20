// CFA Level I · Corporate Issuers · Learning module 2: Investors and Other Stakeholders.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1stake = `
<p class="syl">CFA Level I · Corporate Issuers · Learning module 2 of 7 · Investors and Other Stakeholders</p>
<p>A company has many groups with an interest in it, and their interests don't always line up. This lesson compares the claims of lenders and shareholders (including the useful "equity as a call option" view), describes the other stakeholder groups, contrasts shareholder and stakeholder theories of the company's purpose, and introduces environmental, social and governance (ESG) factors in investment analysis.</p>

<h3>1. Lenders vs shareholders <span class="hot">Highly tested</span></h3>
<table>
  <tr><th></th><th>Debtholders (lenders)</th><th>Equity holders (shareholders)</th></tr>
  <tr><td>Claim</td><td><b>Fixed</b>, contractual: interest and principal</td><td><b>Residual</b>: whatever is left after all other claims</td></tr>
  <tr><td>Priority</td><td>Paid first; higher priority in liquidation</td><td>Paid last</td></tr>
  <tr><td>Upside</td><td><b>Limited</b> to promised payments</td><td><b>Unlimited</b></td></tr>
  <tr><td>Downside</td><td>Can lose principal if the company defaults</td><td>Limited to the amount invested (limited liability)</td></tr>
  <tr><td>Control</td><td>No vote; protection through contracts (covenants, collateral)</td><td>Voting rights (elect the board)</td></tr>
  <tr><td>Required return</td><td>Lower</td><td>Higher (more risk)</td></tr>
  <tr><td>Attitude to risk</td><td>Prefer stable cash flows and low risk</td><td>May prefer higher risk (they keep the upside)</td></tr>
</table>
<h4>Equity as a call option</h4>
<p>At the debt's maturity, shareholders can pay off the debt (face value D) and keep the company, or walk away and leave the assets to lenders. So equity is like a <b>call option on the company's assets with an exercise price equal to the face value of the debt</b>:</p>
<ul>
  <li>Equity value at maturity = max(0, V − D), where V = value of the assets.</li>
  <li>Debt value = min(V, D) = risk-free debt minus a put option on the assets (lenders have effectively sold a put to shareholders).</li>
  <li>Like any call, equity gains from higher <b>volatility</b> of the assets, while debt loses. This explains why shareholders of a weak company may favour <b>riskier projects</b> at lenders' expense (risk shifting).</li>
</ul>
<div class="ex"><b>Example:</b> Assets worth $100 million, debt with face value $80 million. If assets end at $150m, equity = $70m and lenders get $80m. If assets end at $60m, equity = $0 and lenders get $60m (they bear the loss).</div>

<h3>2. Other stakeholders and their interests</h3>
<table>
  <tr><th>Stakeholder</th><th>Main interests</th></tr>
  <tr><td>Board of directors</td><td>Oversee management and protect shareholders' (and in some systems other stakeholders') interests</td></tr>
  <tr><td>Managers</td><td>Compensation, job security, power and prestige; may conflict with shareholders</td></tr>
  <tr><td>Employees</td><td>Wages, job security, safe working conditions, career development</td></tr>
  <tr><td>Customers</td><td>Product quality, safety, price, after-sales service</td></tr>
  <tr><td>Suppliers</td><td>Being paid on time; a lasting, stable relationship</td></tr>
  <tr><td>Governments and regulators</td><td>Tax revenue, employment, compliance with laws, protecting the public and the environment</td></tr>
</table>

<h3>3. Shareholder theory vs stakeholder theory</h3>
<ul>
  <li><b>Shareholder theory</b>: the company's main purpose is to <b>maximize shareholder value</b> (the value of its shares), within the law. Other stakeholders are protected by contracts and regulation.</li>
  <li><b>Stakeholder theory</b>: the company should balance the interests of <b>all</b> stakeholders, not just shareholders; doing so supports long-term value.</li>
  <li>Corporate governance systems differ: some (e.g. US, UK) lean toward shareholder primacy; others (e.g. Germany with employee board representation) give stakeholders a formal voice.</li>
</ul>

<h3>4. ESG considerations <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Factor</th><th>Examples</th></tr>
  <tr><td><b>Environmental</b></td><td>Climate change and carbon emissions, pollution and waste, water use, biodiversity, energy efficiency</td></tr>
  <tr><td><b>Social</b></td><td>Employee health and safety, labour standards, human rights in the supply chain, product safety, data privacy, community relations, diversity and inclusion</td></tr>
  <tr><td><b>Governance</b></td><td>Board independence and composition, executive pay, shareholder rights, ownership structure, accounting quality, business ethics and corruption</td></tr>
</table>
<ul>
  <li>Analysts focus on <b>material</b> ESG factors: those likely to affect a company's financial performance or risk, which differ by industry (e.g. emissions for utilities, data security for banks).</li>
  <li>ESG risks can show up as fines, lawsuits, stranded assets, lost customers, higher costs of capital or reputational damage; ESG opportunities as new markets or efficiency gains.</li>
  <li>Approaches to responsible investing include <b>exclusionary screening</b> (avoiding certain sectors), <b>ESG integration</b> (adding material ESG factors to traditional analysis), <b>thematic</b> investing (e.g. clean energy), <b>impact</b> investing (measurable social/environmental impact alongside returns) and <b>engagement</b> (using shareholder influence).</li>
</ul>

<div class="how"><b>How it's tested:</b> contrasting debt and equity claims, the options view of equity and why shareholders may prefer riskier projects, identifying stakeholder interests, shareholder vs stakeholder theory, and classifying factors as E, S or G.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Compare the claims, priority, upside, downside and risk preferences of lenders and shareholders.</li>
  <li>Explain equity as a call option on assets and debt as risk-free debt minus a put.</li>
  <li>Describe stakeholder groups and their interests, and shareholder vs stakeholder theory.</li>
  <li>Classify ESG factors and explain why materiality matters.</li>
</ul></div>
`;

window.QB_HARD.l1stake = [
  ["Compared with a company's debtholders, its equity holders have:",
    ["A residual claim with unlimited upside", "A fixed claim with priority in liquidation", "Lower risk and voting control"],
    "Equity holders are paid only after all other claims but keep all remaining value; debtholders have a fixed, prior claim with capped upside.", "r"],
  ["Viewed through an options framework, a company's shareholders effectively hold:",
    ["A call on the firm's assets, struck at the face value of debt", "A put on the firm's assets, struck at the face value of debt", "A risk-free bond combined with a short call on the assets"],
    "If assets exceed the debt at maturity, shareholders keep the excess; otherwise they walk away. That's a call option, which is why shareholders benefit from more risk.", "r"],
  ["Unlike stakeholder theory, shareholder theory holds that a company's primary goal is to:",
    ["Maximize the value of its shares", "Balance the interests of all stakeholders", "Maximize the welfare of its employees"],
    "Shareholder theory focuses on maximizing shareholder value; stakeholder theory considers shareholders, creditors, employees, customers, suppliers and society.", "r"],
  ["Which of the following is a social (S) factor in ESG analysis?",
    ["Employee health and safety practices", "The company's greenhouse gas emissions", "Board independence"],
    "Social factors cover human capital, health and safety, product safety and community relations. Emissions are environmental; board independence is governance.", "r"],
  ["Which statement about a company's lenders is most accurate? Lenders:",
    ["Have a fixed, higher-priority claim", "Benefit fully when the company's value rises", "Elect the board of directors"],
    "Lenders receive contractual payments and are paid before shareholders, but their upside is capped and they don't vote.", "r"],
  ["A company's assets are worth $60 million when its $80 million of debt matures. Using the options view, the value of equity is:",
    ["$0", "$20 million", "−$20 million"],
    "Equity = max(0, V − D) = max(0, 60 − 80) = 0. Limited liability means shareholders can't lose more than their investment; lenders absorb the $20 million shortfall.", "c"],
  ["Using the options framework, a company's lenders are effectively:",
    ["Long risk-free debt, short a put on assets", "Long a call on the company's assets", "Holding a put option on the company's shares"],
    "Risky debt = risk-free debt − put on assets: lenders bear the loss if assets fall below the face value of debt.", "r"],
  ["Higher volatility of a company's asset value most likely:",
    ["Benefits shareholders at the expense of lenders", "Benefits lenders at the expense of shareholders", "Benefits both lenders and shareholders"],
    "Equity is a call on the assets, so its value rises with volatility; the lenders' short put loses value.", "r"],
  ["Which stakeholder group's primary interest is timely payment and a stable long-term relationship?",
    ["Suppliers", "Customers", "Regulators"],
    "Suppliers want to be paid on time and value a continuing relationship.", "r"],
  ["A board that includes employee representatives by law most closely reflects:",
    ["Stakeholder theory", "Shareholder theory", "The agency theory of debt"],
    "Giving non-shareholder groups a formal role in governance reflects the stakeholder view.", "r"],
  ["Which of the following is an environmental (E) factor?",
    ["A utility's carbon emissions", "The independence of the board", "Data privacy practices"],
    "Emissions are environmental; board independence is governance; data privacy is social.", "r"],
  ["An analyst considers data security a key risk for banks but not for timber companies. This reflects the principle of:",
    ["Materiality", "Exclusionary screening", "Impact investing"],
    "Material ESG factors are those likely to affect financial performance, and they differ by industry.", "r"],
  ["An investor adds an analysis of material ESG risks to her traditional financial analysis when valuing companies. This approach is:",
    ["ESG integration", "Exclusionary screening", "Thematic investing"],
    "ESG integration combines material ESG factors with traditional analysis; exclusionary screening avoids sectors outright.", "r"],
];

window.GLOSSARY.push(
  ["Equity as a call option","Shareholders hold a call on the firm's assets struck at the face value of debt; debtholders are short a put. So shareholders gain from more risk.","l1stake"],
  ["Debt vs equity claims", "Debt: fixed, prior, capped upside. Equity: residual, last, unlimited upside, limited liability.", "l1stake"],
  ["Risky debt (options view)", "Risk-free debt minus a put on the company's assets.", "l1stake"],
  ["Shareholder vs stakeholder theory", "Maximize share value vs balance all stakeholders' interests.", "l1stake"],
  ["ESG factors", "Environmental (emissions, waste), Social (labour, safety, privacy), Governance (board, pay, rights).", "l1stake"],
  ["Material ESG factors", "Those likely to affect financial performance or risk; differ by industry.", "l1stake"]
);
