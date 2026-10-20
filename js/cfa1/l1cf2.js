// CFA Level I · Financial Statement Analysis · Learning module 5: Analyzing Statements of Cash Flows II.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1cf2 = `
<p class="syl">CFA Level I · Financial Statement Analysis · Learning module 5 of 12 · Analyzing Statements of Cash Flows II</p>
<p>Now that you can read and build a cash flow statement, this lesson shows how to analyze it: judging where cash comes from and whether that's sustainable, common-size cash flow statements, <b>free cash flow to the firm (FCFF)</b> and <b>to equity (FCFE)</b>, and the cash flow performance and coverage ratios. FCFF and FCFE come back in Equity valuation, so learn the formulas well.</p>

<h3>1. Evaluating sources and uses of cash</h3>
<ul>
  <li>For a healthy, mature company, <b>operating activities</b> should be the main and steady source of cash, enough to fund capital spending and debt service and to pay dividends. Persistently relying on borrowing or asset sales to fund operations is a warning sign.</li>
  <li>Compare CFO with net income: CFO consistently <b>below</b> net income (large accruals) can signal aggressive revenue or expense recognition.</li>
  <li><b>Life cycle patterns</b>: start-ups and fast-growing companies often have negative or small CFO, large investing outflows and financing inflows; mature companies generate strong CFO, moderate investment and financing outflows (dividends, buybacks, debt repayment); declining companies may have investing inflows from asset sales.</li>
  <li>Look at the drivers of CFO: is growth coming from higher profits, or temporarily from working capital (stretching payables, collecting receivables faster), which can't continue indefinitely?</li>
</ul>
<h4>Common-size cash flow statements</h4>
<p>Two formats: express each line as a <b>percentage of revenue</b>, or each inflow as a percentage of total inflows and each outflow as a percentage of total outflows. Both make trends and peer comparisons easier.</p>

<h3>2. Free cash flow <span class="hot">Highly tested</span></h3>
<p><b>Free cash flow</b> is the cash a company generates beyond what it needs to keep and grow its operations. Two versions:</p>
<div class="formula">FCFF = CFO + interest paid × (1 − tax rate) − fixed capital investment (capex) · FCFE = CFO − capex + net borrowing</div>
<ul>
  <li><b>FCFF</b> (free cash flow to the firm) is available to <b>all capital providers</b>, debt and equity. Because US GAAP (and many IFRS companies) deduct interest in CFO, the after-tax interest is added back. If an IFRS company classifies interest paid as financing, don't add it back (it's already excluded from CFO).</li>
  <li><b>FCFE</b> (free cash flow to equity) is available to <b>common shareholders</b> after paying debt holders: start from CFO (already after interest), subtract capex, add net borrowing (new borrowing minus repayments).</li>
  <li>FCFE = FCFF − interest × (1 − t) + net borrowing.</li>
</ul>
<div class="ex"><b>Example:</b> CFO $1,200 (after interest paid of $150), tax rate 30%, capex $450, net borrowing $200.
<br>FCFF = 1,200 + 150 × 0.70 − 450 = <b>$855</b>.
<br>FCFE = 1,200 − 450 + 200 = <b>$950</b> (check: 855 − 105 + 200 = 950).</div>
<div class="trap"><b>Trap:</b> net borrowing raises FCFE but has no effect on FCFF. Dividends and share buybacks don't affect either (they're uses of FCFE).</div>

<h3>3. Cash flow ratios <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Performance ratios</th><th>Formula</th></tr>
  <tr><td>Cash flow to revenue</td><td>CFO / net revenue</td></tr>
  <tr><td>Cash return on assets</td><td>CFO / average total assets</td></tr>
  <tr><td>Cash return on equity</td><td>CFO / average shareholders' equity</td></tr>
  <tr><td>Cash to income</td><td>CFO / operating income (measures how much of profit turns into cash)</td></tr>
  <tr><td>Cash flow per share</td><td>(CFO − preferred dividends) / weighted average common shares</td></tr>
</table>
<table>
  <tr><th>Coverage ratios</th><th>Formula</th></tr>
  <tr><td>Debt coverage</td><td>CFO / total debt</td></tr>
  <tr><td>Interest coverage</td><td>(CFO + interest paid + taxes paid) / interest paid</td></tr>
  <tr><td>Reinvestment</td><td>CFO / cash paid for long-term assets</td></tr>
  <tr><td>Debt payment</td><td>CFO / cash paid for long-term debt repayment</td></tr>
  <tr><td>Dividend payment</td><td>CFO / dividends paid</td></tr>
  <tr><td>Investing and financing</td><td>CFO / cash outflows for investing and financing activities</td></tr>
</table>
<div class="ex"><b>Example:</b> CFO 1,200; revenue 8,000; average total assets 10,000; total debt 4,000; interest paid 150; taxes paid 300; capex 450.
<br>Cash flow to revenue = 15%; cash return on assets = 12%; debt coverage = 30%; interest coverage = (1,200 + 150 + 300)/150 = 11.0×; reinvestment = 1,200/450 = 2.7×.</div>
<p>A reinvestment ratio above 1 means the company can fund its capital spending from operations; a debt coverage ratio of 30% suggests it could repay its debt in roughly three years from CFO.</p>

