// CFA Level I · Financial Statement Analysis · Learning module 3: Analyzing Balance Sheets.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1bs = `
<p class="syl">CFA Level I · Financial Statement Analysis · Learning module 3 of 12 · Analyzing Balance Sheets</p>
<p>The balance sheet (statement of financial position) lists what a company owns (assets), what it owes (liabilities) and the owners' residual interest (equity) at a point in time. This lesson walks through each section, the measurement bases used (historical cost, amortized cost, fair value), how financial assets, intangibles and goodwill are reported, the components of equity, and how to analyze a balance sheet with common-size statements and liquidity and solvency ratios.</p>

<h3>1. Structure</h3>
<div class="formula">Assets = Liabilities + Equity</div>
<ul>
  <li>A <b>classified</b> balance sheet separates <b>current</b> items (expected to be realized or settled within one year or one operating cycle, whichever is longer) from <b>non-current</b> items.</li>
  <li>IFRS also allows a <b>liquidity-based</b> presentation (most liquid first), common for banks.</li>
  <li>Balance sheet amounts are a mix of measurement bases: historical cost, amortized cost and fair value. So <b>book value of equity rarely equals market value</b>: many valuable resources (brands, people, internally developed technology) aren't recognized at all.</li>
</ul>

<h3>2. Current assets and current liabilities</h3>
<table>
  <tr><th>Current assets</th><th>Current liabilities</th></tr>
  <tr><td><b>Cash and cash equivalents</b> (very short-term, highly liquid investments, e.g. maturities of 3 months or less)<br><b>Marketable securities</b><br><b>Trade receivables</b>, net of an allowance for expected credit losses<br><b>Inventories</b> (lower of cost and net realizable value)<br><b>Prepaid expenses</b> (paid in advance, expensed later)</td><td><b>Trade payables</b> (amounts owed to suppliers)<br><b>Accrued expenses</b> (expenses incurred but not yet paid, e.g. wages, interest)<br><b>Notes payable</b> and short-term borrowings<br><b>Current portion of long-term debt</b><br><b>Income taxes payable</b><br><b>Contract liabilities</b> (unearned revenue)<br>Dividends payable</td></tr>
</table>
<p>Working capital = current assets − current liabilities.</p>

<h3>3. Non-current assets <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Property, plant and equipment (PP&amp;E)</b>: under the <b>cost model</b>, at cost less accumulated depreciation and impairment (both IFRS and US GAAP). IFRS also allows a <b>revaluation model</b> (fair value), with increases going to a revaluation surplus in OCI.</li>
  <li><b>Investment property</b> (IFRS only): property held to earn rent or for capital appreciation; measured at cost or <b>fair value</b> (fair value changes go to profit or loss).</li>
  <li><b>Intangible assets</b>: identifiable non-monetary assets without physical substance (patents, licences, trademarks, software). Finite-life intangibles are amortized; indefinite-life intangibles aren't amortized but are tested for impairment. Most <b>internally generated</b> intangibles (research, brands) are expensed, not capitalized.</li>
  <li><b>Goodwill</b>: arises only in an acquisition: purchase price − fair value of the identifiable net assets acquired. Not amortized; tested for impairment at least annually. Internally generated goodwill is never recognized.</li>
</ul>
<div class="ex"><b>Example:</b> A company pays $800 million for a target whose identifiable assets have a fair value of $900 million and liabilities $250 million. Net identifiable assets = $650 million; goodwill = $150 million.</div>
<h4>Financial assets <span class="hot">Highly tested</span></h4>
<table>
  <tr><th>IFRS 9 category</th><th>When</th><th>Measurement</th></tr>
  <tr><td><b>Amortized cost</b></td><td>Debt held to <b>collect</b> contractual cash flows that are solely principal and interest</td><td>Amortized cost; interest income in P&amp;L</td></tr>
  <tr><td><b>Fair value through OCI</b></td><td>Debt held to collect <b>and sell</b>; or equity a company irrevocably elects to hold at FVOCI (not for trading)</td><td>Fair value; unrealized gains/losses in OCI (recycled for debt on sale; never recycled for equity)</td></tr>
  <tr><td><b>Fair value through profit or loss</b></td><td>Everything else, including trading securities and most equity investments</td><td>Fair value; all gains/losses in P&amp;L</td></tr>
