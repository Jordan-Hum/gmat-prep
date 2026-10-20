// CFA Level I · Financial Statement Analysis · Learning module 11: Financial Analysis Techniques.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1ratios = `
<p class="syl">CFA Level I · Financial Statement Analysis · Learning module 11 of 12 · Financial Analysis Techniques</p>
<p>Ratios turn raw financial statements into comparable measures of efficiency, liquidity, solvency, profitability and value. This lesson lists the ratios by category with their formulas and meaning, works through a full example including the five-step <b>DuPont</b> analysis of ROE (very highly tested), and covers valuation ratios, sustainable growth, segment analysis and the limitations of ratio analysis. Memorize the formulas; most questions are direct calculations or "what explains the change in ROE".</p>

<h3>1. Analytical tools and their limits</h3>
<ul>
  <li><b>Ratios</b>; <b>common-size</b> statements (vertical: % of revenue or total assets; horizontal: % of a base year); <b>trend</b> analysis; charts; regression.</li>
  <li>Compare ratios with the company's own history (time-series), with peers (cross-sectional) and with industry norms.</li>
  <li><b>Limitations</b>: different accounting methods (LIFO vs FIFO, IFRS vs US GAAP) and estimates; diversified companies with no clear peers; seasonal or one-off effects; judgment about what's "good" (a high current ratio can mean idle cash); ratios describe, they don't explain.</li>
  <li>Use <b>average</b> balance sheet values when a ratio mixes an income statement flow with a balance sheet stock (e.g. turnover, ROA).</li>
</ul>

<h3>2. Activity (efficiency) ratios <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Ratio</th><th>Formula</th></tr>
  <tr><td>Inventory turnover; days of inventory on hand (DOH)</td><td>COGS / average inventory; 365 / inventory turnover</td></tr>
  <tr><td>Receivables turnover; days of sales outstanding (DSO)</td><td>Revenue / average receivables; 365 / receivables turnover</td></tr>
  <tr><td>Payables turnover; number of days of payables</td><td>Purchases / average payables; 365 / payables turnover</td></tr>
  <tr><td>Working capital turnover</td><td>Revenue / average working capital</td></tr>
  <tr><td>Fixed asset turnover</td><td>Revenue / average net fixed assets</td></tr>
  <tr><td>Total asset turnover</td><td>Revenue / average total assets</td></tr>
</table>
<p>Higher turnover usually means more efficient use of assets, but compare with peers: very high inventory turnover may mean stock-outs; very slow payables may mean cash problems (or strong bargaining power).</p>

<h3>3. Liquidity ratios</h3>
<table>
  <tr><th>Ratio</th><th>Formula</th></tr>
  <tr><td>Current ratio</td><td>Current assets / current liabilities</td></tr>
  <tr><td>Quick ratio</td><td>(Cash + short-term marketable investments + receivables) / current liabilities</td></tr>
  <tr><td>Cash ratio</td><td>(Cash + short-term marketable investments) / current liabilities</td></tr>
  <tr><td>Defensive interval</td><td>(Cash + short-term marketable investments + receivables) / daily cash expenditures (days the company could operate without new cash inflows)</td></tr>
  <tr><td>Cash conversion cycle</td><td>DOH + DSO − days of payables</td></tr>
</table>

<h3>4. Solvency ratios <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Ratio</th><th>Formula</th></tr>
  <tr><td>Debt-to-assets; debt-to-capital; debt-to-equity</td><td>Total debt / total assets; total debt / (total debt + equity); total debt / equity</td></tr>
  <tr><td>Financial leverage</td><td>Average total assets / average total equity</td></tr>
  <tr><td>Debt-to-EBITDA</td><td>Total debt / EBITDA</td></tr>
  <tr><td>Interest coverage</td><td>EBIT / interest payments</td></tr>
  <tr><td>Fixed charge coverage</td><td>(EBIT + lease payments) / (interest payments + lease payments)</td></tr>
</table>
<p>Higher debt ratios and lower coverage mean more financial risk. "Debt" usually means interest-bearing debt, including lease liabilities.</p>

<h3>5. Profitability ratios</h3>
<table>
  <tr><th>Ratio</th><th>Formula</th></tr>
  <tr><td>Gross, operating, pre-tax, net profit margin</td><td>Gross profit, operating income, EBT, net income ÷ revenue</td></tr>
  <tr><td>Operating ROA; ROA</td><td>Operating income / average total assets; net income / average total assets</td></tr>
  <tr><td>Return on total capital</td><td>EBIT / (average debt + average equity)</td></tr>
  <tr><td>Return on equity (ROE)</td><td>Net income / average total equity</td></tr>
</table>

