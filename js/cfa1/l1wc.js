// CFA Level I · Corporate Issuers · Learning module 4: Working Capital and Liquidity.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1wc = `
<p class="syl">CFA Level I · Corporate Issuers · Learning module 4 of 7 · Working Capital and Liquidity</p>
<p><b>Working capital</b> is the money tied up in day-to-day operations: receivables and inventory, partly financed by payables. <b>Liquidity</b> is the ability to meet short-term obligations. This lesson covers the cash conversion cycle, how companies finance working capital, sources of liquidity and what drains it, liquidity ratios, and how to compare short-term funding options, including the cost of trade credit.</p>

<h3>1. The cash conversion cycle <span class="hot">Highly tested</span></h3>
<div class="formula">Days sales outstanding (DSO) = receivables / (revenue/365) · Days inventory on hand (DOH) = inventory / (COGS/365) · Days payables (DPO) = payables / (COGS/365)</div>
<div class="formula">Operating cycle = DOH + DSO · Cash conversion cycle (CCC) = DOH + DSO − DPO</div>
<p>The CCC is the number of days cash is tied up between paying suppliers and collecting from customers. A shorter CCC means less working capital to finance. Ways to shorten it: collect faster (lower DSO), hold less inventory (lower DOH), pay suppliers later (higher DPO, without losing discounts or goodwill).</p>
<div class="ex"><b>Example:</b> Revenue $4,000, COGS $3,000, receivables $500, inventory $600, payables $300 (all in thousands). DSO = 500/(4,000/365) = 45.6 days; DOH = 600/(3,000/365) = 73.0 days; DPO = 300/(3,000/365) = 36.5 days. CCC = 73.0 + 45.6 − 36.5 = 82.1 days.</div>
<p>A <b>negative</b> CCC (common for retailers that collect cash immediately and pay suppliers later) means suppliers effectively finance operations.</p>

<h3>2. Financing working capital <span class="hot">Highly tested</span></h3>
<p>Current assets have a <b>permanent</b> part (the minimum level always needed) and a <b>fluctuating</b> (seasonal) part.</p>
<table>
  <tr><th>Approach</th><th>Funding</th><th>Trade-off</th></tr>
  <tr><td><b>Conservative</b></td><td>Long-term funds finance permanent current assets <b>and some fluctuating</b> ones</td><td>Lowest refinancing/liquidity risk, highest cost (long-term funding usually costs more)</td></tr>
  <tr><td><b>Moderate (matching)</b></td><td>Long-term funds for permanent assets; short-term funds for fluctuating assets</td><td>In between</td></tr>
  <tr><td><b>Aggressive</b></td><td>Short-term funds finance fluctuating <b>and some permanent</b> current assets</td><td>Lowest cost, highest refinancing and interest rate risk</td></tr>
</table>

