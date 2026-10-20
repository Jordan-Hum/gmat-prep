// CFA Level I · Financial Statement Analysis · Learning module 7: Analysis of Long-Term Assets.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1lta = `
<p class="syl">CFA Level I · Financial Statement Analysis · Learning module 7 of 12 · Analysis of Long-Term Assets</p>
<p>Long-term assets (property, plant and equipment, intangibles, goodwill) are where companies make some of their most important accounting choices: what to capitalize versus expense, how fast to depreciate, when to recognize impairments, and (under IFRS) whether to revalue. Each choice shifts profit between periods and changes ratios. This lesson covers acquisition costs, capitalization vs expensing, intangibles and R&amp;D, depreciation and amortization methods, impairment under IFRS and US GAAP, the revaluation model, derecognition and the ratios used to analyze fixed assets.</p>

<h3>1. Acquiring long-term assets</h3>
<ul>
  <li><b>PP&amp;E</b> is recorded at cost: purchase price plus all costs to get the asset ready for use (delivery, installation, testing, site preparation). Repairs and maintenance that don't extend life or capacity are expensed.</li>
  <li><b>Capitalized interest</b>: interest on borrowing used to construct a qualifying asset (one that takes a long time to get ready, e.g. a building the company builds for its own use) is capitalized into the asset's cost (required under IFRS and US GAAP). It's then expensed through depreciation.
    <ul>
      <li>Effect: lower interest expense now, higher net income and interest coverage now; the capitalized interest appears in <b>investing</b> cash outflows (not operating).</li>
      <li>Analysts often reverse it: add capitalized interest back to interest expense when computing interest coverage. Example: EBIT 400, reported interest expense 100, capitalized interest 50 → reported coverage 4.0×, adjusted 400/150 = 2.7×.</li>
    </ul>
  </li>
</ul>

<h3>2. Capitalizing vs expensing <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Effect (first year)</th><th>Capitalize</th><th>Expense</th></tr>
  <tr><td>Net income</td><td><b>Higher</b> (only depreciation is expensed)</td><td>Lower (full cost expensed)</td></tr>
  <tr><td>Total assets and equity</td><td>Higher</td><td>Lower</td></tr>
  <tr><td>Cash flow from operations</td><td><b>Higher</b> (outflow is in investing)</td><td>Lower (outflow is in operating)</td></tr>
  <tr><td>Cash flow from investing</td><td>Lower</td><td>Higher</td></tr>
  <tr><td>Total cash flow</td><td colspan="2">Same (ignoring taxes timing)</td></tr>
  <tr><td>Earnings variability</td><td>Smoother</td><td>More volatile</td></tr>
  <tr><td>Later years' net income</td><td>Lower (depreciation continues)</td><td>Higher</td></tr>
</table>
<p>Example: a $300 cost with a 3-year life. Capitalizing expenses $100 in year 1 vs $300 if expensed, so year-1 pre-tax income is $200 higher. Leverage ratios look better (higher equity and assets) and ROA/ROE are typically higher in the first year, lower later.</p>

<h3>3. Intangible assets and R&amp;D <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>How obtained</th><th>Treatment</th></tr>
  <tr><td>Purchased separately</td><td>Capitalized at cost</td></tr>
  <tr><td>Acquired in a business combination</td><td>Recognized at fair value if identifiable; the excess of price over fair value of net identifiable assets is goodwill</td></tr>
  <tr><td>Developed internally</td><td>Mostly expensed (see R&amp;D)</td></tr>
</table>
<ul>
  <li><b>IFRS</b>: <b>research</b> costs are expensed; <b>development</b> costs are <b>capitalized</b> once criteria are met (technical feasibility, intention and ability to complete and use or sell, probable future benefits, reliable measurement).</li>
  <li><b>US GAAP</b>: R&amp;D is generally <b>expensed</b>. Exception: software developed for sale is capitalized after technological feasibility; internal-use software costs are capitalized during the application development stage.</li>
  <li>Finite-life intangibles are amortized over their useful life; indefinite-life intangibles (some licences, trademarks) and goodwill aren't amortized but are tested for impairment.</li>