<h3>6. DuPont analysis <span class="hot">Highly tested</span></h3>
<div class="formula">Three-step: ROE = (NI/revenue) × (revenue/average assets) × (average assets/average equity) = net profit margin × total asset turnover × financial leverage</div>
<div class="formula">Five-step: ROE = (NI/EBT) × (EBT/EBIT) × (EBIT/revenue) × (revenue/assets) × (assets/equity) = tax burden × interest burden × EBIT margin × asset turnover × leverage</div>
<ul>
  <li><b>Tax burden</b> (NI/EBT) = 1 − tax rate: <b>higher</b> means a lower tax rate.</li>
  <li><b>Interest burden</b> (EBT/EBIT): <b>higher</b> means lower interest costs (equals 1 with no debt).</li>
  <li>The product of the first three factors is the net profit margin; ROA = net profit margin × asset turnover.</li>
  <li>DuPont shows <b>why</b> ROE changed: better operations (margin, turnover) or simply more leverage (riskier).</li>
</ul>
<div class="ex"><b>Worked example:</b> Revenue 1,500; EBIT 150; EBT 120; net income 90; average assets 1,000; average equity 500.
<br>Tax burden = 90/120 = 0.75; interest burden = 120/150 = 0.80; EBIT margin = 150/1,500 = 10%; asset turnover = 1.5; leverage = 2.0.
<br>ROE = 0.75 × 0.80 × 0.10 × 1.5 × 2.0 = <b>18%</b> (check: 90/500). Net margin = 6%; ROA = 6% × 1.5 = 9%.</div>
<div class="trap"><b>Trap:</b> if ROE rose while margin and turnover were unchanged, the increase came from leverage. And more debt can raise leverage but lower the interest burden, so ROE may not rise as much as expected.</div>

<h3>7. Worked example: activity, coverage and liquidity</h3>
<div class="ex">Revenue 1,500; COGS 900; purchases 920; average receivables 150; average inventory 180; average payables 100; EBIT 150; interest 30; lease payments 20.
<br>Receivables turnover = 10 → DSO = 36.5 days. Inventory turnover = 5 → DOH = 73 days. Payables turnover = 9.2 → days of payables = 39.7. Cash conversion cycle = 36.5 + 73 − 39.7 = 69.8 days.
<br>Interest coverage = 150/30 = 5.0×; fixed charge coverage = (150 + 20)/(30 + 20) = 3.4×.
<br>Defensive interval: liquid assets 200 and annual cash expenses 1,095 (3 a day) → 66.7 days.</div>

<h3>8. Valuation ratios, growth and segment analysis</h3>
<ul>
  <li><b>Price-to-earnings (P/E)</b>, <b>price-to-cash flow</b>, <b>price-to-sales</b>, <b>price-to-book value</b>; per-share measures (EPS, book value per share, dividends per share).</li>
  <li><b>Dividend payout ratio</b> = dividends / net income; <b>retention rate (b)</b> = 1 − payout.</li>
  <li><b>Sustainable growth rate g = b × ROE</b>: the growth possible from retained earnings without changing leverage. ROE 18% with a 40% payout → g = 0.60 × 18% = 10.8%.</li>
  <li><b>Segment analysis</b>: companies disclose revenue, profit and assets by business and geographic segment; segment margins and returns show which businesses drive results.</li>
  <li><b>Credit analysis</b> uses coverage and leverage ratios (e.g. debt/EBITDA, FFO/debt); <b>screening</b> uses ratios to filter stocks (e.g. low P/E, high ROE).</li>
  <li>Industry-specific measures: same-store sales (retail), capital adequacy ratios (banks), revenue per available room (hotels).</li>
</ul>

<div class="how"><b>How it's tested:</b> direct ratio calculations (turnover, days, coverage, margins, ROA, ROE), five-step DuPont decompositions and explaining a change in ROE, sustainable growth, classifying ratios by category, and recognizing limitations of ratio analysis.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Calculate and interpret activity, liquidity, solvency and profitability ratios.</li>
  <li>Decompose ROE with the three- and five-step DuPont models and explain changes in ROE.</li>
  <li>Calculate valuation ratios, payout and retention rates, and the sustainable growth rate.</li>
  <li>Describe common-size, trend and segment analysis and the limitations of ratios.</li>