<h3>3. Sources of liquidity, and drags and pulls <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Primary sources</b> (normal operations): cash balances; short-term funds (trade credit, bank lines of credit); effective cash flow management (collections, short-term investments).</li>
  <li><b>Secondary sources</b> (used when primary sources fall short; may signal financial stress and change the company's operations or capital structure): <b>renegotiating debt</b> contracts, <b>liquidating assets</b>, and filing for bankruptcy protection to reorganize.</li>
  <li><b>Drags on liquidity</b> delay cash <b>inflows</b>: uncollected or bad receivables, obsolete inventory, tight credit conditions.</li>
  <li><b>Pulls on liquidity</b> accelerate cash <b>outflows</b>: paying suppliers early, reduced credit limits from suppliers, limits on short-term lines.</li>
</ul>
<h4>Liquidity ratios</h4>
<div class="formula">Current ratio = current assets / current liabilities · Quick ratio = (cash + marketable securities + receivables) / current liabilities · Cash ratio = (cash + marketable securities) / current liabilities</div>
<p>The quick ratio excludes inventory (the least liquid current asset); the cash ratio is the most conservative. Higher = more liquid, but very high ratios can mean idle assets.</p>

<h3>4. Short-term funding options</h3>
<table>
  <tr><th>Source</th><th>Notes</th></tr>
  <tr><td><b>Trade credit</b> (accounts payable)</td><td>Spontaneous financing from suppliers; often with an early-payment discount</td></tr>
  <tr><td><b>Uncommitted line of credit</b></td><td>Bank may refuse to lend; cheapest but least reliable</td></tr>
  <tr><td><b>Committed (regular) line of credit</b></td><td>Bank commits for a period for a fee; more reliable</td></tr>
  <tr><td><b>Revolving credit agreement</b></td><td>Committed, larger and longer (often multi-year); most reliable bank source</td></tr>
  <tr><td><b>Secured (asset-based) loans</b></td><td>Backed by receivables or inventory</td></tr>
  <tr><td><b>Factoring</b></td><td>Selling receivables at a discount to a factor, who collects them</td></tr>
  <tr><td><b>Commercial paper</b></td><td>Short-term unsecured notes issued by large, highly rated companies; usually needs a backup line of credit</td></tr>
</table>
<p>Choice depends on cost, flexibility, the company's size and credit quality, and the reliability of the source.</p>
<h4>Cost of trade credit <span class="hot">Highly tested</span></h4>
<p>Terms "2/10 net 30" mean a 2% discount if paid within 10 days, otherwise the full amount is due in 30 days. Skipping the discount is like borrowing for the extra 20 days at a high rate:</p>
<div class="formula">Cost of trade credit = (1 + discount/(1 − discount))^(365/(days beyond the discount period)) − 1</div>
<div class="ex"><b>Example:</b> 2/10 net 30: (1 + 0.02/0.98)^(365/20) − 1 = 44.6%. Unless the company can't borrow more cheaply elsewhere, it should take the discount. Terms of 1/10 net 30: (1.0101)^18.25 − 1 = 20.1%.</div>

<div class="how"><b>How it's tested:</b> computing DSO, DOH, DPO and the cash conversion cycle; identifying the working capital financing approach; classifying primary vs secondary liquidity sources and drags vs pulls; liquidity ratios; the effective cost of trade credit and choosing between funding sources.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Calculate and interpret the operating cycle and cash conversion cycle.</li>
  <li>Compare conservative, moderate and aggressive working capital financing approaches.</li>
  <li>Distinguish primary and secondary sources of liquidity, and drags and pulls on liquidity.</li>
  <li>Calculate current, quick and cash ratios.</li>
  <li>Describe short-term funding sources and compute the cost of forgoing a trade discount.</li>
</ul></div>
`;

window.QB_HARD.l1wc = [
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
  ["A company has annual revenue of $4,000 and receivables of $500. Its days sales outstanding is closest to:",
    ["45.6 days", "8.0 days", "73.0 days"],
    "DSO = receivables/(revenue/365) = 500/10.96 = 45.6 days. (8.0 is the receivables turnover.)", "c"],
  ["Which change would shorten a company's cash conversion cycle?",
    ["Paying suppliers later", "Holding more inventory", "Offering customers longer payment terms"],
    "CCC = DOH + DSO − DPO. Higher DPO shortens it; more inventory or slower collections lengthen it.", "r"],
  ["A retailer collects cash from customers immediately and pays suppliers after 60 days, while holding inventory for 30 days. Its cash conversion cycle is:",
    ["−30 days", "90 days", "30 days"],
    "CCC = 30 + 0 − 60 = −30 days: suppliers finance the business.", "c"],
  ["A company finances its permanent current assets and part of its seasonal current assets with long-term debt. Its approach is best described as:",
    ["Conservative", "Aggressive", "Moderate"],
    "Using long-term funds even for some fluctuating assets is conservative: lower liquidity risk, higher cost.", "r"],
  ["An aggressive working capital financing approach most likely results in:",
    ["Lower financing cost but higher refinancing risk", "Higher financing cost but lower refinancing risk", "No exposure to interest rate changes"],
    "Short-term funding is usually cheaper but must be rolled over, exposing the company to refinancing and rate risk.", "r"],
  ["Customers taking much longer to pay than expected is best described as a:",
    ["Drag on liquidity", "Pull on liquidity", "Secondary source of liquidity"],
    "Drags delay cash inflows (slow collections, obsolete inventory); pulls accelerate outflows.", "r"],
  ["A supplier reduces the credit limit it extends to a company, forcing faster payment. This is a:",
    ["Pull on liquidity", "Drag on liquidity", "Primary source of liquidity"],
    "Reduced credit limits accelerate cash outflows: a pull on liquidity.", "r"],
  ["Current assets are $900 (cash $100, marketable securities $50, receivables $300, inventory $450) and current liabilities are $600. The quick ratio is closest to:",
    ["0.75", "1.50", "0.25"],
    "Quick ratio = (100 + 50 + 300)/600 = 0.75. The current ratio is 1.50; the cash ratio 0.25.", "c"],
  ["Which bank financing source is the most reliable for a borrower?",
    ["A revolving credit agreement", "An uncommitted line of credit", "An overdraft facility"],
    "Revolvers are formal, committed and often multi-year; an uncommitted line can be refused by the bank at any time.", "r"],
  ["Selling accounts receivable at a discount to a third party that then collects them is called:",
    ["Factoring", "Commercial paper", "A banker's acceptance"],
    "In factoring, the factor buys receivables and takes on collection (and often credit risk).", "r"],
  ["Commercial paper is most likely issued by:",
    ["Large companies with high credit ratings", "Small firms with weak credit", "Companies that can't get bank lines"],
    "CP is short-term unsecured debt; only large, creditworthy issuers can access the market, usually with a backup line of credit.", "r"],
  ["A supplier offers terms of 1/10 net 30. The effective annual cost of not taking the discount is closest to:",
    ["20.1%", "18.4%", "12.2%"],
    "(1 + 0.01/0.99)^(365/20) − 1 = 1.0101^18.25 − 1 = 20.1%. The simple approximation (1/99 × 365/20) gives 18.4%.", "c"],
];

window.GLOSSARY.push(
  ["Cash conversion cycle","DSO + DIO − DPO. A shorter cycle requires less working capital financing.","l1wc"],
  ["Cost of trade credit","(1 + d ÷ (1 − d))^(365 ÷ days beyond discount period) − 1. e.g. 2/10 net 30 ≈ 44.6%.","l1wc"],
  ["Primary vs secondary liquidity","Primary: cash, short-term funds, cash management. Secondary: renegotiating debt, liquidating assets, bankruptcy protection.","l1wc"],
  ["Operating cycle vs CCC", "DOH + DSO vs DOH + DSO − DPO.", "l1wc"],
  ["Working capital financing approaches", "Conservative (long-term for some seasonal), moderate (matching), aggressive (short-term for some permanent).", "l1wc"],
  ["Drags vs pulls on liquidity", "Drags delay inflows (slow collections); pulls speed outflows (reduced credit limits).", "l1wc"],
  ["Quick ratio", "(Cash + marketable securities + receivables)/current liabilities.", "l1wc"],
  ["Factoring", "Selling receivables at a discount to a factor who collects them.", "l1wc"],
  ["Commercial paper", "Short-term unsecured notes of large, highly rated issuers, backed by credit lines.", "l1wc"]
);
