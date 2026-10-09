// CFA Level I · Financial Statement Analysis: study notes, practice questions and flashcards.
window.NOTES = window.NOTES || {};
window.QB_HARD = window.QB_HARD || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1fsa = `
<p class="syl">CFA Level I · Financial Statement Analysis · 11–14% of the exam · Learning modules: Introduction to FSA · Analyzing Income Statements · Analyzing Balance Sheets · Analyzing Statements of Cash Flows I and II · Analysis of Inventories · Analysis of Long-Term Assets · Topics in Long-Term Liabilities and Equity · Analysis of Income Taxes · Financial Reporting Quality · Financial Analysis Techniques · Introduction to Financial Statement Modeling</p>

<h3>1. Introduction to financial statement analysis</h3>
<ul>
  <li><b>Statements</b>: financial position (balance sheet), comprehensive income (income statement + OCI), changes in equity, cash flows, plus <b>notes</b> (accounting policies, estimates, details) and <b>management commentary / MD&amp;A</b> (trends, significant events, uncertainties, liquidity; unaudited).</li>
  <li><b>Auditor's opinion</b>: <b>unmodified</b> (fairly presented), <b>qualified</b> (fair except for a specific issue), <b>adverse</b> (materially misstated, not fairly presented), <b>disclaimer</b> (unable to form an opinion). Key audit matters highlight areas of most significance. US public companies also get an opinion on internal control.</li>
  <li><b>Standards</b>: IFRS (IASB) and US GAAP (FASB); regulators (SEC, IOSCO members) enforce. Conceptual framework: fundamental qualitative characteristics are <b>relevance</b> and <b>faithful representation</b>; enhancing ones are comparability, verifiability, timeliness, understandability.</li>
  <li><b>Analysis framework</b>: articulate purpose and context → collect data → process data → analyze/interpret → develop and communicate conclusions → follow up.</li>
</ul>

<h3>2. Analyzing income statements</h3>
<h4>Revenue recognition (IFRS 15 / ASC 606)</h4>
<ol>
  <li>Identify the <b>contract</b> with a customer.</li>
  <li>Identify the separate <b>performance obligations</b>.</li>
  <li>Determine the <b>transaction price</b> (including variable consideration if highly probable).</li>
  <li><b>Allocate</b> the price to the obligations.</li>
  <li>Recognize revenue <b>when (or as)</b> each obligation is satisfied (control transfers).</li>
</ol>
<p>Long-term contracts: revenue over time as progress is made (e.g. costs incurred ÷ total expected costs). <b>Principal vs agent</b>: if the company controls the good before transfer, report revenue <b>gross</b>; if it only arranges the sale, report <b>net</b> (commission).</p>
<h4>Expenses and unusual items</h4>
<ul>
  <li><b>Matching</b>: expenses recognized with the revenue they help generate (COGS, depreciation, bad debts, warranties).</li>
  <li><b>Discontinued operations</b>: reported <b>separately, net of tax</b>, below income from continuing operations. Unusual or infrequent items stay in continuing operations (pre-tax).</li>
  <li><b>Accounting changes</b>: change in <b>policy</b> → retrospective (restate prior periods); change in <b>estimate</b> (useful life, bad debt %) → <b>prospective</b>; correction of an <b>error</b> → restate prior periods.</li>
</ul>
<h4>Earnings per share</h4>
<div class="formula">Basic EPS = (Net income − Preferred dividends) ÷ Weighted average common shares</div>
<ul>
  <li>Stock splits and stock dividends are applied retroactively (as if they always existed).</li>
  <li><b>Diluted EPS</b> includes potentially dilutive securities, only if they lower EPS (<b>antidilutive</b> ones are excluded):
    <ul>
      <li>Convertible preferred (<b>if-converted</b>): add back the preferred dividends to the numerator; add the converted shares.</li>
      <li>Convertible bonds: add back <b>after-tax</b> interest; add the converted shares.</li>
      <li>Options and warrants (<b>treasury stock method</b>): new shares = N × (average price − exercise price) ÷ average price. Dilutive only if the exercise price is below the average market price.</li>
    </ul></li>
</ul>
<div class="ex"><b>Example:</b> NI $10M, preferred dividends $1M, 4M shares on Jan 1 and 1M issued on Jul 1 → weighted shares 4.5M; basic EPS = $9M ÷ 4.5M = $2.00. Options on 100,000 shares at a $20 strike with an average price of $25 add 100,000 × 5/25 = 20,000 shares.</div>
<h4>Comprehensive income</h4>
<p>Comprehensive income = net income + <b>OCI</b>. OCI items: foreign currency <b>translation</b> adjustments, certain cash-flow hedge gains/losses, unrealized gains/losses on debt securities at FVOCI (and elected equity at FVOCI under IFRS), defined-benefit <b>remeasurements</b>, and IFRS <b>revaluation surplus</b>. Common-size income statements show each item as a % of revenue.</p>

<h3>3. Analyzing balance sheets</h3>
<ul>
  <li><b>Classified</b> balance sheet (current vs non-current) or <b>liquidity-based</b> presentation (banks, under IFRS).</li>
  <li><b>Financial instruments (IFRS 9)</b>: <b>amortized cost</b> (hold to collect contractual cash flows of principal and interest), <b>FVOCI</b> (hold to collect and sell; and equity investments elected irrevocably, with no recycling), <b>FVPL</b> (everything else, including trading and most equity). US GAAP: held-to-maturity (amortized cost), available-for-sale debt (FVOCI), trading (FVPL); equity generally FVPL.</li>
  <li><b>Equity</b>: contributed capital, retained earnings, treasury shares, accumulated OCI, non-controlling interest.</li>
  <li>Goodwill and intangibles; current vs non-current liabilities; common-size balance sheet (% of total assets).</li>
</ul>
<table>
  <tr><th>Liquidity</th><th>Formula</th><th>Solvency</th><th>Formula</th></tr>
  <tr><td>Current</td><td>CA ÷ CL</td><td>Debt-to-assets</td><td>Total debt ÷ Total assets</td></tr>
  <tr><td>Quick</td><td>(Cash + ST investments + Receivables) ÷ CL</td><td>Debt-to-capital</td><td>Debt ÷ (Debt + Equity)</td></tr>
  <tr><td>Cash</td><td>(Cash + ST investments) ÷ CL</td><td>Debt-to-equity</td><td>Debt ÷ Equity</td></tr>
  <tr><td>Defensive interval</td><td>Liquid assets ÷ Daily cash expenditures</td><td>Financial leverage</td><td>Average total assets ÷ Average equity</td></tr>
</table>

<h3>4–5. Analyzing statements of cash flows</h3>
<table>
  <tr><th>Item</th><th>IFRS</th><th>US GAAP</th></tr>
  <tr><td>Interest received</td><td>Operating or investing</td><td>Operating</td></tr>
  <tr><td>Interest paid</td><td>Operating or financing</td><td>Operating</td></tr>
  <tr><td>Dividends received</td><td>Operating or investing</td><td>Operating</td></tr>
  <tr><td>Dividends paid</td><td>Operating or financing</td><td><b>Financing</b></td></tr>
  <tr><td>Taxes paid</td><td>Operating unless linked to investing/financing</td><td>Operating</td></tr>
</table>
<p>Direct method (cash received from customers, paid to suppliers…) vs <b>indirect method</b>, which reconciles net income to CFO:</p>
<div class="formula">CFO = Net income + non-cash charges (D&amp;A, impairments) − gains + losses − ↑ operating current assets + ↓ operating current assets + ↑ operating current liabilities − ↓ operating current liabilities</div>
<div class="ex"><b>Example:</b> NI 500 + depreciation 120 − gain on sale 30 − increase in receivables 40 + decrease in inventory 25 + increase in payables 15 = CFO 590.</div>
<p>Non-cash investing and financing (e.g. acquiring a building by issuing shares, converting debt to equity) is <b>disclosed separately</b>, not in the statement.</p>
<div class="formula">FCFF = CFO + Interest × (1 − t) − FCInv · FCFE = CFO − FCInv + Net borrowing (with interest paid in CFO)</div>
<p>Performance ratios: cash flow to revenue, cash return on assets/equity, <b>cash-to-income</b> (CFO ÷ operating income), cash flow per share. Coverage ratios: debt coverage (CFO ÷ total debt), interest coverage ((CFO + interest paid + taxes paid) ÷ interest paid), reinvestment (CFO ÷ cash paid for long-term assets), dividend payment, investing and financing.</p>
<p>Quality check: CFO persistently below net income, or growth driven by working capital timing, can signal aggressive accruals.</p>

<h3>6. Analysis of inventories</h3>
<ul>
  <li><b>Inventory cost</b> includes purchase cost, conversion costs and costs to bring goods to their location (freight-in). Excludes <b>abnormal waste</b>, storage (unless part of production), admin overhead and <b>selling costs</b>.</li>
  <li><b>Methods</b>: specific identification, <b>FIFO</b>, weighted average, <b>LIFO (US GAAP only)</b>.</li>
</ul>
<table>
  <tr><th>Rising prices, stable quantities</th><th>LIFO vs FIFO</th></tr>
  <tr><td>COGS</td><td>Higher</td></tr>
  <tr><td>Gross profit, net income, taxes</td><td>Lower</td></tr>
  <tr><td>Ending inventory (balance sheet)</td><td>Lower (old costs); FIFO is closer to current cost</td></tr>
  <tr><td>Cash flow</td><td>Higher (lower taxes)</td></tr>
  <tr><td>Inventory turnover</td><td>Higher</td></tr>
</table>
<div class="formula">LIFO reserve = FIFO inventory − LIFO inventory · FIFO COGS = LIFO COGS − ΔLIFO reserve</div>
<p>To convert a LIFO balance sheet to FIFO: inventory + LIFO reserve; equity + reserve × (1 − t); deferred tax liability (or lower cash) + reserve × t. <b>LIFO liquidation</b> (quantities fall when prices are rising) pushes old, cheap layers into COGS, temporarily <b>inflating margins</b>; a falling LIFO reserve can signal it.</p>
<ul>
  <li><b>Measurement</b>: IFRS: lower of cost and <b>net realizable value</b>; write-downs can be <b>reversed</b> (up to the original amount). US GAAP: LIFO and retail method use lower of cost or <b>market</b> (replacement cost, bounded by NRV and NRV − normal margin); others use lower of cost and NRV; <b>no reversals</b>.</li>
  <li>Inventory turnover = COGS ÷ average inventory; days of inventory on hand = 365 ÷ turnover. High turnover with falling sales can signal inadequate inventory; low turnover can signal obsolescence.</li>
</ul>

<h3>7. Analysis of long-term assets</h3>
<ul>
  <li><b>Capitalizing vs expensing</b>: capitalizing gives higher assets and equity, higher net income in the first year (lower later), smoother earnings, <b>higher CFO</b> and lower CFI (the outflow is investing).</li>
  <li><b>Capitalized interest</b> on self-constructed assets is added to the asset (outflow in investing); it lowers reported interest expense, so interest coverage looks better.</li>
  <li><b>Intangibles</b>: purchased ones capitalized; internally developed: IFRS expenses <b>research</b> and capitalizes <b>development</b> once criteria are met; US GAAP expenses R&amp;D (except certain software after technological feasibility). Goodwill arises only in acquisitions; it isn't amortized, only tested for impairment. Finite-lived intangibles are amortized; indefinite-lived aren't.</li>
  <li><b>Depreciation</b>: straight-line, declining balance (accelerated), units of production. IFRS requires <b>component</b> depreciation. Longer useful lives or higher salvage values raise earnings.</li>
</ul>
<table>
  <tr><th>Impairment</th><th>IFRS</th><th>US GAAP (assets held for use)</th></tr>
  <tr><td>Test</td><td>Carrying amount &gt; <b>recoverable amount</b> = higher of fair value less costs to sell and value in use</td><td>Recoverability: carrying amount &gt; <b>undiscounted</b> future cash flows</td></tr>
  <tr><td>Loss</td><td>Carrying − recoverable amount</td><td>Carrying − fair value</td></tr>
  <tr><td>Reversal</td><td>Allowed (not for goodwill)</td><td>Not allowed</td></tr>
</table>
<div class="ex"><b>Example:</b> Carrying 900; fair value less costs to sell 700; value in use 750; undiscounted cash flows 950. IFRS: recoverable 750 → impairment 150. US GAAP: 950 &gt; 900 passes the recoverability test → no impairment.</div>
<ul>
  <li><b>Revaluation model</b> (IFRS only): increases go to OCI (revaluation surplus) unless reversing a previous loss in P&amp;L; decreases go to P&amp;L unless reversing a previous surplus. <b>Investment property</b>: cost model or fair value model (fair value changes in P&amp;L).</li>
  <li>Derecognition: gain or loss = proceeds − carrying amount (not in CFO under the indirect method: it's subtracted/added back).</li>
</ul>
<div class="formula">Average age = Accumulated depreciation ÷ Depreciation expense · Total useful life = Gross PPE ÷ Depreciation · Remaining life = Net PPE ÷ Depreciation</div>

<h3>8. Long-term liabilities and equity</h3>
<h4>Bonds (effective interest method)</h4>
<p>A bond is recorded at the present value of its cash flows at the <b>market rate at issue</b>. Interest expense = carrying amount × market rate at issue. For a <b>discount</b> bond, interest expense &gt; coupon paid and the carrying amount <b>rises</b> to par; for a premium bond, the reverse. Issuance costs reduce the carrying amount (both IFRS and US GAAP). On repurchase, gain or loss = carrying amount − price paid. Covenants and fair value disclosures are in the notes.</p>
<div class="ex"><b>Example:</b> A 5% annual-coupon, 1,000-par bond issued for 950 when the market rate is 6%. Year-1 interest expense = 950 × 6% = 57; coupon paid = 50; ending carrying amount = 950 + 7 = 957.</div>
<h4>Leases</h4>
<ul>
  <li><b>IFRS 16 lessee</b>: one model: <b>right-of-use asset</b> and <b>lease liability</b> (PV of lease payments); depreciation + interest expense (front-loaded total expense). Exemptions for short-term (≤12 months) and low-value leases.</li>
  <li><b>US GAAP lessee</b>: <b>finance lease</b> (like IFRS: amortization + interest) or <b>operating lease</b> (ROU asset and liability on the balance sheet, but a <b>single straight-line lease cost</b> in the income statement; payments in CFO).</li>
  <li><b>Lessors</b>: IFRS finance vs operating; US GAAP sales-type, direct financing, operating.</li>
</ul>
<h4>Post-employment benefits and share-based pay</h4>
<ul>
  <li><b>Defined contribution</b>: expense = contribution; no further obligation. <b>Defined benefit</b>: the employer bears investment and longevity risk. Balance sheet shows the <b>funded status</b>: plan assets − PBO (negative = net pension liability).</li>
  <li><b>Share-based compensation</b>: measured at <b>fair value on the grant date</b> and expensed over the vesting (service) period. Stock options are valued with option models; higher volatility, longer term and higher rates raise the expense.</li>
</ul>

<h3>9. Analysis of income taxes</h3>
<p>Taxable income (tax rules) often differs from pretax income (accounting rules).</p>
<ul>
  <li><b>Temporary differences</b> create deferred taxes. <b>DTL</b>: taxes payable now are lower than tax expense (e.g. <b>accelerated tax depreciation</b>: carrying amount of the asset &gt; its tax base). <b>DTA</b>: taxes payable now are higher (e.g. <b>warranty</b> or bad debt expense accrued for reporting but deductible only when paid; tax loss carryforwards).</li>
  <li><b>Permanent differences</b> (e.g. tax-exempt income, non-deductible fines) never reverse: no deferred tax, but the <b>effective tax rate</b> differs from the statutory rate.</li>
</ul>
<div class="formula">Income tax expense = Taxes payable + ΔDTL − ΔDTA</div>
<ul>
  <li><b>Valuation allowance</b> (US GAAP): reduces a DTA when it's <b>more likely than not</b> that some won't be realized. IFRS recognizes a DTA only if realization is probable.</li>
  <li><b>Tax rate changes</b>: DTAs and DTLs are remeasured at the new rate; a rate cut <b>lowers the DTL and tax expense</b> (and lowers DTAs, raising expense).</li>
  <li>Analysts may treat a DTL not expected to reverse (e.g. growing capex) as <b>equity</b>; one expected to reverse as a liability.</li>
</ul>

<h3>10. Financial reporting quality</h3>
<ul>
  <li><b>Spectrum</b> (best → worst): GAAP, decision-useful, sustainable, adequate returns → GAAP, decision-useful but <b>low-quality earnings</b> → within GAAP but <b>biased choices</b> → departures from GAAP (non-compliant) → <b>fictitious transactions</b>.</li>
  <li><b>Biased choices</b>: aggressive (inflate current earnings) or conservative (understate now, e.g. "cookie jar" reserves); <b>big bath</b> charges; earnings smoothing; non-GAAP measures that exclude real costs.</li>
  <li><b>Conditions for misreporting</b> (fraud triangle): <b>motivation/pressure</b>, <b>opportunity</b> (weak controls), <b>rationalization</b>.</li>
  <li><b>Discipline</b>: regulators, auditors, private contracting (lenders, investors).</li>
  <li><b>Warning signs</b>: revenue growing much faster than peers; <b>DSO rising</b>; bill-and-hold or channel stuffing; inventory growing faster than sales; NI persistently above CFO; capitalizing operating costs; lengthening useful lives; frequent "non-recurring" charges; related-party transactions; pressure to meet targets; heavy use of non-GAAP metrics.</li>
</ul>

<h3>11. Financial analysis techniques</h3>
<table>
  <tr><th>Activity</th><th>Formula</th></tr>
  <tr><td>Inventory turnover / DOH</td><td>COGS ÷ avg inventory; 365 ÷ turnover</td></tr>
  <tr><td>Receivables turnover / DSO</td><td>Revenue ÷ avg receivables; 365 ÷ turnover</td></tr>
  <tr><td>Payables turnover / DPO</td><td>Purchases ÷ avg payables; 365 ÷ turnover</td></tr>
  <tr><td>Fixed asset / total asset turnover</td><td>Revenue ÷ avg net fixed assets; revenue ÷ avg total assets</td></tr>
</table>
<table>
  <tr><th>Profitability and coverage</th><th>Formula</th></tr>
  <tr><td>Gross / operating / net margin</td><td>Gross profit, operating income, NI ÷ revenue</td></tr>
  <tr><td>ROA; operating ROA</td><td>NI ÷ avg total assets; operating income ÷ avg total assets</td></tr>
  <tr><td>ROE</td><td>NI ÷ avg equity</td></tr>
  <tr><td>Interest coverage</td><td>EBIT ÷ interest</td></tr>
  <tr><td>Fixed charge coverage</td><td>(EBIT + lease payments) ÷ (interest + lease payments)</td></tr>
</table>
<div class="formula">DuPont (3-step): ROE = Net profit margin × Asset turnover × Financial leverage</div>
<div class="formula">DuPont (5-step): ROE = (NI/EBT) × (EBT/EBIT) × (EBIT/Revenue) × (Revenue/Assets) × (Assets/Equity) = tax burden × interest burden × EBIT margin × turnover × leverage</div>
<div class="ex"><b>Example:</b> NI 60, EBT 80, EBIT 100, revenue 1,000, assets 800, equity 400: 0.75 × 0.80 × 0.10 × 1.25 × 2.0 = 15% ROE. A higher tax burden ratio means a <b>lower</b> tax rate.</div>
<div class="formula">Sustainable growth g = Retention ratio (b) × ROE · Dividend payout = Dividends ÷ NI</div>
<p>Other tools: common-size and trend analysis, segment ratios (segment margin, segment ROA), valuation ratios (P/E, P/CF, P/S, P/B), credit ratios (EBITDA/interest, FFO/debt, debt/EBITDA).</p>

<h3>12. Introduction to financial statement modeling</h3>
<ul>
  <li><b>Revenue</b>: top-down (growth relative to GDP; market growth × market share) or <b>bottom-up</b> (e.g. stores × sales per store, volume × price), or hybrid.</li>
  <li><b>Costs</b>: COGS as % of revenue (consider input price trends, hedging); SG&amp;A fixed vs variable; financing costs from debt levels; taxes using the effective rate and its drivers.</li>
  <li><b>Balance sheet and cash flow</b>: working capital from turnover ratios; capex = maintenance (≈ depreciation adjusted for inflation) + growth.</li>
  <li><b>Competitive factors</b> (Porter's five forces), <b>inflation/deflation</b> (pass-through ability), <b>technological change</b> (cannibalization), and long-term forecasts based on normalized results.</li>
  <li><b>Behavioural biases</b>: overconfidence (ranges too narrow), illusion of control, <b>conservatism</b> (slow to update), representativeness (base-rate neglect), confirmation bias.</li>
</ul>
<div class="how"><b>How it's tested:</b> heavy on calculations (EPS, CFO, FCFF/FCFE, LIFO/FIFO conversion, impairment, bond carrying amounts, tax expense, DuPont) and on IFRS vs US GAAP differences. Always ask: what happens to NI, assets, equity, CFO and ratios?</div>
<div class="key"><b>Carry forward to Level III</b>: earnings quality, cash flow analysis and ratio interpretation underpin equity and credit analysis in portfolio management and the private markets pathway.</div>
<div class="trap"><b>Trap:</b> capitalizing a cost raises <b>CFO</b> (the cash goes to investing), so CFO-based comparisons across firms with different policies can mislead.</div>
`;

