// CFA Level I · Financial Statement Analysis · Learning module 2: Analyzing Income Statements.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1is = `
<p class="syl">CFA Level I · Financial Statement Analysis · Learning module 2 of 12 · Analyzing Income Statements</p>
<p>The income statement shows a company's performance over a period: revenue, expenses and profit. This lesson covers how it's laid out, the five-step revenue recognition model (very testable), expense recognition, how to treat non-recurring items and accounting changes, the calculation of basic and diluted earnings per share (heavily tested), common-size analysis, and other comprehensive income.</p>

<h3>1. Components and format</h3>
<table>
  <tr><th>Line</th><th>Notes</th></tr>
  <tr><td>Revenue (sales)</td><td>Amounts from the company's ordinary activities; "net revenue" is after returns and allowances</td></tr>
  <tr><td>− Cost of sales (COGS)</td><td>= <b>Gross profit</b></td></tr>
  <tr><td>− Operating expenses (selling, general and administrative; R&amp;D; depreciation)</td><td>= <b>Operating profit</b> (EBIT, roughly)</td></tr>
  <tr><td>± Non-operating items (interest expense and income, investment gains)</td><td>= Profit before tax</td></tr>
  <tr><td>− Income tax expense</td><td>= Profit from continuing operations</td></tr>
  <tr><td>± Discontinued operations (net of tax)</td><td>= <b>Net income</b>, split between the parent's shareholders and <b>non-controlling interests</b></td></tr>
</table>
<ul>
  <li><b>Multi-step</b> statements show gross profit; <b>single-step</b> statements list all expenses together.</li>
  <li>Expenses can be grouped <b>by nature</b> (raw materials, wages, depreciation) or <b>by function</b> (cost of sales, selling, administrative). IFRS allows either (with by-nature detail disclosed if by function); US GAAP public companies present by function.</li>
  <li>For financial companies, interest is an operating item.</li>
</ul>

<h3>2. Revenue recognition <span class="hot">Highly tested</span></h3>
<p>IFRS 15 and US GAAP (ASC 606) share a converged <b>five-step model</b>. The core principle: recognize revenue to depict the transfer of promised goods or services to customers, in an amount reflecting the consideration expected.</p>
<ol>
  <li><b>Identify the contract</b> with a customer (approved, enforceable rights and payment terms, commercial substance, collection probable).</li>
  <li><b>Identify the separate performance obligations</b>: promises to deliver distinct goods or services.</li>
  <li><b>Determine the transaction price</b>, including variable consideration (discounts, rebates, bonuses) only to the extent a significant reversal is unlikely.</li>
  <li><b>Allocate the transaction price</b> to the performance obligations, based on relative stand-alone selling prices.</li>
  <li><b>Recognize revenue when (or as) each performance obligation is satisfied</b>, i.e. when control passes to the customer, at a point in time or over time.</li>
</ol>
<ul>
  <li><b>Over time</b> (e.g. long-term construction or service contracts): revenue is recognized by progress toward completion, measured by input (costs incurred to date / total expected costs) or output methods. Example: a $10 million contract with $8 million of expected costs; $2 million incurred in year 1 → 25% complete → revenue $2.5 million, profit $0.5 million. If a loss is expected on the whole contract, it's recognized immediately.</li>
  <li><b>Contract liability</b> (unearned/deferred revenue): cash received before performance. <b>Contract asset</b>: performance before the right to payment is unconditional; a <b>receivable</b> once it is.</li>
  <li><b>Principal vs agent</b>: if the company controls the good or service before transfer, it's a principal and reports revenue <b>gross</b>; if it only arranges for another party to provide it (e.g. an online travel agent), it's an agent and reports revenue <b>net</b> (its commission). Net reporting lowers revenue but not profit.</li>
  <li>Warning signs: bill-and-hold arrangements, channel stuffing, large changes in contract assets or receivables relative to sales.</li>
</ul>