<div class="how"><b>How it's tested:</b> calculating FCFF and FCFE (watch where interest is classified and the tax adjustment), interpreting sources of cash and life-cycle patterns, common-size cash flows, and computing and interpreting cash flow performance and coverage ratios.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Evaluate a company's sources and uses of cash, including CFO vs net income and life-cycle patterns.</li>
  <li>Prepare and interpret common-size cash flow statements.</li>
  <li>Calculate FCFF and FCFE from CFO.</li>
  <li>Calculate and interpret cash flow performance and coverage ratios.</li>
</ul></div>
`;

window.QB_HARD.l1cf2 = [
  ["A US GAAP company reports CFO of 800, interest paid of 100, capital expenditures of 300 and a 25% tax rate. Free cash flow to the firm is closest to:",
    ["575", "600", "500"],
    "FCFF = CFO + interest × (1 − t) − FCInv = 800 + 75 − 300 = 575. (600 adds back pre-tax interest.)", "c"],
  ["A company reports CFO of 800 (with interest paid included), capital expenditures of 300 and net new borrowing of 50. Free cash flow to equity is closest to:",
    ["550", "450", "475"],
    "FCFE = CFO − FCInv + net borrowing = 800 − 300 + 50 = 550.", "c"],
  ["Which pattern most likely describes a mature, financially healthy company?",
    ["Strong CFO that funds capex and payouts", "Negative CFO funded by new borrowing", "Large investing inflows from asset sales each year"],
    "Mature companies generate steady operating cash that covers investment and returns cash to capital providers.", "s"],
  ["A company's net income has grown steadily, but its CFO has been well below net income for several years. This most likely indicates:",
    ["Possibly low earnings quality", "Unusually conservative revenue recognition", "Strong conversion of profits into cash"],
    "Persistent accruals (profit not turning into cash) can signal aggressive revenue or expense recognition.", "s"],
  ["A company reports CFO of $1,200 after interest paid of $150, a tax rate of 30% and capital expenditure of $450. FCFF is closest to:",
    ["$855", "$750", "$900"],
    "FCFF = CFO + interest(1 − t) − capex = 1,200 + 105 − 450 = $855.", "c"],
  ["Using the same data (CFO $1,200 after interest, capex $450) and net borrowing of $200, FCFE is closest to:",
    ["$950", "$1,055", "$750"],
    "FCFE = CFO − capex + net borrowing = 1,200 − 450 + 200 = $950.", "c"],
  ["An IFRS company classifies interest paid as a financing cash flow. When computing FCFF from its CFO, the analyst should:",
    ["Not add back any interest", "Add back interest paid × (1 − tax rate)", "Subtract interest paid × (1 − t)"],
    "The add-back exists because interest normally reduces CFO; if it's in financing, CFO already excludes it.", "r"],
  ["An increase in a company's net borrowing will most likely:",
    ["Increase FCFE but not FCFF", "Increase both FCFF and FCFE", "Increase FCFF but not FCFE"],
    "Net borrowing is cash available to shareholders (FCFE) but doesn't change cash generated for all capital providers (FCFF).", "r"],
  ["CFO is 1,200, interest paid 150 and taxes paid 300. The cash flow interest coverage ratio is closest to:",
    ["11.0×", "8.0×", "9.0×"],
    "(CFO + interest paid + taxes paid)/interest paid = 1,650/150 = 11.0×. CFO/interest = 8.0×.", "c"],
  ["A company's CFO is 1,200 and it spent 450 on long-term assets. The reinvestment ratio is closest to:",
    ["2.7", "0.4", "1.6"],
    "Reinvestment = CFO/cash paid for long-term assets = 1,200/450 = 2.67: operations fund capex comfortably.", "c"],
  ["CFO is 1,200 and average total assets are 10,000. The cash return on assets is:",
    ["12%", "8%", "15%"],
    "Cash ROA = CFO/average total assets = 12%.", "c"],
  ["In a common-size cash flow statement using the total inflows/outflows approach, each cash outflow is expressed as a percentage of:",
    ["Total cash outflows", "Total revenue for the year", "Total assets at year-end"],
    "Inflows are divided by total inflows and outflows by total outflows; the alternative format divides every line by revenue.", "r"],
];

window.GLOSSARY.push(
  ["FCFF and FCFE","FCFF = CFO + Int(1 − t) − FCInv. FCFE = CFO − FCInv + net borrowing.","l1cf2"],
  ["Cash flow performance ratios", "CFO/revenue, CFO/avg assets, CFO/avg equity, CFO/operating income, cash flow per share.", "l1cf2"],
  ["Cash flow coverage ratios", "CFO/debt; (CFO + interest + taxes)/interest; CFO/capex; CFO/dividends.", "l1cf2"],
  ["Common-size cash flow statement", "Lines as % of revenue, or inflows/outflows as % of total inflows/outflows.", "l1cf2"]
);