</table>
<p>US GAAP: debt securities are <b>held-to-maturity</b> (amortized cost), <b>available-for-sale</b> (fair value, unrealized gains in OCI) or <b>trading</b> (fair value through net income); equity investments are generally at fair value through net income.</p>

<h3>4. Non-current liabilities</h3>
<ul>
  <li>Long-term debt (bonds, loans) usually at amortized cost; <b>lease liabilities</b>; <b>pension</b> and other post-employment liabilities; <b>deferred tax liabilities</b>; long-term <b>provisions</b> (e.g. decommissioning costs).</li>
  <li>Contingent liabilities that aren't probable or can't be measured reliably are disclosed in the notes, not recognized.</li>
</ul>

<h3>5. Equity <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Contributed capital</b>: amounts paid in by shareholders for common and preferred shares (par value plus share premium / additional paid-in capital).</li>
  <li><b>Retained earnings</b>: cumulative net income less dividends.</li>
  <li><b>Treasury shares</b>: the company's own shares that it has repurchased and not cancelled; they reduce equity, carry no votes and receive no dividends.</li>
  <li><b>Accumulated other comprehensive income</b>: cumulative OCI items.</li>
  <li><b>Non-controlling (minority) interest</b>: the share of consolidated subsidiaries owned by outside shareholders, shown within equity.</li>
</ul>
<p>The <b>statement of changes in equity</b> reconciles opening and closing balances of each component.</p>

<h3>6. Analyzing the balance sheet <span class="hot">Highly tested</span></h3>
<p>A <b>common-size balance sheet</b> expresses each item as a percentage of <b>total assets</b>, showing the asset mix (e.g. how capital-intensive the company is) and how it's financed, comparable across companies and time.</p>
<table>
  <tr><th>Liquidity ratios</th><th>Solvency ratios</th></tr>
  <tr><td>Current ratio = current assets / current liabilities<br>Quick ratio = (cash + marketable securities + receivables) / current liabilities<br>Cash ratio = (cash + marketable securities) / current liabilities</td><td>Debt-to-assets = total debt / total assets<br>Debt-to-capital = total debt / (total debt + equity)<br>Debt-to-equity = total debt / total equity<br>Financial leverage = average total assets / average total equity</td></tr>
</table>
<div class="ex"><b>Example:</b> Total assets 1,000; current assets 400 (cash 50, securities 30, receivables 120, inventory 200); current liabilities 250; total debt 300; equity 500. Current ratio = 1.60; quick ratio = 200/250 = 0.80; debt-to-equity = 0.60; debt-to-capital = 300/800 = 37.5%; financial leverage = 2.0.</div>
<p>"Debt" generally means interest-bearing obligations (including lease liabilities), not payables.</p>

<div class="how"><b>How it's tested:</b> classifying items as current or non-current, measuring financial assets under IFRS 9 / US GAAP, goodwill calculations, which intangibles can be capitalized, identifying equity components (treasury shares, AOCI, non-controlling interest), and computing common-size percentages and liquidity and solvency ratios.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the elements and format of the balance sheet and why book value differs from market value.</li>
  <li>Describe current and non-current assets and liabilities, including PP&amp;E models, intangibles and goodwill.</li>
  <li>Classify and measure financial assets under IFRS 9 and US GAAP.</li>
  <li>Describe the components of equity.</li>
  <li>Prepare common-size balance sheets and calculate liquidity and solvency ratios.</li>