<h3>3. Expense recognition</h3>
<ul>
  <li>Expenses are matched with the revenue they help generate (<b>matching principle</b>) or recognized in the period they're incurred (period costs such as administrative salaries).</li>
  <li><b>Doubtful accounts</b>: estimate expected credit losses and record an allowance (contra-asset) and bad debt expense, rather than waiting for actual defaults. <b>Warranties</b>: estimate and accrue the expense when the product is sold.</li>
  <li><b>Depreciation</b> (of PP&amp;E) and <b>amortization</b> (of intangibles) allocate cost over useful life; method and estimates (life, residual value) affect reported profit (see Long-Term Assets).</li>
  <li>Analysts check whether a company's estimates (allowances, useful lives, warranty reserves) look aggressive compared with peers and its own history.</li>
</ul>

<h3>4. Non-recurring items and accounting changes <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Item</th><th>Treatment</th></tr>
  <tr><td><b>Discontinued operations</b> (a component that's been disposed of or classified as held for sale, representing a separate major line of business or region)</td><td>Reported <b>separately, net of tax, below income from continuing operations</b> (both IFRS and US GAAP)</td></tr>
  <tr><td><b>Unusual or infrequent items</b> (restructuring charges, gains on asset sales, impairments)</td><td>Included in income from continuing operations, <b>before tax</b>. "Extraordinary items" are prohibited under both IFRS and US GAAP</td></tr>
  <tr><td><b>Change in accounting policy</b> (e.g. a new standard, or changing inventory method)</td><td><b>Retrospective</b>: prior periods restated for comparability</td></tr>
  <tr><td><b>Change in accounting estimate</b> (useful life, residual value, bad debt rate)</td><td><b>Prospective</b>: current and future periods only; no restatement</td></tr>
  <tr><td><b>Correction of a prior-period error</b></td><td>Restate prior periods; disclose the nature of the error</td></tr>
</table>
<p>Analysts usually exclude discontinued operations and one-off items when forecasting, but should be sceptical of "non-recurring" charges that recur.</p>

<h3>5. Earnings per share <span class="hot">Highly tested</span></h3>
<div class="formula">Basic EPS = (net income − preferred dividends) / weighted average number of common shares outstanding</div>
<ul>
  <li><b>Weighted average shares</b>: weight each share issue or repurchase by the fraction of the year outstanding. <b>Stock splits and stock dividends</b> are applied <b>retroactively</b> to the start of the year (and to prior periods), as if they had always existed.</li>
  <li>A company with only common shares and no potentially dilutive securities has a <b>simple capital structure</b> (diluted EPS = basic EPS); otherwise it's <b>complex</b>.</li>
</ul>
<div class="formula">Diluted EPS = (NI − preferred dividends + preferred dividends on convertible preferred + after-tax interest on convertible debt) / (weighted average shares + shares from conversion of convertibles + shares from options/warrants)</div>
<ul>
  <li><b>If-converted method</b> (convertible preferred and convertible bonds): assume conversion at the start of the year (or at issue, if later). For convertible preferred, add back its dividends to the numerator; for convertible debt, add back interest × (1 − t).</li>
  <li><b>Treasury stock method</b> (options and warrants): assume exercise, with the proceeds used to buy back shares at the <b>average</b> market price. Extra shares = N × (average price − exercise price) / average price. Only in-the-money options (average price &gt; exercise price) count.</li>
  <li><b>Antidilutive</b> securities (those that would <b>increase</b> EPS) are excluded. Diluted EPS can never exceed basic EPS.</li>
</ul>
<div class="ex"><b>Worked example:</b> 1,000,000 shares at 1 January; 200,000 issued on 1 April; 100,000 repurchased on 1 October. Weighted average = 1,000,000 + 200,000 × 9/12 − 100,000 × 3/12 = <b>1,125,000</b>.
<br>Net income $2,700,000; preferred dividends $100,000 on preferred shares convertible into 200,000 common shares; options on 100,000 shares at an exercise price of $20, average share price $25.
<br>Basic EPS = (2,700,000 − 100,000)/1,125,000 = <b>$2.31</b>.
<br>Convertible preferred: numerator back to 2,700,000; shares + 200,000. Options: 100,000 × (25 − 20)/25 = 20,000 extra shares.
<br>Diluted EPS = 2,700,000/(1,125,000 + 200,000 + 20,000) = <b>$2.01</b>. (Check: the preferred alone gives 2,700,000/1,325,000 = $2.04 &lt; $2.31, so it's dilutive.)</div>
<div class="trap"><b>Trap:</b> for the treasury stock method use the <b>average</b> share price for the period, not the year-end price; and remember the tax adjustment on convertible bond interest (but not on preferred dividends, which aren't tax-deductible).</div>

<h3>6. Common-size analysis and margins</h3>
<p>A <b>common-size income statement</b> expresses every line as a percentage of revenue, making companies of different sizes, and trends over time, comparable.</p>
<div class="formula">Gross margin = gross profit / revenue · Operating margin = operating profit / revenue · Pre-tax margin = EBT / revenue · Net margin = net income / revenue</div>
<p>Higher gross margins usually reflect pricing power or a cost advantage; differences in operating margins often reflect scale and operating efficiency.</p>

<h3>7. Comprehensive income <span class="hot">Highly tested</span></h3>
<p><b>Total comprehensive income</b> = net income + <b>other comprehensive income (OCI)</b>. OCI holds gains and losses that bypass the income statement and go straight to equity (accumulated OCI):</p>
<ul>
  <li><b>Foreign currency translation adjustments</b> on foreign subsidiaries.</li>
  <li><b>Remeasurements of defined benefit pension plans</b> (actuarial gains and losses).</li>
  <li>Unrealized gains and losses on <b>debt securities measured at fair value through OCI</b> (and, under IFRS, on equity investments a company elects to measure at FVOCI).</li>
  <li>Effective portion of gains and losses on <b>cash flow hedges</b>.</li>
  <li>Under IFRS, <b>revaluation surplus</b> on PP&amp;E and intangibles under the revaluation model.</li>
</ul>
<p>Comparing companies on net income alone can mislead if one has large OCI items; analysts look at total comprehensive income too.</p>

<div class="how"><b>How it's tested:</b> ordering the five revenue steps, principal vs agent, percentage-of-completion revenue, treatment of discontinued operations, unusual items and accounting changes, weighted average shares, basic and diluted EPS (if-converted and treasury stock methods, antidilution), margins and identifying OCI items.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe income statement formats and components.</li>
  <li>Apply the five-step revenue recognition model, including over-time recognition and principal vs agent.</li>
  <li>Explain expense recognition and the treatment of non-recurring items and accounting changes.</li>
  <li>Calculate weighted average shares, basic EPS and diluted EPS, and identify antidilutive securities.</li>
  <li>Prepare and use common-size statements and margins, and identify OCI items.</li>
</ul></div>
`;

window.QB_HARD.l1is = [
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
  ["Under the five-step revenue recognition model, the final step is to:",
    ["Recognize revenue as obligations are met", "Allocate the transaction price to the obligations", "Determine the total transaction price"],
    "Steps: identify the contract → identify performance obligations → determine the price → allocate the price → recognize revenue when (or as) obligations are satisfied.", "r"],
  ["A software company sells a licence together with two years of support for one price. Under IFRS 15, it should:",
    ["Split the price by stand-alone selling prices", "Recognize all revenue when the licence is delivered", "Defer all of the revenue until support ends"],
    "The licence and support are separate performance obligations; the price is allocated by relative stand-alone selling prices and each part is recognized when satisfied.", "s"],
  ["A builder has a $10 million fixed-price contract with expected total costs of $8 million. It incurs $2 million of costs in year 1. Using an input method, year 1 revenue is closest to:",
    ["$2.5 million", "$2.0 million", "$10.0 million"],
    "Progress = 2/8 = 25%; revenue = 25% × 10 = $2.5 million (profit $0.5 million).", "c"],
  ["A customer pays a full year's subscription in advance. On receipt, the company records:",
    ["A contract liability", "Revenue for the full year", "A contract asset"],
    "Cash received before performance creates a liability; revenue is recognized as the service is delivered.", "r"],
  ["A company changes its estimate of the percentage of receivables it expects to be uncollectible. This change is applied:",
    ["Prospectively", "Retrospectively, restating prior years", "As a prior-period adjustment to retained earnings"],
    "Changes in estimates affect the current and future periods only.", "r"],
  ["A company changes its inventory method from weighted average cost to FIFO. The change is generally applied:",
    ["Retrospectively, restating prior periods", "Prospectively from the change date", "Only in the notes, with no restatement"],
    "A change in accounting policy is applied retrospectively so periods remain comparable.", "r"],
  ["A large restructuring charge that occurs infrequently is reported:",
    ["In continuing operations, before tax", "As an extraordinary item, net of tax", "In other comprehensive income"],
    "Unusual or infrequent items stay in income from continuing operations, pre-tax. Extraordinary items are prohibited under IFRS and US GAAP.", "r"],
  ["A company had 2 million shares outstanding on 1 January and issued 400,000 shares on 1 July. Net income was $5 million and preferred dividends $0.5 million. Basic EPS is closest to:",
    ["$2.05", "$2.25", "$1.88"],
    "Weighted average shares = 2,000,000 + 400,000 × 6/12 = 2,200,000. Basic EPS = 4.5/2.2 = $2.05.", "c"],
  ["A company with 1,000,000 shares outstanding all year declares a 2-for-1 stock split in November. For EPS, the weighted average number of shares for the year is:",
    ["2,000,000", "1,000,000", "1,166,667"],
    "Stock splits are applied retroactively, as if the new shares had been outstanding all year.", "c"],
  ["Options to buy 50,000 shares at $30 are outstanding; the average share price for the year was $40. Under the treasury stock method, the number of shares added to the diluted share count is closest to:",
    ["12,500", "50,000", "37,500"],
    "Proceeds 50,000 × 30 = 1,500,000 buy back 37,500 shares at $40; net new shares = 50,000 − 37,500 = 12,500.", "c"],
  ["Net income is $8 million and 4 million shares are outstanding. $10 million of 6% convertible bonds convert into 500,000 shares; the tax rate is 30%. Diluted EPS is closest to:",
    ["$1.87", "$1.91", "$2.00"],
    "Add back after-tax interest: 10m × 6% × 0.7 = 0.42m. Diluted EPS = 8.42/4.5 = $1.87 < basic $2.00, so the bonds are dilutive. Forgetting the tax adjustment gives 8.6/4.5 = $1.91.", "c"],
  ["A security is antidilutive when its assumed conversion:",
    ["Would increase EPS", "Would decrease EPS", "Would require new shares to be issued"],
    "Antidilutive securities are excluded from diluted EPS because including them would raise it.", "r"],
  ["Revenue is $2,000, cost of sales $1,200, operating expenses $500, interest expense $100 and taxes $50. The operating margin is closest to:",
    ["15%", "40%", "7.5%"],
    "Operating profit = 2,000 − 1,200 − 500 = 300; margin = 15%. Gross margin = 40%; net margin = (300 − 100 − 50)/2,000 = 7.5%.", "c"],
  ["Which of the following is reported in other comprehensive income?",
    ["Actuarial losses on a pension plan", "Gains on equity securities held for trading", "Bad debt expense on receivables"],
    "Pension remeasurements go to OCI. Trading securities' gains go to profit or loss.", "r"],
];

window.GLOSSARY.push(
  ["Five-step revenue recognition","Contract → performance obligations → transaction price → allocate → recognize when (or as) each obligation is satisfied.","l1is"],
  ["Accounting changes","Policy change and error correction: retrospective. Change in estimate: prospective.","l1is"],
  ["Basic and diluted EPS","Basic = (NI − preferred dividends) ÷ weighted shares. Diluted adds convertibles (if-converted) and options (treasury stock method) only if dilutive.","l1is"],
  ["Treasury stock method","New shares from options = N × (average price − exercise price) ÷ average price; only if exercise price < average price.","l1is"],
  ["Principal vs agent", "Controls the good before transfer → principal, gross revenue; arranges only → agent, net revenue.", "l1is"],
  ["Contract liability", "Cash received before performance (unearned revenue).", "l1is"],
  ["Discontinued operations", "Reported separately, net of tax, below continuing operations.", "l1is"],
  ["If-converted method", "Assume convertibles convert: add back preferred dividends or after-tax interest; add shares.", "l1is"],
  ["Antidilutive security", "Would increase EPS if converted; excluded from diluted EPS.", "l1is"],
  ["Other comprehensive income items", "FX translation, pension remeasurements, FVOCI debt gains, cash flow hedges, IFRS revaluation surplus.", "l1is"]
);
