// CFA Level I · Financial Statement Analysis · Learning module 4: Analyzing Statements of Cash Flows I.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1cf1 = `
<p class="syl">CFA Level I · Financial Statement Analysis · Learning module 4 of 12 · Analyzing Statements of Cash Flows I</p>
<p>Profit isn't cash. The statement of cash flows shows where cash actually came from and went, which makes it the hardest statement to manipulate and essential for judging earnings quality and liquidity. This lesson covers how cash flows are classified (with the IFRS/US GAAP differences), the direct and indirect methods of reporting operating cash flow, and how the cash flow statement links to the income statement and balance sheet. The next lesson covers analysis (free cash flow, ratios).</p>

<h3>1. Classifying cash flows <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Activity</th><th>Inflows</th><th>Outflows</th></tr>
  <tr><td><b>Operating (CFO)</b>: day-to-day business</td><td>Cash from customers; interest and dividends received (US GAAP)</td><td>Cash to suppliers and employees; other operating expenses; income taxes; interest paid (US GAAP)</td></tr>
  <tr><td><b>Investing (CFI)</b>: long-term assets and investments</td><td>Sale of PP&amp;E, intangibles, investments and businesses; collection of loans made</td><td>Purchase of PP&amp;E (capital expenditure), intangibles, investments and businesses; loans made</td></tr>
  <tr><td><b>Financing (CFF)</b>: obtaining and repaying capital</td><td>Issuing shares; borrowing (bonds, loans)</td><td>Repaying debt; repurchasing shares; dividends paid (US GAAP); lease principal payments</td></tr>