</ul>

<h3>4. Depreciation and amortization <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Method</th><th>Formula</th><th>Pattern</th></tr>
  <tr><td><b>Straight-line</b></td><td>(Cost − residual value) / useful life</td><td>Equal each year</td></tr>
  <tr><td><b>Double-declining balance</b> (accelerated)</td><td>(2 / useful life) × beginning-of-year net book value; stop when book value reaches residual value</td><td>High early, low later</td></tr>
  <tr><td><b>Units of production</b></td><td>(Cost − residual) × units this year / total expected units</td><td>Follows usage</td></tr>
</table>
<div class="ex"><b>Example:</b> Cost $10,000, residual $1,000, 5-year life.
<br>Straight-line: $1,800 a year.
<br>Double-declining balance (rate 40%): year 1 = 0.40 × 10,000 = $4,000; year 2 = 0.40 × 6,000 = $2,400; year 3 = $1,440; year 4 = $864; year 5 = $296 (just enough to reach the $1,000 residual). Note the residual value isn't subtracted when computing DDB, only used as a floor.
<br>Units of production (90,000 units expected, 20,000 used in year 1): (9,000/90,000) × 20,000 = $2,000.</div>
<ul>
  <li>Accelerated methods give lower net income early (higher later) and lower asset values; total depreciation over the life is the same.</li>
  <li><b>Estimates</b> matter: a <b>longer useful life</b> or <b>higher residual value</b> lowers annual depreciation and raises profit. Changes in estimates are applied <b>prospectively</b>.</li>
  <li>IFRS requires <b>component depreciation</b> (depreciating significant parts, e.g. an aircraft's engines and body, separately); US GAAP allows it but it's rare.</li>
  <li>Companies may use one method for reporting and another for taxes, creating deferred taxes (see Income Taxes).</li>
</ul>

<h3>5. Impairment <span class="hot">Highly tested</span></h3>
<table>
  <tr><th></th><th>IFRS</th><th>US GAAP (assets held for use)</th></tr>
  <tr><td>Test</td><td>Impaired if carrying amount &gt; <b>recoverable amount</b> = higher of (fair value − costs to sell) and <b>value in use</b> (PV of future cash flows)</td><td>Step 1 (recoverability): impaired if carrying amount &gt; <b>undiscounted</b> future cash flows</td></tr>
  <tr><td>Loss</td><td>Carrying amount − recoverable amount</td><td>Step 2: carrying amount − <b>fair value</b></td></tr>
  <tr><td>Reversal</td><td><b>Allowed</b> (not above what the carrying amount would have been), except for goodwill</td><td><b>Not allowed</b></td></tr>
</table>
<div class="ex"><b>Examples:</b> IFRS: carrying amount 900, fair value less costs to sell 700, value in use 750 → recoverable amount 750 → impairment loss 150.
<br>US GAAP: carrying amount 900, undiscounted cash flows 850 (&lt; 900, so impaired), fair value 650 → loss 250. If undiscounted cash flows were 950, there'd be no impairment even though fair value is below carrying amount.</div>
<ul>
  <li>Assets <b>held for sale</b> are stopped from depreciating and measured at the lower of carrying amount and fair value less costs to sell; later recoveries can be recognized up to previous losses.</li>
  <li>An impairment reduces assets and equity, cuts current profit (no cash effect), and lowers future depreciation, boosting future profit. Large impairments can signal past overpayment or overly optimistic estimates.</li>
</ul>

<h3>6. Revaluation model (IFRS) and derecognition</h3>
<ul>
  <li>Under the <b>revaluation model</b>, PP&amp;E (and intangibles with active markets) are carried at fair value. An <b>increase</b> goes to a <b>revaluation surplus in OCI</b>, unless it reverses an earlier loss recognized in profit. A <b>decrease</b> goes to <b>profit or loss</b>, unless it reverses an earlier surplus. Example: carrying 800 revalued to 950 → surplus of 150 in OCI; later fair value falls to 700 → the 250 decline uses up the 150 surplus first, and 100 hits profit.</li>
  <li>Revaluation raises assets and equity (lower leverage) but increases future depreciation; US GAAP doesn't permit it.</li>
  <li><b>Derecognition</b>: when an asset is sold, the gain or loss = proceeds − carrying amount, reported in the income statement (often within operating income). An abandoned asset is written off; an exchange is generally measured at fair value.</li>
</ul>

<h3>7. Analyzing fixed assets</h3>
<div class="formula">Fixed asset turnover = revenue / average net PP&amp;E</div>
<div class="formula">Average age = accumulated depreciation / annual depreciation · Average total useful life = gross PP&amp;E / annual depreciation · Remaining useful life = net PP&amp;E / annual depreciation</div>
<div class="ex"><b>Example:</b> Gross PP&amp;E 1,000, accumulated depreciation 400, annual straight-line depreciation 100 → average age 4 years, total life 10 years, remaining life 6 years. An old asset base may signal upcoming capital spending (and that the company's efficiency ratios are flattered by low book values).</div>
<p>Capex/depreciation well above 1 suggests a growing asset base; persistently below 1 may signal under-investment.</p>

<div class="how"><b>How it's tested:</b> capitalize vs expense effects on NI, assets, CFO and ratios; capitalized interest; IFRS vs US GAAP R&amp;D; DDB, straight-line and units-of-production calculations; impairment tests and losses under each standard; revaluation surplus vs P&amp;L; gains on disposal; average age and remaining life.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Identify costs to capitalize and explain the effects of capitalizing vs expensing (including capitalized interest).</li>
  <li>Describe the treatment of purchased, acquired and internally developed intangibles under IFRS and US GAAP.</li>
  <li>Calculate depreciation under straight-line, double-declining balance and units-of-production methods, and the effects of estimates.</li>
  <li>Apply impairment tests under IFRS and US GAAP, the revaluation model, and derecognition.</li>
  <li>Calculate and interpret fixed asset turnover, average age and remaining life.</li>
</ul></div>
`;

window.QB_HARD.l1lta = [
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
  ["Which cost should be capitalized as part of a machine's cost?",
    ["Installation and testing before use", "Routine annual maintenance", "Training staff to operate the machine"],
    "Costs needed to get the asset ready for its intended use are capitalized; routine maintenance and training are expensed.", "r"],
  ["A company capitalizes interest on a factory it is building for its own use. Compared with expensing that interest, in the current year the company reports:",
    ["Higher interest coverage", "Higher operating cash outflows", "Lower net income"],
    "Capitalizing reduces interest expense now (higher income and coverage); the capitalized interest is an investing outflow, not operating.", "r"],
  ["EBIT is 400, reported interest expense is 100 and the company capitalized another 50 of interest. An analyst's adjusted interest coverage ratio is closest to:",
    ["2.7×", "4.0×", "8.0×"],
    "Add capitalized interest back to interest expense: 400/(100 + 50) = 2.7×.", "c"],
  ["Compared with expensing it, capitalizing a cost will most likely result in, for the first year:",
    ["Higher cash flow from operations", "Lower total assets at year-end", "Lower reported net income"],
    "The cash outflow is classified as investing, so CFO is higher; income and assets are also higher in year 1.", "r"],
  ["A US GAAP company incurs costs to develop a new drug after it has achieved technical feasibility. These costs are:",
    ["Expensed as incurred", "Capitalized as an intangible asset", "Capitalized only if the drug is approved"],
    "US GAAP expenses R&D (except certain software costs); IFRS would capitalize development costs meeting the criteria.", "r"],
  ["A machine costs $50,000, has a residual value of $5,000 and a 4-year life. Depreciation in year 2 under the double-declining balance method is closest to:",
    ["$12,500", "$11,250", "$22,500"],
    "Rate = 2/4 = 50%. Year 1: 50% × 50,000 = 25,000; year 2: 50% × 25,000 = $12,500. (Straight-line would be $11,250.)", "c"],
  ["Equipment costing $10,000 with a $1,000 residual value is expected to produce 90,000 units. It produces 20,000 units this year. Units-of-production depreciation is:",
    ["$2,000", "$2,222", "$1,800"],
    "(10,000 − 1,000)/90,000 × 20,000 = $2,000. Ignoring residual value gives $2,222.", "c"],
  ["Extending the estimated useful life of a company's equipment will most likely:",
    ["Increase current net income", "Require restating prior years", "Increase depreciation expense"],
    "A longer life spreads the cost over more years, lowering annual depreciation and raising profit; changes in estimates are applied prospectively.", "r"],
  ["Under IFRS, an asset's recoverable amount is the:",
    ["Higher of fair value less costs to sell and value in use", "Lower of fair value less costs to sell and value in use", "Undiscounted sum of its future cash flows"],
    "IFRS compares carrying amount with the higher of the two; the undiscounted test is US GAAP's recoverability step.", "r"],
  ["Under US GAAP, an asset with a carrying amount of 900 has undiscounted future cash flows of 850 and a fair value of 650. The impairment loss is:",
    ["250", "50", "0"],
    "850 < 900, so the asset fails the recoverability test; loss = carrying amount − fair value = 900 − 650 = 250.", "c"],
  ["Which statement about reversing impairment losses on PP&E is correct?",
    ["Only IFRS permits reversals", "Both IFRS and US GAAP permit them", "Neither standard permits them"],
    "IFRS allows reversals (except goodwill); US GAAP prohibits them for assets held for use.", "r"],
  ["Under the IFRS revaluation model, an asset with a carrying amount of 800 is revalued to 950 (no previous revaluation losses). The increase is reported:",
    ["In OCI, as a revaluation surplus", "In profit or loss for the year", "As a reduction in depreciation"],
    "Increases go to the revaluation surplus in OCI unless they reverse an earlier loss recognized in profit.", "r"],
  ["Equipment with a carrying amount of $80 is sold for $110. The company reports:",
    ["A $30 gain in profit", "A $110 operating cash inflow", "A $30 increase in OCI"],
    "Gain = proceeds − carrying amount = $30 in profit; the $110 is an investing cash inflow.", "c"],
  ["A company's fixed asset turnover has risen sharply because its PP&E is old and heavily depreciated. An analyst should most likely conclude that:",
    ["Large capital spending may be needed soon", "The company is investing heavily in new assets", "Its depreciation policy is too conservative"],
    "Old, depreciated assets flatter turnover and margins; replacement spending is likely to rise.", "s"],
];

window.GLOSSARY.push(
  ["Impairment (IFRS vs US GAAP)","IFRS: carrying vs recoverable amount (higher of FV less costs to sell and value in use); reversals allowed. US GAAP: undiscounted CF test, loss to fair value; no reversals.","l1lta"],
  ["Capitalize vs expense","Capitalizing: higher NI early, higher assets/equity, higher CFO, lower CFI, smoother earnings.","l1lta"],
  ["Capitalized interest", "Interest on constructing a qualifying asset added to its cost; investing outflow; reverse for coverage analysis.", "l1lta"],
  ["R&D: IFRS vs US GAAP", "IFRS: research expensed, development capitalized if criteria met. US GAAP: R&D expensed (software exceptions).", "l1lta"],
  ["Double-declining balance", "(2/life) × beginning book value; stop at residual value.", "l1lta"],
  ["Revaluation model (IFRS)", "PP&E at fair value; increases to OCI surplus, decreases to P&L (after using surplus).", "l1lta"],
  ["Average age / remaining life", "Accumulated dep / annual dep; net PP&E / annual dep.", "l1lta"]
);