window.QB_HARD.l1fsa = [
  ["An auditor concludes that a company's financial statements are materially misstated and don't present its financial position fairly. The audit opinion is:",
    ["Adverse", "Qualified", "A disclaimer of opinion"],
    "An adverse opinion says the statements are not fairly presented. A qualified opinion is fair except for a specific matter; a disclaimer means no opinion could be formed.", "r"],
  ["Which source most likely contains management's discussion of trends, significant events and uncertainties affecting the company?",
    ["Management commentary (MD&A)", "The notes to the financial statements", "The independent auditor's report"],
    "Management commentary/MD&A discusses results, liquidity, capital resources, trends and uncertainties. It is generally unaudited.", "r"],
  ["Under the five-step revenue recognition model, which step comes immediately after identifying the contract with a customer?",
    ["Identify the separate performance obligations", "Determine the transaction price", "Recognize revenue as obligations are satisfied"],
    "Steps: (1) identify the contract, (2) identify performance obligations, (3) determine the transaction price, (4) allocate it, (5) recognize revenue when obligations are satisfied.", "r"],
  ["An online travel company arranges hotel bookings for customers but never controls the rooms before they are transferred. It should report revenue:",
    ["Net, equal to the commission it earns", "Gross, equal to the full price the customer pays", "Gross, but only when the customer completes the stay"],
    "Acting as an agent (no control of the good or service), the company reports revenue net. A principal that controls the good reports gross.", "r"],
  ["Under both IFRS and US GAAP, the results of a discontinued operation are reported:",
    ["Separately, net of tax, below continuing operations", "Within operating income, before deducting income tax expense", "Directly in other comprehensive income"],
    "Discontinued operations are shown net of tax below continuing operations so analysts can exclude them when forecasting.", "r"],
  ["A company revises the estimated useful life of its equipment from 8 to 10 years. The change is applied:",
    ["Prospectively, in the current and future periods", "Retrospectively, restating all prior periods", "As a prior-period adjustment to retained earnings"],
    "Changes in accounting estimates are applied prospectively. Changes in accounting policy and error corrections are applied retrospectively.", "r"],
  ["Net income is $10 million and preferred dividends are $1 million. The company had 4 million common shares on January 1 and issued 1 million more on July 1. Basic EPS is closest to:",
    ["$2.00", "$1.80", "$2.22"],
    "Weighted shares = 4M + 1M × 6/12 = 4.5M. Basic EPS = ($10M − $1M) ÷ 4.5M = $2.00.", "c"],
  ["A company has options outstanding on 100,000 shares with an exercise price of $20. The average share price for the year was $25. Under the treasury stock method, the options add how many shares to the diluted share count?",
    ["20,000", "100,000", "80,000"],
    "Proceeds of $2,000,000 buy back 80,000 shares at $25, so net new shares = 100,000 × (25 − 20) ÷ 25 = 20,000.", "c"],
  ["Convertible preferred shares are antidilutive, and therefore excluded from diluted EPS, when:",
    ["Including them would increase diluted EPS", "Their conversion price is below the market price", "They pay no dividends during the period"],
    "A security is antidilutive if assuming conversion raises EPS (or lowers a loss per share); such securities are excluded.", "r"],
  ["Which item is reported in other comprehensive income rather than in net income?",
    ["Foreign currency translation adjustments", "An impairment loss on goodwill", "Gains on debt securities at fair value through profit or loss"],
    "Translation adjustments (current rate method) go to OCI. Goodwill impairments and FVPL gains go through net income.", "r"],
  ["Under IFRS 9, a debt security held within a business model whose objective is solely to collect its contractual cash flows of principal and interest is measured at:",
    ["Amortized cost", "Fair value through profit or loss", "Fair value through other comprehensive income"],
    "Hold-to-collect + solely payments of principal and interest → amortized cost. Hold to collect and sell → FVOCI; otherwise FVPL.", "r"],
  ["Which of the following cash flow classifications is permitted under IFRS but not under US GAAP?",
    ["Classifying dividends paid as an operating cash flow", "Classifying interest paid as an operating cash flow", "Classifying dividends received as an operating cash flow"],
    "IFRS allows dividends paid in CFO or CFF; US GAAP requires CFF. Interest paid and dividends received are operating under US GAAP (and permitted as operating under IFRS).", "r"],
  ["A company reports net income of 500, depreciation of 120 and a gain on sale of equipment of 30. Receivables rose by 40, inventory fell by 25 and payables rose by 15. Cash flow from operations is closest to:",
    ["590", "650", "530"],
    "CFO = 500 + 120 − 30 − 40 + 25 + 15 = 590. The gain is subtracted because the sale proceeds are investing cash flows.", "c"],
  ["A US GAAP company reports CFO of 800, interest paid of 100, capital expenditures of 300 and a 25% tax rate. Free cash flow to the firm is closest to:",
    ["575", "600", "500"],
    "FCFF = CFO + interest × (1 − t) − FCInv = 800 + 75 − 300 = 575. (600 adds back pre-tax interest.)", "c"],
  ["A company reports CFO of 800 (with interest paid included), capital expenditures of 300 and net new borrowing of 50. Free cash flow to equity is closest to:",
    ["550", "450", "475"],
    "FCFE = CFO − FCInv + net borrowing = 800 − 300 + 50 = 550.", "c"],
  ["A company acquires a building by issuing new shares directly to the seller. In the statement of cash flows, this transaction is:",
    ["Disclosed separately as a non-cash activity", "Shown as an investing outflow and an equal financing inflow", "Reported within cash flow from operating activities, as an outflow"],
    "No cash changes hands, so it isn't in the statement; it's disclosed separately (in a note or supplementary schedule).", "r"],
  ["Which cost should be included in the cost of inventory?",
    ["Freight-in to bring goods to the warehouse", "Abnormal waste from a production fault", "Selling and distribution costs"],
    "Inventory cost includes costs to bring goods to their present location and condition. Abnormal waste, most storage, admin overhead and selling costs are expensed.", "r"],
  ["When prices are rising and inventory quantities are stable, compared with FIFO a LIFO company reports:",
    ["Higher COGS, lower taxes and lower ending inventory", "Lower COGS, higher taxes and higher ending inventory", "Higher net income and higher ending inventory"],
    "LIFO expenses the newest (highest) costs, raising COGS and lowering profit and taxes; older, cheaper costs remain in inventory.", "r"],
  ["A LIFO company reports COGS of 1,200. Its LIFO reserve rose from 80 to 100 during the year. Under FIFO, its COGS would be closest to:",
    ["1,180", "1,220", "1,100"],
    "FIFO COGS = LIFO COGS − increase in LIFO reserve = 1,200 − 20 = 1,180.", "c"],
  ["A LIFO company reduces its inventory quantities during a period of rising prices. Its gross margin will most likely be:",
    ["Temporarily inflated by older, cheaper costs in COGS", "Reduced as higher current costs flow into COGS", "Unaffected, since LIFO always charges current costs to COGS"],
    "A LIFO liquidation releases old, low-cost layers into COGS, boosting margins in a way that isn't sustainable.", "r"],
  ["Under IFRS, inventory is measured at the lower of cost and net realizable value. Previous write-downs:",
    ["Can be reversed, up to the original write-down", "Can never be reversed once recognized", "Can be reversed, but only by companies that use the LIFO method"],
    "IFRS allows reversals (limited to the original write-down). US GAAP prohibits reversals. LIFO isn't permitted under IFRS.", "r"],
  ["Compared with expensing a cost, capitalizing it results in, for the first year:",
    ["Higher net income and higher cash flow from operations", "Lower net income and lower total assets", "Higher net income and higher cash flow from investing"],
    "Capitalizing defers the expense (higher NI now) and classifies the outflow as investing, so CFO is higher and CFI lower.", "r"],
  ["Under IFRS, development costs that meet specified criteria (technical feasibility, intent and ability to complete, etc.) are:",
    ["Capitalized as an intangible asset", "Always expensed as incurred", "Recorded as part of the company's goodwill"],
    "IFRS expenses research but capitalizes development once the criteria are met. US GAAP generally expenses all R&D.", "r"],
  ["Under IFRS, an asset has a carrying amount of 900, a fair value less costs to sell of 700 and a value in use of 750. The impairment loss is closest to:",
    ["150", "200", "0"],
    "Recoverable amount = higher of 700 and 750 = 750. Impairment = 900 − 750 = 150.", "c"],
  ["Under US GAAP, an asset held for use has a carrying amount of 900, undiscounted future cash flows of 950 and a fair value of 700. The company should recognize:",
    ["No impairment loss", "An impairment loss of 200", "An impairment loss of 150"],
    "US GAAP first applies the recoverability test: carrying amount (900) < undiscounted cash flows (950), so the asset isn't impaired.", "c"],
  ["Under the IFRS revaluation model, an increase in an asset's fair value that doesn't reverse a previous decrease is recognized in:",
    ["Other comprehensive income, as a revaluation surplus", "Net income for the period", "Retained earnings directly, as a prior-period adjustment"],
    "Upward revaluations go to OCI (revaluation surplus) unless they reverse a decrease previously recognized in profit or loss.", "r"],
  ["A company has gross PPE of 1,000, accumulated depreciation of 400 and annual straight-line depreciation of 100. The estimated remaining useful life of its assets is closest to:",
    ["6 years", "4 years", "10 years"],
    "Remaining life = net PPE ÷ depreciation = 600 ÷ 100 = 6 years. Average age = 400 ÷ 100 = 4 years; total life = 1,000 ÷ 100 = 10 years.", "c"],
  ["For a bond issued at a discount, under the effective interest method, interest expense each period is:",
    ["Greater than the coupon paid, and the carrying amount rises", "Less than the coupon paid, and the carrying amount falls", "Equal to the coupon paid each period"],
    "Interest expense = carrying amount × market rate at issue, which exceeds the coupon; the difference (discount amortization) increases the carrying amount toward par.", "r"],
  ["A 5% annual-coupon bond with a par value of 1,000 is issued for 950 when the market rate is 6%. Its carrying amount at the end of year 1 is closest to:",
    ["957", "950", "943"],
    "Interest expense = 950 × 6% = 57; coupon paid = 50; carrying amount = 950 + (57 − 50) = 957.", "c"],
  ["Under IFRS 16, a lessee with a five-year equipment lease that is neither short-term nor low-value recognizes:",
    ["A right-of-use asset and a lease liability", "Only a straight-line rent expense", "Nothing on the balance sheet, just a note disclosure"],
    "IFRS 16 has a single lessee model: ROU asset and lease liability, with depreciation and interest expense.", "r"],
  ["Under US GAAP, a lessee with an operating lease reports:",
    ["A single straight-line lease cost, with the lease on balance sheet", "Separate depreciation and interest expense, as for a finance lease", "Rent expense, with nothing on its balance sheet"],
    "ASC 842 puts an ROU asset and lease liability on the balance sheet for operating leases too, but the income statement shows one straight-line lease cost.", "r"],
  ["A company's defined benefit plan has a projected benefit obligation of 500 and plan assets of 420. Its balance sheet will show:",
    ["A net pension liability of 80", "A net pension asset of 80", "A liability of 500 and an asset of 420 separately"],
    "The funded status (plan assets − PBO = −80) is reported as a net liability.", "c"],
  ["Compensation expense for employee stock options is measured at:",
    ["Grant-date fair value, expensed over the vesting period", "Intrinsic value on the exercise date", "Fair value at the exercise date, expensed immediately in full"],
    "Share-based compensation is measured at grant-date fair value and recognized over the service (vesting) period.", "r"],
  ["A company uses accelerated depreciation for tax purposes and straight-line depreciation for financial reporting. This most likely creates a:",
    ["Deferred tax liability", "Deferred tax asset", "Permanent difference"],
    "Taxable income is lower than pretax income early on, so the company pays less tax now and will pay more later: a DTL (carrying amount of the asset exceeds its tax base).", "r"],
  ["A company's taxes payable are 300. Its deferred tax liability increased by 40 and its deferred tax asset increased by 10. Income tax expense is closest to:",
    ["330", "350", "270"],
    "Income tax expense = taxes payable + ΔDTL − ΔDTA = 300 + 40 − 10 = 330.", "c"],
  ["Warranty expense is accrued for financial reporting when products are sold, but is tax-deductible only when repairs are paid. This creates a:",
    ["Deferred tax asset", "Deferred tax liability", "Permanent difference with no deferred tax"],
    "The company pays more tax now than its tax expense, and will get the deduction later: a deferred tax asset.", "r"],
  ["Under US GAAP, a valuation allowance reduces a deferred tax asset when:",
    ["It's more likely than not that part won't be realized", "The statutory tax rate is expected to rise", "Deferred tax liabilities exceed deferred tax assets in total"],
    "If future taxable income may be insufficient to use the DTA, a valuation allowance reduces it, increasing tax expense.", "r"],
  ["A company has a large deferred tax liability. If the statutory tax rate is cut, the company will most likely report:",
    ["A smaller DTL and lower income tax expense", "A larger DTL and higher income tax expense", "No change until the differences reverse"],
    "Deferred taxes are remeasured at the new rate immediately; a lower rate reduces the DTL, and the change lowers tax expense.", "r"],
  ["Which three conditions, together, make financial misreporting more likely?",
    ["Motivation, opportunity and rationalization", "Complexity, leverage and rapid growth", "Weak auditors, rising sales and a high P/E"],
    "The 'fraud triangle': pressure or motivation to misreport, opportunity (weak controls), and the ability to rationalize the behaviour.", "r"],
  ["Which of the following is a warning sign of poor earnings quality?",
    ["Net income persistently exceeding operating cash flow", "Days sales outstanding falling steadily over several years", "Inventory growing in line with sales"],
    "Earnings consistently above CFO suggest aggressive accruals. Rising (not falling) DSO and inventory growing faster than sales are warning signs.", "r"],
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
  ["An analyst forecasts a retailer's revenue by multiplying the expected number of stores by the average sales per store. This is:",
    ["A bottom-up approach", "A top-down approach", "A growth-relative-to-GDP approach"],
    "Bottom-up forecasts build from company-level drivers (stores, volumes, prices). Top-down starts from the economy or market (GDP growth, market size × share).", "r"],
  ["An analyst updates her revenue forecast only slightly despite strong new evidence that demand has fallen. This is most likely:",
    ["Conservatism bias", "Representativeness bias", "Availability bias"],
    "Conservatism bias is the failure to update beliefs enough when new information arrives.", "r"],
  ["Under the IFRS Conceptual Framework, the two fundamental qualitative characteristics of useful financial information are:",
    ["Relevance and faithful representation", "Comparability and timeliness", "Verifiability and understandability"],
    "Relevance and faithful representation are fundamental; comparability, verifiability, timeliness and understandability are enhancing characteristics.", "r"]
];