</table>
<p>Purchases and sales of <b>trading securities</b> are usually operating cash flows (they're inventory-like for the business).</p>
<h4>IFRS vs US GAAP differences</h4>
<table>
  <tr><th>Item</th><th>IFRS</th><th>US GAAP</th></tr>
  <tr><td>Interest received</td><td>Operating <b>or</b> investing</td><td>Operating</td></tr>
  <tr><td>Dividends received</td><td>Operating <b>or</b> investing</td><td>Operating</td></tr>
  <tr><td>Interest paid</td><td>Operating <b>or</b> financing</td><td>Operating</td></tr>
  <tr><td>Dividends paid</td><td>Operating <b>or</b> financing</td><td>Financing</td></tr>
  <tr><td>Income taxes paid</td><td>Operating, unless specifically identified with investing or financing</td><td>Operating</td></tr>
  <tr><td>Bank overdrafts</td><td>Can be part of cash and equivalents</td><td>Financing</td></tr>
</table>
<p>Because IFRS companies may classify interest paid as financing (raising CFO), analysts adjust for comparability with US GAAP companies.</p>
<div class="trap"><b>Trap:</b> under US GAAP, interest paid is operating but dividends paid are financing. Under IFRS, choices are allowed but must be applied consistently.</div>
<h4>Non-cash investing and financing activities</h4>
<p>Transactions with no cash, such as acquiring a building by issuing shares, converting debt to equity, or exchanging assets, don't appear in the statement itself; they're <b>disclosed separately</b> (in a note or supplementary schedule).</p>

<h3>2. Direct vs indirect method for operating cash flow <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Direct method</b>: lists operating cash receipts and payments by type (cash from customers, cash to suppliers, cash paid for wages, interest, taxes). More informative about cash sources; both standards encourage it.</li>
  <li><b>Indirect method</b>: starts from <b>net income</b> and adjusts for non-cash items and changes in working capital. Shows why net income and CFO differ. Far more common in practice. (A US GAAP company using the direct method must also give the indirect reconciliation.)</li>
  <li>Both methods give the <b>same CFO</b>; investing and financing sections are identical under both.</li>
</ul>
<h4>Indirect method steps</h4>
<ol>
  <li>Start with net income.</li>
  <li><b>Add back non-cash charges</b>: depreciation, amortization, impairments, deferred tax expense (increase in DTL).</li>
  <li><b>Remove non-operating gains and losses</b>: subtract gains on sale of assets, add back losses (the proceeds go in investing).</li>
  <li><b>Adjust for working capital changes</b>: increases in operating current assets (receivables, inventory, prepaids) are <b>subtracted</b>; decreases are added. Increases in operating current liabilities (payables, accrued expenses, unearned revenue) are <b>added</b>; decreases are subtracted.</li>
</ol>
<div class="ex"><b>Example:</b> Net income 500; depreciation 120; gain on sale of equipment 30; receivables up 40; inventory down 25; payables up 15; accrued liabilities down 10.
<br>CFO = 500 + 120 − 30 − 40 + 25 + 15 − 10 = <b>580</b>.</div>
<p>Memory aid: a rise in an <b>asset</b> uses cash (subtract); a rise in a <b>liability</b> provides cash (add).</p>
<h4>Converting to the direct method</h4>
<ul>
  <li>Cash from customers = revenue − increase in receivables (+ increase in unearned revenue). Revenue 2,000, receivables up 40 → 1,960.</li>
  <li>Cash paid to suppliers = COGS + increase in inventory − increase in payables. COGS 1,200, inventory down 25, payables up 15 → purchases 1,175, cash paid 1,160.</li>
  <li>Cash paid to employees = wage expense − increase in wages payable; cash interest = interest expense − increase in interest payable (+ amortization adjustments); cash taxes = tax expense − increase in taxes payable (− increase in DTL).</li>
</ul>

<h3>3. Linkages between the statements: investing and financing flows</h3>
<p>Investing and financing cash flows can be rebuilt from balance sheet changes and income statement details:</p>
<div class="ex"><b>Investing example:</b> Gross PP&amp;E rose from 1,000 to 1,100. Equipment costing 200 (accumulated depreciation 120) was sold at a gain of 30.
<br>Capital expenditure = ending gross PP&amp;E − beginning + cost of assets sold = 1,100 − 1,000 + 200 = <b>300</b> (outflow).
<br>Book value sold = 200 − 120 = 80; proceeds = 80 + 30 = <b>110</b> (inflow).</div>
<div class="ex"><b>Financing example:</b> Long-term debt rose from 400 to 450 after repaying 50 → new borrowing = 450 − 400 + 50 = <b>100</b>. Retained earnings went from 900 to 1,250 with net income of 500 → dividends paid = 900 + 500 − 1,250 = <b>150</b> (assuming no dividends payable change).</div>
<p>The ending cash balance on the cash flow statement must equal cash on the balance sheet: beginning cash + CFO + CFI + CFF (+ FX effect) = ending cash.</p>

<div class="how"><b>How it's tested:</b> classifying cash flows (especially interest and dividends under IFRS vs US GAAP), treating non-cash transactions, computing CFO with the indirect method, converting income statement items to cash amounts (direct method), and backing out capex, sale proceeds, new borrowing or dividends from balance sheet changes.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Classify cash flows as operating, investing or financing under IFRS and US GAAP.</li>
  <li>Describe non-cash investing and financing activities.</li>
  <li>Compute CFO with the indirect method and cash receipts/payments with the direct method.</li>
  <li>Use balance sheet and income statement data to derive investing and financing cash flows.</li>
</ul></div>
`;

window.QB_HARD.l1cf1 = [
  ["Which of the following cash flow classifications is permitted under IFRS but not under US GAAP?",
    ["Classifying dividends paid as an operating cash flow", "Classifying interest paid as an operating cash flow", "Classifying dividends received as an operating cash flow"],
    "IFRS allows dividends paid in CFO or CFF; US GAAP requires CFF. Interest paid and dividends received are operating under US GAAP (and permitted as operating under IFRS).", "r"],
  ["A company reports net income of 500, depreciation of 120 and a gain on sale of equipment of 30. Receivables rose by 40, inventory fell by 25 and payables rose by 15. Cash flow from operations is closest to:",
    ["590", "650", "530"],
    "CFO = 500 + 120 − 30 − 40 + 25 + 15 = 590. The gain is subtracted because the sale proceeds are investing cash flows.", "c"],
  ["A company acquires a building by issuing new shares directly to the seller. In the statement of cash flows, this transaction is:",
    ["Disclosed separately as a non-cash activity", "Shown as an investing outflow and an equal financing inflow", "Reported within cash flow from operating activities, as an outflow"],
    "No cash changes hands, so it isn't in the statement; it's disclosed separately (in a note or supplementary schedule).", "r"],
  ["Under US GAAP, interest paid on a company's bonds is classified as:",
    ["An operating cash flow", "A financing cash flow", "An investing cash flow"],
    "US GAAP puts interest paid (and interest and dividends received) in operating activities; IFRS allows operating or financing.", "r"],
  ["Under US GAAP, dividends paid to shareholders are classified as:",
    ["Financing cash flows", "Operating cash flows", "Investing cash flows"],
    "Dividends paid are financing under US GAAP; IFRS allows operating or financing.", "r"],
  ["An IFRS company classifies interest paid as a financing cash flow. Compared with a US GAAP company that is otherwise identical, its operating cash flow will be:",
    ["Higher", "Lower", "The same"],
    "Moving interest paid out of operating activities raises CFO; analysts adjust for comparability.", "r"],
  ["Purchasing a competitor's entire business for cash is reported in the cash flow statement as an:",
    ["Investing outflow", "Operating outflow", "Financing outflow"],
    "Acquisitions of businesses, like capital expenditures, are investing activities.", "r"],
  ["Repaying the principal on a bank loan is a(n):",
    ["Financing outflow", "Operating outflow", "Investing outflow"],
    "Borrowing and repaying debt principal are financing activities; interest is treated separately.", "r"],
  ["A company converts $50 million of bonds into common shares. In the statement of cash flows this is:",
    ["Disclosed as a non-cash financing activity", "A financing inflow and an outflow of $50 million", "An operating cash flow"],
    "No cash changes hands, so it doesn't appear in the statement; it's disclosed separately.", "r"],
  ["Net income is 500, depreciation 120, and there was a gain of 30 on selling equipment. Receivables rose 40, inventory fell 25, payables rose 15 and accrued liabilities fell 10. Cash flow from operations is closest to:",
    ["580", "640", "520"],
    "500 + 120 − 30 − 40 + 25 + 15 − 10 = 580. Adding the gain instead of subtracting it gives 640.", "c"],
  ["Using the indirect method, an increase in accounts payable during the year is:",
    ["Added to net income", "Subtracted from net income", "Excluded from the calculation"],
    "Higher payables mean expenses were recognized but not yet paid, so cash is higher than net income suggests.", "r"],
  ["Using the indirect method, a gain on the sale of a building is:",
    ["Subtracted from net income", "Added to net income", "Ignored, since it's non-cash"],
    "The gain is included in net income but isn't an operating cash flow; the full proceeds appear in investing activities.", "r"],
  ["Revenue is $2,000 and accounts receivable rose by $40 during the year. Cash collected from customers is closest to:",
    ["$1,960", "$2,040", "$2,000"],
    "Cash collected = revenue − increase in receivables = 1,960.", "c"],
  ["COGS is $1,200; inventory fell by $25 and accounts payable rose by $15. Cash paid to suppliers is closest to:",
    ["$1,160", "$1,240", "$1,210"],
    "Purchases = COGS + Δinventory = 1,200 − 25 = 1,175. Cash paid = purchases − ΔAP = 1,175 − 15 = 1,160.", "c"],
  ["Gross PP&E rose from 1,000 to 1,100 during the year. Equipment with an original cost of 200 was sold. Capital expenditure for the year is closest to:",
    ["300", "100", "200"],
    "Capex = ending − beginning gross PP&E + cost of assets sold = 1,100 − 1,000 + 200 = 300.", "c"],
  ["Equipment with a cost of 200 and accumulated depreciation of 120 was sold at a gain of 30. The cash proceeds were:",
    ["110", "80", "230"],
    "Book value = 80; proceeds = book value + gain = 110 (an investing inflow).", "c"],
  ["Retained earnings rose from 900 to 1,250 during a year in which net income was 500. Dividends declared were closest to:",
    ["150", "350", "500"],
    "Ending RE = beginning RE + NI − dividends → dividends = 900 + 500 − 1,250 = 150.", "c"],
];

window.GLOSSARY.push(
  ["Cash flow classification (IFRS vs US GAAP)","IFRS: interest/dividends received CFO or CFI; interest/dividends paid CFO or CFF. US GAAP: all CFO except dividends paid (CFF).","l1cf1"],
  ["Indirect method CFO","NI + non-cash charges − gains + losses − increases in operating current assets + increases in operating current liabilities.","l1cf1"],
  ["Interest and dividends: IFRS vs US GAAP", "US GAAP: interest paid/received and dividends received operating; dividends paid financing. IFRS: choices allowed.", "l1cf1"],
  ["Non-cash investing and financing", "E.g. assets bought with shares, debt converted to equity; disclosed, not in the statement.", "l1cf1"],
  ["Direct vs indirect method", "Direct lists cash receipts and payments; indirect reconciles net income to CFO. Same CFO.", "l1cf1"],
  ["Capex from the balance sheet", "Ending gross PP&E − beginning gross PP&E + cost of assets sold.", "l1cf1"]
);