</ul></div>
`;

window.QB_HARD.l1bs = [
  ["Under IFRS 9, a debt security held within a business model whose objective is solely to collect its contractual cash flows of principal and interest is measured at:",
    ["Amortized cost", "Fair value through profit or loss", "Fair value through other comprehensive income"],
    "Hold-to-collect + solely payments of principal and interest → amortized cost. Hold to collect and sell → FVOCI; otherwise FVPL.", "r"],
  ["Which of the following is classified as a current liability?",
    ["Long-term debt due within a year", "A deferred tax liability on assets", "A lease liability due in five years"],
    "Amounts due within one year (or one operating cycle) are current, including the current portion of long-term debt.", "r"],
  ["Cash paid in advance for next year's insurance coverage is recorded as:",
    ["A prepaid expense (current asset)", "An accrued expense (current liability)", "An insurance expense this year"],
    "Payments made before the expense is incurred are prepaid expenses, expensed as the coverage is used.", "r"],
  ["Wages earned by employees in the last week of the year but not paid until January are recorded as:",
    ["An accrued expense", "A prepaid expense", "Unearned revenue"],
    "Expenses incurred but not yet paid are accrued liabilities.", "r"],
  ["A company pays $800 million for a target with identifiable assets at fair value of $900 million and liabilities of $250 million. The goodwill recognized is:",
    ["$150 million", "$100 million", "$800 million"],
    "Goodwill = 800 − (900 − 250) = $150 million.", "c"],
  ["Goodwill recognized in an acquisition is:",
    ["Tested for impairment, not amortized", "Amortized over a maximum of 40 years", "Revalued to its fair value each year"],
    "Under both IFRS and US GAAP, goodwill isn't amortized; it's tested for impairment at least annually.", "r"],
  ["A company spends heavily to build its brand through advertising. On its balance sheet, the brand:",
    ["Isn't recognized as an asset", "Is recognized at its estimated fair value", "Is recognized at the cost of the advertising"],
    "Internally generated brands are expensed as incurred; only purchased intangibles are recognized.", "r"],
  ["Under IFRS, a company that irrevocably elects to measure an equity investment at fair value through OCI will report the unrealized gains:",
    ["In OCI, never recycled to profit or loss", "In profit or loss each period", "In OCI, recycled to profit or loss on sale"],
    "For the equity FVOCI election, gains stay in OCI permanently; only dividends go to profit or loss.", "r"],
  ["Under US GAAP, unrealized gains on debt securities classified as available-for-sale are reported in:",
    ["Other comprehensive income", "Net income", "Neither, since AFS is at amortized cost"],
    "AFS debt securities are carried at fair value with unrealized gains and losses in OCI; trading securities' gains go to net income.", "r"],
  ["Under IFRS, a company holds an office building to earn rental income and chooses the fair value model. A rise in the building's fair value is reported in:",
    ["Profit or loss", "Other comprehensive income", "The notes only"],
    "Investment property under the fair value model takes gains and losses to profit or loss (unlike PP&E revaluations, which go to OCI).", "r"],
  ["Shares a company has repurchased and holds without cancelling are called:",
    ["Treasury shares", "Retained earnings", "Non-controlling interest"],
    "Treasury shares are deducted from equity and carry no votes or dividends.", "r"],
  ["The portion of a consolidated subsidiary's equity owned by outside shareholders is reported as:",
    ["Non-controlling interest", "A long-term liability", "Treasury shares"],
    "Non-controlling (minority) interest is a separate component of equity.", "r"],
  ["In a common-size balance sheet, each item is expressed as a percentage of:",
    ["Total assets", "Total revenue", "Total equity"],
    "Common-size balance sheets divide by total assets; common-size income statements divide by revenue.", "r"],
  ["Current assets are 400 (cash 50, marketable securities 30, receivables 120, inventory 200) and current liabilities are 250. The quick ratio is closest to:",
    ["0.80", "1.60", "0.32"],
    "Quick ratio = (50 + 30 + 120)/250 = 0.80. The current ratio is 1.60 and the cash ratio 0.32.", "c"],
  ["A company has total debt of 300 and equity of 500. Its debt-to-capital ratio is closest to:",
    ["37.5%", "60.0%", "62.5%"],
    "Debt-to-capital = 300/(300 + 500) = 37.5%. Debt-to-equity is 60%.", "c"],
];

window.GLOSSARY.push(
  ["Classified balance sheet", "Separates current (within 1 year or operating cycle) from non-current items.", "l1bs"],
  ["Goodwill", "Purchase price − fair value of identifiable net assets; not amortized, tested for impairment.", "l1bs"],
  ["IFRS 9 categories", "Amortized cost (hold to collect), FVOCI (collect and sell; equity election), FVPL (everything else).", "l1bs"],
  ["US GAAP debt securities", "HTM at amortized cost; AFS at fair value (OCI); trading at fair value (net income).", "l1bs"],
  ["Investment property (IFRS)", "Cost or fair value model; fair value changes to profit or loss.", "l1bs"],
  ["Treasury shares", "Repurchased own shares; reduce equity; no votes or dividends.", "l1bs"],
  ["Solvency ratios", "Debt/assets, debt/capital, debt/equity, financial leverage (assets/equity).", "l1bs"]
);