window.GLOSSARY.push(
  ["Five-step revenue recognition", "Contract → performance obligations → transaction price → allocate → recognize when (or as) each obligation is satisfied.", "l1fsa"],
  ["Accounting changes", "Policy change and error correction: retrospective. Change in estimate: prospective.", "l1fsa"],
  ["Basic and diluted EPS", "Basic = (NI − preferred dividends) ÷ weighted shares. Diluted adds convertibles (if-converted) and options (treasury stock method) only if dilutive.", "l1fsa"],
  ["Treasury stock method", "New shares from options = N × (average price − exercise price) ÷ average price; only if exercise price < average price.", "l1fsa"],
  ["Cash flow classification (IFRS vs US GAAP)", "IFRS: interest/dividends received CFO or CFI; interest/dividends paid CFO or CFF. US GAAP: all CFO except dividends paid (CFF).", "l1fsa"],
  ["Indirect method CFO", "NI + non-cash charges − gains + losses − increases in operating current assets + increases in operating current liabilities.", "l1fsa"],
  ["FCFF and FCFE", "FCFF = CFO + Int(1 − t) − FCInv. FCFE = CFO − FCInv + net borrowing.", "l1fsa"],
  ["LIFO reserve", "FIFO inventory − LIFO inventory. FIFO COGS = LIFO COGS − ΔLIFO reserve.", "l1fsa"],
  ["Inventory measurement", "IFRS: lower of cost and NRV, reversals allowed. US GAAP: LIFO/retail use lower of cost or market; no reversals.", "l1fsa"],
  ["Impairment (IFRS vs US GAAP)", "IFRS: carrying vs recoverable amount (higher of FV less costs to sell and value in use); reversals allowed. US GAAP: undiscounted CF test, loss to fair value; no reversals.", "l1fsa"],
  ["Capitalize vs expense", "Capitalizing: higher NI early, higher assets/equity, higher CFO, lower CFI, smoother earnings.", "l1fsa"],
  ["Effective interest method", "Interest expense = carrying amount × market rate at issue. Discount bond: expense > coupon, carrying amount rises.", "l1fsa"],
  ["Leases (lessee)", "IFRS 16: ROU asset + liability, depreciation + interest. US GAAP operating lease: on balance sheet, single straight-line cost.", "l1fsa"],
  ["Deferred tax liability / asset", "DTL: pay less tax now (e.g. accelerated tax depreciation). DTA: pay more now (e.g. warranty accruals, loss carryforwards).", "l1fsa"],
  ["Income tax expense", "Taxes payable + ΔDTL − ΔDTA.", "l1fsa"],
  ["Fraud triangle", "Motivation (pressure), opportunity and rationalization.", "l1fsa"],
  ["DuPont (5-step)", "ROE = tax burden (NI/EBT) × interest burden (EBT/EBIT) × EBIT margin × asset turnover × leverage (assets/equity).", "l1fsa"],
  ["Sustainable growth rate", "g = b × ROE, where b = retention ratio = 1 − payout.", "l1fsa"]
);