</ul></div>
`;

window.QB_HARD.l1ratios = [
  ["A company has current assets of 400 (including inventory of 150 and no prepaid expenses) and current liabilities of 250. Its quick ratio is closest to:",
    ["1.00", "1.60", "0.60"],
    "Quick ratio = (current assets − inventory) ÷ current liabilities = (400 − 150) ÷ 250 = 1.00. (1.60 is the current ratio.)", "c"],
  ["A company has net income of 60, EBT of 80, EBIT of 100, revenue of 1,000, average assets of 800 and average equity of 400. Its ROE is closest to:",
    ["15.0%", "7.5%", "12.5%"],
    "5-step DuPont: 0.75 × 0.80 × 0.10 × 1.25 × 2.0 = 15.0%. Equivalently 60 ÷ 400. (7.5% is ROA.)", "c"],
  ["A company's ROE rose from 12% to 15% while its net profit margin and total asset turnover were unchanged. The increase most likely came from:",
    ["Higher financial leverage", "Better operating efficiency", "A lower tax burden ratio"],
    "ROE = margin × turnover × leverage. With margin and turnover unchanged, only leverage (assets ÷ equity) can explain the rise.", "c"],
  ["A company has an ROE of 15% and pays out 40% of its earnings as dividends. Its sustainable growth rate is closest to:",
    ["9.0%", "6.0%", "15.0%"],
    "g = retention ratio × ROE = (1 − 0.40) × 15% = 9.0%.", "c"],
  ["A company has revenue of 2,000 and average receivables of 250. Its days of sales outstanding is closest to:",
    ["45.6 days", "8.0 days", "36.5 days"],
    "Receivables turnover = 2,000/250 = 8.0; DSO = 365/8 = 45.6 days.", "c"],
  ["Inventory turnover of 5 and a receivables turnover of 10, with payables turnover of 9.2, give a cash conversion cycle closest to:",
    ["70 days", "110 days", "37 days"],
    "DOH = 73.0, DSO = 36.5, days of payables = 39.7. CCC = 73.0 + 36.5 − 39.7 = 69.8 days.", "c"],
  ["Total asset turnover measures:",
    ["Revenue per unit of assets", "Net income generated per unit of assets", "Assets per unit of equity"],
    "Total asset turnover = revenue/average total assets; NI/assets is ROA; assets/equity is financial leverage.", "r"],
  ["EBIT is 150, interest payments are 30 and lease payments are 20. The fixed charge coverage ratio is closest to:",
    ["3.4×", "5.0×", "8.5×"],
    "(EBIT + lease payments)/(interest + lease payments) = 170/50 = 3.4×. Interest coverage alone is 5.0×.", "c"],
  ["A company holds cash and marketable securities of 120 and receivables of 80; its cash expenses are 1,095 a year. Its defensive interval is closest to:",
    ["66.7 days", "40.0 days", "26.7 days"],
    "Defensive interval = (120 + 80)/(1,095/365) = 200/3 = 66.7 days.", "c"],
  ["Which ratio is a solvency ratio?",
    ["Debt-to-EBITDA", "Quick ratio", "Receivables turnover"],
    "Solvency ratios measure long-term debt-paying ability; the quick ratio is liquidity; receivables turnover is activity.", "r"],
  ["A company has a tax burden of 0.75, an interest burden of 0.80, an EBIT margin of 10%, asset turnover of 1.5 and financial leverage of 2.0. Its ROE is closest to:",
    ["18%", "12%", "9%"],
    "ROE = 0.75 × 0.80 × 0.10 × 1.5 × 2.0 = 18%. (9% is ROA, which omits leverage.)", "c"],
  ["In the five-step DuPont model, an increase in the interest burden ratio (EBT/EBIT) indicates:",
    ["Lower interest expense relative to EBIT", "Higher interest expense relative to EBIT", "A higher income tax rate"],
    "EBT/EBIT rises toward 1 as interest costs fall; with no debt it equals 1.", "r"],
  ["A company's tax burden ratio fell from 0.80 to 0.70. This most likely means its:",
    ["Effective tax rate increased", "Effective tax rate decreased", "Interest expense increased"],
    "Tax burden = NI/EBT = 1 − effective tax rate; a lower ratio means a higher tax rate.", "r"],
  ["A company has a net profit margin of 5%, asset turnover of 1.25 and financial leverage of 2.4. Its ROE is closest to:",
    ["15.0%", "6.3%", "12.0%"],
    "ROE = 5% × 1.25 × 2.4 = 15.0%. ROA = 5% × 1.25 = 6.25%.", "c"],
  ["A company's ROA was unchanged but its ROE rose. The most likely explanation is:",
    ["An increase in financial leverage", "An improvement in profit margins", "Faster asset turnover"],
    "ROE = ROA × leverage; with ROA constant, higher leverage drives ROE.", "s"],
  ["A company with an ROE of 18% pays out 40% of its earnings as dividends. Its sustainable growth rate is closest to:",
    ["10.8%", "7.2%", "18.0%"],
    "g = retention × ROE = 0.60 × 18% = 10.8%. Using the payout ratio gives 7.2%.", "c"],
  ["Which is a limitation of ratio analysis?",
    ["Accounting methods differ across firms", "Ratios can't be compared over time", "Ratios ignore all balance sheet data"],
    "Differences in accounting choices (e.g. LIFO vs FIFO, IFRS vs US GAAP) reduce comparability; analysts adjust before comparing.", "r"],
];

window.GLOSSARY.push(
  ["DuPont (5-step)","ROE = tax burden (NI/EBT) × interest burden (EBT/EBIT) × EBIT margin × asset turnover × leverage (assets/equity).","l1ratios"],
  ["Sustainable growth rate","g = b × ROE, where b = retention ratio = 1 − payout.","l1ratios"],
  ["Activity ratios", "Inventory, receivables, payables, working capital, fixed asset and total asset turnover; DOH, DSO, days of payables.", "l1ratios"],
  ["Defensive interval", "(Cash + marketable securities + receivables)/daily cash expenditures.", "l1ratios"],
  ["Fixed charge coverage", "(EBIT + lease payments)/(interest + lease payments).", "l1ratios"],
  ["Tax burden and interest burden", "NI/EBT (= 1 − tax rate) and EBT/EBIT (higher = less interest).", "l1ratios"],
  ["Return on total capital", "EBIT/(average debt + average equity).", "l1ratios"]
);
